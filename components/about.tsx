import { AnimatedSection } from "./scroll-animations"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              My Development Circle empowers individuals to reach their full potential by influencing and cultivating
              ambassadors with organisations who foster a supportive and inclusive ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto lg:max-w-none">
            <AnimatedSection animation="fade-up" delay={300}>
              <p>
                By leveraging technology for good and harnessing the power of community for peer support, alongside
                providing education and expert guidance, we unlock individual capacity and drive collective progress,
                ultimately creating a powerful network effect of education and opportunity.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={600}>
              <p className="mt-4">
                At My Development Circle, our guiding principle is that everyone deserves a chance to thrive in a
                supportive and inclusive ecosystem. We are driven by a commitment to loyalty, social influence for the
                good of all, and empowering individuals through knowledge, skills, and opportunities in job placement
                and entrepreneurship.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
