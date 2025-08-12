const postListcontainer = document.querySelector('.post-container');
const progressBar = document.querySelector('.progress-bar');


async function  getPosts(){
    const data = await fetch('https://dummyjson.com/posts',{
              method:'GET'
    });

    const posts = await data.json();
    displayPosts(posts.posts);
    console.log(posts.posts);
}



function displayPosts(posts){

    const dataToDisplay = posts.map(post=>{
        return `<div class ="post">
                 <h2>${post.title}</h2>
                 <p>${post.body}</p>
        </div>`;
    }).join('');

   postListcontainer.innerHTML = dataToDisplay;

}

getPosts();
window.onscroll = function(){
    handleScroll();
};

function handleScroll(){
    const getScrollFromTop = document.body.scrollTop ||  document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -  document.documentElement.clientHeight;
    const howMuchPercentageAlreadyScrolled = (getScrollFromTop / height) * 100;
    progressBar.style.width =`${howMuchPercentageAlreadyScrolled}%`;
}
