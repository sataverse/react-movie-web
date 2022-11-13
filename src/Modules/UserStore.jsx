import { observable } from 'mobx'

const UserStore = observable({
    isSignIn : false,
    userId : -1,
    userNickname : '',
    userFavorites : [],

    setUserFavorites(list) {
        this.userFavorites = list
    }
})

export default UserStore