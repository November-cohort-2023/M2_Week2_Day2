import React, { useState } from 'react'

/* 
React Forms:

1. prevent the page from refreshing when submitting the form

2. Create states for all my inputs

3. store all input values in a state

4. once the form is submitted add the new movie to the existing array of movies

5. reset all the states representing user inputs

*/

function AddMovie(props) {

    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [IMDBRating,setIMDBRating] = useState(0)
    const [hasOscars,setHasOscars] = useState(false)

    function handleSubmit(e){
        e.preventDefault() //when the submit button is pressed the page is not reloaded 

        const newMovie = {title:title,director:director,IMDBRating:IMDBRating,hasOscars:hasOscars}

        props.setMovies([newMovie,...props.movies])
        props.setAllMovies([newMovie,...props.allMovies])
        console.log(newMovie)
  
        setTitle('')
        setDirector('')
        setHasOscars(false)

    }

  return (
    <div className='AddMovie'>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
            </label>
            <label>
                Director:
                <input type="text" onChange={(e)=>{setDirector(e.target.value)}} value={director} />
            </label>
            <label>
                IMDB Rating:
                <input type="number" onChange={(e)=>{setIMDBRating(e.target.value)}} value={IMDBRating} />
            </label>
            <label>
                Won Oscar:
                <input type="checkbox" onChange={(e)=>{setHasOscars(e.target.checked)}} checked={hasOscars} />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddMovie