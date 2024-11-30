import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Featured Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAssessments.map((assessment) => (
              <Card key={assessment.id}>
                <CardHeader>
                  <CardTitle className="text-blue-600">
                    {assessment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue-600">{assessment.description}</p>
                  <Button asChild>
                    <Link href="@/app/assessment_sketch">Take Assessment</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Why Choose Psyche?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 mb-2 text-blue-600" />
                    <CardTitle className="text-blue-600">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{feature.description}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Start Your Journey Today
          </h2>
          <p className="mb-4 text-gray-700">
            Sign up for our newsletter to receive the latest assessments and
            tips on how to become a high-demand employee.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </section>
      </main>
      <footer className="bg-blue-50 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; 2024 Psyche. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const featuredAssessments = [
  {
    id: 1,
    title: "Workplace Personality Test",
    description: "Discover your unique personality traits and strengths",
  },
  {
    id: 2,
    title: "Neurodivergancy Test",
    description: "Understand how your brain works and how to leverage it",
  },
  {
    id: 3,
    title: "Leadership Style Assessment",
    description: "Uncover your leadership style and potential",
  },
];

const features = [
  {
    id: "comprehensive-assessments",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
    title: "Comprehensive Assessments",
    description:
      "Our assessments cover several aspects of the human psyche, from little decisions, to personalities.",
    details:
      "At Psyche, we believe in providing a holistic view of your personality and potential. Our comprehensive assessments explore various facets of your psyche, including decision-making processes, emotional intelligence, cognitive abilities, and interpersonal skills.",
  },
  {
    id: "real-world-scenarios",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    title: "Real-world Scenarios",
    description:
      "Find who you are when the cards are down. What do you do when people depend on you?",
    details:
      "Our assessments incorporate real-world scenarios that challenge you to think on your feet. These situations simulate high-pressure environments, team dynamics, and complex decision-making processes.",
  },
  {
    id: "online-convenience",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v3m0 0l2-2m-2 2l-2-2m3-7v4m0 0l2-2m-2 2l-2-2m-5 7V4m0 0L7 6m2-2L7 6M3 12h18"
        />
      </svg>
    ),
    title: "Online Convenience",
    description:
      "No need to travel for assessments. Complete them at your convenience.",
    details:
      "Our platform is accessible anytime, anywhere. Take assessments from the comfort of your home, during your lunch break, or whenever suits you best. Our platform is optimized for various devices, allowing seamless switching between computer, tablet, or smartphone.",
  },
];
