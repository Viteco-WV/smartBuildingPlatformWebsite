"use client";
import React, { useState } from "react";
import { Building2, Zap, Thermometer, Settings, TrendingUp, Shield, Users, Phone, Mail, MapPin, ChevronRight, BarChart3, Gauge, Wind, Brain, Linkedin, Youtube } from 'lucide-react';
import { RouterLink } from '@/components/Router';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center py-4">
          {/* Logo links */}
          <div className="flex items-center space-x-2">
            <RouterLink href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">Infinity</span>
            </RouterLink>
          </div>
          {/* Navigatie gecentreerd */}
          <nav className="hidden lg:flex space-x-8 justify-center">
            <RouterLink href="/platform" className="text-gray-300 hover:text-emerald-400 transition-colors" activeClassName="text-emerald-400 font-semibold">
              Platform
            </RouterLink>
            <RouterLink href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors" activeClassName="text-emerald-400 font-semibold">
              Services
            </RouterLink>
            <div className="relative group">
              <button className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center space-x-1">
                <span>Over ons</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 hidden group-hover:block group-focus-within:block hover:block">
                <RouterLink href="/bedrijf" className="block px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                  Over Ons
                </RouterLink>
                <RouterLink href="/cases" className="block px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                  Cases
                </RouterLink>
                <RouterLink href="/blog" className="block px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                  Blog
                </RouterLink>
                <RouterLink href="/carriere" className="block px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                  Carrière
                </RouterLink>
              </div>
            </div>
          </nav>
          {/* Knoppen rechts */}
          <div className="flex items-center space-x-4 justify-end">
            <RouterLink href="/demo" className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-2 rounded-lg hover:from-emerald-500 hover:to-green-600 transition-all text-sm sm:text-base">
              Koffie doen?
            </RouterLink>
            <RouterLink href="/login" className="hidden lg:block bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all">
              Login
            </RouterLink>
            <button 
              className="lg:hidden text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              <RouterLink href="/platform" className="text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                Platform
              </RouterLink>
              <RouterLink href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                Services
              </RouterLink>
              <div className="space-y-2">
                <div className="text-gray-300 px-2 py-1">Over ons</div>
                <div className="pl-4 space-y-2">
                  <RouterLink href="/bedrijf" className="block text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                    Over Ons
                  </RouterLink>
                  <RouterLink href="/cases" className="block text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                    Cases
                  </RouterLink>
                  <RouterLink href="/blog" className="block text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                    Blog
                  </RouterLink>
                  <RouterLink href="/carriere" className="block text-gray-300 hover:text-emerald-400 transition-colors px-2 py-1" activeClassName="text-emerald-400 font-semibold">
                    Carrière
                  </RouterLink>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <RouterLink href="/demo" className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-2 rounded-lg hover:from-emerald-500 hover:to-green-600 transition-all w-fit text-sm sm:text-base">
                  Koffie doen?
                </RouterLink>
                <RouterLink href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all w-fit">
                  Login
                </RouterLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 