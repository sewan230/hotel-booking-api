import '../css/app.css'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router";
// import Home from '../features/public/pages/Home';
import AppRouter from './router/index';
// import Hotels from '../features/public/pages/Hotels';


function App() {

  return (
    <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  )
}

export default App
