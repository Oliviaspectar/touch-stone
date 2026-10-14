# TOUCH STONE · Gen Z Casual Pinterest Curation

Enrich the TOUCH STONE storefront with a warm, casual Gen Z Pinterest-inspired mood—featuring soft warm accents, playful sticker badges, "Shop by Vibe" occasion filters, and direct "Share with a Bestie" WhatsApp interactions, while keeping the copy restrained and authentic.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during interactive clarification and govern this update:
> - **Visual Aesthetic**: Clean Pinterest aesthetic with warm undertones (warm oat/linen, butter-soft highlights, rounded soft badges, and tape/sticker cues) rather than loud Y2K or neon streetwear.
> - **Interactive Features**: Added **"Shop by Vibe"** filters (College Fit, Daily Office, Coffee Run, Casual Evening) and a **"Share with a Friend on WhatsApp"** action on every product card.
> - **Tone of Voice**: Keep the copy restrained, grounded, and authentic; deliver the casual Gen Z personality through layout warmth, badges, and intuitive styling flows rather than forced slang.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the minimalist presentation into a warm, inviting, Pinterest-curated jewellery space where Gen Z women (18–30) can easily explore jewellery by daily mood and outfit vibe, share finds with friends, and enquire directly on WhatsApp.
- **Target Audience**: College students, young professionals, and Gen Z creators seeking reliable, lightweight imitation jewellery that pairs effortlessly with everyday fits (baggy denims, oversized shirts, casual kurtas, cafe wear).
- **Key Value**: Makes everyday jewellery shopping feel approachable, relatable, and social without sacrificing craftsmanship credibility.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Color Palette & Accents**:
  - Primary Background: Crisp white and warm soft oat (`#FDFCF9` / `#FAF8F5`).
  - Warm Accents: Soft butter/warm honey tint (`#FEF9C3` / `#FDE047` muted), warm stone borders (`#E7E5E4`), and soft terracotta/rose quartz undertones.
  - Typography: Refined `Outfit` display paired with `Plus Jakarta Sans`, accompanied by clean, unboxed metadata.
- **Sticker Badges & Soft Accents**:
  - Soft, tape/sticker-inspired subtle tags: `Daily Fit`, `Stacking Pick`, `Under ₹500`, `Best for College`.
  - Subtle polaroid/moodboard styling accents for category and lookbook highlights.
- **Shop by Vibe Selector**:
  - Interactive mood selector directly above the collection grid:
    1. **All Pieces**: Complete everyday catalogue.
    2. **College Fits**: Lightweight, pocket-friendly huggies, studs, and daily chains.
    3. **Daily Office**: Understated bezels, clean bar earrings, and sleek cuffs that look neat on video calls.
    4. **Coffee Run & Brunch**: Layered chains, beaded bangles, and dainty pearl accents.
    5. **Casual Evening / Outing**: Dual-tone drops, oxidised statement touches, and stacked rings.
- **WhatsApp "Share with a Friend" Action**:
  - A dedicated "Share with Bestie" button on product cards and in the product details modal.
  - Generates a pre-filled WhatsApp share link:
    `"Look at this from TOUCH STONE: [Product Name] (₹[Price]) — what do you think? https://wa.me/919820764929"`
  - Lets shoppers instantly get a second opinion from friends or send hints for gifts.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Soft Pinterest Aesthetics vs Loud Y2K**:
  - *Chosen*: Warm oat/butter tints, subtle sticker badges, and soft polaroid card borders.
  - *Why*: Resonates strongly with 18–30 Indian women who pin minimalist jewellery on Pinterest, without alienating customers who appreciate elegance.
- **Decision 2: Vibe-Based Browsing alongside Taxonomy**:
  - *Chosen*: Both Category tabs (Earrings, Necklaces, etc.) and Vibe pills (College, Office, Coffee Run) can be toggled without cluttering the screen.
  - *Why*: Allows goal-oriented shoppers (e.g. "I need earrings") and lifestyle shoppers (e.g. "I want something for college tomorrow") to find pieces quickly.
- **Decision 3: Retaining Verified Business Details**:
  - *Chosen*: Keep all verified contact details (Lokmanya Nagar, Thane West, phones, WhatsApp number) strictly accurate.

---

## 4. Technical Architecture & Component Hierarchy

```
┌───────────────────────────────────────────────────────────────┐
│                           App.tsx                             │
│  State: activeView, selectedVibe, selectedCategory, shortlist │
└──────┬────────────────────┬────────────────────┬──────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Navbar.tsx  │     │   Hero.tsx   │     │VibeFilter.tsx│
│ Top Bar with │     │Warm Pinterest│     │College, Office│
│ Shortlist &  │     │Lifestyle Cut │     │Coffee Run,   │
│ Search       │     │& Tape Badges │     │Evening Out   │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
┌───────────────────────────────────────────────────────────────┐
│                      CollectionView.tsx                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                     ProductCard.tsx                     │  │
│  │  - Soft Sticker Badge ('College Pick', 'Under ₹500')    │  │
│  │  - Direct Enquire on WhatsApp                           │  │
│  │  - 'Share with a Friend' WhatsApp button                │  │
│  │  - Shortlist Bookmark Toggle                            │  │
│  └─────────────────────────────────────────────────────────┘  │
└──────────────────────────────┬────────────────────────────────┘
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
┌──────────────────────────────┐        ┌──────────────────────────────┐
│    ProductDetailModal.tsx    │        │      ShortlistDrawer.tsx     │
│  - Gallery & Zoom            │        │  - Persistent saved items    │
│  - 'Order on WhatsApp'       │        │  - 'Enquire all on WhatsApp' │
│  - 'Share with Bestie' link  │        │  - Estimated budget tally    │
│  - Accurate Store info       │        └──────────────────────────────┘
└──────────────────────────────┘
```

---

## 5. Verification & Review Steps

1. Verify layout across mobile (375px), tablet (768px), and desktop (1440px).
2. Test both WhatsApp enquiry and "Share with a Friend" URLs with correct URI encoding.
3. Verify that all Vibe filters correctly filter products according to designated style tags.
4. Run `compile_applet` and `lint_applet` to ensure zero compilation or type errors.
