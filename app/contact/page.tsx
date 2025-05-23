"use client";
import React from "react";
import { Mail, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

const ContactPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");


    try {
      /**
       * const res = await fetch('https://your-backend-api.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success(data.message)
        form.reset()
      } else {
        toast.error(data.error)
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong.')
    }s
       */

      const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL

      const res = await axios.post(`${Backend_URL}/api/service`, {
        name,
        email,
        message,
      });
      
      if (res.status === 200) {
        toast.success(res.data.message);
        form.reset();
      } else {
        toast.error(res.data.error || "An error occurred");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="text-black min-h-screen flex flex-col justify-between dark:text-white">
      <div className="max-w-5xl w-full mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Mail className="text-green-500" />
              <span>rastogitainsh673@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Github className="text-green-500" />
              <span>codeTanish</span>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="text-green-500" />
              <span>rastogitanish673</span>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 hover:bg-green-700 transition-all px-6 py-2 rounded-lg font-medium shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
