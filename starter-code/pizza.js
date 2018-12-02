let buttons = [
	{ selector: '.btn-pepperonni', item: '.pep', className: null, text: 'pepperonni', price: 1 },
	{ selector: '.btn-mushrooms', item: '.mushroom', className: null, text: 'mushrooms', price: 1 },
	{ selector: '.btn-green-peppers', item: '.green-pepper', className: null, text: 'green peppers', price: 1 },
	{ selector: '.btn-sauce', item: '.sauce', className: 'sauce-white', text: 'white sauce', price: 3 },
	{ selector: '.btn-crust', item: '.crust', className: 'crust-gluten-free', text: 'gluten-free', price: 5 }
];

let price = 21;

$(function(){
	$.each(buttons, function(index, button){
		$(button.selector).click(function(e){
			e.preventDefault();

			$(this).toggleClass('active');
			$('.price ul li:contains(' + button.text + ')').toggle();

			if(button.className) {
				$(button.item).toggleClass(button.className);
			} else {
				$(button.item).toggle();
			}

			if($(this).hasClass('active')) {
				price += button.price;
			} else {
				price -= button.price;
			}

			$('.price strong').text('$' + price);
		});
	});

	$('.btn-crust, .btn-sauce').click();
});
