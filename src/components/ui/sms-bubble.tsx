interface SMSBubbleProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const SMSBubble = ({ 
  children, 
  delay = 0,
  className = "" 
}: SMSBubbleProps) => {
  return (
    <div 
      className={`bg-bright-green text-white px-4 py-2 rounded-2xl text-sm font-body max-w-xs animate-float-bubble ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
