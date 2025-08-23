# RAM Expedition Sanctum

Official website for the RAM Expedition Sanctum journey to COP30 2025.

## 🌿 About the Project

The RAM Expedition Sanctum is a strategic partnership between RAM, Stellantis, and AIONDJ to demonstrate that sustainability and performance can coexist, creating a measurable positive impact on Amazon communities and the global environment.

This project is idealized and realized by **AIONDJ**.

## 🚀 Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Blockchain**: Web3.js, Polygon Network
- **Deployment**: Vercel
- **Automation**: Gulp

## 🛠️ Getting Started

### Prerequisites

- Node.js
- Git
- A modern browser with ES6+ support

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ramxpedition/sanctum-site.git
   cd sanctum-site
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   ```

4. Access `http://localhost:8000` in your browser.

For detailed deployment instructions, see [DEPLOY_INSTRUCTIONS.md](DEPLOY_INSTRUCTIONS.md).

## 🔗 Blockchain Integration

The site integrates with smart contracts on the Polygon network to display real-time ESG metrics:

- **Stellantis ESG Contract**: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e` (Testnet)
- **RAM NFT Contract**: `0xdA10bEa1100A109dD0A04A25a3B844Bc454e4438` (Testnet)

### Web3 Configuration

For full blockchain functionality:

1. Install MetaMask or another Web3 provider.
2. Connect to the Polygon network.
3. ESG data will be loaded automatically.

## 📈 Progress

### August 23, 2025

- Corrected the contact email address in `index.html` and `README.md` to `contato@ramxpeditionsanctum.com.br`.
- Fixed a technical issue in `js/app.js` by replacing the `ethers.js` library with `web3.js` to match the project's dependencies.
- Marked placeholder contract addresses and API endpoints in `js/app.js` with `// FIXME:` comments for future updates.
- Removed the broken service worker registration from `js/app.js`.
- Corrected the LinkedIn social media link in `index.html` and `README.md`.
- Added a `FIXME` comment in `index.html` to remind the user to verify the social media links.
- Updated the `formspree` link in `index.html` with the correct ID.
- Created `terms.html` and `privacy.html` with placeholder content and linked them in the footer of `index.html`.

## 🤝 Contribution

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📞 Contact

- **Email**: contato@ramxpeditionsanctum.com.br
- **Instagram**: [@ramxpeditionsanctum](https://instagram.com/ramxpeditionsanctum)
- **Twitter**: [@ram_sanctum](https://twitter.com/ram_sanctum)
- **LinkedIn**: [RAM Xpedition](https://linkedin.com/company/ramxpedition)