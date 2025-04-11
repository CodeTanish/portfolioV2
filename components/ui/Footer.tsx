'use client'
import React from 'react'
import { Instagram, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} codeTanish. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/rastogitanish673?igsh=MXR0enloZmllbWx3bQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-500 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/CodeTanish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-500 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
