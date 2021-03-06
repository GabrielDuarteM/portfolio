import Introduction from "../../components/Introduction"
import sleep from "../../helpers/sleep"

class IntroductionContainer extends React.PureComponent {
  state = {
    text: "",
    completeText:
      "Hi, I'm Gabriel Duarte. I like to create useful things that draw attention positively.",
    ms: 35,
  }

  componentDidMount = async () => {
    for (let i = 0; i < this.state.completeText.length; i += 1) {
      const nextTextChar = this.state.completeText[i]

      this.setState(state => ({ text: state.text + nextTextChar }))

      const msVariance = this.verifyPauseCharacter(nextTextChar) ? 300 : 0

      // eslint-disable-next-line no-await-in-loop
      await sleep(this.state.ms + msVariance)
    }
  }

  verifyPauseCharacter = char => {
    const pauseCharacters = [",", "."]

    return pauseCharacters.includes(char)
  }

  render = () => (
    <Introduction
      text={this.state.text}
      finished={this.state.text === this.state.completeText}
    />
  )
}

export default IntroductionContainer
