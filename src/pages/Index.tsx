import { useState, useEffect } from "react";
import { FloatingBlob } from "@/components/ui/floating-blob";
import heroBlob from "@/assets/wings.png";
import arrowPurple from "@/assets/arrow-purple.png";

const Index = () => {
  // Rotating words state
  const rotatingWords = ['love.', 'situationships.', 'marriage.', 'LDRs.', 'dating.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const handleBlobClick = () => {
    const email = "lecuongqagiv8895@gmail.com";
    const message = encodeURIComponent("who's fabio?");
    window.location.href = `sms:${email}?body=${message}`;
  };

  return (
    <div className="w-full">

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
          <h2 className="text-3xl md:text-4xl font-display italic text-foreground animate-fade-in">
            text <span style={{ color: '#C451E8' }}>fabio</span>, 24/7
          </h2>

          {/* Hero blob with CTA prompt */}
          <div className="relative w-full max-w-[16rem] mx-auto pb-6 md:pb-12 animate-fade-in">
            {/* CTA text with arrow - positioned below blob on left */}
            <div 
              className="absolute z-20 pointer-events-none flex flex-col items-start gap-2 animate-fade-in left-[-12px] md:left-[calc(10%+50px)] bottom-[-8px] md:bottom-[-4px]"
              style={{ 
                transform: 'rotate(0deg)',
                transformOrigin: 'top left'
              }}
            >
              {/* Custom purple arrow pointing up */}
              <img 
                src={arrowPurple}
                alt=""
                className="animate-bounce drop-shadow-[0_4px_8px_rgba(196,81,232,0.4)] w-[70px] md:w-[80px] h-auto"
              />
              
              <p 
                className="text-[18px] md:text-[19px] font-display italic"
                style={{ color: '#C451E8', marginTop: '-8px', marginLeft: '-30px', textShadow: '0 0 20px rgba(196, 81, 232, 0.7), 0 0 40px rgba(196, 81, 232, 0.4), 0 0 60px rgba(196, 81, 232, 0.2)' }}
              >
                TAP THE WINGS
                <br />
                to text Fabio!
              </p>
            </div>

            <button 
              onClick={handleBlobClick}
              className="relative block cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
            >
              <FloatingBlob 
                image={heroBlob} 
                opacity={0.53}
                className="w-full h-auto scale-[0.85] md:scale-100 -translate-y-[5px]"
              />
            </button>
          </div>

          {/* Tagline */}
          <p className="font-body text-foreground max-w-2xl mx-auto leading-relaxed mt-3 md:mt-5 animate-fade-in text-[calc(1.125rem-1pt)] md:text-[calc(1.125rem+1pt)]" style={{ marginTop: '37pt' }}>
            are you tired of <span style={{ color: '#65C466', fontStyle: 'italic', fontWeight: 'bold' }}>men <br className="md:hidden" />wasting your time?</span>
            <br />
            <br />
            Let <span style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>Fabio</span>, your<br className="md:hidden" /> <span style={{ fontStyle: 'italic', textShadow: '0 0 20px rgba(196, 81, 232, 0.5), 0 0 10px rgba(196, 81, 232, 0.3)' }}>guardian angel</span>,<br className="hidden md:block" /> protect<br className="md:hidden" /> your peace in <span key={currentWordIndex} className="inline-block animate-fade-slide-up" style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>
              {rotatingWords[currentWordIndex]}
            </span>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;