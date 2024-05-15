import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, NgFor, HeaderComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {}
