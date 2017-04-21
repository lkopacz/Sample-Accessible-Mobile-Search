/**
 *
 * Handles toggling the mobile search bar and
 * enables tabbing support for accessibility.
 */
( function() {

	//mobile-search-form is the form id, and children are the inputs.
	var mobileSearch = document.getElementById('mobile-search-form').children;

	//Because the search children are hidden until exposed (in mobileSearchAppear), we want the tabindex to be -1
	for (var i = 0; i < mobileSearchChildren.length; i++) {
		mobileSearchChildren[i].tabIndex = -1;
	}

	//Mobile search wrapper (around the form tag) that is visually hidden
	var mobileSearchWrapper = document.querySelector('.mobile-search');

	//event function that toggles tabIndex and visually hides
	function mobileSearchAppear() {
		mobileSearchWrapper.classList.toggle('element-invisible');
		for (var i = 0; i < mobileSearchChildren.length; i++) {
			//visually hidden has a width of 1, checks what the width is to set the tabIndex
			if (mobileSearchWrapper.offsetWidth > 1) {
				mobileSearchChildren[i].tabIndex = 0;
			} else {
				mobileSearchChildren[i].tabIndex = -1;
			}
		}
	}

	//grabbs the button that toggles the item and adds click listener to it
	var mobileSearchButton = document.getElementById("mobile-search-toggle");
	mobileSearchButton.addEventListener('click', mobileSearchAppear);

	//assures that the tabindex goes back to -1 when you exit the search bar.
	mobileSearchChildren[mobileSearchChildren.length - 1].onblur = function() {
		mobileSearchWrapper.classList.add('element-invisible');
		for (var i = 0; i < mobileSearchChildren.length; i++) {
			mobileSearchChildren[i].tabIndex = -1;
		}
	}

})();
