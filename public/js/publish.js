(function() {
  jQuery(function() {
    $(".sendButton").on('click', function(e) {
      e.preventDefault();
      $(this).attr('value', 'Sending...');
      $(this).attr('disabled', 'disabled');
      
      var es = new EventSource('/send-mail');      
      
      es.addEventListener('message', function(e){      
        $("#" + jQuery.parseJSON(e.data).index).removeClass('pending').addClass('done');
        console.log($('.pending').size());
        if($('.pending').size() == 0) {
          alert('Completed!');
          es.close();          
        }
      }, false);

      es.addEventListener('error', function(e) {
        if(es.readystate != EventSource.CLOSED) es.close();
      }, false);

    });
  });
}).call(this);