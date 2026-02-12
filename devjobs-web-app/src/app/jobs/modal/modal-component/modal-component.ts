import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../../shared/theme.service';

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
  constructor(public themeService: ThemeService) {}
}
