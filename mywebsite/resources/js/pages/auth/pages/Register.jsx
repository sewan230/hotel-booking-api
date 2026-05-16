import AuthLayout from "../components/AuthLayout"
import RegisterForm from "../components/RegisterForm"
import authForm from "../../../../../public/images/back-authForm.jpg"
const Register = () => {
  return (
    <section className="w-full h-screen relative" style={{backgroundImage: `url(${authForm})`,backgroundAttachment: "fixed",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="max-w-5xl mx-auto md:px-4 lg:px-0 flex items-center justify-center md:justify-evenly">
            <div className="w-0 md:w-[40%] mt-[calc(12.5vh)]">
            <AuthLayout/>
            </div>
            <div className="w-[80%] lg:w-[60%] max-h-[75vh] mt-[calc(12.5vh)]">
                <RegisterForm/>
            </div>
        </div>
    </section>
  )
}

export default Register