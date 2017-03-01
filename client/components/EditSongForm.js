import React from 'react';

const EditSongForm = ({ updateSong }) => {
  let song;

  return (
    <form
    onSubmit={ e => {
      e.preventDefault();
      updateSong(song.value)
      song.value = null;
    }}
    >
      <input placeholder="Edit Song" ref={ (n) => song = n } />
      </form>
  )
}

export default EditSongForm;
