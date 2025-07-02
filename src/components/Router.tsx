"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface RouterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const RouterLink: React.FC<RouterLinkProps> = ({ 
  href, 
  children, 
  className = "", 
  activeClassName = "" 
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </Link>
  );
};
