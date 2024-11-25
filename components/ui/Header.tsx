import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Explore Psyche</h1>
            <p className="mt-2">Realize your potential, find where you excel</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://github.com/SamuraiCali/psyche/blob/acef344b5535a4d89e8f780a35365757423e2932/app/prototype/page.tsx"
                  className="hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/SamuraiCali/psyche/blob/eb03075028642b278df3bec72d2b7cf5de353c1b/app/prototype/login/page.tsx"
                  className="hover:underline"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/SamuraiCali/psyche/blob/a3ddca514afda5d5b5ca7c6dc169e8d161120476/app/prototype/user/page.tsx"
                  className="hover:underline"
                >
                  User Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/SamuraiCali/psyche/blob/a3ddca514afda5d5b5ca7c6dc169e8d161120476/app/prototype/scores/page.tsx"
                  className="hover:underline"
                >
                  Your Scores
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
