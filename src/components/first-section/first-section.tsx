import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"
import { imageListFirstSection } from "@/data/image-list-first-section"

export default async function FirstSection() {
    return(
        <section className="flex items-center justify-center w-full">
            <div className="container flex items-center justify-between lg:pt-20 lg:pb-20 py-[48px] px-[16px]">
                <div className="flex flex-col lg:w-[45%] w-[100%] bg-[url(/Vector-14.png)] bg-no-repeat lg:bg-[length:205px_20px] lg:bg-[position:5px_65px] bg-[length:115px_17.5px] bg-[position:0px_35px] gap-16">
                    <h2>Teach students worldwide</h2>
                    <p className="text-[24px] font-[400]">
                        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                    </p>
                    <div className="flex items-center gap-8">
                        <CustomButton text="Sign Up Now" className="bg-[#EA580C] text-white hover:bg-[#EA580C]/80 rounded-lg w-auto text-[24px] font-[700] max-h-[64px] h-[64px] pr-12 pl-12 cursoor-pointer"/>
                        <CustomButton text="View Demo" className="flex items-center justify-evenly w-32 font-medium text-[20px] text-[#2563eb] cursor-pointer h-16 max-h-16" 
                            img={{
                                src: "/play-circle.png",
                                alt: "View Demo",
                                width: 20,
                                height: 20,
                            }}
                        />
                    </div>
                    <div className="flex items-center">
                        <div className="w-42">
                            <span className="text-[#475569] size-16 font-normal">
                                Trusted by <br /> leading companies
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-10">
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