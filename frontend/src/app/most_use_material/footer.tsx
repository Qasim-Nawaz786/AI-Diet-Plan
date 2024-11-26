import Link from "next/link"
import instagram from "../../../public/images/instagram.png"
import youtube from "../../../public/images/youtube.png"
import Image from "next/image"


export default function Footer(){
    return(
        <footer className="bg-[#B08D572B] py-6 w-full">
        <div className="max-w-[1650px] mx-auto  text-white flex items-center justify-between">
            <div className="flex ">
                <Link href="/privacy_policy">
                    <h2 className="hover:pointer text-left text-[24px] leading-[49px] font-raleway mr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B08D57]">
                        Privacy Policy
                    </h2>
                </Link>
                <Link href="/terms_of_services">
                <h2 className="text-left text-[24px] leading-[49px] font-raleway mr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B08D57]">
                    Terms of Services
                </h2>
                </Link>
            </div>
            <div className="flex space-x-8">
                <Link href="https://www.instagram.com/touufit/profilecard/?igsh=MXdvMmZsb3h5YnBhbQ==">
                <Image src={instagram} alt="instagram icon"  />
                </Link>
                <Link href="https://www.youtube.com/@touufit">
                <Image src={youtube} alt="youtube icon"  />
                </Link>

            </div>
        </div>
    </footer>
    )
}