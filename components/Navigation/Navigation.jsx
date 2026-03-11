import { useLocation } from "react-router";
import logo from "@/images/logo.png";

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const getDesktopClass = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    return `pb-1 transition-colors ${isActive ? 'text-[#c5a075] font-semibold border-b-2 border-[#c5a075]' : 'text-gray-700 hover:text-[#c5a075]'}`;
  };

  const getMobileClass = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    return `transition-colors ${isActive ? 'text-[#c5a075] font-semibold' : 'text-gray-700 hover:text-[#c5a075]'}`;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          #menu-toggle {
            display: none;
          }
          
          #menu-toggle:checked + nav #mobile-menu {
            display: block !important;
          }
          
          #menu-toggle:checked + nav #menu-icon-open {
            display: none;
          }
          
          #menu-toggle:checked + nav #menu-icon-close {
            display: block;
          }
          
          #menu-icon-close {
            display: none;
          }
        `
      }} />

      <input type="checkbox" id="menu-toggle" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-28">
            <a href="/" className="flex items-center ">
              <img src={logo} alt="Prime Corporate Stay logo" className="h-12 w-auto md:h-20 md:w-auto object-contain" />
              <div className="text-xl md:text-3xl font-serif font-bold leading-tight">
                {/* <span className="block bg-gradient-to-r from-[#222325] to-[#222325] me-2 bg-clip-text text-transparent">
                  Prime Corporate Stay
                </span> */}
              </div>
            </a>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="/" className={getDesktopClass('/')}>HOME</a>
              <a href="/about" className={getDesktopClass('/about')}>ABOUT US</a>
              <a href="/rooms" className={getDesktopClass('/rooms')}>ROOMS</a>
              <a href="/services" className={getDesktopClass('/services')}>SERVICES</a>
              <a href="/gallery" className={getDesktopClass('/gallery')}>GALLERY</a>
              <a href="/attractions" className={getDesktopClass('/attractions')}>ATTRACTIONS</a>
              <a href="/contact" className={getDesktopClass('/contact')}>CONTACT US</a>
            </div>

            <div className="hidden lg:block md:px-1">
              <a href="/contact">
                <button className="bg-[#c5a075] text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-[#b08e68] transition-all transform hover:scale-105">
                  BOOK A STAY  →
                </button>
              </a>
            </div>

            <label htmlFor="menu-toggle" className="lg:hidden p-2 text-gray-700 cursor-pointer">
              <div id="menu-icon-open">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              <div id="menu-icon-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </label>
          </div>
        </div>

        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200 shadow-lg" style={{ display: 'none' }}>
          <div className="px-4 py-3 flex flex-col space-y-3">
            <a href="/" className={getMobileClass('/')}>HOME</a>
            <a href="/about" className={getMobileClass('/about')}>ABOUT US</a>
            <a href="/rooms" className={getMobileClass('/rooms')}>ROOMS</a>
            <a href="/services" className={getMobileClass('/services')}>SERVICES</a>
            <a href="/attractions" className={getMobileClass('/attractions')}>ATTRACTIONS</a>
            <a href="/gallery" className={getMobileClass('/gallery')}>GALLERY</a>
            <a href="/contact" className={getMobileClass('/contact')}>CONTACT US</a>
            <a href="/contact">
              <button className="w-full bg-[#c5a075] text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#b08e68] transition-all">
                RESERVATION →
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}