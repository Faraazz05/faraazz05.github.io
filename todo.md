# FARAAZ: Mindspace v2.5 - Deployment Checklist

> A cinematic dark glassmorphic portfolio merging AI minimalism, emotional design, and elegant motion.

---

## 🔴 CRITICAL - Must Complete Before Deploy

### 1. Personal Information & Branding
- [ ] **Home Page** (`src/pages/Home.tsx`)
  - Update name "FARAAZ" if needed
  - Update tagline: "AI Researcher · Writer · Builder · Entrepreneur"
  - Update one-liner: "I build systems that think, write, and feel."
  - Optional: Replace particle background or add video background

### 2. Social Links & Contact
- [ ] **Footer** (`src/components/Footer.tsx`)
  - Line 6: GitHub URL `https://github.com/faraazz05`
  - Line 7: LinkedIn URL `https://linkedin.com/in/faraazz05`
  - Line 8: Email `mailto:faraaz@example.com`

- [ ] **Contact Page** (`src/pages/Contact.tsx`)
  - Line 33-47: Update all social links and email
  - Line 36: GitHub handle and URL
  - Line 41: LinkedIn handle and URL
  - Line 46: Email address (appears twice)

### 3. About Page Content
- [ ] **About Page** (`src/pages/About.tsx`)
  - Update bio and personal narrative
  - Replace `/assets/profile.jpg` with your actual profile image
  - Update "Current Focus" section with your real goals
  - Customize the 4 capability cards (AI Architecture, Backend, Writing, Strategy)
  - Add your personal story and philosophy

### 4. Resume/Experience (EXPANDED)
- [ ] **Resume Page** (`src/pages/Resume.tsx`)
  - **Experience**: Add 6-7 real work entries with roles, companies, durations, descriptions
  - **Education**: Add all 4 education entries (10th, 12th, College Dropped, Current College)
  - **Spoken Languages**: Verify Hindi (Fluent), English (Fluent), Japanese (Learning)
  - **Skills** (30+ total across categories):
    - Programming: Python, C, JavaScript, SQL, TypeScript, etc.
    - AI & ML: PyTorch, TensorFlow, LangChain, LLM fine-tuning, Prompt engineering
    - MLOps: Docker, Kubernetes, CI/CD, MLflow
    - Soft Skills: Systems thinking, Leadership, Creative communication
    - Marketing: Brand Strategy, Digital funnels, Content design
    - Tools: VSCode, Figma, Notion, Git, Postman
  - **Currently Learning**: Update 3-4 current learning topics
  - Optional: Add certifications or achievements

### 5. Projects & Research (MASSIVELY EXPANDED)
- [ ] **Projects Page** (`src/pages/Projects.tsx`)
  - **Projects Gallery**: Add 15-20 real projects
    - Each needs: Title, Description, Tech Stack, GitHub Link, Optional Live Link
    - Use masonry grid layout with hover animations
  - **Research Papers Section**: Add 3-4 papers
    - Title: e.g., "Foundations of Synthetic Emotion"
    - Status: "Published" / "In Progress" / "Preprint"
    - Abstract: Short description (2-3 sentences)
    - Link: DOI, arXiv, or personal research page
  - Verify all GitHub links are functional
  - Add project categories/tags if needed

### 6. Blog Integration
- [ ] **Blogs Page** (`src/pages/Blogs.tsx`)
  - Line 19: Update `MEDIUM_RSS_URL` with your actual Medium feed
    - Format: `https://medium.com/feed/@your-username`
  - Test that RSS feed loads correctly after updating

### 7. Creative Writings (WITH READING PAGES)
- [ ] **Writings Page** (`src/pages/Writings.tsx`)
  - Add multiple entries: Prose, Monologues, Poems, Novel Excerpts
  - For each entry:
    - Title
    - Category (Prose/Poetry/Novel/Essay/Monologue)
    - Excerpt (first 2-3 sentences)
    - Date
    - Full text content
  - **Dedicated Reading Pages**: Each writing opens a full-text view with:
    - Hero title with blur backdrop
    - Subtitle showing category
    - Full text in glowing bordered container
    - "← Back" button (top-left floating)
    - Cinematic zoom-in transition
  - Update "About Forsaken Ká" section with real novel info

## 🟡 Important - Recommended Before Deploy

### 8. Contact Form Integration
- [ ] **Contact Page** (`src/pages/Contact.tsx`)
  - Line 23: Implement actual form submission
  - **Options:**
    - **Formspree** (Easiest): Add action attribute to form
    - **EmailJS**: Install package and implement
    - **Lovable Cloud**: Create edge function for email sending
  - See README.md for detailed instructions

### 9. SEO & Metadata
- [ ] **index.html** (Already updated but verify)
  - Line 5: Page title
  - Line 6: Meta description
  - Lines 11-16: Open Graph tags
- [ ] Add favicon.ico to `/public/` folder
- [ ] Consider adding sitemap.xml for better SEO

### 10. Images & Assets
- [ ] Add profile photo
  - Recommended location: `public/images/profile.jpg`
  - Or use `src/assets/profile.jpg` with import
- [ ] Optional: Add hero background image to home page
- [ ] Optional: Add project screenshots to Projects page

## 🟢 Optional - Nice to Have

### 11. Advanced Features
- [ ] **Preloader**: Already added - verify FARAAZ glow animation works
- [ ] **Auto-hiding Navbar**: Already added - fades after 5s idle, test functionality
- [ ] **Ambient Sound**: Toggle in footer - replace with custom sound file
- [ ] **Mobile Hamburger Menu**: Already added - test on mobile devices
- [ ] **Particle Effects**: Verify floating particles on home page

