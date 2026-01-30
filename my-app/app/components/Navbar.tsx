"use client";
import { Bars2Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fix w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container mx-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            DevLuk4s&trade;
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${isActive ? "font-semibold text-primary" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 round-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars2Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-6 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))}
              <div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center py-2 dark:text-white hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-5 h-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-5 h-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
