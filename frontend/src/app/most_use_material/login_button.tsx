import Link from "next/link"

export default function Login(){
    
    return(
        <header className="bg-transparent mx-4 sm:mx-8 md:mx-12  rounded-b-[20px] lg:w-full md:py-0 sm:py-2 lg:py-0 absolute lg:pr-10">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8">
            

            <ul className="flex lg:flex-1 lg:justify-end items-center">
                <Link href="/login">
                    <button  className="text-xs md:text-sm lg:text-sm font-semibold text-[#C8B400] border-2 border-[#C8B400] px-4 py-2 lg:px-6 lg:py-3 rounded-full flex items-center justify-center hover:bg-[#C8B400] hover:text-white transition-colors duration-200 mr-4 lg:mr-6">
                        Log in
                    </button>
                </Link>
                
            </ul>
        </nav>
    </header>
    )
}