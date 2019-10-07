import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list.component';
import { ListItemComponent } from './components/list-item.component';
import { AddItemComponent } from './components/add-item.component';
import { AddComponent } from './components/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    AddItemComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, MaterialModule, BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddItemComponent]
})
export class AppModule { }
