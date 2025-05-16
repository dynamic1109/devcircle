import { AnimatedSection } from "./scroll-animations"

export default function Programs() {
  const programs = [
    "AI Training for Non-Technical professional",
    "Modern Skills Development & Employability Training",
    "Career Upgrade Coaching for Low Income Earners",
    "Social Media for Individual Brand",
    "Building your first Gen AI Application",
    "Helping older people to adopt new technology",
    "Industry Excursion for Inspiration and Exposure",
    "Preparing for the New World for Young people",
    "Best Use of Social Media and Social Influence for Good",
    "Leveraging Technology for Good in Offline Communities",
    "Job Placement Fair",
    "Community and Networking Meetups",
    "Personal Branding and communications",
    "Pioneer Innovation and Impact Marketing Sessions",
    "Ambassador Onboarding",
  ]

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Looking Ahead</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our 2025 Programs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join us for these upcoming programs designed to empower and support our community.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {programs.map((program, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={100 + index * 50}>
                <div className="relative rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-indigo-400 hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out group-hover:bg-indigo-700">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{program}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
