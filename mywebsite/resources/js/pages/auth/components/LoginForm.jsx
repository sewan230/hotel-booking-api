import { useState } from "react"
import { BiEnvelope, BiLockAlt, BiLockOpenAlt } from "react-icons/bi"
import { Link } from "react-router"
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
    // show password
    const [showPassword, setShowPassword] = useState(false);

    // data and error vaildate inputs and loading and change Field and controll submit
    const {
        formData,
        errors,
        touched,
        loading,
        error,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useLoginForm();

    return (
        <div>
            <div className="login-box bg-secondary/5 border border-secondary/20 shadow-[inset_0px_0px_50px_rgba(50,50,50,0.3)] backdrop-blur-md w-full h-[75vh] mt-[calc(12.5vh)] rounded-[15px]">
                <h2 className="text-[2rem] font-bold font-nunito text-white opacity-90 pl-10 mt-[80px]">Login</h2>
                {/* form log in */}
                <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center">
                    {/* Field email */}
                    <div className="input-box border-b w-[80%] border-white relative mt-7">
                        <span className="reg-icon absolute right-2 bottom-1/4 text-white text-[1.2em] leading-14.25"><BiEnvelope /></span>
                        <input type="email" name="email" id="email" value={formData.email} onBlur={handleBlur}
                            autoComplete="email" placeholder=" " onChange={handleChange}
                            className="peer w-full h-12 bg-transparent text-white outline-none px-2 pr-8" />
                        <label htmlFor="email" className="absolute left-2 top-0 -translate-y-1/2
                            text-white transition-all duration-300 peer-focus:top-0 peer-focus:text-sm 
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm pointer-events-none">Email</label>
                    </div>
                    {touched.email && errors.email && (
                        <p className="text-red-400 text-sm mt-1 w-[80%] mx-auto">{errors.email}</p>
                    )}
                    {/* Field password */}
                    <div className="input-box border-b w-[80%] border-white relative mt-7">
                        <button type="button" className="reg-icon absolute right-2 bottom-1/4 text-white text-[1.2em] leading-14.25" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <BiLockOpenAlt /> : <BiLockAlt />}</button>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" onBlur={handleBlur}
                            autoComplete="current-password" value={formData.password} onChange={handleChange}
                            placeholder=" " className="peer w-full h-12 bg-transparent text-white outline-none px-2 pr-8" />
                        <label htmlFor="password" className="absolute left-2 top-0 -translate-y-1/2 text-white transition-all duration-300 
    peer-focus:top-0 peer-focus:text-sm 
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm">Password</label>
                    </div>
                    {touched.password && errors.password && (
                        <p className="text-red-400 text-sm mt-1 w-[80%] mx-auto">{errors.password}</p>
                    )}

                    <div className="remember-forgot text-[0.9em] text-white flex justify-between w-[80%] my-3.75">
                        <label><input className="mr-0.75 accent-primary" type="checkbox" name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange} /> Remember me</label>
                        <Link to="/forgot-password" className="text-white hover:underline underline-white">Forgot Password</Link>
                    </div>

                    {/* error log in */}
                    {error && (
                        <p className="text-red-400 text-sm mb-3">
                            {error}
                        </p>
                    )}
                    {/* submit log in */}
                    <button type="submit" disabled={loading} className="w-[80%] h-10 relative group overflow-hidden rounded-[10px] text-white px-2.5 py-1 shadow-[inset_0px_0px_5px_var(--color-text-gray)] text-[1em] font-medium bg-primary">
                        
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full cursor-pointer"></div>
                                <span>Loading...</span>
                            </div>
                        ) : "Login"}</button>
                </form>

                <div className="font-serif text-center mt-6">
                    <span className="text-white text-[.9em] mb-2.5">Don't have a accout?
                        <Link to="/register" className="text-white font-semibold hover:underline">Sign up</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm