import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from '../filter-component/filter-component';
import { Logo } from '../jobs/logo/logo';
import { JobFilters } from '../filter-component/Job-filters';
import { ThemeService } from '../shared/theme.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { JobStateService } from '../shared/jobstate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FilterComponent,
    Logo,
    CommonModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit {
  @Output() searchChange = new EventEmitter<JobFilters>();
  showFilter = false;
  selectedJobId: number | null = null;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    public jobState: JobStateService,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFilter = event.urlAfterRedirects === '/jobs';
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const checkbox = document.querySelector(
      '#darkModeCheckbox',
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = this.themeService.theme() === 'dark';
    }

    this.applyTheme(this.themeService.theme() === 'dark');
  }

  get jobId() {
    return this.jobState.currentJobId();
  }

  onFilterChange(search: JobFilters) {
    this.searchChange.emit(search);
  }

  toggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked && this.themeService.theme() !== 'dark') {
      this.themeService.toggle();
    }

    if (!checked && this.themeService.theme() !== 'light') {
      this.themeService.toggle();
    }

    this.applyTheme(this.themeService.theme() === 'dark');
  }

  private applyTheme(isDark: boolean) {
    const filteringBoxes =
      document.querySelectorAll<HTMLElement>('.filtering-boxes');
    const boxColors = document.querySelectorAll<HTMLElement>('.boxes');
    const inputEl = document.querySelectorAll<HTMLElement>('.input-el');
    const titleText = document.querySelectorAll<HTMLElement>('.position');
    const labelText = document.querySelector<HTMLElement>('.label-text');
    const respInput = document.querySelectorAll<HTMLInputElement>('.sm-input');
    const inputBoxMobView =
      document.querySelectorAll<HTMLInputElement>('.input-box');

    if (isDark) {
      document.body.style.backgroundColor = '#121721';
      document.body.style.color = '#fff';

      boxColors.forEach((box) => (box.style.backgroundColor = '#19202D'));
      inputEl.forEach((box) => (box.style.backgroundColor = '#19202D'));
      filteringBoxes.forEach((box) => (box.style.backgroundColor = '#19202D'));
      titleText.forEach((title) => (title.style.color = '#fff'));
      if (labelText) labelText.style.color = '#fff';
      if (respInput) {
        respInput.forEach((input) => {
          ((input.style.color = '#fff'),
            (input.style.backgroundColor = '#19202D'));
        });
      }
      inputBoxMobView.forEach((input) => {
        input.style.backgroundColor = '#19202D';
        input.style.color = '#fff';
      });
    } else {
      document.body.style.backgroundColor = '#f4f6f8';
      document.body.style.color = '#132034';

      boxColors.forEach((box) => (box.style.backgroundColor = '#fff'));
      inputEl.forEach((box) => (box.style.backgroundColor = '#fff'));
      filteringBoxes.forEach((box) => (box.style.backgroundColor = '#fff'));
      titleText.forEach((title) => (title.style.color = '#19202D'));

      if (labelText) labelText.style.color = '#19202D';
      if (respInput) {
        respInput.forEach((input) => {
          ((input.style.color = '#000'),
            (input.style.backgroundColor = '#fff'));
        });
      }
      inputBoxMobView.forEach((input) => {
        input.style.backgroundColor = '#fff';
      });
    }
  }
}
