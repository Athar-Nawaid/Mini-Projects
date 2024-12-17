let input = document.getElementById('input');
let select = document.getElementById('select');
let reset = document.getElementById('reset');


let data = 0;
let op = "";


select.addEventListener('click',(event)=>{
    
   
    if(event.target.tagName=='H3'){
        input.value = input.value+event.target.textContent;  
         
        console.log(input.value )
    }else if(event.target.tagName=='H2'){

        data = Number(input.value);
        op=event.target.textContent;
        input.value='';
        console.log(data)
    }else if(event.target.tagName=='H1'){
        if(op=='+'){
            data = data +Number(input.value);
            input.value = data;
        }else if(op=='-'){
            data = data-Number(input.value);
            input.value = data;
        }else if(op=='*'){
            data = data *Number(input.value);
            input.value = data;
        }else if(op=='/'){
            data= data/Number(input.value);
            input.value = data;
        }
    }
})

reset.addEventListener('click',()=>{
    input.value='';
    data = 0;
})


