import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



const materialModules = [
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule
]

@NgModule({
    declarations:[],
    imports:[materialModules],
    exports:[materialModules]
})
export class MaterialModule {

}