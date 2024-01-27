// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, navBarScore} = props

  const navBarScoreDisplay = navBarScore
    ? 'navBarScoreDisplay'
    : 'navBarScoreHide'

  return (
    <div className="navBarContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="logoImage"
          alt="emoji logo"
        />
        <h1 className="emojiLogoName">Emoji Game</h1>
      </div>
      <div className={`navBarScoresContainer ${navBarScoreDisplay}`}>
        <p className="score">Score: {score}</p>
        <p className="topScore">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
