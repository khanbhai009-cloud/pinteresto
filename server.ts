import express from "express";
import path from "path";
import cors from "cors";
import admin from "firebase-admin";
import { createServer as createViteServer } from "vite";
import * as dotenv from "dotenv";

dotenv.config();

// Initialize Firebase Admin safely
if (!admin.apps.length) {
  try {
    // We try to initialize with default credentials if FIREBASE_SERVICE_ACCOUNT_JSON is provided via env
    if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log("Firebase Admin initialized with service account.");
    } else {
      console.warn("WARNING: FIREBASE_SERVICE_ACCOUNT_JSON not provided. Using default initialization (may fail in production).");
      admin.initializeApp();
    }
  } catch (error) {
    console.error("Firebase Admin initialization error:", error);
  }
}

// Middleware to verify Firebase ID Token and check admin claim
const verifyAdmin = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid authorization header" });
    return;
  }
  const idToken = authHeader.split("Bearer ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (!decodedToken.admin && decodedToken.email !== "ksksysy540@gmail.com") {
       res.status(403).json({ error: "Forbidden: Admin claim missing" });
       return;
    }
    (req as any).user = decodedToken;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Block 1: API to set Admin claim for the specific email
  app.post("/api/set-admin", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      
      const idToken = authHeader.split("Bearer ")[1];
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      
      if (decodedToken.email !== "ksksysy540@gmail.com") {
        res.status(403).json({ error: "Only ksksysy540@gmail.com can be set as admin." });
        return;
      }

      await admin.auth().setCustomUserClaims(decodedToken.uid, { admin: true });
      res.json({ message: "Admin claim successfully granted. Please sign out and sign back in to refresh token." });
    } catch (error: any) {
      console.error("Error setting admin claim:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Block 2: Track Retention Hook
  app.post("/api/track-retention", async (req, res) => {
    try {
      const { slug, drop_off_paragraph_id, activeSeconds } = req.body;
      if (!slug) {
        res.status(400).json({ error: "Missing slug" });
        return;
      }

      const db = admin.firestore();
      const postRef = db.collection("blog_posts").doc(slug);
      const doc = await postRef.get();

      if (doc.exists) {
        const data = doc.data();
        let newViews = (data?.views || 0) + 1;
        
        // Simple moving average for retention
        let currentAvgRetention = data?.avg_retention_time || 0;
        let totalViews = data?.views || 0;
        let newAvgRetention = ((currentAvgRetention * totalViews) + activeSeconds) / (totalViews + 1);

        await postRef.update({
          views: newViews,
          last_drop_off_paragraph_id: drop_off_paragraph_id,
          avg_retention_time: newAvgRetention
        });

        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error: any) {
      console.error("Error tracking retention:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Block 3: Zero-Touch AI Content Optimizer
  app.post("/api/auto-optimize", verifyAdmin, async (req, res) => {
    try {
       // Find posts with low retention (placeholder logic: fetch recently failing posts)
       const db = admin.firestore();
       const postsSnapshot = await db.collection("blog_posts")
          .where("avg_retention_time", "<", 60)
          .limit(5)
          .get();
       
       const optimizedSlugs: string[] = [];

       for (const doc of postsSnapshot.docs) {
         const data = doc.data();
         const dropOffId = data.last_drop_off_paragraph_id;
         
         if (dropOffId && data.paragraphs) {
           const paras = [...data.paragraphs];
           const paraIndex = paras.findIndex((p: any) => p.id === dropOffId);
           
           if (paraIndex !== -1) {
              const originalText = paras[paraIndex].text;
              
              // Dummy LLM Re-write Placeholder
              const rewrittenText = `[AI Rewritten for higher engagement] ${originalText}`;
              paras[paraIndex] = { ...paras[paraIndex], text: rewrittenText };

              await doc.ref.update({
                 paragraphs: paras,
                 last_drop_off_paragraph_id: null, // Reset for next iteration
                 optimized_at: admin.firestore.FieldValue.serverTimestamp()
              });
              optimizedSlugs.push(doc.id);
           }
         }
       }

       res.json({ message: "Optimization complete", optimized_slugs: optimizedSlugs });
    } catch (error: any) {
      console.error("Optimization error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Block 4: Contextual Product Injection
  app.post("/api/inject-product", verifyAdmin, async (req, res) => {
    try {
      const { slug, name, price, affiliate_url } = req.body;
      
      // Determine target blog. If slug not provided, we could find recent or target blog, 
      // but let's assume slug is provided for a specific injection, or pick latest post if none.
      const db = admin.firestore();
      let targetRef;
      
      if (slug) {
         targetRef = db.collection("blog_posts").doc(slug);
      } else {
         const latestPosts = await db.collection("blog_posts").orderBy("created_at", "desc").limit(1).get();
         if (latestPosts.empty) {
           res.status(404).json({ error: "No posts found to inject product." });
           return;
         }
         targetRef = latestPosts.docs[0].ref;
      }
      
      const doc = await targetRef.get();
      const data = doc.data() || {};
      
      const paragraphs = data.paragraphs || [];
      const currentProducts = data.products || [];
      
      // Dummy AI Contextual Placement logic (always inserts after a random paragraph or paragraph middle)
      const insert_after_para = paragraphs.length > 0 ? paragraphs[Math.floor(paragraphs.length / 2)].id : 1;

      const newProduct = {
        name,
        price,
        affiliate_url,
        insert_after_para
      };

      await targetRef.update({
        products: admin.firestore.FieldValue.arrayUnion(newProduct)
      });

      res.json({ success: true, message: `Product injected after paragraph ${insert_after_para}` });
    } catch (error: any) {
      console.error("Product injection error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development & static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
