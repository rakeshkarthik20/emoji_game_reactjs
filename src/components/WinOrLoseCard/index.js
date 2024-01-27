// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {className, score, playAgain, topScore} = props
  const resultHeading = score < topScore ? 'Score' : 'Best Score'
  const bestScoreHeading = score === 12 ? 'You Won' : 'You Lose'
  const imagUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <div className={`WinOrLoseCardContainer ${className}`}>
      <img
        src={imagUrl}
        alt="win or lose"
        className="won-game-image smallDevice"
      />
      <div className="score-main-container">
        <h1 className="result-heading">{bestScoreHeading}</h1>
        <div className="score-container">
          <p className="best-score-heading">{resultHeading}</p>
          <p className="best-score">{score}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        src={imagUrl}
        alt="win or lose"
        className="won-game-image large-Device"
      />
    </div>
  )
}

export default WinOrLoseCard
