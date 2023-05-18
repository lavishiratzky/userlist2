import "./Menu.css";
import { Link } from "react-router-dom";
function Menu(): JSX.Element {
    return (
        <div className="Menu">
			 <Link to="home">Home</Link>
             <Link to="userlist">UserList</Link>
             <Link to="about">About</Link>
        </div>
    );
}

export default Menu;
