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
    "description": "It is the five-minute change that makes a plain bed look styled on purpose. Velvet pillow covers add that soft sheen and layered depth you see in every saved bedroom pin \u2014 two blush, two cream, and suddenly the whole bed feels dressed. They zip off for washing and swap easily with the seasons, so pick the shades that fit your bedding and your light.",
    "asin": "B0DW3LT68W",
    "amazonUrl": "https://www.amazon.com/s?k=velvet+throw+pillow+covers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ASD0cIniL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0fsqp1f4f",
    "name": "Rose Pink Duvet Cover Set",
    "description": "This is the layer that decides the mood of the whole room before anything else goes on the bed. A rose pink duvet wraps the bed in the soft blush tone cozy bedrooms are loved for, and a prewashed fabric feels gentle from the very first night. Choose the shade depth that suits your walls \u2014 pale for airy, deeper for cocoon.",
    "asin": "B0FSQP1F4F",
    "amazonUrl": "https://www.amazon.com/s?k=rose+pink+duvet+cover+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81itU6f6vAL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0852wlh7m",
    "name": "Fluffy Shag Area Rug",
    "description": "It is the first thing your feet meet in the morning, and it should feel like a small kindness. A deep, fluffy rug beside the bed takes away the cold-floor shock and quietly marks the sleeping corner off from the rest of the room. Cream and beige versions soften almost any palette \u2014 pick the size that tucks a little way under the bed.",
    "asin": "B0852WLH7M",
    "amazonUrl": "https://www.amazon.com/s?k=fluffy+shag+area+rug&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91K7mNd8eyL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0cj6nl33d",
    "name": "Cream Linen Curtains",
    "description": "These are what make the light itself look soft. Cream linen panels filter the sun into that golden, hazy glow bedroom pins are famous for, while still giving you privacy. The natural weave keeps the room feeling airy rather than dressed up \u2014 choose a length that just kisses the floor.",
    "asin": "B0CJ6NL33D",
    "amazonUrl": "https://www.amazon.com/s?k=cream+linen+curtains&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81OoGnQo6NL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0df87s24q",
    "name": "Chunky Knit Throw Blanket",
    "description": "Draped over the foot of the bed, it is the layer that quietly whispers slow down. A chunky knit throw adds the hand-made texture plain bedding is missing, and it is always within reach for reading-in-bed evenings. Buttercream goes with nearly everything \u2014 pick the weight that fits your climate.",
    "asin": "B0DF87S24Q",
    "amazonUrl": "https://www.amazon.com/s?k=chunky+knit+throw+blanket&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81A0IfgJt4L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b00jr5n0jm",
    "name": "Warm Fairy String Lights",
    "description": "This is the light that makes the whole room glow after dark. A warm fairy-light strand looped along the headboard or a shelf replaces harsh ceiling light with a soft, sleepy shimmer, and it might be the simplest transformation in this whole guide. Choose a strand length that fits your headboard or window.",
    "asin": "B00JR5N0JM",
    "amazonUrl": "https://www.amazon.com/s?k=warm+fairy+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81VwJ0tZC7L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0f1sph2c5",
    "name": "Ceramic Vase with Faux Flowers",
    "description": "It is the tiny corner-filler that makes a dresser look finished instead of forgotten. A small vase with soft faux blooms brings a gentle, living shape to flat surfaces \u2014 and it never wilts, drops petals or asks for watering. Pick bloom tones that echo your bedding for an easy, pulled-together feel.",
    "asin": "B0F1SPH2C5",
    "amazonUrl": "https://www.amazon.com/s?k=ceramic+vase+with+faux+flowers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61NzxAduRhL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dw3s8pm3",
    "name": "Faux Hanging Plants",
    "description": "Greenery trailing from a shelf makes the whole room feel alive \u2014 without a single watering can. Faux hanging plants soften high, empty corners and borrow a little of nature's calm for the bedroom. Choose a trailing length that fits your shelf height and let it spill.",
    "asin": "B0DW3S8PM3",
    "amazonUrl": "https://www.amazon.com/s?k=faux+hanging+plants&tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed19.webp",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f5wdc64g",
    "name": "Nightstand with Charging Station",
    "description": "No more cable tangle glowing in the dark \u2014 this is the bedside that finally behaves. A nightstand with built-in charging and a soft LED glow keeps your phone, book and glass of water in one calm place, while the drawers hide the clutter that used to live on top. Pick the finish that matches your bed frame.",
    "asin": "B0F5WDC64G",
    "amazonUrl": "https://www.amazon.com/s?k=nightstand+with+charging+station&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ipPLK-lxL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f2mbl1l2",
    "name": "Arched Gold Wall Mirror",
    "description": "It is the one piece that makes the room feel twice as bright, and quietly grand. An arched gold mirror above the dresser bounces daylight around, softens all the straight lines of bedroom furniture and gives you a proper getting-ready moment. Choose the size that suits your dresser width \u2014 a little oversized is the trick.",
    "asin": "B0F2MBL1L2",
    "amazonUrl": "https://www.amazon.com/s?k=arched+gold+wall+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81czqFS25GL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f5h17s8v",
    "name": "Boucle Cloud Bed Frame",
    "description": "This is the statement the whole room quietly organises itself around. A blush boucle bed frame with a cloud-soft headboard turns the bed into a padded, cocooning centrepiece you can lean into with a book. If your room leans neutral, the pink is softer than you think \u2014 pick the size that fits your mattress and your space.",
    "asin": "B0F5H17S8V",
    "amazonUrl": "https://www.amazon.com/s?k=boucle+upholstered+bed+frame&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71GFnMvt6iL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g42qlwxf",
    "name": "Botanical Framed Canvas Wall Art Set",
    "description": "Bare wall above the bed? This is the calm, finished answer. A set of botanical framed canvases brings gentle green shapes and a gallery rhythm to the biggest empty surface in the room, without the commitment of paint or wallpaper. Hang them in a row or a loose grid \u2014 choose the set size that fits your wall.",
    "asin": "B0G42QLWXF",
    "amazonUrl": "https://www.amazon.com/s?k=botanical+framed+canvas+wall+art+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71H9JGtmuKL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g3qtvwm7",
    "name": "Deep Seat Loveseat",
    "description": "It is the seat everyone quietly hopes is free when they walk into the room. A deep, sink-in loveseat gives the living room a true anchor \u2014 somewhere to curl up sideways with a book, a blanket and nowhere to be. Soft neutral upholstery keeps it easy to style around \u2014 pick the shade that sits happily with your rug and cushions.",
    "asin": "B0G3QTVWM7",
    "amazonUrl": "https://www.amazon.com/s?k=deep+seat+loveseat&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81XW1YWY27L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b013i50z30",
    "name": "Rustic Wood Coffee Table",
    "description": "It is the warm centre everything else gathers around. A solid wood coffee table grounds the seating area with real grain and a little rustic character, and it is sturdy enough for feet, trays and board games alike. Choose the finish that picks up the warm tones already in your room.",
    "asin": "B013I50Z30",
    "amazonUrl": "https://www.amazon.com/s?k=rustic+wood+coffee+table&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Ob-n5D+NL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g5yhlmz4",
    "name": "Scented Soy Candle Set",
    "description": "It is the glow that makes an ordinary evening feel like an occasion. A set of little scented soy candles scattered on a tray or shelf wraps the room in warm flickering light and a soft, calming scent \u2014 the finishing layer cozy corners are made of. Pick the scent family that feels like you, and keep a few in reserve for slow Sundays.",
    "asin": "B0G5YHLMZ4",
    "amazonUrl": "https://www.amazon.com/s?k=scented+soy+candle+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/8156Pd2RBiL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "search-living-room-pouf",
    "name": "Knit Pouf Ottoman",
    "description": "It is the piece every cozy living room is secretly missing. A chunky knit pouf adds soft, handmade texture at ankle height, works as a footrest, extra seat or a side table for a cup of tea, and tucks happily into any empty corner. Pick the colour that echoes your cushions and throw.",
    "asin": "B07RXKXMTS",
    "amazonUrl": "https://www.amazon.com/s?k=knitted+pouf+ottoman&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81-Z8stLesL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f9pfb5st",
    "name": "Floating Wall Shelves",
    "description": "That blank stretch of wall is quietly asking for this. Floating shelves turn dead space above a sofa, desk or vanity into a styled little gallery for plants, frames and favourite things \u2014 without a bulky bookcase eating the floor. Choose the wood tone that matches your other furniture, and the length that fits your wall.",
    "asin": "B0F9PFB5ST",
    "amazonUrl": "https://www.amazon.com/s?k=floating+wall+shelves&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81fl7Vu8zjL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0fwr8fm83",
    "name": "Fluted Vanity Desk with LED Mirror",
    "description": "It is the piece that turns a bedroom corner into your own tiny boutique. A fluted vanity desk with a built-in LED mirror and charging gives you light, storage and a beautiful surface in one footprint \u2014 no more getting ready hunched over a bathroom sink. Pick the size that fits your corner and let it anchor the whole ritual.",
    "asin": "B0FWR8FM83",
    "amazonUrl": "https://www.amazon.com/s?k=vanity+desk+with+led+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91zmkVTIoZL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07sdlk4zg",
    "name": "Hollywood Lighted Makeup Mirror",
    "description": "This is the light that never lies to you. A Hollywood mirror ringed with dimmable bulbs gives even, shadow-free light, so makeup goes on the way it will actually look outside \u2014 and the glow alone makes the vanity feel glamorous. Choose the bulb warmth and size that suit your space.",
    "asin": "B07SDLK4ZG",
    "amazonUrl": "https://www.amazon.com/s?k=hollywood+lighted+makeup+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71pWREeW3UL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0fz8nhll7",
    "name": "Rotating Makeup Organizer",
    "description": "No more digging through a makeup bag while your foundation sets. A rotating organizer keeps lipsticks, brushes and skincare standing upright and visible, one gentle spin away \u2014 and it makes the countertop look deliberately styled instead of crowded. Pick the tier size that fits your collection.",
    "asin": "B0FZ8NHLL7",
    "amazonUrl": "https://www.amazon.com/s?k=rotating+makeup+organizer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71FKCoFmGmL._SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0c4km4c94",
    "name": "Travertine Perfume Tray",
    "description": "It is the smallest upgrade with the most expensive-looking effect. A natural travertine tray gathers perfume bottles and little luxuries into one grounded, spa-like arrangement, and its soft stone texture flatters everything placed on it. Choose the shape that fits your vanity top.",
    "asin": "B0C4KM4C94",
    "amazonUrl": "https://www.amazon.com/s?k=travertine+perfume+tray&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61kQodNJseL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g5175pzq",
    "name": "Rotating Brush Holder with Lid",
    "description": "Dust on your brushes is the detail nobody talks about \u2014 and this quietly fixes it. A rotating brush holder with a lid keeps tools upright, sorted and clean under cover, while the spin makes every brush easy to reach mid-routine. Pick the compartment layout that matches the brushes you actually use.",
    "asin": "B0G5175PZQ",
    "amazonUrl": "https://www.amazon.com/s?k=rotating+makeup+brush+holder+with+lid&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71IM7L5acIL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0b41ybq9j",
    "name": "Electric Standing Desk",
    "description": "It is the desk that moves with your energy instead of trapping you in one position. An electric standing desk lets you float from sitting focus to standing stretch at the touch of a button, and a clean, light finish keeps even a small room feeling open. Choose the desktop size that fits your corner and your screens.",
    "asin": "B0B41YBQ9J",
    "amazonUrl": "https://www.amazon.com/s?k=electric+standing+desk&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81HH3xbEG0L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dzckgdyz",
    "name": "Wireless Mechanical Keyboard",
    "description": "It is the one thing your hands touch all day \u2014 it may as well make you happy. A wireless mechanical keyboard brings that soft, satisfying key feel and a splash of gentle colour to the desk, with no cable snaking across it. Pick the layout and switch feel that suit how you type.",
    "asin": "B0DZCKGDYZ",
    "amazonUrl": "https://www.amazon.com/s?k=wireless+mechanical+keyboard&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71JoeE3K2wL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0frmndrdy",
    "name": "Ergonomic Gaming Chair",
    "description": "Long sessions stop being kind to an ordinary chair \u2014 this is the upgrade your back has been asking for. An ergonomic gaming chair with real lumbar support and a footrest turns marathon workdays and game nights into sink-in comfort, and the soft colour keeps it pretty, not plasticky. Choose the shade that fits your setup's palette.",
    "asin": "B0FRMNDRDY",
    "amazonUrl": "https://www.amazon.com/s?k=ergonomic+gaming+chair&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71zh0VddzwL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b09dvl5gk9",
    "name": "Wireless Mouse",
    "description": "It is the smallest piece on the desk, and somehow the one that ties the whole palette together. A soft-coloured wireless mouse glides quietly beside the keyboard, frees you from one more cable and feels comfortable through a full day of clicks. Pick the colour that matches your mat and keyboard.",
    "asin": "B09DVL5GK9",
    "amazonUrl": "https://www.amazon.com/s?k=wireless+mouse&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/713Om5Q1U0L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0d3fgfppb",
    "name": "27-Inch QHD Monitor",
    "description": "A black monitor can bully a soft setup \u2014 this one politely blends in. A 27-inch QHD screen with a pale bezel keeps the desk feeling light and airy while giving you crisp space for work, study and streams. Choose the panel that fits your desk depth, and prop it at eye level for the calmest posture.",
    "asin": "B0D3FGFPPB",
    "amazonUrl": "https://www.amazon.com/s?k=27+inch+qhd+monitor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81mNxcELHXL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0f1crd5wy",
    "name": "Pink Desk Mat",
    "description": "It is the fastest way to make a plain desk look intentionally styled. A wide pink desk mat draws a soft boundary around your workspace, cushions your wrists and gives the keyboard and mouse a shared, pretty home. Pick the size that spans your setup, from laptop-only to full dual-screen.",
    "asin": "B0F1CRD5WY",
    "amazonUrl": "https://www.amazon.com/s?k=pink+desk+mat&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71mWgTFoajL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07n1cmgqq",
    "name": "Smart RGB LED Strip Lights",
    "description": "This is the glow that makes the whole setup feel finished after dark. Smart RGB strips tucked behind the desk wash the wall in soft colour you can change with your voice or an app \u2014 warm amber for focus, pink for game night. Choose the length that traces your desk and monitor edges.",
    "asin": "B07N1CMGQQ",
    "amazonUrl": "https://www.amazon.com/s?k=smart+rgb+led+strip+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/516qHxwqhFL._AC_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b004g7ri76",
    "name": "Pre-Lit Artificial Christmas Tree",
    "description": "It is the moment the season officially moves into your home. A full, pre-lit tree fills the corner with warm white glow the second it stands up \u2014 no wrestling with tangled light strings, no bare patches to hide at the back. Hinged branches fall into shape almost on their own, so the decorating fun starts right away. Pick the height that suits your ceiling and let everything else in this guide gather around it.",
    "asin": "B004G7RI76",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+artificial+christmas+tree&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91-IM-2UMhL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": true,
    "active": true
  },
  {
    "id": "b0dxl27rnt",
    "name": "Shatterproof Christmas Ornament Set",
    "description": "This is the sparkle that makes the whole tree feel dressed, not just decorated. A coordinated set of shatterproof baubles in mixed finishes \u2014 shiny, matte and glitter \u2014 layers colour and light through every branch, and it survives curious kids, wagging tails and the annual tumble out of storage. Choose the palette that matches your wrapping paper and let it run through the whole room.",
    "asin": "B0DXL27RNT",
    "amazonUrl": "https://www.amazon.com/s?k=shatterproof+christmas+ornaments+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/915jWUu5eeL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b00lkrmnwk",
    "name": "Pre-Lit Christmas Wreath",
    "description": "It is the welcome your front door gives before anyone even knocks. A lush pre-lit wreath with berries and pinecones glows softly at dusk, turning an ordinary door into the prettiest one on the street \u2014 and it works just as beautifully above a mantel or on a bare hallway wall. Pick a size that fills your door without crowding it, and let it set the tone for everything inside.",
    "asin": "B00LKRMNWK",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+christmas+wreath&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/A1WcfYz5K9L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b00lkrmwey",
    "name": "Pre-Lit Christmas Garland",
    "description": "Draped along the mantel, it is the green thread that ties the whole room together. A generous pre-lit garland with warm lights woven through the branches softens the fireplace, the staircase or a doorway in minutes, and makes every stocking and candle in front of it look twice as pretty. Choose the length that swags the way you like \u2014 deep and lazy is the cozy way.",
    "asin": "B00LKRMWEY",
    "amazonUrl": "https://www.amazon.com/s?k=pre+lit+christmas+garland&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/915qNIX+DzL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cdbhg318",
    "name": "Cable Knit Christmas Stockings",
    "description": "Hung in a row, they are the promise that Christmas morning is coming. Chunky cable-knit stockings bring the same hand-made softness as your favourite winter sweater to the mantel, and they are roomy enough for the good stuff \u2014 oranges, chocolates and small wrapped surprises. Pick a matching set for the whole family, or mix cream and blush for that collected-over-years feel.",
    "asin": "B0CDBHG318",
    "amazonUrl": "https://www.amazon.com/s?k=cable+knit+christmas+stockings&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71P+qHZAtKL._AC_SL1000_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07g43ks2g",
    "name": "Faux Fur Christmas Tree Skirt",
    "description": "It is the soft white landing that makes the tree look finished from floor to star. A plush faux fur skirt hides the stand and the tangle of cords, pools like fresh snow under the branches and gives presents a beautiful place to sit. Against warm tree lights it glows almost on its own \u2014 choose the diameter that lets gifts spill a little beyond its edge.",
    "asin": "B07G43KS2G",
    "amazonUrl": "https://www.amazon.com/s?k=faux+fur+christmas+tree+skirt&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/719iKPpL20L._AC_SL1254_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b08d6692yj",
    "name": "Lighted Star Tree Topper",
    "description": "Every tree needs its final full stop \u2014 and this one throws a little magic on the ceiling while it is at it. A lighted star topper crowns the tree with a warm glow and projects drifting snowflakes above it, so the whole corner feels like the inside of a snow globe after dark. Pick the finish that matches your ornaments, gold for classic or silver for frosty.",
    "asin": "B08D6692YJ",
    "amazonUrl": "https://www.amazon.com/s?k=lighted+star+christmas+tree+topper&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81qtUzUERKL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07k46vs42",
    "name": "Christmas Throw Pillow Covers",
    "description": "It is the ten-minute makeover your sofa has been waiting for all year. Swapping plain cushion covers for festive ones \u2014 little trees, gentle lettering, soft winter reds \u2014 changes the mood of the whole room without buying a single new cushion. They zip on and off, so the everyday covers come back in January. Pick the set whose colours already live in your room.",
    "asin": "B07K46VS42",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+pillow+covers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Ti8998rUL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cdkxvk32",
    "name": "Christmas Throw Blanket",
    "description": "This is the layer that turns watching a holiday film into an occasion. A soft Christmas throw in a gentle plaid drapes over the sofa arm all season \u2014 part decoration, part invitation \u2014 and it is always within reach when the cocoa is ready. The cream-and-red check flatters almost any palette; pick the size that covers two people and a small dog.",
    "asin": "B0CDKXVK32",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+throw+blanket&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81OI15YVryL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0bd7pm599",
    "name": "Wooden Nutcracker Ornament Set",
    "description": "They are the tiny storytellers of the tree \u2014 a little parade of painted soldiers standing guard among the branches. A set of wooden nutcracker ornaments adds the nostalgic, collected-over-generations charm that plain baubles cannot, and each one becomes a small treasure kids look for every year. Scatter them evenly, or cluster a few where the lights are warmest.",
    "asin": "B0BD7PM599",
    "amazonUrl": "https://www.amazon.com/s?k=wooden+nutcracker+christmas+decorations&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/7105vOHO4hL._AC_SL1000_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0ckplrbln",
    "name": "Rattan Pendant Ceiling Light",
    "description": "The light above the bed does more styling than almost anything else in the room. A woven rattan shade turns harsh ceiling light into a warm, patterned glow and gives plain ceilings that boutique-hotel finish bedroom pins always have. Hang one over the bed or a pair over the nightstands, and pick a shade size that suits your ceiling height.",
    "asin": "B0CKPLRBLN",
    "amazonUrl": "https://www.amazon.com/s?k=pendant+light+fixture+aesthetic+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Mc6ntfaVL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0b8d2k76v",
    "name": "Wood Base Bedside Table Lamp",
    "description": "Bedside light should feel like a sunset, not a spotlight. A warm wood base with a soft fabric shade gives you exactly that glow for reading and winding down, and the natural texture sits beautifully against linen bedding and pale walls. Choose the bulb warmth and shade size that fit your nightstand.",
    "asin": "B0B8D2K76V",
    "amazonUrl": "https://www.amazon.com/s?k=wood+base+bedside+table+lamp&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71JDzhWxOQL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b082413mwq",
    "name": "Chubby Seal Plush Pillow",
    "description": "Every styled bed needs one soft, silly finishing touch. A chubby plush propped against the pillows instantly makes the whole bed look huggable and photo-ready \u2014 it is the detail that turns a made bed into a cozy scene. Pick the size and character that match your room's colours.",
    "asin": "B082413MWQ",
    "amazonUrl": "https://www.amazon.com/s?k=cute+plush+pillow+for+bed+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/51URGiqvjKL._AC_SL1000_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dlgbq15k",
    "name": "Oversized Reading Armchair",
    "description": "A bedroom corner with a chair in it stops being storage for clothes and starts being a reading nook. An oversized cushioned armchair gives you a slow-morning seat for books and coffee, and softens the room's straight lines. Choose a fabric colour that echoes your bedding or curtains.",
    "asin": "B0DLGBQ15K",
    "amazonUrl": "https://www.amazon.com/s?k=oversized+reading+armchair+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/811pOGsOhLL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0fgxnz4tp",
    "name": "Woven Cotton Rope Storage Basket",
    "description": "Clutter is the fastest way to kill a calm bedroom, and woven baskets are the prettiest way to hide it. A cotton rope basket swallows spare throws, chargers and bedtime bits while adding soft, handmade texture beside the bed or dresser. Pick the size that fits your spare-blanket pile.",
    "asin": "B0FGXNZ4TP",
    "amazonUrl": "https://www.amazon.com/s?k=woven+storage+basket+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/818WlELkdfL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0bm7kj56g",
    "name": "Sheer Canopy Bed Curtains",
    "description": "Nothing transforms a plain bed frame like draping it. Sheer canopy curtains soften every edge, filter the morning light into a haze, and give the bed that floating, fairytale volume bedroom pins are famous for. Choose a length that pools slightly for the full effect, in white or a blush tone to match your palette.",
    "asin": "B0BM7KJ56G",
    "amazonUrl": "https://www.amazon.com/s?k=canopy+bed+curtains+sheer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61BqKQmqAKL._AC_SL1200_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07pt6qrxn",
    "name": "Macrame Wall Hanging Set",
    "description": "Bare walls above the bed make the whole room feel unfinished. A macrame hanging brings hand-knotted texture and gentle boho pattern that flat prints cannot, and a small set lets you build a mini gallery around it. Pick the width that suits the wall above your headboard.",
    "asin": "B07PT6QRXN",
    "amazonUrl": "https://www.amazon.com/s?k=macrame+wall+hanging+bedroom+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71OG0Cb-bXL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dcty6yg9",
    "name": "Scented Soy Candle Gift Set",
    "description": "Candlelight is what makes a bedroom feel like the end of the day. A small set of soy candles on the nightstand or dresser adds warm flicker and a soft scent that settles the room before sleep \u2014 styling and wind-down in one. Pick the scents that suit your evenings, from clean linen to warm vanilla.",
    "asin": "B0DCTY6YG9",
    "amazonUrl": "https://www.amazon.com/s?k=scented+candles+gift+set+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71D7IUUJpxL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0h7wxs3qb",
    "name": "Vanity Desk with LED Mirror and Drawers",
    "description": "A little getting-ready corner turns a bedroom into a suite. A compact vanity desk with a lit mirror and drawers keeps makeup and morning routines in one pretty spot instead of spread across the bed. Choose a finish that matches your other bedroom furniture, and a size that fits your corner.",
    "asin": "B0H7WXS3QB",
    "amazonUrl": "https://www.amazon.com/s?k=small+vanity+desk+with+mirror+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71z6KchQW2L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0fj8y1j9s",
    "name": "Walnut Floating Wall Shelves",
    "description": "Bedroom walls earn their keep when they hold the pretty things. Walnut floating shelves give books, plants and framed photos a warm, furniture-like ledge that echoes wooden nightstands and dressers. Style them in odd numbers and pick the length that suits the wall beside your bed or above the dresser.",
    "asin": "B0FJ8Y1J9S",
    "amazonUrl": "https://www.amazon.com/s?k=walnut+floating+shelves+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71QG9eHBWLL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0d3w6xks4",
    "name": "Velvet Round Storage Pouf",
    "description": "A soft pouf at the foot of the bed is part seat, part footrest, part styling. Velvet upholstery adds a jewel of texture where you sit to put on shoes or rest a folded throw, and it tucks neatly under a vanity too. Choose a colour that picks up your bedding or curtains.",
    "asin": "B0D3W6XKS4",
    "amazonUrl": "https://www.amazon.com/s?k=velvet+pouf+ottoman+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61wwSuvaoOL._AC_SL1000_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0bxkzc8qp",
    "name": "Round Lighted Vanity Mirror",
    "description": "The bedroom's vanity corner deserves light that flatters. A round lighted mirror softens the hard angles of a dresser top, gives even, shadow-free light for makeup, and doubles as a warm glow piece after dark. Pick a finish \u2014 white, gold or black \u2014 that matches your hardware.",
    "asin": "B0BXKZC8QP",
    "amazonUrl": "https://www.amazon.com/s?k=round+lighted+vanity+mirror&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ih1WuC1xL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0ccm9jlh1",
    "name": "Beaded Wood Decorative Tray",
    "description": "A tray turns a pile of small things into a display. On the dresser or nightstand, a beaded wood tray corrals perfume, jewellery and the evening's book into one styled moment, and it carries breakfast in bed on slow Sundays. Choose the size that fits your surface and your clutter.",
    "asin": "B0CCM9JLH1",
    "amazonUrl": "https://www.amazon.com/s?k=wooden+decorative+tray+for+dresser&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71rJ4c1kZ5L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cpc1nczs",
    "name": "Corduroy Throw Pillow Covers",
    "description": "Sofa cushions are the living room's quickest makeover. Soft corduroy covers in warm neutrals add ribbed texture that reads cozy even before you sit down, and they zip over the inserts you already own. Mix two colours from the same family and pick the size that suits your sofa's depth.",
    "asin": "B0CPC1NCZS",
    "amazonUrl": "https://www.amazon.com/s?k=throw+pillow+covers+for+couch&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/814vC4ChxEL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0g48sldzh",
    "name": "Washable Vintage Area Rug",
    "description": "A living room rug has to survive movie nights, guests and Monday vacuuming \u2014 washable is the upgrade that matters. A vintage-patterned low-pile rug anchors the sofa and coffee table with old-soul character, then goes in the wash when life happens. Choose the size that lets at least the sofa's front legs sit on it.",
    "asin": "B0G48SLDZH",
    "amazonUrl": "https://www.amazon.com/s?k=washable+vintage+rug+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81Nz2oz+M+L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0b3544gym",
    "name": "White Sheer Curtains",
    "description": "Living rooms glow when the windows wear something soft. Sheer white panels filter harsh daylight into an even, photo-friendly wash, make low ceilings feel taller, and keep the room private without going dark. Hang them high and wide, and pick a length that just kisses the floor.",
    "asin": "B0B3544GYM",
    "amazonUrl": "https://www.amazon.com/s?k=white+sheer+curtains+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71ZLL2qc9HL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dczmz1lf",
    "name": "Faux Fur Throw Blanket",
    "description": "The sofa throw is where guests decide your living room is cozy. A thick faux fur throw draped over the arm adds instant luxury texture and is the layer everyone reaches for during films. Fold it long over the back or scrunch it on a seat corner, in a shade that suits your cushions.",
    "asin": "B0DCZMZ1LF",
    "amazonUrl": "https://www.amazon.com/s?k=faux+fur+throw+blanket+for+couch&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/712toxsUqzL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cghvjcck",
    "name": "Globe String Lights",
    "description": "String lights are not just for bedrooms \u2014 a run of soft globe lights along a living room shelf or window frame gives the whole room a caf\u00e9-evening glow after dark. The round bulbs read more grown-up than fairy strands and flatter wood and plants alike. Choose the length that spans your shelf or mantel.",
    "asin": "B0CGHVJCCK",
    "amazonUrl": "https://www.amazon.com/s?k=globe+string+lights+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81f6+SMlYPL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b09tt9qyjk",
    "name": "White Ceramic Vase Set",
    "description": "Coffee tables need height, and a trio of matte ceramic vases gives you a ready-made arrangement. Group all three with pampas or branches, or split them between the table, mantel and shelves so the room feels collected. Pick the colour set that suits your palette \u2014 whites and earth tones mix with everything.",
    "asin": "B09TT9QYJK",
    "amazonUrl": "https://www.amazon.com/s?k=ceramic+vase+set+for+home+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/817BHyRp36L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0frmtsrfm",
    "name": "Abstract Framed Wall Art Set",
    "description": "Above the sofa, one strong art set does the decorating for the whole wall. Soft abstract canvases in framed sets bring colour and movement without shouting, and three matching panels make even a rental wall feel designed. Choose the palette that already lives in your cushions and rug so it all reads as one room.",
    "asin": "B0FRMTSRFM",
    "amazonUrl": "https://www.amazon.com/s?k=abstract+framed+wall+art+for+living+room&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81SeAW2e9LL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b00zf1qr88",
    "name": "Battery Globe String Lights",
    "description": "Vanity styling loves light with no wires. Battery globe lights loop around the mirror or along a shelf edge and switch on for the full getting-ready glow \u2014 no outlet, no cables crossing your perfumes. The mini globes read like little moons against the glass. Pick a strand length that frames your mirror.",
    "asin": "B00ZF1QR88",
    "amazonUrl": "https://www.amazon.com/s?k=battery+operated+globe+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81HMElqMUVL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cm65jld3",
    "name": "Glass Bud Vase Set",
    "description": "A vanity top feels styled when something is blooming on it. A small set of glass bud vases lets you dot single stems and sprigs between the bottles, catching the mirror light through the glass. Split the set across the vanity and shelves, and choose clear or tinted glass to suit your bottles.",
    "asin": "B0CM65JLD3",
    "amazonUrl": "https://www.amazon.com/s?k=glass+bud+vase+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/712xUmCaFtL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0gf7rtcxq",
    "name": "Amber Jar Soy Candle Set",
    "description": "Every vanity tray deserves one warm flame. Amber glass jar candles glow like little lanterns among the perfume bottles, and a small set means one for the vanity, one for the shelf, one spare. Their soft scent makes the whole corner feel like a boutique dressing room. Pick the pack size that suits your surfaces.",
    "asin": "B0GF7RTCXQ",
    "amazonUrl": "https://www.amazon.com/s?k=amber+jar+scented+candles+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71v9ul4CF5L._AC_SL1254_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b099596f3b",
    "name": "Mini Faux Potted Plants Set",
    "description": "Green is the colour vanity corners are missing. A set of mini potted plants tucks life into the gaps between bottles and brushes \u2014 on the desk corner, the shelf, beside the mirror \u2014 with zero watering to remember. Mix the shapes across your surfaces and pick pots that suit your palette.",
    "asin": "B099596F3B",
    "amazonUrl": "https://www.amazon.com/s?k=mini+fake+plants+set+for+shelf+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81UllOVS0SL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b09lyf93bq",
    "name": "Round Faux Fur Vanity Rug",
    "description": "The spot where you sit every morning deserves something soft underfoot. A small round faux fur rug under the vanity stool adds a cloud of texture, photographs beautifully, and warms up hard floors. Choose white or blush to match your corner, sized to sit under the stool and your feet.",
    "asin": "B09LYF93BQ",
    "amazonUrl": "https://www.amazon.com/s?k=round+fluffy+rug+small&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71Pvnzq1h7L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0c9t7j41y",
    "name": "Pink Sheer Curtains",
    "description": "Vanity light is makeup light, and pink sheers make it flattering. Blush voile panels soften window glare into a rosy wash that skin loves, while turning the whole corner pastel and dreamy. Hang them behind or beside the vanity and pick a length that pools a little for softness.",
    "asin": "B0C9T7J41Y",
    "amazonUrl": "https://www.amazon.com/s?k=pink+sheer+curtains&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71ZBQ09FUEL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0bbfxcwfj",
    "name": "Acrylic Floating Shelves",
    "description": "Perfume bottles are too pretty to hide in drawers. Clear acrylic floating shelves turn the wall beside the mirror into a floating display \u2014 bottles, brushes and small plants lined up like a boutique shelf, with nothing visual competing. Choose the pack size that fits your collection's growth.",
    "asin": "B0BBFXCWFJ",
    "amazonUrl": "https://www.amazon.com/s?k=acrylic+floating+shelves+for+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81k6fpbQ1CL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0895ddn47",
    "name": "Photo Clip String Lights",
    "description": "The wall above a desk is prime cozy real estate. Photo clip string lights turn it into a glowing gallery \u2014 polaroids, postcards and prints clipped along a warm strand above the monitor and shelves. USB power means it runs straight from the setup. Pick a strand long enough to zigzag your wall.",
    "asin": "B0895DDN47",
    "amazonUrl": "https://www.amazon.com/s?k=photo+clip+string+lights&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71SST+fFZnL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07s6r7sdw",
    "name": "Mini Faux Succulent Set",
    "description": "Desks feel alive with something green that never needs watering. A small set of faux succulents in pots dots the shelf, the desk corner and beside the monitor with sculptural little rosettes that suit gaming and study setups alike. Split the set across your levels and pick pot colours that match your theme.",
    "asin": "B07S6R7SDW",
    "amazonUrl": "https://www.amazon.com/s?k=artificial+succulent+plants+potted&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61D6O82f-mL._AC_SL1200_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0h4vhspvg",
    "name": "Washable Low-Pile Desk Rug",
    "description": "A chair rolling on bare floor makes a setup feel temporary. A low-pile washable rug under the desk anchors the whole zone, quiets the wheels, and adds the colour block desk setups are styled around \u2014 then washes clean when coffee happens. Choose a size that fits the chair's full roll range.",
    "asin": "B0H4VHSPVG",
    "amazonUrl": "https://www.amazon.com/s?k=washable+area+rug+for+home+office&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81hQfZJcDSL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dpzpfkdp",
    "name": "Black Floating Wall Shelves",
    "description": "Desk walls work hardest as shelves. Black-framed floating shelves give figures, books and gear a bold ledge that matches monitor arms and gaming hardware, and they make RGB lighting pop after dark. Stack two above the desk for the classic setup wall, and pick the pack size that fits your collection.",
    "asin": "B0DPZPFKDP",
    "amazonUrl": "https://www.amazon.com/s?k=black+floating+shelves+for+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71aG4kTQqIL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b09bldcg64",
    "name": "Small Ceramic Desk Vase",
    "description": "One small vase is the desk stylist's secret. A matte ceramic vase with a few dried stems adds height and softness next to all that tech glass and plastic, without taking space the keyboard needs. Tuck it on a shelf corner or beside the monitor, in black or white to suit your theme.",
    "asin": "B09BLDCG64",
    "amazonUrl": "https://www.amazon.com/s?k=small+ceramic+vase+for+dried+flowers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61SZjMgD5tL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07xs89q9b",
    "name": "Clear Christmas String Lights",
    "description": "The tree's glow is Christmas itself. Clear warm string lights wind through the branches and turn the whole tree into the room's lantern \u2014 the base layer every ornament hangs on. Wrap from the trunk outward for depth, and choose the count that matches your tree's height.",
    "asin": "B07XS89Q9B",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+string+lights+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/9156d4M34jL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0h6w64l4q",
    "name": "Holiday Scented Candle Gift Set",
    "description": "Holiday scents are half the Christmas feeling. A gift set of winter candles \u2014 pine, cinnamon, warm spice \u2014 flickers on the mantel and coffee table and makes the room smell like the season before the tree is even up. Light one per room corner and pick the set size that covers your spaces.",
    "asin": "B0H6W64L4Q",
    "amazonUrl": "https://www.amazon.com/s?k=christmas+scented+candles+gift+set&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/717iMlRWG9L._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b095pcsv4t",
    "name": "Bedroom Dresser with Drawers",
    "description": "Bedrooms run on drawer space, and a proper dresser gives the room its styled surface too. Drawers swallow the clothes that usually live on the chair, while the top becomes a stage for trays, vases and the mirror above. Choose a width that fits your wall and a finish that matches your bed frame.",
    "asin": "B095PCSV4T",
    "amazonUrl": "https://www.amazon.com/s?k=dresser+for+bedroom+with+drawers&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/91KjaRpAwML._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07jk99mb1",
    "name": "Faux Floral Garland",
    "description": "A floral garland softens the hardest lines in a bedroom \u2014 draped along the headboard, a shelf edge or around the mirror, it brings garden colour indoors with no watering and no wilting. Mix it with fairy lights for the full pin look, and pick a flower colour that echoes your bedding.",
    "asin": "B07JK99MB1",
    "amazonUrl": "https://www.amazon.com/s?k=artificial+flower+garland+for+decor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71HtrGPspdL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07xgkx327",
    "name": "LED Strip Lights for Bed",
    "description": "Ambient light behind the bed changes the whole room after dark. An LED strip along the headboard or under the bed frame washes the wall in a soft halo that makes the bed feel like it is floating \u2014 the glow bedroom pins love. Choose a warm-to-RGB strip with a remote and cut it to your bed's width.",
    "asin": "B07XGKX327",
    "amazonUrl": "https://www.amazon.com/s?k=led+strip+lights+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/61+ikv6FEpL._AC_SL1000_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b08xx3xybb",
    "name": "Small Bedroom Bookshelf",
    "description": "A small bookshelf turns a bedroom corner into a library moment. Shelves of books, plants and framed prints add the collected, lived-in layers flat furniture cannot, and give bedtime reading a home that is not the floor. Pick a height that suits your corner and a finish that matches your other pieces.",
    "asin": "B08XX3XYBB",
    "amazonUrl": "https://www.amazon.com/s?k=small+bookshelf+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71+bGLrXgGL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0cfq7ypt3",
    "name": "Floral Wall Decal Set",
    "description": "Renters and commitment-phobes, this is your wall art. Peel-and-stick floral decals bloom above the bed or around the mirror in minutes, come off clean when you move, and cost a fraction of wallpaper. Arrange them trailing from a corner for the most natural look, in colours that suit your palette.",
    "asin": "B0CFQ7YPT3",
    "amazonUrl": "https://www.amazon.com/s?k=floral+wall+decals+peel+and+stick&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81ZinWqqWBL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0czdjrj6x",
    "name": "Upholstered End-of-Bed Bench",
    "description": "The foot of the bed is wasted without a bench. An upholstered bench gives you a seat for dressing, a landing spot for the throw and tomorrow's outfit, and that finished hotel-suite line across the bed's end. Choose a width a little narrower than your bed and a fabric that suits your scheme.",
    "asin": "B0CZDJRJ6X",
    "amazonUrl": "https://www.amazon.com/s?k=upholstered+bench+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71sm5bbabKL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07zpmvj2d",
    "name": "Macrame Dream Catcher",
    "description": "Above the bed, a dreamcatcher is the softest kind of wall art. Woven webbing, feathers and beads bring handcrafted boho texture that suits the sleep space it hangs over, and it layers beautifully with macrame and fairy lights. Pick a size that holds its own above your headboard.",
    "asin": "B07ZPMVJ2D",
    "amazonUrl": "https://www.amazon.com/s?k=macrame+dream+catcher&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71gRV4450fL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b08nvvv76q",
    "name": "LED Neon Wall Sign",
    "description": "One glowing word turns a bedroom wall into a statement. An LED neon sign above the bed or desk corner adds the playful, after-dark personality plain prints cannot \u2014 part lamp, part artwork. Choose a word or shape that fits your vibe, and a colour that matches your lighting scheme.",
    "asin": "B08NVVV76Q",
    "amazonUrl": "https://www.amazon.com/s?k=led+neon+sign+for+bedroom+wall&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71L8hBfTI0S._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0dxdshtsc",
    "name": "Decorative Wall Clock",
    "description": "A clock can be decor, not just information. A decorative wall clock fills the awkward blank wall every bedroom has and gives the room a gentle focal point that is not a screen. Pick a size readable from the bed and a style that suits your walls.",
    "asin": "B0DXDSHTSC",
    "amazonUrl": "https://www.amazon.com/s?k=decorative+wall+clock+for+bedroom&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/71qziR3wGhL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b07rgcwcz8",
    "name": "Jewelry Stand Organizer",
    "description": "Necklaces tangled in a drawer are jewellery you never wear. A jewellery stand turns them into a display on the dresser \u2014 branches or tiers of gold-toned metal that keep chains untangled and make choosing earrings part of the decor. Pick a height that fits under your mirror or shelf.",
    "asin": "B07RGCWCZ8",
    "amazonUrl": "https://www.amazon.com/s?k=jewelry+stand+organizer&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/8180+V1UDnL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b001892ax2",
    "name": "Himalayan Salt Lamp",
    "description": "A salt lamp is the warmest night light a bedroom can have. The amber rock glow is softer than any bulb, reads like a tiny sunset on the nightstand, and gives late-evening light that does not wake the room up. Choose a natural rock or a bowl style to suit your nightstand.",
    "asin": "B001892AX2",
    "amazonUrl": "https://www.amazon.com/s?k=himalayan+salt+lamp&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/41qIBH3x2HL._AC_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
    "active": true
  },
  {
    "id": "b0b4d5nkft",
    "name": "Indoor Plant Stand",
    "description": "Plants deserve better than the floor. A plant stand lifts a trailing pot to window height, where the leaves catch light and spill over the edge \u2014 instant garden corner, even with faux plants. Tiered stands let you build a little green cluster; pick a finish that suits your furniture.",
    "asin": "B0B4D5NKFT",
    "amazonUrl": "https://www.amazon.com/s?k=plant+stand+indoor&tag=finisher090-20",
    "imageMode": "amazon",
    "image": "https://m.media-amazon.com/images/I/81X1HPeIUKL._AC_SL1500_.jpg",
    "ctaLabel": "See Options on Amazon",
    "featured": false,
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
    "intro": "This is how a bedroom that feels dark and a little tired becomes the calmest room in the house \u2014 soft, warm and deeply restful, and it does not take a big budget or a full makeover to get there. Every cozy bedroom in our most-saved pins is built from the same quiet ingredients: layered bedding, something soft underfoot, curtains that glow at golden hour and a little warm light after dark. The finds below are those ingredients, one by one \u2014 browse each, and pick the version that fits your space.",
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
    "intro": "This is how a living room that feels a little flat becomes the room everyone drifts to \u2014 warm, layered and quietly pulled together, without throwing out everything you already own. The living rooms in our most-saved pins all follow the same gentle formula: something sink-in to sit on, something soft underfoot, warm wood, pools of lamplight and texture you can feel. The twelve finds below are that formula, piece by piece \u2014 browse each one, and pick the version that fits your space.",
    "closingNote": "You do not need a full makeover — two or three of these in the right corner change the whole mood. Pin this guide for your next slow Sunday refresh.",
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
    "intro": "This is how a crowded dresser top becomes a tiny boutique corner \u2014 calm, beautifully lit and a small pleasure to sit down at every morning. Our most-saved vanity pins all start the same way: good light first, a mirror you love, and every small thing given a pretty place to live. The twelve finds below build that corner step by step \u2014 browse each one, and pick the version that fits your space.",
    "closingNote": "Light first, mirror second, then the little luxuries — that order never fails. Save this to your vanity board for later.",
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
    "intro": "This is how a desk you rush away from becomes a corner you happily settle into \u2014 warm, calm and quietly focused, whether the day holds work, study or games. The setups our followers save most are never the stark ones: they glow a little after dark, keep a soft colour running through them, and hide every cable out of sight. The twelve finds below build that feeling piece by piece \u2014 browse each one, and pick the version that fits your setup.",
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
      "title": "Cozy Desk Setup Finds — Shop the Look | The Cozy Canvas",
      "description": "Warm light, soft colour and calm order for a desk you actually want to sit at.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/nok2.webp"
    },
    "createdAt": 1760740800000,
    "updatedAt": 1760740800000
  },
  {
    "id": "post-christmas",
    "title": "Christmas Decor Finds",
    "slug": "christmas-decor-finds",
    "hook": "Warm lights, soft layers and a little sparkle — the pieces behind our most-saved Christmas pins.",
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
    "intro": "This is how an ordinary room becomes the one everyone wants to be in all December — glowing softly after dark, smelling faintly of pine and candles, and dressed just enough to feel like a celebration without turning into a chore. The Christmas corners in our most-saved pins are never the most expensive ones; they are the warmest ones, built layer by layer: the tree first, then the light, then the soft things people can touch. The twelve finds below follow that exact order — browse each one, and pick the version that fits your home and your tree.",
    "closingNote": "Start with the glow — tree lights and one strand of fairy lights — and the rest can arrive a little at a time, the way the best Christmases always do. Save this guide to your Christmas board so it is ready when the boxes come down from storage.",
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
      "title": "Christmas Decor Finds — Shop the Look | The Cozy Canvas",
      "description": "Warm lights, soft layers and a little sparkle — the pieces behind our most-saved Christmas pins.",
      "ogImage": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/bed1.webp"
    },
    "createdAt": 1761868800000,
    "updatedAt": 1761868800000
  }
];
