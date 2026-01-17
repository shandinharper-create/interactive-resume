# Shandin Harper - Interactive Resume Deployment Guide

## What You Have

This interactive resume is a React application (Next.js) with AI-powered features that:
- Allows visitors to chat with an AI trained on your background
- Provides role fit assessment
- Shows expandable context for your experience
- Demonstrates strategic UX thinking

## Quick Start - Deploy to Vercel (Recommended)

### Step 1: Get Your Claude API Key

1. Go to https://console.anthropic.com/settings/keys
2. Sign in (or create account if you don't have one)
3. Click "Create Key"
4. Copy the key (starts with "sk-ant-")
5. Save it somewhere safe - you'll need it in Step 4

### Step 2: Create a Vercel Account

1. Go to https://vercel.com/signup
2. Sign up with GitHub, GitLab, or email (GitHub is easiest)
3. Verify your email if needed

### Step 3: Deploy Your Site

**Option A: Direct Upload (Easiest)**

1. Zip the entire `/deployment` folder from your downloads
2. Go to https://vercel.com/new
3. Click "Deploy" (without connecting Git)
4. Drag and drop your zip file
5. Click "Deploy"

**Option B: GitHub (Recommended for updates)**

1. Create a new GitHub repository
2. Upload the `/deployment` folder contents to it
3. Go to https://vercel.com/new
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

### Step 4: Add Your API Key

1. Once deployed, go to your project in Vercel dashboard
2. Click "Settings" → "Environment Variables"
3. Add variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: [paste your API key from Step 1]
4. Click "Save"
5. Go to "Deployments" tab
6. Click the three dots on the latest deployment
7. Click "Redeploy" → "Redeploy"

### Step 5: Connect Your Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Enter: `resume.sharperstudio.com` (or `sharperstudio.com`)
3. Follow Vercel's instructions to add DNS records in HostGator:
   - Go to your HostGator cPanel
   - Find "DNS Zone Editor"
   - Add the records Vercel tells you to add

**OR keep the free Vercel URL:** `your-project-name.vercel.app`

---

## Alternative: Deploy to HostGator (Advanced)

If you prefer to use HostGator, you'll need:

1. **Node.js support** on your hosting plan
2. **SSH access** to install dependencies
3. A **proxy script** to handle API calls securely

**Steps:**

1. Build the project locally:
   ```bash
   cd deployment
   npm install
   npm run build
   ```

2. Upload these folders to HostGator:
   - `.next/`
   - `public/`
   - `node_modules/`
   - `package.json`

3. Create a PHP proxy for API calls (to keep your key secure)

This is significantly more complex. I recommend Vercel for simplicity.

---

## Cost Breakdown

### Vercel Hosting:
- **Free tier includes:**
  - Unlimited static sites
  - 100GB bandwidth/month
  - Serverless functions
  - Custom domains
  - Automatic HTTPS

**Your usage:** Likely <1GB/month = **$0**

### Claude API:
- **Costs per conversation:**
  - ~$0.01 per conversation (typical)
  - ~$0.50 per long conversation with multiple questions

**Estimated:** If 100 people use the chat = ~$5-10/month

**Total Monthly Cost: ~$5-10** (just API usage, hosting is free)

---

## Testing Your Site

Once deployed, test these features:

1. **Chat Feature:**
   - Click "Ask AI About My Approach"
   - Type: "Tell me about your design systems experience"
   - Should get a detailed response

2. **Fit Assessment:**
   - Click "Assess Role Fit"
   - Paste a job description
   - Click "Assess Fit"
   - Should analyze the match

3. **Expandable Context:**
   - Scroll to Experience section
   - Click "View UX Context" on any role
   - Should expand to show detailed backstory

---

## Troubleshooting

**Problem: Chat doesn't work / says "error"**
- Check that you added the API key in Vercel environment variables
- Make sure you redeployed after adding the key

**Problem: Site is slow to load**
- This is normal for first load (Vercel cold start)
- Subsequent loads will be fast

**Problem: Can't connect custom domain**
- DNS changes can take 24-48 hours to propagate
- Check that you added the correct records in HostGator

---

## Next Steps After Deployment

1. **Update Your Traditional Resume:**
   - Change the link from placeholder to actual URL
   - Example: `sharperstudio.com/resume` or `your-site.vercel.app`

2. **Test With Friends:**
   - Send them the link
   - Ask them to try the chat feature
   - Get feedback on what questions they asked

3. **Monitor Usage:**
   - Check Vercel analytics (free tier)
   - Check Claude API usage at console.anthropic.com
   - Set up billing alerts if you want

4. **Share Strategically:**
   - Add to LinkedIn "Featured" section
   - Include in email signature
   - Use in job applications

---

## Files in This Package

```
deployment/
├── package.json          # Dependencies
├── pages/
│   └── index.js         # Main resume page
├── api/
│   └── chat.js          # Secure API proxy
├── .env.example         # Environment variables template
├── .gitignore          # Files to ignore in Git
└── DEPLOYMENT.md       # This file
```

---

## Support

If you run into issues:

1. **Vercel Documentation:** https://vercel.com/docs
2. **Claude API Docs:** https://docs.anthropic.com
3. **Next.js Docs:** https://nextjs.org/docs

---

## Security Notes

- ✅ Your API key is stored securely in Vercel environment variables
- ✅ It's never exposed in the browser
- ✅ All API calls go through your secure serverless function
- ✅ Visitors can't see or steal your API key

---

Good luck! You've got this. 🚀
