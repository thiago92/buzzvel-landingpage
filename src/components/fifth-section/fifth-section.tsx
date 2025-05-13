'use client'

import { dataFifthSection } from "@/data/data-fifth-section";
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function FitthSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return(
        <section className="flex lg:flex-row flex-col items-center justify-center w-full lg:h-[373px] h-[657px] bg-[#0F172A] lg:gap-0 gap-[30px]">
            {dataFifthSection.map((item, index) => (
                <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, y: item.period }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: item.speedAnimetion, ease: "easeOut" }} 
                    key={index} 
                    className="flex flex-col items-center justify-center w-[33.33%] gap-[5px]"
                >
                    <Image src={item.img} alt={item.img} width={64} height={64}/>
                    <p className="lg:text-[72px] text-[48px] font-[800] text-[#FACC15]">
                        {item.information}
                    </p>
                    <p className="lg:text-[20px] text-[16px] font-[400] text-[#FACC15]">
                        {item.detail}
                    </p>
                </motion.div>
            ))}
        </section>
    )
}