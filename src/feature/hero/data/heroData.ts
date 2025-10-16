import type { HeroData } from "../types";

export const heroData: HeroData = {
  greeting: "Hola",
  name: "Carlos Vivas",
  role: "Software Developer",
  description: "Soy Carlos Vivas apasionado por la automatización, Kubernetes, CI/CD y Cloud. Ayudo a equipos a construir infraestructuras resilientes y eficientes.",
  descriptionShort: "Automatización, Kubernetes, CI/CD y Cloud",
  cta: {
    primary: {
      label: "Ver Proyectos",
      href: "/projects"
    },
    secondary: {
      label: "Contactame",
      href: "/contact"
    }
  },
  animation: {
    src: "/lotties/5.webm",
    ariaLabel: "Developer Animation"
  }
};

