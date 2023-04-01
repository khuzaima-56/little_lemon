

const Button = (props) => {
    const btnid = props.id === undefined ? ' ' : props.id
    return <button className="button" id={btnid}>{props.title}</button>;
}

export default Button;