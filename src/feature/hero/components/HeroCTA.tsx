import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
}

interface HeroCTAProps {
  primary: CTAButton;
  secondary: CTAButton;
}

export function HeroCTA({ primary, secondary }: HeroCTAProps) {

  const btnBase = "w-34 h-9 md:w-38 md:h-10 rounded-full font-medium transition-colors duration-200";

  return (
    <div className="flex flex-row gap-2 mt-2 md:mt-6">

      <Link href={primary.href}
        className={`bg-primary hover:bg-[#0d8ed8] text-white ${btnBase} flex items-center justify-center`}
        aria-label={`${primary.label} - Navegar a proyectos`}
      >
        {primary.label}
      </Link>

      <Link href={secondary.href}
        className={`border border-primary text-primary ${btnBase} flex items-center justify-center`}
        aria-label={`${secondary.label} - Navegar a contacto`}
      >
        {secondary.label}
      </Link>
    </div>
  )
}