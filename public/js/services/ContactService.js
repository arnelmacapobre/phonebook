angular.module('ContactService', []).factory('Contact', ['$http', function($http) {

    return {
        // call to get all contacts
        get : function() {
            return $http.get('/api/contacts');
        },

        // call to POST and create a new contact
        create : function(data) {
            return $http.post('/api/contacts', data);
        },
		
		// call to UPDATE a contact
        update : function(data) {
            return $http.put('/api/contacts', data);
        },


        // call to DELETE a contact
        delete : function(id) {
            return $http.delete('/api/contacts/' + id);
        }
    }       

}]);