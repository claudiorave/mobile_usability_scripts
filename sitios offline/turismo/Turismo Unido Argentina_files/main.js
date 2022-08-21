(function($){
	var w = $(window),
		sT = w.scrollTop(),
		parallax = $('.js-parallax');


	function parallaxEffect(){
		parallax.each(function(){
			var $this = $(this),
				data_scroll = $this.data('scroll') || 2;

			$this.css({'transform': 'translateY('+ ( sT /data_scroll) +'px)' });
		});
	}


	w.on('scroll', function(){
		sT = w.scrollTop();
		requestAnimationFrame(parallaxEffect);
	});

	parallaxEffect();


	
})(jQuery);
/*
(function($){ 

	let configObject = {		
		startDate:'2020-06-03',
		endDate:'2020-08-03',
		autoClose: true,
		showShortcuts: false,
		language:'es',
		hoveringTooltip: false,
	    singleMonth: true,
	    stickyMonths: true,
	    customOpenAnimation: function(cb){$(this).fadeIn(1,cb);},
		customCloseAnimation: function(cb){$(this).fadeOut(1,cb);},
		getValue: function(){return this.innerHTML;}
	};

	moment.lang('es', {
	  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
	  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
	  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
	  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
	  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
	});
	moment.locale('es');

	$('#js-datepicker').dateRangePicker(configObject)
		/*.bind('datepicker-first-date-selected', function(event, obj){
			console.log(obj);
			this.innerHTML = moment(obj.date1).format('MM [de] MMMM, YYYY');
			$('#js-datepicker-hidden').val(moment(obj.date1).format('YYYY-MM-DD') );
			// obj will be something like this:
			// {
			// 		date1: (Date object of the earlier date)
			// }
		})*/
/*		.bind('datepicker-change', function(event, obj){
			console.log(obj);
			//this.innerHTML = moment(obj.date1).format('MM [de] MMMM, YYYY');
			this.innerHTML = moment(obj.date1).format('DD [de] MMMM') + ' a ' + moment(obj.date2).format('DD [de] MMMM');
			$('#js-datepicker-hidden').val(obj.value);
		});

})(jQuery);*/

(function($){ 
	var listingGalleryPrev = $('.listing-gallery-prev'),
		listingGalleryNext = $('.listing-gallery-next');

	listingGalleryNext.on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			listingGallery = $this.closest('.listing-gallery'),
			total = parseInt( listingGallery.data('total') ),
			n = parseInt( listingGallery.attr('data-n') );

		if(n < total){
			n++;
		}else{
			n=1;
		}

		listingGal(listingGallery, n);

	});

	listingGalleryPrev.on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			listingGallery = $this.closest('.listing-gallery'),
			total = parseInt( listingGallery.data('total') ),
			n = parseInt( listingGallery.attr('data-n') );

		if(n > 1){
			n--;
		}else{
			n=total;
		}

		listingGal(listingGallery, n);

	});

	function listingGal(l,n){
		l.attr('data-n',n);

		var listingGalleryInner = l.find('.listing-gallery-inner');

		console.log(listingGalleryInner);

		listingGalleryInner.css({
			'transform' : 'translateX(-'+ (n-1) +'00%)'
		});
	}


})(jQuery);