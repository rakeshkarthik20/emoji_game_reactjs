// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCard, onClickUpdateScore} = props
  const {id, emojiName, emojiUrl} = emojiCard

  const onClickEmoji = () => {
    onClickUpdateScore(id)
  }
  return (
    <li className="emojiCard">
      <button type="button" className="EmojiImageButton" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
