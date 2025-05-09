import { CustomButtonProps } from "@/interface/custom-Button-Props";
import Image from "next/image";
  
export default async function CustomButton({ 
    className = "", 
    text, 
    img,
    imgPosition = "left"
}: CustomButtonProps) {
    return (
        <button className={className}>
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
  