import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-counter',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmojiCounterComponent {

  @Input() public readonly name: string = 'Hello World Component';

  @Input() public readonly count: number = 0;

}
