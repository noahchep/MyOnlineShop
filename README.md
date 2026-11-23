# Duka Online

A simple online shop built with React and Vite. Browse products, filter by category, search, and manage a shopping cart.

## Features

- Product grid with name, category, and price (KSh)
- Category filter: All, Electronics, Fashion, Home
- Search products by name
- Add to cart, change quantities, and remove items
- Cart total calculated automatically
- Slide-out cart panel with a "Place order" button (demo only, no real payment)
- Responsive layout for phones and desktops

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (JSX)
- Plain CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/online-shop.git

# Go into the project folder
cd online-shop

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The optimized files are created in the `dist` folder.

## Project Structure

```
src/
├── App.jsx                  # Main app: state, filters, cart logic
├── App.css                  # Styles
├── main.jsx                 # App entry point
├── components/
│   ├── ProductCard.jsx      # Single product card
│   └── Cart.jsx             # Slide-out shopping cart
└── data/
    └── products.js          # Product list and categories
```

## Adding Your Own Products

Edit `src/data/products.js` and add an item to the list:

```js
{ id: 10, name: "Product name", price: 1000, category: "Home", emoji: "🛒" }
```

If you add a new category, also add it to the `categories` array in the same file.

## Future Improvements

- Real product images
- Backend or API for products and orders
- User accounts and login
- M-Pesa payments (Daraja API)
- Save the cart between visits

## License

This project is open source and available under the [MIT License](LICENSE).
