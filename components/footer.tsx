import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">DevCircle</span>
            </div>
            <p className="mt-4 text-base text-gray-300">
              Empowering individuals to reach their full potential by fostering a supportive and inclusive ecosystem.
            </p>
            <div className="mt-6 flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-125"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-125"
              >
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-125"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-125"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-base text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="text-base text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Our Activities
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-base text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-base text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">
                244, Sundon Park Road,
                <br />
                (Newns Building), Luton LU3 3AL
              </li>
              <li>
                <a
                  href="mailto:info@devcircle.org.uk"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  info@devcircle.org.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} My Development Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
