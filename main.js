$(document).ready(function () {
  //your code here
  $('#button').hover(

        function(){
            $('#button').animate({ backgroundColor: '#c74f43' });
        }, 
        function(){
            $('#button').animate({ backgroundColor: '#cc847d' });
        }
    );
});