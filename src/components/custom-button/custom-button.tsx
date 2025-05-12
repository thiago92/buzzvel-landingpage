import { CustomButtonProps } from "@/interface/custom-Button-Props";
import Image from "next/image";
  
export default function CustomButton({ 
    className = "", 
    text, 
    img,
    imgPosition = "left",
    onClick
}: CustomButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {img && imgPosition === "left" && (
                <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className}
                />
            )}
            {text}
            {img && imgPosition === "right" && (
                <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className}
                />
            )}
        </button>
    );
}
  