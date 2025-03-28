# Docusaurus Setup Guide

This guide provides step-by-step instructions to set up and deploy a Docusaurus-based documentation site.

## Prerequisites
Ensure you have the following installed:
```sh
# Install Node.js and npm from NodeSource
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt update && sudo apt install -y nodejs

# Install Git
sudo apt install -y git

# Install rsync for deployment
sudo apt install -y rsync
```
A web server (e.g., Apache, Nginx) is also required for hosting the documentation. You can install Apache using:
```sh
sudo apt update && sudo apt install -y apache2
```

## Setup Steps

### 1. Clone the Documentation Repository
```sh
mv docs/ test_docs  # Backup existing docs folder

git clone https://github.com/SafeSquid-Github/docs.git  # Clone the repository
ls -rlt  # Verify the contents
cd docs/  # Navigate to the docs directory
```

### 2. Prepare the Documentation Directory
```sh
mv docs docs_  # Rename existing docs folder
mkdir docs  # Create a new docs folder
```

### 3. Install Dependencies and Build the Site
```sh
npm install  # Install required dependencies
npm run build  # Build the static site
```

### 4. Serve the Documentation Locally
```sh
npm run serve  # Start the local server
```
By default, the local server listens on `http://localhost:3000`. You can access it by opening a browser and navigating to this address.

### 5. Deploy the Documentation (Requires a Web Server)
If you have installed a web server such as Apache, you can deploy the documentation by following these steps:
To deploy the documentation to a web server:
```sh
cd /var/www/html/  # Navigate to the web server root directory
rsync -av --delete /opt/docs/build/ /var/www/html/  # Sync the built documentation to the server
```

### 6. Verify Deployment
```sh
ip a  # Get the server's IP address
```
Open a web browser and navigate to `http://<server-ip>` to verify the documentation site is live.

## Additional Commands
- **Rebuild and deploy**
  ```sh
  npm run build && rsync -av --delete /opt/docs/build/ /var/www/html/
  ```
- **Check Git status**
  ```sh
  git status  # View repository changes
  ```
- **View system performance**
  ```sh
  top  # Monitor resource usage
  ```

## Troubleshooting
- If `npm run serve` fails, try reinstalling dependencies:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  npm run build
  npm run serve
  ```
- If the site doesn't update after deployment, check file permissions and ensure the web server has read access to `/var/www/html/`.

## Conclusion
Following these steps, you should have a fully functioning Docusaurus documentation site running locally and deployed on your server. Happy documenting!

