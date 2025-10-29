import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { SocialLink } from "../types";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";


interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const iconMap: Record<string, IconDefinition> = {
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  github: faGithub,
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`gap-1 md:gap-3 flex ${className}`}>
      {links.map((link) => (
        <a
          href={link.url}
          key={link.name}
          aria-label={link.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
        >
          <FontAwesomeIcon
            icon={iconMap[link.icon]}
            className="w-5 h-5"
            size="xl" />
        </a>
      ))}
    </div>
  );
}
