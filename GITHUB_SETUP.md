# How to Upload to GitHub

Follow these steps to upload your website to GitHub so the README appears:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., "baltimore-blaze-website" or "basketball-website")
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 2: Open Terminal and Navigate to Your Project

Open Terminal and run:
```bash
cd /Users/iodutayo.27/Documents/coding/website1
```

## Step 3: Initialize Git (if not already done)

```bash
git init
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Make Your First Commit

```bash
git commit -m "Initial commit: Baltimore Blaze Basketball website"
```

## Step 6: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

For example, if your username is `iodutayo` and repo is `basketball-website`:
```bash
git remote add origin https://github.com/iodutayo/basketball-website.git
```

## Step 7: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username and password (or use a Personal Access Token).

## Step 8: View on GitHub

Go to your repository on GitHub and you'll see:
- All your files
- The README.md will automatically display at the bottom of the repository page
- You can click on any HTML file and GitHub will show a preview

## Quick Copy-Paste Commands

If you've already created the GitHub repo, copy and paste these (replace YOUR_USERNAME and YOUR_REPO_NAME):

```bash
cd /Users/iodutayo.27/Documents/coding/website1
git init
git add .
git commit -m "Initial commit: Baltimore Blaze Basketball website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Troubleshooting

**If you get authentication errors:**
- Use a Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Use that token as your password when pushing

**If files don't appear:**
- Make sure you ran `git add .` to stage all files
- Check that you're in the correct directory

