(function () {
    angular
        .module("QuizApp")
        .factory("appMetrics", AppMetrics);

    function AppMetrics() {
        var obj = {
            toggleForm: false,
            authenticatedUser: false,
            ChangeState: ChangeState,
            isAuthenticated: isAuthenticated
        };

        return obj;

        function isAuthenticated(state) {
            obj.authenticatedUser = state;
        }

        function ChangeState(state) {
            obj.toggleForm = state;
        }

    }
})();