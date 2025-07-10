"use client";
import React from "react";
import { Linkedin, Youtube } from 'lucide-react';
import { RouterLink } from '@/components/Router';

const Footer = () => (
  <footer className="bg-[#fafbfc] text-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <img 
              src="/Infinity Logo RGB Black.svg" 
              alt="Infinity Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-500 text-sm">
            Slimme gebouwautomatisering voor optimale prestaties en energiebesparing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><RouterLink href="/platform?module=energy" className="hover:text-gray-900 transition-colors">Energie Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=comfort" className="hover:text-gray-900 transition-colors">Comfort Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=hvac" className="hover:text-gray-900 transition-colors">HVAC Manager</RouterLink></li>
              <li><RouterLink href="/platform?module=control" className="hover:text-gray-900 transition-colors">Control Manager</RouterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/bedrijf" className="hover:text-gray-900 transition-colors">Over ons</a></li>
              <li><a href="/cases" className="hover:text-gray-900 transition-colors">Cases</a></li>
              <li><a href="/carriere" className="hover:text-gray-900 transition-colors">Carrière</a></li>
              <li><a href="/algemene-voorwaarden" className="hover:text-gray-900 transition-colors">Algemene voorwaarden</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-500 mb-4">
              <div><a href="https://linkedin.com/company/infinity-monitoring" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
              <div>085 210 4456</div>
              <div>info@infinity-monitoring.com</div>
              <div><a href="https://maps.app.goo.gl/1zSjk2WhKqnXqRN5A" target="_blank" rel="noopener noreferrer">Wijkermeerweg 44U, Beverwijk</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
        <p>&copy; 2025 Infinity Monitoring & Consultancy. Alle rechten voorbehouden.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 