import {Component} from 'react'
import {
  MainContainer,
  MainHead,
  Form,
  Label,
  Input,
  Select,
  SubmitButton,
  BackgroundImage,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topTxt: '',
    bottomTxt: '',
    activeOption: '',
    url: '',
    top: '',
    bottom: '',
  }

  submitForm = event => {
    event.preventDefault()

    const {activeOptionId, imageUrl, topTxt, bottomTxt} = this.state
    this.setState({
      activeOption: activeOptionId,
      url: imageUrl,
      top: topTxt,
      bottom: bottomTxt,
    })
  }

  changeFontSize = event => {
    this.setState({activeOptionId: event.target.value})
  }

  changeImgUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topTxt: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomTxt: event.target.value})
  }

  renderImage = () => {
    const {activeOption, url, top, bottom} = this.state

    return (
      <>
        <BackgroundImage backgroundImageUrl={url} />
        <Para size={activeOption}>{top}</Para>
        <Para size={activeOption}>{bottom}</Para>
      </>
    )
  }

  render() {
    const {activeOptionId, imageUrl, topTxt, bottomTxt} = this.state

    return (
      <>
        <MainContainer>
          <Form onSubmit={this.submitForm}>
            <MainHead>Meme Generator</MainHead>
            <Label htmlFor="imageInput">Image URL</Label>
            <Input
              type="text"
              id="imageInput"
              placeholder="Enter the Image URL"
              onChange={this.changeImgUrl}
              value={imageUrl}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.changeTopText}
              value={topTxt}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              onChange={this.changeBottomText}
              value={bottomTxt}
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              id="fontSize"
              onChange={this.changeFontSize}
              value={activeOptionId}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <SubmitButton type="submit">Generate</SubmitButton>
          </Form>
          {this.renderImage()}
        </MainContainer>
      </>
    )
  }
}

export default MemeGenerator
