
const Testimonail = (props) => {
    const user = props.userdata
    
    const imageStyle= {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    }
    
    return (
      <article className="testimonial">
        <div className="h">
          <img
            className="dp"
            style={imageStyle}
            src={user.Image}
            alt="User Dp"
          />
          <div>
            <h3 className="name">{user.Name}</h3>
            <h6 className="username">{user.Username}</h6>
          </div>
        </div>
        <p className="comment">{user.Comment}</p>
      </article>
    );
}

export default Testimonail