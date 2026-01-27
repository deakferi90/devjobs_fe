import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from '../filter-component/filter-component';
import { JobFilters } from '../filter-component/Job-filters';

@Component({
  selector: 'app-header',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, FilterComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() searchChange = new EventEmitter<JobFilters>();

  onFilterChange(search: JobFilters) {
    this.searchChange.emit(search);
  }
}
