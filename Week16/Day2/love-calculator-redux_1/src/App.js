import React from 'react';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import ButtonClick from './components/ButtonClick';
import Results from './components/Results';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fname:'',
      sname:'',
      res:{}
    }
  }

  handleChange = (e) => {
    console.log(e.target.name,e.target.value);
    this.setState({[e.target.name]:e.target.value});
  }

  handleClick = () => {
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c',
    		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    	}
    };

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.sname}&fname=${this.state.fname}`, options)
    	.then(response => response.json())
    	.then(response => {
        console.log(response)
        this.setState({res:response})
      })
    	.catch(err => console.error(err));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FirstName handleChange={this.handleChange} />
          <SecondName handleChange={this.handleChange}/>
          <ButtonClick handleClick={this.handleClick}/>
          <Results result={this.state.res}/>
        </header>
      </div>
    );
  }

}

export default App;
