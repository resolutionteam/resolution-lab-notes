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
        {/* Floating SMS bubbles in background */}
        <div className="absolute inset-0 pointer-events-none">
          <SMSBubble delay={0} className="absolute top-20 left-[24%]">
            💬
          </SMSBubble>
          <SMSBubble delay={1.5} className="absolute top-24 right-[25%]">
            ✨
          </SMSBubble>
          <SMSBubble delay={2.5} className="absolute top-[45%] left-[15%]">
            🎀
          </SMSBubble>
          <SMSBubble delay={1} className="absolute bottom-[45%] right-[15%]">
            💅
          </SMSBubble>
          <SMSBubble delay={3} className="absolute bottom-24 left-[14%]">
            💕
          </SMSBubble>
          <SMSBubble delay={2} className="absolute bottom-20 right-[20%]">
            🌟
          </SMSBubble>
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
        {/* Enhanced sci-fi grid background with scanning lines */}
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(hsl(290 75% 62% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(290 75% 62% / 0.15) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          {/* Animated scanning line */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(290 75% 62% / 0.3) 50%, transparent 100%)',
              backgroundSize: '100% 200px',
              animation: 'scan 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
        </div>

        {/* Enhanced floating blobs with stronger glow and pulse */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          {/* Pastel yellow blob - 20% larger with pulse */}
          <div 
            className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(50, 100%, 80%) 0%, hsl(50, 100%, 85%) 100%)',
              boxShadow: '0 0 120px 60px hsl(50, 100%, 80% / 0.5)',
              animation: 'float 8s ease-in-out infinite, pulse 4s ease-in-out infinite',
              animationDelay: '0s, 0s',
              willChange: 'transform'
            }}
          />
          
          {/* Pastel purple blob - 20% larger with pulse */}
          <div 
            className="absolute bottom-32 right-20 w-[345px] h-[345px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(290, 75%, 80%) 0%, hsl(290, 75%, 85%) 100%)',
              boxShadow: '0 0 150px 80px hsl(290, 75%, 80% / 0.6)',
              animation: 'float 10s ease-in-out infinite, pulse 5s ease-in-out infinite',
              animationDelay: '2s, 1s',
              willChange: 'transform'
            }}
          />
          
          {/* Pastel green blob - 20% larger with pulse */}
          <div 
            className="absolute top-1/3 right-1/4 w-[230px] h-[230px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(120, 65%, 80%) 0%, hsl(120, 65%, 85%) 100%)',
              boxShadow: '0 0 90px 50px hsl(120, 65%, 80% / 0.5)',
              animation: 'float 7s ease-in-out infinite, pulse 4.5s ease-in-out infinite',
              animationDelay: '1s, 0.5s',
              willChange: 'transform'
            }}
          />
          
          {/* Baby pink blob - 20% larger with pulse */}
          <div 
            className="absolute bottom-1/4 left-1/3 w-[270px] h-[270px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(340, 100%, 85%) 0%, hsl(340, 100%, 90%) 100%)',
              boxShadow: '0 0 110px 60px hsl(340, 100%, 85% / 0.5)',
              animation: 'float 9s ease-in-out infinite, pulse 6s ease-in-out infinite',
              animationDelay: '1.5s, 2s',
              willChange: 'transform'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Dramatic holographic header */}
          <h1 
            className="text-5xl md:text-6xl font-ui mb-24 text-center font-extrabold tracking-tight"
            style={{ 
              background: 'linear-gradient(135deg, #C451E8 0%, #6B8CFF 40%, #C451E8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(196, 81, 232, 0.6)) drop-shadow(0 0 60px rgba(107, 140, 255, 0.4))',
              animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
            }}
          >
            welcome to resolution labs.
          </h1>

          {/* Asymmetric layout with dramatic typography */}
          <div className="space-y-20">
            {/* Main headline - left-aligned, larger, Inter font */}
            <p 
              className="text-5xl md:text-6xl font-ui font-extrabold text-foreground leading-tight max-w-4xl mr-auto tracking-tight"
              style={{
                textShadow: '0 0 50px rgba(196, 81, 232, 0.4), 0 0 100px rgba(196, 81, 232, 0.2)',
                letterSpacing: '-0.03em',
                marginLeft: '0'
              }}
            >
              the AI support system for girls who feel everything.
            </p>
            
            {/* Green subtext - right-aligned, stronger effects */}
            <p 
              className="text-2xl md:text-3xl font-ui font-bold leading-relaxed max-w-2xl ml-auto" 
              style={{ 
                color: '#65C466',
                textShadow: '0 0 40px rgba(101, 196, 102, 0.6), 0 0 80px rgba(101, 196, 102, 0.3)',
                letterSpacing: '-0.01em',
                marginRight: '0'
              }}
            >
              we're building tools that make stress, love,
              <br />
              and health easier to talk about.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Community */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-20">
        {/* Floating SMS bubbles around the sides */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left side bubbles */}
          <SMSBubble 
            delay={0} 
            className="absolute left-20 top-1/4"
          >
            {testimonials[0]}
          </SMSBubble>
          
          <SMSBubble 
            delay={2} 
            className="absolute left-24 top-2/3"
          >
            {testimonials[2]}
          </SMSBubble>
          
          {/* Right side bubbles */}
          <SMSBubble 
            delay={1.5} 
            className="absolute right-20 top-1/3"
          >
            {testimonials[1]}
          </SMSBubble>
          
          <SMSBubble 
            delay={3} 
            className="absolute right-24 bottom-1/3"
          >
            {testimonials[3]}
          </SMSBubble>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <p className="text-[19px] md:text-[22px] font-body text-foreground leading-relaxed max-w-2xl mx-auto">
            every week, we share our lab notes —
            <br />
            <span className="font-bold">real stories from girls finally resolving</span>
            <br />
            <span className="font-bold">their medical mysteries.</span>
          </p>

          <Button variant="cta" size="lg" className="font-ui text-base">
            join our community →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
