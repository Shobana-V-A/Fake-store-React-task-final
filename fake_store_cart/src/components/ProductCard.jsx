const ProductCard = ({ product, addToCart, isAlreadyInCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow border">
      <div>
        {/* Product Image */}
        <div className="h-48 w-full mb-4 bg-white flex justify-center items-center p-2">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-full object-contain"
          />
        </div>

        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1">
          {product.title}
        </h2>

        {/* Product Description (Requirement) */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-3 h-12">
          {product.description}
        </p>

        {/* Product Price */}
        <p className="text-xl font-bold text-blue-700 mb-4">${product.price}</p>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => addToCart(product)}
        className={`w-full py-2 rounded font-medium transition-colors text-white ${isAlreadyInCart
          ? "bg-red-500 hover:bg-red-600"
          : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;