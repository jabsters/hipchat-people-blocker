$j = jQuery.noConflict();

var blacklistArray = new Array('First Last');
$j('td.nameBlock p').each(function(){
  if(jQuery.inArray($j(this).text().trim(),blacklistArray)>-1) {
     $j(this).parent().parent().parent().hide();
  }
});
