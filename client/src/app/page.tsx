import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import Link from 'next/link'

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "Chatbot-Based Appointment Scheduling System (PFE)",
      description: "Intelligent automated appointment scheduling system via phone calls using a voice chatbot. Features real-time calendar integration, admin dashboards, instant confirmations, conflict management, notifications, and waitlist handling.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Flask", "STT/TTS", "Socket.io", "Docker", "CI/CD"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      image: "/images/pfe-chatbot.jpg"
    },
    {
      title: "GreenLink – Urban Garden Management Platform",
      description: "Laravel platform for managing shared/private urban gardens with plant recommendation, gardener/admin dashboards, and garden-type filtering.",
      technologies: ["Laravel", "MySQL", "Blade", "RESTful API"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      image: "/images/greenlink.jpg"
    },
    {
      title: "El Kindy – Educational Platform (MERN Stack)",
      description: "Full educational platform for course & attendance management with real-time features, automated notifications, and Dockerized deployment.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Docker"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      image: "/images/elkindy.jpg"
    }
  ]

  const skills = [
    "React.js", "Next.js", "Angular", "TypeScript", "Node.js",
    "Laravel", "Spring Boot", "PHP", "Java", "Python",
    "MySQL", "MongoDB", "PostgreSQL", "RESTful API",
    "Tailwind CSS", "Bootstrap", "Git/GitHub", "Docker", "CI/CD", "Agile Scrum"
  ]

  return (
      <>
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Highlights from my Final Year Project and top academic/professional work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProjects.map((project, i) => (
                  <ProjectCard
                      key={i}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      featured={project.featured}
                      image={project.image}
                  />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                  href="/projects"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition transform hover:scale-105"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications & Achievements
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white">
                  <h3 className="text-xl font-bold">Winner – Dräxlmaier Hackathon</h3>
                  <p className="text-yellow-100 mt-1">2023 • Innovative Application</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Awarded for outstanding innovation and technical execution in a competitive hackathon.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                  <h3 className="text-xl font-bold">Blockchain & Hedera Ecosystem</h3>
                  <p className="text-blue-100 mt-1">Official Certification • 2025</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Certified in blockchain fundamentals and Hedera Hashgraph technology.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
                  <h3 className="text-xl font-bold">Sustainable Development Goals (UN)</h3>
                  <p className="text-green-100 mt-1">United Nations Certification • 2025</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Certified contributor to UN SDGs through technology and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Technologies I use every day to build modern web applications
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {skills.map((skill) => (
                  <span
                      key={skill}
                      className="px-5 py-3 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full font-medium text-sm border border-blue-200 dark:border-blue-800"
                  >
                {skill}
              </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Graduating in 2025 • Available for full-time opportunities in Full Stack Development
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                  href="mailto:jlidi.doniaa@gmail.com"
                  className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition text-lg"
              >
                Hire Me
              </a>
              <a
                  href="/DONIA_resume__eng.pdf"
                  download
                  className="px-10 py-4 bg-transparent border-2 border-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition text-lg"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </section>
      </>
  )
}

export default Home