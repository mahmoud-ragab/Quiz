(function () {
    angular
        .module("QuizApp")
        .factory('LoginService', LoginService);

    function LoginService() {

        var users = [{ username: 'mahmoudragab68@gmail.com', password: '1234', isAuthenticated: true },
        { username: 'test@test.com', password: 'test', isAuthenticated: true },
        { username: 'admin@test.com', password: 'admin', isAuthenticated: true },
        { username: 'a@a.com', password: 'a', isAuthenticated: true }];
        
        return {
            login: function (user) {
                for (var i = 0; i < users.length; i++) {
                    if (user.username === users[i].username && user.password === users[i].password) {
                        user.isAuthenticated = true;
                    }
                }
            }
        };
    }

})();