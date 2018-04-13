$(document).ready(function(){
    let currentVal = ""; //string to keep trck of values entered
    
    updateDisplay(); 
    
    // when clearAll button is clicked, the current value and display reset
    $('#clearAll').on('click',function(){
        currentVal = "";
        updateDisplay();
    });

    // when clearLast button is clicked, the most recent value is removed from
    // the calculation
    $('#clearLast').on('click',function(){
        currentVal = currentVal.slice(0,-1);
        $('#result').html(currentVal);
    });

    // when a button from the calc-btn class is clicked, its value is added to
    // the calculation
    $(".calc-btn").on('click',function(){
        currentVal += $(this).attr('value');
        $('#result').html(currentVal);
        return currentVal;
    });
  
    // when total button is clicked, the currentVal string is evaluated and the
    // display is updated, then currentVal is reset to empty
    $("#total").on('click',function(){
        currentVal = eval(currentVal);
        updateDisplay();
        currentVal = "";
    });
  
    // when the percent button is clicked, the current value is divided by 100 to
    // get the percentage
    $('#percent').on('click', function(){
        currentVal = "("+currentVal+")/100";
        updateDisplay();
    });
  
    // this funciton updates the display with the currentVal
    function updateDisplay(){
        $('#result').html(currentVal);
    }
});
