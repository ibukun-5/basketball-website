# GitHub Authentication Guide

You're getting this error because Git needs to authenticate with GitHub. Here are the easiest ways to fix it:

## Option 1: Install GitHub CLI (Recommended - Easiest)

1. **Install Homebrew** (if you don't have it):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install GitHub CLI**:
   ```bash
   brew install gh
   ```

3. **Authenticate**:
   ```bash
   gh auth login
   ```
   - Choose: GitHub.com
   - Choose: HTTPS
   - Authenticate Git: Yes
   - Login via: Web browser (easiest)

4. **Now push**:
   ```bash
   ./push-now.sh
   ```
   or
   ```bash
   git push -u origin main
   ```

## Option 2: Use Personal Access Token (No installation needed)

1. **Create a token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: `website-push`
   - Select scope: `repo` (check the box)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using the token**:
   ```bash
   git push -u origin main
   ```
   - Username: `ibukun-5`
   - Password: **paste your token** (not your GitHub password)

3. **Save credentials** (optional, so you don't have to enter it every time):
   ```bash
   git config --global credential.helper osxkeychain
   ```

## Option 3: Use SSH (More secure, but requires setup)

1. **Generate SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add to GitHub**:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the output and add it at: https://github.com/settings/keys

3. **Change remote to SSH**:
   ```bash
   git remote set-url origin git@github.com:ibukun-5/basketball-website.git
   ```

4. **Push**:
   ```bash
   git push -u origin main
   ```

---

## Quick Fix (Right Now)

The fastest way right now is **Option 2** (Personal Access Token). It takes about 2 minutes and doesn't require installing anything.

After you authenticate, you can push with:
```bash
./push-now.sh
```

