import { useRouter } from "next/router";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useLocalStorage("user", null);
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      setUser({ username });
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
