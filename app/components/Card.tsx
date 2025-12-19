import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'warm' | 'elevated';
    hover?: boolean;
    onClick?: () => void;
}

export default function Card({
    children,
    className = '',
    variant = 'default',
    hover = false,
    onClick,
}: CardProps) {
    const variantClasses = {
        default: 'bg-white border border-border',
        warm: 'card-warm',
        elevated: 'bg-white shadow-xl border border-border',
    };

    const interactiveClasses = onClick ? 'cursor-pointer' : '';
    const hoverClasses = hover ? 'hover-lift' : '';

    return (
        <div
            className={`
        rounded-2xl p-6 sm:p-8
        ${variantClasses[variant]}
        ${hoverClasses}
        ${interactiveClasses}
        ${className}
      `.trim()}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
        >
            {children}
        </div>
    );
}
