import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Psyche</h1>
      <p className="text-xl text-center mb-8">
        Explore our UX design process through Personas, Scenarios, Storyboards,
        Moodboards, and Flowcharts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/persona"
          className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Persona</h2>
          <p className="text-black">
            Discover the user personas we've created for this project.
          </p>
        </Link>
        <Link
          href="/scenario"
          className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Scenario</h2>
          <p className="text-black">
            Explore the scenarios we've developed for our users.
          </p>
        </Link>
        <Link
          href="/storyboard"
          className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Storyboard</h2>
          <p className="text-black">
            View our storyboards that illustrate user journeys.
          </p>
        </Link>
        <Link
          href="/moodboard"
          className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Moodboard</h2>
          <p className="text-black">
            See the visual inspiration behind our design choices.
          </p>
        </Link>
        <Link
          href="/flowchart"
          className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Flowchart</h2>
          <p className="text-black">
            See our flowchart that illustrates the user journey.
          </p>
        </Link>
        <Link
          href="/homepage_sketch"
          className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">
            Website Sketch
          </h2>
          <p className="text-black">
            View an interactive sketch of how the final site might look and feel
          </p>
        </Link>
        <Link
          href="/prototype"
          className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-black">Prototype</h2>
          <p className="text-black">
            View an interactive prototype of how the final site might look and
            feel
          </p>
        </Link>
      </div>
    </div>
  );
}
