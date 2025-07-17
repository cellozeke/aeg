import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const COLOR_OPTIONS = [
  "White",
  "Black",
  "Blue",
  "Red",
  "Green",
  "Yellow",
  "Gray",
  "Brown",
];

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const isClothing =
    product.category === "men's clothing" || product.category === "women's clothing";
  const isJewelry = product.category === "jewelery";

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link" tabIndex={-1}>
        <div className="product-card-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-card-image"
          />
        </div>
      </Link>
      <div className="product-card-body">
        <Link to={`/product/${product.id}`} className="product-card-link-title">
          <h5 className="product-card-title">{product.title}</h5>
        </Link>
        <div className="product-card-spacer" />
        <div className="product-card-bottom">
          <div className="product-card-price">
            ${product.price.toFixed(2)}
          </div>
          <div className="product-card-spacer" />
          <div className="product-card-actions-row">
            {isClothing && (
              <select
                className="product-card-color-select"
                value={selectedColor}
                onChange={e => setSelectedColor(e.target.value)}
              >
                {COLOR_OPTIONS.map(color => (
                  <option value={color} key={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}
            {isJewelry ? (
              <span className="product-card-outofstock-text">Out of Stock</span>
            ) : (
              <button className="product-card-btn" onClick={onAddToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .product-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem 1rem 1rem;
          margin: 0.5rem;
          min-width: 220px;
          max-width: 340px;
          width: 100%;
          height: 100%;
        }
        .product-card:hover {
          transform: scale(1.04) translateY(-6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.16);
        }
        .product-card-link {
          display: block;
          width: 100%;
          text-decoration: none;
          outline: none;
        }
        .product-card-image-wrapper {
          width: 100%;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 12px;
          position: relative;
        }
        .product-card-image {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          transition: transform 0.2s;
        }
        .product-card-link-title {
          text-decoration: none;
          color: inherit;
          width: 100%;
          display: block;
        }
        .product-card-link-title:focus .product-card-title,
        .product-card-link-title:hover .product-card-title {
          text-decoration: underline;
        }
        .product-card-body {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          width: 100%;
          align-items: center;
          min-height: 180px;
        }
        .product-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 1rem 0 0.1rem 0;
          text-align: center;
          color: #222;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 2.8em;
          min-height: 2.5em;
        }
        .product-card-spacer {
          flex: 0 0 8px;
          width: 100%;
          min-height: 0;
          height: 8px;
        }
        .product-card-bottom {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .product-card-actions-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
          justify-content: center;
        }
        .product-card-color-select {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          border: 1px solid #bbb;
          font-size: 1rem;
          background: #fafafa;
          color: #222;
          outline: none;
          transition: border 0.2s;
          height: 40px;
          min-width: 110px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }
        .product-card-color-select:focus {
          border: 1.5px solid #888;
        }
        .product-card-outofstock-text {
          color: #e53935;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          padding: 0;
          box-shadow: none;
          display: inline-block;
          margin-top: 0.25rem;
        }
        .product-card-price {
          font-size: 1.2rem;
          font-weight: 400;
          color: #444;
          margin-bottom: 0.1rem;
          text-align: center;
        }
        .product-card-btn {
          background: #222;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1.25rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          height: 40px;
          display: flex;
          align-items: center;
        }
        .product-card-btn:hover {
          background: #444;
          box-shadow: 0 4px 16px rgba(0,0,0,0.16);
        }
        @media (max-width: 600px) {
          .product-card {
            min-width: 160px;
            max-width: 100%;
            padding: 1rem 0.5rem;
          }
          .product-card-title {
            font-size: 1rem;
          }
          .product-card-price {
            font-size: 1rem;
          }
          .product-card-actions-row {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard; 