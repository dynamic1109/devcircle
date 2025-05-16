import { Briefcase, GraduationCap, Laptop, Wifi, MapPin, Users, Heart, BookOpen, Home, Network } from "lucide-react"
import { AnimatedSection } from "./scroll-animations"

export default function CoreActivities() {
  const activities = [
    {
      title: "Skills Acquisition & Career Advancement",
      description:
        "Targeted skills studies, training programs, and personalized coaching for talent development and job acquisition.",
      icon: GraduationCap,
    },
    {
      title: "Enhancing Employability",
      description:
        "Tailored programs that build essential workplace skills, provide career guidance, and connect individuals with opportunities.",
      icon: Briefcase,
    },
    {
      title: "Technology Enhanced Learning",
      description:
        "Accessible technology training designed for technical and non-technical individuals, demystifying complex concepts.",
      icon: Laptop,
    },
    {
      title: "Bridging the Digital Divide",
      description: "Ensuring digital inclusion for all generations with comprehensive support and training.",
      icon: Wifi,
    },
    {
      title: "Experiential Learning",
      description:
        "Immersive excursions, insightful tours, and impactful trips to relevant industries for practical knowledge.",
      icon: MapPin,
    },
    {
      title: "Community Engagement",
      description:
        "Hosting community events aimed at fostering meaningful connections and providing a platform for organizations.",
      icon: Users,
    },
    {
      title: "Empowering Underrepresented Communities",
      description: "Creating equitable opportunities and driving inclusivity for underrepresented communities.",
      icon: Heart,
    },
    {
      title: "Comprehensive Support Services",
      description: "Educational support, targeted training, personalized tutoring, mentoring, and effective coaching.",
      icon: BookOpen,
    },
    {
      title: "Impact Hub & Community Space",
      description: "Physical locations serving as vibrant community spaces for activities, workshops, and networking.",
      icon: Home,
    },
    {
      title: "Building Networks & Influence",
      description: "Fostering valuable connections through individual and ambassador networks with strategic guidance.",
      icon: Network,
    },
  ]

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Activities
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide a comprehensive range of services and activities to support our community.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={200 + index * 100} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover-lift">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-xl">
                        <activity.icon className="h-6 w-6 text-white floating" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{activity.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{activity.description}</p>
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
