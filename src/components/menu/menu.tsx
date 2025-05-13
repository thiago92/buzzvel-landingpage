"use client";

import Image from "next/image";
import CustomButton from "../custom-button/custom-button";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.header 
			ref={ref}
			initial={{ opacity: 0, y: -40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="flex items-center justify-center bg-white w-full"
		>
			{/* Desktop */}
			<div className="container hidden lg:flex flex-row items-center justify-between h-40">
				<nav className="flex items-center p-4 bg-white gap-24">
					<Image src="/Logo-colored.png" alt="logo" width={103} height={35} />
					<ul className="flex items-center size-16 font-medium gap-24">
						<li><a href="#">Products</a></li>
						<li><a href="#">Solutions</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Resources</a></li>
					</ul>
				</nav>
				<div className="flex items-center gap-12 w-auto bg-white">
					<CustomButton className="bg-white text-black font-medium" text="Log In" />
					<CustomButton className="bg-white text-black border-2 rounded-lg px-6 py-3 font-medium" text="Sign Up Now" />
				</div>
			</div>

			{/* Mobile */}
			<div className="container lg:hidden w-full bg-white">
				<nav className="flex items-center justify-between bg-white w-full px-[10px] py-4">
					<Image src="/Logo-colored.png" alt="logo" width={103} height={35} />
					<CustomButton
						text=""
						className="cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
						img={{
							src: "/menu-outline.png",
							alt: "Menu",
							width: 44,
							height: 44,
						}}
						imgPosition="right"
					/>
				</nav>

				{/* Menu mobile */}
				<div
					className={`transition-all duration-500 ease-in-out overflow-hidden bg-white px-6 ${
						isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
					}`}
				>
					<ul className="flex flex-col gap-4 font-medium text-lg">
						<li><a href="#">Products</a></li>
						<li><a href="#">Solutions</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Resources</a></li>
					</ul>
					<div className="flex flex-col gap-4 mt-4">
						<CustomButton className="bg-white text-black font-medium border border-black" text="Log In" />
						<CustomButton className="bg-black text-white rounded-lg px-6 py-3 font-medium" text="Sign Up Now" />
					</div>
				</div>
			</div>
		</motion.header>
	);
}
