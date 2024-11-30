"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      // Set user in context
      setUser({ username, isAuthenticated: true, testScores: {} });
      // Redirect to the User Profile page
      router.push("/prototype/user");
    } else {
      alert("Please enter your credentials.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
}
