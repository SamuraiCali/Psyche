"use client";
import { useLocalStorage } from "@/lib/useLocalStorage";

export default function Scores() {
  const [results] = useLocalStorage("testResults", {});

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Your Scores</h1>
      <ul>
        <li>Leadership Test: {results.leadership || "Not Taken"}</li>
        <li>Neurodivergence Test: {results.neurodivergence || "Not Taken"}</li>
        <li>Workplace Personality Test: {results.workplace || "Not Taken"}</li>
      </ul>
    </div>
  );
}
