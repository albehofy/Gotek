import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-6TEPOG2V.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CK3LQYPJ.js";

// src/app/components/shared/prime-picker-select/prime-picker-select.component.ts
function PrimePickerSelectComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getItemLabel(ctx_r0.selectedItem));
  }
}
function PrimePickerSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
function PrimePickerSelectComponent_div_5_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 19);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_i_4_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.searchQuery = "");
    });
    \u0275\u0275elementEnd();
  }
}
function PrimePickerSelectComponent_div_5_li_6_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getItemSubLabel(item_r5));
  }
}
function PrimePickerSelectComponent_div_5_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_li_6_Template_li_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectItem(item_r5));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PrimePickerSelectComponent_div_5_li_6_small_3_Template, 2, 1, "small", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.value === ctx_r0.getItemValue(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getItemLabel(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getItemSubLabel(item_r5));
  }
}
function PrimePickerSelectComponent_div_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessage, " ");
  }
}
function PrimePickerSelectComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PrimePickerSelectComponent_div_5_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchQuery, $event) || (ctx_r0.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PrimePickerSelectComponent_div_5_i_4_Template, 1, 0, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 13);
    \u0275\u0275template(6, PrimePickerSelectComponent_div_5_li_6_Template, 4, 4, "li", 14)(7, PrimePickerSelectComponent_div_5_li_7_Template, 2, 1, "li", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "button", 17);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerAddNew($event));
    });
    \u0275\u0275element(10, "i", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQuery);
    \u0275\u0275property("placeholder", ctx_r0.searchPlaceholder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredItems());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredItems().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.addNewLabel, " ");
  }
}
var PrimePickerSelectComponent = class _PrimePickerSelectComponent {
  items = [];
  optionLabel = "name";
  optionValue = "id";
  optionSubLabel = "";
  placeholder = "\u0627\u062E\u062A\u0631 \u0639\u0646\u0635\u0631 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629...";
  searchPlaceholder = "\u0628\u062D\u062B...";
  addNewLabel = "+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631 \u062C\u062F\u064A\u062F";
  emptyMessage = "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C";
  addNew = new EventEmitter();
  onChange = new EventEmitter();
  value = null;
  isOpen = false;
  searchQuery = "";
  onChangeFn = () => {
  };
  onTouchedFn = () => {
  };
  get selectedItem() {
    return this.items.find((i) => this.getItemValue(i) === this.value);
  }
  getItemLabel(item) {
    if (!item)
      return "";
    if (typeof item === "string")
      return item;
    return item[this.optionLabel] || item.name_ar || item.name || "";
  }
  getItemValue(item) {
    if (!item)
      return null;
    if (typeof item === "string" || typeof item === "number")
      return item;
    return item[this.optionValue] !== void 0 ? item[this.optionValue] : item.id;
  }
  getItemSubLabel(item) {
    if (!item || !this.optionSubLabel)
      return "";
    return item[this.optionSubLabel] || "";
  }
  filteredItems() {
    if (!this.searchQuery.trim())
      return this.items;
    const q = this.searchQuery.toLowerCase();
    return this.items.filter((item) => {
      const label = this.getItemLabel(item).toLowerCase();
      const sub = this.getItemSubLabel(item).toLowerCase();
      return label.includes(q) || sub.includes(q);
    });
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen)
      this.onTouchedFn();
  }
  selectItem(item) {
    this.value = this.getItemValue(item);
    this.onChangeFn(this.value);
    this.onChange.emit(this.value);
    this.isOpen = false;
  }
  triggerAddNew(event) {
    event.stopPropagation();
    this.isOpen = false;
    this.addNew.emit();
  }
  writeValue(val) {
    this.value = val;
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  static \u0275fac = function PrimePickerSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimePickerSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrimePickerSelectComponent, selectors: [["app-prime-picker-select"]], inputs: { items: "items", optionLabel: "optionLabel", optionValue: "optionValue", optionSubLabel: "optionSubLabel", placeholder: "placeholder", searchPlaceholder: "searchPlaceholder", addNewLabel: "addNewLabel", emptyMessage: "emptyMessage" }, outputs: { addNew: "addNew", onChange: "onChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _PrimePickerSelectComponent),
      multi: true
    }
  ])], decls: 6, vars: 5, consts: [[1, "prime-picker-wrapper"], [1, "picker-trigger", 3, "click"], ["class", "selected-label", 4, "ngIf"], ["class", "placeholder-text", 4, "ngIf"], [1, "pi", "pi-chevron-down", "toggle-icon"], ["class", "picker-dropdown-panel", 4, "ngIf"], [1, "selected-label"], [1, "placeholder-text"], [1, "picker-dropdown-panel"], [1, "picker-search-box"], [1, "pi", "pi-search", "search-icon"], ["type", "text", 3, "ngModelChange", "click", "ngModel", "placeholder"], ["class", "pi pi-times clear-icon", 3, "click", 4, "ngIf"], [1, "picker-options-list"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "picker-footer-action"], ["type", "button", 1, "btn-inline-add", 3, "click"], [1, "pi", "pi-plus"], [1, "pi", "pi-times", "clear-icon", 3, "click"], [3, "click"], ["class", "item-sublabel", 4, "ngIf"], [1, "item-sublabel"], [1, "no-results"]], template: function PrimePickerSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function PrimePickerSelectComponent_Template_div_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275template(2, PrimePickerSelectComponent_span_2_Template, 2, 1, "span", 2)(3, PrimePickerSelectComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, PrimePickerSelectComponent_div_5_Template, 12, 6, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedItem);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedItem);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.prime-picker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.picker-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: var(--surface-2, rgba(255,255,255,0.06));\n  border: 1px solid var(--border-light, rgba(255,255,255,0.12));\n  border-radius: var(--radius-sm, 10px);\n  color: var(--text-primary, #fff);\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.picker-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange, #e8620a);\n}\n.placeholder-text[_ngcontent-%COMP%] {\n  color: var(--text-muted, #71717a);\n}\n.picker-dropdown-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: #12121c;\n  border: 1px solid var(--border-light, rgba(255,255,255,0.15));\n  border-radius: 12px;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 320px;\n}\n.picker-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\n.picker-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 0.88rem;\n}\n.picker-options-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #e4e4e7);\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s;\n}\n.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 98, 10, 0.15);\n  color: #fff;\n}\n.picker-options-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--orange, #e8620a);\n  color: #fff;\n  font-weight: bold;\n}\n.item-sublabel[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted, #71717a);\n  font-style: italic;\n}\n.picker-footer-action[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.25);\n}\n.btn-inline-add[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(232, 98, 10, 0.15);\n  border: 1px dashed var(--orange, #e8620a);\n  border-radius: 8px;\n  color: var(--orange-light, #ff7a1f);\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.btn-inline-add[_ngcontent-%COMP%]:hover {\n  background: var(--orange, #e8620a);\n  color: #fff;\n}\n/*# sourceMappingURL=prime-picker-select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimePickerSelectComponent, [{
    type: Component,
    args: [{ selector: "app-prime-picker-select", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PrimePickerSelectComponent),
        multi: true
      }
    ], template: `
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
  `, styles: ["/* angular:styles/component:css;464b1def02579eb9a8783f0d02b8c21dd0240f40ddc542e8f9679fd0c0a33487;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/shared/prime-picker-select/prime-picker-select.component.ts */\n.prime-picker-wrapper {\n  position: relative;\n  width: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.picker-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: var(--surface-2, rgba(255,255,255,0.06));\n  border: 1px solid var(--border-light, rgba(255,255,255,0.12));\n  border-radius: var(--radius-sm, 10px);\n  color: var(--text-primary, #fff);\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.picker-trigger:hover {\n  border-color: var(--orange, #e8620a);\n}\n.placeholder-text {\n  color: var(--text-muted, #71717a);\n}\n.picker-dropdown-panel {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: #12121c;\n  border: 1px solid var(--border-light, rgba(255,255,255,0.15));\n  border-radius: 12px;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 320px;\n}\n.picker-search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\n.picker-search-box input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 0.88rem;\n}\n.picker-options-list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.picker-options-list li {\n  padding: 10px 16px;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #e4e4e7);\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s;\n}\n.picker-options-list li:hover {\n  background: rgba(232, 98, 10, 0.15);\n  color: #fff;\n}\n.picker-options-list li.active {\n  background: var(--orange, #e8620a);\n  color: #fff;\n  font-weight: bold;\n}\n.item-sublabel {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.no-results {\n  text-align: center;\n  color: var(--text-muted, #71717a);\n  font-style: italic;\n}\n.picker-footer-action {\n  padding: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.25);\n}\n.btn-inline-add {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(232, 98, 10, 0.15);\n  border: 1px dashed var(--orange, #e8620a);\n  border-radius: 8px;\n  color: var(--orange-light, #ff7a1f);\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.btn-inline-add:hover {\n  background: var(--orange, #e8620a);\n  color: #fff;\n}\n/*# sourceMappingURL=prime-picker-select.component.css.map */\n"] }]
  }], null, { items: [{
    type: Input
  }], optionLabel: [{
    type: Input
  }], optionValue: [{
    type: Input
  }], optionSubLabel: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], searchPlaceholder: [{
    type: Input
  }], addNewLabel: [{
    type: Input
  }], emptyMessage: [{
    type: Input
  }], addNew: [{
    type: Output
  }], onChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrimePickerSelectComponent, { className: "PrimePickerSelectComponent", filePath: "src/app/components/shared/prime-picker-select/prime-picker-select.component.ts", lineNumber: 179 });
})();

export {
  PrimePickerSelectComponent
};
//# sourceMappingURL=chunk-XDDYZAH2.js.map
