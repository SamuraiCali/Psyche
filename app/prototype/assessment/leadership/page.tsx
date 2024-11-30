// src/pages/Assessment.tsx
import React, { useState } from "react";
import { useUser } from "@/lib/UserContext";

const Assessment: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const { user, setUser } = useUser();

  const submitScore = () => {
    if (score !== null && user) {
      const updatedScores = [...user.testScores, score];
      setUser({ ...user, testScores: updatedScores });
    }
  };

  return (
    <div>
      <h1>Assessment</h1>
      <input
        type="number"
        placeholder="Enter your score"
        value={score || ""}
        onChange={(e) => setScore(Number(e.target.value))}
      />
      <button onClick={submitScore}>Submit</button>
    </div>
  );
};

export default Assessment;
