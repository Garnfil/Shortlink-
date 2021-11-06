//enter link to show results

const shorten = document.querySelector('.shorten');
const inputLink = document.querySelector('#input-link');
const infoContainer = document.querySelector('.info-container');
const message = document.querySelector('.message');

shorten.addEventListener('click', () => {
	if (inputLink.value == ''){
		message.style.display = 'block';
	}else{
		infoContainer.classList.add('active-info');
		getData();
	}
	
})

// fetch data from api
async function getData() {

	const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`);
	const data = await response.json();
	console.log(data.result)
	
	const shortLink = document.querySelector('.short-link');
	const ShortLink2 = document.querySelector('.short-link2');
	const originalLink = document.querySelector('.original-link');
	
	onShortLink(shortLink, data.result);
	onShortLink2(ShortLink2, data.result);
	onOriginalLink(originalLink, data.result);
}

//FUNCTIONS FOR EVERY RESULT LINK

 onShortLink = (element, link) =>{
  element.innerHTML = link['full_short_link3'];
  element.addEventListener('click', () => {
    location.href = link['full_short_link3']
  })
}

 onShortLink2 = (element, link) => {
  element.innerHTML = link['full_short_link'];
	element.addEventListener('click', () => {
	  location.href = link['full_short_link'];
	})
}

onOriginalLink = (element, link) => {
  element.innerHTML = link['original_link'];
  element.addEventListener('click', () => {
   location.href = link['original_link'];
  })
}

const close = document.querySelector('.close');

close.addEventListener('click', () => {
  infoContainer.classList.remove('active-info');
  inputLink.value = '';
  message.style.display = 'none';
})