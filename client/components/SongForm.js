import React from 'react';

const SongForm = ({ addSong }) => {
  let song;

  return (
    <form
    onSubmit={ e => {
      e.preventDefault();
      addSong(song.value)
      song.value = null;
    }}
    >
      <input placeholder="Add a Song" ref={ (n) => song = n } />
      </form>
  )
}

export default SongForm;
