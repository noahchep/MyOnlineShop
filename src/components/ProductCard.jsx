export default function ProductCard({ product, onAdd }) {
    return (
        <article className="card">
            <div className="card-img" aria-hidden="true">{product.emoji}</div>
            <h3>{product.name}</h3>
            <p className="muted">{product.category}</p>
            <div className="card-foot">
                <strong>KSh {product.price.toLocaleString()}</strong>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </article>
    );
}