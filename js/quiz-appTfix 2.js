// Main Quiz App JS 
// Approach: single MyAPP variable with all the info

// Instantiate new empty object
var quizApp = {};

// Pseudo Code:
	// 1- Random Variables for cycling between the questions  ( check )
	// 2- Contain all of our question data 	( check )
	// 3- Fill in the html template to show the data  	( this.render() )
	// 4- A way to handle user input  	( this.bindUI )
	// 5- A way to go to next questions  ( this.processInput )
	// 6- Display current place in quiz ( this.processInput calls render ).

// Start Code
// 1- Random Variables for cycling between the questions
quizApp.currentQuestion = 0;
quizApp.totalCorrect = 0;

//ADDED GLOBAL VARIABLE UI BIND ******************
var qcontainer = $("#question-container");
var scoreCard = $('#scorecard');
var acontainerHTML= $('.images') [0];
var acontainer = $(acontainerHTML);
var next= $('#next'); 
var splash =$('#splash');

$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("images/kurt-vonnegut-dots.jpg",
				"images/kurt-vonnegut.jpg",
				"images/david-carradine-flip-dots.jpg",
				"images/david-carradine-flip.jpg",
				"images/alfred-hitchcock-dots.jpg",
				"images/alfred-hitchcock.jpg",
				"images/jean-luc-godard-dots.jpg",
				"images/jean-luc-godard-small.jpg",
				"images/robert-bresson-dots.png",
				"images/robert-bresson.jpg",
				"images/woody-allen-dots.jpg",
				"images/woody-allen.jpg");



// 2- Contain all of our question data
quizApp.questionData = [
		{
			"question" : '" To practice any art no matter how well or how badly <br/> is a way to make your soul grow. "',
			"questionNB" : '" To practice any art no matter how well or how badly is a way to make your soul grow. "',
            "dotsImage": "images/kurt-vonnegut-dots.jpg",
            "image" : "images/kurt-vonnegut.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
                        ],
            "correct" : 4,
            "theAnswer" : "Kurt Vonnegut"
  
        },
        {
            "question" : '" If you cannot be the poet be the poem. "',
             "dotsImage": "images/david-carradine-flip-dots.jpg",
            
            "image" : "images/david-carradine-flip.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
            				
                        ],
            "correct" : 0,
            "theAnswer" : "David Carradine"
            
        },
        {
            "question" : '" Self –plagarism is style. "',
             "dotsImage": "images/alfred-hitchcock-dots.jpg",
            "image" : "images/alfred-hitchcock.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
                        ],
            "correct" : 3,
            "theAnswer" : "Alfred Hitchcock"
            
        },
          {
            "question" : '" Its not where you take things from its where you take them too. "',
            "dotsImage": "images/jean-luc-godard-dots.jpg",
            "image" : "images/jean-luc-godard-small.jpg",
             
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
                        ],
            "correct" : 2,
            "theAnswer" : "Jean Luc Godard"

           
        },
          {
            "question" : '" All serious artists should strive towards simplicity. "',
            "dotsImage": "images/robert-bresson-dots.png",
            "image" : "images/robert-bresson.jpg",

            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
                        ],
            "correct" : 5,
            "theAnswer" : "Robert Bresson"
            
        },
         {
             "question" : '" Talent is luck. The important thing in life is courage. "',
            "dotsImage": "images/woody-allen-dots.jpg",
            "image" : "images/woody-allen.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Robert Bresson"
                        ],
            "correct" : 1,
            "theAnswer" : "Woody Allen"
            
        }
];

// Function to start the app
quizApp.init = function(){
	// Prints content to the page
//	this.render();
	this.startpage();

	// Prepares bindings on elements for event handlers
	this.bindUI();	


};

quizApp.startpage = function(){

	    setTimeout(function(){
      $('#quizName').css('opacity', '0').addClass('slideDown');
   }, 400);


	

    splash.fadeIn(1500);
	$('#start').fadeIn(1500).html('Start');
	scoreCard.fadeIn(1500).html('( Words of wisedom from six wise men... )')



	//	var currentQuestionData = quizApp.questionData[quizApp.currentQuestion]; // quizApp.currentQuestion = 0;
//$('#wrapper').css({ opacity: 1 });
	acontainer.css({'background-image': 'url("images/woody-allen.jpg")'})
	//splash.css({'background': 'black', 'min-height': '100%', 'min-width': '100%'});

	$('#start').on('click', function(){
		

		splash.fadeOut(1500);
	//	qcontainer.fadeIn(3500);
		quizApp.render();
		

		
	})
}

// 3- Fill in the html template to show the data
// 3a - Need tp create the template
// 3b - Need to add it to the page with the question data
quizApp.render = function(){
	// Empty question wrapper before adding content ie each question	
	//acontainer.empty();
	//acontainer.fadeIn(600);
	


	qcontainer.empty(); // IS THIS IS BEST PLACE?? PERHAPS MOVE TO NEXTHANDLER()
	qcontainer.fadeIn(3500);

	if( quizApp.questionData.length > quizApp.currentQuestion ){


	// Get the content for the current question
	var currentQuestionData = quizApp.questionData[quizApp.currentQuestion]; // quizApp.currentQuestion = 0;

	acontainer.css({'background-image': 'url("'+currentQuestionData.dotsImage+'")'})

	$('#wrapper').css({ opacity: 1 });

	// Create the html for the question template
	var questionTemplate = "";
		questionTemplate += "<p class='questionText'>"+ currentQuestionData.question +"</p>";

	// Creating html for choices radio buttons
	var choicesHTML = "<form id='choices'>";

	// NOTE: Structure for jQuery each function.
	// $.each( collection, callback( counter, item ) );

	// Adds the array items the choices html string
	$.each( currentQuestionData.choices, function( counter, choice ){
		choicesHTML += "<label><input type='radio' name='mustbesamename' value='"+counter+"' />" + choice + "</label>"+"<br />";

	});

	// Adds submit button and closing form tag to choices template
	choicesHTML += "<input type='button' id='checkAnswer' value='' /></form>";
	
	// Adds chioces template to main template
	questionTemplate += choicesHTML;

	// Add template to the page
	qcontainer.append(questionTemplate);

	$('#choices label').click(function() {
  $(this).addClass("selected").siblings().removeClass("selected");
  });



}
};

