"use client";
import { useLocalStorage } from "@/lib/useLocalStorage";

export default function UserProfile() {
  const [user, setUser] = useLocalStorage("user", { username: "" });

  const handleUpdate = () => {
    setUser({ ...user, username: "UpdatedUser" });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">User Profile</h1>
      <p>Username: {user.username}</p>
      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Update Profile
      </button>
    </div>
  );
}
