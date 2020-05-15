const UserToken = {
    getToken(){
        return window.localStorage.getItem("julis-user");
    },
    hasToken(){
        return UserToken.getToken();
    },
    saveToken(token){
        window.localStorage.setItem("julis-user", token);
    },
    deleteToken(){
        return window.localStorage.removeItem("julis-user");
    }
};

module.exports = UserToken;