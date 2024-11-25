import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      {/* Light gray background for the page */}
      <header className="bg-blue-600 text-white py-6">
        {" "}
        {/* Blue header with white text */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Explore Psyche</h1>
          <p className="mt-2">Realize your potential, find where you excel</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Featured Assessments
          </h2>{" "}
          {/* Blue color for the section header */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAssessments.map((assessment) => (
              <div
                key={assessment.id}
                className="border border-blue-300 rounded-lg p-4 bg-white shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {assessment.title}
                </h3>
                <p className="mb-4 text-gray-700">{assessment.description}</p>
                <Link
                  href={`/assessment_sketch`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Take Assessment
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Why Choose Psyche?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-blue-300 rounded-lg p-4 bg-white shadow-md"
              >
                <feature.icon className="w-10 h-10 mb-2 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
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
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border border-blue-300 bg-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
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
    title: "Personality Test 1",
    description: "Take a test to find your strongest traits as an individual",
  },
  {
    id: 2,
    title: "Personality Test 3",
    description: "Take a test to find your strongest traits as an individual",
  },
  {
    id: 3,
    title: "Personality Test 3",
    description: "Take a test to find your strongest traits as an individual",
  },
];

const features = [
  {
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
  },
  {
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
  },
  {
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
  },
];
