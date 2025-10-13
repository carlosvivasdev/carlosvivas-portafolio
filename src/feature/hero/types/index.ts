export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  description: string;
  descriptionShort: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  animation: {
    src: string;
    ariaLabel: string;
  }
}

export interface HeroProps {
  data: HeroData;
}