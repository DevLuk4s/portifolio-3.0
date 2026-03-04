"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [FormData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const respose = await fetch("api/contact", {
        method: "POST",
        headers: { "Cotent-Type": "application/json" },
        body: JSON.stringify(FormData),
      });

      if (!respose.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const HadleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-20 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="text-secondary md:w-2/3">
            I´am always open to discussing new projects, creative Ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Email:</h3>
                <Link
                  href="mailto:lucasgabrielferreirasilva777@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  lucasgabrielferreirasilva777@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Telefone:</h3>
                <Link
                  href="tel:71984078620"
                  className="text-secondary hover:text-primary"
                >
                  71984078620
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Localização</h3>
                <p className="text-secondary">Salvador - Bahia</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                required
                value={FormData.email}
                onChange={HadleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border placeholder:text-white/50 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                required
                value={FormData.name}
                onChange={HadleChange}
                type="name"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border placeholder:text-white/50 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                message
              </label>
              <textarea
                required
                value={FormData.message}
                onChange={HadleChange}
                rows={4}
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md border placeholder:text-white/50 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300 ease-in-out"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent sucessfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
