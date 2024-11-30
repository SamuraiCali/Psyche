"use client";

import { useUser } from "@/lib/UserContext";

export default function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <h2 className="text-xl font-bold mt-4">Test Scores</h2>
      <ul>
        <li>
          <strong>Leadership:</strong>{" "}
          {user.testScores.leadership ?? "Not taken"}
        </li>
        <li>
          <strong>Neurodivergence:</strong>{" "}
          {user.testScores.neurodivergence ?? "Not taken"}
        </li>
        <li>
          <strong>Workplace Personality:</strong>{" "}
          {user.testScores.workplacePersonality ?? "Not taken"}
        </li>
      </ul>
    </div>
  );
}
