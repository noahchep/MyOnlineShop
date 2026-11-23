export default function Cart({ items, onChange, onRemove, onClose, onCheckout }) {
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <aside className="cart" aria-label="Shopping cart">
            <div className="cart-head">
                <h2>Your cart</h2>
                <button className="ghost" onClick={onClose}>Close</button>
            </div>

            {items.length === 0 ? (
                <p className="muted">Your cart is empty. Add something you like.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {items.map((i) => (
                            <li key={i.id}>
                                <span className="cart-emoji">{i.emoji}</span>
                                <div className="cart-info">
                                    <strong>{i.name}</strong>
                                    <span className="muted">KSh {i.price.toLocaleString()}</span>
                                    <div className="qty">
                                        <button onClick={() => onChange(i.id, -1)} aria-label="Decrease quantity">−</button>
                                        <span>{i.qty}</span>
                                        <button onClick={() => onChange(i.id, 1)} aria-label="Increase quantity">+</button>
                                        <button className="ghost" onClick={() => onRemove(i.id)}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <span>Total</span>
                        <strong>KSh {total.toLocaleString()}</strong>
                    </div>
                    <button className="checkout" onClick={onCheckout}>Place order</button>
                </>
            )}
        </aside>
    );
}