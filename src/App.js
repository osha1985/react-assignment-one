import React, {Component} from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
    state = {
        username: 'Osher'
    };

    changeUsername = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div>
                <UserOutput/>
                <UserOutput/>
                <UserOutput name={this.state.username}/>
                <UserInput changeUsername={this.changeUsername} username={this.state.username}/>
            </div>
        );
    }
}

export default App;
