import Home from "./Home";
import Leftbar from "./BarLeftSide";
import Rightbar from "./BarRightSide";
import { BrowserRouter } from "react-router-dom";
export default function App() {
    return (
        <div className="home w-full min-h-screen mx-auto flex items-center" id="Home">
            <BrowserRouter>
            <Leftbar />
                <Home />
            <Rightbar />
            </BrowserRouter>
        </div>
    );
}
