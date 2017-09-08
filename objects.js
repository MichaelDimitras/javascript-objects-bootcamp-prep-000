var playlist = new Objest();

function updatePlaylist(p, artist, song){
  p[artist] = song;
  return p;
}

function removeFromPlaylist(p, artist){
  delete p[artist];
  return p;
}
