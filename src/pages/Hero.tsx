import { FloatingBlob } from "@/components/ui/floating-blob";
import { SMSBubble } from "@/components/ui/sms-bubble";
import heroBlob from "@/assets/hero-blob.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-8">
      {/* Floating SMS bubbles in background */}
      <div className="absolute inset-0 pointer-events-none">
        <SMSBubble delay={0} className="absolute top-20 left-20 opacity-30">
          💬
        </SMSBubble>
        <SMSBubble delay={1.5} className="absolute top-40 right-32 opacity-30">
          ✨
        </SMSBubble>
        <SMSBubble delay={3} className="absolute bottom-32 left-40 opacity-30">
          💕
        </SMSBubble>
        <SMSBubble delay={2} className="absolute bottom-20 right-20 opacity-30">
          🌟
        </SMSBubble>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* "Meet Fabio" text above blob */}
        <h2 className="text-2xl md:text-3xl font-display italic text-foreground">
          Meet Fabio
        </h2>

        {/* Hero blob */}
        <div className="relative w-full max-w-md mx-auto">
          <FloatingBlob 
            image={heroBlob} 
            opacity={0.7}
            className="w-full h-auto"
          />
        </div>

        {/* Tagline below blob */}
        <p className="text-xl md:text-2xl font-body text-foreground max-w-2xl mx-auto leading-relaxed">
          Your sassy bestie who helps you see your relationships for what they are—life savers or time wasters.
        </p>
      </div>
    </div>
  );
};

export default Hero;
