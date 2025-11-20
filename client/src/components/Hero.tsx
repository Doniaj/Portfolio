import Link from 'next/link'

const Hero: React.FC = () => {
  return (
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              DONIA JLIDI
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">
              FULLSTACK DEVELOPER & EMBEDDED SYSTEMS ENGINEER
            </h2>

            {/* Main Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 transition-colors duration-300">
              Fullstack Developer with hands-on experience in web development, AI, and embedded systems.
              Skilled in React, Node.js, Python, NLP, MERN architecture, and Java Spring. Passionate about
              building scalable applications, intelligent systems, and modern digital solutions.
            </p>

            {/* Secondary Description */}
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-colors duration-300">
              Detail-oriented engineer combining software development, data processing, and system design
              to deliver real-world, high-impact solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  href="/projects"
                  className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View My Work
              </Link>

              <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Hero
