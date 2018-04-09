$(document).ready(function(){
    let currentVal = "";
    
    updateDisplay();
    
    $('#clearAll').on('click',function(){
        currentVal = "";
        updateDisplay();
    });

    $('#clearLast').on('click',function(){
        currentVal = currentVal.slice(0,-1);
        $('#result').html(currentVal);
    });

    $(".calc-btn").on('click',function(){
        currentVal += $(this).attr('value');
        $('#result').html(currentVal);
        return currentVal;
    });
  
    $("#total").on('click',function(){
        currentVal = eval(currentVal);
        updateDisplay();
        currentVal = "";
    });
  
    $('#percent').on('click', function(){
        currentVal = "("+currentVal+")/100";
        updateDisplay();
    });
  
    function updateDisplay(){
        $('#result').html(currentVal);
    }
});
