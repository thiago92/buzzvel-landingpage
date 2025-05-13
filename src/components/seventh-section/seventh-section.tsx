'use client'

import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SeventhSection() {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    const isLeftInView = useInView(leftRef, { once: true })
    const isRightInView = useInView(rightRef, { once: true })

    return(
        <section className="flex items-center justify-center w-full lg:h-[706.97px] h-auto">
            <div className="container flex lg:flex-row flex-col items-center justify-between pt-20 pb-20">
                <motion.div 
                    ref={leftRef}
                    initial={{ opacity: 0, x: -80 }}
                    animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="flex flex-col justify-center lg:w-[50%] w-full bg-[url(/Vector-14.png)] bg-no-repeat lg:bg-[length:240px_30px] lg:bg-[position:320px_45px] bg-[length:95px_10px] bg-[position:150px_35px] gap-10 z-10 lg:p-0 p-[15px]"
                >
                    <h3 className="whitespace-nowrap">
                        All the cool features
                    </h3>
                    <p className="lg:text-[24px] text-[16px] font-[400]">
                        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                    <div className="flex items-center gap-8">
                        <CustomButton text="View all the features" className="flex items-center justify-start w-full font-medium lg:text-[24px] text-[16px] text-[#2563eb] cursor-pointer h-16 max-h-16 gap-4" 
                            img={{
                                src: "/Vector.png",
                                alt: "View all the features",
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
                    className="lg:w-1/2 w-[160%] flex flex-col items-center justify-center lg:mt-[-300px] mt-0 z-1"
                >
                    <Image
                        src="/group-2.png"
                        alt="Group"
                        className="lg:ml-0 ml-[70px]"
                        width={900}
                        height={900}
                    />
                    <div className="flex items-start justify-start w-full 2xl:mt-[-495px] mt-[-475px] 2xl:ml-[200px] ml-[180px] pl-[60px] pr-[60px]">
                        <div className="flex flex-col items-start justify-between lg:p-[14px] p-[20px] bg-white rounded-[10px] w-[200.33px] h-[232px] max-h-[232px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                            <span className="bg-[#DBEAFE] text-[#1E40AF] rounded-[4px] p-[4px] font-[400] text-[14px]">
                                Popular
                            </span>
                            <h4>
                                Design for how people think
                            </h4>
                            <p className="lg:text-[14px] text-[12px] font-[400] text-[#0F172A]">
                                Aliquam ut euismod condimentum elementum ultricies volutpat sit non. 
                            </p>
                            <CustomButton text="Take Lesson" className="pr-[12px] pl-[12px] pt-[8px] pb-[8px] rounded-[8px] border-[2px] border-[#2563EB] font-[500] text-[14px] text-[#2563EB] w-full"/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}