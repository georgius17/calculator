function add (a,b) {
	return a+b
}

function substract (a,b) {
	return a-b
}

function divide (a,b){
    return a/b
}

function multiply (a,b){
  return a*b
}

function power(a,n) {
    let out=a;
    for (let i=1; i<n; i++){
        out*=a;
    }
    return out;
	}

function result(n){
    display.innerHTML=n;
}

function factorial(n) {
    if (n==0 || n==1){
        return 1;
    }
    else {
        return n*factorial(n-1)
    }
}

function whichKey(key, sign){
    if (sign=="undefined"){
      display.innerHTML+=key
      value1+=key
    }
    else {
      display.innerHTML+=key
      value2+=key
    }
}

function whichMinus(){
  display.innerHTML+="-"
  
  if (value1=="" && sign=="undefined"){
    return value1+="-"
  }
  if (value1!=="" && sign!=="undefined" && value2==""){
    return  value2+="-"
  }
  if (value1!=="" && sign=="undefined"){
   return sign="minus"
  }
  if (value2!=="" && sign!=="undefined"){
    finalRes()
    display.innerHTML+=" -"
  }
}

//decide if has been already chosen symbol (sign) 
//and therefore start finalRes OR sign is undf
//and sign is chosen by signerID
function finalAuto(id){
  if (sign!=="undefined"){
    finalRes(id)
    sign = signerID(id)
    }
  if (sign=="undefined"){
    sign=signerID(id)
    }
}

// return coresponding sign based on key ID
function signerID(id){
   if (id=="keyEqual"){
        return "undefined"
        }

   if (id=="keyMultiple"){
        display.innerHTML+="*"
        return "multiple"
        }
   if (id=="keyPlus"){
        display.innerHTML+="+"
        return "plus"
        }
   if (id=="keyMinus"){
       
        }
   if (id=="keyDivide"){
        display.innerHTML+="/"
        return "divide"
        }
   if (id=="keyPower"){
        display.innerHTML+="^"
        return "power"
        }
}

function finalRes(){
  let a = Number(value1)
  let b = Number(value2)
  if (sign=="multiple"){
    display.innerHTML=multiply(a,b)
  }
  if (sign=="plus"){
    display.innerHTML=add(a,b)
  }
  if (sign=="minus"){
    display.innerHTML=substract(a,b)
  }
  if (sign=="divide"){
    display.innerHTML=divide(a,b)
  }
  if (sign=="power"){
    display.innerHTML=power(a,b)
  }
  if (sign=="factorial"){
    display.innerHTML=factorial(a)
    sign="undefined"
  }
  if (sign=="sqrt"){
    display.innerHTML=Math.sqrt(a)
    sign="undefined"
  }
  
  value1=display.innerHTML
  value2=""
  //sign = signerID(id)
}

const display=document.getElementById("display")
let sign = "undefined"
let value1 =""
let value2 =""
const buttons= Array.from(document.querySelectorAll(".item"));
buttons.forEach(function(elem) {
        elem.addEventListener("click", function() {
            for (let i=0; i<10; i++){
              if (elem.id=="num"+i){
                whichKey(i, sign)
                } }
          
            if (elem.id=="keyMultiple"){
              finalAuto(elem.id)}
            if (elem.id=="keyPlus"){
              finalAuto(elem.id)}
            if (elem.id=="keyMinus"){
              
              whichMinus()}
            if (elem.id=="keyDivide"){
             finalAuto(elem.id)}
            if (elem.id=="keyEqual"){
              finalAuto(elem.id)}
            if (elem.id=="keyPower"){
              finalAuto(elem.id)}
            if (elem.id=="keyC"){
              value1=""
              value2=""
              sign="undefined"
              display.innerHTML=""
            }
            if (elem.id=="keyDot"){
              whichKey(".", sign)
            }
            if (elem.id=="keyFac"){
              sign="factorial"
              finalRes()
            }
            if (elem.id=="keySqrt"){
              sign="sqrt"
              finalRes()
            }
          
            
        })  })

