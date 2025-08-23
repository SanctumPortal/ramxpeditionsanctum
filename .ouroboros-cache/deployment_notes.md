
# Deployment Instructions

This document provides instructions for deploying the RAM Expedition Sanctum website.

## Recommended Method: Google Cloud Run

This method is recommended for a scalable and robust deployment.

### Prerequisites

*   [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed and configured.
*   [Docker](https://docs.docker.com/get-docker/) installed.
*   A Google Cloud project with the Cloud Run API enabled.

### Steps

1.  **Authenticate with Google Cloud:**

    Open your terminal and run the following command. This will open a browser window for you to log in to your Google Account.

    ```bash
    gcloud auth login
    ```

2.  **Configure gcloud CLI:**

    Set your project and region. Replace `sanctumportal` with your Google Cloud Project ID and `us-central1` with your preferred region.

    ```bash
    gcloud config set project sanctumportal
    gcloud config set run/region us-central1
    ```

3.  **Build the Docker Image:**

    In the project's root directory, build the Docker image:

    ```bash
    docker build -t ramxpeditionsanctum-website .
    ```

4.  **Deploy to Cloud Run:**

    Deploy the image to Google Cloud Run. This command will build and deploy the image.

    ```bash
    gcloud run deploy ramxpeditionsanctum-website --source . --allow-unauthenticated
    ```

    When prompted, confirm the service name and region. The `--allow-unauthenticated` flag makes the service publicly accessible.

5.  **Domain Configuration:**

    After deployment, Cloud Run will provide a URL to access the application. You can configure a custom domain in the Cloud Run console.

## Alternative Method: Vercel

This method is suitable for quick deployments and previews.

### Automatic Deploy via Git

1.  Fork this repository.
2.  Connect your Vercel account to your GitHub account.
3.  Import the project in Vercel.
4.  Configure the custom domain `ramxpedition.com.br`.

### Manual Deploy via Vercel CLI

1.  Install the Vercel CLI:
    ```bash
    npm i -g vercel
    ```

2.  Login:
    ```bash
    vercel login
    ```

3.  Deploy:
    ```bash
    vercel --prod
    ```

### Domain Configuration

1.  In the Vercel dashboard, go to **Settings > Domains**.
2.  Add `ramxpedition.com.br`.
3.  Configure the DNS in your provider:

    ```
    Type: A
    Name: @
    Value: 76.76.21.21

    Type: CNAME
    Name: www
    Value: cname.vercel-dns.com
    ```
