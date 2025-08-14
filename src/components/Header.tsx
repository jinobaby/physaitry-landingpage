import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Problems', href: '#problems' },
    { label: 'Evidence', href: '#evidence' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl wellness-shadow-soft border-b border-wellness-purple/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-2xl font-bold wellness-text-gradient">
            Physaitry
          </a>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-wellness-purple transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-wellness-purple/20 text-wellness-purple hover:bg-wellness-lavender/50 rounded-2xl px-6"
            >
              Book Call
            </Button>
            <Button
              className="bg-wellness-purple hover:bg-wellness-purple/90 text-white rounded-2xl px-6 wellness-shadow-soft"
            >
              Join Waitlist
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6 text-wellness-purple" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white border-l border-wellness-purple/10"
            >
              <div className="mt-8 space-y-8">
                <div className="text-2xl font-bold wellness-text-gradient">
                  Physaitry
                </div>

                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg text-gray-600 hover:text-wellness-purple transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="space-y-4 pt-6 border-t border-wellness-purple/10">
                  <Button
                    variant="outline"
                    className="w-full border-wellness-purple/20 text-wellness-purple hover:bg-wellness-lavender/50 rounded-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Call
                  </Button>
                  <Button
                    className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-white rounded-2xl wellness-shadow-soft"
                    onClick={() => setIsOpen(false)}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
