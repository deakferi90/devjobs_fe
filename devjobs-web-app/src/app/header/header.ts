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
import { JobFilters } from '../filter-component/Job-filters';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, FilterComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit {
  @Output() searchChange = new EventEmitter<JobFilters>();

  private observer!: MutationObserver;

  ngOnInit() {
    // nothing here on purpose
  }

  ngAfterViewInit() {
    const isDark = localStorage.getItem('darkMode') === 'true';

    const checkbox = document.querySelector(
      '#darkModeCheckbox',
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = isDark;
    }

    this.applyTheme(isDark);

    // 🔥 VERY IMPORTANT: re-apply theme when Angular renders new DOM
    this.observer = new MutationObserver(() => {
      this.applyTheme(isDark);
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  onFilterChange(search: JobFilters) {
    this.searchChange.emit(search);
  }

  toggleDarkMode(event: Event) {
    const isDark = (event.target as HTMLInputElement).checked;

    localStorage.setItem('darkMode', String(isDark));
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean) {
    const filteringBoxes = document.querySelectorAll(
      '.filtering-boxes',
    ) as NodeListOf<HTMLElement>;

    const boxColors = document.querySelectorAll(
      '.boxes',
    ) as NodeListOf<HTMLElement>;

    const inputEl = document.querySelectorAll(
      '.input-el',
    ) as NodeListOf<HTMLElement>;

    const titleText = document.querySelectorAll(
      '.position',
    ) as NodeListOf<HTMLElement>;

    const labelText = document.querySelector('.label-text') as HTMLElement;

    if (isDark) {
      document.body.style.backgroundColor = '#121721';
      document.body.style.color = '#fff';

      boxColors.forEach((box) => (box.style.backgroundColor = '#19202D'));
      inputEl.forEach((box) => (box.style.backgroundColor = '#19202D'));
      filteringBoxes.forEach((box) => (box.style.backgroundColor = '#19202D'));
      titleText.forEach((title) => (title.style.color = '#fff'));

      if (labelText) labelText.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#f4f6f8';
      document.body.style.color = '#132034';

      boxColors.forEach((box) => (box.style.backgroundColor = '#fff'));
      inputEl.forEach((box) => (box.style.backgroundColor = '#fff'));
      filteringBoxes.forEach((box) => (box.style.backgroundColor = '#fff'));
      titleText.forEach((title) => (title.style.color = '#19202D'));

      if (labelText) labelText.style.color = '#19202D';
    }
  }
}
