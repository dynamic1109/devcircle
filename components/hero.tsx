import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "./scroll-animations"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <AnimatedSection animation="fade-in">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">My Development</span>
                  <AnimatedSection animation="slide-in-right" delay={300}>
                    <span className="block text-indigo-600">Circle</span>
                  </AnimatedSection>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  Empowering individuals to reach their full potential by fostering a supportive and inclusive
                  ecosystem, generating a widespread network of positive societal impact.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={900}>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="#programs"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
                    >
                      Our Programs
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 border-indigo-100 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out hover:shadow hover:scale-105"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <AnimatedSection animation="fade-in" delay={300}>
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transition-all duration-700 hover:opacity-90"
            src="/placeholder.svg?height=600&width=800"
            alt="Development Circle Community"
            width={800}
            height={600}
            priority
          />
        </AnimatedSection>
      </div>
    </div>
  )
}
