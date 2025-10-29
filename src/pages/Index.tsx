import { useState, useEffect } from "react";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WaitlistSuccess } from "@/components/WaitlistSuccess";
import heroBlob from "@/assets/hero-blob-with-halo.png";
import arrowPurple from "@/assets/arrow-purple.png";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [waitlistData, setWaitlistData] = useState<{
    position: number;
    referralCode: string;
    firstName: string;
  } | null>(null);
  const [referralCode, setReferralCode] = useState<string | undefined>(undefined);
  
  // Rotating words state
  const rotatingWords = ['love', 'situationships', 'marriage', 'LDRs', 'dating'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Check for referral code in URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setReferralCode(ref);
    }
  }, []);

  // Rotate words every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const handleBlobClick = () => {
    setShowForm(true);
  };

  const handleWaitlistSuccess = (position: number, referralCode: string, firstName: string) => {
    setWaitlistData({ position, referralCode, firstName });
  };

  return (
    <div className="w-full">
      {/* Back Arrow - Shows when in waitlist flow */}
      {(showForm || waitlistData) && (
        <button
          onClick={() => {
            setShowForm(false);
            setWaitlistData(null);
          }}
          className="fixed top-6 left-6 md:top-8 md:left-8 z-50 p-3 transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{
            color: '#C451E8',
            border: '1px solid rgba(196, 81, 232, 0.3)',
            boxShadow: '0 0 20px rgba(196, 81, 232, 0.2), inset 0 0 20px rgba(196, 81, 232, 0.05)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Back to home"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5L7 10L12 15" />
          </svg>
        </button>
      )}

      {/* Section 1: Hero */}
      <section className="min-h-screen flex items-start justify-center relative overflow-hidden px-8 pt-[8rem] pb-0">
        {/* Subtle sci-fi grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(hsl(290 75% 62% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(290 75% 62% / 0.15) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Subtle scanning lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div 
            className="absolute h-full w-1"
            style={{
              left: '20%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute h-full w-1"
            style={{
              left: '60%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
        </div>


        {/* Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* "meet fabio" text above blob */}
          {!showForm && !waitlistData && (
            <h2 className="text-3xl md:text-4xl font-display italic text-foreground animate-fade-in">
              text <span style={{ color: '#C451E8' }}>fabio</span>, 24/7
            </h2>
          )}

          {/* Hero blob with early access prompt - hidden when form shows */}
          {!showForm && !waitlistData && (
            <div className="relative w-full max-w-[16rem] mx-auto pb-6 md:pb-12 animate-fade-in">
              {/* Early access text with arrow - positioned below blob on left */}
              <div 
                className="absolute z-20 pointer-events-none flex flex-col items-start gap-2 animate-fade-in left-3 md:left-[calc(10%+50px)] bottom-[-18px] md:bottom-[-16px]"
                style={{ 
                  transform: 'rotate(0deg)',
                  transformOrigin: 'top left'
                }}
              >
                {/* Custom purple arrow pointing up */}
                <img 
                  src={arrowPurple}
                  alt=""
                  className="animate-pulse w-[52px] md:w-[72px] h-auto"
                />
                
                <p 
                  className="text-[15px] md:text-[19px] font-display italic whitespace-nowrap"
                  style={{ color: '#C451E8', marginTop: '-8px', marginLeft: '-30px' }}
                >
                  click here for
                  <br />
                  early access
                </p>
              </div>

              <button 
                onClick={handleBlobClick}
                className="relative block cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
              >
                <FloatingBlob 
                  image={heroBlob} 
                  opacity={0.556}
                  className="w-full h-auto"
                />
              </button>
            </div>
          )}

          {/* Tagline - hidden when form shows */}
          {!showForm && !waitlistData && (
            <p className="font-body text-foreground max-w-2xl mx-auto leading-relaxed mt-3 md:mt-5 animate-fade-in" style={{ fontSize: 'calc(1.125rem + 1pt)', marginTop: '42pt' }}>
              Let <span style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>Fabio</span>, your <span style={{ color: '#5FC968', fontStyle: 'italic', fontWeight: 'bold', textShadow: '0 0 20px rgba(95, 201, 104, 0.6), 0 0 40px rgba(95, 201, 104, 0.3)' }}>guardian angel</span>,<br />protect your peace<br />in <span key={currentWordIndex} className="inline-block animate-fade-slide-up" style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>
                {rotatingWords[currentWordIndex]}.
              </span>
            </p>
          )}

          {/* Waitlist Form - shows after blob click */}
          {showForm && !waitlistData && (
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-display italic text-foreground mb-8">
                Join the <span style={{ color: '#C451E8' }}>waitlist</span>
              </h2>
              <WaitlistForm 
                referralCode={referralCode}
                onSuccess={handleWaitlistSuccess}
              />
            </div>
          )}

          {/* Success State - shows after successful signup */}
          {waitlistData && (
            <div className="pt-8">
              <WaitlistSuccess 
                position={waitlistData.position}
                firstName={waitlistData.firstName}
                referralCode={waitlistData.referralCode}
              />
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Index;