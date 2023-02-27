import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {value: false}

  onChange = () => {
    this.setState({value: true})
    console.log('hey')
  }

  render() {
    const {value} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let Auth

    if (value === false) {
      Auth = (
        <div className="forInner">
          <div className="forWidth">
            <h2 className="forHeader">
              How satisfied are you with our customer support performance ?
            </h2>

            <ul className="forImageC">
              {emojis.map(each => (
                <li className="list" key={each.id}>
                  <button className="buttonclass" type="button">
                    <img
                      src={each.imageUrl}
                      className="forImage"
                      alt={each.name}
                      onClick={this.onChange}
                    />
                  </button>
                  <p className="forParaSad">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      Auth = (
        <div className="forInner">
          <img src={loveEmojiUrl} className="forLoveImagae" alt="love emoji" />
          <h1 className="forHeaderInLove">Thank You!</h1>
          <p className="forParaWe">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="forOuter">{Auth}</div>
  }
}
export default Feedback
