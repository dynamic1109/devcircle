import { Mail, MapPin } from "lucide-react"
import { AnimatedSection } from "./scroll-animations"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Get In Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have questions or want to join our community? Reach out to us.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedSection animation="slide-in-left" delay={200}>
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-start hover-lift">
                <Mail className="h-10 w-10 text-indigo-600 mb-4 floating" />
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="mt-2 text-base text-gray-500">
                  For inquiries, partnership opportunities, or general information:
                </p>
                <a
                  href="mailto:info@devcircle.org.uk"
                  className="mt-3 text-indigo-600 hover:text-indigo-500 font-medium transition-all duration-300 ease-in-out hover:translate-x-1"
                >
                  info@devcircle.org.uk
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-start hover-lift">
                <MapPin className="h-10 w-10 text-indigo-600 mb-4 floating" />
                <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                <p className="mt-2 text-base text-gray-500">Our Impact Hub and Community Space is located at:</p>
                <address className="mt-3 not-italic text-gray-700">
                  244, Sundon Park Road,
                  <br />
                  (Newns Building), Luton LU3 3AL
                </address>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-10 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.278121564762!2d-0.4345889!3d51.9073333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487633a0c2c7b96d%3A0x47ebf57263df472e!2s244%20Sundon%20Park%20Rd%2C%20Luton%20LU3%203AL!5e0!3m2!1sen!2suk!4v1715856671234!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DevCircle Location"
                className="w-full"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
