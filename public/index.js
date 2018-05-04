document.getElementsByClassName('btn_tryfree')[0].onclick = sendData;
document.getElementsByClassName('btn_tryfree')[1].onclick = sendData;
document.getElementsByClassName('a_review_more')[0].onclick = readmore;
document.getElementsByClassName('a_review_more')[1].onclick = readmore;
document.getElementsByClassName('button_review_hide')[0].onclick = showless;
document.getElementsByClassName('button_review_hide')[1].onclick = showless;



function sendData(){
	console.log('data sent!');
	//document.getElementById('part1').style.display = 'none';
	//document.getElementById('part2').style.display = 'block';
}

function getPosition(label, opt){
   var list;
   if(opt===1){
		list = document.getElementsByClassName("a_review_more");
   }else{
		list = document.getElementsByClassName("button_review_hide"); 
   }
   list = [].slice.call(list); 
   return list.indexOf(label);
}

function readmore(){
	var ind = getPosition(this, 1);
	console.log(ind);
	document.getElementsByClassName('a_review_more')[ind].style.display = 'none';
	document.getElementsByClassName('span_review_toggle')[ind].style.display = 'block';
	document.getElementsByClassName('button_review_hide')[ind].style.display = 'block';
}

function showless(){
	console.log(this);
	var ind = getPosition(this, 2);
	console.log(ind);
	document.getElementsByClassName('a_review_more')[ind].style.display = 'block';
	document.getElementsByClassName('span_review_toggle')[ind].style.display = 'none';
	document.getElementsByClassName('button_review_hide')[ind].style.display = 'none';
}

// Cache selectors
var lastId,
    topMenu = $("#myNavbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});