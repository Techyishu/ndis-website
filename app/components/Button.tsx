import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    href?: never;
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
    href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    fullWidth = false,
    href,
    ...props
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'text-white hover:bg-primary-dark focus:ring-primary-light shadow-lg hover:shadow-xl',
        secondary: 'text-white hover:bg-secondary-dark focus:ring-secondary-light shadow-lg hover:shadow-xl',
        accent: 'font-extrabold focus:ring-accent-light shadow-xl hover:shadow-2xl',
        outline: 'bg-white border-2 border-primary hover:bg-primary focus:ring-primary shadow-md',
        tertiary: 'text-primary hover:text-primary-dark underline underline-offset-4 decoration-2 hover:decoration-primary-dark',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm rounded-lg min-h-[40px]',
        md: 'px-6 py-3 text-base rounded-xl min-h-[48px]',
        lg: 'px-8 py-4 text-lg rounded-xl min-h-[56px]',
    };

    // Special gradient styling for accent variant
    const accentStyle = variant === 'accent' ? {
        background: 'linear-gradient(135deg, #4C43A0 0%, #60439F 100%)',
        color: '#FFFFFF',
        boxShadow: '0 8px 24px rgba(76, 67, 160, 0.4)',
    } : {};
    
    // Add background colors for primary and secondary variants
    const primaryStyle = variant === 'primary' ? {
        background: 'linear-gradient(135deg, #026189 0%, #3A6899 100%)',
        color: '#FFFFFF',
    } : {};
    
    const secondaryStyle = variant === 'secondary' ? {
        background: 'linear-gradient(135deg, #0F897D 0%, #087173 100%)',
        color: '#FFFFFF',
    } : {};
    
    const outlineStyle = variant === 'outline' ? {
        color: '#026189',
    } : {};
    
    const combinedStyle = { ...accentStyle, ...primaryStyle, ...secondaryStyle, ...outlineStyle };

    const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${variant === 'tertiary' ? '' : 'hover:-translate-y-0.5 active:translate-y-0'}
    ${className}
  `.trim();

    if (href) {
        return (
            <Link
                href={href}
                className={combinedClasses}
                style={combinedStyle}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={combinedClasses}
            style={combinedStyle}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
