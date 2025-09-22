import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, User, Calendar, DollarSign } from "lucide-react";

const PayRent = () => {
  const [amount, setAmount] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handlePayment = () => {
    if (!amount || !tenantName || !dueDate) {
      alert("Please fill all details!");
      return;
    }
    alert(`Payment of ₹${amount} for ${tenantName} is successful!`);
    setAmount("");
    setTenantName("");
    setDueDate("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Pay Rent
        </h2>

        {/* Tenant Name */}
        <div className="flex items-center mb-4 border border-gray-200 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
          <User className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Tenant Name"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Amount */}
        <div className="flex items-center mb-4 border border-gray-200 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
          <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Due Date */}
        <div className="flex items-center mb-6 border border-gray-200 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Calendar className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Pay Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Pay Now
        </motion.button>

        {/* Card/Payment Method Info */}
        <div className="mt-6 text-gray-500 text-xs text-center">
          <CreditCard className="inline w-4 h-4 mr-1" /> Secure payment powered
          by XYZ Payment Gateway
        </div>
      </motion.div>
    </div>
  );
};

export default PayRent;
