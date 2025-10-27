const Listcontainer = document.querySelector('.post-list-container')

// fetch using XHR

// function fetchUsingXhr (){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
//     xhr.responseType='json';
//     xhr.send();
//     xhr.onload=()=>{
//         if(xhr.status===200){
//              displayresult(xhr.response);
//         }else{
//             console.log("Error occured")
//         }
//     }


// }

//================= fetch using fetch method

// function fetchUsingfetch(){
//        const fetchrequest = fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'GET'
//        })


//        fetchrequest.then((response)=>response.json())
//        .then((result)=>displayresult(result))
//        .catch((e)=>console.log(e))
// }


// fetch using async await

async function fetchUsingAsynAwait(){
    try{
                const fetchresult = await fetch('https://jsonplaceholder.typicode.com/posts',{
                 method:"GET",
      })

      const result = await fetchresult.json();

      console.log(result);
       displayresult(result);
    }catch(error){
            console.log(error)
    }
     
}

function displayresult(posts){

    Listcontainer.innerHTML = posts.map(
       (postItem,index)=> `
            <div class="post-item">
            <h3 class="title">${index+1}. Title: ${postItem.title}</h3>
            <p>Content: ${postItem.body}</p>
            </div>
       `
    ).join(" ");
}
   
// posts.forEach((post)=>{
//    Listcontainer.innerHTML +=`<div> ID: ${post.id}, Title${post.title} </div>`;

// })
    
   
fetchUsingAsynAwait();
// fetchUsingfetch();
    
// fetchUsingXhr();