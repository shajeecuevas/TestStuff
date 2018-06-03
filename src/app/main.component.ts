import { Component } from '@angular/core';

@Component({
    selector: 'main-component',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group row">
                    <label for="example-text-input" class="col-2 col-form-label">Text</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
                    <div class="col-10">
                        <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./main.component.css']
})
export class MainComponent {

}