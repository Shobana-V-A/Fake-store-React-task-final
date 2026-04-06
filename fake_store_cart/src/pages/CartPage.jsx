import React from "react";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = subtotal * 0.10;
    const finalPrice = subtotal - discount;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Item List */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-blue-600 font-bold">${item.price}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end space-y-2">
                                    <div className="flex items-center border rounded">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-100 border-r">-</button>
                                        <span className="px-4 font-semibold">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-100 border-l">+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm font-semibold hover:underline">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price Summary */}
                    <div className="bg-white p-6 rounded-lg shadow h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-green-600">
                            <span>Discount (10%)</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total Price</span>
                            <span>${finalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white mt-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;