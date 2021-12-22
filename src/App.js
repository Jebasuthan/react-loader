import React from 'react';
import { Loader } from './components';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      height: 100,
      width: 100,
      color: '#ff0000',
      background: '#ffffff'
    }
  }

  componentDidMount() {
    this.loadListItem();
  }

  loadListItem () {
    this.setState({ showLoader: false });
  }

  onChangeRange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'color' || name === 'background' ? value : parseInt(value) });
  }

  showLoader () {
    this.setState({ showLoader: true })
    setTimeout(()=> {
      this.setState({ showLoader: false })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <Loader loading={this.state.showLoader} width={this.state.width} height={this.state.height} color={this.state.color} background={this.state.background} />
        <h2>React Loader</h2>
        <div className="form-control">
          <label>Color </label>
          <input type="color" name="color" value={this.state.color} onChange={(event)=> this.onChangeRange(event) }/>
        </div>
        <div className="form-control">
          <label>Background color </label>
          <input type="color" name="background" value={this.state.background} onChange={(event)=> this.onChangeRange(event) } />
        </div>
        <div className="form-control">
          <label>Width</label>
          <input type="range" min="10" step="5" max="256" value={this.state.width} name="width" onChange={(event)=> this.onChangeRange(event) }/> <span
          className="text-value">{ this.state.width }</span>
        </div>
        <div className="form-control">
          <label>Height</label>
          <input type="range" min="10" step="5" max="256" value={this.state.height} name="height" onChange={(event)=> this.onChangeRange(event) }/> <span
          className="text-value">{ this.state.height }</span>
        </div>
        <div className="form-control">
          <button type="button" onClick={ () => this.showLoader() }>Show Loader</button>
        </div>
      </div>
    );
  }
}

export default App;
