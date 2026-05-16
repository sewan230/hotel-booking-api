import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoExplore from "/public/images/logo-explore.png";
import userPhoto from "/public/images/img-profileuser.png";

const Navbar = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);

    const [lang, setLang] = useState(
        localStorage.getItem("lang") || "en"
    );

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (selectedLang) => {
        setLang(selectedLang);
        localStorage.setItem("lang", selectedLang);
        setIsLangOpen(false);
    };


    return (
        <>
            <nav className="bg-[rgb(237,237,237,.01)] border-gray-100 absolute top-0 w-full z-100">
                <div
                    className="flex flex-wrap justify-between items-center max-w-7xl mx-auto border-b border-b-[rgba(230,230,230,0.54)] p-4">
                    <div className="flex justify-between items-center md:w-[70%]">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img  src="/images/logo-explore.png" className="h-8" alt="Explore logo" />
                        </a>
                        {/* <!-- search field --> */}
                        <div className="relative mx-6 hidden md:block w-[70%]">
                            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar"
                                className="bg-[rgb(237,237,237,.2)] focus:outline-none block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-gray-500"
                                placeholder="Search..."/>
                        </div>
                    </div>
                    <div className="flex items-center shrink-0">
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <a href="#" className="text-gray-50 hover:underline">about us</a>
                        </div>
                        {/* language-menu  */}
                        {/* <div className="flex items-center space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu"
                            className="inline-flex items-center font-medium justify-center px-2 md:px-4 py-2 text-sm text-gray-50 rounded-lg cursor-pointer hover:bg-[rgb(237,237,237,.2)]">
                            <svg className="w-5 h-5 rounded-full md:me-3 text-gray-50" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-globe" viewBox="0 0 16 16">
                                <path
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>
                            <span className="hidden md:inline"> English (US)</span>
                        </button>
                        {/* <!-- Dropdown --> */}
                        {/* <div className="z-50 hidden my-4 text-base list-none bg-[rgb(237,237,237,.2)] divide-y divide-gray-100 rounded-lg shadow-sm"
                            id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 w-full text-sm text-gray-50 hover:bg-[rgba(201,198,198,0.5)]"
                                        role="menuitem">
                                        English (US)
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 text-sm text-gray-50 hover:bg-[rgb(201,198,198,.5)]"
                                        role="menuitem">
                                        العربية
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        {/* </div> */}
                        <div className="relative" ref={ref}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="inline-flex items-center font-medium justify-center px-2 md:px-4 py-2 text-sm text-gray-50 rounded-lg cursor-pointer hover:bg-[rgb(237,237,237,.2)]"
                            >
                                <svg className="w-5 h-5 rounded-full md:me-3 text-gray-50" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-globe" viewBox="0 0 16 16">
                                    <path
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                </svg>
                                <span className="hidden md:inline">{lang === "en" ? "English" : "العربية"}</span>

                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-[rgb(237,237,237,.2)] text-black rounded-lg shadow">

                                    <button
                                        onClick={() => changeLanguage("en")}
                                        className={`block w-full px-4 py-2 text-sm text-gray-50 hover:bg-[rgb(201,198,198,.5)] ${lang === "en" ? "bg-gray-200 text-orange-600" : ""
                                            }`}
                                    >
                                        English
                                    </button>

                                    <button
                                        onClick={() => changeLanguage("ar")}
                                        className={`block w-full px-4 py-2 text-sm text-gray-50 hover:bg-[rgb(201,198,198,.5)] ${lang === "ar" ? "bg-gray-200 text-orange-600" : ""
                                            }`}
                                    >
                                        العربية
                                    </button>

                                </div>
                            )}
                        </div>

                        {/* <!--sign in  --> */}
                        <div
                            className="flex items-center space-x-6 rtl:space-x-reverse ltr:border-l-2 rtl:border-r-3 border-gray-100 py-1 ltr:px-4 rtl:px-4">
                            {/* <!-- <a href="tel:5541251234" className="text-sm  text-gray-500 hover:underline">(555)
                        412-1234</a> --> */}
                            <NavLink to="/login" className="text-sm  text-gray-50 hover:underline">Sing in</NavLink>
                        </div>
                        {/* <!-- mega menu --> */}
                        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="flex text-sm bg-gray-400 rounded-full md:me-0"
                                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full object-cover" src="/images/img-profileuser.png"
                                    alt="user photo" />
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            {/* <!-- <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
                        id="user-dropdown"> --> */}
                            {/* <!-- <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate">name@user.com</span>
                        </div> --> */}
                            {/* <!-- <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                                    in</a>
                            </li>
                        </ul> --> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar