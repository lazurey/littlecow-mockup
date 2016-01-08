(function($) {

  
  function init_tabs() {
    $('.tab a').click(function() {
      console.log('clicking tab');
      var content = '.' + $(this).attr('data-tab');
      $('.tab-content').not(content).hide();
      $(content).fadeIn();
      var $li = $(this).parent();
      $li.siblings().removeClass('active');
      $li.addClass('active');
    })
  }

  $(document).ready(function() {
    console.log('initializing');
    init_tabs();
  });

})(jQuery || window.jQuery);