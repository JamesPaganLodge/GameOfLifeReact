import React, {Component} from 'react'
import '../box.css'

class Box extends Component {
  constructor() {
    super()

    this.state = {}
  }

  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }

  render() {
    return(
      <div
        className={this.props.boxClass}
        id={this.props.boxId}
        onClick={this.selectBox}
      />
    )
  }
}

export default Box