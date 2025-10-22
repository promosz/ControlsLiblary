import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'invisible';
export type ButtonColor = 'on' | 'off';
export type ButtonSize = '24' | '32' | '40' | '48';

@Component({
  selector: 'cl-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() color: ButtonColor = 'on';
  @Input() size: ButtonSize = '32';
  @Input() disabled: boolean = false;
  @Input() text: string = 'Button';
  @Input() iconBefore?: string;
  @Input() iconAfter?: string;
  
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  get buttonClasses(): string {
    return [
      'cl-button',
      `cl-button--${this.variant}`,
      `cl-button--${this.color}`,
      `cl-button--size-${this.size}`,
      this.disabled ? 'cl-button--disabled' : ''
    ].filter(Boolean).join(' ');
  }
}
