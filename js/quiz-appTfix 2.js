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

// 2- Contain all of our question data
quizApp.questionData = [
		{
            "question" : "Talent is luck. The important thing in life is courage.",
            "dotsImage": "images/woody-allen-dots.jpg",
            "image" : "images/woody-allen.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
                        ],
            "correct" : 1,
            "theAnswer" : "Woody Allen"

            
        },
        {
            "question" : "If you cannot be the poet be the poem.",
             "dotsImage": "images/david-carradine-dots.jpg",
            
            "image" : "images/david-carradine.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
            				
                        ],
            "correct" : 0,
            "theAnswer" : "David Carradine"
            
        },
        {
            "question" : "Self –plagarism is style.",
             "dotsImage": "images/alfred-hitchcock-dots.jpg",
            "image" : "images/alfred-hitchcock.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
                        ],
            "correct" : 3,
            "theAnswer" : "Alfred Hitchcock"
            
        },
          {
            "question" : "Its not where you take things from its where you take them too.",
            "dotsImage": "images/jean-luc-godard-dots.jpg",
            "image" : "images/jean-luc-godard.jpg",
             
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
                        ],
            "correct" : 2,
            "theAnswer" : "Jean Luc Godard"

           
        },
          {
            "question" : "Be yourself, everyone else is already taken.",
            "dotsImage": "images/oscar-wilde-dots.jpg",
            "image" : "images/oscar-wilde.jpg",

            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
                        ],
            "correct" : 5,
            "theAnswer" : "Oscar Wilde"
            
        },
         {
            "question" : "To practice any art no matter how well or how badly is a way to make your soul grow. So do it",
            "dotsImage": "images/kurt-vonnegut-dots.jpg",
            "image" : "images/kurt-vonnegut.jpg",
            "choices" : [
                            "David Carradine",
                            "Woody Allen",
                            "Jean Luc Godard",
                            "Alfred Hitchcock",
                            "Kurt Vonnegut",
                            "Oscar Wilde"
                        ],
            "correct" : 4,
            "theAnswer" : "Kurt Vonnegut"
            
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

	$('#arrow').hide();

		var currentQuestionData = quizApp.questionData[quizApp.currentQuestion]; // quizApp.currentQuestion = 0;
$('#wrapper').css({ opacity: 1 });
	acontainer.css({'background-image': 'url("'+currentQuestionData.dotsImage+'")'})
	//splash.css({'background': 'black', 'min-height': '100%', 'min-width': '100%'});
	$('#start').on('click', function(){

		splash.fadeOut(1500);
		qcontainer.fadeIn(3500);
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
	qcontainer.empty();
	qcontainer.fadeIn(3500);

	$('#arrow').hide();

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
		choicesHTML += "<input type='radio' name='mustbesamename' value='"+counter+"' />" + choice + "<br />"; // "<label for =''>" ++ "</label><br />";
	});

	// Adds submit button and closing form tag to choices template
	choicesHTML += "<input type='button' id='checkAnswer' value='' /></form>";
	
	// Adds chioces template to main template
	questionTemplate += choicesHTML;

	// Add template to the page
	qcontainer.append(questionTemplate);
};

// 4- A way to handle user input
quizApp.bindUI = function(){
	// Binding the processInput function to submit button
	$(document).on('click', '#checkAnswer', quizApp.processInput );

	// Prevent form from submitting
	$(document).on('submit', '#choices', function(event){ event.preventDefault(); });

	// Added a function as a handler toAdding a function to handle the next button after answering the next button.
	$(document).on('click', '.quote', quizApp.nextHandler );
};

// 5- A way to go to next questions
quizApp.processInput = function(){
	// Get the info for the current question
	var currentQuestionData = quizApp.questionData[quizApp.currentQuestion];

	// Get the current selected choice and turn string '0' into a numnber 1
	var selectedItem = parseInt($(":checked").val(), 10);
	
	// check if selected & Compare it to the correct answer 
	if ( isNaN(selectedItem) ){ 
		alert("Please select an answer");
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

	

	$('#wrapper').animate({ opacity: 0 }, 1700,function() {
                    // Animation complete.
                      });

	// Setting background and next button
	acontainer.css({'background-image': 'url("'+currentQuestionData.image+'")'}).append("<button class='quote'>"+currentQuestionData.question+ " - " +currentQuestionData.theAnswer+ "</button>").fadeIn(4500);
	$('#arrow').show();
	//acontainer.
};

// Adding a function to handle the next button after answering.
// Runs the check to see if answer
quizApp.nextHandler = function(){

	 quizApp.currentQuestion++;
		
	 var doneTemplate ="";

	doneTemplate = "You've answered " + quizApp.currentQuestion +" out of "+ quizApp.questionData.length + " questions" ;

	scoreCard.html(doneTemplate);

	qcontainer.fadeOut(1600);

	//$('#finalscore').fadeIn( 600, function(){
		setTimeout(function(){
			// Render Next question if there is a next question
			if( quizApp.questionData.length > quizApp.currentQuestion ){
				quizApp.render();
			} else {
				//alert("You've reached the end of the quiz" );
				quizApp.finalScore();
				return;
			}
		}, 1500);
	

	$('#wrapper').css({ opacity: 1 }, 100,function() {
                    // Animation complete.
                      });
	// Clear content from itermediate answer screen
	acontainer.css({'background-image': ''});



	$(this).unbind('click').remove();	// this is the next button
	$('.quote').remove();

	// Handles the answer checking
	//quizApp.processInput();

	// Displays the next question
	quizApp.render();
};

quizApp.finalScore = function(){

	// Clearing the containers
	qcontainer.empty();
	scoreCard.empty();

	// Set final score template
	var finalscore= $('#finalscore');
	//$('#background').addClass('bgImg');
	scoreTemplate = "You scored "+quizApp.totalCorrect +" out of "+ quizApp.questionData.length ;
	
	// Add final score to page
	finalscore.text(scoreTemplate);

	splash.fadeIn(500);
	$('#start').html('Re-Start').on('click', function(){
		finalscore.empty();

		splash.fadeOut(1500);
		//qcontainer.fadeIn(3500);
		quizApp.render();
		
	})
};



// Get Page ready to go
$(document).ready(function(){


	// Initialize the app after the DOM has loaded.
	quizApp.init();
});







