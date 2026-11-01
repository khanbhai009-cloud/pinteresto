/* Local seed data — used ONLY when FIREBASE_SERVICE_ACCOUNT is not
   configured (lib/db.ts falls back here). Shapes follow ARCHITECTURE §3.
   Products come from the verified Amazon research in
   ~/workspace/pinterest/blog-funnel/products (tracking ID finisher090-20,
   47 verified ASINs + 1 tagged-search fallback). Product images are our OWN
   pin photos used as lifestyle images (imageMode: "own", §11.4) — Amazon
   product photos are never re-hosted. There is deliberately no price field. */
import type {
  Collection, HomepageSettings, LegalSettings, Post, Product, SiteSettings, ThemeSettings,
} from "./types";

export const siteSettings: SiteSettings = {
  name: "The Cozy Canvas",
  tagline: "Little corners that feel like a warm hug.",
  pinterestUrl: "https://www.pinterest.com/swiftmart_fashion/",
  seoDefaults: {
    title: "The Cozy Canvas — Cozy Home Decor Ideas & Finds",
    description: "Curated cozy home decor ideas and honest product picks — from our Pinterest boards straight to your home.",
    ogImage: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/gar1.webp",
  },
  analyticsOn: true,
};

export const themeSettings: ThemeSettings = {
  colors: {
    primary: "#B85468", canvas: "#FBF7F2", blush: "#F7ECE8", lavender: "#F1ECF8",
    sage: "#EEF2EA", ink: "#2E2527", dark: "#2B2024",
  },
  fonts: { display: "Fraunces", body: "Inter" },
  radius: "soft",
};

export const homepageSettings: HomepageSettings = {
  sections: [
    { id: "hero", visible: true, order: 1 },
    { id: "vibes", visible: true, order: 2 },
    { id: "collections", visible: true, order: 3 },
    { id: "latest", visible: true, order: 4 },
    { id: "arrivals", visible: true, order: 5 },
  ],
  heroHook: "Little corners that feel like a warm hug.",
  heroCtaLabel: "Explore Collections",
  heroCtaLink: "/collections",
  heroSlides: [
    { imageUrl: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/gar1.webp", alt: "Thatched cottage beside a lily pond with a small waterfall", link: "/collections/bedroom", order: 1, active: true },
    { imageUrl: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bath3.webp", alt: "Freestanding bathtub in a plant-filled boho bathroom", link: "/collections/living-room", order: 2, active: true },
    { imageUrl: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv3.webp", alt: "Pastel living room with a lilac velvet sofa and marble table", link: "/collections/living-room", order: 3, active: true },
    { imageUrl: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bal3.webp", alt: "Balcony sofa under hanging wisteria and fairy lights", link: "/collections/bedroom", order: 4, active: true },
    { imageUrl: "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed23.webp", alt: "Pink round bed under a glowing cloud ceiling", link: "/collections/bedroom", order: 5, active: true },
  ],
  autoSlide: true,
  slideMs: 3500,
};

export const legalSettings: LegalSettings = {
  disclosureText: "As an Amazon Associate I earn from qualifying purchases. This post contains affiliate links — if you buy something through one of these links, we may earn a small commission at no extra cost to you. It helps us keep creating cozy inspiration.",
  footerDisclaimer: "As an Amazon Associate I earn from qualifying purchases.",
  privacyHtml: "<p>We keep this simple: this site has no accounts and asks for nothing but — only if you choose to join the newsletter — your email address. It sets no tracking cookies, and we never sell personal data.</p><p>We count page views and clicks in aggregate (which pages are read, which product links are tapped, rough country and device type) so we can tell which guides are useful. Those counts are anonymous — they are stored as daily totals, and the anonymous visitor token used to avoid double-counting is deleted within two days.</p><p><strong>Newsletter emails.</strong> If you subscribe, we store your email address only to send you Cozy Canvas updates — new guides, collections and finds. That is the only thing it is ever used for: we never sell it, rent it or share it with advertisers. Every email includes an unsubscribe link, and unsubscribing removes you from future sends. You can also ask us through the Contact page to delete your address entirely, and we will.</p><p>Product links lead to Amazon, whose own privacy policy applies once you are on their site. If you follow us on Pinterest, Pinterest's policy applies there.</p><p>Questions about privacy? Reach us through the Contact page.</p>",
  affiliateDisclosureHtml: "<p>As an Amazon Associate I earn from qualifying purchases.</p><p>Some links on The Cozy Canvas are affiliate links. When you buy a product through one of those links, we may earn a small commission from Amazon — always at no extra cost to you. It is one of the ways this little site keeps running.</p><p>We only feature products that genuinely fit the rooms and pins we share, and we never let a commission decide what appears here. Prices and availability change on Amazon without notice, so the price shown on Amazon at checkout is the one that applies.</p><p>Product images shown as lifestyle photos are our own. Where a product photo comes from Amazon, it is served directly from Amazon's own links.</p>",
};

export const collections: Collection[] = [
  {
    "id": "col-bedroom",
    "name": "Bedroom",
    "slug": "bedroom",
    "tint": "blush",
    "coverImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed15.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed23.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed3.webp"
    ],
    "order": 1,
    "showOnHome": true
  },
  {
    "id": "col-living-room",
    "name": "Living Room",
    "slug": "living-room",
    "tint": "lavender",
    "coverImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv7.webp"
    ],
    "order": 2,
    "showOnHome": true
  },
  {
    "id": "col-vanity",
    "name": "Vanity",
    "slug": "vanity",
    "tint": "sage",
    "coverImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van6.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van2.webp"
    ],
    "order": 3,
    "showOnHome": true
  },
  {
    "id": "col-desk",
    "name": "Cozy Desk",
    "slug": "cozy-desk",
    "tint": "card",
    "coverImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok2.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok5.webp"
    ],
    "order": 4,
    "showOnHome": true
  }
];

