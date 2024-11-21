import Image from 'next/image'

export default function ScenarioPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">User Scenarios</h1>
      <div className="space-y-12">
        <ScenarioCard
          title="Emily's Self-Discovery Journey"
          persona="Emily Chen, 28, Marketing Manager"
          scenario={`
              Emily has been feeling overwhelmed at work lately and decides to use Psyche to gain a better understanding of her personality and stress management style. She completes a series of questionnaires on the platform, focusing on personality traits and stress response patterns.
  
              As Emily progresses through the assessments, she appreciates the user-friendly interface and insightful questions. After completing the tests, she receives a comprehensive report that highlights her key personality traits, potential stress triggers, and suggested coping strategies.
  
              Fascinated by the results, Emily uses Psyche's feature to create a shareable summary of her profile. She decides to discuss the insights with her manager during their next one-on-one meeting, hoping to collaboratively find ways to optimize her work environment and responsibilities based on her psychological profile.
            `}
          outcomes={[
            "Emily gains valuable self-awareness about her personality and stress management style",
            "She uses the insights to initiate a productive conversation with her manager",
            "Emily feels empowered to make positive changes in her work life, leading to improved job satisfaction and performance",
          ]}
          icons={[
            "/images/scenario_selfaware.webp",
            "/images/scenario_productiveconvo.webp",
            "/images/scenario_empowered.webp"
          ]}
        />
        <ScenarioCard
          title="Michael's Team Building Initiative"
          persona="Michael Johnson, 35, HR Specialist"
          scenario={`
              Michael is tasked with improving team dynamics in a department that has been experiencing conflicts and low productivity. He decides to use Psyche as a tool to better understand the team members' personalities and work styles.
  
              Michael sets up a company account on Psyche and invites all team members to take a series of assessments. He carefully explains the purpose of the exercise and assures everyone that the results will be used constructively to improve team collaboration.
  
              As the team completes their assessments, Michael uses Psyche's analytics dashboard to gain insights into the team's collective strengths, potential areas of conflict, and complementary skill sets. He's particularly impressed with the platform's ability to provide tailored team-building recommendations based on the aggregate psychological profiles.
  
              Armed with these insights, Michael designs a workshop that addresses the specific needs and dynamics of the team. He uses Psyche's resources to create activities that leverage the team's strengths and address potential areas of friction identified by the platform.
            `}
          outcomes={[
            "The team gains a better understanding of each other's working styles and personality traits",
            "Michael is able to address underlying issues contributing to team conflicts",
            "The department sees an improvement in collaboration and productivity",
            "The success of this initiative leads to the broader adoption of Psyche's tools across the company",
          ]}
          icons={[
            "/images/scenario_teamunderstanding.webp",
            "/images/scenario_addressconflicts.webp",
            "/images/scenario_collaboration.webp",
            "/images/scenario_successinitiative.webp"
          ]}
        />
      </div>
    </div>
  );
}

interface ScenarioCardProps {
  title: string;
  persona: string;
  scenario: string;
  outcomes: string[];
  icons: string[];
}

function ScenarioCard({
  title,
  persona,
  scenario,
  outcomes,
  icons
}: ScenarioCardProps) {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-black-600 mb-4">{persona}</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Scenario</h3>
            <p className="text-black-700 whitespace-pre-line">{scenario}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
            <div className="flex items-center mb-4 space-x-4 space-y-4">
              {icons.map((icons, index) => (
                <Image
                src={icons}
                width={96}
                height={96}
                alt={`${title}`}
                className='rounded-full'
              />
              ))}
            </div>
            <ul className="list-disc pl-5 space-y-1">
              {outcomes.map((outcome, index) => (
                <li key={index} className="text-white-700">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
