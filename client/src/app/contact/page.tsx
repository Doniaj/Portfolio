'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

type SubmitStatus = 'idle' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactMethod {
  icon: JSX.Element
  title: string
  value: string
  description: string
  link: string
}

interface FAQ {
  question: string
  answer: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ============================
  // UPDATED CONTACT INFORMATION
  // ============================
  const contactMethods: ContactMethod[] = [
    {
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.703a3 3 0 003.43 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
      ),
      title: "Email",
      value: "jlidi.doniaa@gmail.com",
      description: "Send me an email anytime!",
      link: "mailto:jlidi.doniaa@gmail.com"
    },
    {
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
      ),
      title: "Phone",
      value: "+216 52 960 082",
      description: "Mon-Fri from 8am to 6pm.",
      link: "tel:+21652960082"
    },
    {
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
      ),
      title: "Location",
      value: "Tunis, Tunisia",
      description: "Available for remote work",
      link: "#"
    },
    {
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/Donia-Jlidi",
      description: "Let's connect professionally",
      link: "https://www.linkedin.com/in/Donia-Jlidi"
    },
    {
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
          3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
          -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729
          .084-.729 1.205.084 1.84 1.236 1.84 1.236
          1.07 1.835 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.604
          -2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381
          1.236-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
          3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005
          2.045.138 3.003.404 2.28-1.552 3.285-1.23
          3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
          1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92
          .43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286
          0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297
          c0-6.627-5.373-12-12-12"/>
          </svg>
      ),
      title: "GitHub",
      value: "github.com/DoniaJ",
      description: "Check out my projects",
      link: "https://github.com/DoniaJ"
    }
  ]

  // FAQ remains the same
  const faqs: FAQ[] = [
    {
      question: "What's your typical response time?",
      answer: "I usually respond to emails within 24 hours on weekdays."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "Please include project details, timeline, budget, and specific requirements."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, I provide ongoing support for all projects I build."
    }
  ]

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        {/* Hero Section */}
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Let&apos;s Work Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                ✅ Available for new projects
              </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                🚀 Quick response time
              </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                🌍 Remote friendly
              </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose your preferred way to reach out
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                  <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm
                border border-gray-200 dark:border-gray-700
                hover:shadow-md dark:hover:shadow-xl
                transition-all duration-200 hover:-translate-y-1
                text-center group"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800">
                      <div className="text-blue-600 dark:text-blue-400">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {method.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.description}
                    </p>
                  </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Send Me a Message
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Fill out the form below and I&apos;ll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                      placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                      placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Details *
                </label>
                <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <h3 className="text-green-800 dark:text-green-200 font-medium">
                      Message sent successfully!
                    </h3>
                  </div>
              )}

              {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <h3 className="text-red-800 dark:text-red-200 font-medium">
                      Something went wrong! Please try again.
                    </h3>
                  </div>
              )}

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {faq.answer}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-16 bg-blue-600 dark:bg-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prefer another way?</h2>
            <p className="text-xl text-blue-100 mb-8">
              You can also reach me through social platforms:
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                  href="https://www.linkedin.com/in/Donia-Jlidi"
                  target="_blank"
                  className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100"
              >
                LinkedIn
              </a>

              <a
                  href="https://github.com/DoniaJ"
                  target="_blank"
                  className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-blue-600"
              >
                GitHub
              </a>

            </div>
          </div>
        </section>
      </div>
  )
}

export default Contact
