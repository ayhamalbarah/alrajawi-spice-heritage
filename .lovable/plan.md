

# Al-Rajawi Spices Website Plan
## بهارات الرجوي - منذ 1954

### 🎨 Design Foundation

**Color Palette:**
- Saffron Gold (#D4A72C) - Premium accents & CTAs
- Paprika Red (#C5442E) - Energy highlights  
- Soft Beige (#FDF8F3) - Clean background
- Coffee Brown (#3D2B1F) - Rich, readable text
- Cream White (#FFFEF9) - Cards & sections

**Typography:**
- "Cairo" Google Font - Modern, elegant Arabic support
- Large, bold headlines with generous line-height for Arabic readability

**Visual Style:**
- Rounded corners (rounded-xl, rounded-2xl)
- Soft shadows for depth
- Warm, inviting atmosphere
- High-quality spice imagery

---

### 📱 Website Structure

#### 1. Header (Fixed, RTL)
- Logo on the right: "بهارات الرجوي" with "Since 1954" badge
- Navigation links: الرئيسية | قصتنا | منتجاتنا | فروعنا | تواصل معنا
- Search bar with spice icon
- Shopping cart icon (visual only)
- Mobile: Hamburger menu with slide-in drawer

#### 2. Hero Section (Full Impact)
- Darkened hero image of colorful spice piles
- Bold headline: "بهارات الرجوي.. الاسم الأول في عالم البهارات في اليمن"
- Subheadline about the 1954 origin story
- Golden "تسوق الآن" (Shop Now) button
- Fade-in animation on load

#### 3. Heritage Story Section
- Split layout: Text left, Old Sana'a/Souq imagery right
- Title: "عراقة تمتد عبر الأجيال"
- Story of founders Haj Abdullah and Haj Hussein Al-Rajawi
- Decorative "Since 1954" badge
- Scroll-triggered fade animations

#### 4. Features & Stats Grid
Four animated cards showcasing:
1. 🏪 5 فروع بالتجزئة - 5 Retail Branches
2. 🌍 رؤية دولية - International Vision  
3. ⭐ جودة فاخرة - Premium Quality
4. 💳 دفع آمن - Secure Payment
- Counter animation for numbers

#### 5. Featured Products Section
- Title: "منتجاتنا المميزة"
- Responsive grid (4 cols desktop, 2 mobile)
- 8 sample products with:
  - High-quality placeholder images
  - Product name in Arabic
  - Price in YER
  - "أضف للسلة" button → Opens WhatsApp with order
- Hover effects and card animations

**Sample Products:**
- بهارات مشكلة (Mixed Spices)
- كمون بلدي (Local Cumin)
- فلفل أسود (Black Pepper)
- كركم هندي (Indian Turmeric)
- قرفة سيلانية (Ceylon Cinnamon)
- هيل أخضر (Green Cardamom)
- بقوليات مختارة (Selected Legumes)
- بهارات كبسة (Kabsa Spices)

#### 6. Branches & Location
- Title: "زوروا فروعنا"
- Main branch info card:
  - 📍 شارع شيراتون، صنعاء
  - ⏰ Open daily until 11:00 PM
  - 📞 +967 1 255 358
- Google Maps placeholder (styled map area)
- Branch location pins for 5 stores

#### 7. Footer
- Company logo and tagline
- Quick links column
- Contact information:
  - Phone: +967 1 255 358
  - Website: www.alragawi.org
- Social icons: Facebook, Instagram, WhatsApp
- Copyright: "© 2026 بهارات الرجوي. جميع الحقوق محفوظة"

---

### ✨ Animations & Interactions

- **Page Load:** Hero content fades and slides in
- **Scroll Reveal:** Sections animate into view smoothly
- **Hover Effects:** Product cards lift and glow
- **Stats Counter:** Numbers animate when visible
- **Navigation:** Smooth scroll to sections
- **Mobile Menu:** Elegant slide-in drawer

---

### 📲 Floating WhatsApp Button
- Fixed position, bottom-left corner (RTL friendly)
- WhatsApp green with icon
- Pulse animation to attract attention
- Opens chat with pre-filled greeting message

---

### 📐 Technical Approach

- **RTL Layout:** Full right-to-left support with proper text direction
- **Mobile-First:** Designed for Yemeni mobile users first
- **Performance:** Optimized images and smooth 60fps animations
- **Accessibility:** Proper contrast and touch targets

---

### 📁 File Structure

```
src/
├── pages/
│   └── Index.tsx (Main landing page)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── StorySection.tsx
│   ├── FeaturesSection.tsx
│   ├── ProductsSection.tsx
│   ├── ProductCard.tsx
│   ├── BranchesSection.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   └── products.ts (Static product data)
└── index.css (Arabic fonts, custom colors)
```

---

This plan creates a stunning, authentic website that honors Al-Rajawi's 70+ year legacy while providing a modern, mobile-friendly experience for customers. The WhatsApp integration allows easy ordering without complex checkout systems.

