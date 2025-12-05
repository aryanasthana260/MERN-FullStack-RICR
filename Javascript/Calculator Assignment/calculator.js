function appendValue(value)
{
  const display = document.getElementById("display");
  display.value = display.value + value;
}

function clearDisplay()
{
  const display = document.getElementById("display");
  display.value = "";
}

function calculate()
{
  const display = document.getElementById("display");

  try 
  {
    // For a simple calculator
    const result = eval(display.value);
    display.value = result;
  } catch (error)
   {
    alert("Invalid expression");
   }  
}


document.addEventListener("keydown",(abc)=>{
  console.log("Pressed Key",abc.key);

  if(abc.key==="Enter")
    {
      Input("=");      // use your existing Input() function
    }

  else if(abc.key==="1" ||
          abc.key==="2" ||
          abc.key==="3" ||  
          abc.key==="4" ||  
          abc.key==="5" ||
          abc.key==="6" ||
          abc.key==="7" ||
          abc.key==="8" ||
          abc.key==="9" ||
          abc.key==="0" ||
          abc.key==="+" ||
          abc.key==="-" ||
          abc.key==="*" ||
          abc.key==="/" 
  )
  {
    Input(abc.key);   // this handles numbers AND operators
  }

  else if(abc.key==="Backspace")
  {
    // delete last character, not "C"
    // because Input("C") clears everything which is not what backspace does
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }

});

