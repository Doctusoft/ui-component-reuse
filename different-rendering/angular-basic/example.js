function MainController() {
    
}

function CompactAddressChooserDirective() {
    return {
      templateUrl: 'address-chooser-compact.html',
      restrict: 'E',
      replace: true,
      scope: true,
      controller: AddressChooserController,
      controllerAs: 'ctrl'
    };
}

function FullAddressChooserDirective() {
    return {
      templateUrl: 'address-chooser-full.html',
      restrict: 'E',
      replace: true,
      scope: true,
      controller: AddressChooserController,
      controllerAs: 'ctrl'
    };
}

function AddressChooserController($scope) {
    this.countryOptions = [
        {id: 'FR', name: 'France'},
        {id: 'UK', name: 'United Kingdom'},
        {id: 'HU', name: 'Hungary'}
    ];
    this.address = {};
    this.handlePostCodeChange = function() {
        if (this.address.postCode && this.address.postCode.length > 3) {
            this.address.city = 'City for ' + this.address.postCode;
        } else {
            this.address.city = '';
        }
    }
    this.handleCityChange = function() {
        if (this.address.city && this.address.city.length > 3) {
            this.address.postCode = '000' + this.address.city.length;
        }
    }
}

angular.module('example', [])
  .controller('MainController', MainController)
  .directive('addressChooserCompact', CompactAddressChooserDirective)
  .directive('addressChooserFull', FullAddressChooserDirective);