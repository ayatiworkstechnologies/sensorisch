import Link from "next/link";
import { clsx } from "clsx";

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-secondary px-6 py-2.5 rounded-md text-lg font-semibold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white shadow hover:bg-white hover:text-primary border border-primary",
    outline: "border border-primary/60 text-primary hover:bg-primary hover:text-white",
  };

  const combinedClassName = clsx(baseStyles, variants[variant], className);

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClassName} 
          target="_blank" 
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={combinedClassName} 
      {...props}
    >
      {children}
    </button>
  );
}
