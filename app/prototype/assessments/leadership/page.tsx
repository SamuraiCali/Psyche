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

const leadershipQuestions = [
  {
    id: 1,
    question: "How do you typically make decisions in a team setting?",
    options: [
      "I make the final decision after consulting with the team",
      "I delegate decision-making to team members",
      "I make decisions independently based on my expertise",
      "I facilitate group discussions to reach a consensus",
    ],
  },
  {
    id: 2,
    question: "How do you handle conflicts within your team?",
    options: [
      "I mediate between conflicting parties to find a solution",
      "I encourage team members to resolve conflicts on their own",
      "I make a decision to resolve the conflict quickly",
      "I bring in a third party to help resolve the conflict",
    ],
  },
  {
    id: 3,
    question: "How do you motivate your team members?",
    options: [
      "I provide regular feedback and recognition",
      "I give team members autonomy and trust them to do their best",
      "I set clear goals and expectations",
      "I create a positive and collaborative work environment",
    ],
  },
  // Add more questions as needed
];

const leadershipStyles = [
  {
    style: "Democratic Leader",
    description:
      "You involve team members in decision-making and value their input.",
  },
  {
    style: "Delegative Leader",
    description:
      "You trust your team members and give them autonomy to make decisions.",
  },
  {
    style: "Autocratic Leader",
    description:
      "You make decisions independently based on your expertise and vision.",
  },
  {
    style: "Transformational Leader",
    description:
      "You inspire and motivate your team to achieve high performance and growth.",
  },
];

export default function LeadershipAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(leadershipQuestions.length).fill(-1)
  );
  const [outcome, setOutcome] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < leadershipQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateOutcome(answers);
      setOutcome(result);
      UserManager.getInstance().addScore("Leadership Assessment", 100);
    }
  };

  const calculateOutcome = (answers: number[]): string => {
    const styleCounts = [0, 0, 0, 0];
    answers.forEach((answer) => {
      styleCounts[answer]++;
    });
    const maxCount = Math.max(...styleCounts);
    const dominantStyleIndex = styleCounts.indexOf(maxCount);
    return leadershipStyles[dominantStyleIndex].style;
  };

  const question = leadershipQuestions[currentQuestion];

  if (outcome) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
          <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-bold">
              Leadership Assessment Result
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">
              Your Leadership Style: {outcome}
            </h2>
            <p className="text-gray-700 mb-4">
              {
                leadershipStyles.find((style) => style.style === outcome)
                  ?.description
              }
            </p>
            <Button onClick={() => router.push("/scores")} className="w-full">
              View All Scores
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">
            Leadership Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Question {currentQuestion + 1} of {leadershipQuestions.length}
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
            className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors py-2 px-6 rounded-lg"
          >
            {currentQuestion === leadershipQuestions.length - 1
              ? "Finish Assessment"
              : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
