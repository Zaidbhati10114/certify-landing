import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Brush,
  Type,
  Shapes,
  History,
  Save,
  Lock,
  Sparkles,
  Image,
  CreditCard,
  FileOutput,
  Rocket,
  Database,
  Palette,
  Github,
  Twitter,
  Linkedin,
  Heart,
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Brush className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Graphic Design Editor',
      description: 'Professional-grade design tools at your fingertips',
    },
    {
      icon: <Type className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Text Tools',
      description: 'Advanced typography with custom fonts and styles',
    },
    {
      icon: <Shapes className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Shape Tools',
      description: 'Create and customize shapes with precision',
    },
    {
      icon: <Brush className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Drawing Tools',
      description: 'Express creativity with freehand drawing',
    },
    {
      icon: <History className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'History Management',
      description: 'Unlimited undo/redo capabilities',
    },
    {
      icon: <Save className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Real-time Autosave',
      description: 'Never lose your work again',
    },
    {
      icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Authentication',
      description: 'Secure access with Next-Auth v5',
    },
    {
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'AI Generation',
      description: 'Create images with AI technology',
    },
    {
      icon: <Image className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Background Removal',
      description: 'AI-powered background removal',
    },
    {
      icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Payments',
      description: 'Seamless payments with Stripe',
    },
    {
      icon: <FileOutput className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Export Options',
      description: 'Export as PNG, SVG, JPG & JSON',
    },
    {
      icon: <Database className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Modern Stack',
      description: 'Built with Next.js, Hono.js, and DrizzleORM',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-10 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent px-2 leading-tight md:leading-snug py-1">
            Create Beautiful Designs Instantly
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            Your all-in-one design platform with AI-powered tools and
            professional templates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
            >
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            Everything You Need to Create Amazing Designs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start md:items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 px-2">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
            <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
              <Rocket className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium text-sm md:text-base">Next.js</p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
              <Database className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium text-sm md:text-base">DrizzleORM</p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
              <Palette className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium text-sm md:text-base">TailwindCSS</p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium text-sm md:text-base">Shadcn UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-2">
            Start Creating Beautiful Designs Today
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100 px-4">
            Join thousands of creators and bring your ideas to life
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto mx-2"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Creatify</h3>
              <p className="text-gray-400 text-sm">
                A powerful design tool built with modern technologies. Create
                beautiful designs with AI-powered features and professional
                templates.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Zaidbhati10114"
                  className="hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/Zaidbhati4"
                  className="hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zaid-bhati-427a79192/"
                  className="hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Developed with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by</span>
                <a
                  href="https://github.com/Zaidbhati10114"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zaid
                </a>
              </div>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Creatify. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
