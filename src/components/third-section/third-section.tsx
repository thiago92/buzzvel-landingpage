import Image from "next/image"

export default async function ThirdSection() {
    return(
        <section className="flex items-center justify-center w-full bg-[#FACC15] lg:h-[575px] h-[684px] lg:mt-0 mt-[120px]">
            <div className="container flex lg:flex-row flex-col items-center justify-center w-full h-full">
                <div className="w-[5%] hidden lg:flex">
                    <Image src="/chevron-back.png" alt="chevron-back" width={48} height={48}/>
                </div>
                <div className="lg:w-[40%] w-full flex flex-col lg:p-0 p-[15px] lg:mt-0 mt-[120px]">
                    <p className="lg:text-[24px] text-[18px] font-[400] mb-[20px]">
                        Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
                    </p>
                    <p className="lg:text-[24px] text-[18px] font-[400] mb-[40px]">
                        Marie Poirot, <br />
                        <span className="lg:font-[700] font-[500]">
                            Bigapp
                        </span>
                    </p>
                    <Image src="/Slider Cues.png" alt="Slider Cues" width={96} height={8}/>
                </div>
                <div className="lg:w-[50%] w-[115%] lg:mt-0 mt-[-40px]">
                    <Image src="/Col.png" alt="Col" width={600} height={515}/>
                </div>
                <div className="w-[5%] hidden lg:flex">
                    <Image src="/chevron-forward.png" alt="chevron-forward" width={48} height={48}/>
                </div>
            </div>
        </section>
    )
}