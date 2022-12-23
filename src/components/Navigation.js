import { useEffect } from "react";

export default function Navigation() {

    const SEARCH = {
        title: 'Mandalorian'
    }

    const API_URL = 'https://api.tvmaze.com/singlesearch/shows?q='

    const searchShow = async (title) => {
        const response = await fetch(`${API_URL}${SEARCH.title}`)
        const data = await response.json();

        console.log(data)

    }
    searchShow()

    const scifi = []

    const listShows = async () => {
        const response = await fetch('https://api.tvmaze.com/shows')
        const data = await response.json()

        for (let i = 0; i < data.length; i++) {
            data[i].genres.forEach(element => {
                if (element === 'Science-Fiction') {
                    scifi.push(data[i].name)
                }
            })
        }
    }

    console.log(scifi)

    listShows()

    setTimeout(() => {
        const searchBox = document.querySelector('.search-box');

        searchBox.addEventListener('input', event => {
            SEARCH.title = event.target.value;
        })

    }, 800)


    return(

        <nav className='navbar'>
            <div>
                <p>Movie App Logo</p>
            </div>
            <div>
                <input className='search-box' type='search'></input>
                <button onClick={searchShow}>Search Show</button>
            </div>
        </nav>

    )
}

