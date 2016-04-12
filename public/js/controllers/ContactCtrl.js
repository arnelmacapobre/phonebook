angular.module('ContactCtrl', []).controller('ContactController', function ($scope, Contact) {

    $("#alert").on("shown.bs.modal", function () {
        console.log("modal shown");
        window.setTimeout(function () {
            $("#alert").modal("hide");
        }, 2500);
    });
    
    $scope.contacts = [];

    // Load all contacts
    $scope.getContacts = function () {
        Contact.get()
            .then(function (response) {
                $scope.contacts = response.data;
            }, function (error) {
                $scope.status = 'Unable to load contacts data: ' + error.message;
            });
    }
    $scope.getContacts();

    $scope.addContact = function (data) {
        Contact.create(data)
            .then(function (response) {
                $scope.contact = {};
                $scope.contacts.push(data);
                $scope.status = 'Successfully added contact!';
                $('#addForm').modal('hide');
                $('#alert').modal('show');
            }, function (error) {
                $scope.status = 'Unable to add contact: ' + error.message;
                $('#alert').modal('show');
            });
    }

    $scope.editContact = function (data) {
        $scope.contact = data;
    }
    
    $('#editForm').on('hidden.bs.modal', function () {
        $scope.getContacts();
    });    
    
    $scope.updateContact = function (data, form) {
        if(form.$pristine) return;
        Contact.update(data)
            .then(function (response) {
                $scope.getContacts();
                $scope.status = 'Successfully updated contact!';
                $('#alert').modal('show');
            }, function (error) {
                $scope.status = 'Unable to update contact: ' + error.message;
                $('#alert').modal('show');
            });
    }

    $scope.deleteContact = function (data){
        if(confirm('Are you sure you want to delete ' + data.firstName + ' ' + data.lastName + '?')){
            Contact.delete(data._id)
                .then(function (response) {
                    $scope.getContacts();               
                    $scope.status = 'Successfully deleted contact!';
                    $('#alert').modal('show');
                }, function (error) {
                    $scope.status = 'Unable to delete contact: ' + error.message;
                    $('#alert').modal('show');
                });
            }
    }

});

    

