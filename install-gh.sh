#!/bin/bash
# Script to install GitHub CLI and authenticate

echo "Installing GitHub CLI..."

# Check if Homebrew is installed
if command -v brew &> /dev/null; then
    echo "Installing via Homebrew..."
    brew install gh
else
    echo "Homebrew not found. Please install GitHub CLI manually:"
    echo "1. Visit: https://cli.github.com/"
    echo "2. Download the macOS installer"
    echo "3. Or install Homebrew first: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo ""
    echo "After installing, run: gh auth login"
    exit 1
fi

echo ""
echo "GitHub CLI installed successfully!"
echo ""
echo "Now authenticating with GitHub..."
gh auth login

echo ""
echo "Setup complete! You can now push to GitHub."

