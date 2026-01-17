# 🚀 QUICK START - Get Your Interactive Resume Live in 10 Minutes

## ✅ Pre-Flight Checklist

- [ ] Downloaded the `/deployment` folder
- [ ] Have 10 minutes free
- [ ] Ready to create 2 accounts (both free)

---

## 📋 Step-by-Step (10 Minutes Total)

### STEP 1: Get Claude API Key (2 minutes)
1. Go to: https://console.anthropic.com/settings/keys
2. Sign up or log in
3. Click "Create Key"
4. **COPY THE KEY** (starts with "sk-ant-")
5. Save it in a note somewhere

---

### STEP 2: Deploy to Vercel (3 minutes)
1. Go to: https://vercel.com/signup
2. Sign up (use GitHub or email - both work)
3. Go to: https://vercel.com/new
4. **EITHER:**
   - Zip your `/deployment` folder and drag it to Vercel
   - **OR** upload to GitHub first, then import from GitHub
5. Click "Deploy"
6. **WAIT** for deployment to finish (~1 minute)

---

### STEP 3: Add API Key (2 minutes)
1. In Vercel, click your project
2. Click "Settings" → "Environment Variables"
3. Add new variable:
   ```
   Name:  ANTHROPIC_API_KEY
   Value: [paste the key from Step 1]
   ```
4. Click "Save"
5. Go to "Deployments" tab
6. Click "..." → "Redeploy"

---

### STEP 4: Test It! (3 minutes)
1. Vercel will show you a URL like: `your-project.vercel.app`
2. Click it to visit your site
3. Try the chat: "Tell me about your design systems experience"
4. Try fit assessment: paste a job description

**IT WORKS? YOU'RE DONE!** 🎉

---

## 🎯 Optional: Add Custom Domain

**If you want `sharperstudio.com/resume`:**

1. In Vercel: Settings → Domains
2. Add: `resume.sharperstudio.com` or `sharperstudio.com`
3. Vercel will show DNS records to add
4. Go to HostGator cPanel → DNS Zone Editor
5. Add those records
6. Wait 1-24 hours for DNS to propagate

---

## 💰 Cost?

- Vercel hosting: **FREE**
- Claude API: ~$0.01-0.50 per conversation
- **Total: $5-10/month** if 100 people use the chat

---

## ❓ Problems?

**Chat says "error"**
→ Did you add API key AND redeploy?

**Site is slow**
→ Normal for first load, fast after that

**Need help?**
→ Read DEPLOYMENT.md for detailed instructions

---

## 📱 Share Your Resume

Once it's live, update:
- [ ] Traditional resume (change link to real URL)
- [ ] LinkedIn profile (add to Featured section)
- [ ] Email signature
- [ ] Job applications

**You're live!** Now go get hired. 💼
