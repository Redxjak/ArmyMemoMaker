import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Memorandum from './components/Memorandum';
import GenerateMemorandum from './components/GenerateMemorandum';



class App extends Component {

  constructor(props){
      super(props);
      this.state={
          devMode: true,
      }
  }


  ToggleButton(){
    this.setState((currentState) => ({
        devMode: !currentState.devMode,
    }));
  console.log(this.state.devMode)
  }


  //LINKS for Buttons
    AR2550(){
        window.open("https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN36874-AR_25-50-004-WEB-7.pdf");
    }

    Issues(){
        window.open("https://github.com/Redxjak/ArmyMemoMaker/issues");
    }
    
    GitHubLink(){
        window.open("https://github.com/Redxjak/ArmyMemoMaker")
    }


render() {

  //AutoGenerate the sessionStorage("adv"). Various issues are caused if it is not always present
  if(sessionStorage.getItem("adv") === null){
  sessionStorage.setItem("adv", ",,,")
}
return (
<HashRouter basename={process.env.PUBLIC_URL + '/#/'}>
  <div>
    <h2>Wecome to the Army Memo Maker!</h2>
{/*
    <svg style={{width: '80'}} className="devCorner" viewBox="0 0 80 80" aria-hidden="true">
      <path fill="rgb(70, 74, 78)" d="M80 0L80 80L0 0L80 0Z"></path>
    </svg>


    <label style={{transform: 'rotate(45deg)', margin: '0', top:'18', height: '20' }} className="devCorner switch"><input type="checkbox" className="" onClick={()=> this.ToggleButton() } /><span className="slider round"></span></label>
*/}
    <nav className="navbar w3-round-xlarge navbar-expand-lg navbar-light" style={{height: 'auto', boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)', backgroundColor: '464a4e'}}>
      <ul className="w3-center" style={{flex:'auto', padding:'0', margin:'0'}}>
        <Link to={'/'}><button style={{margin: '5px', height: '50px', display: 'inline'}}> Home </button></Link>
        <Link to={'/memorandum'}><button style={{margin: '5px', height: '50px', display: 'inline'}}> Review </button></Link>
        <TESTParametersButton />
        <button style={{margin: '5px', height: '50px', display: 'inline'}} onClick={this.AR2550} type="button">Army Regulation 25-50</button>
        <button style={{margin: '5px', height: '50px', display: 'inline'}} onClick={this.Issues} type="button">Report an Issue</button>
        <button style={ {paddingTop: '10px', margin: '5px', height: '50px', display: 'inline'}} onClick={this.GitHubLink} type="button">
          <icon aria-hidden="true" className="fa fa-github fa-2x" /></button>
      </ul>
    </nav>
    <hr />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/memorandum' component={Memorandum} />
      <Route path='/about' component={About} />
      <Route path='/generatememorandum' component={GenerateMemorandum} />
    </Switch>
  </div>
</HashRouter>
);
}
}

const TESTParametersButton = () => (
<button style={{margin: '5px', height: '50px', display: 'none'}} form="setTestForm" type="submit">Set Test Parameters</button>
)
export default App;
