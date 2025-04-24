import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase"; // ध्यान दो path सही होना चाहिए

const Cart = ({ cartItems = [], removeFromCart }) => {
  // 🔢 Total Calories Calculation
  const totalCalories = cartItems.reduce((total, item) => {
    return total + (item.caloriesPerServing || 0);
  }, 0);

  // 🔒 Save cart to Firebase
  const saveCartToFirebase = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("⚠️ Please login to save your cart!");
      return;
    }

    try {
      const cartRef = collection(db, "cart", user.uid, "items");

      for (const item of cartItems) {
        await addDoc(cartRef, {
          name: item.name,
          price: item.price,
          image: item.image,
          rating: item.rating,
          createdAt: new Date().toISOString(),
        });
      }

      alert("🛒 Cart saved to Firebase for this user! ✅");
    } catch (e) {
      console.error("🔥 Error saving user cart:", e);
      alert("❌ Error saving cart");
    }
  };

  // 🗑 Clear Cart
  const handleClearCart = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the cart?"
    );
    if (confirmClear) {
      removeFromCart("ALL");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-yellow-500 text-center text-blackish mb-8">
        Select Recipes <span className="text-red-600">History</span>
        <div className="flex justify-center mt-2">
          <span className="block w-24 h-1 bg-[#ef4444] rounded"></span>
        </div>
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">
          Your cart is empty 🛒
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    <span className="text-[#ef4444] font-bold">₹</span> :-{" "}
                    <span className="font-bold text-green-500">
                      {item.caloriesPerServing}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Total Calories Display */}
          <div className="text-center text-xl font-semibold text-black">
            Total Calories (₹):{" "}
            <span className="text-green-600">₹{totalCalories}</span>
          </div>

          {/* 🔘 Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex gap-4">
              <button
                onClick={saveCartToFirebase}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Save to Firebase
              </button>

              <button
                onClick={handleClearCart}
                className="bg-blackish text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
