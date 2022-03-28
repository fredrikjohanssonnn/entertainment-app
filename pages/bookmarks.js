import { useState } from 'react'
import Thumbnail from '../components/Thumbnail'

export async function getStaticProps(){

    const res = await fetch('http://localhost:3000/api/data')
    const data = await res.json()
  
    return {
      props: {
        data,
      }
    }
  }

export default function Bookmarked({ data }) {

    const movies = data.filter(result => result.isBookmarked && result.category == 'Movie')
    const tvSeries = data.filter(result => result.isBookmarked && result.category == 'TV Series')

    return (
        <>
            <section className="bookmarkedMovies">
            <h1>Bookmarked Movies</h1>
            <div className="grid">
            {movies.map(item => (
              <Thumbnail key={item.title} {...item} />
            ))}
            </div>
            </section>
            <section className="bookmarkedSeries">
            <h1>Bookmarked Series</h1>
            <div className="grid">
            {tvSeries.map(item => (
              <Thumbnail key={item.title} {...item} />
            ))}
            </div>
            </section>
        </>
    )
}