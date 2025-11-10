interface AboutMeDescriptionProps {
    description: string;
}

export function AboutMeDescription({ description }: AboutMeDescriptionProps) {
    return (
        <p>{description}</p>
    );
}