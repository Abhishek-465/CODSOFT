let string="";
let memory="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        try{
            if(e.target.innerHTML== '='){
                string=eval(string);
                memory=string;
                document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=='AC'){
                string='';
                memory='';
                document.querySelector('input').value=string;
                }
            else if(e.target.innerHTML=='C'){
                    l=string.length;
                    string=string.substring(0,l-1);
                    document.querySelector('input').value=string;
                    }
            else if(e.target.innerHTML=='e'){
                        string=string+"2.7182";
                        document.querySelector('input').value=string;
                        }
            else if(e.target.innerHTML=='x'){
                            string=string+"*";
                            document.querySelector('input').value=string;
                        }    
            else{
                    console.log(e.target);
                    string=string+e.target.innerHTML;
                    document.querySelector('input').value=string;
                    }
        }
        catch(err){
            document.querySelector('input').value="ERROR";
        }
        })
    }) 