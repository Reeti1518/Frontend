import React, { useEffect, useState } from "react";
import { getCart, removeCartItem } from "../Helpers/CartHelpers";
import { GET, POST } from "../Helpers/Api";
import Modal from "../Components/Modal";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const cartItems = getCart();
      const fetchedProducts = [];
      for (const id of cartItems) {
        try {
          const data = await GET("product/" + id);
          fetchedProducts.push(data.product);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      setItems(fetchedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleRemove = (id) => {
    removeCartItem(id);
    setItems(items.filter(item => item._id !== id));
  };

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }

    setPlacingOrder(true);
    try {
      await POST("order/new", { address, items });
      alert("Your order has been placed successfully!");
      setModalOpen(false);
      setItems([]);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = 40;
  const overallCharge = 2;
  const finalPrice = totalPrice + deliveryCharge + overallCharge;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item._id} className="flex items-center border-b border-gray-200 py-4">
              <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800 font-bold">₹{item.price}</p>
              </div>
              <button onClick={() => handleRemove(item._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-lg font-semibold">Subtotal: ₹{totalPrice}</p>
            <p className="text-lg">Delivery Charges: ₹{deliveryCharge}</p>
            <p className="text-lg">Overall Charges: ₹{overallCharge}</p>
            <p className="text-xl font-bold">Total: ₹{finalPrice}</p>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      
      {/* Modal Component */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onPlaceOrder={handlePlaceOrder} 
        address={address} 
        setAddress={setAddress} 
        placingOrder={placingOrder}
      />
    </div>
  );
}

export default Cart;