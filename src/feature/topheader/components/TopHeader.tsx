import { TopHeaderData } from "../types";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

interface TopHeaderProps {
  data: TopHeaderData;
}

export function TopHeader({ data }: TopHeaderProps) {
  return (
    <header className="shadow-xs sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 py-4 md:py-4"
        aria-label="Navegación principal"
      >
        <Logo
          text={data.logo.text}
          url={data.logo.url}
          highlight={data.logo.highlight}
        />
        <SocialLinks links={data.socialLinks} />
      </nav>
    </header>
  )
}