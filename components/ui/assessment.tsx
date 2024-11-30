"use client";

import React, { useState } from "react";
import { useUser } from "@/lib/UserContext";

const Assessment: React.FC<{ testName: string }> = ({ testName }) => {
  const [score, setScore] = useState<number | null>(null);
  const { user, setUser } = useUser();

  const submitScore = () => {
    if (score !== null && user) {
      const updatedScores = {
        ...user.testScores,
        [testName]: score,
      };

      // Ensure the user object has a valid testScores field, even if it's not yet set
      setUser({
        ...user,
        testScores: updatedScores,
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{testName} Assessment</h1>
      <input
        type="number"
        placeholder="Enter your score"
        value={score || ""}
        onChange={(e) => setScore(Number(e.target.value))}
        className="border border-gray-300 px-4 py-2 mb-4"
      />
      <button
        onClick={submitScore}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Assessment;
