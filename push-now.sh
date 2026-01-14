#!/bin/bash

echo "🚀 Pushing your website to GitHub..."
echo ""

cd /Users/iodutayo.27/Documents/coding/website1

# Check if GitHub CLI is installed and authenticated
if command -v gh &> /dev/null; then
    if gh auth status &> /dev/null; then
        echo "✅ GitHub CLI is authenticated"
    else
        echo "⚠️  GitHub CLI found but not authenticated"
        echo "🔐 Authenticating with GitHub CLI..."
        gh auth login
    fi
else
    echo "⚠️  GitHub CLI not found"
    echo ""
    echo "📦 To install GitHub CLI, run one of these:"
    echo ""
    echo "Option 1 - Using Homebrew (recommended):"
    echo "  brew install gh"
    echo "  gh auth login"
    echo ""
    echo "Option 2 - Manual download:"
    echo "  Visit: https://cli.github.com/"
    echo "  Download and install the macOS version"
    echo "  Then run: gh auth login"
    echo ""
    echo "Option 3 - Use Personal Access Token:"
    echo "  Get token at: https://github.com/settings/tokens"
    echo "  When git prompts for password, use the token"
    echo ""
    read -p "Press Enter to continue with git push (you'll be prompted for credentials)..."
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

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
    echo "❌ Push failed. Authentication required."
    echo ""
    echo "🔐 Authentication Options:"
    echo ""
    echo "Option 1 - Install GitHub CLI (easiest):"
    echo "  brew install gh"
    echo "  gh auth login"
    echo "  Then run this script again"
    echo ""
    echo "Option 2 - Use Personal Access Token:"
    echo "  1. Go to: https://github.com/settings/tokens"
    echo "  2. Click 'Generate new token' -> 'Generate new token (classic)'"
    echo "  3. Name it (e.g., 'website-push')"
    echo "  4. Select scope: 'repo' (full control)"
    echo "  5. Click 'Generate token'"
    echo "  6. Copy the token"
    echo "  7. Run: git push -u origin main"
    echo "  8. Username: ibukun-5"
    echo "  9. Password: paste your token"
    echo ""
fi




