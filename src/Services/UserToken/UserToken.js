const UserToken = {
    getToken(){
        return window.localStorage.getItem("Jay's-user");
    },
    hasToken(){
        return UserToken.getToken();
    },
    saveToken(token){
        window.localStorage.setItem("Jay's-user", token);
    },
    deleteToken(){
        return window.localStorage.removeItem("Jay's-user");
    }
};

module.exports = UserToken;