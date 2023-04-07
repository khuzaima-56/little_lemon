import { Link } from "react-router-dom";

const Button = (props) => {
    const btnid = props.id === undefined ? ' ' : props.id
    return <button className="button" id={btnid}>
        <Link to={props.to} element={props.element}>{props.title}</Link>
    </button>;
}

export default Button;