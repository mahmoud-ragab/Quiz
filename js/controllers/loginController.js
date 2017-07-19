(function () {
    angular
        .module("QuizApp")
        .controller("loginController", LoginController);

    LoginController.$inject = ['LoginService', 'appMetrics', '$window', '$scope'];

    function LoginController(LoginService, appMetrics, $window, $scope) {
        $scope.user = { isAuthenticated: false };
        $scope.appMetrics = appMetrics;

        $scope.login = function () {
            LoginService.login($scope.user);
            if ($scope.user.isAuthenticated === true) {
                appMetrics.ChangeState(true);
                appMetrics.isAuthenticated($scope.user.isAuthenticated);
            }
            else {
                $scope.loginError = "Wrong Username or Password.";
            }
        }

        $scope.logout = function () {
            $scope.user.isAuthenticated = false;
            $window.location.href = '/QuizApp.html';
        }

        $scope.home = function() {
            //hide everything and show only the info page
        }
    }
})();