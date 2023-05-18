import "./Page404.css";
import  page404  from "../../../Assets/Images/page404.jpg"

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<img src={ page404 } alt="image not found" />
        </div>
    );
}

export default Page404;
