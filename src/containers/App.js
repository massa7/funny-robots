import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {

    constructor() {
        super()
        this.state = {
          robots: [],
          searchfield: ''
        }
    }


    // componentDidMount(){
    //     this.setState({robots})  // pulling data from internal robots.js file
    // }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }


    render() {
        const {robots, searchfield} = this.state;    //distructuring
        const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

// class App extends Component {

//     constructor() {
//         super()
//         this.state = {
//           robots: robots,
//           searchfield: ''
//         }
//     }


//     onSearchChange = (event) => {
//         this.setState({
//             searchfield: event.target.value
//         })
//     }


//     render() {
//         const filteredRobots = this.state.robots.filter(robot =>{
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })

//         return(
//             <div className='tc'>
//                 <h1>RobotFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <CardList robots={filteredRobots}/>
//             </div>
//         );
//     }
// }

export default App;