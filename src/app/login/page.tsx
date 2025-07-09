"use client"
import React, { useState } from "react";
import { RouterLink } from "@/components/Router";
import { Mail, Lock, Linkedin, Youtube, ArrowLeft, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou de login logica komen
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <RouterLink href="/" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Home
            </RouterLink>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-[#00e886] font-semibold">Login</span>
          </div>
        </div>
      </div>
      {/* Login Form */}
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-white text-gray-900">
        <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Infinity</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">Inloggen</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Gebruikersnaam of Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
                  placeholder="Gebruikersnaam of email"
                  required
                />
                <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Wachtwoord
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
                  placeholder="Wachtwoord"
                  required
                />
                <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword(v => !v)} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <RouterLink href="/reset-password" className="text-emerald-500 hover:underline text-sm">
                Wachtwoord vergeten?
              </RouterLink>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-3 rounded-lg hover:from-emerald-500 hover:to-green-600 transition-all font-semibold"
            >
              Inloggen
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 