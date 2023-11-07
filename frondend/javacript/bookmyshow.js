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

   const key= localStorage.key(0);
   const value=JSON.parse(localStorage.getItem(key));
   fetch("http://localhost:3004/BookMyShow/home",{
    headers:{Authorization: `Bearer ${value}`},
   })
   .then((res)=>res.json())
   .then((data)=>{
    const{msg}=data;
    if(msg==undefined){
        document.getElementById("name").innerHTML=`<button>Sign up</button>`
    }
    else{
        document.getElementById("name").innerHTML=msg
    }
   })
   .catch((error)=>{
    console.log(error);
   })
    
   
}
getMovie();

document.getElementById("logout").addEventListener("click",(e)=>{
    e.preventDefault();
        // localStorage.removeItem('token');
        localStorage.clear()
        location.reload();      

})