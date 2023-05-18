import "./Routing.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../../App";
import Page404 from "../../Pages/Page404/Page404";
import UserList from "../../Pages/UserList/UserList";
import About from "../../Pages/About/About";
function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="home" element={<UserList />}/>
                <Route path="userlist" element={<UserList />}/>
                <Route index element={<UserList />}/>
                <Route path="about" element={<About />}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
