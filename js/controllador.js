(function () {
    'use strict';

    angular
        .module('Myapp')
        //
        .controller('Menu', ['$scope', '$q', '$timeout', 'ServicePhp', Menu])

        function Menu($scope, $q, $timeout, ServicePhp ){
          $scope.lvl=1;
          $scope.iniciosesion=function(){
              $scope.lvl=2;
              getMenu();
          }
          $scope.salirsession=function(){
              $scope.lvl=1;
              getMenu();
          }
          $scope.listmenu=getMenu();

          function getMenu(){
            return $scope.listmenu =
            [
                           {
                               name: 'Categorias',
                               submenu:
                              [
                               {
                                   name: 'Zapatos',
                                   url:''
                               },
                               {
                                   name: 'Camisas',
                                   url:''
                               },
                               {
                                   name: 'Vestidos',
                                   url:''
                               },
                              ],
                              lvl:$scope.lvl>0
                           },
                           {
                               name: 'Administracion',
                               submenu:
                              [
                               {
                                   name: 'Categorias',
                                   url:''
                               },
                               {
                                   name: 'Elementos',
                                   url:''
                               },
                              ],
                              lvl:$scope.lvl>1
                           },

           ]

          }
        }



})();
