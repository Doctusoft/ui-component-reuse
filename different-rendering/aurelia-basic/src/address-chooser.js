export class AddressChooser {
    countryOptions = [
        {id: 'FR', name: 'France'},
        {id: 'UK', name: 'United Kingdom'},
        {id: 'HU', name: 'Hungary'}
    ];
    address = {};
    handlePostCodeChange() {
        if (this.address.postCode && this.address.postCode.length > 3) {
            this.address.city = 'City for ' + this.address.postCode;
        } else {
            this.address.city = '';
        }
    }
    handleCityChange() {
        if (this.address.city && this.address.city.length > 3) {
            this.address.postCode = '000' + this.address.city.length;
        }
    }
}
