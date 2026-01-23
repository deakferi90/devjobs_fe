import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
