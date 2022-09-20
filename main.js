function clickbutton(target){
    let result = document.getElementById(`result`);
    let target_value = target.innerHTML;
    
    if (target_value == "="){
        result.innerHTML = eval(result.innerHTML);
    }else if(target_value == "AC"){
        result.innerHTML = "0";
    }else{
        let last_value = result.innerHTML.slice(-1);
        
        if ((target_value =="+"||target_value =="-"||target_value =="*"||target_value =="/")
           &&(last_value =="+"||last_value =="-"||last_value =="*"||last_value=="/")){
              result.innerHTML = result.innerHTML.slice(0,-1)+target_value;
              
        }else if((result.innerHTML == "00")||(result.innerHTML == "0")){
            result.innerHTML = target_value;
        
        }else if(((target_value =="0")||(target_value =="00"))
                &&(last_value =="+"||last_value =="-"||last_value =="*"||last_value=="/")){
            result.innerHTML = result.innerHTML; 
    
        }else
            result.innerHTML += target_value;
        }
    }
