import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
      <Link 
        to={isAboutPage ? "/" : "/about"}
        className="inline-block px-4 md:px-6 py-2 md:py-3 font-body text-sm md:text-base transition-all duration-300 hover:scale-105"
        style={{
          color: '#C451E8',
          border: '1px solid rgba(196, 81, 232, 0.3)',
          boxShadow: '0 0 20px rgba(196, 81, 232, 0.2), inset 0 0 20px rgba(196, 81, 232, 0.05)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {isAboutPage ? "← Back to Home" : "About Resolution Labs"}
      </Link>
    </nav>
  );
};

export default Navigation;
