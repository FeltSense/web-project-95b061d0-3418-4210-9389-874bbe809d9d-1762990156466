# Elite Properties - Real Estate Website

## Project Overview
A modern, professional real estate website built with Next.js 14, TypeScript, and Tailwind CSS. The website showcases property services, client testimonials, pricing options, and includes a contact form for lead generation.

## Design Philosophy
- **Modern & Professional**: Clean design with a focus on trust and credibility
- **User-Centric**: Easy navigation and clear calls-to-action
- **Responsive**: Fully responsive design that works seamlessly on all devices
- **Performance**: Optimized images and smooth animations

## Color Palette
- Primary Blue: #2563eb (Trust, professionalism)
- Dark Blue: #1e40af (Depth, sophistication)
- White/Gray: Clean backgrounds and text
- Accent Gold: For premium features

## Key Features

### 1. Hero Section
- Full-bleed background image with gradient overlay
- Large, impactful typography
- Clear value proposition
- Dual CTAs (Get Started, Learn More)

### 2. Services Section
- 4 core services with icons
- 2-column grid layout
- Hover animations for engagement
- Clear descriptions of each service

### 3. Testimonials
- Carousel layout (3 testimonials at a time)
- Auto-play with manual controls
- Client photos and details
- 5-star ratings

### 4. Pricing Section
- Single premium package at $29/month
- Comprehensive feature list
- Stripe payment integration
- Trust indicators and statistics

### 5. Contact Form
- Split layout with contact information
- Form fields: name, email, phone, message
- Success state animation
- Backend integration with API

### 6. Navigation
- Sticky header with transparency effect
- Smooth scroll to sections
- Mobile-responsive menu
- Clear CTA button

### 7. Footer
- Comprehensive site links
- Contact information
- Social media links
- Legal links

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)
- **Payment**: Stripe
- **Form API**: Custom backend endpoint

## API Integration

### Contact Form Submission
- **Endpoint**: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Method**: POST
- **Required Fields**:
  - name (string)
  - email (string)
  - phone (string)
  - message (string)
  - founder_id (hidden)
  - project_id (hidden)

### Stripe Payment
- **Link**: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- **Price**: $29/month
- **Type**: Subscription

## Image Sources
- Hero: Unsplash (modern architecture/real estate)
- Services: Industry-specific imagery
- Testimonials: Professional headshots

## Typography Scale
- Hero H1: text-6xl to text-8xl
- Section H2: text-5xl to text-6xl
- Card H3: text-2xl
- Body: text-lg
- Small: text-base

## Spacing System
- Section padding: py-24
- Card padding: p-8 to p-10
- Container: max-w-7xl
- Gap: gap-8 to gap-12

## Animation & Interactions
- Smooth scroll behavior
- Hover scale effects
- Transition duration: 300ms
- Carousel auto-play: 5s interval
- Form success animation

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance Optimizations
- Next.js Image optimization
- Lazy loading for images
- Optimized font loading
- Minimal JavaScript bundle

## SEO Considerations
- Semantic HTML structure
- Meta tags configured
- Alt text for images
- Proper heading hierarchy
- Fast page load times

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements
- Property listing database integration
- Advanced search functionality
- User authentication
- Saved properties feature
- Virtual tour integration
- Live chat support

## Deployment
- Platform: Vercel (recommended)
- Build command: `npm run build`
- Start command: `npm start`
- Node version: 18.x or higher

## Environment Variables
See `.env.local.example` for required environment variables.

## Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build
```bash
npm run build
npm start
```

## License
Proprietary - Elite Properties © 2024