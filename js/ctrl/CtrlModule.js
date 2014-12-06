function HomeCtrl($scope, $log, $routeParams) {
    $log.log("HomeCtrl");

    $scope.username = $routeParams.name;
}
function AboutCtrl($scope, $log, $location) {
    $log.log("AboutCtrl");

    $scope.openContact = function () {
        $log.log($location);
        $location.path("/contact");
    }

}
function ServicesCtrl($scope, $log, $location) {
    $log.log("ServicesCtrl");

    $scope.openContact = function () {
        $log.log($location);
        $location.path("/services");
    }

}
function ProjectsCtrl($scope, $log, $location) {
    $log.log("ProjectsCtrl");

    $scope.openContact = function () {
        $log.log($location);
        $location.path("/projects");
    }

}
function ContactCtrl($scope, $log) {
    $log.log("ContactCtrl");
}

var ctrl = angular.module('app.ctrl', [])
        .controller('HoneCtrl', HomeCtrl)
        .controller('AboutCtrl', AboutCtrl)
        .controller('ServicesCtrl', ServicesCtrl)
        .controller('ProjectsCtrl', ProjectsCtrl)
        .controller('ContactCtrl', ContactCtrl)
    ;
