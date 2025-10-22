import { Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
    selector: 'app-test',
    imports: [ButtonComponent],
    template: `
    <div style="padding: 20px;">
      <h2>Test Button Component</h2>
      <cl-button 
        variant="primary" 
        color="on" 
        size="32" 
        text="Test Button"
        (clicked)="onClick()">
      </cl-button>
    </div>
  `,
    styles: []
})
export class TestComponent {
  onClick() {
    console.log('Button clicked!');
  }
}
