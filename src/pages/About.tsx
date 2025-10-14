import { FloatingBlob } from "@/components/ui/floating-blob";
import { useRef, useLayoutEffect } from "react";

const About = () => {
  const topBoxRef = useRef<HTMLDivElement>(null);
  const yellowBlobRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const box = topBoxRef.current;
      const blob = yellowBlobRef.current;
      if (!section || !box || !blob) return;
      
      const sectionRect = section.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();
      const centerY = boxRect.top - sectionRect.top + boxRect.height / 2;
      blob.style.top = `${centerY}px`;
    };
    
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="w-full">
      {/* Welcome Section */}
      <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 pt-24">
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
              left: '25%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          <div 
            className="absolute h-full w-1"
            style={{
              left: '70%',
              background: 'linear-gradient(180deg, transparent, hsl(290, 75%, 62%), transparent)',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
        </div>

        {/* Original floating blobs with glow */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {/* Pastel yellow blob */}
          <div 
            ref={yellowBlobRef}
            className="absolute left-10 w-64 h-64 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(50, 100%, 80%) 0%, hsl(50, 100%, 85%) 100%)',
              boxShadow: '0 0 80px 40px hsl(50, 100%, 80% / 0.3)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '0s',
              willChange: 'transform',
              top: '35%'
            }}
          />
          
          {/* Pastel purple blob */}
          <div 
            className="absolute bottom-32 right-20 w-72 h-72 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(290, 75%, 80%) 0%, hsl(290, 75%, 85%) 100%)',
              boxShadow: '0 0 100px 50px hsl(290, 75%, 80% / 0.4)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '2s',
              willChange: 'transform'
            }}
          />
          
          {/* Baby pink blob */}
          <div 
            className="absolute right-[50%] w-56 h-56 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(340, 100%, 85%) 0%, hsl(340, 100%, 90%) 100%)',
              boxShadow: '0 0 80px 40px hsl(340, 100%, 85% / 0.3)',
              animation: 'float 9s ease-in-out infinite',
              animationDelay: '1.5s',
              willChange: 'transform',
              top: 'calc(45% - 4pt)'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10" style={{ marginTop: '5pt' }}>
          {/* Header with terminal aesthetic */}
          <div className="mb-16">
            <div 
              className="inline-block px-6 md:px-8 py-4 relative mx-auto"
              style={{
                border: '1px solid rgba(196, 81, 232, 0.3)',
                boxShadow: '0 0 30px rgba(196, 81, 232, 0.2), inset 0 0 30px rgba(196, 81, 232, 0.1)'
              }}
            >
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-hot-pink opacity-50" />
                <div className="w-2 h-2 rounded-full bg-hot-pink opacity-30" />
                <div className="w-2 h-2 rounded-full bg-hot-pink opacity-20" />
              </div>
              <h1 className="text-base md:text-[26px] font-body text-hot-pink tracking-wider" style={{ marginLeft: '-5pt' }}>
                &gt; WELCOME_TO_RESOLUTION_LABS
              </h1>
            </div>
          </div>

          {/* Main content with lab readout aesthetic */}
          <div className="space-y-8 max-w-2xl mx-auto px-4">
            {/* Main headline in terminal box */}
            <div 
              ref={topBoxRef}
              className="p-3 md:p-4 relative ml-auto max-w-full md:max-w-lg"
              style={{
                border: '2px solid rgba(107, 140, 255, 0.3)',
                boxShadow: '0 0 40px rgba(107, 140, 255, 0.15), inset 0 0 40px rgba(107, 140, 255, 0.05)'
              }}
            >
              <div 
                className="absolute top-0 left-3 md:left-4 -translate-y-1/2 inline-flex items-center justify-center px-1.5 py-1.5 rounded-[2px] bg-white border shadow-sm"
                style={{ borderColor: 'rgba(107, 140, 255, 0.25)' }}
              >
                <span className="text-[10px] leading-none font-body tracking-normal" style={{ color: 'rgba(107, 140, 255, 1)' }}>[ we are ]</span>
              </div>
              <p className="text-base md:text-xl font-body text-foreground leading-tight tracking-wide mt-1">
                the AI support system for girls who feel everything.
              </p>
            </div>
            
            {/* Green subtext in terminal box */}
            <div 
              className="p-3 md:p-4 relative ml-auto max-w-full md:max-w-md"
              style={{
                border: '2px solid rgba(101, 196, 102, 0.3)',
                boxShadow: '0 0 40px rgba(101, 196, 102, 0.15), inset 0 0 40px rgba(101, 196, 102, 0.05)'
              }}
            >
              <div 
                className="absolute top-0 left-3 md:left-4 -translate-y-1/2 inline-flex items-center justify-center px-1.5 py-1.5 rounded-[2px] bg-white border shadow-sm"
                style={{ borderColor: 'rgba(101, 196, 102, 0.25)' }}
              >
                <span className="text-[10px] leading-none font-body tracking-normal" style={{ color: '#65C466' }}>[ our bread & butter ]</span>
              </div>
              <p className="text-sm md:text-base font-body italic leading-relaxed mt-1" style={{ color: '#65C466' }}>
                we're building tools that make stress, love, and health easier to talk about.
              </p>
            </div>
            
            {/* Our why box - smaller */}
            <div 
              className="p-3 relative max-w-full md:max-w-xs ml-auto"
              style={{
                border: '2px solid rgba(196, 81, 232, 0.2)',
                boxShadow: '0 0 30px rgba(196, 81, 232, 0.08), inset 0 0 30px rgba(196, 81, 232, 0.03)'
              }}
            >
              <div 
                className="absolute top-0 left-3 md:left-4 -translate-y-1/2 inline-flex items-center justify-center px-1.5 py-1.5 rounded-[2px] bg-white border shadow-sm"
                style={{ borderColor: 'rgba(196, 81, 232, 0.22)' }}
              >
                <span className="text-[10px] leading-none font-body tracking-normal" style={{ color: 'rgba(196, 81, 232, 1)' }}>[ our why ]</span>
              </div>
              <p className="text-xs md:text-sm font-body leading-relaxed mt-2" style={{ color: 'rgba(196, 81, 232, 0.5)' }}>
                talking about your problems helps you heal before they take you to the doctor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
