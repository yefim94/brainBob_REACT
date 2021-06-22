const Slogo = ({slogoHeading1, slogoHeading2, alt, src}) => {
  return (
    <div className="slogo-cont">
        <div className="slogo-left">
        <h2>{slogoHeading1}</h2>
        <h4>{slogoHeading2}</h4>
        <div className="start-btn">
          <a href="#">Start</a>
          <i class="fas fa-play"></i>
        </div>
        </div>
        <div className="slogo-left">
          <img  style={{borderRadius: "20px"}}width="100" alt={alt} src={src}></img>
          </div>
    </div>
  )
}

export default Slogo