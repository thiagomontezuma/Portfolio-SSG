const searchBar = document.getElementById('searchBar');
const topicButton = document.getElementsByClassName('blog-topic');
for (let button of topicButton) {
	button.addEventListener('click', (event) => {
		console.log(event);
		topicButtonClicked(event);
	});
}
const testData = {
	posts: [
		{
			id: 1,
			title: 'How to make a Header',
			subtitle: 'Learn the intrincasies',
			description: 'See it for your self',
			author: 'Thiago Montezuma',
			publishedDate: '06/01/2021',
			modified: '06/01/2021',
			tags: ['html'],
			url: 'https://www.thiagomontezuma.com/blog/how-to-make-a-header'
		},
		{
			id: 2,
			title: 'How to make a Footer',
			subtitle: 'Learn the intrincasies',
			description: 'See it for your self',
			author: 'Thiago Montezuma',
			publishedDate: '06/01/2021',
			modified: '06/01/2021',
			tags: ['html', 'css'],
			url: 'https://www.thiagomontezuma.com/blog/how-to-make-a-footer'
		}
	]
};

searchBar.addEventListener('keyup', (event) => {
	const searchString = event.target.value.toLowerCase();
	const filteredCharacters = testData.posts.filter((value) => {
		return value.title.toLowerCase().includes(searchString) || value.subtitle.toLowerCase().includes(searchString) || value.description.toLowerCase().includes(searchString);
	});
	showRelevantBlogCards(filteredCharacters);
});

function showRelevantBlogCards(filteredCharacters) {
	const allBlogCards = document.getElementsByClassName('blog-row-card');
	for (let value of allBlogCards) {
		if (!Array.isArray(filteredCharacters) || !filteredCharacters.length) {
			value.style.display = 'none';
			continue;
		}
		for (let valueFiltered of filteredCharacters) {
			if (Number(value.dataset.post) === valueFiltered.id) {
				value.style.display = 'block';
				break;
			} else {
				value.style.display = 'none';
			}
		}
	}
}

function topicButtonClicked(event) {
	let eventID;
	if (event.target.tagName === 'BUTTON') {
		eventID = event.target.id;
	} else {
		eventID = event.target.parentNode.id;
	}
	const filteredCharacters = testData.posts.filter((value) => {
		return value.tags.includes(eventID);
	});
	showRelevantBlogCards(filteredCharacters);
}
