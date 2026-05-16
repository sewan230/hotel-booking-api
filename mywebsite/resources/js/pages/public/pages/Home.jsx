import { Outlet } from "react-router-dom";
import {Link} from 'react-router';
const Home = () => {
  return (
    <div>
      <Link to="/hotels">
        Hotels</Link>
        <Outlet />
    </div>
  )
}

export default Home