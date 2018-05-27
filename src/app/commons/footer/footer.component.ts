import { Component } from "@angular/core";

@Component({
    selector:'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],

})

export class FooterComponent{
    private instagram:string;
    private facebook:string
    constructor(){
        this.instagram = 'mitasadecambio'
        this.facebook = 'mitasadecambio'
    }
}