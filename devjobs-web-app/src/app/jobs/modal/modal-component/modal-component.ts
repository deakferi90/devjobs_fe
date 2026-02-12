import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../../shared/theme.service';
import { JobFilterService } from '../../../shared/job-filter';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-view',
  imports: [FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.scss',
})
export class ModalComponent {
  readonly dialog = inject(MatDialog);
  location: string = '';
  fullTime: boolean = false;
  constructor(
    public themeService: ThemeService,
    private filterService: JobFilterService,
    private dialogRef: MatDialogRef<any>,
  ) {}

  activateFilter() {
    this.filterService.setFilters({
      title: '',
      location: this.location,
      fullTime: this.fullTime,
    });
    this.dialogRef.close();
  }
}
