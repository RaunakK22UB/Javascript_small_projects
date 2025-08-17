const searchInput = document.querySelector('.Search');
const searchBtn = document.querySelector('.btn-search');
const profile = document.querySelector('.github-profile');
const loading = document.querySelector('.loading');

const url = 'https://api.github.com/users/';


async function getGithubProfiles(){
      showloader();
     const response = await fetch(`${url}${searchInput.value}`);
     const data = await response.json();
     console.log(data);
     if(data){
          displayProfile(data);
     }
      removeloader()
}
searchBtn.addEventListener("click",  getGithubProfiles);

function displayProfile(data){
  
      const {login,avatar_url,name,bio,public_repos,followers,following} = data;

       profile.innerHTML=`
         <div class="card">
            <h2>${name}</h2>
            <p>${bio}</p>
            <p>${public_repos} Repositories</p>
            <p>${followers} Followers<p>
            <p>${following} Following</p>
           <img src=${avatar_url} alt=${login}>
         </div>

       `
      
}    

function showloader(){
     loading.classList.add('show');
}
function removeloader(){
     loading.classList.remove('show');
}