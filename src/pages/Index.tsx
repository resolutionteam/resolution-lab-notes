import { FloatingBlob } from "@/components/ui/floating-blob";
import heroBlob from "@/assets/hero-blob-with-halo.png";
import arrowPurple from "@/assets/arrow-purple.png";

const Index = () => {

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
          <h2 className="text-3xl md:text-4xl font-display italic text-foreground">
            meet <span style={{ color: '#C451E8' }}>fabio</span>
          </h2>

          {/* Hero blob with early access prompt */}
          <div className="relative w-full max-w-[16rem] mx-auto pb-6 md:pb-12">
            {/* Early access text with arrow - positioned below blob on left */}
            <div 
              className="absolute z-20 pointer-events-none flex flex-col items-start gap-2 animate-fade-in left-3 md:left-[calc(10%+50px)] bottom-[-6px] md:bottom-[-4px]"
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
          <p className="font-body text-foreground max-w-2xl mx-auto leading-relaxed mt-3 md:mt-5" style={{ fontSize: 'calc(1.125rem + 1pt)', marginTop: '10pt' }}>
            are you tired of <span style={{ color: '#65C466', fontStyle: 'italic', fontWeight: 'bold' }}>men disrespecting you</span>?
            <br />
            Let your AI bestie, <span style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>Fabio</span>, fix your situationship.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;