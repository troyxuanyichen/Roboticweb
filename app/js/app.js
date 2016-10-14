$(document).foundation();

$('#pledgeCheckbox').click(function(event) {
    if(!$(this).is(':checked')) {
        $('#pledgeInfo').hide();
    } else {
        $('#pledgeInfo').show();
    }
})


/**
 * Mouse follower
 * @param e
 */
function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('msg').innerHTML = e.clientX + ', ' +
        e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}


/*var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
  //  s.style.margin = '0';
   // s.style.padding = '5px';
  //  s.style.border = '1px solid red';
    s.innerHTML = '<img src="images/artwork 1_poster_.png" style="height: 50px; width:60px;">'
    return {
        init: function() {
            document.body.appendChild(s);
        },

        run: function(e) {
            var e = e || window.event;
            s.style.left  = (e.pageX+5 ) + 'px';
            s.style.top = (e.pageY ) + 'px';
          //  getMouseCoords(e);
        }
    };
}());*/

window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
};

/**
 * Flipclock.js
 * @type {jQuery}
 */
var clock;

//$(document).ready(function() {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(currentDate.getFullYear(), 11, 24);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
//});


function submitPledge() {
    console.log('This is the submit pledge information-----');
}
