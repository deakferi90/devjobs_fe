import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JobFilters } from './Jjob-filters';

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

  @Output() searchChange = new EventEmitter<JobFilters>();

  activateFilter() {
    this.searchChange.emit({
      title: this.title,
      location: this.location,
      fullTime: this.fullTime,
    });
  }
}
