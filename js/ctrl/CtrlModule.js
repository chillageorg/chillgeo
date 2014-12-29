function HomeCtrl($scope, $log, $routeParams) {
    $log.log("HomeCtrl");

    $scope.username = $routeParams.name;

}
function AboutCtrl($scope, $log, $location) {
    $log.log("AboutCtrl");
    jQuery("#navmid").attr('class', 'about');
    $scope.openAbout = function () {
        $log.log($location);
        $location.path("/contact");

    }

}
function ServicesCtrl($scope, $log, $location) {
    $log.log("ServicesCtrl");
    jQuery("#navmid").attr('class', 'services');
    $scope.openServices = function () {
        $log.log($location);
        $location.path("/services");

    }

}
function SkillsCtrl($scope, $log, $location) {
    $log.log("SkillsCtrl");
    jQuery("#navmid").attr('class', 'skills');
    $scope.openSkills = function () {
        $log.log($location);
        $location.path("/skills");
    }

}
function ProjectsCtrl($scope, $log, $location) {
    $log.log("ProjectsCtrl");
    jQuery("#navmid").attr('class', 'projects');
    $scope.openProjects = function () {
        $log.log($location);
        $location.path("/projects");
    }

}
function ContactCtrl($scope, $log) {
    $log.log("ContactCtrl");
    jQuery("#navmid").attr('class', 'contact');
    $scope.submitted = false;
    $scope.signupForm = function () {
        if ($scope.formID.$valid) {
            $log.log("Formular ist valide");
            // Senden
            jQuery("#formID").hide();
            jQuery("#divsent").show();
        } else {
            $scope.formID.submitted = true;
            $log.log("Formular ist nicht valide");
        }

    }
}

var ctrl = angular.module('app.ctrl', [])
        .controller('HoneCtrl', HomeCtrl)
        .controller('AboutCtrl', AboutCtrl)
        .controller('ServicesCtrl', ServicesCtrl)
        .controller('SkillsCtrl', SkillsCtrl)
        .controller('ProjectsCtrl', ProjectsCtrl)
        .controller('ContactCtrl', ContactCtrl)

    ;
