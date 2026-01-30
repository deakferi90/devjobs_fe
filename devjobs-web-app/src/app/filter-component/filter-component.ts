import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JobFilters } from './Job-filters';
import { signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './filter-component.html',
  styleUrls: ['./filter-component.scss'],
})
export class FilterComponent {
  title = '';
  location = '';
  fullTime = false;
  isBigger = signal(true);
  inputText: string = '';
  textColor: string = 'black';

  constructor(private bo: BreakpointObserver) {
    this.bo.observe(['(min-width: 721px)']).subscribe((result) => {
      this.isBigger.set(result.matches);
    });
  }

  @Output() searchChange = new EventEmitter<JobFilters>();

  activateFilter() {
    this.searchChange.emit({
      title: this.title,
      location: this.location,
      fullTime: this.fullTime,
    });
  }

  onKeyUp() {
    if (this.inputText.length > 0) {
      this.textColor = 'red';
    } else {
      this.textColor = 'black';
    }
  }
}