### 12. Analytics & Performance
- [ ] Add Google Analytics or Plausible
- [ ] Track page views and user interactions
- [ ] Test GPU-accelerated transitions
- [ ] Verify lazy loading for images

### 13. Browser & Device Testing
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Check page load speed (<3s ideal)
- [ ] Verify all animations are smooth (60fps)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify preloader appears correctly
- [ ] Test navbar auto-hide on scroll
- [ ] Verify glass effects render correctly across devices

### 14. Content Polish & Voice
- [ ] Proofread all text for typos and grammar
- [ ] Ensure consistent voice/tone (intelligent, poetic, precise)
- [ ] Verify all external links open in new tabs
- [ ] Check that all dates are current
- [ ] Review all placeholder #todo tags and replace
- [ ] Verify cinematic aesthetic is consistent across all pages

## 📦 Deployment Steps

### GitHub Pages
1. [ ] Update repository name to `your-username.github.io`
2. [ ] Push all code to GitHub
3. [ ] Go to repository Settings → Pages
4. [ ] Set source to `main` branch
5. [ ] Wait 2-5 minutes for deployment
6. [ ] Visit `https://your-username.github.io`

### Other Platforms
- **Vercel**: Connect repo, auto-deploy on push
- **Netlify**: Connect repo, auto-deploy on push
- **Lovable**: Click "Publish" button in top right

## 🧪 Pre-Launch Testing

- [ ] Test all navigation links
- [ ] Test all external links (GitHub, LinkedIn, Medium)
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness on actual devices
- [ ] Check that all images load
- [ ] Verify RSS feed displays correctly
- [ ] Test ambient sound toggle
- [ ] Check console for errors (F12 → Console)

## 🔍 File Locations Reference

```
Key Files to Edit:
├── src/pages/Home.tsx          → Hero text and tagline
├── src/pages/About.tsx         → Bio and skills
├── src/pages/Resume.tsx        → Experience and education
├── src/pages/Projects.tsx      → Project showcase
├── src/pages/Blogs.tsx         → Medium RSS URL
├── src/pages/Writings.tsx      → Creative writing samples
├── src/pages/Contact.tsx       → Form and social links
├── src/components/Footer.tsx   → Social links
└── index.html                  → Site title and meta tags
```

## 📝 Quick Find & Replace Strategy

Use your code editor's find/replace (Ctrl+Shift+F or Cmd+Shift+F):

1. **Search**: `faraazz05` → **Replace**: `your-github-username`
2. **Search**: `faraaz@example.com` → **Replace**: `your-real-email`
3. **Search**: `FARAAZ` or `Faraaz` → **Replace**: `YourName` (check case sensitivity!)
4. **Search**: `#todo` or `TODO:` → **Find all** placeholder locations to customize
5. **Search**: `/assets/profile.jpg` → Update with your actual image path
6. **Search**: `https://medium.com/feed/@faraaz` → Update with your Medium feed

---

## 🎨 Design System Overview (Mindspace v2.5)

### Color Palette
- **Background**: Deep blacks (#050505, #0A0A0A, #111111)
- **Accent Cyan**: #00FFFF (primary highlight, AI tone)
- **Accent Gold**: #B58900 (creative warmth, rim lighting)
- **Text**: White (#FFFFFF) and Gray (#8B8B8B)

### Typography
- **Primary**: Space Grotesk (modern sans-serif)
- **Secondary**: Inter (body text)
- **Optional Serif**: Playfair Display (creative sections)

### Effects & Motion
- **Glass**: Frosted blur with depth, cyan/gold glow edges
- **Transitions**: Fade, slide, zoom-out, pan-left (cinematic camera feel)
- **Hover**: Lift + glow edge
- **Scroll**: Parallax + inertia scrolling
- **Preloader**: FARAAZ text with pulse-glow expansion
- **Navbar**: Auto-hides after 5s idle, reappears on mouse move

---

## 🎬 Cinematic Influences Applied

This portfolio draws inspiration from:

1. **Grok AI**: Clean modular structure, sci-fi UI minimalism
2. **Billelis**: Baroque energy, 3D depth, gold + cyan textures
3. **Harun**: Hero typography, oversized identity, calm geometry
4. **Ancient British**: Split-section contact layout

**Result**: "A cinematic OS interface for a human mind — precise, poetic, and alive."

## ✅ Final Checklist

Before clicking deploy:
- [ ] All TODO items in code are addressed
- [ ] No console errors in browser
- [ ] Contact form works (or is properly disabled)
- [ ] All social links are correct
- [ ] RSS feed loads (if using Medium)
- [ ] Site looks good on mobile
- [ ] README.md updated with your info

---

**Estimated Time to Complete:** 4-8 hours

**Priority Order:**
1. **Phase 1 - Identity** (30 min)
   - Update name, tagline, bio
   - Replace social links and email
   
2. **Phase 2 - Content Foundation** (2 hours)
   - Resume: 6-7 experiences + 30+ skills
   - Projects: 15-20 entries + 3-4 research papers
   - Writings: 10+ entries with full text

3. **Phase 3 - Integration** (1 hour)
   - Medium RSS feed connection
   - Contact form (Formspree/EmailJS)
   - Ambient sound file replacement

4. **Phase 4 - Assets** (1 hour)
   - Profile image
   - Project screenshots (optional)
   - Custom particle/video background (optional)

5. **Phase 5 - Testing & Polish** (1-2 hours)
   - Cross-browser testing
   - Mobile responsiveness
   - Animation smoothness
   - Preloader verification
   - Navbar auto-hide testing
   
6. **Phase 6 - Deployment** (30 min)
   - Final build test
   - GitHub Pages setup
   - Custom domain (optional)
