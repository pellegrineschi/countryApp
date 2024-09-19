import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit  {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500)
    )

    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTem:string){
    this.debouncer.next(searchTem);

  }

}
