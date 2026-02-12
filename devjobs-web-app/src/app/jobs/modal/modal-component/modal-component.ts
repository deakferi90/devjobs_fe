import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../../shared/theme.service';
import { JobFilterService } from '../../../shared/job-filter';
import { MatDialogRef } from '@angular/material/dialog';
import { JobFilters } from '../../../filter-component/Job-filters';

@Component({
  selector: 'app-mobile-view',
  imports: [FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.scss',
})
export class ModalComponent {
  readonly dialog = inject(MatDialog);
  title: any = '';
  location: string = '';
  fullTime: boolean = false;
  constructor(
    public themeService: ThemeService,
    private filterService: JobFilterService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobFilters,
  ) {
    this.title = data.title;
    this.location = data.location;
    this.fullTime = data.fullTime;
  }

  activateFilter() {
    this.filterService.setFilters({
      title: this.title,
      location: this.location,
      fullTime: this.fullTime,
    });

    this.dialogRef.close();
  }
}
