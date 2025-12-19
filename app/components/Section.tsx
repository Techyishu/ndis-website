import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    description?: string;
    children: ReactNode;
    variant?: 'light' | 'warm' | 'gradient';
    className?: string;
}

export default function Section({
    id,
    title,
    description,
    children,
    variant = 'light',
    className = '',
}: SectionProps) {
    const bgClasses = {
        light: 'bg-background',
        warm: 'bg-muted',
        gradient: 'bg-warm-gradient',
    };

    return (
        <section
            id={id}
            className={`section-padding ${bgClasses[variant]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || description) && (
                    <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
                        {title && (
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
