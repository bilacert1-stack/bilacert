# Bilacert Website

A modern, professional website for Bilacert - a South African compliance consultancy specializing in
ICASA and NRCS LOA approvals.

## 🚀 Features

- **Modern Design**: Clean, professional, and trustworthy design with warm colors
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Complete SEO implementation with sitemap and metadata
- **Contact Forms**: Functional contact forms with validation
- **WhatsApp Integration**: Floating WhatsApp button for easy communication
- **Blog System**: Ready-to-use blog system with MDX support
- **Service Pages**: Detailed pages for all compliance services
- **FAQ Section**: Comprehensive FAQ with accordion layout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Content**: MDX for blog posts
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- npm, yarn, or pnpm

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bilacert-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
bilacert-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   ├── services/          # Service pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── robots.ts          # Robots.txt
│   │   └── sitemap.ts         # Sitemap
│   └── components/            # Reusable components
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Site footer
│       └── WhatsAppButton.tsx # WhatsApp integration
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `src/app/globals.css`:

- **Primary Blue**: `#0A2B4C` - Main brand color
- **Accent Orange**: `#F2994A` - Call-to-action and highlights
- **Secondary Gray**: `#F8F9FA` - Background sections
- **Text Colors**: Various shades of gray for readability

### Content Updates

#### Adding Blog Posts

1. Create a new MDX file in the blog posts directory
2. Add the post metadata to the blog posts object in `src/app/blog/[slug]/page.tsx`
3. The post will automatically appear in the blog listing

#### Updating Service Information

1. Edit the relevant service page in `src/app/services/[service-name]/page.tsx`
2. Update pricing, features, and descriptions as needed
3. The changes will be reflected immediately

#### Contact Information

Update contact details in:

- `src/components/Header.tsx` (top bar)
- `src/components/Footer.tsx` (footer)
- `src/components/WhatsAppButton.tsx` (WhatsApp number)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository

3. **Configure Project**:

   - Framework Preset: Next.js
   - Root Directory: `./` (or `bilacert-website` if in subfolder)
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**: Click "Deploy" and wait for the build to complete

5. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `bilacert.co.za`)
   - Follow DNS configuration instructions

### Alternative Deployment Options

#### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure redirects for Next.js routing

#### Traditional Hosting

1. Build the project: `npm run build`
2. Export static files: `npm run export`
3. Upload the `out` folder to your web server

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

### Option 1: Email Service (Recommended)

1. **Use a service like Formspree or Netlify Forms**:

   - Sign up for Formspree
   - Get your form endpoint
   - Update the form action in `src/app/contact/page.tsx`

2. **Or use EmailJS**:
   - Sign up for EmailJS
   - Configure email templates
   - Update the form submission logic

### Option 2: Backend Integration

1. Create an API route in `src/app/api/contact/route.ts`
2. Implement email sending logic (using Nodemailer, SendGrid, etc.)
3. Update the form submission in the contact page

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=info@bilacert.co.za
NEXT_PUBLIC_PHONE_NUMBER=0754304433

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email Service (Optional)
EMAIL_SERVICE_API_KEY=your-email-service-key
```

### SEO Configuration

Update SEO settings in:

- `src/app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata
- `src/app/sitemap.ts` - Sitemap configuration

## 📱 WhatsApp Integration

The WhatsApp button is configured for South African numbers. To update:

1. Edit `src/components/WhatsAppButton.tsx`
2. Update the `phoneNumber` variable with your WhatsApp number
3. Customize the default message if needed

## 🎯 Performance Optimization

The website is already optimized for performance with:

- **Next.js 15**: Latest framework with performance improvements
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Static Generation**: Pre-rendered pages for better SEO
- **Tailwind CSS**: Utility-first CSS for smaller bundle sizes

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Styling Issues**: Check that Tailwind CSS is properly configured
3. **TypeScript Errors**: Run `npm run type-check` to identify issues
4. **Deployment Issues**: Check build logs in your deployment platform

### Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📞 Support

For technical support or questions about the website:

- **Email**: info@bilacert.co.za
- **Phone**: 075 430 4433
- **Website**: [bilacert.co.za](https://bilacert.co.za)

## 📄 License

This project is proprietary to Bilacert (Pty) Ltd. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Bilacert** - Your Compliance Partner, Simplified.
