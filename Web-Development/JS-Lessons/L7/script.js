// $(function() {
//     $("p").mouseenter(function(){
//         $(this).css("font-weight", "bold");
//     })
//     $("p").mouseleave(function(){
//          $(this).css("font-weight", "normal");       
//     })
// })


$(function(){
    $('p').on({
        mouseenter: function(){
            $(this).css('font-weight', 'bold');
        },
        mouseleave: function(){
            $(this).css('font-weight', "normal");
        }
    });

    $('#showPopup').click(function(){
        $('.popup').slideDown()
    })
})
