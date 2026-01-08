# Quick GitHub Pages Setup

## Step 1: Create GitHub Repository (2 minutes)

1. Go to: **https://github.com/new**
2. Repository name: `baltimore-blaze-website` (or any name you like)
3. Make it **PUBLIC** (required for free GitHub Pages)
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating the repo, copy the URL. It will look like:
```
https://github.com/YOUR_USERNAME/baltimore-blaze-website.git
```

## Step 3: Run This Command

Open your terminal in this folder and run:

```bash
./setup-github.sh
```

When prompted, paste your repository URL.

## OR - Manual Commands

If the script doesn't work, run these commands one by one (replace `YOUR_REPO_URL` with your actual GitHub repo URL):

```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Branch: **main**
6. Folder: **/ (root)**
7. Click **"Save"**

## Your Live Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

(Replace YOUR_USERNAME and REPO_NAME with your actual values)

---

**Need help?** Share your repository URL and I can help you push the code!

