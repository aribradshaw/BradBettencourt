# GitHub Actions FTP Deployment Setup

## Prerequisites
- Your code is pushed to the `https://github.com/aribradshaw/BradBettencourt.git` repository
- You have admin access to the repository

## Setup Steps

### 1. Add FTP Password as Repository Secret

1. Go to your GitHub repository: `https://github.com/aribradshaw/BradBettencourt`
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Set the following:
   - **Name**: `FTP_PASSWORD`
   - **Value**: `Vyuf6748!@`
6. Click **Add secret**

### 2. Push Your Code

After setting up the secret, push your code to the main branch:

```bash
git add .
git commit -m "Add GitHub Actions workflow for FTP deployment"
git push origin main
```

### 3. Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to Website" workflow running
3. The workflow will:
   - Install dependencies
   - Build your Vite project
   - Deploy the built files to your FTP server at `50.6.19.203`

## How It Works

- **Trigger**: Automatically runs on every push to the `main` branch
- **Build**: Uses Node.js 18 and npm to build your Vite project
- **Deploy**: Uploads the contents of the `dist/` folder to your FTP server
- **Exclusions**: Ignores source files, config files, and development dependencies

## Manual Deployment

You can also manually trigger the deployment:
1. Go to **Actions** tab
2. Click on **Deploy to Website** workflow
3. Click **Run workflow** button
4. Select the branch and click **Run workflow**

## Troubleshooting

- **FTP Connection Issues**: Verify your FTP credentials and server accessibility
- **Build Failures**: Check that all dependencies are properly installed
- **Permission Errors**: Ensure the FTP user has write access to the target directory

## Security Note

The FTP password is stored as a GitHub secret and is encrypted. Never commit passwords directly to your code.
