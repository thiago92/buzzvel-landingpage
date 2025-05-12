import Image from "next/image"
import CustomButton from "../custom-button/custom-button"

export default async function EighthSection() {
    return (
        <section className="flex items-center justify-center w-full h-[779px] bg-[#FACC15]">
            <div className="w-1/3 h-[636px]">
                <Image
                    src="/Cards Round3x.png"
                    alt="Cards Round"
                    width={463}
                    height={636}
                />
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center gap-10">
                <h2 className="text-center whitespace-nowrap">
                    Join a world of learning
                </h2>
                <p className="text-[20px] font-normal text-center leading-[50px]">
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
                    Risus elit et fringilla habitant ut facilisi.
                </p>
                <CustomButton text="Sign Up Now"  className="bg-[#EA580C] hover:bg-[#EA580C]/80 text-white text-[24px] font-[700] rounded-[8px] pt-[16px] pb-[16px] pl-[38px] pr-[38px] cursor-pointer"/>
            </div>
            <div className="w-1/3  h-[636px]">
                <Image
                    src="/Cards Round.png"
                    alt="Cards Round"
                    width={463}
                    height={636}
                />
            </div>
        </section>
    )
}