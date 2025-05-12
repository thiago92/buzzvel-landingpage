import Image from "next/image"

export default async function ThirdSection() {
    return(
        <section className="flex items-center justify-center w-full bg-[#FACC15] h-[575px]">
            <div className="container flex items-center justify-center w-full h-full">
                <div className="w-[5%]">
                    <Image src="/chevron-back.png" alt="chevron-back" width={48} height={48}/>
                </div>
                <div className="w-[40%] flex flex-col">
                    <p className="text-[24px] font-[400] mb-[20px]">
                        Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
                    </p>
                    <p className="text-[24px] font-[400] mb-[40px]">
                        Marie Poirot, <br />
                        <span className="font-[700]">
                            Bigapp
                        </span>
                    </p>
                    <Image src="/Slider Cues.png" alt="Slider Cues" width={96} height={8}/>
                </div>
                <div className="w-[50%]">
                    <Image src="/Col.png" alt="Col" width={600} height={515}/>
                </div>
                <div className="w-[5%]">
                    <Image src="/chevron-forward.png" alt="chevron-forward" width={48} height={48}/>
                </div>
            </div>
        </section>
    )
}