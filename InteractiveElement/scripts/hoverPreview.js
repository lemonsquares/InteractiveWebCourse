this.hoverPreview = function(){

 };
this.hoverText = function()
{
	Offset = 10;
	
	//when a hoverable text marker is hovered over
	$(".hoverableText").hover(function(e) {
		this.t = this.title;
		
		//add a new div to the body with the hoverTextBox class and grab the text content (rel) from the hoverableText object
		$("body").append("<div class='hoverTextBox'>" + this.getAttribute('rel') +"</div>");		
		
		//now position the hoverTextBox next to the mouse
		$(".hoverTextBox")
			.css("top",(e.pageY) + "px")
			.css("left",(e.pageX + Offset) + "px")
			.fadeIn("slow");
	},  //when the hovering ends remove the hoverTextBox
	function(){
		this.title = this.t;	
		$(".hoverTextBox").remove();
    });
}
// starting the script on page load
$(document).ready(function(){
	hoverPreview();
	hoverText();
});



