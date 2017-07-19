(function () {
    angular
        .module("QuizApp")
        .factory("dataservice", DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        var dataObj = {
            Questions: {}
        };
        $http({ method: 'GET', url: 'data/json.json' }).then(function (response) {
            dataObj.Questions = response.data;
        });
        return dataObj;
    }
})();