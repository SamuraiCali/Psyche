"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/Header";
import UserManager from "@/lib/UserManager";

export default function ScoresPage() {
  const [user, setUser] = useState(UserManager.getInstance().getCurrentUser());
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Your Scores
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {user.scores.map((score) => (
            <Card key={score.id}>
              <CardHeader>
                <CardTitle className="text-gray-900">
                  {score.testName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">
                  {score.score.toFixed(2)}%
                </p>
                <p className="text-sm text-gray-700 mt-2">
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
