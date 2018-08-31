
$(document).ready(function() {
    
// creat object with questions, options, and answers
  var correct = 0;
  var wrong = 0;
  
  var intervalID;
  var time = 60;
  var clockRunning = false;

var trivia = [
  {
    question: 'How many fluid ounces are in a pint?',
    options: ['16 ', '24 ', '32 ', '12 '],
    answer: '16',
  },
  {
    question: 'What city does Batman live in?',
    options: ['Boston ', 'LA ', 'Gotham City ', 'Krypton '],
    answer: 'Gotham City',
  },
  {
    question: 'Which degrees is the same in celsius and in fahrenheit?',
    options: ['40 ', '0 ', '32 ', '-40 '],
    answer: '-40',
  },
  {
    question: 'How many colors are in a rainbow?',
    options: ['9 ' , '6 ' , '7 ' , '8 '],
    answer: '7',
  },
  {
    question: "In Japanese, what is the word for goodbye?",
    options: ['Chow ','Sayonara ','Konnichiwa ','adios '],
    answer: 'Sayonara',
  },
  {
    question: 'Which fingernail grows fastest?',
    options: ['Middle ','Thumb ','Pinky ','Ring '],
    answer: 'Middle',
  },
  {
    question: "What year did World War 1 start?",
    options: ['1910 ', '1914 ', '1921 ','1912 '],
    answer: '1914',
  }];

// #start on click function and begin clock

  $("#start").on("click", function () {
    console.log(trivia[1].question)
    event.preventDefault();
    // run();

    clockRunning = true;

    if (clockRunning = true) {
      intervalID = setInterval(decrement, 1000);
    }

    // decrement function, target #time

    function decrement() {
      $("#time").html("Seconds left: " + time);
      time--;
    }

    if (time === 0) {
      reset();
    }

    // function run() {
    //   if ()
    // }
    
    // function reset to stop clock at 0

    function reset() {
      clockRunning = false;
      clearInterval(intervalID);
    }


    // push first question to DOM

    $("#question").html(trivia[1].question+"<br>"+"</br>")
    $("#options").prepend(trivia[1].options+"<br>"+"</br>")
    
    $("#question").html(trivia[2].question+"<br>"+"</br>")
    $("#options").prepend(trivia[2].options+"<br>"+"</br>")
    
    $("#question").html(trivia[3].question+"<br>"+"</br>")
    $("#options").prepend(trivia[3].options+"<br>"+"</br>")
    
    $("#question").html(trivia[4].question+"<br>"+"</br>")
    $("#options").prepend(trivia[4].options+"<br>"+"</br>")
    
    $("#question").html(trivia[5].question+"<br>"+"</br>")
    $("#options").prepend(trivia[5].options+"<br>"+"</br>")
    
    $("#question").html(trivia[6].question+"<br>"+"</br>")
    $("#options").prepend(trivia[6].options+"<br>"+"</br>")
    
    $("#question").html(trivia[0].question+"<br>"+"</br>")
    $("#options").prepend(trivia[0].options+"<br>"+"</br>")
    
   console.log(trivia.questions)
   console.log(trivia.options)

	// for (var i = 0; i < options.length; i++) {
	// 	var option = options[i];
	// 	console.log(options);
  
  // for (var i = 0; i < question.length; i++) {
	// 	var q1 = question[i];
	// 	console.log(question);

  })

});