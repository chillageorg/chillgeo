function HomeCtrl ( $scope, $log, $routeParams  )
{
    $log.log ("HomeCtrl");

    $scope.username = $routeParams.name;
}
function AboutCtrl ( $scope, $log, $location  )
{
    $log.log ("AboutCtrl");

    $scope.openContact = function ()
    {
        $log.log ( $location );
        $location.path ( "/contact" );
    }

}
function ContactCtrl ( $scope, $log  )
{
    $log.log ("ContactCtrl");
}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'HoneCtrl', HomeCtrl )
        .controller ( 'AboutCtrl', AboutCtrl )
        .controller ( 'ContactCtrl', ContactCtrl )
    ;
