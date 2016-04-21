myApp.controller('myCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.name = 'Sebastian';
    $scope.searchquery = '';

    $scope.showBrainy = function () {
        $scope.brainyPop = true;
    };
    $scope.hideBrainy = function () {
        $scope.brainyPop = false;
        $scope.brainyDescPop = false;
    };
    $scope.showBrainyDesc = function () {
        $scope.brainyDescPop = true;
    };

    $scope.showCreative = function () {
        $scope.creativePop = true;
    };
    $scope.hideCreative = function () {
        $scope.creativePop = false;
        $scope.creativeDescPop = false;
    };
    $scope.showCreativeDesc = function () {
        $scope.creativeDescPop = true;
    };

    $scope.showAllin = function () {
        $scope.allinPop = true;
    };
    $scope.hideAllin = function () {
        $scope.allinPop = false;
        $scope.allinDescPop = false;
    };
    $scope.showAllinDesc = function () {
        $scope.allinDescPop = true;
    };

    $scope.showDisciplined = function () {
        $scope.disciplinedPop = true;
    };
    $scope.hideDisciplined = function () {
        $scope.disciplinedPop = false;
        $scope.disciplinedDescPop = false;
    };
    $scope.showDisciplinedDesc = function () {
        $scope.disciplinedDescPop = true;
    };

    $scope.showQuick = function () {
        $scope.quickPop = true;
    };
    $scope.hideQuick = function () {
        $scope.quickPop = false;
        $scope.quickDescPop = false;
    };
    $scope.showQuickDesc = function () {
        $scope.quickDescPop = true;
    };

    $scope.skills = [
    {
        "type": "C#",
        "background": "I've used C# extensively since getting into the Accelerated Learning Program at Academic Work Academy, building a variety of programs. For example I've created a battleship game, a poker playing app and a music app allowing users to play instruments in real time over the local network.",
    },
    {
        "type": ".NET",
        "background": "This is the framework that I've used the most of all. Being the essential part of the syllabus at Academic Work Academy, I've had the pleasure to practice my .NET-skills under some great teachers.",
    },
    {
        "type": "ASP.NET",
        "background": "This is a framework that I use for all things web. By applying ASP.NET, and MVC in extension, as a foundation I create a strong baseline on the server-side.",
    },
    {
        "type": "SQL",
        "background": "Database management with SQL is something that I've come to enjoy more and more. We've had an exceptional teacher at Academy talking about the ins-and-outs of databases.",
    },
    {
        "type": "Microsoft SQL Server",
        "background": "Microsoft SQL Server was the primary tool for database management during my studies.",
    },
    {
        "type": "AngularJS",
        "background": "AngularJS is a javascript framework I really enjoy working with. It was not covered at all during our education and I've since been making learning it my evening activity.",
    },
    {
        "type": "Node.js",
        "background": "Node.js is javascript on the server side and a lot of fun!",
    },
    {
        "type": "MongoDB",
        "background": "MongoDB is something I'm just now starting to look at, an interesting take on databases and a great way to work with javascript through the whole stack.",
    },
    {
        "type": "MVC",
        "background": "MVC is my staple web-foundation. It was the focus of the later half of the Accelerated Learning Program. I've created tons of MVC-projects and use them as a launching pad for all things front-end.",
    },
    {
        "type": "JavaScript",
        "background": "JavaScript was touched upon lightly during the course but I've been using it extensively and looked at ways to integrate it more through AngularJS, Node.js and MongoDB.",
    },
    {
        "type": "Sublime",
        "background": "Sublime is my go to software when it comes to light web-development and scripting.",
    },
    {
        "type": "Xcode",
        "background": "I've used Xcode to create simpler apps for iOS.",
    },
    {
        "type": "Objective-C",
        "background": "I've created som simpler apps using Objective-C, one of which was used to calculate different measurements.",
    },
    {
        "type": "Bootstrap",
        "background": "Bootstrap is a great framework for handling mobile adaptation of web-applications. I use it everyday!",
    },
    {
        "type": "Brackets",
        "background": "Brackets is an IDE that works great for live-previewing client-side changes when developing.",
    },
    {
        "type": "CSS",
        "background": "I use CSS/CSS3 everyday and continue to develop my skills in making the front-end look as good as possible.",
    },
    {
        "type": "Unity",
        "background": "Unity is a game engine that I've used to create some games with a C# base. I've been in contact with it through my previous work with audio as well.",
    },
    {
        "type": "Blueprint Visual Scripting",
        "background": "Blueprint Visual Scripting is an interesting language developed by the people over at Epic Games. It was my first foray into programming coming from an audio background and it was a very visual way to depict code and it's dependencies.",
    },
    {
        "type": "HTML",
        "background": "HTML and HTML5 is such an obvious language that it doesn't require much background. I use it all the time, period.",
    },
    {
        "type": "Unreal Engine",
        "background": "Unreal Engine is really the first in depth contact I had with programming, and even though I've since moved on to lower level coding I still enjoy it and the possibilites it opens for working with audio, graphics and game content combined.",
    },
    ]
}]);