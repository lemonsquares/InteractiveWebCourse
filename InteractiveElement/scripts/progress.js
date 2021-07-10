	// some flags that track progress through the page
	var interactComplete1 = false;
	var interactComplete2 = false;
	var interactComplete3 = false;
	
	
	
	/* -- 1 --  revealing the  text window on hovering the Entry Hover */
	$("#EntryHover").hover(function(e){
		if (interactComplete1 == false)
		{
			//makes the first text window appear
			$("#TextWindow1").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
		}
	},
	function(){ 
	
	});

	
	/* -- 2 --  Clicking on the hidden word "Interactions" */
	$('#InteractionsButton').on("click",function(){

		//makes the second text window appear and hides the first
		$("#TextWindow1").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
		$("#TextWindow2").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
		interactComplete1 = true;
	})
	
	
	/* -- 3 --  Clicking on the hidden word "Reveal" */
	$('#RevealsButton').on("click",function(){

		//hides the second text window
		$("#TextWindow2").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
		interactComplete2 = true;

		//make the darkness "curtains" slide aside by adding the "slide" class to them - the slide class is defined in the CSS
       $("#blackoutCurtainRight").addClass('slide');
       $("#blackoutCurtainLeft").addClass('slide');
		
	})

	
	/* -- 4 -- when you hover over the off flightlight on the ground you pick it up */
	$("#flashlightOff").hover(function(e){
		if (interactComplete2 == true)
		{
			// by marking interactComplete3 the "On" flashlight and spotlight will start following the mouse
			interactComplete3 = true;
			
			
			//hide the "off" model
			$("#flashlightOff").css({visibility: "hidden"});
			
			//cause the hoverableTexts to become interactive (book titles, etc)
			$(".hoverableText").css({"z-index": 3, visibility: "visible"});
		}
	},
	function(){ 
	
	});
	

	//whenever the mouse moves call flashlightFollow
	document.body.onmousemove = function(event) {flashlightFollow(event)};

	function flashlightFollow(e) {
	
		//only follow if we've completed steps 1, 2, and 3
		if (interactComplete3 == true)
		{
			var x = e.clientX;
			var y = e.clientY;
			  
			//the flashLight element groups the flashlight image and spotlight together, so just have that follow the mouse
			var d = document.getElementById('flashLight');
			d.style.position = "absolute";
			d.style.left = x+'px';
			d.style.top = y +'px';
		}
	}