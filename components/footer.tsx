'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Return Policy', href: '/returns' }
    ],
    social: [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'YouTube', href: '#', icon: Youtube }
    ]
}

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="size-4 text-gray-400" />
                                <span className="text-gray-300">+234 567 8900</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="size-4 text-gray-400" />
                                <span className="text-gray-300">support@wigga.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4 text-gray-400" />
                                <span className="text-gray-300">123 Fashion Street, Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">
                            Subscribe to get special offers and updates
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {footerLinks.social.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="size-5 text-gray-400" />
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right text-gray-400 text-sm">
                            <p>&copy; 2024 Wigga. All rights reserved.</p>
                            <div className="flex gap-4 justify-center md:justify-end mt-2">
                                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                                <span className="text-gray-600">|</span>
                                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
