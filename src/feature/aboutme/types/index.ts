
export interface TitleSegment {
    text: string;
    isHighlighted?: boolean;
}

export interface AboutContent {
    title: TitleSegment[];
    description: string;
}

export interface AboutMeProps {
    data: AboutContent;
}