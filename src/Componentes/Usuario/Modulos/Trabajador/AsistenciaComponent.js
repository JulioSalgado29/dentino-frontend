import React from 'react'
import QrReader from 'react-qr-reader2'

class AsistenciaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
      this.setState({
        result: data,
      })
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={'environment'}
        />
        <h1>{this.state.result}</h1>
      </div>
    )
  }
}
export default AsistenciaComponent;