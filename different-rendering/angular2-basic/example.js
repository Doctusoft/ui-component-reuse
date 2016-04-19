app = {};

document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
});

function AddressChooserControllerFactory() {
    return function() {
        this.address = {};
        this.countryOptions = [
            {id: 'FR', name: 'France'},
            {id: 'UK', name: 'United Kingdom'},
            {id: 'HU', name: 'Hungary'}
        ];
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
}

app.CompactAddressChooserComponent = 
    ng.core.Component({
        selector: 'address-chooser-compact',
        template: `
           <div>
            <select [(ngModel)]="address.country" class="input-mini">
              <option *ngFor="#country of countryOptions" value="{{country.id}}">{{country.id}}</option>
            </select>
            <input class="input-small" type="text" [(ngModel)]="address.postCode" (input)="handlePostCodeChange()">
            <input class="input-small" type="text" [(ngModel)]="address.city" (input)="handleCityChange()">
           </div>`
    })
    .Class({
        constructor: AddressChooserControllerFactory()
    });

app.FullAddressChooserComponent = 
    ng.core.Component({
        selector: 'address-chooser-full',
        template: `
            <div class="address-chooser-full">
                <div class="control-group">
                    <label class="control-label">Country</label>
                    <div class="controls">
                        <select [(ngModel)]="address.country">
                            <option *ngFor="#country of countryOptions" value="{{country.id}}">{{country.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label">Postcode</label>
                    <div class="controls">
                        <input type="text" class="input-medium" [(ngModel)]="address.postCode" (input)="handlePostCodeChange()">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label">City</label>
                    <div class="controls">
                        <input type="text" class="input-medium" [(ngModel)]="address.city" (input)="handleCityChange()">
                    </div>
                </div>
            </div>`
    })
    .Class({
        constructor: AddressChooserControllerFactory()
    });
    
app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: `
        <form class="form-horizontal">
            <div class="control-group">
                <label class="control-label">Compact mode</label>
                <div class="controls">
                    <address-chooser-compact></address-chooser-compact>
                </div>
            </div>
            <address-chooser-full></address-chooser-full>
        </form>`, 
        directives: [app.CompactAddressChooserComponent, app.FullAddressChooserComponent]
    })
    .Class({
        constructor: function() {}
    });



