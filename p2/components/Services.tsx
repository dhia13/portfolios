'use client'

import { motion } from 'framer-motion'
import { Code, Server, Smartphone } from 'lucide-react'
import profileData from '@/profile.json'

export default function Services() {
  const { services } = profileData

  const icons = [<Code size={32} />, <Server size={32} />, <Smartphone size={32} />]

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What I can do for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary-100 dark:border-gray-700 text-center card-hover"
            >
              <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-2xl text-primary-600 dark:text-primary-400 mb-6">
                {icons[index] || <Code size={32} />}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

