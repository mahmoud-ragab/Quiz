(function () {
    angular
        .module("QuizApp")
        .controller("quizController", QuizController);

    QuizController.$inject = ['$scope', 'appMetrics', 'dataservice']

    function QuizController($scope, appMetrics, dataservice) {
        $scope.appMetrics = appMetrics;
        $scope.dataservice = dataservice;
        $scope.hideInfo = false;
        $scope.showModal = false;
        $scope.nullValue = 0;

        $scope.afterSubmit = false;

        $scope.SelectAnswer = function (answer, index) {
            $scope.dataservice.Questions[index].selected = answer.answer;
        }

        $scope.StartQuiz = function () {
            $scope.hideInfo = true;
        }

        $scope.SubmitQuiz = function () {
            $scope.nullvalue = null;
            var errorBag = [];
            var successBag = [];
            for (var i = 0; i < $scope.dataservice.Questions.length; i++) {
                if ($scope.dataservice.Questions[i].selected === null) {
                    errorBag.push(i);
                }
            }
            if (errorBag.length === 0) {
                for (var i = 0; i < $scope.dataservice.Questions.length; i++) {
                    if ($scope.dataservice.Questions[i].selected === $scope.dataservice.Questions[i].success) {
                        successBag.push(i);
                    }
                }
                $scope.afterSubmit = true;
                $scope.triggerModal = "#quiz-info";
                $scope.rightAnswers = successBag.length;
            }

        }
    }
})();