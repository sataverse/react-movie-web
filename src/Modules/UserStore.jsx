import { observable, toJS } from 'mobx'

const UserStore = observable({
    isSignIn: false,
    userId: -1,
    userNickname: '',
    favorites: [],

    getFavorites() {
        return toJS(this.favorites)
    },

    // 시작할때 리스트로 한번에 설정
    setFavorites(list) {
        this.favorites = list
    },

    // 하나씩 추가하고싶을때
    insertFavorite(id, type) {
        this.findFavoriteById(id, type) == false ? this.favorites.push({ id: id, type: type }) : null
    },

    // ID로 리스트에서 지우기
    deleteFavoriteById(id) {
        this.favorites = this.favorites.filter((element) => element.id != id)
    },

    findFavoriteById(id, type) {
        if (this.favorites.length != 0) {
            return this.favorites.filter((element) => element.id == id && element.type == type).length != 0 ? true : false
        }
    },
})

export default UserStore
