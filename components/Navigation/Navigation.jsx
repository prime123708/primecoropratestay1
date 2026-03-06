import logo from "@/images/logo.png";

export function Navigation() {
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
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Prime Corporate Stay logo" className="h-8 w-auto md:h-14 md:w-auto object-contain" />
              <div className="text-xl md:text-2xl font-serif font-bold leading-tight">
                {/* <span className="block bg-gradient-to-r from-[#222325] to-[#222325] me-2 bg-clip-text text-transparent">
                  Prime Corporate Stay
                </span> */}
              </div>
            </a>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="/" className="text-[#c5a075] font-semibold border-b-2 border-[#c5a075] pb-1">HOME</a>
              <a href="/about" className="text-gray-700 hover:text-[#c5a075] transition-colors">ABOUT US</a>
              <a href="/rooms" className="text-gray-700 hover:text-[#c5a075] transition-colors">ROOMS</a>
              <a href="/services" className="text-gray-700 hover:text-[#c5a075] transition-colors">SERVICES</a>
              <a href="/gallery" className="text-gray-700 hover:text-[#c5a075] transition-colors">GALLERY</a>
              <a href="/contact" className="text-gray-700 hover:text-[#c5a075] transition-colors">CONTACT US</a>
            </div>

            <div className="hidden lg:block md:px-1">
              <a href="/contact">
                <button className="bg-[#c5a075] text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-[#b08e68] transition-all transform hover:scale-105">
                  RESERVATION →
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

        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200 shadow-lg" style={{display: 'none'}}>
          <div className="px-4 py-3 flex flex-col space-y-3">
            <a href="/" className="text-gray-700 hover:text-[#c5a075] transition-colors">HOME</a>
            <a href="/about" className="text-gray-700 hover:text-[#c5a075] transition-colors">ABOUT US</a>
            <a href="/rooms" className="text-gray-700 hover:text-[#c5a075] transition-colors">ROOMS</a>
            <a href="/services" className="text-gray-700 hover:text-[#c5a075] transition-colors">SERVICES</a>
            <a href="/gallery" className="text-gray-700 hover:text-[#c5a075] transition-colors">GALLERY</a>
            <a href="/contact" className="text-gray-700 hover:text-[#c5a075] transition-colors">CONTACT US</a>
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