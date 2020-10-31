import axios from "axios";

export default {
  getAllAlbums() {
    console.log(`getAllAlbums`);
    return axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(r => r);
  },
  removeAlbum: id => {
    console.log(`removeAlbum: ${id.toString()}`);
  },
  addAlbum: data => {
    console.log(`addAlbum: ${JSON.stringify(data)}`);
  },
  updateAlbum: data => {
    console.log(`updateAlbum: ${JSON.stringify(data)}`);
  }
};



