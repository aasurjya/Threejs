# Vercel Deployment Setup Guide

## Issue: Dashboard Not Loading & Location Data Not Saved to Database

The problem occurs because environment variables set in `.env.local` are **not deployed to Vercel**. Vercel only reads from:
1. Environment variables set in the Vercel dashboard
2. `.env.production` file (if committed, though not recommended for secrets)

## Solution: Configure MongoDB URI in Vercel

### Step 1: Get Your MongoDB Connection String
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Navigate to your cluster
3. Click "Connect"
4. Choose "Drivers" and copy the connection string
5. Replace `<password>` and `<username>` with your credentials
6. Format: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`

### Step 2: Add Environment Variable to Vercel
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. **Name**: `MONGODB_URI`
5. **Value**: Paste your MongoDB connection string
6. **Environments**: Select **Production** (and **Preview** if you want it in preview deployments)
7. Click **Save**

### Step 3: Redeploy Your Application
1. Go to **Deployments** tab
2. Click the three dots on the latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

### Step 4: Verify It Works
1. Visit your website in production
2. Open browser DevTools (F12) → **Console**
3. Check for logs like "Sending tracking data:" and "Visitor tracked successfully:"
4. Visit `/dashboard` to see if analytics data appears

## Troubleshooting

### Dashboard shows "Failed to load analytics data"
- Check Vercel logs: **Deployments** → Click on your deployment → **Logs**
- Look for "MONGODB_URI is not defined" or connection errors
- Verify the MongoDB connection string is correct in Vercel settings

### Location data not appearing in database
- Check browser console for "Tracking failed:" messages
- Check Vercel function logs for "Tracking Error:"
- Ensure geolocation permission is granted in browser
- Verify MongoDB database is accessible from Vercel (IP whitelist)

### MongoDB Atlas IP Whitelist
If you see connection errors:
1. Go to MongoDB Atlas → **Network Access**
2. Click **Add IP Address**
3. Select **Allow access from anywhere** (for development) or add Vercel's IP range
4. Click **Confirm**

## Local Development
For local development, keep using `.env.local`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

## Security Best Practices
- Never commit `.env.local` or actual credentials to Git
- Use Vercel's Environment Variables for production secrets
- Rotate MongoDB passwords periodically
- Use IP whitelisting in MongoDB Atlas for production
