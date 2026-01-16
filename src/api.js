import albumsData from './data/albums.json'

export function getRecordList() {
  return albumsData.albums.map(album => ({
    id: album.id,
    artwork: album.artwork
  }))
}
