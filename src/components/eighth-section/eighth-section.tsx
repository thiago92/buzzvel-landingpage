import Image from "next/image"
import CustomButton from "../custom-button/custom-button"

export default async function EighthSection() {
    return (
        <section className="flex lg:flex-row flex-col items-center justify-center gap-[40px] w-full lg:h-[779px] h-[900px] bg-[#FACC15] lg:p-0 p-[15px] pt-[180px]">
            <div className="lg:w-1/3 w-full lg:h-[636px]">
                <Image
                    src="/Cards Round3x.png"
                    alt="Cards Round"
                    className="hidden lg:block"
                    width={463}
                    height={636}
                />
                <Image
                    src="/Cards Round Top.png"
                    alt="Cards Round Top"
                    className="block lg:hidden"
                    width={361}
                    height={167.12}
                />
            </div>
            <div className="lg:w-1/3 w-full flex flex-col items-center justify-center gap-10">
                <h3 className="text-center whitespace-nowrap">
                    Join a world of learning
                </h3>
                <p className="lg:text-[20px] text-[16px] font-normal text-center lg:leading-[50px]">
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
                    Risus elit et fringilla habitant ut facilisi.
                </p>
                <CustomButton text="Sign Up Now"  className="bg-[#EA580C] hover:bg-[#EA580C]/80 text-white lg:text-[24px] text-[20px] lg:font-[700] font-[500] rounded-[8px] pt-[16px] pb-[16px] pl-[38px] pr-[38px] cursor-pointer"/>
            </div>
            <div className="lg:w-1/3 w-full lg:h-[636px]">
                <Image
                    src="/Cards Round.png"
                    alt="Cards Round"
                    className="hidden lg:block"
                    width={463}
                    height={636}
                />
                <Image
                    src="/Cards Round Botton.png"
                    alt="Cards Round Botton"
                    className="block lg:hidden"
                    width={361}
                    height={167.12}
                />
            </div>
        </section>
    )
}