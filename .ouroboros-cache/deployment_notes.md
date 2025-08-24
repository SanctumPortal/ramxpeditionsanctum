# Deployment Instructions for ramxpeditionsanctum

This document outlines the steps to deploy the `ramxpeditionsanctum` project.

## Recommended Method: Google Cloud Run

This method is recommended for a scalable and robust deployment using the project's specific configuration.

### Prerequisites

*   [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed.
*   [Docker](https://docs.docker.com/get-docker/) installed and running.
*   You have authenticated with Google Cloud by running `gcloud auth login` in your terminal.
*   The Google Cloud project `sanctumportal` is created and the Cloud Run API is enabled.

### Steps

1.  **Configure gcloud CLI:**
    Set your project and region.

    ```bash
    gcloud config set project sanctumportal
    gcloud config set run/region us-central1
    ```

2.  **Build the Docker Image:**
    In the project's root directory, build the Docker image:

    ```bash
    docker build -t ramxpeditionsanctum-website .
    ```

3.  **Tag the Docker Image:**
    Tag the image for the Google Artifact Registry.

    ```bash
    docker tag ramxpeditionsanctum-website us-central1-docker.pkg.dev/sanctumportal/ramxpeditionsanctum/ramxpeditionsanctum-website
    ```

4.  **Configure Docker Authentication:**
    Authorize Docker to push to your project's Artifact Registry.

    ```bash
    gcloud auth configure-docker us-central1-docker.pkg.dev
    ```

5.  **Push the Docker Image:**
    Push the image to the Artifact Registry.

    ```bash
    docker push us-central1-docker.pkg.dev/sanctumportal/ramxpeditionsanctum/ramxpeditionsanctum-website
    ```

6.  **Deploy to Cloud Run:**
    Deploy the container from the registry to Cloud Run.

    ```bash
    gcloud run deploy ramxpeditionsanctum-website \
      --image=us-central1-docker.pkg.dev/sanctumportal/ramxpeditionsanctum/ramxpeditionsanctum-website \
      --platform=managed \
      --region=us-central1 \
      --allow-unauthenticated
    ```

After deployment, Cloud Run will provide a public URL to access the application.

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