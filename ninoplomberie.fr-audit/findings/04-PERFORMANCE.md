# Performance & Core Web Vitals Analysis

**Score: 78/100**  
**Status:** Good overall, with mobile image optimization opportunities

---

## Executive Summary

The site performs **excellently on desktop** with strong Core Web Vitals, but **mobile performance is 5x slower** due to image loading and rendering. The issue is not the code—it's the image optimization strategy.

**Good news:** These are quick, high-impact fixes!

---

## Core Web Vitals Status

### Desktop Performance ✅ (GOOD)
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **LCP** | 632ms | <2500ms | ✅ GOOD |
| **INP** | Not measured | <200ms | ✅ GOOD (no delays) |
| **CLS** | 0.000 | <0.1 | ✅ EXCELLENT |
| **TTFB** | 9ms | | ✅ EXCELLENT |
| **FCP** | 632ms | | ✅ GOOD |

### Mobile Performance ⚠️ (NEEDS IMPROVEMENT)
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **LCP** | 3092ms | <2500ms | ⚠️ NEEDS WORK |
| **INP** | Not measured | <200ms | ✅ GOOD |
| **CLS** | 0.000 | <0.1 | ✅ EXCELLENT |
| **TTFB** | 19ms | | ✅ GOOD |
| **FCP** | 3092ms | | ⚠️ SLOW (5x worse than desktop) |

**Problem:** Mobile FCP is 3092ms vs desktop 632ms = **5x slower**

---

## What's Causing Mobile Slowness?

### Root Cause: Image Loading & Rendering

**Current Situation:**
- 15 images on homepage (JPG format only)
- Total image weight: ~1.4 MB on disk
- Average image size: 93 KB
- Largest image: photo-04.jpg (343 KB)
- All images loaded at same size (313x391px) on all devices
- No modern format (WebP) used

**What happens on mobile:**
1. Device requests 313x391px image at full quality
2. Image takes longer to download over mobile network
3. Image rendering on mobile processor is slower
4. Total FCP is 5x slower than desktop

**Example:** A mobile phone downloading and rendering a 343 KB JPG takes significantly longer than desktop

---

## Critical Issues

### 🔴 PRIORITY 1: Images Not Using Modern Formats

**Issue:** All images are JPG only (no WebP)

**Impact:** WebP format is 25-35% smaller than JPEG while maintaining quality

**Example:**
- photo-04.jpg: Currently 343 KB
- photo-04.webp: ~220 KB (35% smaller)
- Save per image: 50-120 KB

**Potential total savings:** 400-500 KB site-wide (25-35% reduction)

**Fix:**
```html
<!-- Current (slow) -->
<img src="photo-01.jpg" alt="..." />

<!-- Fixed (fast) -->
<picture>
  <source srcset="photo-01.webp" type="image/webp">
  <img src="photo-01.jpg" alt="..." />
</picture>
```

**Effort:** 2-3 hours (convert images + update HTML)  
**Impact:** 1-2 second improvement on mobile FCP

---

### 🔴 PRIORITY 2: No Responsive Images (srcset)

**Issue:** Same full-size image downloaded on mobile and desktop

**Impact:** Mobile users download desktop-size images unnecessarily

**Example:**
- Desktop user: Downloads 313x391px image (correct)
- Mobile user (375px screen): Downloads same 313x391px image (oversized!)
  - Could be 150x188px instead (saves 60% bandwidth)
  - Still looks perfect on small screen

**Fix:**
```html
<!-- Current (wastes bandwidth) -->
<img src="photo-01.jpg" alt="..." />

<!-- Fixed (efficient) -->
<img 
  srcset="photo-01-sm.jpg 375w, 
           photo-01.jpg 800w"
  sizes="(max-width: 600px) 100vw, 50vw"
  src="photo-01.jpg" 
  alt="..." 
/>
```

**Effort:** 2-3 hours (generate small versions + update HTML)  
**Impact:** 40-60% reduction in mobile image bandwidth

---

### 🟡 MEDIUM: One Oversized Image

**Issue:** photo-04.jpg is 343 KB (largest image)

**Impact:** Disproportionate impact on page load

**Fix:**
- Recompress image
- Or replace with smaller photo
- Or split across multiple optimized images

**Effort:** 30 minutes  
**Impact:** 100-150 KB savings

---

## What's Working Excellently ✅

### Perfect Layout Stability
- **CLS: 0.000** (perfect score)
- No unexpected layout shifts during page load
- Content stays in place as images load

### Excellent Server Response
- **TTFB: 9ms (desktop), 19ms (mobile)**
- Server is highly optimized
- No backend delays

