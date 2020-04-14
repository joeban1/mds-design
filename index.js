$(document).ready(function()

{
    $("#icey").hover(
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

