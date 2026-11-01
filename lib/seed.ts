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
    "asin": "",
    "amazonUrl": "https://www.amazon.com/s?k=knitted+pouf+ottoman&tag=finisher090-20",
    "imageMode": "own",
    "image": "https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/liv8.webp",
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
    "intro": "This is how a bedroom that feels dark and a little tired becomes the calmest room in the house \u2014 soft, warm and deeply restful, and it does not take a big budget or a full makeover to get there. Every cozy bedroom in our most-saved pins is built from the same quiet ingredients: layered bedding, something soft underfoot, curtains that glow at golden hour and a little warm light after dark. The twelve finds below are those ingredients, one by one \u2014 browse each, and pick the version that fits your space.",
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
    "intro": "This is how a living room that feels a little flat becomes the room everyone drifts to \u2014 warm, layered and quietly pulled together, without throwing out everything you already own. The living rooms in our most-saved pins all follow the same gentle formula: something sink-in to sit on, something soft underfoot, warm wood, pools of lamplight and texture you can feel. The twelve finds below are that formula, piece by piece \u2014 browse each one, and pick the version that fits your space.",
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
    "intro": "This is how a crowded dresser top becomes a tiny boutique corner \u2014 calm, beautifully lit and a small pleasure to sit down at every morning. Our most-saved vanity pins all start the same way: good light first, a mirror you love, and every small thing given a pretty place to live. The twelve finds below build that corner step by step \u2014 browse each one, and pick the version that fits your space.",
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