// 4- A way to handle user input
quizApp.bindUI = function(){
	// Binding the processInput function to submit button
	$(document).on('click', '#checkAnswer', quizApp.processInput );



	// Prevent form from submitting
	$(document).on('submit', '#choices', function(event){ event.preventDefault();
		
		

	});

	// Added a function as a handler toAdding a function to handle the next button after answering the next button.
	$(document).on('click', '.quote', quizApp.nextHandler );
};

// 5- A way to go to next questions
quizApp.processInput = function(){

	 $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });


	// Get the info for the current question
	var currentQuestionData = quizApp.questionData[quizApp.currentQuestion];

	// Get the current selected choice and turn string '0' into a numnber 1
	var selectedItem = parseInt($(":checked").val(), 10);


	
	// check if selected & Compare it to the correct answer 
	if ( isNaN(selectedItem) ){ 
		$(".overlay").fadeIn(1000);
		return;
	}



	quizApp.showAnswer();

	if( selectedItem == currentQuestionData.correct ){
		// Increment correct answers if correct
		quizApp.totalCorrect++;	

	}

	
	//	Increment current question counter regardless of correctness
	

	// Prepare container for content
	//	acontainer.empty();
	//	acontainer.fadeIn(500);

	// Prepare answer template
	/** 
	 * NOTE: Notice how i changed the answer template setup. 
	 * You already have access to the acontainer object, so you can change the css on it via jquery
	 * instead of trying to make a string.
	 */

	// acontainer.empty();
	

	};
	

// Show answer function to handle initial answer submit. 
// Shows the answer image, does not process the answer.
quizApp.showAnswer = function(){
	// Get the info for the current question
	var currentQuestionData = quizApp.questionData[quizApp.currentQuestion];




	// Hiding qcontainer to show next button
	qcontainer.fadeOut(1500);

	

	$('#wrapper').animate({ opacity: 0 }, 2000,function() {
                    // Animation complete.
                      });



	if(quizApp.currentQuestion == 0){
			acontainer.css({'background-image': 'url("'+currentQuestionData.image+'")'}).append("<button class='quote'>"+currentQuestionData.questionNB+ " - " +"<span id ='bold'>"+currentQuestionData.theAnswer+ "</span>"+"<span id ='arrow'>&#8594;</span></button>");

	}else{

	// Setting background and next button
	acontainer.css({'background-image': 'url("'+currentQuestionData.image+'")'}).append("<button class='quote'>"+currentQuestionData.question+ " - " +"<span id ='bold'>"+currentQuestionData.theAnswer+ "</span>"+"<span id ='arrow'>&#8594;</span></button>");
	}

	acontainer.fadeIn(1500);
	//acontainer.
	quizApp.currentQuestion++;

	var doneTemplate ="";

	doneTemplate = "( You've put a name to " + quizApp.currentQuestion +" of  the "+ quizApp.questionData.length + " quotes. )" ;

	scoreCard.html(doneTemplate);


};

// Adding a function to handle the next button after answering.
// Runs the check to see if answer
quizApp.nextHandler = function(){



	
		
	 

	//qcontainer.fadeOut(1500);

	//$('#finalscore').fadeIn( 600, function(){
		setTimeout(function(){
			// Render Next question if there is a next question
			if( quizApp.questionData.length > quizApp.currentQuestion ){
				quizApp.render();
				return;
			} else {
				$('#wrapper').css('opacity', '0');
				qcontainer.fadeOut(1500);

					acontainer.css({'background-image': 'url("images/woody-allen.jpg")'})
				quizApp.finalScore();
				
			}
		}, 1500);
	

	$('#wrapper').css({ opacity: 1 }, 100,function() {
                    // Animation complete.
                      });
	// Clear content from itermediate answer screen
	acontainer.css({'background-image': ''});



	$(this).unbind('click').remove();	// this is the next button
	$('.quote').remove();// unnecaessary as above does same

	// Handles the answer checking
	//quizApp.processInput();

	// Displays the next question
	quizApp.render();
};

quizApp.finalScore = function(){

	// Clearing the containers
	qcontainer.empty();
	//scoreCard.empty();

	

	// Set final score template NOTE USING SCORECARD!!
	//var finalscore= $('#finalscore');
	//$('#background').addClass('bgImg');
	scoreTemplate = "( You got "+quizApp.totalCorrect +" out of the "+ quizApp.questionData.length + " correct! )";
	
	// Add final score to page
	scoreCard.html(scoreTemplate);

	splash.fadeIn(1500);
	$('#start').html('Back to Start').on('click', function(){

	location.reload();
			
	})
};



// Get Page ready to go
$(document).ready(function(){


	// Initialize the app after the DOM has loaded.
	quizApp.init();
});







