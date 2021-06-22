import { useEffect, useRef, useState } from 'react'

const Perk = ({cardEmoji, descOne, descTwo, emojiColor}) => {
  const [bookmark, setBookMark] = useState('#D6D6D6');
  const handleBookMark = (e) => {
      if(bookmark === "#D6D6D6" ) {
        setBookMark("#000")
      } else {
        setBookMark("#D6D6D6")
      }
  }
  return (
    <div className="perk-card" style={{display: "flex", justifyContent: "space-between", margin: "1rem"}}>
      <div className="perk-card-left" style={{display: "flex"}}>
        <div className="card-emoji" style={{display: "flex",alignItems: "center", backgroundColor: emojiColor, padding: "0.7rem", borderRadius: "15px"}}>
        <i class={cardEmoji} style={{color: "#FFF9F7", fontSize: "2.3rem"}}></i>
        </div>
        <div className="card-description" style={{marginLeft: "1rem", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
          <h4>{descOne}</h4>
          <h4 style={{color: "#68676C", fontWeight: "400"}}>{descTwo}</h4>
        </div>
      </div>
      <div className="perk-card-right">
      <i onClick={handleBookMark} class="fas fa-bookmark not-active" style={{color: bookmark, fontSize: "1.8rem"}}></i>
      </div>
    </div>
  )
}

export default Perk
