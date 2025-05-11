import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"
import { textListSecondSection } from "@/data/text-list-second-section"

export default async function SecondSection() {

    return(
        <section className="flex items-center justify-center w-full h-[706.97px]">
            <div className="container flex items-center justify-between pt-20 pb-20">
                <div className="flex flex-col w-[50%] bg-[url(/Vector-14.png)] bg-no-repeat bg-[length:325px_30px] bg-[position:100px_55px] gap-10">
                    <h2>An all-in-one app that makes it easier</h2>
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
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <Image
                        src="/desktop-blob.png"
                        alt="Group"
                        width={900}
                        height={900}
                    />
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-between p-[14px] bg-white rounded-[10px] w-[200.33px] h-[232px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                            <span className="bg-[#F3E8FF] rounded-[4px] p-[4px] font-[400] text-[14px] text-[#6B21A8]">
                                Featured
                            </span>
                            <h3>
                                The map of mathematics
                            </h3>
                            <p className="text-[14px] font-[400] text-[#0F172A]">
                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                            </p>
                            <CustomButton text="Take Lesson" className="pr-[12px] pl-[12px] pt-[8px] pb-[8px] rounded-[8px] border-[2px] border-[#2563EB] font-[500] text-[14px] text-[#2563EB] w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}