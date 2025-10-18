import { FloatingBlob } from "@/components/ui/floating-blob";
import { SMSBubble } from "@/components/ui/sms-bubble";
import { Button } from "@/components/ui/button";
import heroBlob from "@/assets/hero-blob-with-halo.png";

const Index = () => {
  const testimonials = [
    "I finally stopped texting him. My rash is gone now.",
    "My mom and I argue less when I slept more.",
    "I got my period back after I told my situationship to f*ck off.",
    "Turns out I wasn't mad bec of my roommate, it was just caffeine"
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex items-start justify-center relative overflow-hidden px-8 pt-[calc(8rem-30pt)] pb-0">
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
          <h2 className="text-4xl md:text-5xl font-display italic text-foreground">
            meet <span style={{ color: '#C451E8' }}>fabio</span>
          </h2>

          {/* Hero blob with early access prompt */}
          <div className="relative w-full max-w-[20rem] mx-auto">
            {/* Early access text with arrow - positioned below blob on left */}
            <div 
              className="hidden md:flex absolute flex-col items-start gap-2 animate-fade-in"
              style={{ 
                left: '10%',
                top: 'calc(100% + 20px)',
                transform: 'rotate(0deg)',
                transformOrigin: 'top left'
              }}
            >
              {/* Cute looping arrow SVG pointing diagonally up-right */}
              <svg 
                width="100" 
                height="70" 
                viewBox="0 0 100 70" 
                fill="none" 
                className="animate-pulse"
                style={{ 
                  marginLeft: '10px',
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%'
                }}
              >
                {/* Winding looping path */}
                <path 
                  d="M 5 35 Q 25 10, 50 30 T 90 40 L 85 35 M 90 40 L 85 45" 
                  stroke="#C451E8" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              
              <p 
                className="text-[19px] font-display italic whitespace-nowrap"
                style={{ color: '#C451E8', marginTop: '-8px' }}
              >
                click here for
                <br />
                early access
              </p>
            </div>

            <a 
              href="https://7xrpbu5cijf.typeform.com/to/NseVEuyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <FloatingBlob 
                image={heroBlob} 
                opacity={0.556}
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Tagline below blob with colored text */}
          <p className="text-lg md:text-xl font-body text-foreground max-w-2xl mx-auto leading-relaxed">
            your sassy bestie who helps you see your relationships for what they are:
            <br />
            <span style={{ color: '#65C466', fontStyle: 'italic', fontWeight: 'bold' }}>life savers</span> or <span style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>time wasters</span>.
          </p>
        </div>
      </section>

      {/* Section 2: Community */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 pt-[calc(2rem+150pt)] pb-8 -mt-96">
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
              left: '15%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '4s'
            }}
          />
          <div 
            className="absolute h-full w-1"
            style={{
              left: '80%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '6s'
            }}
          />
        </div>

        {/* Floating color blobs */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {/* Pastel purple blob - top left */}
          <div 
            className="absolute top-1/4 left-16 w-64 h-64 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(290, 75%, 80%) 0%, hsl(290, 75%, 85%) 100%)',
              boxShadow: '0 0 80px 40px hsl(290, 75%, 80% / 0.3)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '0s',
              willChange: 'transform'
            }}
          />
          
          {/* Pastel yellow blob - bottom right */}
          <div 
            className="absolute bottom-1/4 right-20 w-72 h-72 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(50, 100%, 80%) 0%, hsl(50, 100%, 85%) 100%)',
              boxShadow: '0 0 100px 50px hsl(50, 100%, 80% / 0.4)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '2s',
              willChange: 'transform'
            }}
          />
          
          {/* Baby pink blob - centered behind button */}
          <div 
            className="absolute w-56 h-56 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(340, 100%, 82%) 0%, hsl(340, 100%, 88%) 100%)',
              boxShadow: '0 0 80px 40px hsl(340, 100%, 85% / 0.5)',
              animation: 'float 9s ease-in-out infinite',
              animationDelay: '1.5s',
              willChange: 'transform',
              left: 'calc(50% - 7rem)',
              top: '48%'
            }}
          />
        </div>

        {/* Floating SMS bubbles around the sides */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left side bubbles */}
          <SMSBubble 
            delay={0} 
            className="absolute top-[calc(18%+120pt)] md:top-[calc(18%+120pt)] max-w-[60%] text-[8px] md:text-[10px]"
            style={{ left: 'calc(8% + 15pt)' }}
          >
            {testimonials[0]}
          </SMSBubble>
          
          {/* Bottom left bubble with glow */}
          <div className="absolute left-[3%] top-[calc(64%+78pt)] md:left-24 md:top-[calc(70%+78pt)]">
            <div 
              className="absolute blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(196, 81, 232, 0.6) 0%, transparent 70%)',
                width: '300px',
                height: '300px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'pulse 4s ease-in-out infinite',
                zIndex: -1
              }}
            />
            <SMSBubble delay={2} className="relative z-10 max-w-[60%] text-[8px] md:text-[10px]">
              {testimonials[2]}
            </SMSBubble>
          </div>
          
          {/* Right side bubbles */}
          {/* Top right bubble with glow */}
            <div className="absolute right-[8%] top-[calc(29%+110pt)] md:right-20 md:top-[calc(24%+110pt)]">
              <SMSBubble delay={1.5} className="relative z-10 max-w-[60%] text-[8px] md:text-[10px]">
                {testimonials[1]}
              </SMSBubble>
            </div>
          
          <SMSBubble 
            delay={3} 
            className="absolute right-[8%] bottom-[calc(14%-50pt)] md:right-24 md:bottom-[calc(16%-50pt)] text-[8px] md:text-[10px]"
          >
            {testimonials[3]}
          </SMSBubble>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12 relative z-10 px-4">
          <p className="text-[14px] md:text-[20px] font-body text-foreground leading-relaxed max-w-xl md:max-w-2xl mx-auto">
            every week, we share our lab notes — <br className="hidden md:block" />
            <span className="font-bold">real stories from girls finally resolving </span>
            <br className="hidden md:block" />
            <span className="font-bold">their medical mysteries.</span>
          </p>

          <Button variant="cta" size="sm" className="font-ui text-xs md:text-sm italic">
            join our community →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
