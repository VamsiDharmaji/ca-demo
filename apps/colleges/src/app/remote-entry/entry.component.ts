import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ca-demo-colleges-entry',
  template: `<ca-demo-nx-welcome></ca-demo-nx-welcome>`,
})
export class RemoteEntryComponent {}