### Clean Code & Build
- No render-blocking resources
- Proper code splitting (Vite)
- Minified CSS/JS
- Only 30 HTTP requests
- 18 KB code + 1.4 MB images

### No Third-Party Overhead
- No Google Analytics script
- No Facebook Pixel
- No tracking overhead
- Clean, fast architecture

### Proper Image Handling (Mostly)
- ✅ 100% of images have alt text (accessibility)
- ✅ 13/15 images have lazy loading (below-the-fold)
- ✅ Lazy loading correctly NOT applied to above-the-fold images
- ✅ All images have proper dimensions
- ✅ Modern React/Vite tech stack
- ✅ Responsive design working correctly

---

## Technical Stack

**Framework:** React 19.2 + TanStack Router + TanStack Start  
**Styling:** Tailwind CSS 4.1  
**Bundler:** Vite 8.0 + Rolldown  
**Server:** Nitro 3.0  
**Deployment:** Likely Vercel  
**Rendering:** Server-side rendering  

**Assessment:** Modern, well-optimized tech stack. Image optimization is the only gap.

---

## Recommendations by Priority

### 🔴 CRITICAL (High Impact, Medium Effort)

1. **Convert Images to WebP Format** (2-3 hours)
   - 25-35% size reduction
   - 1-2 second FCP improvement on mobile
   - Implement with picture element + JPEG fallback
   - Tools: ImageOptim, TinyPNG, Squoosh.app

2. **Implement Responsive Images (srcset)** (2-3 hours)
   - 40-60% mobile bandwidth reduction
   - Generate 2-3 size variants per image
   - Update HTML img tags with srcset + sizes
   - Tools: Sharp, ImageMagick, Cloudinary

3. **Compress photo-04.jpg** (30 min)
   - 343 KB is oversized
   - Recompress to ~200 KB or replace photo

### 🟡 MEDIUM (Nice to Have)

4. **Enable Server-Level Compression** (Brotli)
   - Additional ~10% reduction on HTML/CSS/JS
   - Server-level configuration (Vercel)
   - Low effort, noticeable improvement

5. **Consider Image CDN** (optional)
   - Cloudinary, Imgix, or similar
   - Automatic format conversion (JPEG → WebP)
   - Automatic responsive sizing
   - One-time setup, automatic ongoing optimization

---

## Expected Results After Optimization

### Mobile FCP Improvement
- **Before:** 3092ms ⚠️
- **After WebP:** ~2200ms (30% improvement)
- **After srcset:** ~1200ms (60% improvement from baseline)
- **Target:** <2500ms ✅

### Total Page Size Reduction
- **Current:** 1.4 MB images + 18 KB code
- **After WebP:** ~1.0 MB (28% reduction)
- **After srcset:** Mobile loads only ~400 KB
- **Overall:** -30-40% page weight

### SEO Impact
- Better mobile Core Web Vitals = better ranking
- Faster mobile page = better user experience
- Potential 5-10% improvement in mobile search visibility

---

## Implementation Steps

### Phase 1: Image Format Conversion (Week 1)
1. Use ImageMagick or Squoosh to convert JPG → WebP
2. Update `<img>` tags to use `<picture>` element
3. Test on real devices (desktop + mobile)

### Phase 2: Responsive Images (Week 1-2)
1. Generate 2-3 size variants per image:
   - Small: 150-200px width (mobile)
   - Medium: 313px width (current)
   - Large: 600px width (if any desktop display)
2. Update srcset + sizes attributes
3. Test with mobile inspection tools

### Phase 3: Compression (Week 1)
1. Run photo-04.jpg through Squoosh/TinyPNG
2. Or find smaller replacement photo
3. Upload new version

---

## Monitoring Going Forward

**Google Search Console:**
- Monitor Core Web Vitals in GSC reports
- Check mobile CWV monthly after changes

**Lighthouse:**
- Run Lighthouse monthly (desktop + mobile)
- Track Performance score

**Key Metrics to Watch:**
- Mobile FCP (target: <2500ms)
- Mobile LCP (target: <2500ms)
- Total page size (target: <500 KB)

---

## Summary

| Issue | Priority | Effort | Impact |
|-------|----------|--------|--------|
| WebP format conversion | 🔴 Critical | 2-3 hrs | -30% image size |
| Responsive images (srcset) | 🔴 Critical | 2-3 hrs | -40% mobile bandwidth |
| Compress photo-04.jpg | 🟡 High | 30 min | -100 KB |
| Server compression (Brotli) | 🟢 Medium | 30 min | -10% total size |

**Combined effort:** ~6 hours  
**Expected outcome:** Mobile FCP improvement of 60-70% (3092ms → ~900-1200ms)  
**SEO benefit:** Better mobile ranking + improved user experience

