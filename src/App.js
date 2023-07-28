import React, {Component} from 'react';
class App extends Component {
  methodtwo(x) {
    let a;
    var sum = 0;
    while(x!==0){
      a=x%10;
      sum+=a;
      x= Math.floor(x/10);
    }
    document.getElementById("root").innerHTML=sum;
  }
  methodone=() => {
    const a = 33;
    var b;
      if(a/11){
        b = true
      }
      else{
        b = false
      }
      document.getElementById("root").innerHTML=b;
    }
    render() {
      return (
        <div>
          <h1>{methodtwo(152)}</h1>
          <h1>{methodone()}</h1>
        </div>
      )
    }
}
export default App;