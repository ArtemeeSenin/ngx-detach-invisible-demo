import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetachInvisibleModule, DetachInvisibleService} from 'ngx-detach-invisible';
import { AppComponent } from './app.component';
import { EmojiCounterComponent } from './emoji-counter/emoji-counter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DetachInvisibleModule ],
  declarations: [ AppComponent, EmojiCounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DetachInvisibleService ]
})
export class AppModule { }
