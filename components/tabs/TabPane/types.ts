export interface IProps {
    id: string;
    title: string;
    imageURL: string;
    markdownContent: any;
    gallery?: IGalleryItem[];
    useCaseImage?: any;
    c2aURL?: string;
    selected?: boolean;
}

interface IGalleryItem {
    title: string;
    url: string
}