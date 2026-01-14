#!/bin/bash

echo "🚀 Pushing your website to GitHub..."
echo ""

cd /Users/iodutayo.27/Documents/coding/website1

# Push to GitHub
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
    echo "❌ Push failed. You may need to authenticate."
    echo ""
    echo "When prompted:"
    echo "  Username: ibukun-5"
    echo "  Password: Use a Personal Access Token (not your GitHub password)"
    echo ""
    echo "Get a token at: https://github.com/settings/tokens"
fi




