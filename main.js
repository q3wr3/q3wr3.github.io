
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


let trueInfo = "Hey, I'm Marko, a Web Developer based in Macedonia. I collaborate with inspiring brands, businesses & start-ups to shape their digital projects collaborating with multi-disciplinary groups to solve complex problems and create intuitive experiences.I’m interested in clean ideas, minimalism, unusual thinking, inovation and disruptive solutions.If you like what you read you can say hello or just keep scrolling..."

let fakeInfo = document.querySelector('.fakeInfo').innerHTML

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