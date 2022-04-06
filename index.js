let messagefind = document.querySelector('#message')


function addMovie(event){
event.preventDefault()
let inputField = document.querySelector('input')
const movie = document.createElement('li')
const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click',crossOffMovie)
movie.appendChild(movieTitle)
const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener('click',deleteMovie)
movie.appendChild(deleteBtn)
const list = document.querySelector("ul")
list.appendChild(movie)
inputField.value = ''
}

function deleteMovie(event){
event.target.parentNode.remove() 
messagefind.textContent = 'Movie deleted!'

}



function crossOffMovie(event){
event.target.classList.toggle('checked')
if(event.target.classList.contains('checked')){
    messagefind.textContent = 'yee'
}
else{messagefind.textContent = 'nop'}
}


document.querySelector('form').addEventListener('submit', addMovie)
