import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy  {

  private debouncerSuscription?: Subscription;

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500)
    )

    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {

    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTem:string){
    this.debouncer.next(searchTem);

  }

}
