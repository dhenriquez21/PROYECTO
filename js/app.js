(function () {
    'use strict';
    angular
        .module('Myapp', [])
        .factory('ServicePhp', ['$http', ServicePhp])
    function ServicePhp($http) {
        //var url = 'http://service.saludsystemcloud.com/Service';
        //var url = 'http://localhost:8070/proyectos_web/prueba/';
        //var url = 'http://192.168.1.111:8089/Service';
        //var url = 'http://127.0.0.1:8089/Service';
        var rs = {};
        rs.getCrud = function (data, crud) {
            return $http({
                header:{
                    'content-type': 'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                },
                url: url + crud,
                method: "POST",
                data: { json: angular.toJson(data) }
            });
        }
        return rs;
    }


})();
