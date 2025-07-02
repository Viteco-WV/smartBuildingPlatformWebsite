"use client";
import React from "react";
import { Linkedin, Youtube } from 'lucide-react';
import { RouterLink } from '@/components/Router';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold">Infinity</span>
          </div>
          <p className="text-gray-400 text-sm">
            Slimme gebouwautomatisering voor optimale prestaties en energiebesparing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><RouterLink href="/platform?module=energy" className="hover:text-white transition-colors">Energie Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=comfort" className="hover:text-white transition-colors">Comfort Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=hvac" className="hover:text-white transition-colors">HVAC Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=control" className="hover:text-white transition-colors">Control Manager</RouterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Over Ons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nieuws</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrière</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact & Socials</h4>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <div>+31 (0)85 303 3054</div>
              <div>info@infinity-analysis.com</div>
              <div>Nederland</div>
            </div>
            <div className="flex space-x-3">
              <a href="https://linkedin.com/company/infinity-monitoring" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@infinitymonitoring" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 Infinity Monitoring & Consultancy. Alle rechten voorbehouden.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 