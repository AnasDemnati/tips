'use strict';

/**
* @ngdoc function
* @name yapp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of yapp
*/
angular.module('yapp')
.controller('CoinsGenCtrl', function($scope, $state, $stateParams, $sce) {
  $scope.$state = $state;
  $scope.toggleTab = true;
  $scope.gemsInput = 0;
  $scope.goldInput = 0;
  $scope.elixirInput = 0;
  $scope.elixirNoirInput = 0;
  // $scope.toggleContentTab = toggleContentTab;
  $scope.menuItems = [];
  $scope.menuId = $stateParams.menuId;
  $scope.id = 4;
  $scope.menuItem = $scope.menuTitles[$scope.menuId];

  $scope.htmlContent = function() {
    return $sce.trustAsHtml($scope.menuItem.content);
  };

  $scope.increaseValue = function(range) {
    if (range === 1) {
      $scope.gemsInput++;
    }
    if (range === 2) {
      $scope.goldInput++;
    }
    if (range === 3) {
      $scope.elixirInput++;
    }
    if (range === 4) {
      $scope.elixirNoirInput++;
    }
  };

  $scope.decreaseValue = function(range) {
    if (range === 1) {
      $scope.gemsInput--;
    }
    if (range === 2) {
      $scope.goldInput--;
    }
    if (range === 3) {
      $scope.elixirInput--;
    }
    if (range === 4) {
      $scope.elixirNoirInput--;
    }
  };

  $scope.menuTitles = [
    {
      id: 0,
      name: 'Whats Clash of clans ?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 1,
      name: 'How to play',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      name: 'Basics for beginners',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      name: 'Tips & Tricks',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 4,
      name: 'HOW TO GET FREE COINS',
      content: '<div class="row"><img class="user-avatar img-circle img-responsive col-sm-offset-3 col-sm-6 col-xs-offset-3 col-xs-6" src="images/flat-avatar.png" alt="Im Yeoman" style="max-width: 50%;"/></div>'
    }
  ];

  angular.forEach($state.get(), function (item) {
    if (item.data && item.data.visible) {
      $scope.menuItems.push({name: item.name, text: item.data.text});
    }
  });

  // function toggleContentTab(titleObj) {
  //   $scope.toggleTab = !$scope.toggleTab;
  //   $scope.openedTitle = titleObj;
  // }

});
