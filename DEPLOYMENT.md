# Vercel Deployment Guide for Sealed Art Bid

This guide provides step-by-step instructions for deploying the Sealed Art Bid application to Vercel.

## Prerequisites

- GitHub account with access to the `renxinyi12/sealed-art-bid` repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Instructions

### 1. Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### 2. Import Project

1. In your Vercel dashboard, click "New Project"
2. Find and select the `renxinyi12/sealed-art-bid` repository
3. Click "Import"

### 3. Configure Project Settings

#### Framework Preset
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in the Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

**To add environment variables:**
1. In the project settings, go to "Environment Variables"
2. Click "Add New"
3. Add each variable with its corresponding value
4. Make sure to select "Production", "Preview", and "Development" for each variable

### 4. Deploy

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Once deployed, you'll receive a live URL (e.g., `https://sealed-art-bid-xxx.vercel.app`)

### 5. Custom Domain (Optional)

1. In your project dashboard, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter your custom domain (e.g., `sealedartbid.com`)
4. Follow the DNS configuration instructions provided by Vercel

## Post-Deployment Configuration

### 1. Verify Environment Variables

Ensure all environment variables are properly set:
- Check the Vercel dashboard → Settings → Environment Variables
- Verify that all variables are available in Production, Preview, and Development

### 2. Test the Application

1. Visit your deployed URL
2. Test wallet connection functionality
3. Verify that the application loads without errors
4. Check browser console for any errors

### 3. Update Smart Contract Address

Once you deploy the smart contract to Sepolia testnet:
1. Update the `CONTRACT_ADDRESS` in `src/hooks/useContract.ts`
2. Commit and push changes to trigger automatic redeployment

## Automatic Deployments

Vercel will automatically deploy your application when you:
- Push changes to the `main` branch (production deployment)
- Create pull requests (preview deployments)
- Push to other branches (preview deployments)

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are properly installed
   - Verify TypeScript compilation errors

2. **Environment Variables Not Working**
   - Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
   - Check that variables are set for all environments (Production, Preview, Development)

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check that the application is using HTTPS (required for wallet connections)

4. **Network Issues**
   - Ensure RPC URLs are accessible
   - Verify Infura API key is valid and has sufficient quota

### Build Optimization

The application is configured with:
- Vite for fast builds
- Tree shaking for smaller bundle sizes
- Automatic code splitting
- Optimized asset loading

## Monitoring and Analytics

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click on "Analytics" tab
3. Monitor performance metrics, page views, and user behavior

## Security Considerations

- Environment variables are encrypted and secure
- HTTPS is automatically enabled
- DDoS protection is included
- Global CDN for fast loading times

## Support

For deployment issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review build logs in the Vercel dashboard
3. Contact Vercel support if needed

## Cost Information

- **Free Tier**: 100GB bandwidth, unlimited deployments
- **Pro Tier**: $20/month for additional features and higher limits
- **Enterprise**: Custom pricing for large-scale deployments

The application should run comfortably on the free tier for development and small-scale production use.
