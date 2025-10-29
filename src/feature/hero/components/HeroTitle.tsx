interface HeroTitleProps {
    greeting: string;
    name: string;
    role: string;
}

export function HeroTitle({ greeting, name, role }: HeroTitleProps) {
    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <div className="flex flex-col items-center md:flex-row md:items-center mt-2 relative w-full">
                <h1
                    className="text-3xl md:text-5xl font-bold text-center md:text-left relative w-full"
                    style={{ fontSize: '3rem', lineHeight: '1.2' }}
                >
                    {/* Saludo con punto decorativo */}
                    <span className="text-2xl font-bold relative block after:inline-block after:rounded-full after:bg-primary after:ml-2 after:w-1.5 after:h-1.5 md:after:w-2.5 md:after:h-2.5">
                        {greeting}
                    </span>

                    {/* Nombre con línea decorativa */}
                    <span className="text-xl font-medium md:ml-2 relative block">
                        Soy {name}
                        <span
                            aria-hidden="true"
                            className="hidden md:block absolute left-[-1508px] top-1/2 -translate-y-1/2 w-[1500px] h-1 bg-primary"
                        />
                    </span>

                    {/* Línea decorativa mobile */}
                    <span
                        aria-hidden="true"
                        className="block w-30 h-1 bg-primary mt-1 mx-auto md:hidden"
                    />

                    {/* Rol/Título */}
                    <span className="block text-3xl md:text-4xl font-bold mt-2 md:mt-0">
                        {role}
                    </span>
                </h1>
            </div>
        </div>
    )
}