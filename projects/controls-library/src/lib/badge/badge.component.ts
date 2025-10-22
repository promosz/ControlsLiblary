import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'defaultBold' | 'primary' | 'primaryInverted' | 'important' | 'added' | 'removed';

@Component({
  selector: 'cl-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() label: string = '25';
  @Input() variant: BadgeVariant = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get badgeClasses(): string {
    return [
      'cl-badge',
      `cl-badge--${this.variant}`,
      `cl-badge--${this.size}`
    ].join(' ');
  }
}