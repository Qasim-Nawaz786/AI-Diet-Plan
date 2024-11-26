'use client'

import image1 from "../../../public/images/Hero_section.png";
import Form from "../landingpage/form"
import Rightarrow from "../../../public/Rightarrow.png"
import Effeciency from "../../../public/images/effeciency.png"
import Rectangle from "../../../public/images/Rectangle.png"
import Rectangle1 from "../../../public/images/Rectangle1.png"
import Rectangle2 from "../../../public/images/Rectangle2.png"
import { useState } from 'react';
import React, { useRef } from "react";
import Link from 'next/link';
import Login from "../most_use_material/login_button"
import Image from 'next/image';




const faqData = [
    {
        id: 1,
        question: "What makes AI Fitness different from other fitness apps?",
        answer: "AI Fitness is tailored just for you! Our AI-driven platform creates personalized workout plans based on your goals, fitness level, and progress. It’s like having a personal trainer in your pocket, constantly adapting to help you reach your full potential."
    },
    {
        id: 2,
        question: "Can I cancel my membership anytime?",
        answer: "Yes! You can cancel your membership anytime through the app. There are no hidden fees or complicated processes—your satisfaction is our priority."
    },
    {
        id: 3,
        question: "Is my payment information secure?",
        answer: "Absolutely. We use advanced encryption to ensure all transactions are secure and private. Your information is always protected, so you can feel safe and confident in every step."
    },
    {
        id: 4,
        question: "Do I need any special equipment to use AI Fitness?",
        answer: "No special equipment is required! AI Fitness offers a variety of workout routines."
    }
];

const steps = [
    {
        id: 1,
        title: 'Fill in your information',
        description: 'Ready to start your journey with us? Fill out the form, and let’s make it happen together!',
    },
    {
        id: 2,
        title: 'Payment',
        description: 'Unlock more ways to get fit – purchase a subscription today!',
    },
    {
        id: 3,
        title: 'Start your Journey',
        description: 'Let’s dive in! AI will chat about your lifestyle and goals to get a clear picture before we begin.',
    },
];

