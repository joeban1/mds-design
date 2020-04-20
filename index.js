$(document).ready(function()

{
    $("#icey1").hover(
        function()
        {
            $(this).attr("src", "images/icehouse.gif");
        },
        function()
        {
            $(this).attr("src", "images/icehouse-static.jpg");
        }                         
    ); 
    
    $("#icey2").hover(
        function()
        {
            $(this).attr("src", "images/Selva.gif");
        },
        function()
        {
            $(this).attr("src", "images/proj2.jpg");
        }                         
    ); 
        
});

/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut('slow', newpage);
    });
    function newpage() {
    window.location = newLocation;
    }

    $(document).ready(function(){

        /*! Fades in whole page on load */
        $('body').css('display', 'none');
        $('body').fadeIn(500);
        
        }); 