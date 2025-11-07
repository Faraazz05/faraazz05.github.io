# Portfolio Deployment Checklist

## 🔴 Critical - Must Complete Before Deploy

### 1. Personal Information
- [ ] **Home Page** (`src/pages/Home.tsx`)
  - Line 13: Update name "Faraaz" to your actual name
  - Line 16: Update tagline "AI Researcher · Writer · Builder · Marketing"
  - Line 19: Update one-liner "I build systems that think, write, and feel."

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
  - Lines 34-50: Customize your bio and story
  - Lines 57-72: Update current focus and research interests
  - Update the skills array if needed (lines 7-12)

### 4. Resume/Experience
- [ ] **Resume Page** (`src/pages/Resume.tsx`)
  - Lines 7-13: Replace placeholder experience with real work history
  - Lines 16-23: Add actual education details
  - Lines 25-30: Update programming languages and proficiency levels
  - Lines 32-38: Update "Currently Learning" topics
  - Optional: Add research papers section

### 5. Projects
- [ ] **Projects Page** (`src/pages/Projects.tsx`)
  - Lines 7-30: Replace ALL 3 placeholder projects with your real projects
  - For each project update:
    - Title
    - Description
    - Tech stack array
    - GitHub link
    - Live demo link (if available)

### 6. Blog Integration
- [ ] **Blogs Page** (`src/pages/Blogs.tsx`)
  - Line 19: Update `MEDIUM_RSS_URL` with your actual Medium feed
    - Format: `https://medium.com/feed/@your-username`
  - Test that RSS feed loads correctly after updating

### 7. Creative Writings
- [ ] **Writings Page** (`src/pages/Writings.tsx`)
  - Lines 7-32: Replace placeholder writings with your actual work
  - For each entry update:
    - Title
    - Category (Prose/Poetry/Novel/Essay)
    - Excerpt (actual text from your work)
    - Date
  - Lines 61-74: Update "About Forsaken Ká" section or replace with your project

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

### 11. Analytics
- [ ] Add Google Analytics or Plausible
- [ ] Track page views and user interactions

### 12. Performance
- [ ] Test site on mobile devices
- [ ] Check page load speed
- [ ] Verify all animations are smooth
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### 13. Content Polish
- [ ] Proofread all text for typos
- [ ] Ensure consistent voice/tone
- [ ] Verify all external links open in new tabs
- [ ] Check that all dates are current

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

## 📝 Quick Find & Replace

Use your code editor to quickly replace:

1. Search: `faraazz05` → Replace with your GitHub username
2. Search: `faraaz@example.com` → Replace with your email
3. Search: `Faraaz` → Replace with your name (check case sensitivity)
4. Search: `#todo` or `TODO:` → Find all placeholder locations

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

**Estimated Time to Complete:** 2-4 hours

**Priority Order:**
1. Social links & contact info (10 min)
2. About & bio text (20 min)
3. Projects showcase (30 min)
4. Resume content (30 min)
5. Writings content (30 min)
6. Contact form integration (30 min)
7. Testing & polish (30 min)
