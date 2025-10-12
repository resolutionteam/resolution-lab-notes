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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8">
        {/* Subtle sci-fi grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
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
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          {/* "meet fabio" text above blob */}
          <h2 className="text-4xl md:text-5xl font-display italic text-foreground">
            meet <span style={{ color: '#C451E8' }}>fabio</span>
          </h2>

          {/* Hero blob */}
          <div className="relative w-full max-w-xl mx-auto">
            <FloatingBlob 
              image={heroBlob} 
              opacity={0.556}
              className="w-full h-auto"
            />
          </div>

          {/* Tagline below blob with colored text */}
          <p className="text-xl md:text-2xl font-body text-foreground max-w-2xl mx-auto leading-relaxed">
            your sassy bestie who helps you see your relationships for what they are:
            <br />
            <span style={{ color: '#65C466', fontStyle: 'italic', fontWeight: 'bold' }}>life savers</span> or <span style={{ color: '#C451E8', fontStyle: 'italic', fontWeight: 'bold' }}>time wasters</span>.
          </p>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8">
        {/* Subtle sci-fi grid background - same as other pages */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
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
            className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(50, 100%, 80%) 0%, hsl(50, 100%, 85%) 100%)',
              boxShadow: '0 0 80px 40px hsl(50, 100%, 80% / 0.3)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '0s',
              willChange: 'transform'
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
            className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(340, 100%, 85%) 0%, hsl(340, 100%, 90%) 100%)',
              boxShadow: '0 0 80px 40px hsl(340, 100%, 85% / 0.3)',
              animation: 'float 9s ease-in-out infinite',
              animationDelay: '1.5s',
              willChange: 'transform'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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
              <h1 className="text-xl md:text-3xl font-body text-hot-pink tracking-wider">
                &gt; WELCOME_TO_RESOLUTION_LABS
              </h1>
            </div>
          </div>

          {/* Main content with lab readout aesthetic */}
          <div className="space-y-12 max-w-2xl mx-auto px-4">
            {/* Main headline in terminal box */}
            <div 
              className="p-6 md:p-10 relative"
              style={{
                border: '2px solid rgba(107, 140, 255, 0.3)',
                boxShadow: '0 0 40px rgba(107, 140, 255, 0.15), inset 0 0 40px rgba(107, 140, 255, 0.05)'
              }}
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-background">
                <span className="text-xs font-body opacity-50 tracking-widest">[ we are ]</span>
              </div>
              <p className="text-xl md:text-3xl font-body text-foreground leading-tight tracking-wide">
                the AI support system for girls who feel everything.
              </p>
            </div>
            
            {/* Green subtext in terminal box */}
            <div 
              className="p-6 md:p-8 relative ml-auto max-w-full md:max-w-xl"
              style={{
                border: '2px solid rgba(101, 196, 102, 0.3)',
                boxShadow: '0 0 40px rgba(101, 196, 102, 0.15), inset 0 0 40px rgba(101, 196, 102, 0.05)'
              }}
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-background">
                <span className="text-xs font-body opacity-50 tracking-widest">[ our bread & butter ]</span>
              </div>
              <p className="text-base md:text-xl font-body italic leading-relaxed" style={{ color: '#65C466' }}>
                we're building tools that make stress, love, and health easier to talk about.
              </p>
            </div>
            
            {/* Our why box - smaller */}
            <div 
              className="p-4 md:p-5 relative max-w-xs ml-auto"
              style={{
                border: '2px solid rgba(196, 81, 232, 0.2)',
                boxShadow: '0 0 30px rgba(196, 81, 232, 0.08), inset 0 0 30px rgba(196, 81, 232, 0.03)'
              }}
            >
              <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-background">
                <span className="text-[10px] font-body opacity-50 tracking-widest">[ our why ]</span>
              </div>
              <p className="text-xs md:text-sm font-body leading-relaxed mt-2" style={{ color: 'rgba(196, 81, 232, 0.5)' }}>
                talking about your problems helps you heal before they take you to the doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Community */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-20">
        {/* Subtle sci-fi grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
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

        {/* Floating SMS bubbles around the sides */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left side bubbles */}
          <SMSBubble 
            delay={0} 
            className="absolute left-[8%] top-[22%] md:left-24 md:top-[20%] max-w-[60%] text-sm md:text-base"
          >
            {testimonials[0]}
          </SMSBubble>
          
          {/* Bottom left bubble with glow */}
          <div className="absolute left-[10%] top-[68%] md:left-24 md:top-[70%]">
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
            <SMSBubble delay={2} className="relative z-10 max-w-[60%] text-sm md:text-base">
              {testimonials[2]}
            </SMSBubble>
          </div>
          
          {/* Right side bubbles */}
          {/* Top right bubble with glow */}
          <div className="absolute right-[8%] top-[28%] md:right-20 md:top-[24%]">
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
            <SMSBubble delay={1.5} className="relative z-10 max-w-[60%] text-sm md:text-base">
              {testimonials[1]}
            </SMSBubble>
          </div>
          
          <SMSBubble 
            delay={3} 
            className="absolute right-[8%] bottom-[20%] md:right-24 md:bottom-[18%]"
          >
            {testimonials[3]}
          </SMSBubble>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12 relative z-10 px-4">
          <p className="text-base md:text-[22px] font-body text-foreground leading-relaxed max-w-xl md:max-w-2xl mx-auto">
            every week, we share our lab notes —
            <br />
            <span className="font-bold">real stories from girls finally resolving</span>
            <br />
            <span className="font-bold">their medical mysteries.</span>
          </p>

          <Button variant="cta" size="lg" className="font-ui text-sm md:text-base">
            join our community →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
