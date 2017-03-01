import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';
import EditSongForm from './EditSongForm';

class BillboardApp extends React.Component {
  state = { songs : [], filter : 'All' };
  


  componentDidMount() {
    $.ajax({
      url: '/api/songs',
      type: 'GET'
    }).done( songs => {
      this.setState({ songs})
    });
  }

  addSong = (song_title) => {
    $.ajax({
      url: '/api/songs',
      type: 'POST',
      data: { song: { song_title }}
    }).done( song => {
      this.setState({ songs: [song, ...this.state.songs]});
  });

  }

  updateSong = (id) => {
    $.ajax({
      url: `/api/songs/${id}`,
      type: 'PUT'
    }).done( song => {
      let songs =this.state.songs.map( s => {
        if (s.id === song.id)
          return song
        return s
      });
      this.setState({ songs })
    });
  }

  deleteSong = (id) => {
    $.ajax({
      url: `/api/songs/${id}`,
      type: 'DELETE'
    }).done( () => {
      let songs = this.state.songs.filter( song => song.id !== id)
      this.setState({ songs });
    });
  }

  render() {
    return (
      <div>
      <SongForm addSong={this.addSong} />
      <SongList songs={this.state.songs} deleteSong={this.deleteSong}/>
      <EditSongForm updateSong={this.updateSong} />
      </div>
    )
  }
}

export default BillboardApp;
