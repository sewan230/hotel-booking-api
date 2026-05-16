import useForgotPassword from "../hooks/useForgotPassword";
import { Link } from "react-router";
import { IoKey } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import authForm from "../../../assets/images/back-authForm.jpg"

const ForgotPassword = () => {
    const {
        formData,
        loading,
        success,
        error,
        handleChange,
        handleSubmit,
    } = useForgotPassword();

    return (
        <div className="flex items-center justify-center w-full h-screen relative" style={{backgroundImage: `url(${authForm})`,backgroundAttachment: "fixed",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="w-full max-w-md mx-auto rounded-2xl backdrop-blur-md bg-secondary/5 border border-secondary/20">

                <div className="px-8 py-8 w-full flex flex-col">
                    <div className="relative mb-5 flex items-center justify-center">


                        <span className="absolute w-12 h-12 rounded-full bg-primary/30 soft-ping"></span>


                        <span className="absolute w-10 h-10 rounded-full bg-primary/60 blur-md glow"></span>


                        <div className="relative text-accent bg-primary rounded-full text-2xl p-3">
                            <IoKey />
                        </div>

                    </div>

                    <h1 className="text-3xl font-nunito font-bold text-center text-accent mb-2">
                        Forgot Password
                    </h1>

                    <p className="text-text text-center mb-6">
                        Enter your email to receive a reset link
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full h-12 px-4 rounded-xl bg-light-gray/10 border border-text-gray/20 text-text outline-none"
                        />

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}

                        {success && (
                            <p className="text-accent text-sm">{success}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 rounded-xl relative group overflow-hidden bg-primary text-white font-semibold flex items-center justify-center gap-2"
                        >
                            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-back/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transhtmlForm duration-1000">
                        </div>
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                "Send Reset Link"
                            )}
                        </button>

                    </form>
                    <Link to="/login" className="flex items-center text-text hover:text-secondary transition-all duration-100 gap-3 mt-3 group relative ms-6 cursor-pointer"><BiArrowBack className="group-hover:scale-x-120 absolute -inset-s-6.25 transition-all duration-100"/> Return back to login page</Link>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;