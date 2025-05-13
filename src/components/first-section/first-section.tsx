import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"
import { imageListFirstSection } from "@/data/image-list-first-section"

export default async function FirstSection() {
    return(
        <section className="flex items-center justify-center w-full">
            <div className="container flex lg:flex-row flex-col items-center justify-between lg:pt-20 lg:pb-20 py-[48px] px-[16px]">
                <div className="flex flex-col lg:w-[45%] w-[100%] bg-[url(/Vector-14.png)] bg-no-repeat lg:bg-[length:205px_20px] lg:bg-[position:5px_65px] bg-[length:115px_17.5px] bg-[position:0px_35px] lg:gap-16 gap-10 mb-[40px] lg:-mb-0">
                    <h2>Teach students worldwide</h2>
                    <p className="lg:text-[24px] text-[16px] font-[400]">
                        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                    </p>
                    <div className="flex items-center gap-8">
                        <CustomButton text="Sign Up Now" className="bg-[#EA580C] text-white hover:bg-[#EA580C]/80 rounded-lg w-auto lg:text-[24px] text-[16px] lg:font-[700] font-[500] max-h-[64px] h-[64px] pr-12 pl-12 cursoor-pointer"/>
                        <CustomButton text="View Demo" className="flex items-center justify-evenly w-32 lg:font-medium font-[500] lg:text-[20px] text-[16px] text-[#2563eb] cursor-pointer h-16 max-h-16" 
                            img={{
                                src: "/play-circle.png",
                                alt: "View Demo",
                                width: 20,
                                height: 20,
                            }}
                        />
                    </div>
                    <div className="flex lg:flex-row flex-col items-center">
                        <div className="lg:w-[200px] w-full mb-[20px] lg:mb-0">
                            <span className="text-[#475569] text-[16px] font-normal hidden lg:flex">
                                Trusted by <br /> leading companies
                            </span>
                            <span className="text-[#475569] text-[16px] font-normal lg:hidden flex">
                                Trusted by leading companies
                            </span>
                        </div>
                        <div className="flex items-center lg:justify-between lg:gap-10 gap-[30px] w-full lg:w-[325px]">
                            {imageListFirstSection.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    width={30}
                                    height={30}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-[100%] flex items-center justify-center">
                    <Image
                        src="/Group-50.png"
                        alt="Group"
                        width={900}
                        height={900}
                    />
                </div>
            </div>
        </section>
    )
}