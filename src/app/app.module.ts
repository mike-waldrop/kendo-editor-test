import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandstarEditorComponent } from './landstar-editor/landstar-editor.component';
import '@progress/kendo-ui';


@NgModule({
  declarations: [
    AppComponent,
    LandstarEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
