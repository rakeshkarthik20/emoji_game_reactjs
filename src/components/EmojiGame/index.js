/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    previousIdsList: [],
    score: 0,
    topScore: 0,
    winLose: false,
    win: false,
    navBarScore: true,
  }

  onClickUpdateScore = id => {
    const {score, topScore, previousIdsList} = this.state
    let updateScore = score
    let updatedTopScore
    let previousId
    if (previousIdsList !== []) {
      previousId = previousIdsList.find(each => each === id)
    }
    console.log(previousId)
    if ((previousId === undefined || previousIdsList === []) && score < 12) {
      updateScore = score + 1
    } else {
      if (parseInt(score) === 12) {
        this.setState({
          topScore: score,
          winLose: true,
          previousIdsList: [],
          navBarScore: false,
          win: true,
        })
      }
      updatedTopScore = topScore < score ? score : topScore
      this.setState({
        score: updateScore,
        winLose: true,
        navBarScore: false,
        topScore: updatedTopScore,
        previousIdsList: [],
        win: false,
      })
    }
    this.setState(prevState => ({
      previousIdsList: [...prevState.previousIdsList, id],
      score: updateScore,
      win: false,
    }))
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  playAgain = () => {
    const {topScore, score} = this.state
    const updatedTopScore = topScore < score ? score : topScore
    this.setState({
      score: 0,
      winLose: false,
      previousIdsList: [],
      navBarScore: true,
      topScore: updatedTopScore,
      win: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const updateEmojisList = this.shuffledEmojisList(emojisList)
    const {score, topScore, winLose, navBarScore, win} = this.state
    let winLoseCardDisplay = 'blockWinLoseCard'
    let emojiCardDisplay = 'displayEmojiCards'

    if (winLose) {
      winLoseCardDisplay = 'displayWinLoseCard'
      emojiCardDisplay = 'blockEmojiCards'
    }
    if (score === 12) {
      winLoseCardDisplay = 'displayWinLoseCard'
      emojiCardDisplay = 'blockEmojiCards'
    }

    return (
      <div className="emojiGameContainer">
        <NavBar score={score} topScore={topScore} navBarScore={navBarScore} />
        <div className="emojiGameMainContainer">
          <div className={`emojiCardsContainer ${emojiCardDisplay}`}>
            {updateEmojisList.map(each => (
              <EmojiCard
                emojiCard={each}
                key={each.id}
                onClickUpdateScore={this.onClickUpdateScore}
              />
            ))}
          </div>
          <WinOrLoseCard
            className={winLoseCardDisplay}
            score={score}
            topScore={topScore}
            playAgain={this.playAgain}
            win={win}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
