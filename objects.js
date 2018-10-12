var playlist = {
  artist: "Led Zeppelin",
  song: "Ramble On"
}

function updatePlaylist(playlist, artist, song){
  playlist.artist = artist
  playlist.song = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}