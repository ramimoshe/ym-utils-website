# Utils Website

A modern static website built with React, Bootstrap, and Vite, optimized for deployment to AWS S3.

## 🚀 Features

- **React 18** with modern hooks and components
- **Bootstrap 5** for responsive design
- **Vite** for fast development and optimized builds
- **React Router** for client-side routing
- **AWS S3** deployment ready
- **CloudFront** integration for global CDN
- **Responsive design** that works on all devices

## 📁 Project Structure

```
utils-website/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx   # Navigation component
│   │   └── Footer.jsx   # Footer component
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Homepage
│   │   ├── About.jsx    # About page
│   │   └── Contact.jsx  # Contact page
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Build output (generated)
├── deploy.sh            # S3 deployment script
├── cloudformation-template.yaml  # AWS infrastructure
└── package.json         # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- AWS CLI (for deployment)

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to S3 (requires AWS setup)

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

3. **Automatic Deployment:**
   - GitHub Actions will automatically build and deploy on every push to main
   - Your site will be available at: `https://your-username.github.io/utils-website/`

### Option 2: Manual GitHub Pages Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy manually:**
   ```bash
   npm run deploy
   ```

### Option 3: AWS S3 Deployment

1. **Configure AWS CLI:**
   ```bash
   aws configure
   ```

2. **Deploy using the script:**
   ```bash
   ./deploy.sh your-bucket-name your-aws-profile
   ```

### Option 4: Full Infrastructure with CloudFront

1. **Deploy infrastructure:**
   ```bash
   aws cloudformation deploy \
     --template-file cloudformation-template.yaml \
     --stack-name utils-website-stack \
     --parameter-overrides BucketName=your-unique-bucket-name
   ```

2. **Build and upload:**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

### Environment Variables

For deployment, you can set these environment variables:

- `S3_BUCKET_NAME` - Your S3 bucket name
- `AWS_PROFILE` - AWS profile to use
- `AWS_REGION` - AWS region (default: us-east-1)

## 🎨 Customization

### Styling

- Bootstrap 5 is included by default
- Custom styles can be added to `src/index.css`
- Bootstrap variables can be overridden

### Components

- Add new components to `src/components/`
- Add new pages to `src/pages/`
- Update routing in `src/App.jsx`

### Content

- Update the homepage content in `src/pages/Home.jsx`
- Modify the navigation in `src/components/Navbar.jsx`
- Customize the footer in `src/components/Footer.jsx`

## 📱 Responsive Design

The website is fully responsive and includes:

- Mobile-first design approach
- Bootstrap's responsive grid system
- Responsive navigation with mobile hamburger menu
- Optimized images and layout for all screen sizes

## 🔒 Security

- All content is served over HTTPS (when using CloudFront)
- No server-side vulnerabilities (static site)
- S3 bucket configured with minimal required permissions

## 📈 Performance

- Vite optimization for fast builds
- CloudFront CDN for global content delivery
- Optimized asset caching
- Minified and compressed assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

Built with ❤️ using React, Bootstrap, and Vite
