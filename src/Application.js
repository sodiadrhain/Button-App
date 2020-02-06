import React, {Component} from 'react';
import  "./App.css";
class Application extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }
    }

 countFunc = () => {
 
this.setState({count: this.state.count + 1})
 }

 componentDidUpdate(props, state){
   console.log('updated from:', state.count, 'to', this.state.count);
   if (this.state.count === 10 && this.state.count !== state.count) {
       this.setState({overTen: true})
   }
 }

render(){
    let count = this.state.count;
    return(
        <div className="center">
            <p className="text">Highscore is ten!</p>
            <h1>You clicked this button {count} times.</h1>
        { 
                (this.state.overTen) ?
                    <h2 className="red">Beat highscore of 10!</h2>
                    : null

        }
        
        <button className="button" onClick={() => this.countFunc()}>Click me</button>
        <button className="button" onClick={() => this.setState({ count: 0, overTen: false})}>Reset</button></div>
    )
}


}

export default Application;