import { FloatingBlob } from "@/components/ui/floating-blob";
import pastelBlobs from "@/assets/pastel-blobs.png";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-8">
      {/* Floating pastel blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <FloatingBlob 
          image={pastelBlobs}
          opacity={0.6}
          delay={0}
          className="absolute top-20 left-10 w-64 h-64"
        />
        <FloatingBlob 
          image={pastelBlobs}
          opacity={0.5}
          delay={2}
          className="absolute bottom-32 right-20 w-72 h-72"
        />
        <FloatingBlob 
          image={pastelBlobs}
          opacity={0.4}
          delay={1}
          className="absolute top-1/3 right-1/4 w-48 h-48"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-display text-foreground mb-12">
          Welcome to Resolution Labs.
        </h1>

        {/* Two-line copy with different weights */}
        <div className="space-y-6">
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
            the AI support system for girls who feel everything.
          </p>
          
          <p className="text-xl md:text-2xl font-body text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            We're building tools that make stress, love, and health easier to talk about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
