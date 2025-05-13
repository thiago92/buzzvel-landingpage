'use client'

import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"
import { textListSecondSection } from "@/data/text-list-second-section"
import { cardListSecontSection, cardListSecontSectionMobile } from "@/data/card-list-second-section"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SecondSection() {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    const isLeftInView = useInView(leftRef, { once: true })
    const isRightInView = useInView(rightRef, { once: true })

    return(
        <section className="flex items-center justify-center w-full h-[706.97px] lg:mt-0 mt-[120px]">
            <div className="container flex lg:flex-row flex-col items-center justify-between pt-20 pb-20 px-[15px]">
                <motion.div 
                    ref={leftRef}
                    initial={{ opacity: 0, x: -80 }}
                    animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col lg:w-[50%] w-full bg-[url(/Vector-14.png)] bg-no-repeat lg:bg-[length:275px_25px] lg:bg-[position:90px_45px] bg-[length:115px_8px] bg-[position:35px_20px] gap-10"
                >
                    <h3>An all-in-one app that makes it easier</h3>
                    <div>
                        {textListSecondSection.map((text, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <Image src="/check.png" alt="check" width={45} height={45} />
                                <p className="text-[20px] font-normal">
                                    {text.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-8">
                        <CustomButton text="Find more about the app" className="flex items-center justify-start w-full font-medium text-[24px] text-[#2563eb] cursor-pointer h-16 max-h-16 gap-4" 
                            img={{
                                src: "/Vector.png",
                                alt: "Find more about the app",
                                width: 20,
                                height: 20,
                            }}
                            imgPosition="right"
                        />
                    </div>
                </motion.div>
                <motion.div
                    ref={rightRef}
                    initial={{ opacity: 0, x: 80 }}
                    animate={isRightInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-1/2 w-full flex flex-col items-center justify-center"
                >
                    <Image
                        src="/desktop-blob.png"
                        alt="Group"
                        width={900}
                        height={900}
                    />
                    <div className="hidden lg:flex items-center justify-center w-full lg:mt-[-180px] mt-0 gap-[20px]">
                        {cardListSecontSection.map((text, index) => (
                            <div key={index} className="flex flex-col items-start justify-between p-[14px] bg-white rounded-[10px] w-[200.33px] h-[232px] max-h-[232px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                                <span className={`${text.spanBackgroundColor} ${text.spanTextColor} rounded-[4px] p-[4px] font-[400] text-[14px]`}>
                                    {text.span}
                                </span>
                                <h4>
                                    {text.title}
                                </h4>
                                <p className="text-[14px] font-[400] text-[#0F172A]">
                                    {text.p}
                                </p>
                                <CustomButton text={text.button} className="pr-[12px] pl-[12px] pt-[8px] pb-[8px] rounded-[8px] border-[2px] border-[#2563EB] font-[500] text-[14px] text-[#2563EB] w-full"/>
                            </div>
                        ))}
                    </div>
                    <div className="flex lg:hidden items-center justify-center w-full lg:mt-[-180px] mt-[-100px] gap-[10px]">
                        {cardListSecontSectionMobile.map((text, index) => (
                            <div key={index} className="flex flex-col items-start justify-between p-[20px] bg-white rounded-[10px] w-[200.33px] h-[232px] max-h-[232px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                                <span className={`${text.spanBackgroundColor} ${text.spanTextColor} rounded-[4px] p-[4px] font-[400] text-[14px]`}>
                                    {text.span}
                                </span>
                                <h4>
                                    {text.title}
                                </h4>
                                <p className="text-[12px] font-[400] text-[#0F172A]">
                                    {text.p}
                                </p>
                                <CustomButton text={text.button} className="pr-[12px] pl-[12px] pt-[8px] pb-[8px] rounded-[8px] border-[2px] border-[#2563EB] font-[500] text-[14px] text-[#2563EB] w-full"/>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}