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

}

function FormCtrl($scope, $log, $http) {
    $log.log("FormCtrl");

    $scope.submitted = false;
    $scope.signupForm = function () {
        if ($scope.formID.$valid) {
            $log.log("Formular ist valide");
            jQuery("#divload").show();
            jQuery("#formID").hide();
            // Senden initieren

            $http.post(sendmail,
                {
                    'uname': $scope.signup.name,
                    'vorname': $scope.signup.vorname,
                    'email': $scope.signup.email,
                    'message': $scope.signup.message
                }).success(function (data) {
                    $log.log(data);
                    if(data == "sentok") {
                        jQuery("#divsent").show();
                    }
                    else
                    {
                        jQuery("#diverror").show();
                    }
                    jQuery("#divload").hide();
                });
        } else {
            $scope.formID.submitted = true;
            $log.log("Formular ist nicht valide");
            jQuery("#divload").hide();
        }

    }
}
//var sendmail = 'http://localhost:8888/playground/sendchillgeo.php';
var sendmail = 'http://www.chillgeo.ch/sendchillgeo.php';
var ctrl = angular.module('app.ctrl', [])
        .controller('HoneCtrl', HomeCtrl)
        .controller('AboutCtrl', AboutCtrl)
        .controller('ServicesCtrl', ServicesCtrl)
        .controller('SkillsCtrl', SkillsCtrl)
        .controller('ProjectsCtrl', ProjectsCtrl)
        .controller('ContactCtrl', ContactCtrl)

    ;