export const products: Product[] = [
  {
    "id": "b0dw3lt68w",
    "name": "Topfinel Throw Pillow Covers",
    "description": "Layered velvet pillows are the signature touch that makes a living room feel curated. The crisp white set pairs effortlessly with any sofa color.",
    "asin": "B0DW3LT68W",
    "amazonUrl": "https://www.amazon.com/dp/B0DW3LT68W/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed3.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0fsqp1f4f",
    "name": "Bedsure Rose Pink Duvet Cover Set 3-Piece",
    "description": "Blush rose pink appears again and again in cozy bedroom inspiration, and this duvet cover set captures that exact beloved shade. The prewashed fabric feels soft from the very first night.",
    "asin": "B0FSQP1F4F",
    "amazonUrl": "https://www.amazon.com/dp/B0FSQP1F4F/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed5.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0852wlh7m",
    "name": "Ophanie Fluffy Area Rug",
    "description": "A fluffy rug under the chair turns the desk area into its own cozy zone. The listing also offers cream and beige variants for a softer look.",
    "asin": "B0852WLH7M",
    "amazonUrl": "https://www.amazon.com/dp/B0852WLH7M/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed7.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0cj6nl33d",
    "name": "LAMIT Cream Linen Curtain Pair",
    "description": "Cream linen curtains behind your vanity filter gentle daylight for flawless makeup application. The two‑panel set creates a bright, airy backdrop that vanity pins adore.",
    "asin": "B0CJ6NL33D",
    "amazonUrl": "https://www.amazon.com/dp/B0CJ6NL33D/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed9.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0df87s24q",
    "name": "SAMIAH LUXE Chunky Knit Throw",
    "description": "A buttercream chunky knit throw draped over the sofa arm is the coziest element in every living room pin. A budget-friendly alternative is noted in the bedroom file for reference.",
    "asin": "B0DF87S24Q",
    "amazonUrl": "https://www.amazon.com/dp/B0DF87S24Q/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed11.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b00jr5n0jm",
    "name": "Minetom Warm Fairy Lights",
    "description": "A warm fairy‑light string behind the monitor or shelf gives a soft glow to non‑gaming desks. It creates a gentle ambiance that feels inviting.",
    "asin": "B00JR5N0JM",
    "amazonUrl": "https://www.amazon.com/dp/B00JR5N0JM/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed13.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0f1sph2c5",
    "name": "Mkono Artificial Flower Vase",
    "description": "A small white vase with flowers on the desk corner adds the final cozy touch to a tech‑heavy setup. The listing also offers other colors such as blue.",
    "asin": "B0F1SPH2C5",
    "amazonUrl": "https://www.amazon.com/dp/B0F1SPH2C5/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed17.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dw3s8pm3",
    "name": "Der Rose Faux Hanging Plants",
    "description": "Hanging eucalyptus from a shelf above the desk adds a green break to screen‑heavy setups. It’s a staple element in every cozy desk inspiration.",
    "asin": "B0DW3S8PM3",
    "amazonUrl": "https://www.amazon.com/dp/B0DW3S8PM3/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed19.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f5wdc64g",
    "name": "LOAKEKEL Nightstand with Charging Station LED",
    "description": "An LED glow and built-in charging station make this nightstand a perfect match for the modern bedside setups seen in cozy bedroom pins. The two fabric drawers keep essentials tidy while the light adds a warm ambiance.",
    "asin": "B0F5WDC64G",
    "amazonUrl": "https://www.amazon.com/dp/B0F5WDC64G/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed3.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f2mbl1l2",
    "name": "HARRITPURE Gold Arched Wall Mirror 16x24 inch",
    "description": "A gold arched mirror above the dresser serves as the hero piece in countless vintage-cozy bedroom pins. The aluminum alloy frame keeps it lightweight while delivering that elegant curved silhouette.",
    "asin": "B0F2MBL1L2",
    "amazonUrl": "https://www.amazon.com/dp/B0F2MBL1L2/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed5.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f5h17s8v",
    "name": "BarnFurin Queen Bed Frame Cloud Boucle Headboard Pink",
    "description": "The rose pink boucle cloud headboard matches the padded headboard look seen throughout cozy bedroom inspiration perfectly. Since a strong standalone headboard option was not available, this bed frame with integrated headboard serves as a reliable substitute.",
    "asin": "B0F5H17S8V",
    "amazonUrl": "https://www.amazon.com/dp/B0F5H17S8V/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed7.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g42qlwxf",
    "name": "KAIRNE Botanical Framed Canvas Set",
    "description": "A cream botanical triptych above the sofa delivers the gallery-wall look seen in top living room pins. No strong budget alternative matched this ready-made set.",
    "asin": "B0G42QLWXF",
    "amazonUrl": "https://www.amazon.com/dp/B0G42QLWXF/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed9.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g3qtvwm7",
    "name": "Vesgantti Deep Seat Loveseat",
    "description": "A beige deep-seat loveseat anchors the neutral palette seen in so many cozy living room pins. Keep it in the hero shot for that curated look.",
    "asin": "B0G3QTVWM7",
    "amazonUrl": "https://www.amazon.com/dp/B0G3QTVWM7/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv2.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b013i50z30",
    "name": "Alaterre Pomona Wood Coffee Table",
    "description": "Warm rustic wood brings the exact warm-wood palette that defines cozy living room pins. This solid wood piece from a trusted brand adds authentic character.",
    "asin": "B013I50Z30",
    "amazonUrl": "https://www.amazon.com/dp/B013I50Z30/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv4.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g5yhlmz4",
    "name": "Wfmolcand 24‑Pack Scented Soy Candles",
    "description": "Place these natural soy candles on your vanity tray for a calming self‑care moment. Their long‑lasting scent makes every beauty routine feel like a spa retreat.",
    "asin": "B0G5YHLMZ4",
    "amazonUrl": "https://www.amazon.com/dp/B0G5YHLMZ4/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv6.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "search-living-room-pouf",
    "name": "Knit Pouf Ottoman Search",
    "description": "A knit pouf adds texture and extra seating that completes the layered living room look. Replace this search link with a well-reviewed knit pouf when the page goes live.",
    "asin": "",
    "amazonUrl": "https://www.amazon.com/s?k=knitted+pouf+ottoman&tag=finisher090-20 (search link)",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv8.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f9pfb5st",
    "name": "Fun Memories Floating Shelves",
    "description": "Warm‑wood floating shelves above the desk display figures and plants, matching the wall styling seen in setup pins. They’re the exact shelf type even though they have fewer reviews.",
    "asin": "B0F9PFB5ST",
    "amazonUrl": "https://www.amazon.com/dp/B0F9PFB5ST/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv9.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0fwr8fm83",
    "name": "Xixini Fluted Vanity Desk with LED Mirror",
    "description": "This white fluted vanity desk comes with an integrated LED mirror and charging station, giving you a complete vanity hero in one piece. It anchors the whole look and makes getting ready feel effortless.",
    "asin": "B0FWR8FM83",
    "amazonUrl": "https://www.amazon.com/dp/B0FWR8FM83/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van2.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07sdlk4zg",
    "name": "FENCHILIN Hollywood Lighted Makeup Mirror",
    "description": "This white Hollywood mirror with 15 dimmable bulbs is the iconic piece every vanity needs. Its adjustable brightness gives you perfect lighting for any makeup look.",
    "asin": "B07SDLK4ZG",
    "amazonUrl": "https://www.amazon.com/dp/B07SDLK4ZG/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van3.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0fz8nhll7",
    "name": "Jywantful Rotating Makeup Organizer",
    "description": "The 360° rotating organizer keeps lipsticks and skincare neatly displayed on your countertop. Its multiple compartments make a tidy vanity effortless to maintain.",
    "asin": "B0FZ8NHLL7",
    "amazonUrl": "https://www.amazon.com/dp/B0FZ8NHLL7/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van4.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0c4km4c94",
    "name": "Koville Travertine Perfume Tray",
    "description": "A natural travertine stone tray elegantly showcases your perfume bottles and candles. Its wabi‑sabi texture adds a luxurious, grounding touch to any vanity.",
    "asin": "B0C4KM4C94",
    "amazonUrl": "https://www.amazon.com/dp/B0C4KM4C94/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van7.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g5175pzq",
    "name": "ONXE Rotating Brush Holder with Lid",
    "description": "A rotating brush holder with a lid keeps your makeup tools dust‑free and organized. Its five compartments make a clutter‑free vanity top easy to achieve.",
    "asin": "B0G5175PZQ",
    "amazonUrl": "https://www.amazon.com/dp/B0G5175PZQ/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van8.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0b41ybq9j",
    "name": "ErGear Electric Standing Desk",
    "description": "A clean white desk forms a cozy base for both work and gaming setups. Its compact 40‑inch size fits perfectly in smaller rooms.",
    "asin": "B0B41YBQ9J",
    "amazonUrl": "https://www.amazon.com/dp/B0B41YBQ9J/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok4.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dzckgdyz",
    "name": "GravaStar Wireless Mechanical Keyboard",
    "description": "The sakura‑pink mechanical keyboard becomes the hero piece of a pink desk. Its color and RGB lighting match the aesthetic perfectly.",
    "asin": "B0DZCKGDYZ",
    "amazonUrl": "https://www.amazon.com/dp/B0DZCKGDYZ/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok6.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0frmndrdy",
    "name": "Dowinx Ergonomic Gaming Chair",
    "description": "The pink gaming chair serves as the centerpiece of any pink setup. Its footrest and cute aesthetic are exactly what the audience loves.",
    "asin": "B0FRMNDRDY",
    "amazonUrl": "https://www.amazon.com/dp/B0FRMNDRDY/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok7.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b09dvl5gk9",
    "name": "Logitech Wireless Mouse",
    "description": "The rose‑pink compact mouse adds a small but eye‑catching accent to a white or pink desk. It’s a trusted brand that fits a cozy budget.",
    "asin": "B09DVL5GK9",
    "amazonUrl": "https://www.amazon.com/dp/B09DVL5GK9/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok8.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0d3fgfppb",
    "name": "Dell 27‑inch QHD Monitor",
    "description": "The ash‑white bezel lets this 27‑inch monitor blend seamlessly into white setups. Unlike black monitors, it keeps the cozy palette intact.",
    "asin": "B0D3FGFPPB",
    "amazonUrl": "https://www.amazon.com/dp/B0D3FGFPPB/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok9.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f1crd5wy",
    "name": "IMAYONDIA Pink Desk Mat",
    "description": "The pink kawaii moon‑bunny desk mat adds the most visible cozy layer to a desk. It’s an affordable way to bring personality to the workspace.",
    "asin": "B0F1CRD5WY",
    "amazonUrl": "https://www.amazon.com/dp/B0F1CRD5WY/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok10.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07n1cmgqq",
    "name": "Govee Smart RGB LED Strips",
    "description": "An RGB backlight behind the desk defines the gaming aesthetic. This smart strip works with voice assistants for easy control.",
    "asin": "B07N1CMGQQ",
    "amazonUrl": "https://www.amazon.com/dp/B07N1CMGQQ/?tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok4.webp",
    "ctaLabel": "Check Price on Amazon",
    "featured": true,
    "active": true
  }
];

