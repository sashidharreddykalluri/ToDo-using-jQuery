// Check off Specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).fadeOut(500, function(){
		$(this).parent().remove();
	});
});

// New Todo function
$("input[type='text']").on("keypress", function(event){
	if (event.which === 13) {
		var todotext = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});