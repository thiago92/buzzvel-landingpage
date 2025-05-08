import Image from "next/image"
import CustomButton from "../custom-button/custom-button"

export default function Menu() {
    return (
        <header className="flex items-center justify-center bg-white h-40">
            <div className="container flex flex-row items-center justify-between">
                <nav className="flex items-center p-4 bg-white gap-24">
                    <div>
                        <Image src="/Logo-colored.png" alt="logo" width={103} height={35} />
                    </div>
                    <div>
                        <ul className="flex items-center size-16 font-medium gap-24">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="flex items-center gap-12 w-auto bg-white">
                    <CustomButton className="bg-white text-black w-auto cursor-pointer font-medium" text="Log In" />
                    <CustomButton className="bg-white text-black rounded-lg w-auto border-2 pl-6 pr-6 h-max-12 h-12 cursor-pointer font-medium" text="Sign Up Now" />
                </div>
            </div>
        </header>
        
    )
}