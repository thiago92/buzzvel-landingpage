import Image from "next/image"
import CustomButton from "../custom-button/custom-button"

export default async function ForthSection() {
    return(
        <section className="flex items-center justify-center w-full h-[811px]">
            <div className="container flex items-center bg-[url(/plane-departure.png)] bg-no-repeat bg-[length:64px_64px] bg-[position:1290px_80px]">
                <div className="w-1/2">
                    <Image src="/Col-2.png" alt="Col" width={600} height={651}/>
                </div>
                <div className="w-1/2 flex flex-col items-center gap-[40px]">
                    <h2>
                        Meet international students & teachers
                    </h2>
                    <p className="text-[20px] font-[400]">
                        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
                    </p>
                    <CustomButton text="Explore teachers and students" className="flex items-center justify-start w-full font-medium text-[24px] text-[#2563eb] cursor-pointer h-16 max-h-16 gap-4" 
                        img={{
                            src: "/Vector.png",
                            alt: "Explore teachers and students",
                            width: 20,
                            height: 20,
                        }}
                        imgPosition="right"
                    />
                </div>
            </div>
        </section>
    )
}