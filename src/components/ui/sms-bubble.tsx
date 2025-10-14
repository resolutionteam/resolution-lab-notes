interface SMSBubbleProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SMSBubble = ({ 
  children, 
  delay = 0,
  className = "",
  style = {}
}: SMSBubbleProps) => {
  return (
    <div 
      className={`bg-bright-green text-white px-4 py-2 text-sm font-ui max-w-[200px] animate-float-bubble ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        borderRadius: '18px 18px 18px 4px',
        ...style
      }}
    >
      {children}
    </div>
  );
};
