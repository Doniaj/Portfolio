'use client'

import { useState } from 'react'
import Image from 'next/image'
interface Skill {
  name: string
  level: number
}

interface SkillGroup {
  category: string
  technologies: Skill[]
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  duration: string
  skills: string[]
  certificateId: string
}

const About: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const skills: SkillGroup[] = [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Django", level: 75 },
        { name: "RESTful API", level: 90 },
        { name: "PHP", level: 85 }
      ]
    },
    {
      category: "Database & DevOps",
      technologies: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Git/GitHub", level: 90 }
      ]
    },
    {
      category: "Additional Skills",
      technologies: [
        { name: "Python", level: 75 },
        { name: "Java", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "UML", level: 80 },
        { name: "Flask", level: 70 },
        { name: "Symfony", level: 75 }
      ]
    }
  ]

  const experiences: Experience[] = [
    {
      title: "Full Stack Development Intern",
      company: "Rivezli.tn",
      period: "July 2024 - Sept. 2024",
      description: "Developed a complete web platform with an interactive dashboard using React.js and created secure RESTful APIs for MongoDB interactions.",
      achievements: [
        "Developed complete web platform with interactive React.js dashboard",
        "Created and optimized secure RESTful APIs for MongoDB interactions",
        "Implemented responsive frontend features with performance optimization",
        "Collaborated in Agile environment with weekly sprints"
      ]
    },
    {
      title: "Full Stack Development Intern",
      company: "Oxilog",
      period: "June 2023 - Aug. 2023",
      description: "Developed a reporting dashboard with modern UI and high-performance RESTful APIs for data analysis with PostgreSQL.",
      achievements: [
        "Built reporting dashboard with modern user interface",
        "Created high-performance and secure RESTful APIs for data analysis",
        "Optimized relational database queries in PostgreSQL",
        "Integrated interactive charts and enhanced user experience"
      ]
    },
    {
      title: "Backend Development Intern",
      company: "Monitoring Application Project",
      period: "Feb. 2022 - May 2022",
      description: "Designed a predictive analysis system with Python and MySQL, delivering complete technical documentation.",
      achievements: [
        "Designed predictive analysis system with APIs for proactive alerts",
        "Developed robust backend architecture with secure MySQL data management",
        "Delivered full technical documentation and knowledge transfer to team"
      ]
    }
  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Blockchain and Hedera Ecosystem Certification",
      issuer: "Professional Development",
      date: "2025",
      duration: "Professional Certification",
      skills: [
        "Blockchain Technology",
        "Hedera Ecosystem",
        "Distributed Systems",
        "Cryptography"
      ],
      certificateId: "Hedera-2025"
    },
    {
      id: 2,
      title: "Sustainable Development Goals (UN) Certification",
      issuer: "United Nations",
      date: "2025",
      duration: "Professional Development",
      skills: [
        "Sustainability",
        "Global Development",
        "Social Responsibility",
        "Environmental Awareness"
      ],
      certificateId: "UN-SDG-2025"
    },
    {
      id: 3,
      title: "Winner of Dräxlmaier Hackathon",
      issuer: "Dräxlmaier",
      date: "2023",
      duration: "Competition",
      skills: [
        "Innovative Application Development",
        "Team Collaboration",
        "Problem Solving",
        "Technical Excellence"
      ],
      certificateId: "Draxlmaier-2023-Winner"
    },
    {
      id: 4,
      title: "Python Certificate - Level 1 and 2",
      issuer: "Sadeem Training Center",
      date: "2023",
      duration: "Training Program",
      skills: [
        "Python Programming",
        "Data Structures",
        "Object-Oriented Programming",
        "Algorithm Design"
      ],
      certificateId: "Sadeem-Python-2023"
    }
  ]

  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section
            className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Profile Image - NOW WITH YOUR REAL PHOTO */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="relative w-80 h-80 mx-auto md:mx-0">
                  {/* Main Photo */}
                  <div
                      className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800 bg-gradient-to-br from-blue-100 to-indigo-100">
                    <Image
                        src="/images/donia-photo.jpg"  // ← Your real photo here
                        alt="Donia Jlidi - Full Stack Developer"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                    />
                  </div>

                  {/* Decorative Checkmark Badge */}
                  <div
                      className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>

                  {/* Optional: Small status dot */}
                  <div
                      className="absolute top-8 right-8 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
                </div>

                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Available for full-time opportunities • Graduating 2025
                </p>
              </div>

              {/* About Content */}
              <div className="order-1 md:order-2">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Donia Jlidi
                </h1>
                <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 font-semibold flex items-center gap-3">
                  Software Engineer • Full Stack Developer
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Software engineer graduating in <strong
                    className="text-blue-600 dark:text-blue-400">2025</strong> from ESPRIT School of Engineering and
                  Technology,
                  specialized in Full Stack development with strong experience
                  in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Laravel</strong>,
                  and <strong>Angular</strong>, Node.js, and modern databases.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Passionate about modern technologies, RESTful APIs, MySQL/MongoDB/PostgreSQL databases, Agile
                  methodologies,
                  performance optimization, and security. Ready to take on technical challenges in dynamic environments.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10 max-w-md">
                  <div className="text-center bg-white dark:bg-gray-800 px-6 py-5 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2025</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Graduating</div>
                  </div>
                  <div className="text-center bg-white dark:bg-gray-800 px-6 py-5 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">11+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
                  </div>
                  <div className="text-center bg-white dark:bg-gray-800 px-6 py-5 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Internships</div>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
                  <a href="mailto:jlidi.doniaa@gmail.com"
                     className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <div
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="font-medium">jlidi.doniaa@gmail.com</span>
                  </a>

                  <a href="https://linkedin.com/in/Donia-Jlidi" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <div
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  <a href="https://github.com/DoniaJ" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <div
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                      href="/contact"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    Get In Touch
                  </a>
                  <a
                      href="/DONIA_resume__eng.pdf"
                      download
                      className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Technologies and tools I work with regularly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                  <div key={index}
                       className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-4">
                      {skillGroup.technologies.map((tech, techIndex) => (
                          <div key={techIndex}>
                            <div className="flex justify-between mb-2">
                              <span
                                  className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{tech.name}</span>
                              <span
                                  className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{tech.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000"
                                  style={{width: `${tech.level}%`}}
                              ></div>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                My professional journey and key achievements
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                  <div key={index}
                       className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{exp.company}</p>
                      </div>
                      <span
                          className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 transition-colors duration-300">{exp.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{exp.description}</p>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key
                        Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Certifications & Achievements
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Professional certifications and competition awards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                  <div
                      key={cert.id}
                      className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer transform hover:-translate-y-1"
                      onClick={() => setSelectedCert(cert)}
                  >
                    <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm font-medium opacity-90">Achievement</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 leading-tight">
                            {cert.title}
                          </h3>
                          <p className="text-blue-100 text-sm">{cert.issuer}</p>
                        </div>
                        <div
                            className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 ml-4 shadow-lg">
                          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                               viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>{cert.duration}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 4).map((skill, index) => (
                              <span
                                  key={index}
                                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                              >
                          {skill}
                        </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                        <button
                            className="w-full flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                          <span>View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
                               stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Education
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Academic background and qualifications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Engineering Degree
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">
                      ESPRIT School of Engineering
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                      Tunis, Tunisia
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                  2022 - 2025
                </span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Computer Science Engineering with specialization in Full Stack Development and Software Engineering.
                  </p>
                </div>
              </div>

              <div
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      University Degree
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">
                      ISET Gabès
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                      Gabès, Tunisia
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                  2020 - 2022
                </span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Computer Science degree with foundation in programming and software development.
                  </p>
                </div>
              </div>
              <div
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Scientific Baccalaureate
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">
                      Bolbeba High School
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                      Gabès, Tunisia
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                  2019
                </span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Scientific track with strong foundation in mathematics and sciences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */
        }
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Languages
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Communication skills across multiple languages
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Arabic</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Native</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">French</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Fluent (C1)</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>

              <div
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">English</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Advanced (B2)</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
              Beyond Coding
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Full
                  Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Building modern web
                  applications with cutting-edge technologies</p>
              </div>

              <div className="p-6">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Monitoring emerging
                  frameworks and technological innovations</p>
              </div>

              <div className="p-6">
                <div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Web application
                  performance optimization and security</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Modal */}
        {selectedCert && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedCert(null)}
            >
              <div
                  className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
              >
                <div
                    className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                      <p className="text-blue-100">{selectedCert.issuer}</p>
                    </div>
                    <button
                        onClick={() => setSelectedCert(null)}
                        className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completion Date</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedCert.date}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Type</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedCert.duration}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">All Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, index) => (
                          <span
                              key={index}
                              className="px-3 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-700"
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Certificate ID</div>
                    <div
                        className="font-mono text-sm text-gray-900 dark:text-white break-all">{selectedCert.certificateId}</div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  )
}

export default About;