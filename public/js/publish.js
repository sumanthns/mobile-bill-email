(function() {
  jQuery(function() {
    var es = new EventSource('/stream');
    es.onmessage = function(e) {
      $("#" + jQuery.parseJSON(e.data).index).css('color', 'green');
    };
    return $(".sendButton").on('click', function(e) {
      $(this).attr('value', 'Sending...');
      $(this).attr('disabled', 'disabled');
      $.post('/send-mail');
      return e.preventDefault();
    });
  });
}).call(this);