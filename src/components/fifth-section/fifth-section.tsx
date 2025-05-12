import { dataFifthSection } from "@/data/data-fifth-section";
import Image from "next/image"

export default async function FitthSection() {
    return(
        <section className="flex items-center justify-center w-full h-[373px] bg-[#0F172A]">
            {dataFifthSection.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-[33.33%] gap-[5px]">
                    <Image src={item.img} alt={item.img} width={64} height={64}/>
                    <p className="text-[72px] font-[800] text-[#FACC15]">
                        {item.information}
                    </p>
                    <p className="text-[20px] font-[400] text-[#FACC15]">
                        {item.detail}
                    </p>
                </div>
            ))}
        </section>
    )
}