import React, { useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import AIANavbar from "./NavbarOne";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopHeaderOne from "./TopHeaderOne";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      title: "Home",
      submenu: [
        "Home Version One",
        "Home Version Two",
        "Home Version Three",
        "Home Version Four",
        "Home Version Five",
        "Home Version Six",
      ],
    },
    {
      title: "Pages",
      submenu: [
        "About Us",
        "About Us Two",
        "Our Team",
        "Team Details",
        "Become an Instructor",
        "Contact One",
        "Contact Two",
        "404 Page",
      ],
    },
    {
      title: "Blog",
      submenu: [
        "Blog Default",
        "Blog Classic",
        "Masonry Style",
        "Modern Style",
        "Post Single",
      ],
    },
    {
      title: "Event",
      submenu: ["All Events", "Event Details"],
    },
    {
      title: "Course",
      submenu: [
        "All Courses",
        "Course Style One",
        "Course Style Two",
        "Course Style Three",
        "Course Details",
        "Become an Instructor",
        "Register / Log-in",
      ],
    },
    {
      title: "Shop",
      submenu: [
        "Shop No Sidebar",
        "Shop Sidebar Left",
        "Shop Sidebar Right",
        "Product Details",
        "Checkout",
        "Cart",
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ================= TABS ================= */}
      <Tabs defaultValue="navbar1" className="w-full">
        <TabsList className="mx-auto mt-4 flex w-fit gap-2 bg-muted p-1 rounded-lg">
          <TabsTrigger value="navbar1">Navbar One</TabsTrigger>
          <TabsTrigger value="navbar2">Navbar Two</TabsTrigger>
        </TabsList>

        {/* ================= TAB 1 ================= */}
        <TabsContent value="navbar1">
          <TopHeaderOne />
          <div className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
              <h1 className="text-sm md:text-base font-normal">
                Are you interested in Online Learning?{" "}
                <a
                  href="#contact"
                  className="font-semibold underline hover:opacity-80 transition-opacity"
                >
                  Contact us.
                </a>
              </h1>
              <ul className="flex gap-4 md:gap-6">
                <li>
                  <a
                    href="#register"
                    className="text-sm hover:opacity-80 transition-opacity"
                  >
                    Register Here
                  </a>
                </li>
                <li>
                  <a
                    href="#login"
                    className="text-sm hover:opacity-80 transition-opacity"
                  >
                    Membership Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="https://aia.in.net/crm/public/assets/images/logo/new_logo.webp"
                    alt="Logo"
                    className="h-8 md:h-10 w-auto"
                  />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a
                        href="#"
                        className="flex items-center gap-1 text-gray-800 font-medium hover:text-indigo-600 transition-colors py-2"
                      >
                        {item.title}
                        <ChevronDown size={14} />
                      </a>

                      {/* Dropdown Menu */}
                      <ul
                        className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[220px] py-2 transition-all duration-300 ${
                          activeDropdown === index
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2"
                        }`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="block px-5 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 hover:pl-6 transition-all"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="lg:hidden flex items-center gap-4">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-gray-800 focus:outline-none"
                  >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div
                className={`lg:hidden fixed top-0 left-0 w-80 h-screen bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="p-6">
                  <div>
                    <img
                      src="https://aia.in.net/crm/public/assets/images/logo/new_logo.webp"
                      alt="Academy of Internal Audit"
                      className="h-8 md:h-10 w-auto"
                    />
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="absolute top-6 right-6 text-gray-800"
                  >
                    <X size={28} />
                  </button>

                  <div className="mt-6">
                    {menuItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-200">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center justify-between w-full py-4 text-gray-800 font-medium"
                        >
                          {item.title}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeDropdown === index && (
                          <ul className="bg-indigo-50 rounded-md mb-4">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="#"
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:pl-5 transition-all"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && (
                <div
                  className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
                  onClick={toggleMobileMenu}
                />
              )}
            </div>
          </nav>
        </TabsContent>

        {/* ================= TAB 2 ================= */}
        <TabsContent value="navbar2">
          {/* Your Second Navbar */}
          <AIANavbar />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Navbar;
