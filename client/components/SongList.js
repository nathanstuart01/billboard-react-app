import React from 'react';
import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <ul>
    { songs.map( song => {
      return(<Song key={song.id} {...song} updateSong={updateSong} deleteSong={deleteSong}/>)
    })
  }
  </ul>
)

export default SongList;