export const posts: Post[] = [
  {
    "id": "post-bedroom",
    "title": "Top Bedroom Products",
    "slug": "top-bedroom-products",
    "hook": "Soft layers, warm light and the little pieces that make a bedroom feel like a hug.",
    "collectionId": "col-bedroom",
    "status": "published",
    "publishAt": null,
    "tint": "blush",
    "heroImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed23.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed15.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed9.webp"
    ],
    "intro": "Every bedroom in our most-saved pins is built from the same quiet ingredients: layered bedding, something soft underfoot, curtains that glow at golden hour and a little warm light after dark. These are the exact kinds of pieces that create that look, gathered in one place.",
    "closingNote": "Start with one layer — the rug or the fairy lights — and the whole room softens. Save this guide to your bedroom board so the list is there when you are ready to shop the look.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0dw3lt68w"
      },
      {
        "productId": "b0fsqp1f4f"
      },
      {
        "productId": "b0852wlh7m"
      },
      {
        "productId": "b0cj6nl33d"
      },
      {
        "productId": "b0df87s24q"
      },
      {
        "productId": "b00jr5n0jm"
      },
      {
        "productId": "b0f1sph2c5"
      },
      {
        "productId": "b0dw3s8pm3"
      },
      {
        "productId": "b0f5wdc64g"
      },
      {
        "productId": "b0f2mbl1l2"
      },
      {
        "productId": "b0f5h17s8v"
      },
      {
        "productId": "b0g42qlwxf"
      }
    ],
    "seo": {
      "title": "Top Bedroom Products — Shop the Look | The Cozy Canvas",
      "description": "Soft layers, warm light and the little pieces that make a bedroom feel like a hug.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed23.webp"
    },
    "createdAt": 1761000000000,
    "updatedAt": 1761000000000
  },
  {
    "id": "post-living-room",
    "title": "Top Living Room Products",
    "slug": "top-living-room-products",
    "hook": "The cushions, rugs and glowy corners behind our most-loved living room pins.",
    "collectionId": "col-living-room",
    "status": "published",
    "publishAt": null,
    "tint": "lavender",
    "heroImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv7.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv2.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv9.webp"
    ],
    "intro": "Our living room pins that get saved again and again all share a formula: a soft base, pillows you can sink into, warm pools of light and a few natural textures. Here are the pieces that build that feeling, one corner at a time.",
    "closingNote": "You do not need a full makeover — two or three of these in the right corner change the whole mood. Pin this guide for your next slow Sunday refresh.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0dw3lt68w"
      },
      {
        "productId": "b0g3qtvwm7"
      },
      {
        "productId": "b0f1sph2c5"
      },
      {
        "productId": "b0852wlh7m"
      },
      {
        "productId": "b013i50z30"
      },
      {
        "productId": "b0g5yhlmz4"
      },
      {
        "productId": "b0cj6nl33d"
      },
      {
        "productId": "b0df87s24q"
      },
      {
        "productId": "b00jr5n0jm"
      },
      {
        "productId": "search-living-room-pouf"
      },
      {
        "productId": "b0g42qlwxf"
      },
      {
        "productId": "b0f9pfb5st"
      }
    ],
    "seo": {
      "title": "Top Living Room Products — Shop the Look | The Cozy Canvas",
      "description": "The cushions, rugs and glowy corners behind our most-loved living room pins.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv3.webp"
    },
    "createdAt": 1760913600000,
    "updatedAt": 1760913600000
  },
  {
    "id": "post-vanity",
    "title": "Top Vanity Products",
    "slug": "top-vanity-products",
    "hook": "Mirrors, trays and little luxuries for a vanity corner that feels like a boutique.",
    "collectionId": "col-vanity",
    "status": "published",
    "publishAt": null,
    "tint": "sage",
    "heroImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van6.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van2.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van8.webp"
    ],
    "intro": "A vanity is the smallest room-within-a-room, and our favourite pins treat it like a tiny boutique: good light, a beautiful mirror, and every small thing given a pretty place to live. These picks recreate that corner piece by piece.",
    "closingNote": "Light first, mirror second, then the little luxuries — that order never fails. Save this to your vanity board for later.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0fwr8fm83"
      },
      {
        "productId": "b00jr5n0jm"
      },
      {
        "productId": "b0f1sph2c5"
      },
      {
        "productId": "b0g5yhlmz4"
      },
      {
        "productId": "b07sdlk4zg"
      },
      {
        "productId": "b0fz8nhll7"
      },
      {
        "productId": "b0dw3s8pm3"
      },
      {
        "productId": "b0c4km4c94"
      },
      {
        "productId": "b0852wlh7m"
      },
      {
        "productId": "b0cj6nl33d"
      },
      {
        "productId": "b0f9pfb5st"
      },
      {
        "productId": "b0g5175pzq"
      }
    ],
    "seo": {
      "title": "Top Vanity Products — Shop the Look | The Cozy Canvas",
      "description": "Mirrors, trays and little luxuries for a vanity corner that feels like a boutique.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van5.webp"
    },
    "createdAt": 1760827200000,
    "updatedAt": 1760827200000
  },
  {
    "id": "post-desk",
    "title": "Cozy Desk Setup Finds",
    "slug": "cozy-desk-setup-finds",
    "hook": "Warm light, soft colour and calm order for a desk you actually want to sit at.",
    "collectionId": "col-desk",
    "status": "published",
    "publishAt": null,
    "tint": "card",
    "heroImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok2.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok5.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok7.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok4.webp"
    ],
    "intro": "The desk setups our followers save most are never the stark ones — they glow a little, they have something green nearby, and every cable has gone into hiding. These finds build that warm, focused corner.",
    "closingNote": "One warm light and one tidy tray can change how a whole workday feels. Pin this guide to your desk-inspiration board.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0b41ybq9j"
      },
      {
        "productId": "b0dzckgdyz"
      },
      {
        "productId": "b0frmndrdy"
      },
      {
        "productId": "b09dvl5gk9"
      },
      {
        "productId": "b0d3fgfppb"
      },
      {
        "productId": "b0f1crd5wy"
      },
      {
        "productId": "b00jr5n0jm"
      },
      {
        "productId": "b0dw3s8pm3"
      },
      {
        "productId": "b0852wlh7m"
      },
      {
        "productId": "b0f9pfb5st"
      },
      {
        "productId": "b07n1cmgqq"
      },
      {
        "productId": "b0f1sph2c5"
      }
    ],
    "seo": {
      "title": "Cozy Desk Setup Finds — Shop the Look | The Cozy Canvas",
      "description": "Warm light, soft colour and calm order for a desk you actually want to sit at.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok2.webp"
    },
    "createdAt": 1760740800000,
    "updatedAt": 1760740800000
  }
];
