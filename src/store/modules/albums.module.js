import albumsService from "../services/albums.service";

const state = {
  albums: []
};

const mutations = {
  getAllAlbums(state) {
    albumsService.getAllAlbums().then(r => {
        state.albums = r.data
      }
    )
  },
  addAlbum(state, data) {
    state.albums.length
    albumsService.addAlbum(data)
  },
  removeAlbum(state, id) {
    state.albums.length
    albumsService.removeAlbum(id)
  },
  updateAlbum(state, data) {
    state.albums.length
    albumsService.updateAlbum(data)
  }
};

export const albums = {
  namespaced: true,
  state,
  mutations
};
