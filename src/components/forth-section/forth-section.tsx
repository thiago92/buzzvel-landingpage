'use client';

import Image from "next/image";
import CustomButton from "../custom-button/custom-button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ForthSection() {
	const leftRef = useRef(null);
	const rightRef = useRef(null);

	const isLeftInView = useInView(leftRef, { once: true });
	const isRightInView = useInView(rightRef, { once: true });

	return(
		<section className="flex items-center justify-center w-full h-[811px] lg:mt-0 mt-[60px] lg:p-0 p-[15px]">
			<div className="container flex lg:flex-row flex-col items-center bg-[url(/plane-departure.png)] bg-no-repeat bg-[length:64px_64px] bg-[position:1290px_80px]">
				<motion.div 
					ref={leftRef}
					initial={{ opacity: 0, x: -80 }}
					animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 1, ease: "easeOut" }}  
					className="lg:w-1/2 w-full lg:order-1 order-2"
				>
					<Image src="/Col-2.png" alt="Col" width={600} height={651}/>
				</motion.div>
				<motion.div
					ref={rightRef}
					initial={{ opacity: 0, x: 80 }}
					animate={isRightInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 1, ease: "easeOut" }} 
					className="lg:w-1/2 w-full flex flex-col items-center lg:gap-[40px] gap-[30px] lg:order-2 order-1"
				>
					<h3>
                        Meet international students & teachers
					</h3>
					<p className="lg:text-[20px] font-[400] text-[16px]">
                        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
					</p>
					<CustomButton text="Explore teachers and students" className="flex items-center justify-start w-full font-medium lg:text-[24px] text-[16px] text-[#2563eb] cursor-pointer h-16 max-h-16 gap-4" 
						img={{
							src: "/Vector.png",
							alt: "Explore teachers and students",
							width: 20,
							height: 20,
						}}
						imgPosition="right"
					/>
				</motion.div>
			</div>
		</section>
	);
}