export default function Home() {
    // State to track which FAQ is open (null if none is open)
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id); // Toggle between open and close
    };

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white text-gray-800 ">

            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row min-h-screen bg-white">
                {/* Left Section */}
                <div ref={formRef} className="w-full md:w-1/2 flex flex-col mt-20 items-center bg-white px-6 md:px-10">
                    <h1 className="text-[36px] md:text-[63px] font-poblaheavy text-gray-700 mb-6 leading-[43px] md:leading-[73px] text-center">
                        <span className="block">Choose <span className="font-extrabold">OLIMPO</span></span>
                        <span className="block">to change your</span>
                        <span className="block">physique.</span>
                    </h1>
                    <Form />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 relative">
                    <Login />
                    <Image
                        src={image1}
                        alt="Woman on treadmill"
                        className="h-64 md:h-full w-full object-cover"
                    />

                </div>
            </div>





            {/* Motivational Section  */}


            <section className="bg-white">
                <h2 className="font-bold mb-6 text-3xl md:text-9xl font-poblaheavy bg-[#B08D5759] w-full py-10 md:py-20 text-center">
                    Don’t count the days <span className="block">Make the days count</span>
                </h2>

                <div className="mx-auto text-center flex justify-center max-w-[1550px] px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center  md:space-x-20">
                        {steps.map((step, index, steps) => (
                            <React.Fragment key={step.id}>
                                <div className="flex flex-col items-center text-center my-4 md:my-16">
                                    <div className="flex items-center justify-center md:space-x-4 space-y-2 mb-2 md:flex-row flex-col">
                                        <div className="bg-gradient-to-r from-[#D4AF37] to-[#B08D57] text-white rounded-xl h-16 w-16 md:h-24 md:w-24 flex items-center justify-center text-3xl md:text-6xl font-bold">
                                            {step.id}
                                        </div>
                                        <h3 className="text-lg md:text-[24px] font-semibold font-poblaheavy bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm md:text-[20px] text-gray-700 lg:pt-10 font-raleway leading-[23.48px]">
                                        {step.description}
                                    </p>
                                    <div className="w-full"></div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex flex-col items-center text-center my-8 md:my-32">
                                        <Image
                                            src={Rightarrow}
                                            alt="Rightarrow"
                                            layout="responsive"
                                            className="w-20 md:w-52 object-cover"
                                             // Adjust height as needed
                                        />
                                    </div>

                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>



            {/* Efficiency Section */}
            <section className="py-10">
                <h2 className="text-2xl md:text-[70px] sm:text-[20px] leading-[49px] font-bold flex  text-center justify-center font-poblaheavy md:mb-10">
                    Increase your Efficiency by 50% in just 30 days
                </h2>
                <div className="max-w-[1650px] mx-auto px-4 ">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
                        <p className="w-full md:w-1/3 text-justify md:pl-8 md:leading-[49px] text-base md:text-2xl font-raleway ">
                            AI Fitness is an innovative fitness platform that leverages the power of artificial intelligence to deliver a personalized, efficient, and engaging workout experience. Our product adapts to each user’s unique fitness goals, preferences, and performance data to create customized workout plans that evolve with them. With features like real-time feedback on form, tailored exercise recommendations and progress tracking, AI Fitness empowers users to achieve their fitness goals faster.
                        </p>
                        <Image
                            src={Effeciency}
                            alt="Fitness 1"
                            className="w-full md:w-1/2 rounded-md "
                            
                        />
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src={Rectangle}
                            alt="Fitness 2"
                            className="w-full md:w-[912px] rounded-md "
                            
                        />
                    </div>
                </div>
            </section>


            {/* Our Story Section */}
            <section className="bg-white py-10">
                <div className="max-w-[1650px] pl-14 mx-auto px-4">
                    <h2 className="md:text-[70px] text-3xl font-bold text-left mb-6 font-poblaheavy">Our story?</h2>
                    <p className="text-justify md:mb-6 mb-6 md:w-1/2 font-raleway md:text-[24px] text-base font-normal leading-[49px] text-left underline-offset-4 decoration-skip-ink">
                        AI Fitness was born out of a desire to make fitness accessible, adaptive, and deeply personalized for everyone, regardless of their fitness level or location. We saw how challenging it could be for people to stay motivated and achieve their goals with one-size-fits-all programs, limited guidance, or lack of time for gym sessions. So, we combined our passion for fitness with advanced artificial intelligence to create a product that acts as a personal trainer in your pocket.
                    </p>

                    <div className="flex flex md:flex-row md:gap-16 gap-6 md:mt-40 justify-center">
                        <Image
                            src={Rectangle1}
                            alt="Fitness 3"
                            className="md:w-[626px] md:h-[961px]  h-[361px]  md:rounded-[60px] "
                            

                        />
                        <Image
                            src={Rectangle2}
                            alt="Fitness 4"
                            className="md:w-[626px] md:h-[961px]  h-[361px]  md:rounded-[60px] "
                            


                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className=" py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="md:text-[70px] text-3xl  font-bold text-center mb-6 font-poblaheavy">FAQ's</h2>
                    <div className="space-y-4">
                        {faqData.map(({ id, question, answer }) => (
                            <div key={id} className="mb-4">
                                <div
                                    onClick={() => toggleFAQ(id)} // Pass unique index
                                    aria-expanded={openFAQ === id}
                                    className={`flex justify-between items-center cursor-pointer ${openFAQ === id ? 'bg-[#B08D5759]' : 'bg-[#B08D5735]'} p-4 rounded-lg shadow-md`}
                                >
                                    <p className={`font-semibold md:text-[24px] text-base leading-[49px] font-raleway ${openFAQ === id ? 'text-[#D4AF37]' : 'text-[#B08D57]'}`}>
                                        {question}
                                    </p>
                                    <span className={`transition-transform text-[#D4AF37] duration-300 ${openFAQ === id ? 'rotate-180' : ''}`}>
                                        ▲
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className={`overflow-hidden transition-all duration-500 ${openFAQ === id ? 'max-h-screen' : 'max-h-0'}`}>
                                    <p className="mt-4 bg-[#B08D5759] md:text-[24px] leading-[49px] font-raleway p-4 rounded-b-lg text-white">
                                        {answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#B08D572B] py-6">
                <div className="max-w-[1650px] mx-auto px-4 flex flex-col text-white">
                    <p className="md:text-[38px] text-3xl font-poblaheavy text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B08D57] text-center">
                        Don’t miss the opportunity to <span className="block">improve your productivity!</span>
                    </p>
                    <div className="flex flex-row mt-14 items-center  ">
                        <Link href="/privacy_policy">
                            <h2 className="hover:pointer  text-left md:text-[24px] text-[14px] md:leading-[49px] font-raleway md:mr-10 mr-3  text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B08D57]">Privacy Policy</h2>
                        </Link>
                        <Link href="/terms_of_services">
                            <h2 className="text-left md:text-[24px] text-[14px] md:leading-[49px]  font-raleway mr-10  text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B08D57] ">Terms of Services</h2>
                        </Link>
                        <button
                            onClick={scrollToForm}
                            className="bg-gradient-to-r from-[#D4AF37] to-[#B08D57] hover:opacity-90 md:ml-64 text-white md:px-14 md:py-4 py-2 rounded-full font-cinzel md:font-bold font-semibold px-6  hover:shadow-[0_0_5px_3px_#D4AF37,0_0_10px_5px_#B08D57]"
                        >
                            JOIN OLYMPO
                        </button>

                    </div>
                </div>

            </footer>
        </div>
    );
}
