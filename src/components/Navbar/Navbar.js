import styles from "./Navbar.module.scss";
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar(props) {
    const listMenu = ["Home","About Me","Skills","Portfolio","Contacts"]
    return (
        <div>
            <nav>
                <ul className={styles.Navbar}>
                    {listMenu.map((elem,i)=> (<NavbarItem menuItem={elem} key={i}/>))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;




