import Image from "next/image"
import CustomButton from "../custom-button/custom-button"

export default function FirstSection() {
    return(
        <section className="flex items-center justify-center w-full">
            <div className="container flex items-center justify-between pt-20 pb-20">
                <div className="w-5/12 bg-[url(/Vector-14.png)] bg-no-repeat bg-[length:205px_20px] bg-[position:5px_65px]">
                    <h2>Teach students worldwide</h2>
                    <p>
                        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                    </p>
                    <div className="flex">
                        <CustomButton text="Sign Up Now" className="bg-[#EA580C] text-white hover:bg-[#EA580C]/80 rounded-lg w-auto size-24 font-bold max-h-16 pr-12 pl-12 cursoor-pointer"/>
                        <CustomButton text="Learn More" className="" />
                    </div>
                </div>
                <div className="w-5/12"></div>
            </div>
        </section>
    )
}