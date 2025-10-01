import {Link} from "react-router-dom"
import style from "./Nav.module.css";

export default function NavBar(){
    return (
        <nav className={style.nav}>
           <Link  to={'/'}>
            <div>People</div>
           </Link>
           <Link to={'/ships'}>
            <div>Ships</div>
           </Link>
           <Link to={'/planets'}>
            <div>Planets</div>
           </Link>
        </nav>
    )
}