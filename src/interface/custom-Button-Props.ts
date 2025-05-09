export interface CustomButtonProps {
    className?: string;
    text: string;
    img?: ImgProps;
    imgPosition?: "left" | "right";
}

interface ImgProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}