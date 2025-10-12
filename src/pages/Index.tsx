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
        {/* Sci-fi grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(hsl(290 75% 62% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(290 75% 62% / 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Custom floating blobs with glow */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {/* Pastel yellow blob with glow */}
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
          
          {/* Pastel purple blob with glow */}
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
          
          {/* Pastel green blob with glow */}
          <div 
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, hsl(120, 65%, 80%) 0%, hsl(120, 65%, 85%) 100%)',
              boxShadow: '0 0 60px 30px hsl(120, 65%, 80% / 0.3)',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '1s',
              willChange: 'transform'
            }}
          />
          
          {/* Baby pink blob with glow */}
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

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header with gradient and glow */}
          <h1 
            className="text-3xl md:text-4xl font-ui mb-20 text-center font-bold"
            style={{ 
              background: 'linear-gradient(135deg, #C451E8 0%, #6B8CFF 50%, #C451E8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(196, 81, 232, 0.4))',
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            welcome to resolution labs.
          </h1>

          {/* Main content with staggered layout */}
          <div className="space-y-16">
            <p className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight max-w-3xl">
              the AI support system for girls who feel everything.
            </p>
            
            <p className="text-xl md:text-2xl font-ui font-bold leading-relaxed max-w-2xl ml-auto" style={{ color: '#65C466' }}>
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
