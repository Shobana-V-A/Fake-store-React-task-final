import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ products, cart, addToCart }) => {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Products
            </h1>

            {/* Safety check: If products are still fetching, show a loading message */}
            {products && products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            // This prop tells the card whether to show "Add" or "Remove"
                            isAlreadyInCart={cart.some((item) => item.id === product.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl text-gray-500 animate-pulse">
                        Loading products from Fake Store API...
                    </p>
                </div>
            )}
        </main>
    );
};

export default ProductList;