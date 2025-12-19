"use client";

import { useState, useRef, useEffect, ReactNode } from 'react';

interface AccordionItemProps {
    id: string;
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ id, title, children, isOpen, onToggle }: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(0);

    useEffect(() => {
        if (isOpen) {
            const contentHeight = contentRef.current?.scrollHeight;
            setHeight(contentHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-b border-border last:border-b-0">
            <button
                id={`accordion-button-${id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${id}`}
                onClick={onToggle}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            >
                <span className="text-lg font-semibold text-foreground pr-8">
                    {title}
                </span>
                <svg
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                id={`accordion-panel-${id}`}
                role="region"
                aria-labelledby={`accordion-button-${id}`}
                style={{ height: `${height}px` }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div ref={contentRef} className="px-6 pb-6 pt-2">
                    <div className="text-muted-foreground leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: Array<{
        id: string;
        title: string;
        content: ReactNode;
    }>;
    allowMultiple?: boolean;
    defaultOpenIds?: string[];
    className?: string;
}

export default function Accordion({
    items,
    allowMultiple = false,
    defaultOpenIds = [],
    className = '',
}: AccordionProps) {
    const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

    const handleToggle = (id: string) => {
        if (allowMultiple) {
            setOpenIds((prev) =>
                prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
            );
        } else {
            setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className={`bg-white rounded-2xl border border-border overflow-hidden shadow-md ${className}`}>
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    isOpen={openIds.includes(item.id)}
                    onToggle={() => handleToggle(item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
