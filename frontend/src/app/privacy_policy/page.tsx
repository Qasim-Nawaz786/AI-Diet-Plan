'use client'
import Footer from "../most_use_material/footer"
import arrow from "../../../public/images/arrow_icon.png"
import Image from "next/image"

export default function Privacy() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#D4AF37] to-[#B08D57] rounded-b-[20px] mt-[1px] h-[109px] flex items-center w-full sm:py-2">

                <h1 className="pl-10 text-[44px] font-cinzel font-bold text-white text-shadow">
                    Olympo
                </h1>
            </header>

            {/* Content Section */}
            <main className="flex-grow flex flex-col items-center">
                <div className="flex w-full items-center max-w-[1650px]">
                    {/* Arrow aligned to the far left and vertically centered */}
                    <Image src={arrow.src} alt="arrow icon" className="ml-4 self-center pt-14 w-[26px] cursor-pointer "
                    onClick={() => window.history.back()} width={20} height={20} />

                    {/* Centered Privacy Policy heading */}
                    <h2 className="flex-grow text-center mt-16 font-raleway font-normal text-[42px] leading-[58.8px] bg-[#1E1E1E] text-transparent bg-clip-text">
                        PRIVACY POLICY
                    </h2>
                </div>

                <p className="w-1/2 text-justify mt-10 font-raleway leading-[49px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat ut turpis convallis faucibus. Donec vehicula, enim vel dictum vehicula, purus eros elementum libero, vel finibus erat eros nec magna. Sed id malesuada magna. In hac habitasse platea dictumst. Integer at risus ut ex iaculis fermentum id eget eros. Maecenas non lorem id risus fermentum vehicula non sit amet lectus. Vivamus faucibus enim ut lacus fermentum efficitur. Phasellus dapibus nunc ut diam pharetra, ac ullamcorper erat malesuada.
                    Suspendisse potenti. Nunc suscipit, odio ac varius bibendum, orci odio dictum justo, non faucibus ipsum odio nec velit. Nullam eget sapien eget augue faucibus luctus. Mauris facilisis metus nec velit posuere, non hendrerit lacus malesuada. Nullam sit amet nulla nibh. Donec a arcu augue. Vestibulum cursus volutpat nulla, vel elementum eros elementum at. Curabitur quis dui arcu. Integer ac dictum arcu. Nam porttitor libero ligula, non viverra elit facilisis non. Sed in purus risus. Ut suscipit, nulla non suscipit convallis, nisl nisi sodales tortor, sit amet facilisis ligula ligula non odio. Duis porttitor venenatis lectus et suscipit.
                </p>
            </main>


            {/* Footer */}
            <Footer />

        </div>
    )
}