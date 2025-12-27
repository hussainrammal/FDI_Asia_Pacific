# FDI Inflows Map - Asia Pacific

An interactive visualization of Foreign Direct Investment (FDI) inflows as a percentage of GDP for 20 Asia Pacific countries, powered by World Bank data.

## 📊 Features

- **Grid View**: Interactive card-based layout showing FDI data for all countries
- **Bar Chart View**: Comparative bar chart visualization
- **Key Insights**: Summary statistics highlighting top performers
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Beautiful transitions and hover effects
- **World Bank Data**: Accurate data from official sources (Indicator: BX.KLT.DINV.WD.GD.ZS)

## 🌍 Coverage

Includes 20 countries across:
- **Southeast Asia**: Vietnam, Cambodia, Myanmar, Laos, Indonesia, Malaysia, Thailand, Philippines, Singapore
- **South Asia**: India, Pakistan, Bangladesh, Sri Lanka
- **East Asia**: China, Hong Kong, Taiwan, South Korea, Japan, Mongolia
- **Oceania**: Australia

## 📈 Data

- **Source**: World Bank Open Data
- **Indicator**: Foreign Direct Investment, net inflows (% of GDP)
- **Years**: 2023-2024
- **Time Series**: 1970-2024

## 🚀 Quick Start

### Online (Deployed)
Visit: [Your Vercel URL will appear here after deployment]

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fdi-map-asia-pacific.git
   cd fdi-map-asia-pacific
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) automatically

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Technologies

- **React 18** - UI framework
- **Recharts** - Data visualization library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Project Structure

```
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.jsx            # Main visualization component
│   ├── index.jsx          # React entry point
│   └── index.css          # Styles
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md             # This file
```

## 🎯 Key Insights

| Metric | Value | Details |
|--------|-------|---------|
| **Highest FDI** | Singapore (21.3%) | Global financial center |
| **Strong Grower** | Vietnam (8.2%) | Manufacturing hub |
| **Regional Average** | 4.2% | Across all 20 countries |
| **Largest by GDP** | China (1.8%) | Despite high absolute FDI |

## 📝 Data Citation

```
International Financial Statistics and Balance of Payments databases, 
International Monetary Fund (IMF);
International Debt Statistics, World Bank (WB);
World Bank GDP estimates, World Bank (WB);
OECD GDP estimates, Organisation for Economic Co-operation and Development (OECD).
Indicator BX.KLT.DINV.WD.GD.ZS
World Development Indicators - World Bank (2025)
```

## 🔗 Resources

- [World Bank Data Portal](https://data.worldbank.org)
- [FDI Indicator](https://data.worldbank.org/indicator/BX.KLT.DINV.WD.GD.ZS)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two-column grid
- **Desktop**: Three-column grid with full interactive features

## 🎨 Customization

To modify the data, edit the `fdiData` array in `src/App.jsx`:

```javascript
const fdiData = [
  { country: 'Vietnam', fdi: 8.2, region: 'Southeast Asia', population: 98 },
  // ... more countries
];
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit issues and suggestions
- Fork and create pull requests
- Improve documentation
- Add new features or visualizations

## 👨‍💻 Author

Created with React and data from World Bank Open Data

---

Made with ❤️ for data visualization enthusiasts
