import { useState } from "react";
import { products, categories } from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [message, setMessage] = useState("");

  const visible = products.filter(
      (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(search.toLowerCase())
  );

  const count = cart.reduce((n, i) => n + i.qty, 0);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      return found
          ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
          : [...prev, { ...product, qty: 1 }];
    });
  }

  function changeQty(id, delta) {
    setCart((prev) =>
        prev
            .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
            .filter((i) => i.qty > 0)
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function checkout() {
    setCart([]);
    setCartOpen(false);
    setMessage("Order placed. Thank you for shopping with us!");
    setTimeout(() => setMessage(""), 4000);
  }

  return (
      <div className="app">
        <header className="top">
          <h1>Duka Online</h1>
          <input
              type="search"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
          />
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            Cart ({count})
          </button>
        </header>

        <nav className="filters" aria-label="Categories">
          {categories.map((c) => (
              <button
                  key={c}
                  className={c === category ? "chip active" : "chip"}
                  onClick={() => setCategory(c)}
              >
                {c}
              </button>
          ))}
        </nav>

        {message && <p className="toast" role="status">{message}</p>}

        <main className="grid">
          {visible.length === 0 ? (
              <p className="muted">No products match your search.</p>
          ) : (
              visible.map((p) => <ProductCard key={p.id} product={p} onAdd={addToCart} />)
          )}
        </main>

        {cartOpen && (
            <>
              <div className="overlay" onClick={() => setCartOpen(false)} />
              <Cart
                  items={cart}
                  onChange={changeQty}
                  onRemove={removeItem}
                  onClose={() => setCartOpen(false)}
                  onCheckout={checkout}
              />
            </>
        )}
      </div>
  );
}
