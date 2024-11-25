import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "../components/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "comprehensive-assessments",
    title: "Comprehensive Assessments",
    description:
      "Our assessments cover several aspects of the human psyche, from little decisions, to personalities.",
    details:
      "At Psyche, we believe in providing a holistic view of your personality and potential. Our comprehensive assessments are designed to explore various facets of your psyche, including decision-making processes, emotional intelligence, cognitive abilities, and interpersonal skills. By covering such a wide range of aspects, we ensure that you gain deep insights into your strengths, areas for improvement, and hidden talents.",
  },
  {
    id: "real-world-scenarios",
    title: "Real-world Scenarios",
    description:
      "Find who you are when the cards are down. What do you do when people depend on you?",
    details:
      "Our assessments go beyond theoretical questions by incorporating real-world scenarios that challenge you to think on your feet. These situations are carefully crafted to simulate high-pressure environments, team dynamics, and complex decision-making processes. By engaging with these scenarios, you'll gain valuable insights into how you perform under stress, how you collaborate with others, and how you approach problem-solving in realistic contexts.",
  },
  {
    id: "online-convenience",
    title: "Online Convenience",
    description:
      "No need to travel for assessments. Complete them at your convenience.",
    details:
      "We understand that your time is valuable. That's why we've designed our platform to be accessible anytime, anywhere. Our online assessments can be taken from the comfort of your home, during your lunch break, or whenever suits you best. This flexibility ensures that you can focus on the assessments without the added stress of travel or scheduling conflicts. Plus, our platform is optimized for various devices, allowing you to seamlessly switch between your computer, tablet, or smartphone.",
  },
];

export default function FeaturePage({ params }: { params: { id: string } }) {
  const feature = features.find((f) => f.id === params.id);

  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="outline" className="mb-4">
            &larr; Back to Home
          </Button>
        </Link>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
            <p className="text-gray-600">{feature.details}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
