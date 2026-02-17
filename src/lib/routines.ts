export type Step = {
  title: string;
  product: string;
  notes?: string;
};

export type Routine = {
  id: string;
  name: string;
  creator: string;
  skinType: string;
  caption: string;
  steps: Step[];
};

export const routines: Routine[] = [
  {
    id: "glass-skin-1",
    name: "Glass Skin Routine",
    creator: "@nguyen",
    skinType: "Combination",
    caption: "My go-to routine for that dewy, glass-like finish.",
    steps: [
      {
        title: "Oil Cleanse",
        product: "Banila Co Clean It Zero",
        notes: "Massage onto dry skin for 60 seconds",
      },
      {
        title: "Water Cleanse",
        product: "CeraVe Hydrating Cleanser",
        notes: "Use on damp skin, gentle circular motions",
      },
      {
        title: "Toner",
        product: "Laneige Cream Skin Refiner",
      },
      {
        title: "Serum",
        product: "COSRX Snail Mucin 96 Essence",
        notes: "Pat into skin while still damp",
      },
      {
        title: "Moisturizer",
        product: "Illiyoon Ceramide Ato Concentrate Cream",
      },
    ],
  },
  {
    id: "minimal-makeup-1",
    name: "Minimal Everyday Makeup",
    creator: "@lisa.beauty",
    skinType: "Normal",
    caption: "A quick 10-minute face for work or errands.",
    steps: [
      {
        title: "Primer",
        product: "Milk Makeup Hydro Grip Primer",
        notes: "Focus on T-zone and cheeks",
      },
      {
        title: "Tinted Moisturizer",
        product: "Laura Mercier Tinted Moisturizer",
      },
      {
        title: "Concealer",
        product: "Maybelline Instant Age Rewind",
        notes: "Under eyes and any blemishes",
      },
      {
        title: "Brows",
        product: "Glossier Boy Brow in Brown",
      },
      {
        title: "Lip + Cheek",
        product: "Rare Beauty Soft Pinch Liquid Blush",
        notes: "Dab on cheeks and lips for a monochrome look",
      },
    ],
  },
  {
    id: "oily-skin-am",
    name: "Oily Skin Morning Routine",
    creator: "@skincarejunkie",
    skinType: "Oily",
    caption: "Keeps shine at bay all day without over-drying.",
    steps: [
      {
        title: "Cleanse",
        product: "La Roche-Posay Toleriane Purifying Cleanser",
      },
      {
        title: "Exfoliate",
        product: "Paula's Choice 2% BHA Liquid Exfoliant",
        notes: "Use 3x per week only, skip on off days",
      },
      {
        title: "Toner",
        product: "Some By Mi AHA BHA PHA Toner",
      },
      {
        title: "Niacinamide Serum",
        product: "The Ordinary Niacinamide 10% + Zinc 1%",
        notes: "Helps control sebum production",
      },
      {
        title: "Lightweight Moisturizer",
        product: "Neutrogena Hydro Boost Water Gel",
      },
      {
        title: "Sunscreen",
        product: "Biore UV Aqua Rich Watery Essence SPF 50",
        notes: "Reapply every 2 hours if outdoors",
      },
    ],
  },
  {
    id: "soft-glam-date",
    name: "Soft Glam Date Night",
    creator: "@glambymai",
    skinType: "Normal",
    caption: "Warm tones and soft shimmer for a romantic evening out.",
    steps: [
      {
        title: "Primer",
        product: "Charlotte Tilbury Flawless Filter",
        notes: "Mix with foundation for extra glow",
      },
      {
        title: "Foundation",
        product: "Armani Luminous Silk Foundation",
      },
      {
        title: "Concealer + Set",
        product: "NARS Radiant Creamy Concealer",
        notes: "Set under eyes with Laura Mercier loose powder",
      },
      {
        title: "Eyes",
        product: "ABH Soft Glam Palette",
        notes: "Tempera on lid, Burnt Orange in crease, Cyprus Umber on outer V",
      },
      {
        title: "Lashes",
        product: "Kiss Lash Couture Luxtensions",
      },
      {
        title: "Blush + Highlight",
        product: "Patrick Ta She's That Girl Double-Take Duo",
      },
      {
        title: "Lip",
        product: "Charlotte Tilbury Pillow Talk Lipstick",
        notes: "Line with matching lip liner first",
      },
    ],
  },
  {
    id: "sensitive-pm",
    name: "Sensitive Skin PM Routine",
    creator: "@gentlecare",
    skinType: "Sensitive",
    caption: "Calming nighttime routine that won't irritate reactive skin.",
    steps: [
      {
        title: "Gentle Cleanse",
        product: "Vanicream Gentle Facial Cleanser",
        notes: "Lukewarm water only — hot water triggers redness",
      },
      {
        title: "Calming Serum",
        product: "Avène Cicalfate+ Restorative Serum",
      },
      {
        title: "Barrier Cream",
        product: "La Roche-Posay Cicaplast Baume B5",
        notes: "Thin layer, focuses on repairing skin barrier overnight",
      },
      {
        title: "Facial Oil",
        product: "Herbivore Emerald CBD Oil",
        notes: "Optional — skip if skin feels sufficiently hydrated",
      },
    ],
  },
];

export function getRoutineById(id: string): Routine | undefined {
  return routines.find((r) => r.id === id);
}
