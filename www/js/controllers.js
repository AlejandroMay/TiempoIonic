angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Tiempo, Units, Cities, nDays) {

  //
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?cnt=" + nDays.get() + "&q=" + Cities.get() + "&lang=es&units=" + Units.get()).success(function (data){
      Tiempo.set(data.list);
      console.log(data.list);
      $scope.objeU = Tiempo.getItem();
      $scope.allChats = Tiempo.all();
      });

    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?cnt=" + nDays.get() + "&q=" + Cities.get() + "&lang=es&units=" + Units.get()).success(function(data) {
      Tiempo.set(data.list);
      $scope.objeU = Tiempo.getItem();
      $scope.allChats = Tiempo.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('ChatsCtrl', function($scope, $http, Tiempo) {
  $scope.chats = Tiempo.all();

  $scope.remove = function(chat) {
    Tiempo.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Tiempo) {
  $scope.objeU = Tiempo.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Units, Cities, nDays) {
  
  $scope.UnitCelsius = function(){
      Units.set("metric");
  }
    $scope.UnitKelvin = function(){
      Units.set("kelvin");
  }
  $scope.UnitFaren = function(){
      Units.set("imperial");
  }

    $scope.cancunCity = function(){
      Cities.set("cancun");
  }
    $scope.meridaCity = function(){
      Cities.set("merida");
  }
  $scope.campecheCity = function(){
      Cities.set("campeche");
  }
    $scope.threeDays = function(){
      nDays.set("3");
  }
    $scope.sevenDays = function(){
      nDays.set("7");
  }
  $scope.tenDays = function(){
      nDays.set("10");
  }


});
