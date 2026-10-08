'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react'
import profileData from '@/profile.json'
import { useState } from 'react'
import { useToast } from '@/hooks/useToast'
import { ToastContainer } from '@/components/Toast'

export default function Contact() {
  const { contact } = profileData
  const { toasts, removeToast, success, error } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      error('Please fill in all fields')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Show success message
      success('Message sent successfully! I will get back to you soon.')
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    } catch (err: any) {
      error(err.message || 'Failed to send message. Please try again later.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <section id="contact" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto whitespace-pre-line">
            {contact.message}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md border border-primary-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md border border-primary-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md border border-primary-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-md border border-primary-100 dark:border-gray-700"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-600 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-600 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-600 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
    </>
  )
}

