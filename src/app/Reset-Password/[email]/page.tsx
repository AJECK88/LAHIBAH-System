 "use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image"; 
const RestPasswordPage = () => {
  const params = useParams();
  const email = params.email;
  const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setFeedback("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const result = await response.json();
       console.log( "Reset password result:", result)

      if (result.success) {
        setFeedback(result.message);
        setSuccessMessage(true);
         window.location.href = "/sign-in"; // Redirect to login page after successful password reset
      
      } else {
        setFeedback(result.message);
    
       

      }
    } catch (error) {
        setFeedback("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
     
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
         <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <h2 className="text-gray-700 mb-4">The password should be at least 8 characters long.</h2>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-bold">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            minLength={8}
            placeholder="Enter password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 font-semibold"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-bold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            minLength={8}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 font-semibold"
            required
          />
        </div>
        {feedback && <p className={successMessage ? "text-green-500 mb-4" : "text-red-500 mb-4"}>{feedback}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Reset Password</button>
      </form>
    </div>
  );
};

export default RestPasswordPage;    