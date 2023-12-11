# Pay That Bill IPFS Proxy

## Overview

This proxy is a specialized tool designed to support the "Pay That Bill" payment solution, however it may have some more general use-cases. It acts as a secure proxy for frontend applications, including those using "Pay That Bill" Bubble plugin, to store data on the InterPlanetary File System (IPFS) securely. This proxy ensures that sensitive credentials required for IPFS interactions (Pinata's JWT key) are not exposed in the frontend, maintaining security and integrity.

## Features

- **Secure Data Storage**: Facilitates the secure storage of data on IPFS, shielding sensitive credentials from public exposure.
- **Digital Ocean Deployment**: Has Dockerfile for seamless Digital Ocean App deploy.

## Getting Started

### Prerequisites

- Node.js (version X.X or higher)
- npm (version X.X or higher)
- Access to Pinata's gateway credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KStasi/pay-that-bill-ipfs-proxy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pay-that-bill-ipfs-proxy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Using Docker

### Building the Docker Image

To build the Docker image for the solution, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/KStasi/pay-that-bill-ipfs-proxy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pay-that-bill-ipfs-proxy
   ```
3. Build the Docker image:

   ```bash
   docker build -t pay-that-bill-ipfs-proxy .

   ```

### Running the Docker Container

After building the image, you can run the container using:

```bash
docker run -d --name pay-that-bill-ipfs-proxy -p [PORT]:[PORT] pay-that-bill-ipfs-proxy
```

Replace `[PORT]` with the appropriate port number you wish to use for the application.

## License

This project is licensed under the MIT License. See the `LICENSE` file in the repository for more information.
