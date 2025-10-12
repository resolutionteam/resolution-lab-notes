interface FloatingBlobProps {
  image: string;
  opacity?: number;
  className?: string;
  delay?: number;
}

export const FloatingBlob = ({ 
  image, 
  opacity = 0.7, 
  className = "",
  delay = 0 
}: FloatingBlobProps) => {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        opacity 
      }}
    >
      <img 
        src={image} 
        alt="" 
        className="w-full h-full object-contain"
        draggable="false"
      />
    </div>
  );
};
