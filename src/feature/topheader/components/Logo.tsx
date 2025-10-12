import Link from "next/link";

interface LogoProps {
    text: string;
    url: string;
    highlight: string;
}

export function Logo({ text, url, highlight }: LogoProps) {
    return (
        <Link href={url} className="group">
            <span className="text-xl md:text-2xl md:font-semibold font-bold cursor-pointer transition-transform duration-300 group-hover:scale-105 inline-block">
                {text}
            </span>
            <span className="text-[#12ACFF]">{highlight}</span>
        </Link>
    )
}