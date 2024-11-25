import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "../components/Header";

export default function ScoresPage() {
  // In a real application, you would fetch this data from an API
  const scores = [
    { id: 1, testName: "Personality Test 1", score: 85, date: "2024-03-15" },
    { id: 2, testName: "Personality Test 2", score: 92, date: "2024-03-20" },
    { id: 3, testName: "Personality Test 3", score: 78, date: "2024-03-25" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Scores</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scores.map((score) => (
            <Card key={score.id}>
              <CardHeader>
                <CardTitle>{score.testName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">
                  {score.score}%
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Taken on: {score.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
