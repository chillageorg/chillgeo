app.config ( ['$routeProvider',
    function ( $routeProvider ){
        console.log ("config");

        $routeProvider.
            when ( '/home/:name',    {templateUrl:'templates/home.html', controller: HomeCtrl }).
            when ( '/about',    {templateUrl:'templates/about.html', controller: AboutCtrl }).
            when ( '/services',    {templateUrl:'templates/services.html', controller: ServicesCtrl }).
            when ( '/skills',    {templateUrl:'templates/skills.html', controller: SkillsCtrl }).
            when ( '/projects',    {templateUrl:'templates/projects.html', controller: ProjectsCtrl }).
            when ( '/contact',    {templateUrl:'templates/contact.html', controller: ContactCtrl }).
            otherwise( {redirectTo: '/home/Gast' } )

    }]

);