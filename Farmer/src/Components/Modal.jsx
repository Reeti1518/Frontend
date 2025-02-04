import React from "react";

function Modal({ isOpen, onClose, onPlaceOrder, address, setAddress }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>

        <label className="block mb-2">Address:</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label className="block mb-2">Payment Mode:</label>
        <p className="mb-4 font-semibold">Cash on Delivery (COD) only</p>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onPlaceOrder}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
