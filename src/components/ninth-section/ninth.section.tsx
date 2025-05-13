import CustomButton from "../custom-button/custom-button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function NinthSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full lg:h-[679px] h-[610px] bg-[#EA580C] gap-6 lg:p-0 p-[15px]">
            <h3 className="text-white text-center">
                Ready for your next project?
            </h3>
            <p className="text-white text-center lg:text-[32px] text-[18px] lg:font-[300] font-[400]">
                Sit elit feugiat turpis sed integer integer accumsan turpis.
            </p>
            <div className="flex flex-col items-start gap-2 lg:w-[550px] w-full max-w-md">
                <Label htmlFor="email" className="text-white text-[18px] font-[500]">
                    Email
                </Label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-md w-full rounded-md px-4 py-3 text-base bg-white p-6"
                />
            </div>
            <div className="flex flex-col items-start gap-2 lg:w-[550px] w-full max-w-md">
                <Label htmlFor="message" className="text-white text-[18px] font-[500]">
                    Message
                </Label>
                <textarea
                    id="message"
                    placeholder="What are you say?"
                    className="max-w-md w-full rounded-md px-4 py-3 text-base bg-white resize-none min-h-[80px]"
                />
            </div>

            <CustomButton text="Request Demo" className="text-white bg-[#0F172A] pt-[16px] pb-[16px] pr-[32px] pl-[32px] lg:text-[24px] text-[20px] lg:font-[700] font-[500] rounded-[8px]"/>
        </section>
    )
}