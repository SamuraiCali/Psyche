"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserManager from "@/lib/UserManager";

const quizQuestions = [
  {
    id: 1,
    question: "Do you prefer to work alone or in a team?",
    options: ["Alone", "Team"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Your boss says their job is on the line if a certain project isn't done by the end of the week. What do you do?",
    options: [
      "Keep working the same as usual",
      "Work extra late to get the project done by the deadline",
      "Try to recruit some help",
      "Take longer breaks",
    ],
    correctAnswer: 2,
  },
  // Add other questions here as before...
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(quizQuestions.length).fill(-1)
  );
  const router = useRouter();

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score (for simplicity, we'll use the number of questions answered)
      const score =
        (answers.filter((a) => a !== -1).length / quizQuestions.length) * 100;
      UserManager.getInstance().addScore("Personality Test", score);
      router.push("/scores");
    }
  };

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Personality Test</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h2>
          <p className="mb-4 text-gray-700">{question.question}</p>
          <RadioGroup
            value={answers[currentQuestion].toString()}
            onValueChange={(value) => handleAnswer(parseInt(value))}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="text-blue-600"
                />
                <Label htmlFor={`option-${index}`} className="text-gray-700">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="p-4 bg-blue-50 rounded-b-lg">
          <Button
            onClick={handleNext}
            disabled={answers[currentQuestion] === -1}
            className="bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors py-2 px-6 rounded-lg"
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
