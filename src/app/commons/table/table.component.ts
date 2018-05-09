import { Component } from "@angular/core";

@Component({
    selector:'app-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.css']
})
export class TableComponent{
    private settings:any;
    private data:object;
    constructor(){
        this.settings = {
            columns: {
              Exchange: {
                title: 'Nombre',
              },
              Rate: {
                title: 'Valor de tasa'
              },
              Instagram: {
                title: 'Redes Sociales'
              }
            },
            actions: {
                add:false,
                edit:false,
                delete:false
            },
            noDataMessage:'No existen elementos con este valor de búsqueda.'
        
        }; 
        this.data = [
            {
              Exchange: 1,
              Instagram: "Leanne Graham",
              Rate: "Bret"
            },
            {
              Exchange: 2,
              Instagram: "Ervin Howell",
              Rate: "Antonette"
            },
            {
              Exchange: 11,
              Instagram: "Nicholas DuBuque",
              Rate: "Nicholas.Stanton"
            },
            {
                Exchange: 1,
                Instagram: "Leanne Graham",
                Rate: "Bret"
              },
              {
                Exchange: 2,
                Instagram: "Ervin Howell",
                Rate: "Antonette"
              },
              {
                Exchange: 11,
                Instagram: "Nicholas DuBuque",
                Rate: "Nicholas.Stanton"
              },
              {
                Exchange: 1,
                Instagram: "Leanne Graham",
                Rate: "Bret"
              },
              {
                Exchange: 2,
                Instagram: "Ervin Howell",
                Rate: "Antonette"
              },
              {
                Exchange: 11,
                Instagram: "Nicholas DuBuque",
                Rate: "Nicholas.Stanton"
              },
              {
                Exchange: 1,
                Instagram: "Leanne Graham",
                Rate: "Bret"
              },
              {
                Exchange: 2,
                Instagram: "Ervin Howell",
                Rate: "Antonette"
              },
              {
                Exchange: 11,
                Instagram: "Nicholas DuBuque",
                Rate: "Nicholas.Stanton"
              },
              {
                Exchange: 1,
                Instagram: "Leanne Graham",
                Rate: "Bret"
              },
              {
                Exchange: 2,
                Instagram: "Ervin Howell",
                Rate: "Antonette"
              },
              {
                Exchange: 11,
                Instagram: "Nicholas DuBuque",
                Rate: "Nicholas.Stanton"
              }
        ];
    }
}
