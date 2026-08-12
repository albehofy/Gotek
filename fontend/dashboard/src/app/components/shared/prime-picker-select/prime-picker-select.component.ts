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
      background: rgba(99, 102, 241, 0.04);
      border: 1px solid var(--border, rgba(99, 102, 241, 0.2));
      border-radius: 12px;
      color: var(--text, #ffffff);
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .picker-trigger:hover {
      border-color: var(--violet, #6366f1);
      background: rgba(99, 102, 241, 0.08);
    }
    :host-context(body.light-theme) .picker-trigger {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .picker-trigger:hover {
      border-color: #6366f1 !important;
      background: rgba(99, 102, 241, 0.04) !important;
    }
    .placeholder-text {
      color: var(--text-2, #94a3b8);
    }
    :host-context(body.light-theme) .placeholder-text {
      color: #64748b !important;
    }
    .toggle-icon {
      font-size: 0.8rem;
      color: var(--violet-light, #818cf8);
      transition: transform 0.2s;
    }
    :host-context(body.light-theme) .toggle-icon {
      color: #6366f1 !important;
    }
    .open .toggle-icon {
      transform: rotate(180deg);
    }
    .picker-dropdown-panel {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      z-index: 1050;
      background: #111228;
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 14px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 320px;
    }
    :host-context(body.light-theme) .picker-dropdown-panel {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.25) !important;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.15) !important;
    }
    .picker-search-box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.2);
    }
    :host-context(body.light-theme) .picker-search-box {
      background: #f8fafc !important;
      border-bottom-color: rgba(99, 102, 241, 0.12) !important;
    }
    .picker-search-box input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text, #ffffff);
      font-size: 0.88rem;
      font-family: inherit;
    }
    :host-context(body.light-theme) .picker-search-box input {
      color: #0f172a !important;
    }
    .search-icon, .clear-icon {
      color: var(--text-2, #94a3b8);
      font-size: 0.85rem;
    }
    :host-context(body.light-theme) .search-icon,
    :host-context(body.light-theme) .clear-icon {
      color: #64748b !important;
    }
    .picker-options-list {
      list-style: none;
      margin: 0;
      padding: 6px 0;
      overflow-y: auto;
      max-height: 200px;
    }
    .picker-options-list li {
      padding: 10px 16px;
      font-size: 0.88rem;
      color: var(--text, #e2e8f0);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s;
    }
    :host-context(body.light-theme) .picker-options-list li {
      color: #1e293b !important;
    }
    .picker-options-list li:hover {
      background: rgba(99, 102, 241, 0.12);
      color: var(--violet-light, #818cf8);
    }
    :host-context(body.light-theme) .picker-options-list li:hover {
      background: rgba(99, 102, 241, 0.08) !important;
      color: #4f46e5 !important;
    }
    .picker-options-list li.active {
      background: var(--violet, #6366f1);
      color: #ffffff !important;
      font-weight: 700;
    }
    :host-context(body.light-theme) .picker-options-list li.active {
      background: #6366f1 !important;
      color: #ffffff !important;
    }
    .item-sublabel {
      font-size: 0.75rem;
      opacity: 0.7;
    }
    .no-results {
      padding: 12px 16px;
      text-align: center;
      color: var(--text-2, #94a3b8);
      font-style: italic;
      font-size: 0.84rem;
    }
    .picker-footer-action {
      padding: 8px 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.15);
    }
    :host-context(body.light-theme) .picker-footer-action {
      background: #f8fafc !important;
      border-top-color: rgba(99, 102, 241, 0.12) !important;
    }
    .btn-inline-add {
      width: 100%;
      padding: 8px 12px;
      background: rgba(99, 102, 241, 0.12);
      border: 1px dashed rgba(99, 102, 241, 0.4);
      border-radius: 10px;
      color: var(--violet-light, #818cf8);
      font-weight: 700;
      font-size: 0.84rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.2s;
      font-family: inherit;
    }
    .btn-inline-add:hover {
      background: var(--violet, #6366f1);
      color: #ffffff !important;
      border-style: solid;
    }
    :host-context(body.light-theme) .btn-inline-add {
      background: rgba(99, 102, 241, 0.08) !important;
      color: #4f46e5 !important;
      border-color: rgba(99, 102, 241, 0.4) !important;
    }
    :host-context(body.light-theme) .btn-inline-add:hover {
      background: #6366f1 !important;
      color: #ffffff !important;
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
