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
  },
  {
    "id": "col-seasonal",
    "name": "Seasonal Decor",
    "slug": "seasonal-decor",
    "tint": "primary-soft",
    "coverImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed1.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bal3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed11.webp"
    ],
    "order": 5,
    "showOnHome": true
  }
];

export const products: Product[] = [
  {
    "id": "b0dw3lt68w",
    "name": "Velvet Throw Pillow Covers",
    "description": "Velvet pillow covers are a five-minute change that makes a plain bed look styled on purpose. The soft sheen and layered colours do the work: two blush, two cream, and the whole bed looks dressed. They zip off for washing and swap easily with the seasons, so pick shades that fit your bedding and your light.",
    "asin": "B0DW3LT68W",
    "amazonUrl": "https://www.amazon.com/s?k=velvet+throw+pillow+covers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81DfqKRuD+L._AC_SL1500_.jpg",
    "ctaLabel": "See these pillow covers on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "Plain beds and sofas that need instant softness and colour.",
    "whyWeLike": "The velvet sheen keeps flat bedding from looking plain, and the covers zip off for washing.",
    "keepInMind": "These are covers only \u2014 check your insert size before ordering."
  },
  {
    "id": "b0fsqp1f4f",
    "name": "Rose Pink Duvet Cover Set",
    "description": "The duvet is the layer that decides the mood of the room before anything else goes on the bed. This rose pink cover wraps the bed in a soft blush tone, and the prewashed fabric feels gentle from the first night. Choose the shade depth that suits your walls: pale for airy, deeper for a cocoon feel.",
    "asin": "B0FSQP1F4F",
    "amazonUrl": "https://www.amazon.com/s?k=rose+pink+duvet+cover+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81nErka5oiL._AC_SL1500_.jpg",
    "ctaLabel": "View this duvet set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Setting a soft blush mood across the whole bed in one step.",
    "whyWeLike": "Prewashed fabric feels gentle from the first night, and the rose colour sets the palette for the whole bed.",
    "keepInMind": "Duvet insert and shams may be sold separately \u2014 check what the set includes."
  },
  {
    "id": "b0852wlh7m",
    "name": "Fluffy Shag Area Rug",
    "description": "This is the first thing your feet meet in the morning, so it should be soft. A deep, fluffy rug beside the bed takes away the cold-floor shock and marks the sleeping corner off from the rest of the room. Cream and beige versions soften almost any palette. Pick the size that tucks a little way under the bed.",
    "asin": "B0852WLH7M",
    "amazonUrl": "https://www.amazon.com/s?k=fluffy+shag+area+rug&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91K7mNd8eyL._AC_SL1500_.jpg",
    "ctaLabel": "Check this rug on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "Cold floors beside the bed, first thing in the morning.",
    "whyWeLike": "The deep shag pile softens the room and marks off the sleeping corner.",
    "keepInMind": "Shag needs a shake-out and gentle vacuuming; measure so it tucks a little under the bed."
  },
  {
    "id": "b0cj6nl33d",
    "name": "Cream Linen Curtains",
    "description": "Cream linen panels filter the sun into a golden, hazy glow while still giving you privacy. The natural weave keeps the room feeling airy rather than dressed up.",
    "asin": "B0CJ6NL33D",
    "amazonUrl": "https://www.amazon.com/s?k=cream+linen+curtains&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71iNwk-07iL._AC_SL1500_.jpg",
    "ctaLabel": "See these curtains on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Harsh sun that needs softening into a warm, hazy glow.",
    "whyWeLike": "The natural linen weave filters light while keeping privacy and an airy feel.",
    "keepInMind": "Linen wrinkles \u2014 steam after hanging, and choose a length that just kisses the floor."
  },
  {
    "id": "b0df87s24q",
    "name": "Chunky Knit Throw Blanket",
    "description": "Draped over the foot of the bed, a chunky knit throw adds the hand-made texture plain bedding is missing, and it stays within reach for reading-in-bed evenings. Buttercream goes with nearly everything. Pick the weight that fits your climate.",
    "asin": "B0DF87S24Q",
    "amazonUrl": "https://www.amazon.com/s?k=chunky+knit+throw+blanket&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81lUSTeBjFL._AC_SL1500_.jpg",
    "ctaLabel": "View this throw on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The foot of the bed, and reading-in-bed evenings.",
    "whyWeLike": "Chunky hand-knit texture adds the layer plain bedding is missing, in a goes-with-everything cream.",
    "keepInMind": "Chunky knits can snag on jewellery and pet claws \u2014 fold it out of their way."
  },
  {
    "id": "b00jr5n0jm",
    "name": "Warm Fairy String Lights",
    "description": "A warm fairy-light strand looped along the headboard or a shelf replaces harsh ceiling light with a soft, sleepy shimmer, and it may be the simplest change in this whole guide. Choose a strand length that fits your headboard or window.",
    "asin": "B00JR5N0JM",
    "amazonUrl": "https://www.amazon.com/s?k=warm+fairy+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/719YW+YRHzL._AC_SL1500_.jpg",
    "ctaLabel": "See these fairy lights on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "Swapping harsh ceiling light for a sleepy evening shimmer.",
    "whyWeLike": "One strand along the headboard changes the mood of the whole room in minutes.",
    "keepInMind": "Measure your headboard or window first \u2014 strand lengths vary a lot."
  },
  {
    "id": "b0f1sph2c5",
    "name": "Ceramic Vase with Faux Flowers",
    "description": "A small vase with soft faux blooms makes a dresser look finished instead of forgotten. The blooms bring a soft, living shape to flat surfaces, and they never wilt, drop petals or need watering. Pick bloom tones that echo your bedding for an easy, pulled-together feel.",
    "asin": "B0F1SPH2C5",
    "amazonUrl": "https://www.amazon.com/s?k=ceramic+vase+with+faux+flowers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61NzxAduRhL._AC_SL1500_.jpg",
    "ctaLabel": "View this vase on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dressers and shelves that look flat and unfinished.",
    "whyWeLike": "Soft faux blooms give a living shape with no watering, wilting or petal-drop.",
    "keepInMind": "It is a small accent \u2014 check the height against your dresser space."
  },
  {
    "id": "b0dw3s8pm3",
    "name": "Faux Hanging Plants",
    "description": "Faux hanging plants soften high, empty corners and bring trailing greenery into the bedroom without a single watering can. Choose a trailing length that fits your shelf height and let it spill.",
    "asin": "B0DW3S8PM3",
    "amazonUrl": "https://www.amazon.com/s?k=faux+hanging+plants&tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed19.webp",
    "ctaLabel": "See these hanging plants on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "High, empty corners and shelves that need softening.",
    "whyWeLike": "Trailing greenery brings the outdoors in, with zero watering to remember.",
    "keepInMind": "Dust settles on the leaves \u2014 a quick wipe now and then keeps them looking real."
  },
  {
    "id": "b0f5wdc64g",
    "name": "Nightstand with Charging Station",
    "description": "No more cable tangle glowing in the dark. A nightstand with built-in charging and a soft LED glow keeps your phone, book and glass of water in one place, and the drawers hide the clutter that used to live on top. Pick the finish that matches your bed frame.",
    "asin": "B0F5WDC64G",
    "amazonUrl": "https://www.amazon.com/s?k=nightstand+with+charging+station&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ipPLK-lxL._AC_SL1500_.jpg",
    "ctaLabel": "View this nightstand on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Bedside cable chaos \u2014 phone, book and lamp all in one calm spot.",
    "whyWeLike": "Built-in charging keeps cables tidy, and the drawers hide what used to live on top.",
    "keepInMind": "Some assembly is needed; check the drawer layout suits what you keep bedside."
  },
  {
    "id": "b0f2mbl1l2",
    "name": "Arched Gold Wall Mirror",
    "description": "An arched gold mirror above the dresser bounces daylight around the room, softens all the straight lines of bedroom furniture and gives you a proper getting-ready spot. Choose the size that suits your dresser width. A little oversized is the trick.",
    "asin": "B0F2MBL1L2",
    "amazonUrl": "https://www.amazon.com/s?k=arched+gold+wall+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81czqFS25GL._AC_SL1500_.jpg",
    "ctaLabel": "See this mirror on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dark bedrooms that need more light and a grander feel.",
    "whyWeLike": "The arched shape softens boxy furniture lines while bouncing daylight around the room.",
    "keepInMind": "Hang it a touch oversized for the dresser \u2014 and use proper wall anchors."
  },
  {
    "id": "b0f5h17s8v",
    "name": "Boucle Cloud Bed Frame",
    "description": "A blush boucle bed frame with a cloud-soft headboard turns the bed into a padded centrepiece you can lean into with a book. If your room leans neutral, the pink is softer than you think. Pick the size that fits your mattress and your space.",
    "asin": "B0F5H17S8V",
    "amazonUrl": "https://www.amazon.com/s?k=boucle+upholstered+bed+frame&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81dAMwX116L._AC_SL1500_.jpg",
    "ctaLabel": "View this bed frame on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Making the bed the padded centrepiece of the whole room.",
    "whyWeLike": "Boucle texture and a cloud-soft headboard you can lean into with a book.",
    "keepInMind": "It is a big, heavy piece \u2014 measure doorways and the room before ordering."
  },
  {
    "id": "b0g42qlwxf",
    "name": "Botanical Framed Canvas Wall Art Set",
    "description": "For the bare wall above the bed, a set of botanical framed canvases brings gentle green shapes and a gallery rhythm to the biggest empty surface in the room, without the commitment of paint or wallpaper. Hang them in a row or a loose grid, and choose the set size that fits your wall.",
    "asin": "B0G42QLWXF",
    "amazonUrl": "https://www.amazon.com/s?k=botanical+framed+canvas+wall+art+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71qr9rT481L._AC_SL1500_.jpg",
    "ctaLabel": "See this wall art set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The bare wall above the bed.",
    "whyWeLike": "Gentle botanical greens bring gallery rhythm without paint or wallpaper commitment.",
    "keepInMind": "Lay the arrangement out on the floor first \u2014 a row and a loose grid feel very different."
  },
  {
    "id": "b0g3qtvwm7",
    "name": "Deep Seat Loveseat",
    "description": "Everyone hopes this seat is free when they walk into the room. A deep, sink-in loveseat gives the living room a true anchor, somewhere to curl up sideways with a book, a blanket and nowhere to be. Soft neutral upholstery keeps it easy to style around. Pick the shade that sits happily with your rug and cushions.",
    "asin": "B0G3QTVWM7",
    "amazonUrl": "https://www.amazon.com/s?k=deep+seat+loveseat&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81XW1YWY27L._AC_SL1500_.jpg",
    "ctaLabel": "View this loveseat on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Curling up sideways with a book, a blanket and nowhere to be.",
    "whyWeLike": "A true sink-in seat that anchors the whole room, in upholstery that styles easily.",
    "keepInMind": "Deep seats suit loungers more than upright sitters; measure your doorway width."
  },
  {
    "id": "b013i50z30",
    "name": "Rustic Wood Coffee Table",
    "description": "A solid wood coffee table grounds the seating area with real grain and a little rustic character, and it is sturdy enough for feet, trays and board games alike. Choose the finish that picks up the warm tones already in your room.",
    "asin": "B013I50Z30",
    "amazonUrl": "https://www.amazon.com/s?k=rustic+wood+coffee+table&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Ob-n5D+NL._AC_SL1500_.jpg",
    "ctaLabel": "Check this coffee table on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Grounding the seating area with warm, real grain.",
    "whyWeLike": "Sturdy enough for feet, trays and board games \u2014 the whole room gathers around it.",
    "keepInMind": "Solid wood is heavy, and hot mugs want coasters."
  },
  {
    "id": "b0g5yhlmz4",
    "name": "Scented Soy Candle Set",
    "description": "A set of little scented soy candles scattered on a tray or shelf gives the room warm flickering light and a soft, calming scent. Pick the scent family that feels like you, and keep a few in reserve for slow Sundays.",
    "asin": "B0G5YHLMZ4",
    "amazonUrl": "https://www.amazon.com/s?k=scented+soy+candle+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71N4qaoxNpL._AC_SL1500_.jpg",
    "ctaLabel": "See these candles on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Ordinary evenings that deserve a little ceremony.",
    "whyWeLike": "Several small candles mean warm flicker and soft scent can live on every surface.",
    "keepInMind": "Never leave flames unattended, and trim wicks so the candles burn clean."
  },
  {
    "id": "search-living-room-pouf",
    "name": "Knit Pouf Ottoman",
    "description": "A chunky knit pouf adds soft, handmade texture at ankle height. It works as a footrest, an extra seat or a side table for a cup of tea, and it tucks happily into any empty corner. Pick the colour that echoes your cushions and throw.",
    "asin": "B07RXKXMTS",
    "amazonUrl": "https://www.amazon.com/s?k=knitted+pouf+ottoman&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81-7-w67DPL._AC_SL1500_.jpg",
    "ctaLabel": "View this pouf on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A footrest, spare seat or tea-tray table in any empty corner.",
    "whyWeLike": "Chunky knit texture at ankle height, and light enough to carry room to room.",
    "keepInMind": "Knit gives a little with heavy daily sitting \u2014 best as an occasional seat."
  },
  {
    "id": "b0f9pfb5st",
    "name": "Floating Wall Shelves",
    "description": "Floating shelves turn dead space above a sofa, desk or vanity into a styled little gallery for plants, frames and favourite things, without a bulky bookcase eating the floor. Choose the wood tone that matches your other furniture, and the length that fits your wall.",
    "asin": "B0F9PFB5ST",
    "amazonUrl": "https://www.amazon.com/s?k=floating+wall+shelves&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81pW-8hQtlL._AC_SL1500_.jpg",
    "ctaLabel": "See these shelves on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dead wall space above sofas, desks and vanities.",
    "whyWeLike": "A styled gallery ledge for plants and frames, without a bulky bookcase eating the floor.",
    "keepInMind": "Use proper wall anchors and do not overload \u2014 floating shelves have modest limits."
  },
  {
    "id": "b0fwr8fm83",
    "name": "Fluted Vanity Desk with LED Mirror",
    "description": "A fluted vanity desk with a built-in LED mirror and charging gives you light, storage and a beautiful surface in one footprint, so there is no more getting ready hunched over a bathroom sink. Pick the size that fits your corner.",
    "asin": "B0FWR8FM83",
    "amazonUrl": "https://www.amazon.com/s?k=vanity+desk+with+led+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81gpHIivHvL._AC_SL1500_.jpg",
    "ctaLabel": "View this vanity desk on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Turning a bedroom corner into a proper getting-ready spot.",
    "whyWeLike": "Light, storage and a beautiful surface in one footprint \u2014 no more bathroom-sink routine.",
    "keepInMind": "Check the mirror's power setup and that the desk depth fits your chair."
  },
  {
    "id": "b07sdlk4zg",
    "name": "Hollywood Lighted Makeup Mirror",
    "description": "A Hollywood mirror ringed with dimmable bulbs gives even, shadow-free light, so makeup goes on the way it will actually look outside. Choose the bulb warmth and size that suit your space.",
    "asin": "B07SDLK4ZG",
    "amazonUrl": "https://www.amazon.com/s?k=hollywood+lighted+makeup+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61gEyvikxIL._AC_SL1000_.jpg",
    "ctaLabel": "See this Hollywood mirror on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "Makeup that has to look the same outdoors as it does indoors.",
    "whyWeLike": "Dimmable bulbs give even, shadow-free light, and the ring of bulbs looks glamorous on the vanity.",
    "keepInMind": "It needs counter depth and a nearby outlet; bulb warmth varies by model."
  },
  {
    "id": "b0fz8nhll7",
    "name": "Rotating Makeup Organizer",
    "description": "No more digging through a makeup bag while your foundation sets. A rotating organizer keeps lipsticks, brushes and skincare standing upright and visible, one gentle spin away, and it keeps the countertop looking styled instead of crowded. Pick the tier size that fits your collection.",
    "asin": "B0FZ8NHLL7",
    "amazonUrl": "https://www.amazon.com/s?k=rotating+makeup+organizer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71A+DhZHNHL._SL1500_.jpg",
    "ctaLabel": "View this organizer on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Countertops crowded with bottles, brushes and skincare.",
    "whyWeLike": "Everything stands upright and visible, one gentle spin away.",
    "keepInMind": "Measure your tallest bottles against the tier height before ordering."
  },
  {
    "id": "b0c4km4c94",
    "name": "Travertine Perfume Tray",
    "description": "A natural travertine tray gathers perfume bottles and little luxuries into one grounded, spa-like arrangement, and its soft stone texture flatters everything placed on it. Choose the shape that fits your vanity top.",
    "asin": "B0C4KM4C94",
    "amazonUrl": "https://www.amazon.com/s?k=travertine+perfume+tray&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/51p4Lue0rYL._AC_SL1500_.jpg",
    "ctaLabel": "See this stone tray on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Gathering perfume bottles into one spa-like arrangement.",
    "whyWeLike": "Natural stone weight and texture make even small bottles look deliberate.",
    "keepInMind": "Stone is heavy and can stain \u2014 wipe spills quickly and lift it, do not drag."
  },
  {
    "id": "b0g5175pzq",
    "name": "Rotating Brush Holder with Lid",
    "description": "Dust settles on brushes left standing open on the counter. A rotating brush holder with a lid keeps tools upright, sorted and clean under cover, and the spin makes every brush easy to reach mid-routine. Pick the compartment layout that matches the brushes you actually use.",
    "asin": "B0G5175PZQ",
    "amazonUrl": "https://www.amazon.com/s?k=rotating+makeup+brush+holder+with+lid&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71wfrA4M2KL._AC_SL1500_.jpg",
    "ctaLabel": "View this brush holder on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Brushes that gather dust standing open on the counter.",
    "whyWeLike": "The lid keeps tools clean under cover, while the spin keeps every brush reachable.",
    "keepInMind": "Check your longest brushes fit under the lid before ordering."
  },
  {
    "id": "b0b41ybq9j",
    "name": "Electric Standing Desk",
    "description": "An electric standing desk lets you move from sitting to standing at the touch of a button, and a clean, light finish keeps even a small room feeling open. Choose the desktop size that fits your corner and your screens.",
    "asin": "B0B41YBQ9J",
    "amazonUrl": "https://www.amazon.com/s?k=electric+standing+desk&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81HH3xbEG0L._AC_SL1500_.jpg",
    "ctaLabel": "Check this standing desk on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Long workdays that need movement built into them.",
    "whyWeLike": "Sit-to-stand at the touch of a button, in a light finish that keeps small rooms feeling open.",
    "keepInMind": "Assembly takes a while and it is heavy \u2014 build it where it will live."
  },
  {
    "id": "b0dzckgdyz",
    "name": "Wireless Mechanical Keyboard",
    "description": "A wireless mechanical keyboard brings a soft, satisfying key feel and a splash of gentle colour to the desk, with no cable snaking across it. Pick the layout and switch feel that suit how you type.",
    "asin": "B0DZCKGDYZ",
    "amazonUrl": "https://www.amazon.com/s?k=wireless+mechanical+keyboard&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71JoeE3K2wL._AC_SL1500_.jpg",
    "ctaLabel": "See this keyboard on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Typists who want the thing their hands touch all day to feel good.",
    "whyWeLike": "A soft, satisfying key feel and a splash of gentle colour, with no cable across the desk.",
    "keepInMind": "Mechanical keys are louder than membrane ones \u2014 mind switch type if you share a room."
  },
  {
    "id": "b0frmndrdy",
    "name": "Ergonomic Gaming Chair",
    "description": "Long sessions are not kind to an ordinary chair. An ergonomic gaming chair with real lumbar support and a footrest is built for marathon workdays and game nights, and the soft colour keeps it pretty, not plasticky. Choose the shade that fits your setup's palette.",
    "asin": "B0FRMNDRDY",
    "amazonUrl": "https://www.amazon.com/s?k=ergonomic+gaming+chair&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71zh0VddzwL._AC_SL1500_.jpg",
    "ctaLabel": "View this chair on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Marathon workdays and long game nights.",
    "whyWeLike": "Real lumbar support and a footrest turn long sessions into sink-in comfort.",
    "keepInMind": "Gaming chairs are bulky \u2014 check the footprint against your desk and floor space."
  },
  {
    "id": "b09dvl5gk9",
    "name": "Wireless Mouse",
    "description": "A soft-coloured wireless mouse frees you from one more cable and stays comfortable through a full day of clicks. Pick the colour that matches your mat and keyboard, and it ties the whole palette together.",
    "asin": "B09DVL5GK9",
    "amazonUrl": "https://www.amazon.com/s?k=wireless+mouse&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/713Om5Q1U0L._AC_SL1500_.jpg",
    "ctaLabel": "See this mouse on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Finishing a colour-matched desk setup.",
    "whyWeLike": "Quiet glide and all-day comfort, and one less cable on the desk.",
    "keepInMind": "Check whether it charges by cable or runs on batteries, and that the size suits your hand."
  },
  {
    "id": "b0d3fgfppb",
    "name": "27-Inch QHD Monitor",
    "description": "A 27-inch QHD screen with a pale bezel keeps the desk feeling light and airy, where a black monitor can bully a soft setup, and gives you crisp space for work, study and streams. Choose the panel that fits your desk depth, and prop it at eye level for the calmest posture.",
    "asin": "B0D3FGFPPB",
    "amazonUrl": "https://www.amazon.com/s?k=27+inch+qhd+monitor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81mNxcELHXL._AC_SL1500_.jpg",
    "ctaLabel": "Check this monitor on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Work, study and streams on a soft-coloured setup.",
    "whyWeLike": "Crisp QHD space with a pale bezel that does not bully the desk.",
    "keepInMind": "Check your desk depth, and whether you will want a separate arm or riser."
  },
  {
    "id": "b0f1crd5wy",
    "name": "Pink Desk Mat",
    "description": "A wide pink desk mat draws a soft boundary around your workspace, cushions your wrists and gives the keyboard and mouse a shared home. Pick the size that spans your setup, from laptop-only to full dual-screen.",
    "asin": "B0F1CRD5WY",
    "amazonUrl": "https://www.amazon.com/s?k=pink+desk+mat&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71mWgTFoajL._AC_SL1500_.jpg",
    "ctaLabel": "View this desk mat on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Making a plain desk look intentionally styled in one move.",
    "whyWeLike": "It cushions your wrists and gives keyboard and mouse one shared, pretty home.",
    "keepInMind": "Measure your desk \u2014 sizes run from laptop-only to full dual-screen width."
  },
  {
    "id": "b07n1cmgqq",
    "name": "Smart RGB LED Strip Lights",
    "description": "Smart RGB strips tucked behind the desk wash the wall in soft colour you can change with your voice or an app: warm amber for focus, pink for game night. Choose the length that traces your desk and monitor edges.",
    "asin": "B07N1CMGQQ",
    "amazonUrl": "https://www.amazon.com/s?k=smart+rgb+led+strip+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/516qHxwqhFL._AC_.jpg",
    "ctaLabel": "See these LED strips on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "After-dark glow behind a desk or monitor.",
    "whyWeLike": "App and voice control \u2014 warm amber for focus, pink for game night.",
    "keepInMind": "Measure and plan the run first; adhesive strips do not re-stick well."
  },
  {
    "id": "b004g7ri76",
    "name": "Pre-Lit Artificial Christmas Tree",
    "description": "A full, pre-lit tree fills the corner with warm white glow the second it stands up: no wrestling with tangled light strings, no bare patches to hide at the back. Hinged branches fall into shape almost on their own, so the decorating fun starts right away. Pick the height that suits your ceiling, and let everything else in this guide gather around it.",
    "asin": "B004G7RI76",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+artificial+christmas+tree&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91-IM-2UMhL._AC_SL1500_.jpg",
    "ctaLabel": "View this Christmas tree on Amazon",
    "featured": true,
    "active": true,
    "bestFor": "The corner that needs Christmas to officially arrive.",
    "whyWeLike": "Pre-lit with hinged branches \u2014 it stands up glowing, with no tangled strings to fight.",
    "keepInMind": "Measure ceiling height and floor footprint before choosing the tree height."
  },
  {
    "id": "b0dxl27rnt",
    "name": "Shatterproof Christmas Ornament Set",
    "description": "A coordinated set of shatterproof baubles in mixed finishes (shiny, matte and glitter) layers colour and light through every branch, and it survives curious kids, wagging tails and the annual tumble out of storage. Choose the palette that matches your wrapping paper and let it run through the whole room.",
    "asin": "B0DXL27RNT",
    "amazonUrl": "https://www.amazon.com/s?k=shatterproof+christmas+ornaments+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91h3zAHK+yL._AC_SL1500_.jpg",
    "ctaLabel": "See these ornaments on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Homes with kids, pets and the annual tumble out of storage.",
    "whyWeLike": "Mixed shiny, matte and glitter finishes layer colour and light through the tree.",
    "keepInMind": "Shatterproof means plastic \u2014 beautiful and light, but not the weight of glass."
  },
  {
    "id": "b00lkrmnwk",
    "name": "Pre-Lit Christmas Wreath",
    "description": "A lush pre-lit wreath with berries and pinecones glows softly at dusk on the front door, and it works just as beautifully above a mantel or on a bare hallway wall. Pick a size that fills your door without crowding it.",
    "asin": "B00LKRMNWK",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+christmas+wreath&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91kfYY0MdIL._AC_SL1500_.jpg",
    "ctaLabel": "View this wreath on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Front doors, mantels and bare hallway walls.",
    "whyWeLike": "Berries, pinecones and warm light are built in, so it glows at dusk on its own.",
    "keepInMind": "Check the diameter against your door \u2014 it should fill it without crowding."
  },
  {
    "id": "b00lkrmwey",
    "name": "Pre-Lit Christmas Garland",
    "description": "A generous pre-lit garland with warm lights woven through the branches softens the fireplace, the staircase or a doorway in minutes, and makes every stocking and candle in front of it look twice as pretty. Choose the length that swags the way you like: deep and lazy is the cozy way.",
    "asin": "B00LKRMWEY",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+christmas+garland&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/915qNIX+DzL._AC_SL1500_.jpg",
    "ctaLabel": "See this garland on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Mantels, staircases and doorways that need tying together.",
    "whyWeLike": "Lights are woven through the branches, so stockings and candles in front look twice as pretty.",
    "keepInMind": "Choose the length for a deep, lazy swag \u2014 too short looks stingy."
  },
  {
    "id": "b0cdbhg318",
    "name": "Cable Knit Christmas Stockings",
    "description": "Hung in a row, chunky cable-knit stockings bring the same hand-made softness as your favourite winter sweater to the mantel, and they are roomy enough for the good stuff: oranges, chocolates and small wrapped surprises. Pick a matching set for the whole family, or mix cream and blush for that collected-over-years feel.",
    "asin": "B0CDBHG318",
    "amazonUrl": "https://www.amazon.com/s?k=cable+knit+christmas+stockings&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71QXxdfi1iL._AC_SL1000_.jpg",
    "ctaLabel": "View these stockings on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A mantel row the whole family can claim as their own.",
    "whyWeLike": "Chunky sweater-knit softness, roomy enough for oranges, chocolates and small wrapped gifts.",
    "keepInMind": "Knit stretches when heavily filled \u2014 hang the heaviest stockings with care."
  },
  {
    "id": "b07g43ks2g",
    "name": "Faux Fur Christmas Tree Skirt",
    "description": "A plush faux fur skirt hides the stand and the tangle of cords, pools like fresh snow under the branches and gives presents a beautiful place to sit. Choose the diameter that lets gifts spill a little beyond its edge.",
    "asin": "B07G43KS2G",
    "amazonUrl": "https://www.amazon.com/s?k=faux+fur+christmas+tree+skirt&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81PAR8K1+GL._AC_SL1254_.jpg",
    "ctaLabel": "See this tree skirt on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Hiding the tree stand and giving presents a beautiful landing.",
    "whyWeLike": "Plush white texture reads like fresh snow and glows against the warm tree lights.",
    "keepInMind": "Pick a diameter that lets gifts spill a little beyond its edge."
  },
  {
    "id": "b08d6692yj",
    "name": "Lighted Star Tree Topper",
    "description": "A lighted star topper crowns the tree with a warm glow and projects drifting snowflakes onto the ceiling above it, so the corner feels like the inside of a snow globe after dark. Pick the finish that matches your ornaments: gold for classic, silver for frosty.",
    "asin": "B08D6692YJ",
    "amazonUrl": "https://www.amazon.com/s?k=lighted+star+christmas+tree+topper&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/816Ok9sThmL._AC_SL1500_.jpg",
    "ctaLabel": "View this tree topper on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Finishing the tree with a little theatre.",
    "whyWeLike": "It crowns the tree in warm glow and projects drifting snowflakes onto the ceiling.",
    "keepInMind": "It needs power at the top of the tree \u2014 check the cord or battery setup."
  },
  {
    "id": "b07k46vs42",
    "name": "Christmas Throw Pillow Covers",
    "description": "Swapping plain cushion covers for festive ones (little trees, gentle lettering, soft winter reds) changes the mood of the whole room without buying a single new cushion. They zip on and off, so the everyday covers come back in January. Pick the set whose colours already live in your room.",
    "asin": "B07K46VS42",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+pillow+covers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81+n91UoU3L._AC_SL1500_.jpg",
    "ctaLabel": "See these Christmas pillow covers on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A ten-minute festive makeover for the sofa.",
    "whyWeLike": "Festive prints zip over the cushions you already own; everyday covers come back in January.",
    "keepInMind": "Covers only \u2014 check your insert sizes before ordering the set."
  },
  {
    "id": "b0cdkxvk32",
    "name": "Christmas Throw Blanket",
    "description": "A soft Christmas throw in a gentle plaid drapes over the sofa arm all season, part decoration and part invitation, and it is always within reach when the cocoa is ready. The cream-and-red check flatters almost any palette. Pick the size that covers two people and a small dog.",
    "asin": "B0CDKXVK32",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+throw+blanket&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/817a-OxvFfL._AC_SL1500_.jpg",
    "ctaLabel": "Check this Christmas throw on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Holiday-film nights and cocoa on the sofa.",
    "whyWeLike": "A gentle plaid that flatters almost any palette, draped as decor all season long.",
    "keepInMind": "Plaid placement varies by cut; size up if two people will share it."
  },
  {
    "id": "b0bd7pm599",
    "name": "Wooden Nutcracker Ornament Set",
    "description": "A set of wooden nutcracker ornaments adds a nostalgic, collected-over-generations charm that plain baubles cannot match, and each one becomes a small treasure kids look for every year. Scatter them evenly, or cluster a few where the lights are warmest.",
    "asin": "B0BD7PM599",
    "amazonUrl": "https://www.amazon.com/s?k=wooden+nutcracker+christmas+decorations&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61d1xRVMhBL._AC_SL1000_.jpg",
    "ctaLabel": "View these nutcrackers on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Trees that need story, not just sparkle.",
    "whyWeLike": "Little painted soldiers add a collected-over-generations nostalgia plain baubles cannot.",
    "keepInMind": "They are small accents \u2014 cluster a few where the tree lights are warmest."
  },
  {
    "id": "b0ckplrbln",
    "name": "Rattan Pendant Ceiling Light",
    "description": "The light above the bed does more styling than almost anything else in the room. A woven rattan shade turns harsh ceiling light into a warm, patterned glow and gives plain ceilings that boutique-hotel finish. Hang one over the bed or a pair over the nightstands, and pick a shade size that suits your ceiling height.",
    "asin": "B0CKPLRBLN",
    "amazonUrl": "https://www.amazon.com/s?k=pendant+light+fixture+aesthetic+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81c4ARWLbhL._AC_SL1500_.jpg",
    "ctaLabel": "See this pendant light on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Ceilings whose harsh light flattens the whole room.",
    "whyWeLike": "Woven rattan turns overhead light into a warm, patterned glow with a boutique finish.",
    "keepInMind": "It is hardwired \u2014 you may need an electrician, and shade size should suit ceiling height."
  },
  {
    "id": "b0b8d2k76v",
    "name": "Wood Base Bedside Table Lamp",
    "description": "Bedside light should feel like a sunset, not a spotlight. A warm wood base with a soft fabric shade gives you that glow for reading and winding down, and the natural texture sits beautifully against linen bedding and pale walls. Choose the bulb warmth and shade size that fit your nightstand.",
    "asin": "B0B8D2K76V",
    "amazonUrl": "https://www.amazon.com/s?k=wood+base+bedside+table+lamp&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81yqCciB5HL._AC_SL1500_.jpg",
    "ctaLabel": "View this bedside lamp on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Reading and winding down without glare.",
    "whyWeLike": "A warm wood base and fabric shade give sunset-soft light instead of a spotlight.",
    "keepInMind": "Bulbs often are not included \u2014 check the fitting and choose a warm bulb."
  },
  {
    "id": "b082413mwq",
    "name": "Chubby Seal Plush Pillow",
    "description": "Every styled bed needs one soft, silly finishing touch. A chubby plush propped against the pillows makes the whole bed look huggable and photo-ready. Pick the size and character that match your room's colours.",
    "asin": "B082413MWQ",
    "amazonUrl": "https://www.amazon.com/s?k=cute+plush+pillow+for+bed+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61XoOrNcyIL._AC_SL1000_.jpg",
    "ctaLabel": "See this plush pillow on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The one soft, silly finishing touch every styled bed needs.",
    "whyWeLike": "Propped against the pillows it makes the whole bed look huggable and photo-ready.",
    "keepInMind": "It is decor, not a sleeping pillow \u2014 plush filling will not support your neck."
  },
  {
    "id": "b0dlgbq15k",
    "name": "Oversized Reading Armchair",
    "description": "A bedroom corner with a chair in it stops being storage for clothes and starts being a reading nook. An oversized cushioned armchair gives you a slow-morning seat for books and coffee, and softens the room's straight lines. Choose a fabric colour that echoes your bedding or curtains.",
    "asin": "B0DLGBQ15K",
    "amazonUrl": "https://www.amazon.com/s?k=oversized+reading+armchair+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91D6r9IShGL._AC_SL1500_.jpg",
    "ctaLabel": "View this armchair on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Turning a clothes-dump corner into a reading nook.",
    "whyWeLike": "Oversized cushioning made for slow mornings with books and coffee.",
    "keepInMind": "Oversized means a big footprint \u2014 measure the corner and the doorway first."
  },
  {
    "id": "b0fgxnz4tp",
    "name": "Woven Cotton Rope Storage Basket",
    "description": "A cotton rope basket swallows spare throws, chargers and bedtime bits while adding soft, handmade texture beside the bed or dresser. Pick the size that fits your spare-blanket pile.",
    "asin": "B0FGXNZ4TP",
    "amazonUrl": "https://www.amazon.com/s?k=woven+storage+basket+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/818WlELkdfL._AC_SL1500_.jpg",
    "ctaLabel": "See this storage basket on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Spare throws, chargers and bedtime bits that clutter the calm.",
    "whyWeLike": "Handmade texture that hides the mess beside the bed or dresser.",
    "keepInMind": "Rope baskets are soft-sided and slouch when half-empty \u2014 that is part of the look."
  },
  {
    "id": "b0bm7kj56g",
    "name": "Sheer Canopy Bed Curtains",
    "description": "Sheer canopy curtains soften every edge of a plain bed frame, filter the morning light into a haze, and give the bed a floating, fairytale volume. Choose a length that pools slightly for the full effect, in white or a blush tone to match your palette.",
    "asin": "B0BM7KJ56G",
    "amazonUrl": "https://www.amazon.com/s?k=canopy+bed+curtains+sheer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61BqKQmqAKL._AC_SL1200_.jpg",
    "ctaLabel": "View these canopy curtains on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Plain bed frames that need instant fairytale volume.",
    "whyWeLike": "Sheers soften every edge and filter the morning light into a soft haze.",
    "keepInMind": "Your frame needs posts or a canopy rail to drape from \u2014 check compatibility first."
  },
  {
    "id": "b07pt6qrxn",
    "name": "Macrame Wall Hanging Set",
    "description": "A macrame hanging brings hand-knotted texture and gentle boho pattern to the wall above the bed, and a small set lets you build a mini gallery around it. Pick the width that suits the wall above your headboard.",
    "asin": "B07PT6QRXN",
    "amazonUrl": "https://www.amazon.com/s?k=macrame+wall+hanging+bedroom+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71OG0Cb-bXL._AC_SL1500_.jpg",
    "ctaLabel": "See this macrame set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Unfinished walls above the headboard.",
    "whyWeLike": "Hand-knotted texture and gentle boho pattern that flat prints cannot match.",
    "keepInMind": "Cotton macrame gathers dust \u2014 shake it out outside now and then."
  },
  {
    "id": "b0dcty6yg9",
    "name": "Scented Soy Candle Gift Set",
    "description": "A small set of soy candles on the nightstand or dresser adds warm flicker and a soft scent that settles the room before sleep. Pick the scents that suit your evenings, from clean linen to warm vanilla.",
    "asin": "B0DCTY6YG9",
    "amazonUrl": "https://www.amazon.com/s?k=scented+candles+gift+set+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81QnLAA2dtL._AC_SL1500_.jpg",
    "ctaLabel": "View this candle gift set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Nightstands and dressers at the end of the day.",
    "whyWeLike": "Warm flicker plus a soft scent settles the room before sleep.",
    "keepInMind": "Soy burns slower with a softer scent throw; keep flames well away from bedding."
  },
  {
    "id": "b0h7wxs3qb",
    "name": "Vanity Desk with LED Mirror and Drawers",
    "description": "A compact vanity desk with a lit mirror and drawers keeps makeup and morning routines in one pretty spot instead of spread across the bed. Choose a finish that matches your other bedroom furniture, and a size that fits your corner.",
    "asin": "B0H7WXS3QB",
    "amazonUrl": "https://www.amazon.com/s?k=small+vanity+desk+with+mirror+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81zpQiJWDBL._AC_SL1500_.jpg",
    "ctaLabel": "See this vanity desk on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Small bedrooms that want a suite-like getting-ready corner.",
    "whyWeLike": "A lit mirror plus drawers keep the whole morning routine in one pretty spot.",
    "keepInMind": "Compact desks have modest drawer space \u2014 best for daily essentials, not hoards."
  },
  {
    "id": "b0fj8y1j9s",
    "name": "Walnut Floating Wall Shelves",
    "description": "Walnut floating shelves give books, plants and framed photos a warm, furniture-like ledge that echoes wooden nightstands and dressers. Style them in odd numbers, and pick the length that suits the wall beside your bed or above the dresser.",
    "asin": "B0FJ8Y1J9S",
    "amazonUrl": "https://www.amazon.com/s?k=walnut+floating+shelves+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81dY5wAGi1L._AC_SL1500_.jpg",
    "ctaLabel": "View these walnut shelves on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Books, plants and framed photos beside the bed or above the dresser.",
    "whyWeLike": "Walnut warmth reads like furniture and echoes wooden nightstands and bed frames.",
    "keepInMind": "Anchor into studs where you can, and style the shelves in odd numbers."
  },
  {
    "id": "b0d3w6xks4",
    "name": "Velvet Round Storage Pouf",
    "description": "A soft pouf at the foot of the bed works as both a seat and a footrest. The velvet adds texture where you sit to put on shoes or rest a folded throw, and it tucks neatly under a vanity too. Choose a colour that picks up your bedding or curtains.",
    "asin": "B0D3W6XKS4",
    "amazonUrl": "https://www.amazon.com/s?k=velvet+pouf+ottoman+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61wwSuvaoOL._AC_SL1000_.jpg",
    "ctaLabel": "See this storage pouf on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The foot of the bed, or tucked under a vanity.",
    "whyWeLike": "Part seat, part footrest, with storage hidden inside.",
    "keepInMind": "The storage is modest: a throw or two, not bedding sets."
  },
  {
    "id": "b0bxkzc8qp",
    "name": "Round Lighted Vanity Mirror",
    "description": "A round lighted mirror softens the hard angles of a dresser top, gives even, shadow-free light for makeup, and doubles as a warm glow piece after dark. Pick a finish (white, gold or black) that matches your hardware.",
    "asin": "B0BXKZC8QP",
    "amazonUrl": "https://www.amazon.com/s?k=round+lighted+vanity+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81o7M52PZTL._AC_SL1500_.jpg",
    "ctaLabel": "View this lighted mirror on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dresser-top getting-ready corners in a bedroom.",
    "whyWeLike": "The round shape softens hard angles, and even light doubles as a warm glow after dark.",
    "keepInMind": "Finishes vary \u2014 white, gold or black \u2014 so match your hardware before ordering."
  },
  {
    "id": "b0ccm9jlh1",
    "name": "Beaded Wood Decorative Tray",
    "description": "A tray turns a pile of small things into a display. On the dresser or nightstand, a beaded wood tray corrals perfume, jewellery and the evening's book into one styled moment, and it carries breakfast in bed on slow Sundays. Choose the size that fits your surface and your clutter.",
    "asin": "B0CCM9JLH1",
    "amazonUrl": "https://www.amazon.com/s?k=wooden+decorative+tray+for+dresser&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71UbVwhGg6L._AC_SL1500_.jpg",
    "ctaLabel": "See this decorative tray on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dressers and nightstands covered in small, scattered things.",
    "whyWeLike": "It corrals perfume, jewellery and your evening book into one styled moment.",
    "keepInMind": "Beaded edges are decorative \u2014 do not carry heavy, full mugs far on it."
  },
  {
    "id": "b0cpc1nczs",
    "name": "Corduroy Throw Pillow Covers",
    "description": "Soft corduroy covers in warm neutrals add ribbed texture that reads cozy even before you sit down, and they zip over the inserts you already own. Mix two colours from the same family, and pick the size that suits your sofa's depth.",
    "asin": "B0CPC1NCZS",
    "amazonUrl": "https://www.amazon.com/s?k=throw+pillow+covers+for+couch&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91KVnhHfYXL._AC_SL1500_.jpg",
    "ctaLabel": "View these corduroy covers on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A fast sofa refresh that zips over the inserts you already own.",
    "whyWeLike": "Ribbed corduroy texture reads cozy instantly, in warm neutrals that mix easily.",
    "keepInMind": "Covers only \u2014 order the size that matches the inserts you already own."
  },
  {
    "id": "b0g48sldzh",
    "name": "Washable Vintage Area Rug",
    "description": "A vintage-patterned low-pile rug anchors the sofa and coffee table with old-soul character, and it goes in the wash when life happens: movie nights, guests and Monday vacuuming. Choose the size that lets at least the sofa's front legs sit on it.",
    "asin": "B0G48SLDZH",
    "amazonUrl": "https://www.amazon.com/s?k=washable+vintage+rug+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Nz2oz+M+L._AC_SL1500_.jpg",
    "ctaLabel": "Check this washable rug on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Busy living rooms with guests, snacks and Monday vacuuming.",
    "whyWeLike": "Vintage character that anchors the sofa \u2014 and it goes in the wash when life happens.",
    "keepInMind": "Low pile will not feel plush; choose a size that fits the sofa's front legs on it."
  },
  {
    "id": "b0b3544gym",
    "name": "White Sheer Curtains",
    "description": "Sheer white panels filter harsh daylight into an even, photo-friendly wash, make low ceilings feel taller, and keep the room private without going dark. Hang them high and wide, and pick a length that just kisses the floor.",
    "asin": "B0B3544GYM",
    "amazonUrl": "https://www.amazon.com/s?k=white+sheer+curtains+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71ZLL2qc9HL._AC_SL1500_.jpg",
    "ctaLabel": "See these sheer curtains on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Bright living rooms that need softness and privacy at once.",
    "whyWeLike": "Sheers even out harsh daylight into a photo-friendly wash and make ceilings feel taller.",
    "keepInMind": "Hang high and wide, and order enough width \u2014 sheers need fullness to look right."
  },
  {
    "id": "b0dczmz1lf",
    "name": "Faux Fur Throw Blanket",
    "description": "A thick faux fur throw draped over the sofa arm adds deep texture and is the layer everyone reaches for during films. Fold it long over the back or scrunch it on a seat corner, in a shade that suits your cushions.",
    "asin": "B0DCZMZ1LF",
    "amazonUrl": "https://www.amazon.com/s?k=faux+fur+throw+blanket+for+couch&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91UwBRHRE6L._AC_SL1500_.jpg",
    "ctaLabel": "View this faux fur throw on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The sofa arm everyone reaches for during films.",
    "whyWeLike": "Thick faux fur adds deep texture, folded long over the back or scrunched on a seat corner.",
    "keepInMind": "Faux fur can shed a little at first and prefers a shake-out or cool wash."
  },
  {
    "id": "b0cghvjcck",
    "name": "Globe String Lights",
    "description": "A run of soft globe lights along a living room shelf or window frame gives the whole room a caf\u00e9-evening glow after dark. The round bulbs read more grown-up than fairy strands and flatter wood and plants alike. Choose the length that spans your shelf or mantel.",
    "asin": "B0CGHVJCCK",
    "amazonUrl": "https://www.amazon.com/s?k=globe+string+lights+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81f6+SMlYPL._AC_SL1500_.jpg",
    "ctaLabel": "See these globe lights on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Shelves, mantels and window frames after dark.",
    "whyWeLike": "Round bulbs give a grown-up cafe glow that flatters wood and plants alike.",
    "keepInMind": "Measure the run first, and check whether the strand is rated indoor-only."
  },
  {
    "id": "b09tt9qyjk",
    "name": "White Ceramic Vase Set",
    "description": "Coffee tables need height, and a trio of matte ceramic vases gives you a ready-made arrangement. Group all three with pampas or branches, or split them between the table, mantel and shelves so the room feels collected. Pick the colour set that suits your palette \u2014 whites and earth tones mix with everything.",
    "asin": "B09TT9QYJK",
    "amazonUrl": "https://www.amazon.com/s?k=ceramic+vase+set+for+home+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81WI6vXcUgL._AC_SL1500_.jpg",
    "ctaLabel": "View this vase trio on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Coffee tables that need height and a ready-made arrangement.",
    "whyWeLike": "A trio groups together on the table or splits across the room for a collected feel.",
    "keepInMind": "Matte ceramic shows water marks \u2014 use faux stems, or a liner for fresh flowers."
  },
  {
    "id": "b0frmtsrfm",
    "name": "Abstract Framed Wall Art Set",
    "description": "Above the sofa, one strong art set does the decorating for the whole wall. Soft abstract canvases in framed sets bring colour and movement without shouting, and three matching panels make even a rental wall feel designed. Choose the palette that already lives in your cushions and rug so it all reads as one room.",
    "asin": "B0FRMTSRFM",
    "amazonUrl": "https://www.amazon.com/s?k=abstract+framed+wall+art+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81yVu8F9YJL._AC_SL1500_.jpg",
    "ctaLabel": "See this art set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The big empty wall above the sofa.",
    "whyWeLike": "Three matching panels make even a rental wall feel designed, in soft, easy colours.",
    "keepInMind": "Pick a palette already living in your cushions and rug so it reads as one room."
  },
  {
    "id": "b00zf1qr88",
    "name": "Battery Globe String Lights",
    "description": "Battery globe lights loop around the mirror or along a shelf edge and switch on for the full getting-ready glow, with no outlet needed and no cables crossing your perfumes. The mini globes read like little moons against the glass. Pick a strand length that frames your mirror.",
    "asin": "B00ZF1QR88",
    "amazonUrl": "https://www.amazon.com/s?k=battery+operated+globe+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71cFIHAC+RL._AC_SL1500_.jpg",
    "ctaLabel": "View these globe lights on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Mirrors and shelves with no outlet anywhere nearby.",
    "whyWeLike": "Cordless mini globes give the full getting-ready glow with zero cables over your perfumes.",
    "keepInMind": "Battery life is finite \u2014 keep spares handy, or choose a model with a timer."
  },
  {
    "id": "b0cm65jld3",
    "name": "Glass Bud Vase Set",
    "description": "A vanity top feels styled when something is blooming on it. A small set of glass bud vases lets you dot single stems and sprigs between the bottles, catching the mirror light through the glass. Split the set across the vanity and shelves, and choose clear or tinted glass to suit your bottles.",
    "asin": "B0CM65JLD3",
    "amazonUrl": "https://www.amazon.com/s?k=glass+bud+vase+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71wV5yc-ZwL._AC_SL1500_.jpg",
    "ctaLabel": "See these bud vases on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dotting single stems and sprigs between vanity bottles.",
    "whyWeLike": "Glass catches the mirror light and makes even supermarket stems look styled.",
    "keepInMind": "They are bud-sized \u2014 one or two stems each, not bouquet vases."
  },
  {
    "id": "b0gf7rtcxq",
    "name": "Amber Jar Soy Candle Set",
    "description": "Amber glass jar candles glow like little lanterns among the perfume bottles, and a small set means one for the vanity, one for the shelf, one spare. Their soft scent fills the corner. Pick the pack size that suits your surfaces.",
    "asin": "B0GF7RTCXQ",
    "amazonUrl": "https://www.amazon.com/s?k=amber+jar+scented+candles+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71IICnR1ZBL._AC_SL1254_.jpg",
    "ctaLabel": "View these amber candles on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Vanity trays that deserve one warm flame.",
    "whyWeLike": "Amber glass glows like little lanterns among the perfume bottles.",
    "keepInMind": "Amber jars dim the flame \u2014 this is mood light, not task light."
  },
  {
    "id": "b099596f3b",
    "name": "Mini Faux Potted Plants Set",
    "description": "A set of mini potted plants tucks a little green into the gaps between bottles and brushes (the desk corner, the shelf, beside the mirror), with zero watering to remember. Mix the shapes across your surfaces and pick pots that suit your palette.",
    "asin": "B099596F3B",
    "amazonUrl": "https://www.amazon.com/s?k=mini+fake+plants+set+for+shelf+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81XA3yzBHsL._AC_SL1500_.jpg",
    "ctaLabel": "See these mini plants on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The gaps between bottles and brushes that need a little life.",
    "whyWeLike": "Green tucked into every corner of the vanity with zero watering to remember.",
    "keepInMind": "Mini means mini \u2014 check pot heights against your shelf spacing."
  },
  {
    "id": "b09lyf93bq",
    "name": "Round Faux Fur Vanity Rug",
    "description": "A small round faux fur rug under the vanity stool adds a cloud of texture and warms up hard floors. Choose white or blush to match your corner, sized to sit under the stool and your feet.",
    "asin": "B09LYF93BQ",
    "amazonUrl": "https://www.amazon.com/s?k=round+fluffy+rug+small&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71Pvnzq1h7L._AC_SL1500_.jpg",
    "ctaLabel": "View this vanity rug on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The floor spot where you sit every single morning.",
    "whyWeLike": "A cloud of texture under the stool that warms up hard floors.",
    "keepInMind": "Round sizing is snug \u2014 measure so it fits under both the stool and your feet."
  },
  {
    "id": "b0c9t7j41y",
    "name": "Pink Sheer Curtains",
    "description": "Blush voile panels soften window glare into a rosy wash that skin loves, and turn the whole corner pastel. Hang them behind or beside the vanity and pick a length that pools a little for softness.",
    "asin": "B0C9T7J41Y",
    "amazonUrl": "https://www.amazon.com/s?k=pink+sheer+curtains&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71ZBQ09FUEL._AC_SL1500_.jpg",
    "ctaLabel": "See these pink sheers on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Vanity corners lit by a window.",
    "whyWeLike": "Blush voile softens glare into a rosy wash that skin loves.",
    "keepInMind": "Pale sheers give glow, not blackout \u2014 pair with blinds if you sleep nearby."
  },
  {
    "id": "b0bbfxcwfj",
    "name": "Acrylic Floating Shelves",
    "description": "Clear acrylic floating shelves turn the wall beside the mirror into a floating display: bottles, brushes and small plants lined up in the open, with nothing visual competing. Choose the pack size that fits your collection's growth.",
    "asin": "B0BBFXCWFJ",
    "amazonUrl": "https://www.amazon.com/s?k=acrylic+floating+shelves+for+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81k6fpbQ1CL._AC_SL1500_.jpg",
    "ctaLabel": "View these acrylic shelves on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Perfume collections too pretty to hide in drawers.",
    "whyWeLike": "Clear shelves turn the wall into a floating display that competes with nothing.",
    "keepInMind": "Acrylic needs the right anchors, and heavy bottles belong on the lowest shelf."
  },
  {
    "id": "b0895ddn47",
    "name": "Photo Clip String Lights",
    "description": "Photo clip string lights turn the wall above a desk into a glowing gallery: polaroids, postcards and prints clipped along a warm strand above the monitor and shelves. USB power means it runs straight from the setup. Pick a strand long enough to zigzag your wall.",
    "asin": "B0895DDN47",
    "amazonUrl": "https://www.amazon.com/s?k=photo+clip+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71JFch3glEL._AC_SL1024_.jpg",
    "ctaLabel": "See these photo clip lights on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The wall above a desk.",
    "whyWeLike": "Polaroids and prints clip along a warm strand, and USB power runs straight from the setup.",
    "keepInMind": "The clips hold light paper only \u2014 heavy prints will slide down."
  },
  {
    "id": "b07s6r7sdw",
    "name": "Mini Faux Succulent Set",
    "description": "Desks feel alive with something green that never needs watering. A small set of faux succulents in pots dots the shelf, the desk corner and beside the monitor with sculptural little rosettes that suit gaming and study setups alike. Split the set across your levels and pick pot colours that match your theme.",
    "asin": "B07S6R7SDW",
    "amazonUrl": "https://www.amazon.com/s?k=artificial+succulent+plants+potted&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71bpn5b3-uL._AC_SL1200_.jpg",
    "ctaLabel": "View these succulents on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Desk shelves and monitor corners that feel stark.",
    "whyWeLike": "Sculptural rosettes that suit gaming and study setups alike, with no watering schedule.",
    "keepInMind": "Pot colours vary by set \u2014 pick the palette that matches your setup theme."
  },
  {
    "id": "b0h4vhspvg",
    "name": "Washable Low-Pile Desk Rug",
    "description": "A low-pile washable rug under the desk anchors the whole zone, quiets the chair wheels, and adds the colour block desk setups are styled around, then washes clean when coffee happens. Choose a size that fits the chair's full roll range.",
    "asin": "B0H4VHSPVG",
    "amazonUrl": "https://www.amazon.com/s?k=washable+area+rug+for+home+office&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91gUsJz62KL._AC_SL1500_.jpg",
    "ctaLabel": "Check this desk rug on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Chairs rolling on bare, noisy floors.",
    "whyWeLike": "It anchors the whole desk zone, quiets the wheels, and washes clean when coffee happens.",
    "keepInMind": "Size it to the chair's full roll range, not just the desk's footprint."
  },
  {
    "id": "b0dpzpfkdp",
    "name": "Black Floating Wall Shelves",
    "description": "Black-framed floating shelves give figures, books and gear a bold ledge that matches monitor arms and gaming hardware, and they make RGB lighting pop after dark. Stack two above the desk for the classic setup wall, and pick the pack size that fits your collection.",
    "asin": "B0DPZPFKDP",
    "amazonUrl": "https://www.amazon.com/s?k=black+floating+shelves+for+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71aG4kTQqIL._AC_SL1500_.jpg",
    "ctaLabel": "See these black shelves on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Desk walls that need to work hard as storage and display.",
    "whyWeLike": "Black frames match monitor arms and gaming hardware, and make RGB lighting pop after dark.",
    "keepInMind": "Black shows dust faster than wood tones \u2014 a quick wipe keeps them sharp."
  },
  {
    "id": "b09bldcg64",
    "name": "Small Ceramic Desk Vase",
    "description": "A matte ceramic vase with a few dried stems adds height and softness next to all that tech glass and plastic, without taking space the keyboard needs. Tuck it on a shelf corner or beside the monitor, in black or white to suit your theme.",
    "asin": "B09BLDCG64",
    "amazonUrl": "https://www.amazon.com/s?k=small+ceramic+vase+for+dried+flowers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71CJDzk14zL._AC_SL1500_.jpg",
    "ctaLabel": "View this desk vase on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Softening all the glass and plastic on a desk.",
    "whyWeLike": "One matte vase with a few dried stems adds height without stealing keyboard space.",
    "keepInMind": "It is bud-scale \u2014 a few stems, not a bouquet."
  },
  {
    "id": "b07xs89q9b",
    "name": "Clear Christmas String Lights",
    "description": "Clear warm string lights wind through the branches and turn the whole tree into the room's lantern: the base layer every ornament hangs on. Wrap from the trunk outward for depth, and choose the count that matches your tree's height.",
    "asin": "B07XS89Q9B",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+string+lights+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81LodfEF8wL._AC_SL1500_.jpg",
    "ctaLabel": "See these Christmas lights on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The tree's base layer of glow, underneath every ornament.",
    "whyWeLike": "Clear warm lights wind from trunk to tips and turn the tree into the room's lantern.",
    "keepInMind": "Match the bulb count to your tree height \u2014 sparse strands look thin on tall trees."
  },
  {
    "id": "b0h6w64l4q",
    "name": "Holiday Scented Candle Gift Set",
    "description": "A gift set of winter candles (pine, cinnamon, warm spice) flickers on the mantel and coffee table and makes the room smell like the season before the tree is even up. Light one per room corner and pick the set size that covers your spaces.",
    "asin": "B0H6W64L4Q",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+scented+candles+gift+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71Mbi6QFE2L._AC_SL1500_.jpg",
    "ctaLabel": "View this holiday candle set on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Mantels and coffee tables all through December.",
    "whyWeLike": "Pine, cinnamon and warm spice make the room smell like the season before the tree is up.",
    "keepInMind": "Gift sets mix scents \u2014 check the scent list if anyone at home is sensitive."
  },
  {
    "id": "b095pcsv4t",
    "name": "Bedroom Dresser with Drawers",
    "description": "Bedrooms run on drawer space, and a proper dresser gives the room its styled surface too. Drawers swallow the clothes that usually live on the chair, while the top becomes a stage for trays, vases and the mirror above. Choose a width that fits your wall and a finish that matches your bed frame.",
    "asin": "B095PCSV4T",
    "amazonUrl": "https://www.amazon.com/s?k=dresser+for+bedroom+with+drawers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91KjaRpAwML._AC_SL1500_.jpg",
    "ctaLabel": "See this dresser on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Bedrooms where the clothes currently live on a chair.",
    "whyWeLike": "Drawers swallow the clutter, and the top becomes a styled stage for a mirror and trays.",
    "keepInMind": "Measure your wall width and drawer depth \u2014 and expect some assembly time."
  },
  {
    "id": "b07jk99mb1",
    "name": "Faux Floral Garland",
    "description": "A floral garland draped along the headboard, a shelf edge or around the mirror brings garden colour indoors with no watering and no wilting. Mix it with fairy lights for the full pin look, and pick a flower colour that echoes your bedding.",
    "asin": "B07JK99MB1",
    "amazonUrl": "https://www.amazon.com/s?k=artificial+flower+garland+for+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71HtrGPspdL._AC_SL1500_.jpg",
    "ctaLabel": "View this floral garland on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Headboards, shelf edges and mirrors with hard lines.",
    "whyWeLike": "Garden colour indoors with no wilting \u2014 and it layers beautifully with fairy lights.",
    "keepInMind": "Garlands arrive compressed; fluff and arrange the blooms before judging them."
  },
  {
    "id": "b07xgkx327",
    "name": "LED Strip Lights for Bed",
    "description": "Ambient light behind the bed changes the whole room after dark. An LED strip along the headboard or under the bed frame washes the wall in a soft halo that makes the bed feel like it is floating. Choose a warm-to-RGB strip with a remote and cut it to your bed's width.",
    "asin": "B07XGKX327",
    "amazonUrl": "https://www.amazon.com/s?k=led+strip+lights+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61vTwdhY4GL._AC_SL1000_.jpg",
    "ctaLabel": "See these bed LED strips on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "After-dark ambience behind or underneath the bed.",
    "whyWeLike": "A soft halo wash that makes the bed feel like it is floating.",
    "keepInMind": "Measure your bed's width first; strips can be cut but not easily re-joined."
  },
  {
    "id": "b08xx3xybb",
    "name": "Small Bedroom Bookshelf",
    "description": "A small bookshelf turns a bedroom corner into a library corner. Shelves of books, plants and framed prints add the collected, lived-in layers flat furniture cannot, and give bedtime reading a home that is not the floor. Pick a height that suits your corner and a finish that matches your other pieces.",
    "asin": "B08XX3XYBB",
    "amazonUrl": "https://www.amazon.com/s?k=small+bookshelf+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71ntSsl29eL._AC_SL1500_.jpg",
    "ctaLabel": "View this bookshelf on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A bedroom corner that could become a tiny library.",
    "whyWeLike": "Books, plants and prints add the collected layers flat furniture cannot.",
    "keepInMind": "Small shelves fill fast \u2014 best for bedtime reading, not a whole collection."
  },
  {
    "id": "b0cfq7ypt3",
    "name": "Floral Wall Decal Set",
    "description": "Renters and commitment-phobes, this is your wall art. Peel-and-stick floral decals bloom above the bed or around the mirror in minutes, come off clean when you move, and cost a fraction of wallpaper. Arrange them trailing from a corner for the most natural look, in colours that suit your palette.",
    "asin": "B0CFQ7YPT3",
    "amazonUrl": "https://www.amazon.com/s?k=floral+wall+decals+peel+and+stick&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ZinWqqWBL._AC_SL1500_.jpg",
    "ctaLabel": "See these wall decals on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Renters and commitment-phobes who want blooming walls.",
    "whyWeLike": "Peel-and-stick flowers go up in minutes and come off clean when you move.",
    "keepInMind": "Decals stick best to smooth walls \u2014 rough texture can lift the edges."
  },
  {
    "id": "b0czdjrj6x",
    "name": "Upholstered End-of-Bed Bench",
    "description": "The foot of the bed is wasted without a bench. An upholstered bench gives you a seat for dressing, a landing spot for the throw and tomorrow's outfit, and that finished hotel-suite line across the bed's end. Choose a width a little narrower than your bed and a fabric that suits your scheme.",
    "asin": "B0CZDJRJ6X",
    "amazonUrl": "https://www.amazon.com/s?k=upholstered+bench+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71sm5bbabKL._AC_SL1500_.jpg",
    "ctaLabel": "View this bed bench on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Dressing in the morning, and landing the throw at night.",
    "whyWeLike": "It gives the bed that finished, hotel-suite line across its end.",
    "keepInMind": "Choose a width a little narrower than your bed so it does not crowd walkways."
  },
  {
    "id": "b07zpmvj2d",
    "name": "Macrame Dream Catcher",
    "description": "Above the bed, a dreamcatcher is the softest kind of wall art. Woven webbing, feathers and beads bring handcrafted boho texture that suits the sleep space it hangs over, and it layers beautifully with macrame and fairy lights. Pick a size that holds its own above your headboard.",
    "asin": "B07ZPMVJ2D",
    "amazonUrl": "https://www.amazon.com/s?k=macrame+dream+catcher&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71YrhJV6ptL._AC_SL1500_.jpg",
    "ctaLabel": "See this dream catcher on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Above the bed, where wall art should be the softest kind.",
    "whyWeLike": "Woven webbing, feathers and beads layer beautifully with macrame and fairy lights.",
    "keepInMind": "Feathers are delicate \u2014 hang it away from a fan's direct breeze."
  },
  {
    "id": "b08nvvv76q",
    "name": "LED Neon Wall Sign",
    "description": "An LED neon sign above the bed or desk corner adds a playful, after-dark personality that plain prints cannot: part lamp, part artwork. Choose a word or shape that fits your vibe, and a colour that matches your lighting scheme.",
    "asin": "B08NVVV76Q",
    "amazonUrl": "https://www.amazon.com/s?k=led+neon+sign+for+bedroom+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/41px5oL1UyS._AC_.jpg",
    "ctaLabel": "View this neon sign on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "A bedroom wall that needs one real statement.",
    "whyWeLike": "One glowing word works as part lamp, part artwork after dark.",
    "keepInMind": "You will need an outlet within cord reach, or a battery-powered model."
  },
  {
    "id": "b0dxdshtsc",
    "name": "Decorative Wall Clock",
    "description": "A decorative wall clock fills the awkward blank wall every bedroom has and gives the room a gentle focal point that is not a screen. Pick a size readable from the bed and a style that suits your walls.",
    "asin": "B0DXDSHTSC",
    "amazonUrl": "https://www.amazon.com/s?k=decorative+wall+clock+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71kDZrNUA7L._AC_SL1500_.jpg",
    "ctaLabel": "See this wall clock on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "The awkward blank wall every bedroom seems to have.",
    "whyWeLike": "A gentle focal point that is not a screen, readable from the bed.",
    "keepInMind": "Check whether it ticks \u2014 a silent-sweep movement matters in a bedroom."
  },
  {
    "id": "b07rgcwcz8",
    "name": "Jewelry Stand Organizer",
    "description": "Necklaces tangled in a drawer are jewellery you never wear. A jewellery stand turns them into a display on the dresser \u2014 branches or tiers of gold-toned metal that keep chains untangled and make choosing earrings part of the decor. Pick a height that fits under your mirror or shelf.",
    "asin": "B07RGCWCZ8",
    "amazonUrl": "https://www.amazon.com/s?k=jewelry+stand+organizer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71yuxvqi62L._AC_SL1500_.jpg",
    "ctaLabel": "View this jewelry stand on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Necklaces currently tangled in a drawer, never worn.",
    "whyWeLike": "It turns chains into a dresser display and makes choosing earrings part of the decor.",
    "keepInMind": "Measure the height against your mirror or shelf clearance before ordering."
  },
  {
    "id": "b001892ax2",
    "name": "Himalayan Salt Lamp",
    "description": "A salt lamp is the warmest night light a bedroom can have. The amber rock glow is softer than any bulb, reads like a tiny sunset on the nightstand, and gives late-evening light that does not wake the room up. Choose a natural rock or a bowl style to suit your nightstand.",
    "asin": "B001892AX2",
    "amazonUrl": "https://www.amazon.com/s?k=himalayan+salt+lamp&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71IWhPAUE0L._AC_SL1254_.jpg",
    "ctaLabel": "See this salt lamp on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Nightstands that need the softest possible evening light.",
    "whyWeLike": "The amber rock glow reads like a tiny sunset and never wakes the room up.",
    "keepInMind": "Salt lamps can sweat in humid weather \u2014 keep a small mat underneath."
  },
  {
    "id": "b0b4d5nkft",
    "name": "Indoor Plant Stand",
    "description": "A plant stand lifts a trailing pot to window height, where the leaves catch light and spill over the edge, even with faux plants. Tiered stands let you build a little green cluster. Pick a finish that suits your furniture.",
    "asin": "B0B4D5NKFT",
    "amazonUrl": "https://www.amazon.com/s?k=plant+stand+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81X1HPeIUKL._AC_SL1500_.jpg",
    "ctaLabel": "View this plant stand on Amazon",
    "featured": false,
    "active": true,
    "bestFor": "Plants stuck on the floor in the corner.",
    "whyWeLike": "It lifts pots to window height, where leaves catch the light and spill over the edge.",
    "keepInMind": "Check each tier's weight limit and pot diameter before ordering."
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
    "intro": "A tired, dark bedroom gets calmer with the same ingredients our most-saved pins use: layered bedding, something soft underfoot, curtains that glow at golden hour and a little warm light after dark. The finds below go through them one by one, so you can pick the versions that fit your space.",
    "closingNote": "Start with one layer \u2014 the rug or the fairy lights \u2014 and the whole room softens. Save this guide to your bedroom board so the list is there when you are ready to shop the look.",
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
      },
      {
        "productId": "b0dcty6yg9"
      },
      {
        "productId": "b0ckplrbln"
      },
      {
        "productId": "b0b8d2k76v"
      },
      {
        "productId": "b0h7wxs3qb"
      },
      {
        "productId": "b082413mwq"
      },
      {
        "productId": "b0dlgbq15k"
      },
      {
        "productId": "b0fj8y1j9s"
      },
      {
        "productId": "b0d3w6xks4"
      },
      {
        "productId": "b0bxkzc8qp"
      },
      {
        "productId": "b0fgxnz4tp"
      },
      {
        "productId": "b0bm7kj56g"
      },
      {
        "productId": "b07pt6qrxn"
      },
      {
        "productId": "b0ccm9jlh1"
      },
      {
        "productId": "b095pcsv4t"
      },
      {
        "productId": "b07jk99mb1"
      },
      {
        "productId": "b07xgkx327"
      },
      {
        "productId": "b08xx3xybb"
      },
      {
        "productId": "b0cfq7ypt3"
      },
      {
        "productId": "b0czdjrj6x"
      },
      {
        "productId": "b07zpmvj2d"
      },
      {
        "productId": "b08nvvv76q"
      },
      {
        "productId": "b0dxdshtsc"
      },
      {
        "productId": "b07rgcwcz8"
      },
      {
        "productId": "b001892ax2"
      },
      {
        "productId": "b0b4d5nkft"
      }
    ],
    "seo": {
      "title": "Top Bedroom Products \u2014 Shop the Look | The Cozy Canvas",
      "description": "Soft layers, warm light and the little pieces that make a bedroom feel like a hug.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed23.webp"
    },
    "createdAt": 1761000000000,
    "updatedAt": 1761000000000,
    "howToChoose": "Start with a tape measure, not a shopping cart: rug size against the bed, curtain length against the window, shelf length against the wall. Most decor returns happen because measuring stayed in the drawer. Then fix the light. One warm source at bed height (a lamp, a strand of fairy lights) does more for the mood than any single statement piece. Build the palette from the biggest thing you own, usually the bedding, and let everything else echo its two softest colours. Add in layers rather than all at once: soft underfoot, soft to touch, soft to look at, in that order."
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
    "intro": "A flat living room becomes the room everyone drifts to when it has something sink-in to sit on, something soft underfoot, warm wood, pools of lamplight and texture you can feel. The finds below go through that list piece by piece, so you can pick the versions that fit your space.",
    "closingNote": "You do not need a full makeover \u2014 two or three of these in the right corner change the whole mood. Pin this guide for your next slow Sunday refresh.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0cpc1nczs"
      },
      {
        "productId": "b0g3qtvwm7"
      },
      {
        "productId": "b09tt9qyjk"
      },
      {
        "productId": "b0g48sldzh"
      },
      {
        "productId": "b013i50z30"
      },
      {
        "productId": "b0g5yhlmz4"
      },
      {
        "productId": "b0b3544gym"
      },
      {
        "productId": "b0dczmz1lf"
      },
      {
        "productId": "b0cghvjcck"
      },
      {
        "productId": "search-living-room-pouf"
      },
      {
        "productId": "b0frmtsrfm"
      },
      {
        "productId": "b0f9pfb5st"
      }
    ],
    "seo": {
      "title": "Top Living Room Products \u2014 Shop the Look | The Cozy Canvas",
      "description": "The cushions, rugs and glowy corners behind our most-loved living room pins.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv3.webp"
    },
    "createdAt": 1760913600000,
    "updatedAt": 1760913600000,
    "howToChoose": "Begin with the sofa and work outward: the rug should reach at least under the sofa's front legs, the coffee table should sit a comfortable arm's length away, and everything after that is layering. Choose one hero piece (the loveseat, the rug, the art set) and let it set the palette; smaller pieces should echo its colours, not compete with them. Keep light low and warm, from lamps and string lights rather than ceiling glare. And leave one surface nearly empty: a calm room needs a place for the eye to rest."
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
    "intro": "A crowded dresser top turns into a proper getting-ready corner when you build it the way our most-saved vanity pins do: good light first, a mirror you love, and a place for every small thing. The finds below build that corner step by step, so you can pick the versions that fit your space.",
    "closingNote": "Light first, mirror second, then the little luxuries \u2014 that order never fails. Save this to your vanity board for later.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b0fwr8fm83"
      },
      {
        "productId": "b00zf1qr88"
      },
      {
        "productId": "b0cm65jld3"
      },
      {
        "productId": "b0gf7rtcxq"
      },
      {
        "productId": "b07sdlk4zg"
      },
      {
        "productId": "b0fz8nhll7"
      },
      {
        "productId": "b099596f3b"
      },
      {
        "productId": "b0c4km4c94"
      },
      {
        "productId": "b09lyf93bq"
      },
      {
        "productId": "b0c9t7j41y"
      },
      {
        "productId": "b0bbfxcwfj"
      },
      {
        "productId": "b0g5175pzq"
      }
    ],
    "seo": {
      "title": "Top Vanity Products \u2014 Shop the Look | The Cozy Canvas",
      "description": "Mirrors, trays and little luxuries for a vanity corner that feels like a boutique.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/van5.webp"
    },
    "createdAt": 1760827200000,
    "updatedAt": 1760827200000,
    "howToChoose": "Light comes first, always: choose the mirror and its lighting before any organiser, because good light changes how every product you own performs. Next, measure your surface honestly: a tray, an organiser and shelves should hold what you use daily, with drawers swallowing the rest. Keep the palette tight: glass, stone and one metal finish is plenty, so small bottles read as a collection instead of clutter. And leave a hand's width of counter empty. That small gap is the difference between a tidy corner and a busy one."
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
    "intro": "A desk you rush away from becomes a corner you happily settle into when it glows a little after dark, keeps one soft colour running through it, and hides every cable out of sight. The finds below build that feeling piece by piece, so you can pick the versions that fit your setup.",
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
        "productId": "b0895ddn47"
      },
      {
        "productId": "b07s6r7sdw"
      },
      {
        "productId": "b0h4vhspvg"
      },
      {
        "productId": "b0dpzpfkdp"
      },
      {
        "productId": "b07n1cmgqq"
      },
      {
        "productId": "b09bldcg64"
      }
    ],
    "seo": {
      "title": "Cozy Desk Setup Finds \u2014 Shop the Look | The Cozy Canvas",
      "description": "Warm light, soft colour and calm order for a desk you actually want to sit at.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok2.webp"
    },
    "createdAt": 1760740800000,
    "updatedAt": 1760740800000,
    "howToChoose": "Start with ergonomics, because you will feel them longer than any colour: screen at eye level, a chair that genuinely supports your back, and a desk height that lets your elbows rest easy. Then run one colour through the small things (mat, mouse, keyboard) so the setup reads as a single idea. Hide the cables before buying anything pretty; a tidy desk photographs better than a decorated messy one. Add the glow last: a strip behind the desk or monitor is the cheapest 'finished' feeling there is."
  },
  {
    "id": "post-christmas",
    "title": "Christmas Decor Finds",
    "slug": "christmas-decor-finds",
    "hook": "Warm lights, soft layers and a little sparkle \u2014 the pieces behind our most-saved Christmas pins.",
    "collectionId": "col-seasonal",
    "status": "published",
    "publishAt": null,
    "tint": "primary-soft",
    "heroImages": [
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed1.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bal3.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed11.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv15.webp",
      "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed17.webp"
    ],
    "intro": "An ordinary room becomes the one everyone wants to be in all December when it is built layer by layer, the way our most-saved Christmas pins are: the tree first, then the light, then the soft things people can touch. The finds below follow that same order, so you can pick the versions that fit your home and your tree.",
    "closingNote": "Start with the glow \u2014 tree lights and one strand of fairy lights \u2014 and the rest can arrive a little at a time, the way the best Christmases always do. Save this guide to your Christmas board so it is ready when the boxes come down from storage.",
    "trackingId": "finisher090-20",
    "blocks": [
      {
        "productId": "b004g7ri76"
      },
      {
        "productId": "b07xs89q9b"
      },
      {
        "productId": "b0dxl27rnt"
      },
      {
        "productId": "b08d6692yj"
      },
      {
        "productId": "b00lkrmwey"
      },
      {
        "productId": "b00lkrmnwk"
      },
      {
        "productId": "b0cdbhg318"
      },
      {
        "productId": "b0h6w64l4q"
      },
      {
        "productId": "b07g43ks2g"
      },
      {
        "productId": "b07k46vs42"
      },
      {
        "productId": "b0cdkxvk32"
      },
      {
        "productId": "b0bd7pm599"
      }
    ],
    "seo": {
      "title": "Christmas Decor Finds \u2014 Shop the Look | The Cozy Canvas",
      "description": "Warm lights, soft layers and a little sparkle \u2014 the pieces behind our most-saved Christmas pins.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed1.webp"
    },
    "createdAt": 1761868800000,
    "updatedAt": 1761868800000,
    "howToChoose": "Work in the order the room comes together: tree first (measure ceiling height and floor space before choosing), then lights, then ornaments, then the soft layers people actually touch. Pick one colour story (classic red-and-cream, frosty silver, blush-and-gold) and let the wreath, garland and stockings all speak it, so separately bought pieces feel collected over years. Buy with storage in mind too: shatterproof, foldable pieces survive December after December. And keep one corner deliberately simple, with just a candle and a strand of lights, for the quiet evenings."
  }
];
