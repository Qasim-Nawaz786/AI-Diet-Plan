'use client';
import { useState } from "react";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        assistanceQuery: "",
        ageRange: "",
        goal: "",
        difficulties: "",
        name: "",
        email: "",
        countryCode: "",
        country: "",
        instagramId: "",
    });


    const countryCodes = ["+1", "+44", "+91", "+61", "+86"];
    const countries = [
        "United States",
        "United Kingdom",
        "India",
        "Australia",
        "China",
        "Canada",
        "Germany",
        "France",
    ];

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add submission logic
    };


    const handleOptionSelect = (field: keyof typeof formData, value: string) => {
        handleChange(field, value);
        setTimeout(() => {
            if (step < 5) setStep(step + 1);
        }, 200); // Automatic transition delay
    };


    const [countryFilter, setCountryFilter] = useState("");

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto p-6 bg-white space-y-10 rounded-lg"
        >
            <div className="relative max-w-20px mt-16">
                {/* Step 1 */}
                {step === 1 && (
                    <div className="transition-all duration-500">
                        <h2 className="text-2xl font-raleway font-bold text-[#B08D57] mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">
                            How can I help you?
                        </h2>
                        <div className="space-y-4">
                            {["Fat loss", "Gain muscle", "Creating healthy habits"].map(
                                (option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect("assistanceQuery", option)}
                                        className={`block w-full font-raleway py-3 text-semibold font-semibold text-[#333333] bg-[#B08D5726] rounded-md shadow-sm ${formData.assistanceQuery === option
                                            ? "bg-[#8C6A3E]"
                                            : "hover:bg-[#B08D5750]"
                                            } focus:outline-none`}
                                    >
                                        {option}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div className="transition-all duration-500">
                        <h2 className="text-2xl font-bold text-[#B08D57] font-raleway mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">Age</h2>
                        <div className="space-y-4">
                            {["18-25", "26-30", "31-40", "More than 40"].map((range) => (
                                <button
                                    key={range}
                                    type="button"
                                    onClick={() => handleOptionSelect("ageRange", range)}
                                    className={`block w-full py-3 font-raleway text-semibold font-semibold text-[#333333] bg-[#B08D5726] rounded-md shadow-sm ${formData.ageRange === range
                                        ? "bg-[#8C6A3E]"
                                        : "hover:bg-[#B08D5750]"
                                        } focus:outline-none`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <div className="transition-all duration-500">
                        <h2 className="text-2xl font-bold text-[#B08D57] font-raleway mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">
                            What is your goal? What do you want to change for?
                        </h2>
                        <input
                            type="text"
                            placeholder="Type your goal..."
                            value={formData.goal}
                            onChange={(e) => handleChange("goal", e.target.value)}
                            className="w-full px-4 py-3 border font-raleway rounded-md bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                    <div className="transition-all duration-500">
                        <h2 className="text-2xl font-bold text-[#B08D57] font-raleway mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">
                            What are your biggest difficulties today?
                        </h2>
                        <textarea
                            rows={4}
                            placeholder="Describe your challenges..."
                            value={formData.difficulties}
                            onChange={(e) => handleChange("difficulties", e.target.value)}
                            className="w-full px-4 py-3 border font-raleway rounded-md bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                        ></textarea>
                    </div>
                )}

                {/* Step 5 (Contact Info with Dropdowns) */}
                {step === 5 && (
                    <div className="transition-all duration-500">
                        <h2 className="text-2xl font-bold text-[#B08D57] font-raleway mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="w-full px-4 py-3 border font-raleway rounded-md bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="w-full px-4 py-3 border rounded-md font-raleway bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            />
                            <select
                                value={formData.countryCode}
                                onChange={(e) => handleChange("countryCode", e.target.value)}
                                className="w-full px-4 py-3 border rounded-md font-raleway bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="" disabled>
                                    Select your country code
                                </option>
                                {countryCodes.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Country"
                                value={formData.country}
                                onChange={(e) => setCountryFilter(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md font-raleway bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            />
                            <select
                                value={formData.country}
                                onChange={(e) => handleChange("country", e.target.value)}
                                className="w-full px-4 py-3 border rounded-md font-raleway bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="" disabled>
                                    Select your country
                                </option>
                                {countries
                                    .filter((country) =>
                                        country.toLowerCase().startsWith(countryFilter.toLowerCase())
                                    )
                                    .map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Instagram ID"
                                value={formData.instagramId}
                                onChange={(e) => handleChange("instagramId", e.target.value)}
                                className="w-full px-4 py-3 border rounded-md font-raleway bg-[#B08D5726] focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                {step > 1 && (
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 py-2 text-white font-cinzel font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B08D57] rounded-md shadow-sm hover:from-[#B08D57] hover:to-[#D4AF37]"
                    >
                        Previous
                    </button>
                )}
                {step < 5 ? (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-10 py-2 font-cinzel font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B08D57] rounded-md shadow-sm hover:from-[#B08D57] hover:to-[#D4AF37]"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="px-6 py-2 text-white font-cinzel font-semibold bg-green-500 rounded-md shadow-sm hover:bg-green-600"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
}
