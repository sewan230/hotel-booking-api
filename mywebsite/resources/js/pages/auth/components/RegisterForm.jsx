import { useState } from "react";
import useRegisterForm from "../hooks/useRegisterForm";

import {
    BiEnvelope,
    BiLockAlt,
    BiLockOpenAlt,
    BiUser
} from "react-icons/bi";

import { Link } from "react-router";

const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {
        formData,
        errors,
        touched,
        loading,
        error,
        passwordStrength,

        handleChange,
        handleBlur,
        handleSubmit,

        showInvestmentType,
        showFacilityType,
        canSubmit,
    } = useRegisterForm();

    return (
        <div>
        <div className={`${!showInvestmentType?"h-[10vh] w-full":"none"}`} ></div>
        <div className="signup-box bg-[rgba(190,189,189,0.2)] shadow-[inset_0px_0px_50px_rgba(50,50,50,0.3)] backdrop-blur-md
            overflow-y-scroll md:overflow-hidden pb-4 md:pb-0 rounded-[15px] border border-gray-200">

            <h2 className="text-[2rem] font-bold text-white opacity-90 text-center md:text-start w-full md:w-[85%] mx-auto font-nunito mt-10">
                Create Account
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
            >

                {/* USERNAME + EMAIL */}
                <div className="w-[80%] md:w-[90%] flex flex-col md:flex-row justify-center gap-4">

                    <div className="flex flex-col w-full md:w-[45%]">
                        {/* username */}
                        <div className="input-box border-b border-white relative mt-6">

                            <span className="reg-icon absolute right-2 bottom-1/4 text-white text-[1.2em]">
                                <BiUser />
                            </span>

                            <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder=" " className="peer w-full h-12 bg-transparent text-white outline-none px-2 pr-8"
                            />

                            <label className="absolute left-2 top-0 -translate-y-1/2 text-white transition-all duration-300 
    peer-focus:top-0 peer-focus:text-sm 
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm">
                                User Name
                            </label>

                        </div>
                        {touched.username && errors.username && (
                            <p className="text-red-400 text-xs mt-1">{errors.username}</p>
                        )}
                    </div>

                    <div className="flex flex-col w-full md:w-[45%]">
                        {/* email */}
                        <div className="input-box border-b border-white relative mt-4 md:mt-6">

                            <span className="reg-icon absolute right-2 bottom-1/4 text-white text-[1.2em]">
                                <BiEnvelope />
                            </span>

                            <input type="email" name="email" id="email" value={formData.email} onBlur={handleBlur}
                                autoComplete="email" placeholder=" " onChange={handleChange}
                                className="peer w-full h-12 bg-transparent text-white outline-none px-2 pr-8" />
                            <label htmlFor="email" className="absolute left-2 top-0 -translate-y-1/2
                            text-white transition-all duration-300 peer-focus:top-0 peer-focus:text-sm 
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm pointer-events-none">Email</label>

                        </div>
                        {touched.email && errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* PASSWORD + ACCOUNT TYPE */}
                <div className="w-[80%] md:w-[90%] flex flex-col md:flex-row items-start justify-center gap-4">

                    {/* password */}
                    <div className="flex flex-col w-full md:w-[45%]">
                        <div className="input-box border-b border-white relative mt-5">

                            <button
                                type="button"
                                className="reg-icon absolute right-2 bottom-1/4 text-white text-[1.2em]"
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <BiLockOpenAlt /> : <BiLockAlt />}
                            </button>

                            <input type={showPassword ? "text" : "password"} id="password" name="password" onBlur={handleBlur}
                                autoComplete="current-password" value={formData.password} onChange={handleChange}
                                placeholder=" " className="peer w-full h-12 bg-transparent text-white outline-none px-2 pr-8" />
                            <label htmlFor="password" className="absolute left-2 top-0 -translate-y-1/2 text-white transition-all duration-300 
    peer-focus:top-0 peer-focus:text-sm 
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm">Password</label>

                        </div>
                        {touched.password && errors.password && (
                            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                        )}

                        {touched.password && formData.password && (
                            <p className={`text-xs mt-1 ${passwordStrength === "weak"
                                ? "text-red-400"
                                : passwordStrength === "medium"
                                    ? "text-yellow-300"
                                    : "text-green-400"
                                }`}>
                                {{
                                    weak: "Weak password",
                                    medium: "Medium strength password",
                                    strong: "Strong password",
                                }[passwordStrength]}
                            </p>
                        )}

                    </div>

                    {/* account type */}
                    <div className="select-box border-b w-full md:w-[45%] border-white relative mt-5 md:mt-11 flex gap-3.5">

                        <label className="text-white shrink-0">
                            Account Type
                        </label>

                        <select
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                            className="flex-1 text-white bg-transparent"
                        >
                            <option value="tourist" className="text-black">
                                Tourist
                            </option>

                            <option value="invest" className="text-black">
                                Invest
                            </option>
                        </select>
                    </div>
                </div>


                <div className="w-[80%] md:w-[90%] flex flex-col md:flex-row items-center gap-4">

                    {/* INVESTMENT TYPE */}
                    {showInvestmentType && (


                        <div className="select-box border-b w-full md:w-[45%] ms-0 md:ms-[3.5%] border-white relative mt-8 flex gap-3.5">

                            <label className="text-white shrink-0">
                                Investment Type
                            </label>

                            <select
                                name="investmentType"
                                value={formData.investmentType}
                                onChange={handleChange}
                                className="flex-1 text-white bg-transparent"
                            >
                                <option value="" className="text-black">
                                    Select Type
                                </option>

                                <option value="tourist_guide" className="text-black">
                                    Tourist Guide
                                </option>

                                <option value="facility" className="text-black">
                                    Facility
                                </option>
                            </select>
                        </div>
                    )}

                    {/* FACILITY TYPE */}
                    {showFacilityType && (

                        <div className="select-box border-b w-full md:w-[45%] border-white relative mt-7 md:mt-8 flex gap-3.5">

                            <label className="text-white shrink-0">
                                Facility Type
                            </label>

                            <select
                                name="facilityType"
                                value={formData.facilityType}
                                onChange={handleChange}
                                className="flex-1 text-white bg-transparent"
                            >
                                <option value="" className="text-black">
                                    Select Facility
                                </option>

                                <option value="hotel" className="text-black">
                                    Hotel
                                </option>

                                <option value="resturant" className="text-black">
                                    Restaurant
                                </option>

                                <option value="store" className="text-black">
                                    Store
                                </option>

                                <option value="tourism_company" className="text-black">
                                    Tourism Company
                                </option>
                            </select>
                        </div>
                    )}
                </div>

                <div className="remember-forgot text-[0.9em] text-white flex justify-between w-[80%] my-3.75">
                    <label><input className="mr-0.75 accent-primary" type="checkbox" name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange} /> Remember me</label></div>

                {/* GLOBAL ERROR */}
                {error && (
                    <p className="text-red-500 text-sm mt-2">
                        {error}
                    </p>
                )}

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className="w-[85%] h-10 mt-3 relative group overflow-hidden rounded-[10px] text-white px-2.5 py-1 shadow-[inset_0px_0px_5px_var(--color-text-gray)] text-[1em] font-medium bg-primary disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>

            </form>

            <div className="text-center mt-2 mb-4">
                <span className="text-white text-[.9em]">
                    Already have an account?
                    <Link to="/login" className="font-semibold hover:underline ml-1">
                        Login
                    </Link>
                </span>
            </div>

        </div>
        </div>
    );
};

export default RegisterForm;