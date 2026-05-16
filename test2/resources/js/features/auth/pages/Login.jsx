import AuthLayout from "../components/AuthLayout"
import LoginForm from "../components/LoginForm"
import authForm from "../../../assets/images/back-authForm.jpg"
const Login = () => {
  return (
    <section className="w-full h-screen relative" style={{backgroundImage: `url(${authForm})`,backgroundAttachment: "fixed",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="max-w-5xl mx-auto md:px-4 lg:px-0 flex items-center justify-center md:justify-evenly">
            <div className="w-0 md:w-[40%]">
            <AuthLayout/>
            </div>
            <div className="w-[80%] md:w-[40%]">
                <LoginForm/>
            </div>
        </div>
    </section>
  )
}

export default Login