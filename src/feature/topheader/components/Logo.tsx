import Link from "next/link";

interface LogoProps {
    text: string;
    url: string;
    highlight: string;
}

export function Logo({ text, url, highlight }: LogoProps) {
    return (
        <Link href={url} className="group">
            <span className="text-xl md:text-2xl md:font-semibold font-bold cursor-pointer inline-block">
                {text}
                <span className="text-primary">{highlight}</span>
            </span>

        </Link>
    )
}