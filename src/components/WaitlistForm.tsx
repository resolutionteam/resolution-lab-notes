import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface WaitlistFormProps {
  referralCode?: string;
  onSuccess: (position: number, referralCode: string, firstName: string) => void;
}

export const WaitlistForm = ({ referralCode, onSuccess }: WaitlistFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (!match) return value;
    
    const [, areaCode, prefix, suffix] = match;
    
    if (suffix) {
      return `(${areaCode}) ${prefix}-${suffix}`;
    } else if (prefix) {
      return `(${areaCode}) ${prefix}`;
    } else if (areaCode) {
      return `(${areaCode}`;
    }
    
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // CLIENT-SIDE VALIDATION NOTE: This validation is for UX only.
    // All security validation happens server-side in the edge function.
    // Malicious users can bypass this by calling the API directly.
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('waitlist-signup', {
        body: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phone: cleanPhone,
          referralCode: referralCode || undefined,
        },
      });

      if (error) {
        console.error('Waitlist signup error:', error);
        // Display specific error message if available
        const errorMessage = error.message || "Failed to join waitlist. Please try again.";
        toast.error(errorMessage);
        return;
      }

      if (data.error) {
        if (data.error === 'Phone number already registered') {
          toast.error("This phone number is already on the waitlist!");
        } else if (data.error === 'Rate limit exceeded') {
          toast.error("Too many attempts. Please wait a moment and try again.");
        } else {
          toast.error(data.error);
        }
        return;
      }

      if (data.success) {
        onSuccess(data.position, data.referralCode, firstName);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-foreground font-ui">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Sarah"
            className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            disabled={isSubmitting}
            required
            maxLength={50}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-foreground font-ui">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Johnson"
            className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            disabled={isSubmitting}
            required
            maxLength={50}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-ui">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="(555) 123-4567"
            className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            disabled={isSubmitting}
            maxLength={14}
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Fabio is saving your spot..." : "Join the Waitlist"}
      </Button>
    </form>
  );
};