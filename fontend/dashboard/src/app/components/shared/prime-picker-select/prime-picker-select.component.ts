import { Component, Input, Output, EventEmitter, forwardRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prime-picker-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimePickerSelectComponent),
      multi: true
    }
  ],
  template: `
    <div class="prime-picker-wrapper" [class.open]="isOpen">
      <div class="picker-trigger" (click)="toggleDropdown()">
        <span class="selected-label" *ngIf="selectedItem">{{ getItemLabel(selectedItem) }}</span>
        <span class="placeholder-text" *ngIf="!selectedItem">{{ placeholder }}</span>
        <i class="pi pi-chevron-down toggle-icon"></i>
      </div>

      <div class="picker-dropdown-panel" *ngIf="isOpen">
        <!-- Search Input Header -->
        <div class="picker-search-box">
          <i class="pi pi-search search-icon"></i>
          <input 
            type="text" 
            [(ngModel)]="searchQuery" 
            [placeholder]="searchPlaceholder"
            (click)="$event.stopPropagation()"
          />
          <i class="pi pi-times clear-icon" *ngIf="searchQuery" (click)="searchQuery = ''"></i>
        </div>

        <!-- Options List -->
        <ul class="picker-options-list">
          <li 
            *ngFor="let item of filteredItems()" 
            [class.active]="value === getItemValue(item)"
            (click)="selectItem(item)"
          >
            <span>{{ getItemLabel(item) }}</span>
            <small *ngIf="getItemSubLabel(item)" class="item-sublabel">{{ getItemSubLabel(item) }}</small>
          </li>
          <li *ngIf="filteredItems().length === 0" class="no-results">
            {{ emptyMessage }}
          </li>
        </ul>

        <!-- Inline "+ Add New" Shortcut Button -->
        <div class="picker-footer-action">
          <button type="button" class="btn-inline-add" (click)="triggerAddNew($event)">
            <i class="pi pi-plus"></i> {{ addNewLabel }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .prime-picker-wrapper {
      position: relative;
      width: 100%;
      user-select: none;
    }
    .picker-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      background: var(--surface-2, rgba(255,255,255,0.06));
      border: 1px solid var(--border-light, rgba(255,255,255,0.12));
      border-radius: var(--radius-sm, 10px);
      color: var(--text-primary, #fff);
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .picker-trigger:hover {
      border-color: var(--orange, #e8620a);
    }
    .placeholder-text {
      color: var(--text-muted, #71717a);
    }
    .picker-dropdown-panel {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      z-index: 1050;
      background: #12121c;
      border: 1px solid var(--border-light, rgba(255,255,255,0.15));
      border-radius: 12px;
      box-shadow: 0 16px 36px rgba(0,0,0,0.6);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 320px;
    }
    .picker-search-box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background: rgba(0,0,0,0.2);
    }
    .picker-search-box input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-size: 0.88rem;
    }
    .picker-options-list {
      list-style: none;
      margin: 0;
      padding: 4px 0;
      overflow-y: auto;
      max-height: 200px;
    }
    .picker-options-list li {
      padding: 10px 16px;
      font-size: 0.9rem;
      color: var(--text-secondary, #e4e4e7);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s;
    }
    .picker-options-list li:hover {
      background: rgba(232, 98, 10, 0.15);
      color: #fff;
    }
    .picker-options-list li.active {
      background: var(--orange, #e8620a);
      color: #fff;
      font-weight: bold;
    }
    .item-sublabel {
      font-size: 0.75rem;
      opacity: 0.7;
    }
    .no-results {
      text-align: center;
      color: var(--text-muted, #71717a);
      font-style: italic;
    }
    .picker-footer-action {
      padding: 8px;
      border-top: 1px solid rgba(255,255,255,0.08);
      background: rgba(0,0,0,0.25);
    }
    .btn-inline-add {
      width: 100%;
      padding: 8px 12px;
      background: rgba(232, 98, 10, 0.15);
      border: 1px dashed var(--orange, #e8620a);
      border-radius: 8px;
      color: var(--orange-light, #ff7a1f);
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-inline-add:hover {
      background: var(--orange, #e8620a);
      color: #fff;
    }
  `]
})
export class PrimePickerSelectComponent implements ControlValueAccessor {
  @Input() items: any[] = [];
  @Input() optionLabel = 'name';
  @Input() optionValue = 'id';
  @Input() optionSubLabel = '';
  @Input() placeholder = 'اختر عنصر من القائمة...';
  @Input() searchPlaceholder = 'بحث...';
  @Input() addNewLabel = '+ إضافة عنصر جديد';
  @Input() emptyMessage = 'لا توجد نتائج';

  @Output() addNew = new EventEmitter<void>();
  @Output() onChange = new EventEmitter<any>();

  value: any = null;
  isOpen = false;
  searchQuery = '';

  onChangeFn: any = () => {};
  onTouchedFn: any = () => {};

  get selectedItem() {
    return this.items.find(i => this.getItemValue(i) === this.value);
  }

  getItemLabel(item: any): string {
    if (!item) return '';
    if (typeof item === 'string') return item;
    return item[this.optionLabel] || item.name_ar || item.name || '';
  }

  getItemValue(item: any): any {
    if (!item) return null;
    if (typeof item === 'string' || typeof item === 'number') return item;
    return item[this.optionValue] !== undefined ? item[this.optionValue] : item.id;
  }

  getItemSubLabel(item: any): string {
    if (!item || !this.optionSubLabel) return '';
    return item[this.optionSubLabel] || '';
  }

  filteredItems() {
    if (!this.searchQuery.trim()) return this.items;
    const q = this.searchQuery.toLowerCase();
    return this.items.filter(item => {
      const label = this.getItemLabel(item).toLowerCase();
      const sub = this.getItemSubLabel(item).toLowerCase();
      return label.includes(q) || sub.includes(q);
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.onTouchedFn();
  }

  selectItem(item: any) {
    this.value = this.getItemValue(item);
    this.onChangeFn(this.value);
    this.onChange.emit(this.value);
    this.isOpen = false;
  }

  triggerAddNew(event: Event) {
    event.stopPropagation();
    this.isOpen = false;
    this.addNew.emit();
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
}
