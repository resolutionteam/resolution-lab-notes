import { Button } from "@/components/ui/button";
import { Copy, MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface WaitlistSuccessProps {
  position: number;
  firstName: string;
  referralCode: string;
}

export const WaitlistSuccess = ({ position, firstName, referralCode }: WaitlistSuccessProps) => {
  const referralLink = `${window.location.origin}?ref=${referralCode}`;
  
  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
  };

  const shareViaSMS = () => {
    const message = `Hey! I just joined the waitlist for Fabio, an AI bestie that helps fix your situationship. Join me: ${referralLink}`;
    const smsLink = `sms:?&body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 animate-fade-in text-center">
      {/* Position Reveal */}
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-display font-bold" style={{ color: '#C451E8' }}>
          #{position}
        </h2>
        <p className="text-xl md:text-2xl font-body text-foreground">
          You're in line, {firstName}! 🎉
        </p>
        <p className="text-base md:text-lg font-body font-semibold text-bright-green">
          Move up the list by referring friends
        </p>
      </div>

      {/* Referral Section */}
      <div className="space-y-4 p-6 rounded-2xl bg-background/50 border border-primary/20">
        <h3 className="text-lg font-display font-semibold text-foreground">
          Your Referral Link
        </h3>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 px-4 py-2 rounded-xl bg-background border border-input text-sm font-mono text-foreground"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={copyReferralLink}
            className="shrink-0"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Each friend who joins moves you up <span className="font-bold" style={{ color: '#C451E8' }}>5 spots</span>
        </p>

        <Button
          variant="cta"
          size="lg"
          onClick={shareViaSMS}
          className="w-full gap-2"
        >
          <MessageSquare className="w-5 h-5" />
          Share via Text
        </Button>
      </div>
    </div>
  );
};