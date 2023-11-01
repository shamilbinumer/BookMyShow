async function getMovie(){
    const task=await fetch("http://localhost:3004/BookMyShow/movies");
    const data=task.json();
   data.then((dt)=>{
    s="";
     dt.map(d=>{
        console.log(d);
        s+=`
       
            <div class="col-lg-3 col-md-6 col-sm-6">
                <a href="./pages/movei-details.html?id=${d._id}" title="link"><img src="${d.Movie_poster}" alt=""></a>
                <p class="movies-p1" id="play-now-para">${d.Movie_Title}</p>            
                <p class="movies-p2" id="play-now-para-2">${d.Languages}</p>
            </div>`
    });
    document.getElementById("row").innerHTML=s
   })

    
   
}
getMovie();