# Upload Website to GitHub Pages - Step by Step Guide

Follow these steps to upload your website to GitHub Pages and get a shareable link.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: `baltimore-blaze-website` (or any name you like)
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Step 2: Copy the Repository URL

After creating the repo, GitHub will show you a page with setup instructions. Copy the repository URL. It will look like:
```
https://github.com/YOUR_USERNAME/baltimore-blaze-website.git
```

## Step 3: Open Terminal and Run These Commands

Open Terminal and copy/paste these commands one by one:

```bash
# Navigate to your project folder
cd /Users/iodutayo.27/Documents/coding/website1

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Baltimore Blaze Basketball website"

# Rename branch to main
git branch -M main

# Add GitHub repository (REPLACE YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

**Example:** If your username is `iodutayo` and repo is `baltimore-blaze-website`:
```bash
git remote add origin https://github.com/iodutayo/baltimore-blaze-website.git
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top of the page)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select branch: **"main"**
6. Select folder: **"/ (root)"**
7. Click **"Save"**

## Step 5: Get Your Live Link

After saving, GitHub will show you a link like:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**This is your live website link!** It may take 1-2 minutes to go live.

## Your Website Links Will Be:

- **Homepage**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/index.html`
- **Project Description**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/project-description.html`
- **Bio Page**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/bio.html`
- **Schedule**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/schedule.html`
- **Roster**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/roster.html`
- **Shop**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/shop.html`

## Troubleshooting

**If you get authentication errors:**
- GitHub no longer accepts passwords. Use a Personal Access Token:
  1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Click "Generate new token"
  3. Give it a name, select "repo" scope
  4. Copy the token and use it as your password when pushing

**If files don't appear:**
- Make sure you ran `git add .` before committing
- Check that you're in the correct directory

**If GitHub Pages doesn't work:**
- Make sure repository is Public (not Private)
- Wait 1-2 minutes after enabling Pages
- Check the Pages settings show "Your site is live at..."

## Quick Reference

Once set up, to update your website:
```bash
cd /Users/iodutayo.27/Documents/coding/website1
git add .
git commit -m "Update website"
git push
```

Changes will appear on your live site in 1-2 minutes!

