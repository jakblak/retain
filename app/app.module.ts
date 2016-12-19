import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Main, Notes } from './containers/index';
import { AppBar, NoteCard, NoteCreator } from './ui/index';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    AppBar,
    NoteCard,
    NoteCreator,
    Notes
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule { }