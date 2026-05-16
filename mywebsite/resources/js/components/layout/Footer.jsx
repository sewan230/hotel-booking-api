import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-white shadow-[inset_0_0_20px_var(--color-back)] relative m-5 rounded-[10px]">
            <div className="max-w-6xl mx-auto py-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0 justify-between items-center px-4 lg:px-0">
                    <div className="col-span-2 w-full md:w-[75%]">
                        <img src="/images/logo-explore.png" className="h-[50px]" alt="logo" />
                        <p className="leading-7 text-primary font-nunito text-[16px] mt-3">Explore is your one-stop platform to
                            discover beautiful destinations worldwide.
                            Compare flight and hotel deals, access exclusive local guide offers, plan your trip your way,
                            and find destinations easily on Google Maps—all to help you travel smarter and for the best
                            price.</p>
                    </div>
                    <div className="flex justify-between col-span-2">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-accent text-2xl md:text-4xl font-nunito font-extrabold">Explore</h3>
                            <ul className="text-lg md:text-xl text-primary leading-8">
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    Home
                                </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    Map Explorer
                                </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    My Plans
                                </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">

                                    Counect Us
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-accent text-2xl md:text-4xl font-nunito font-extrabold">Pages</h3>
                            <ul className="text-lg md:text-xl text-primary leading-8">
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    About Us
                                </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    Trips </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">
                                    hotels
                                </li>
                                <li
                                    className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">

                                    places
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-accent text-2xl md:text-4xl font-nunito font-extrabold">Counect</h3>
                            <ul className="text-lg md:text-xl text-primary leading-8">
                                <li className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">Email: info@explore.com</li>
                                <li className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">Phone: +123 456 789</li>
                                <li className="transition-all ease-in-out list-none hover:list-disc hover:text-secondary hover:translate-x-1">Location: World Wide</li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className="border-t border-primary mt-2 pt-4 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">

                    <p className="text-sm text-primary">
                        © 2026 <span className="text-accent">Explore</span>. All rights reserved.
                    </p>

                    {/* Social */}
                    <div className="flex space-x-4 mt-3 md:mt-0 text-primary">
                        <FaFacebook className="cursor-pointer hover:text-secondary" />
                        <FaInstagram className="cursor-pointer hover:text-secondary" />
                        <FaTwitter className="cursor-pointer hover:text-secondary" />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;