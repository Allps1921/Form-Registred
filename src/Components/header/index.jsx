import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="container-header">
            <img
                width="220"
                className="logo"
                src="https://cdn.awsli.com.br/400x300/2571/2571073/logo/grande-removebg-preview-3-zxervs.png"
            />


            <div className="menu">
                <Link to="/Players">
                    <span>
                        Players
                    </span>
                </Link>
                <Link to="/Teams">
                    <span>
                        Teams
                    </span>
                </Link>
            </div>

            <button className="btn btn-contact">Contact</button>
        </div>
    )
}