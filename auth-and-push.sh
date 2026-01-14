#!/bin/bash

echo "🔐 GitHub Authentication & Push Helper"
echo "======================================"
echo ""

cd /Users/iodutayo.27/Documents/coding/website1

# Check if GitHub CLI is available
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI found!"
    
    # Check if already authenticated
    if gh auth status &> /dev/null; then
        echo "✅ Already authenticated with GitHub CLI"
    else
        echo "🔐 Authenticating with GitHub CLI..."
        gh auth login
    fi
    
    echo ""
    echo "📤 Pushing to GitHub..."
    git push -u origin main
    
else
    echo "⚠️  GitHub CLI not found"
    echo ""
    echo "📝 Using Personal Access Token method..."
    echo ""
    echo "You need a Personal Access Token from GitHub:"
    echo ""
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Click 'Generate new token' → 'Generate new token (classic)'"
    echo "3. Name it: 'website-push'"
    echo "4. Select scope: 'repo' (check the box)"
    echo "5. Click 'Generate token'"
    echo "6. Copy the token (you won't see it again!)"
    echo ""
    read -p "Press Enter after you've copied your token..."
    echo ""
    echo "📤 Pushing to GitHub..."
    echo "When prompted:"
    echo "  Username: ibukun-5"
    echo "  Password: paste your token"
    echo ""
    
    git push -u origin main
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📝 Next step: Enable GitHub Pages"
    echo ""
    echo "1. Go to: https://github.com/ibukun-5/basketball-website/settings/pages"
    echo "2. Under 'Source', select 'Deploy from a branch'"
    echo "3. Branch: main"
    echo "4. Folder: / (root)"
    echo "5. Click 'Save'"
    echo ""
    echo "🌐 Your website will be live at:"
    echo "   https://ibukun-5.github.io/basketball-website/"
    echo ""
    echo "⏱️  It may take 1-2 minutes to go live."
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "  - Your credentials are correct"
    echo "  - You have permission to push to the repository"
    echo "  - Your internet connection is working"
fi

