import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Form from './components/cat';
import createBrowserHistory from 'history/createBrowserHistory';
import MainComponent from './components/MainComponent';
const history = createBrowserHistory();
class App extends Component {

  render() {
    return (  
      <BrowserRouter history={history}>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }

  

}
export default App;
