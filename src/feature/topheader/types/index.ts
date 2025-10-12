
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface TopHeaderData {
  logo: {
    text: string;
    url: string;
    highlight: string;
  },
  socialLinks: SocialLink[];
}