import React, { useEffect, useState } from 'react'

export const PickPicture = () => {
  const PICTURES_URL = 'https://music-game-pictures.herokuapp.com/images'
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch(PICTURES_URL)
      .then((response) => response.json())
      .then((json) => {
        setPictures(json.results)
      })
  }, [])
  return (
    <>
      <div className="game-board">
        {pictures.map((picture) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-back">
                  <img src={picture.image} alt={picture.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <h1> CHOOSE A PICTURE AND SING A SONG BASED ON THE THING ON THE PICTURE</h1>
      </div>
    </>
  )
}