import { CustomButtonProps } from "@/interface/custom-Button-Props";
import Image from "next/image";
  
export default function CustomButton({ className = "", text, img }: CustomButtonProps) {
    return (
        <button className={className}>
            {img && (
                <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className}
                />
            )}
            {text}
        </button>
    );
}
  