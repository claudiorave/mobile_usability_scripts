$(function() {
 
  var html_var =  $('.dropdown > .list > .item:first-child').html();
 $('.caption').html(html_var);
  
  $('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
  });
  
  $('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html( $(this).html() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });
  if(location.pathname.includes("/products/macetas")){
    setTimeout(function(){
    
      let plotter_value =  $(".plotted").val();
      let plotters = $(".plotted-value");
      Array.from(plotters).forEach(function(element, index){
        if(element.dataset.value == plotter_value){
          
        	$(element).click().trigger('click');;
        }
      });
    }, 1000)
  }
  $(".plotted-value").on('click', function(e){
  	
    let value = this.dataset.value;
    $(".plotted").val(value).trigger('change');
  });
  
});