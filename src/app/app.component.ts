import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  public names: string[] = [];
  public count = 0;

  private intervalId: number | undefined;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.names.push(String.fromCodePoint(i + 128054));
    }

    this.intervalId = setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 100);
  }

  public ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public trackBy(index: number, name: string): string {
    return name;
  }
}
