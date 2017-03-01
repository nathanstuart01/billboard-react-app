import React from 'react';

const Song =({ id, song_title, updateSong, deleteSong }) => (
  <li>
  {song_title}
  <button onClick={ () =>updateSong(id) }>Update</button>
  {/*/ on click I want to display an edit form
  //i need to create an edit form that appears when the button is clicked
  // on typing in the edited song name I want to have the new song updated on the original page
  <button>Delete</button>
  // on click I want to have the song be removed from the list*/}
  <button onClick={ ()=> deleteSong(id) }>Delete</button>
  </li>
)

export default Song;
