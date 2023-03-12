let row=document.querySelector('.row')


fetch('https://api.tvmaze.com/show')
.then(response=>response.json())
.then(data => 
{ console.log(data);
  data.forEach(element => {
   
    row.innerHTML+=`<div class="col-3 py-3">
    <div class="card" style="width: 15rem;">
             <img src="${element.image.medium}" class="card-img-top" alt="scr">
              <div class="card-body">
              <h1 class="card-title"> <b>${element.name}</b></h1>
              <p class="card-text"><em>${element.language} </em></p>
                <p class="card-text"><em>${element.externals.imdb}</em></p>
                  <p class="card-text"><em>${element.genres}</em></p>
                  
             <a href="${element.url}" class="btn btn-primary">click</a>
    </div>
  </div>`
 
        });
})
    



    
  



























