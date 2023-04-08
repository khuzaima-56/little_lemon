import { ReactComponent as Menu1 } from "../Assets/Menu1.svg";
import { ReactComponent as Menu2 } from "../Assets/Menu2.svg";
import '../Styles/menu.css'
const Menu = () => {
    return (
        <section className="menuPage">
            <Menu1 className='menu'/>
            <Menu2 className='menu'/>
        </section>
    );
}

export default Menu