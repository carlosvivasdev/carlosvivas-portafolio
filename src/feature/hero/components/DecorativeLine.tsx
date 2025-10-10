interface DecorativeLineProps {
    className?: string;
}

export function DecorativeLine({ className = "" }: DecorativeLineProps) {
    return (
        <span
            aria-hidden="true"
            className={`absolute right-4 bottom-0 w-1 h-[220px] bg-[#12ACFF] md:right-12 md:top-1/2 md:bottom-auto md:-translate-y-1/2 ${className}`}
        />
    );
}