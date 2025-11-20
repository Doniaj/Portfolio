'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Footer: React.FC = () => {
  return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand & About */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                DONIA JLIDI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Software Engineer • Full Stack Developer graduating in 2025 from ESPRIT.<br />
                Passionate about building modern, performant, and secure web applications with React.js, Next.js, Laravel, Node.js and more.
              </p>

              <div className="flex space-x-6">
                <a
                    href="https://github.com/DoniaJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com/in/Donia-Jlidi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Get In Touch</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a href="mailto:jlidi.doniaa@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    jlidi.doniaa@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>(+216) 52 960 082</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Tunis, Tunisia</span>
                </li>
              </ul>

              {/* Download CV Button */}
              <a
                  href="/DONIA_resume__eng.pdf"
                  download
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
              >
                Download CV (PDF)
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Donia Jlidi. Built with{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span> &{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer