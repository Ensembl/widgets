$(function() {
  $('._widget').each(function() {
    $(this).closest('.panel').find('._widget_heading h2').append('&nbsp;<a class="btn btn-default btn-xs" href="#">-</a>').find('a').on('click', { widget: $(this) }, function(e) {
      e.preventDefault();
      e.data.widget.slideToggle();
      this.innerHTML = this.innerHTML === '-' ? '+' : '-';
    });
  });
});
