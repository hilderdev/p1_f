import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent,TableComponent } from ".";
import { Ng2SmartTableModule } from "ng2-smart-table";



@NgModule({
    imports:[CommonModule,FormsModule,RouterModule,Ng2SmartTableModule],
    declarations:[HeaderComponent,FooterComponent,TableComponent],
    exports:[CommonModule,FormsModule,RouterModule,HeaderComponent,FooterComponent,TableComponent,Ng2SmartTableModule]
})
export class allModule{}