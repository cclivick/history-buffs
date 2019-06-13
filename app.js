    $('#headingOne').hover(function() {
      $('body').css({'background-image': 'url(../history-buffs/images/3worlds.jpg', 'transition': '1s'});
    }) 
    $('#headingTwo').hover(function() {
      $('body').css({'background-image': 'url(../history-buffs/images/Colonial-America.jpg', 'transition': '1s'})  
    }), function() {
      // on mouseout, reset the background colour
      $('body').css({'background-image': 'url(../history-buffs/images/title-back.png)', 'transition': '1s'});
    }
