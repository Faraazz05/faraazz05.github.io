# Faraaz Portfolio Website

A cinematic dark glassmorphism portfolio showcasing AI research, writing, and creative projects.

## 🎨 Design Features

- **Dark Glassmorphism Theme**: Semi-transparent panels with blur effects and cyan accent glow
- **Smooth Animations**: Fade-in, slide, and parallax effects throughout
- **Space Grotesk Font**: Modern, technical aesthetic
- **Custom Cursor**: Subtle glow effect
- **Responsive Design**: Mobile-first approach

## 📋 TODO: Content Updates

Before deploying, update these files with your personal information:

### 1. **Update Social Links & Email**
- [ ] `src/components/Footer.tsx` - Update GitHub, LinkedIn, and email links
- [ ] `src/pages/Contact.tsx` - Update all social media handles and email address

### 2. **Resume Page** (`src/pages/Resume.tsx`)
- [ ] Replace placeholder experience with your actual work history
- [ ] Add your education details
- [ ] Update programming languages and skill levels
- [ ] Add research papers if applicable
- [ ] Update "Currently Learning" section

### 3. **Projects Page** (`src/pages/Projects.tsx`)
- [ ] Replace the 3 placeholder projects with your real projects
- [ ] Add accurate descriptions, tech stacks, and GitHub links
- [ ] Add live demo links if available

### 4. **Blogs Page** (`src/pages/Blogs.tsx`)
- [ ] Update `MEDIUM_RSS_URL` with your actual Medium profile feed
  - Format: `https://medium.com/feed/@your-username`
- [ ] Test that the RSS feed is loading correctly

### 5. **Writings Page** (`src/pages/Writings.tsx`)
- [ ] Replace placeholder writings with your actual creative work
- [ ] Add real excerpts from your prose, poetry, or novel
- [ ] Update the "About Forsaken Ká" section (or replace with your project)

### 6. **About Page** (`src/pages/About.tsx`)
- [ ] Customize your bio and story
- [ ] Update current focus and research interests
- [ ] Modify skills if needed

### 7. **Home Page** (`src/pages/Home.tsx`)
- [ ] Verify tagline and one-liner match your brand

### 8. **Images** (Optional)
- [ ] Add a profile photo to `/public/` or `src/assets/`
- [ ] Update any hero images or background graphics

## 🚀 Form Integration

The contact form currently shows a toast notification. To enable actual email sending:

**Option 1: Formspree** (Easiest)
```typescript
// In src/pages/Contact.tsx, update the form action:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
1. Install: `npm install @emailjs/browser`
2. Set up EmailJS account and get credentials
3. Implement in Contact.tsx

**Option 3: Custom Backend**
- Use Lovable Cloud to create an email sending endpoint
- Update the form submission handler

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

### GitHub Pages
1. Update repository name to `your-username.github.io`
2. Push code to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `main` branch

### Other Platforms
- **Vercel**: Connect GitHub repo, auto-deploy
- **Netlify**: Connect GitHub repo, auto-deploy
- **Lovable**: Use the built-in "Publish" feature

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:
- `--accent`: Main accent color (currently cyan #00FFFF)
- `--background`: Page background colors
- `--glass-glow`: Glow effect color

### Fonts
Update `index.html` and `src/index.css` to change fonts.

### Animations
Modify `tailwind.config.ts` keyframes and animation timing.

## 📝 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Navigation bar with glass effect
│   ├── Footer.tsx       # Footer with social links
│   ├── GlassCard.tsx    # Reusable glass card component
│   └── Layout.tsx       # Page layout wrapper
├── pages/
│   ├── Home.tsx         # Landing page
│   ├── About.tsx        # About & bio
│   ├── Resume.tsx       # Experience & education
│   ├── Projects.tsx     # Project showcase
│   ├── Blogs.tsx        # Medium integration
│   ├── Writings.tsx     # Creative writing
│   └── Contact.tsx      # Contact form
└── index.css            # Design system & styles
```

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and adapt for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.
