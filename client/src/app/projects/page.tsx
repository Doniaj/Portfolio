'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'

interface Project {
    title: string
    description: string
    technologies: string[]
    category: string
    liveUrl?: string
    githubUrl?: string
    featured?: boolean
    image?: string
}

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const categories: string[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI & DevOps']

    const projects: Project[] = [
        {
            title: "Chatbot-Based Appointment Scheduling System (PFE)",
            description: "Intelligent automated appointment scheduling system via phone calls using a voice chatbot. Features real-time calendar integration, admin/super-admin dashboards, instant confirmations, conflict management, notifications, and waitlist handling.",
            technologies: ["React.js", "Node.js", "PostgreSQL", "Flask", "STT/TTS", "Socket.io", "Cron Jobs", "Docker", "CI/CD"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            featured: true,
            image: "/images/pfe-chatbot.jpg"
        },
        {
            title: "GreenLink – Urban Garden Management Platform",
            description: "Laravel platform for managing shared and private urban gardens with plant recommendation system, gardener/admin dashboards, and garden-type filtering.",
            technologies: ["Laravel", "MySQL", "Blade", "Eloquent", "RESTful API"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            featured: true,
            image: "/images/greenlink.jpg"
        },
        {
            title: "SmartJourney – AI Recommendation Platform",
            description: "Full-stack web app with integrated AI engine for personalized recommendations. Features analytical dashboards, interactive reports, and optimized performance.",
            technologies: ["Django", "React.js", "PostgreSQL", "RESTful API", "AI Engine"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            featured: true,
            image: "/images/smartjourney.jpg"
        },
        {
            title: "Decentralized Blog",
            description: "Modern blog built with Next.js featuring article creation, comments, user authentication, and responsive design using TailwindCSS.",
            technologies: ["Next.js", "TailwindCSS", "MongoDB", "Next.js API Routes"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "https://github.com/DoniaJ/decentralized-blog",
            image: "/images/blog.jpg"
        },
        {
            title: "El Kindy – Educational Platform (MERN Stack)",
            description: "Full educational platform for course & attendance management with real-time features, automated notifications, and Dockerized deployment.",
            technologies: ["React.js", "Node.js", "MongoDB", "Express", "Docker", "CI/CD"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            featured: true,
            image: "/images/elkindy.jpg"
        },
        {
            title: "Rivezli.tn – E-commerce Dashboard",
            description: "Complete web platform with interactive admin dashboard built during internship. Focused on responsive design, secure APIs, and performance.",
            technologies: ["React.js", "Node.js", "MongoDB", "RESTful API", "Agile"],
            category: "Full Stack",
            liveUrl: "https://rivezli.tn",
            githubUrl: "",
            image: "/images/rivezli.jpg"
        },
        {
            title: "Oxilog – Reporting Dashboard",
            description: "Modern reporting dashboard with interactive charts, optimized PostgreSQL queries, and high-performance REST APIs.",
            technologies: ["React.js", "Node.js", "PostgreSQL", "RESTful API", "Charts"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            image: "/images/oxilog.jpg"
        },
        {
            title: "Inventory Management System",
            description: "CRUD application for real-time stock management with user roles, sales history, and secure authentication.",
            technologies: ["PHP", "MySQL", "Bootstrap"],
            category: "Backend",
            liveUrl: "",
            githubUrl: "",
            image: "/images/inventory.jpg"
        },
        {
            title: "Kadem – University Management App",
            description: "Full-stack university membership system with Spring Boot backend and modern Angular frontend.",
            technologies: ["Spring Boot", "Angular", "MySQL", "RESTful API"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            image: "/images/kadem.jpg"
        },
        {
            title: "KHEDMA – Freelance Platform (Web + Desktop + Mobile)",
            description: "Cross-platform freelance marketplace connecting clients and freelancers with real-time updates and centralized database.",
            technologies: ["Symfony", "JavaFX", "Codename One", "MySQL"],
            category: "Full Stack",
            liveUrl: "",
            githubUrl: "",
            image: "/images/khedma.jpg"
        },
        {
            title: "Monitoring Application – Predictive Alerts",
            description: "Backend system with predictive analysis and proactive alerts via APIs. Built during first internship.",
            technologies: ["Python", "MySQL", "REST API"],
            category: "Backend",
            liveUrl: "",
            githubUrl: "",
            image: "/images/monitoring.jpg"
        }
    ]

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Here are the real projects I’ve built during my studies and internships at ESPRIT,
                        including my Final Year Project, hackathon wins, and professional work.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
              {projects.length} Projects
            </span>
                        <span className="px-6 py-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
              {projects.filter(p => p.featured).length} Featured
            </span>
                        <span className="px-6 py-3 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium">
              Winner Dräxlmaier Hackathon 2023
            </span>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                            >
                                {cat === '' ? 'AI & DevOps' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProjects.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-12">
                            No projects in this category yet.
                        </p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, i) => (
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
                    )}

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Total Projects</p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                            <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                                {new Set(projects.flatMap(p => p.technologies)).size}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies Used</p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                                {projects.filter(p => p.featured).length}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Featured</p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">1</div>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Hackathon Win</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
                    <p className="text-xl mb-10 opacity-90">
                        Currently graduating in 2025 and open to full-time opportunities in Full Stack development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:jlidi.doniaa@gmail.com"
                            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Hire Me
                        </a>
                        <a
                            href="/DONIA_resume__eng.pdf"
                            download
                            className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects