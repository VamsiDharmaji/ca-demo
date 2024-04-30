import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-demo-colleges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollegesComponent {}
