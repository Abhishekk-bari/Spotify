import React from 'react'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';
import { assets } from '../assets/assets';
import Navbar from './Navbar';


const DisplayAlbum = () => {

  const {id} = useParams();
  const albumData = albumsData[id];

  return (
    <>
    <Navbar />
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
      <img className='w-48 rounded' src={albumData.image} alt=" " />
      <div className='flex flex-col'>
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 mb:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <p className='mt-1'>
          <img className='inline-block w-5' src={assets.spotify_logo}alt=""/>
          <b>Spotify</b>
          • 1,323,154 likes
          • <b>50 songs,</b>
          about 2hr 30 min
        </p>

      </div>
    </div>
    </>
  )
}

export default DisplayAlbum
