import Perk from './Perk'

const Perks = () => {
  return (
    <div className="perks-cont" style={{marginTop: "1.3rem"}}>
      <h3>Recommended</h3>
      <section>
        <Perk cardEmoji="fas fa-sms" descOne="Chatting" descTwo="5 mins" emojiColor="#ED776C" />
        <Perk cardEmoji="fas fa-music" descOne="Listen" descTwo="2 mins" emojiColor="#5447B6" />
        <Perk cardEmoji="fas fa-comment-alt" descOne="Speak" descTwo="8 mins" emojiColor="#E8915D" />
      </section>
    </div>
  )
}

export default Perks