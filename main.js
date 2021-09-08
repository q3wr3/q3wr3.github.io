String.prototype.replaceBetween = function(start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
};

document.addEventListener('mousedown', e => {
	switch (e.which) {
        case 1:
            document.querySelector('html').classList.toggle('click')
            break;
        case 3:
            document.querySelector('html').classList.toggle('rClick')
            break;
        default:
            alert('You have a strange Mouse!');
    }
  	if (e.target.classList.contains("d")){
  		e.target.classList.toggle('d')
  		e.target.classList.toggle('g')
  	}
})
document.addEventListener('mouseup', e => {
	switch (e.which) {
        case 1:
            document.querySelector('html').classList.toggle('click')
            break;
        case 3:
            document.querySelector('html').classList.toggle('rClick')
            break;
        default:
            alert('You have a strange Mouse!');
    }
	if (e.target.classList.contains("g")){
		e.target.classList.toggle('d')
		e.target.classList.toggle('g')
	}
})

document.addEventListener('dragstart', e => {
	console.log(e.target.classList)
	switch (e.which) {
        case 1:
            document.querySelector('html').classList.toggle('click')
            break;
        case 3:
            document.querySelector('html').classList.toggle('rClick')
            break;
        default:
            alert('You have a strange Mouse!');
    }
	if (e.target.classList.contains("g")){
		e.target.classList.toggle('d')
		e.target.classList.toggle('g')
	}
})


let trueInfo = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her"
let fakeInfo = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies"

let curSelec = 0;

document.onselectionchange = function(e) {

    let selection = document.getSelection();

    let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;


    let start = anchorOffset < focusOffset ? anchorOffset : focusOffset;
    let end = anchorOffset < focusOffset ? focusOffset :  anchorOffset;
    let sel = selection.toString().length

    if (focusNode.parentElement != null && focusNode.parentElement.classList.contains('fakeInfo')){

    	if (curSelec < sel){

    	    let partial = trueInfo.substring(start, end)
			focusNode.replaceData(start,(end - start),partial)
			const newRange = new Range();
	        newRange.setStart(focusNode, start);
			newRange.setEnd(focusNode, end);
			selection.removeAllRanges()
			selection.addRange(newRange);

    	}
    	curSelec = sel
    	/*
    	
		*/
		
    }else{
    	document.querySelector('.fakeInfo').innerHTML = fakeInfo
    	curSelec = 0;
    }
    // anchorNode and focusNode are text nodes usually
    
  };