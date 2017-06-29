/*
 * CSS Grid+ Jquery Masonry Hybrid 
 * Copyright 2016
 * Author: Eugene Chernyakov.
 * Author's homepage: http://dogma7.com
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 */

	
AnotherBrick=function(maxcol){
	if(!maxcol){
		maxcol=12;
	}
var oldColumns=0;

var resizeTimer = null;
$(window).bind('resize', function() {
if (resizeTimer) clearTimeout(resizeTimer);	
resizeTimer = setTimeout(resizer, 1);
});

resizer=function(){
ColNum();
MassonMover();
}

Init=function(){	
	$('.the-wall').addClass('row-holder');
	for(var i=1; i<=maxcol; i++){
		$('.the-wall').prepend('<div class="brick-col"></div>');
	}
}

ColNum=function(columns){
	var columns=0;
	$( ".brick-col" ).each(function( index ) {		
		if($(this).css('display') != 'none') {
			columns++;		
		}
	});	
	 console.log( columns );
	 return columns;
}

MassonArray=function() {
   ItemsQnt=$('.another-brick').length;
   ItemsObj=Array();
   for (var i=0; i<ItemsQnt; i++) {
	   ItemsObj[i]=$('.another-brick').eq(i);
   }
}

MassonMover=function(){	
	var columns=ColNum();
	if (columns==oldColumns){
		return
	}	
	var curCol=0;
	for (var i=0; i<ItemsQnt; i++) {
		var goal=$('.brick-col').eq(curCol); 
	  ItemsObj[i].appendTo(goal);
	  curCol++;
	  if(curCol>=columns){
		  curCol=0;
	  }
   }
   
   oldColumns=columns;
	
}


Init();
MassonArray();
resizer();
}





















  













