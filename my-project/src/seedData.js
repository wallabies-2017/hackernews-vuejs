var faker = require("faker");

export default (function(){
	var NUMBER_OF_POSTS = parseInt((''+faker.random.number())[0]);


	var createPost = function(){
		var createdAt = faker.date.past();
		return {
			_id: faker.random.uuid(),
			title: faker.lorem.sentence(),
			content: faker.lorem.paragraphs(),
			createdAt: createdAt,
			updatedAt: faker.date.between(createdAt, (new Date())),
			username: faker.internet.userName(),
			comments: []
		};
	};



	var createComment = function(startDate){
		var createdAt = faker.date.between(startDate, (new Date()))
		return {
			_id: faker.random.uuid(),
			content: faker.lorem.sentences(),
			createdAt: createdAt,
			updatedAt: faker.date.between(createdAt, (new Date())),
			username: faker.internet.userName(),
			comments: []
		};
	};
	var posts = [];
	for(let count = 0; count < NUMBER_OF_POSTS; count++){
		let post = createPost();
		let commentCount = parseInt((''+faker.random.number())[0]);
		while(--commentCount){
			post.comments.push(createComment(post.createdAt));
		}
		posts.push(post);
	}
	return posts;
}());