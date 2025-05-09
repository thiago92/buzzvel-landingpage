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
                <div className="w-1/2 flex items-center justify-center">
                    <Image
                        src="/desktop-blob.png"
                        alt="Group"
                        width={900}
                        height={900}
                    />
                </div>
            </div>
        </section>
    )
}