# 🚀 Deployment Guide

This guide will help you deploy the Mumble video chat application to GitHub Pages.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Agora Account**: Sign up at [Agora Console](https://console.agora.io/) to get your App ID
3. **Repository**: This project should be in a GitHub repository

## Step 1: Configure Agora SDK

1. **Get Your Agora App ID**:
   - Go to [Agora Console](https://console.agora.io/)
   - Sign up or log in
   - Create a new project
   - Copy your App ID

2. **Update Configuration**:
   - Open `js/config.js` in your project
   - Replace the `APP_ID` with your actual Agora App ID:
   ```javascript
   const AGORA_CONFIG = {
       APP_ID: "your-actual-agora-app-id-here"
   };
   ```

## Step 2: Enable GitHub Pages

1. **Go to Repository Settings**:
   - Navigate to your GitHub repository
   - Click on "Settings" tab

2. **Enable GitHub Pages**:
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch (will be created by GitHub Actions)
   - Click "Save"

## Step 3: Push to GitHub

1. **Commit and Push Changes**:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Check GitHub Actions**:
   - Go to "Actions" tab in your repository
   - You should see the deployment workflow running
   - Wait for it to complete

## Step 4: Access Your Live Site

Once the deployment is complete, your site will be available at:
```
https://yourusername.github.io/your-repository-name/
```

For this project: `https://ahmadraza301.github.io/Mumble2-/`

## Troubleshooting

### Common Issues

1. **Site Not Loading**:
   - Check if GitHub Actions completed successfully
   - Verify the gh-pages branch was created
   - Ensure GitHub Pages is enabled in repository settings

2. **Video/Audio Not Working**:
   - Verify your Agora App ID is correct in `js/config.js`
   - Check browser console for errors
   - Ensure you're using HTTPS (required for camera/microphone access)

3. **GitHub Actions Failing**:
   - Check the Actions tab for error details
   - Ensure all files are committed and pushed
   - Verify the workflow file is in `.github/workflows/deploy.yml`

### Manual Deployment

If GitHub Actions isn't working, you can manually deploy:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d ."
     }
   }
   ```

3. **Deploy manually**:
   ```bash
   npm run deploy
   ```

## Security Notes

- **Never commit your Agora App Certificate** to the repository
- **Use environment variables** for sensitive data in production
- **Enable HTTPS** for camera/microphone access
- **Regularly update dependencies** for security patches

## Performance Optimization

- **Enable GitHub Pages caching** for better performance
- **Optimize images** before committing
- **Minify CSS/JS** for production (optional)
- **Use CDN** for external libraries (already done with Agora SDK)

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://pages.github.com/)
2. Review [Agora documentation](https://docs.agora.io/)
3. Open an issue in this repository
4. Check browser console for error messages
