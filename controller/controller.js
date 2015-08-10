var app = angular.module("cvApp", []);

app.controller("CvController", function ($scope) {
    $scope.header = "Jerome Demonchaux";
    $scope.sub_header = [
        {
            content:"5 rue de l'Orveau - 39100 Dole"
        },
        {
            content:"Jerome.demonchaux-at-gmail-dot-com"
        },
        {
            content:"06 70 51 10 58"
        },
        {
            content:"25 ans"
        }
    ];

    $scope.titre_cv = "Developpeur d'applications web et mobiles";


});