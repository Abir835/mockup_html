
    // function myFunction(imgs) {
    //     var expandImg = document.getElementById("expandedImg");
    //     expandImg.src = imgs.src;
    //     expandImg.parentElement.style.display = "block";
    // }
 
    $(document).ready(function(){
        $('.gallery').magnificPopup({
    
            delegate:'a',
            type:'image',
            gallery:{
                enabled:true
            }
    
        });
    
    });
    