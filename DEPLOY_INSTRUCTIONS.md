# Deploy Your Website to GitHub Pages

Your code is ready to push! Follow these steps to get your website live.

## Step 1: Push Your Code to GitHub

Run this command in your terminal:

```bash
cd /Users/iodutayo.27/Documents/coding/website1
git push -u origin main
```

**When prompted for authentication:**
- **Username:** `ibukun-5`
- **Password:** Use a **Personal Access Token** (NOT your GitHub password)

### Don't Have a Personal Access Token?

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name it: `basketball-website`
4. Select expiration: Choose your preference (90 days, 1 year, or no expiration)
5. Check the **"repo"** scope (this gives access to repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
8. Use this token as your password when pushing

## Step 2: Enable GitHub Pages

After successfully pushing, enable GitHub Pages:

1. Go to: https://github.com/ibukun-5/basketball-website
2. Click the **"Settings"** tab (top menu)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. **Branch:** Select `main`
6. **Folder:** Select `/ (root)`
7. Click **"Save"**

## Step 3: Your Live Website

After enabling Pages, your website will be live at:

**🌐 https://ibukun-5.github.io/basketball-website/**

**Note:** It may take 1-2 minutes for the site to go live after enabling Pages.

## Your Website Pages:

- **Homepage:** https://ibukun-5.github.io/basketball-website/
- **Project Description:** https://ibukun-5.github.io/basketball-website/project-description.html
- **Bio Page:** https://ibukun-5.github.io/basketball-website/bio.html
- **Schedule:** https://ibukun-5.github.io/basketball-website/schedule.html
- **Roster:** https://ibukun-5.github.io/basketball-website/roster.html
- **Shop:** https://ibukun-5.github.io/basketball-website/shop.html

## Updating Your Website

To update your website in the future, just run:

```bash
cd /Users/iodutayo.27/Documents/coding/website1
git add .
git commit -m "Your update message"
git push
```

Changes will appear on your live site in 1-2 minutes!

## Troubleshooting

**If push fails:**
- Make sure you're using a Personal Access Token, not your GitHub password
- Verify the token has the "repo" scope enabled
- Check that the repository exists and you have write access

**If GitHub Pages doesn't work:**
- Make sure the repository is **Public** (not Private)
- Wait 1-2 minutes after enabling Pages
- Check the Pages settings show "Your site is live at..."
- Verify your `index.html` file is in the root directory

