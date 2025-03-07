import * as React from "react";
export default function Footer() {
    return (
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">JobNest</h3>
              <p className="text-gray-600">Connecting talent with opportunity.</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/jobs" className="text-gray-600 hover:text-blue-600">Browse Jobs</a></li>
                <li><a href="/companies" className="text-gray-600 hover:text-blue-600">Companies</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
  
            {/* Social Media (Optional) */}
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">X-icon</svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2024 JobNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }