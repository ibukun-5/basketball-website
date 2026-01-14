#!/bin/bash

# GitHub Pages Setup Script for Baltimore Blaze Website
# This script will help you push your website to GitHub Pages

echo "🚀 Setting up GitHub Pages for Baltimore Blaze Website"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    git branch -M main
fi

# Check if files are committed
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}Staging and committing files...${NC}"
    git add .
    git commit -m "Initial commit: Baltimore Blaze Basketball website"
fi

echo ""
echo -e "${GREEN}✓ Local git repository is ready${NC}"
echo ""

# Prompt for GitHub repository URL
echo -e "${YELLOW}📝 IMPORTANT: You need to create a GitHub repository first!${NC}"
echo ""
echo "Follow these steps:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: (e.g., 'baltimore-blaze-website')"
echo "3. Make it PUBLIC (required for free GitHub Pages)"
echo "4. DO NOT check 'Initialize with README'"
echo "5. Click 'Create repository'"
echo ""
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo -e "${RED}❌ No repository URL provided. Exiting.${NC}"
    exit 1
fi

# Add remote
echo ""
echo -e "${YELLOW}Adding remote repository...${NC}"
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

# Push to GitHub
echo ""
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    echo ""
    echo -e "${GREEN}🎉 Next Steps:${NC}"
    echo ""
    echo "1. Go to your repository on GitHub: $REPO_URL"
    echo "2. Click 'Settings' (top menu)"
    echo "3. Scroll down to 'Pages' (left sidebar)"
    echo "4. Under 'Source', select 'Deploy from a branch'"
    echo "5. Select branch: 'main'"
    echo "6. Select folder: '/ (root)'"
    echo "7. Click 'Save'"
    echo ""
    echo -e "${GREEN}Your website will be live at:${NC}"
    REPO_NAME=$(basename "$REPO_URL" .git)
    USERNAME=$(echo "$REPO_URL" | sed -E 's|https://github.com/([^/]+)/.*|\1|')
    echo -e "${GREEN}https://${USERNAME}.github.io/${REPO_NAME}/${NC}"
    echo ""
    echo -e "${YELLOW}Note: It may take 1-2 minutes for the site to be available.${NC}"
else
    echo ""
    echo -e "${RED}❌ Failed to push. Please check:${NC}"
    echo "  - Your GitHub credentials are configured"
    echo "  - The repository URL is correct"
    echo "  - You have permission to push to the repository"
fi




