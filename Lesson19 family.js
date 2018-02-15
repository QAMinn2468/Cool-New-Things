/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var family2;// = $('#family2');
var bruce;//=$('#bruce');
var madison;  //=$('#madison');
var hunter; //=$('#hunter');




$('family2').html(<div id='family2'><h1>Family2</h1></div>');

$('bruce').html(<div id='bruce'><h2>bruce</h2></div>);

$('madison').html(<div id='madison'><h3>madison</h3></div>);

$('hunter').html(<div id='hunter'><h3>hunter</h3></div>);




$('#family1').insertAfter('family2');// #family2 is inserted after family1
$('#family2').prepend('bruce');  // #bruce is added as a child of family2
$('#bruce').prepend('madison');  //adds #madison as a child of #bruce
$('#bruce').append('hunter');  //  adds #hunter as the second child of #bruce
