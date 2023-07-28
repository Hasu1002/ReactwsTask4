  class Demo {
    methodtwo(x) {
      let a;
      var sum = 0;
      while(x!==0){
        a=x%10;
        sum+=a;
        x= Math.floor(x/10);
      }
      return(sum);
      // document.getElementById("root").innerHTML=sum;

    }
    methodone=() => {
      const a = 1331;
      var b;
        if(a%11===0){
          b = true
        }
        else{
          b = false
        }
        return(b);
        // document.getElementById("root").innerHTML=b;
      }
  }
  var mydemo = new Demo();
console.log("Hello");
console.log("%s",mydemo.methodone()); 
console.log("%d",mydemo.methodtwo(152)); 