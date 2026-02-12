import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JobFilters } from './Job-filters';
import { signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ThemeService } from '../shared/theme.service';
import { JobFilterService } from '../shared/job-filter';
import { ModalComponent } from '../jobs/modal/modal-component/modal-component';
import { MatDialog } from '@angular/material/dialog';

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
  readonly dialog = inject(MatDialog);

  constructor(
    private bo: BreakpointObserver,
    public themeService: ThemeService,
    private filterService: JobFilterService,
  ) {
    this.bo.observe(['(min-width: 721px)']).subscribe((result) => {
      this.isBigger.set(result.matches);
    });
  }

  @Output() searchChange = new EventEmitter<JobFilters>();

  activateFilter() {
    this.filterService.setFilters({
      title: this.title,
      location: this.location,
      fullTime: this.fullTime,
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      panelClass: 'no-radius-dialog',
      data: {
        title: this.title,
        location: this.location,
        fullTime: this.fullTime,
      },
    });
  }
}
