const Header = ({title, titleSpan}) => {
  return (
    <div className="upper-div-cont">
      <h1>{title} <span className="heading-bold">{titleSpan}</span></h1>
    </div>
  )
}

export default Header