var playlist = {};

function updatePlaylist(p, artist, song){
  p[artist] = song;
}

function removeFromPlaylist(p, artist){
  delete p[artist];
}
