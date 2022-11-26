import { observable, toJS } from 'mobx'

const UserStore = observable({
    userId: -1,
    nickname: '',
    email: '',
    rank: null,
    favorites: [],
    stars: [],

    getFavorites() {
        return toJS(this.favorites)
    },

    // 시작할때 리스트로 한번에 설정
    setFavorites(list) {
        this.favorites = list
    },

    // 하나씩 추가하고싶을때
    insertFavorite(id, type) {
        if (this.findFavoriteById(id, type) == false) {
            this.favorites.push({ Id: id, Type: type })
            fetch(`http://13.209.26.226/v1/toggle-fav?user_id=${this.userId}&movie_id=${id}&is_liked=1&type=${type}`)
        }
    },

    // ID로 리스트에서 지우기
    deleteFavoriteById(id, type) {
        this.favorites = this.favorites.filter((element) => element.Id != id && element.Type != type)
        fetch(`http://13.209.26.226/v1/toggle-fav?user_id=${this.userId}&movie_id=${id}&is_liked=0&type=${type}`)
    },

    // 있으면 true 리턴
    findFavoriteById(id, type) {
        if (this.favorites.length != 0) {
            return this.favorites.filter((element) => element.Id == id && element.Type == type).length != 0 ? true : false
        } else return false
    },

    deleteAllFavorite() {
        this.favorites = []
    },

    getStars() {
        return toJS(this.stars)
    },

    // 시작할때 리스트로 한번에 설정
    setStars(list) {
        this.stars = list
    },

    // 하나씩 추가하고싶을때
    insertStar(id, type, rate) {
        if (this.isThereStar(id, type) == false) {
            this.stars.push({ Id: id, Type: type, Rating: rate, ApplyDate: new Date().toISOString().slice(0, 10) })
            fetch(`http://13.209.26.226/v1/rating-list-changed?user_id=${this.userId}&movie_id=${id}&rating=${rate}&type=${type}`)
        } else {
            this.stars.forEach((element, index) => {
                if (element.Id == id && element.Type == type) {
                    this.stars[index].Rating = rate
                    this.stars[index].ApplyDate = new Date().toISOString().slice(0, 10)
                    fetch(`http://13.209.26.226/v1/rating-list-changed?user_id=${this.userId}&movie_id=${id}&rating=${rate}&type=${type}`)
                }
            })
        }
    },

    // ID로 리스트에서 지우기
    deleteStarById(id) {
        this.stars = this.stars.filter((element) => element.Id != id)
    },

    findStarById(id, type) {
        console.log(id, type)
        if (this.stars.length != 0) {
            let filterArray = this.stars.filter((element) => element.Id == id && element.Type == type)
            if (filterArray.length != 0) {
                return [filterArray[0].Rating, filterArray[0].ApplyDate]
            }
        }
    },

    isThereStar(id, type) {
        if (this.stars.length != 0) {
            return this.stars.filter((element) => element.Id == id && element.Type == type).length != 0 ? true : false
        } else return false
    },

    signOut() {
        this.userId = -1
        this.nickname = ''
        this.email = ''
        this.rank = null
        this.favorites = []
        this.stars = []
    },
})

export default UserStore
