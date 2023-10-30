
import convertToBase64 from './base64.js';

    const url = window.location.href;

  const search = new URLSearchParams(url.split("?")[1]);
  var id=search.get("id");
 let bnr=""

    
   fetch(`http://localhost:3004/BookMyShow/EditMovie/${id}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
    }).then(res=>res.json()).then((data)=>{

let pctr=data.Movie_poster;
 bnr=data.Movie_banner




document.getElementById("main").innerHTML=`<form action="../index.html" id="frm"> <label for="">Movie Title</label>
<div><input type="text" value=${data.Movie_Title} placeholder="Enter the Movie Name" class="m-name" id="movie-name"></div>
<label for="">Movie Category</label>
<div><input type="text" value=${data.Category} placeholder="Enter the Category of Movie" class="m-name" id="category"></div>
<div class="row">
  <div class="col-lg-6"><label for="">Rating</label>
  <div><input type="text" value=${data.Rating} placeholder="Rating Out of 10" class="rating" id="rating"></div></div>
  <div class="col-lg-6">
    <label for="">Release Date</label>
    <div><input type="date" value=${data.Release_date} placeholder="dd/mm/yy"class="r-date" id="r-date"></div>
  </div>
</div>
<label for="" class="lng">Languages</label>
<div><input type="text"  value=${data.Languages} title="lnag" placeholder="Available languagees" class="languages" id="languages"></div> 
<textarea name="dscrpn" id="description" cols="31" rows="7" title="des" placeholder="Enter the short description about the movie"></textarea> 
<div>
<label for="">Upload Movie Banner</label>
<input type="file" title="file" class="file"   id="upload-banner">
<div class="view-banner"><img src="${bnr}"  alt="" class="edit-background-image"></div>
</div> 
<div>
<label for="">Upload Movie Poster</label>
<input type="file" title="file" class="file" id="upload-poster">
<div class="view-poster"><img src="${pctr}" alt="" class="edit-poster-image"></div>
</div> 
<div class="sbmt-btn">
<button id="submit-btn">Submit</button>
</form>`


const text=document.getElementById("description")
text.value=data.Description



document.getElementById("upload-banner").addEventListener('change',(e)=>{


    convertToBase64(e.target.files[0]).then((data)=>{
       
         bnr=data
        console.log(bnr);
    })
   
})




    })
   






 


















