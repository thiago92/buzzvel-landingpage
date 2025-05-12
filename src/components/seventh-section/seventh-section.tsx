import Image from "next/image"
import CustomButton from "@/components/custom-button/custom-button"

export default async function SeventhSection() {

    return(
        <section className="flex items-center justify-center w-full h-[706.97px]">
            <div className="container flex items-center justify-between pt-20 pb-20">
                <div className="flex flex-col justify-center w-[50%] bg-[url(/Vector-14.png)] bg-no-repeat bg-[length:275px_30px] bg-[position:380px_55px] gap-10 z-10">
                    <h2 className="whitespace-nowrap">All the cool features</h2>
                    <p className="text-[24px] font-[400]">
                        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                    <div className="flex items-center gap-8">
                        <CustomButton text="View all the features" className="flex items-center justify-start w-full font-medium text-[24px] text-[#2563eb] cursor-pointer h-16 max-h-16 gap-4" 
                            img={{
                                src: "/Vector.png",
                                alt: "View all the features",
                                width: 20,
                                height: 20,
                            }}
                            imgPosition="right"
                        />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center mt-[-300px] z-1">
                    <Image
                        src="/group-2.png"
                        alt="Group"
                        width={900}
                        height={900}
                    />
                    <div className="flex items-start justify-start w-full 2xl:mt-[-495px] mt-[-450px] 2xl:ml-[200px] ml-[100px] pl-[60px] pr-[60px]">
                        <div className="flex flex-col items-start justify-between p-[14px] bg-white rounded-[10px] w-[200.33px] h-[232px] max-h-[232px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                            <span className="bg-[#DBEAFE] text-[#1E40AF] rounded-[4px] p-[4px] font-[400] text-[14px]">
                                Popular
                            </span>
                            <h3>
                                Design for how people think
                            </h3>
                            <p className="text-[14px] font-[400] text-[#0F172A]">
                                Aliquam ut euismod condimentum elementum ultricies volutpat sit non. 
                            </p>
                            <CustomButton text="Take Lesson" className="pr-[12px] pl-[12px] pt-[8px] pb-[8px] rounded-[8px] border-[2px] border-[#2563EB] font-[500] text-[14px] text-[#2563EB] w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}