import logoExplore from "../../../assets/images/logo-explore.png";

const AuthLayout = () => {
  return (
        <div className="welcome mt-[calc(12.5vh)] hidden md:flex flex-col justify-center items-start">
                <img src={logoExplore} className="w-[50%]" alt="logo"/>
                <h2 className="text-[4rem] font-bebas_neue font-extrabold text-white leading-14 mt-2">EXPLORE<br/>HORIZONS</h2>
                <p className="text-white text-[0.9em] mt-3 leading-[1.2rem]">Where Your Dream Destinations<br/>Become Reality.</p>
                <p className="text-white text-[0.9em] mt-3 leading-[1.2rem]">Embark on a journey where every corner<br/>of the world is within your reach.</p>
            </div>
        
  )
}

export default AuthLayout