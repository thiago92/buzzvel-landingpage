export interface CustomButtonProps {
    className?: string;
    text: string;
    img?: ImgProps;
}

interface ImgProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}