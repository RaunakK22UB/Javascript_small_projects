const   lists = document.querySelector('.List-data')




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
                </div>

              `
).join(" ");
    
    
}
fetchFunction();