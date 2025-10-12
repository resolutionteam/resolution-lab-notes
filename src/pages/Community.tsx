import { SMSBubble } from "@/components/ui/sms-bubble";
import { Button } from "@/components/ui/button";

const Community = () => {
  const testimonials = [
    "I finally stopped texting him. My rash is gone now.",
    "My mom and I argue less when I slept more.",
    "I got my period back after I told my situationship to f*ck off.",
    "Turns out I wasn't mad bec of my roommate, it was just caffeine"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-20">
      {/* Floating SMS bubbles cluster */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-2xl">
          <SMSBubble 
            delay={0} 
            className="absolute -top-32 left-1/4 transform -translate-x-1/2"
          >
            {testimonials[0]}
          </SMSBubble>
          
          <SMSBubble 
            delay={1.5} 
            className="absolute -top-10 right-1/4 transform translate-x-1/2"
          >
            {testimonials[1]}
          </SMSBubble>
          
          <SMSBubble 
            delay={3} 
            className="absolute top-16 left-1/3 transform -translate-x-1/2"
          >
            {testimonials[2]}
          </SMSBubble>
          
          <SMSBubble 
            delay={2} 
            className="absolute top-32 right-1/3 transform translate-x-1/2"
          >
            {testimonials[3]}
          </SMSBubble>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10 mt-96">
        <p className="text-2xl md:text-3xl font-body text-foreground leading-relaxed max-w-2xl mx-auto">
          Every week, we share our lab notes — real stories from girls finally resolving their medical mysteries
        </p>

        <Button variant="cta" size="lg" className="font-ui">
          Join our community →
        </Button>
      </div>
    </div>
  );
};

export default Community;
