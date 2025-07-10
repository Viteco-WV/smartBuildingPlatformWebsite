"use client";
import React, { useState } from "react";
import { Building2, Zap, Thermometer, Settings, TrendingUp, Shield, Users, Phone, Mail, MapPin, ChevronRight, BarChart3, Gauge, Wind, Brain, Linkedin, Youtube } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOverOnsOpen, setMobileOverOnsOpen] = useState(false);
  const pathname = usePathname();
  const isOverOnsActive = ['/bedrijf', '/cases', '/blog', '/carriere'].some(path => pathname.startsWith(path));

  return (
    <header className="bg-white text-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:items-center flex items-center justify-between py-4 h-full">
          {/* Logo links */}
          <div className="flex items-center space-x-2">
            <RouterLink href="/" className="flex items-center space-x-2">
              <img 
                src="/Infinity Logo RGB Black.svg" 
                alt="Infinity Logo" 
                className="h-8 w-auto"
              />
            </RouterLink>
          </div>
          {/* Navigatie gecentreerd alleen op desktop */}
          <nav className="hidden lg:flex space-x-8 justify-center h-full items-center">
            <RouterLink href="/platform" className="text-black hover:text-[#00e886] transition-colors py-2 flex items-center" activeClassName="text-[#00e886] font-semibold">
              Platform
            </RouterLink>
            <RouterLink href="/services" className="text-black hover:text-[#00e886] transition-colors py-2 flex items-center" activeClassName="text-[#00e886] font-semibold">
              Services
            </RouterLink>
            <div className="relative group h-full flex items-center">
              <button type="button" className={`text-black hover:text-[#00e886] transition-colors flex items-center space-x-1 cursor-pointer ${isOverOnsActive ? 'font-semibold' : ''} focus:outline-none py-2`} tabIndex={0}>
                <span>Over ons</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-20 transition-all duration-200 delay-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <RouterLink href="/bedrijf" className="block px-4 py-2 text-gray-700 hover:text-[#00e886] hover:bg-gray-50 transition-colors">
                  Over ons
                </RouterLink>
                <RouterLink href="/cases" className="block px-4 py-2 text-gray-700 hover:text-[#00e886] hover:bg-gray-50 transition-colors">
                  Cases
                </RouterLink>
                <RouterLink href="/carriere" className="block px-4 py-2 text-gray-700 hover:text-[#00e886] hover:bg-gray-50 transition-colors">
                  Carrière
                </RouterLink>
              </div>
            </div>
          </nav>
          {/* Knoppen rechts */}
          <div className="flex items-center space-x-2 justify-end">
            <RouterLink href="/demo" className="bg-[#00e886] text-white px-6 py-2 rounded-lg hover:bg-[#00d676] transition-all text-sm sm:text-base font-bold">
              Koffie doen?
            </RouterLink>
            <button 
              className="lg:hidden text-gray-700 hover:text-[#00e886] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a 
              href="https://infinity.skyspark.nl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden lg:block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all"
            >
              Login
            </a>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <RouterLink href="/platform" className="text-gray-700 hover:text-[#00e886] transition-colors px-2 py-1" activeClassName="text-[#00e886] font-semibold">
                Platform
              </RouterLink>
              <RouterLink href="/services" className="text-gray-700 hover:text-[#00e886] transition-colors px-2 py-1" activeClassName="text-[#00e886] font-semibold">
                Services
              </RouterLink>
              <div className="space-y-2">
                <button
                  className="text-gray-700 px-2 py-1 flex items-center w-full justify-between focus:outline-none"
                  onClick={() => setMobileOverOnsOpen((v) => !v)}
                  aria-expanded={mobileOverOnsOpen}
                  aria-controls="mobile-overons-menu"
                >
                  <span>Over ons</span>
                  <svg className={`w-4 h-4 ml-2 transition-transform ${mobileOverOnsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOverOnsOpen && (
                  <div id="mobile-overons-menu" className="pl-4 space-y-2">
                    <RouterLink href="/bedrijf" className="block text-gray-700 hover:text-[#00e886] transition-colors px-2 py-1" activeClassName="text-[#00e886] font-semibold">
                      Over ons
                    </RouterLink>
                    <RouterLink href="/cases" className="block text-gray-700 hover:text-[#00e886] transition-colors px-2 py-1" activeClassName="text-[#00e886] font-semibold">
                      Cases
                    </RouterLink>
                    <RouterLink href="/carriere" className="block text-gray-700 hover:text-[#00e886] transition-colors px-2 py-1" activeClassName="text-[#00e886] font-semibold">
                      Carrière
                    </RouterLink>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <a
                  href="https://infinity.skyspark.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all w-full max-w-[180px] mx-auto text-center font-bold"
                >
                  Login
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 