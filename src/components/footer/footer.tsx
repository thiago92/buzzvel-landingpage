import Image from "next/image";

export default async function Footer() {
	return (
		<section className="w-full lg:h-[420px] h-[auto] bg-[#0F172A] flex items-center justify-center">
			<div className="container flex flex-col items-center justify-center lg:p-0 p-[15px]">
				<div className="lg:h-[324px] flex lg:flex-row flex-col items-start justify-between w-full pt-[48px] lg:gap-0 gap-[50px] lg:pb-0 pb-[40px]">
					<div>
						<Image src="/Column.png" alt="logo" width={173.33} height={35} />
					</div>
					<div>
						<ul className="text-[#E2E8F0] font-[400] text-[16px] flex flex-col gap-[26px]">
							<li className="font-[500]">Product</li>
							<li>Pricing</li>
							<li>Overview</li>
							<li>Browse</li>
							<li className="flex">Accessibility <span className="text-[#6B21A8] text-[12px] bg-[#F3E8FF] rounded-[4px] p-[2px] ml-[5px]">BETA</span></li>
						</ul>
					</div>
					<div>
						<ul className="text-[#E2E8F0] font-[400] text-[16px] flex flex-col gap-[26px]">
							<li className="font-[500]">Solutions</li>
							<li>Brainstorming</li>
							<li>Ideation</li>
							<li>Wireframing</li>
							<li className="flex">Research</li>
						</ul>
					</div>
					<div>
						<ul className="text-[#E2E8F0] font-[400] text-[16px] flex flex-col gap-[26px]">
							<li className="font-[500]">Resources</li>
							<li>Help Center</li>
							<li>Blog</li>
							<li>Tutorials</li>
							<li className="flex">FAQs</li>
						</ul>
					</div>
					<div>
						<ul className="text-[#E2E8F0] font-[400] text-[16px] flex flex-col gap-[26px]">
							<li className="font-[500]">Support</li>
							<li>Contact Us</li>
							<li>Developers</li>
							<li>Documentation</li>
							<li className="flex">Integrations</li>
						</ul>
					</div>
					<div>
						<ul className="text-[#E2E8F0] font-[400] text-[16px] flex flex-col gap-[26px]">
							<li className="font-[500]">Company</li>
							<li>About</li>
							<li>Press</li>
							<li>Events</li>
							<li className="flex">Request Demo <Image src="/arrow-right.png" alt="arrow-right" width={24} height={24} /></li>
						</ul>
					</div>
				</div>
				<div className="border-t border-t-[#334155] w-full flex lg:flex-row flex-col items-center justify-between lg:h-[96px] h-[142px] lg:pt-0 pt-[30px] lg:pb-0 pb-[20px]">
					<div className="flex items-center justify-start w-full">
						<p className="font-[400] text-[#E2E8F0] text-[16px] text-start w-full">
                            uteach @ 2023. All rights reserved.
						</p>
					</div>
					<div>
						<ul className="flex items-center justify-between text-[#E2E8F0] font-[400] text-[16px] gap-8">
							<li>Terms</li>
							<li>Privacy</li>
							<li>Contact</li>
							<li className="flex"><Image src="/world.png" alt="world" width={24} height={24} /> EN</li>
							<li className="flex"><Image src="/euro.png" alt="euro" width={24} height={24} /> EUR</li>
							<li><Image src="/accessibility.png" alt="accessibility" width={24} height={24} /></li>
						</ul>
					</div>
				</div>
			</div>

		</section>
	);
}