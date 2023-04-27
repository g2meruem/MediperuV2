import { Component } from '@angular/core';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Masculino', code: 'Option 1' },
        { name: 'Femenino', code: 'Option 2' },
        { name: 'Otro', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

}
