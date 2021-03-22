// active blog comments in display - when user submits comment, it shows up right away underneath the previous one
const post = {};
// define variables for each form element
post.nameBox = document.querySelector('.user__name');
post.emailBox = document.querySelector('.user__email');
post.siteBox = document.querySelector('.user__site');
post.commentBox = document.querySelector('.user__comment');
post.submitButton = document.querySelector('.submit__comment');
// define variable for container that will hold new comment entries
post.commentContainer = document.querySelector('.blog__comments');
// define variable for date/time of when page is loaded
post.currentTime = new Date();



post.postComment = function(name, site, comment) {
    // get current date and time to add to blog post
    const date = new Date();
    // This took a little time with MDN and a LOT of finagling, but the formula is the difference between the time when the page is loaded and the time of the comment divided by 1000 (to account for millisecond format), divided by 3600 (the number of seconds in an hour), and rounded down.
    const postTime = Math.floor((Math.abs(post.currentTime - date) / 1000) / 3600);
    // This is used to show the date of the comment in a shorter form.
    const formatDate = new Intl.DateTimeFormat('en-US', { 
        dateStyle: 'medium' 
    });
    
    // this was totally unnecessary, and more just fun flair. When a comment is posted, a random photo will be chose to populate for the commenter.
    const randomPhoto = Math.floor(Math.random() * 4) + 8;

    // create element for comment entry div that will contain all child elements
    const commentEntry = document.createElement('div');
    // insert HTML into div
    commentEntry.innerHTML = `
    <div class="comment__image">
        <img src="./assets/blog/blog-${randomPhoto}.jpeg" alt="Photo of blog commenter.">
    </div>
    <div class="comment__post">
        <p class="body__text"><span class="name">${name}</span> - ${site}</p>
        <p class="body__text">${comment}</p>
        <p class="comment__date">${formatDate.format(date)} at ${postTime} hours ago</p>
    </div>`
    // add class to newly created div so it conforms to section and page styling
    commentEntry.classList.add('comment__entry');
    // add new div to existing section
    post.commentContainer.appendChild(commentEntry);
    // clear contents of all input boxes in form
    post.nameBox.value = "";
    post.emailBox.value = "";
    post.siteBox.value = "";
    post.commentBox.value = "";

}

// when users presses button to submit form, the form information is collected and sent to the postComment function.
post.submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const userName = post.nameBox.value;
    const userSite = post.siteBox.value;
    const userComment = post.commentBox.value;
    // if the user does not enter a website, placeholder text will be inserted
    if (userSite === "") {
        post.postComment(userName,"no website",userComment);
    } else {
        post.postComment(userName,userSite,userComment);
    }
});
