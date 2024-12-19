let data = [
    {
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "answer": "Blue Whale"
    },
    {
      "question": "Which country is famous for the Eiffel Tower?",
      "options": ["Germany", "Italy", "France", "Spain"],
      "answer": "France"
    },
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "answer": "4"
    },
    {
      "question": "Which fruit is known as the 'King of Fruits'?",
      "options": ["Apple", "Mango", "Banana", "Grapes"],
      "answer": "Mango"
    },
    {
      "question": "What color is the sky on a clear day?",
      "options": ["Green", "Blue", "Red", "Yellow"],
      "answer": "Blue"
    },
    {
      "question": "Which is the longest river in the world?",
      "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
      "answer": "Nile"
    },
    {
      "question": "How many days are there in a leap year?",
      "options": ["364", "365", "366", "367"],
      "answer": "366"
    },
    {
      "question": "What do bees collect from flowers?",
      "options": ["Nectar", "Honey", "Pollen", "Water"],
      "answer": "Nectar"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": ["China", "Japan", "Thailand", "Korea"],
      "answer": "Japan"
    },
    {
      "question": "What is the smallest planet in our solar system?",
      "options": ["Mars", "Venus", "Mercury", "Earth"],
      "answer": "Mercury"
    },
    {
      "question": "Which organ pumps blood through the body?",
      "options": ["Lungs", "Heart", "Liver", "Brain"],
      "answer": "Heart"
    },
    {
      "question": "How many sides does a triangle have?",
      "options": ["2", "3", "4", "5"],
      "answer": "3"
    },
    {
      "question": "What is the national currency of the United States?",
      "options": ["Euro", "Pound", "Dollar", "Yen"],
      "answer": "Dollar"
    },
    {
      "question": "Which is the fastest land animal?",
      "options": ["Cheetah", "Lion", "Horse", "Leopard"],
      "answer": "Cheetah"
    },
    {
      "question": "Which continent is the Sahara Desert located in?",
      "options": ["Asia", "Africa", "Australia", "South America"],
      "answer": "Africa"
    },
    {
      "question": "What is the primary source of energy for life on Earth?",
      "options": ["Wind", "Water", "Sun", "Soil"],
      "answer": "Sun"
    },
    {
      "question": "Which shape has four equal sides?",
      "options": ["Rectangle", "Triangle", "Square", "Pentagon"],
      "answer": "Square"
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "NaCl"],
      "answer": "H2O"
    },
    {
      "question": "How many colors are there in a rainbow?",
      "options": ["5", "6", "7", "8"],
      "answer": "7"
    },
    {
      "question": "Which animal is known for carrying its house on its back?",
      "options": ["Turtle", "Snail", "Crab", "Lobster"],
      "answer": "Snail"
    }
  ]
  
  ;


let section = document.querySelector('section');





let score = 0;


  let currQues = 0;

function showQuestion(){
    if(currQues>= data.length){
        let result = document.createElement('h2');
        result.textContent = 'Thank you for participating';
        
        let scoreEl = document.createElement('h3');
        scoreEl.textContent = `Score : ${score}`;
        section.appendChild(result);
        section.appendChild(scoreEl);

    }else{
    let questionEl = document.createElement('h2');
    let optionEl = document.createElement('div');
    let next = document.createElement('button');
    next.textContent = 'Next Question ->'
    next.classList.add('next');

    section.appendChild(questionEl);
    section.appendChild(optionEl);
    section.appendChild(next);


    
    let {question,options,answer} = data[currQues];


    questionEl.textContent = question;

    options.forEach(opt=>{
        let button = document.createElement('button');
        button.textContent = opt;
        optionEl.appendChild(button);
    })

    optionEl.addEventListener('click',(event)=>{
        if(event.target.tagName=='BUTTON'){
            if(event.target.textContent==answer){
                score++;
                event.target.classList.add('correct')
                console.log(event.target)
            }else{
                event.target.classList.add('wrong');
                score-= 0.25;
            }

        }

        let nodeList = optionEl.childNodes;
        nodeList.forEach(btn=>btn.disabled=true)

    })

    next.addEventListener('click',()=>{
        currQues++;
        section.innerHTML = "";
        showQuestion();
    })
    }

    
}

showQuestion();

