const   lists = document.querySelector('.List-data')


lists.addEventListener('click', function(event) {
    
    // Check if the element that was clicked has the class 'delete-btn'
    if (event.target.classList.contains('delete-btn')) {
        
        // Find the closest parent div with the class 'post'
        const postDiv = event.target.closest('.post');
        
        // Remove that div from the page
        postDiv.remove();
    }
});



async function fetchFunction(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"get",
    })

    const posts = await result.json();
    
    displaypost(posts);
}

function displaypost(posts){

    lists.innerHTML =   posts.map((post,index)=>
              ` 
                <div class="post">
                <p>${index}. ${post.title}</p>
                <p>content: ${post.body}</p>
                <button class="delete-btn" > delete</button>
                </div>

              `
).join(" ");
    
    
}
fetchFunction();