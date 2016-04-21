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

    $scope.queryType = function () {
        $scope.query = "searchquery.type";
    };
    $scope.queryBackground = function () {
        $scope.query = "searchquery.background";
    };
    $scope.queryExperience = function () {
        $scope.query = "searchquery.experience";
    };

    $scope.skills = [
    {
        "background": "16",
        "type": "C#",
        "experience": "SW"
    },
    {
        "background": "18",
        "type": ".NET",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "ASP.NET",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "SQL",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Microsoft SQL Server",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "AngularJS",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Node.js",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "MongoDB",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "MVC",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "JavaScript",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Sublime",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Xcode",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Bootstrap",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Brackets",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "CSS",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Unity",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Blueprint Visual Scripting",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "HTML",
        "experience": "DW"
    },
    {
        "background": "18",
        "type": "Unreal Engine",
        "experience": "DW"
    },
    ]
}]);