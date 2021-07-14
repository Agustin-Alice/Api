import React, {Component} from 'react'



class App extends Component {
 state = {
   bit : ''
 }
  componentDidMount(){
     setInterval(()=> {
      const promise = fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      
      promise.then(resp => resp.json()).then((res) => console.log(res))

     }, 10000)
  }
  
  render(){
    return (
      <div className="App">
        <p>{this.bit}</p>

      </div>
    );
  }
  
}

export default App;
