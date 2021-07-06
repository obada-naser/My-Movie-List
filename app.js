

'use strict'



let form=document.getElementById('form');
let list=document.getElementById('list');

let allMovies=[];



function MyMovieList(name,imageSource,year){
    this.name=name;
    this.imageSource=imageSource;
    this.year=year;

    allMovies.push(this);


}





function updateStorage(){
    let stringing=JSON.stringify(allMovies);

    localStorage.setItem('movies',stringing);
}

function getData(){
    let data=localStorage.getItem('movies');

    let parsing=JSON.parse(data);


    if(parsing){
        for (let i = 0; i < parsing.length; i++) {
            let newMovies=new MyMovieList(parsing[i].name,parsing[i].imageSource,parsing[i].year);
            newMovies.render();
            
        }
    }

    

}







MyMovieList.prototype.render=function(){

    

  let liElement=document.createElement('li');

  list.appendChild(liElement);

  liElement.src=this.imageSource.src;


  let liElement1=document.createElement('li');

  list.appendChild(liElement1);

  liElement1.textContent=this.name;


  let liElement2=document.createElement('li');

  list.appendChild(liElement2);

  liElement2.textContent=this.year;


}
let movie= new MyMovieList('img/comedy.png','obada',2001);

movie.render();

form.addEventListener('submit',submitter);


function submitter(event){

    event.preventDefault();
   let userName=event.target.movieName.value;
   let category=event.target.movieCategory.value;
   let Issue=event.target.issueYear.value;


   let newMovie=new MyMovieList(userName,category,Issue);
   newMovie.render();
   updateStorage();



}




getData();




