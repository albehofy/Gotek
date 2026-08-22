import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-KWEQLBRN.js";
import {
  CommonModule,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  NgStyle,
  Output,
  forwardRef,
  inject,
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
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

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
    \u0275\u0275elementStart(0, "i", 17);
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
    \u0275\u0275elementStart(0, "small", 20);
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
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_li_6_Template_li_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectItem(item_r5));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PrimePickerSelectComponent_div_5_li_6_small_3_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.isItemSelected(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getItemLabel(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getItemSubLabel(item_r5));
  }
}
function PrimePickerSelectComponent_div_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessage, " ");
  }
}
function PrimePickerSelectComponent_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_div_8_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.triggerAddNew($event));
    });
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.addNewLabel, " ");
  }
}
function PrimePickerSelectComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function PrimePickerSelectComponent_div_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 9);
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
    \u0275\u0275template(8, PrimePickerSelectComponent_div_5_div_8_Template, 4, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.panelStyle);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQuery);
    \u0275\u0275property("placeholder", ctx_r0.searchPlaceholder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredItems());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.addNew.observed);
  }
}
var PrimePickerSelectComponent = class _PrimePickerSelectComponent {
  elementRef = inject(ElementRef);
  document = inject(DOCUMENT);
  portalPanelEl = null;
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
  panelStyle = {};
  onChangeFn = () => {
  };
  onTouchedFn = () => {
  };
  justOpened = false;
  onDocumentClick(event) {
    if (this.isOpen && !this.justOpened) {
      const target = event.target;
      const triggerEl = this.elementRef.nativeElement.querySelector(".picker-trigger");
      const isInsideTrigger = triggerEl && triggerEl.contains(target);
      const isInsidePanel = this.portalPanelEl && this.portalPanelEl.contains(target);
      if (!isInsideTrigger && !isInsidePanel) {
        this.closeDropdown();
      }
    }
  }
  onWindowChange() {
    if (this.isOpen) {
      this.updatePanelPosition();
    }
  }
  toggleDropdown(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }
  openDropdown() {
    this.isOpen = true;
    this.justOpened = true;
    this.onTouchedFn();
    setTimeout(() => {
      const panel = this.elementRef.nativeElement.querySelector(".picker-dropdown-panel");
      if (panel) {
        this.portalPanelEl = panel;
        this.document.body.appendChild(panel);
        this.updatePanelPosition();
      }
      this.justOpened = false;
    }, 50);
  }
  closeDropdown() {
    this.isOpen = false;
    this.removePanelFromBody();
  }
  removePanelFromBody() {
    if (this.portalPanelEl && this.portalPanelEl.parentNode) {
      this.portalPanelEl.parentNode.removeChild(this.portalPanelEl);
      this.portalPanelEl = null;
    }
  }
  ngOnDestroy() {
    this.removePanelFromBody();
  }
  updatePanelPosition() {
    if (!this.isOpen)
      return;
    const triggerEl = this.elementRef.nativeElement.querySelector(".picker-trigger");
    if (!triggerEl)
      return;
    const rect = triggerEl.getBoundingClientRect();
    const panelEl = this.portalPanelEl || this.elementRef.nativeElement.querySelector(".picker-dropdown-panel");
    let actualHeight = 180;
    if (panelEl && panelEl.offsetHeight > 0) {
      actualHeight = panelEl.offsetHeight;
    } else {
      const itemsCount = this.filteredItems().length;
      actualHeight = Math.min(260, itemsCount * 40 + 55);
    }
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    let top = rect.bottom + 4;
    if (spaceBelow < actualHeight && spaceAbove > spaceBelow) {
      top = Math.max(10, rect.top - actualHeight - 4);
    }
    this.panelStyle = {
      position: "fixed",
      top: `${top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      "z-index": "99999999"
    };
    if (this.portalPanelEl) {
      Object.assign(this.portalPanelEl.style, this.panelStyle);
    }
  }
  selectItem(item) {
    this.value = this.getItemValue(item);
    this.onChangeFn(this.value);
    this.onChange.emit(this.value);
    this.closeDropdown();
  }
  triggerAddNew(event) {
    event.stopPropagation();
    this.closeDropdown();
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
  get selectedItem() {
    if (this.value === null || this.value === void 0 || this.value === "")
      return null;
    return (this.items || []).find((i) => String(this.getItemValue(i)) === String(this.value));
  }
  isItemSelected(item) {
    if (this.value === null || this.value === void 0 || this.value === "")
      return false;
    return String(this.getItemValue(item)) === String(this.value);
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
  static \u0275fac = function PrimePickerSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimePickerSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrimePickerSelectComponent, selectors: [["app-prime-picker-select"]], hostBindings: function PrimePickerSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PrimePickerSelectComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument)("scroll", function PrimePickerSelectComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowChange($event);
      }, false, \u0275\u0275resolveWindow)("resize", function PrimePickerSelectComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowChange($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, inputs: { items: "items", optionLabel: "optionLabel", optionValue: "optionValue", optionSubLabel: "optionSubLabel", placeholder: "placeholder", searchPlaceholder: "searchPlaceholder", addNewLabel: "addNewLabel", emptyMessage: "emptyMessage" }, outputs: { addNew: "addNew", onChange: "onChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _PrimePickerSelectComponent),
      multi: true
    }
  ])], decls: 6, vars: 5, consts: [[1, "prime-picker-wrapper"], [1, "picker-trigger", 3, "click"], ["class", "selected-label", 4, "ngIf"], ["class", "placeholder-text", 4, "ngIf"], [1, "pi", "pi-chevron-down", "toggle-icon"], ["class", "picker-dropdown-panel", 3, "ngStyle", "click", 4, "ngIf"], [1, "selected-label"], [1, "placeholder-text"], [1, "picker-dropdown-panel", 3, "click", "ngStyle"], [1, "picker-search-box"], [1, "pi", "pi-search", "search-icon"], ["type", "text", 3, "ngModelChange", "click", "ngModel", "placeholder"], ["class", "pi pi-times clear-icon", 3, "click", 4, "ngIf"], [1, "picker-options-list"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], ["class", "picker-footer-action", 4, "ngIf"], [1, "pi", "pi-times", "clear-icon", 3, "click"], [3, "click"], ["class", "item-sublabel", 4, "ngIf"], [1, "item-sublabel"], [1, "no-results"], [1, "picker-footer-action"], ["type", "button", 1, "btn-inline-add", 3, "click"], [1, "pi", "pi-plus"]], template: function PrimePickerSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function PrimePickerSelectComponent_Template_div_click_1_listener($event) {
        return ctx.toggleDropdown($event);
      });
      \u0275\u0275template(2, PrimePickerSelectComponent_span_2_Template, 2, 1, "span", 2)(3, PrimePickerSelectComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, PrimePickerSelectComponent_div_5_Template, 9, 7, "div", 5);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.prime-picker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.picker-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.2));\n  border-radius: 12px;\n  color: var(--text, #ffffff);\n  font-size: 0.9rem;\n  cursor: pointer;\n  min-height: 44px;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n}\n.picker-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--violet, #6366f1);\n  background: rgba(99, 102, 241, 0.08);\n}\nbody.light-theme[_nghost-%COMP%]   .picker-trigger[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-trigger[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .picker-trigger[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .picker-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1 !important;\n  background: rgba(99, 102, 241, 0.04) !important;\n}\n.placeholder-text[_ngcontent-%COMP%] {\n  color: var(--text-2, #94a3b8);\n}\nbody.light-theme[_nghost-%COMP%]   .placeholder-text[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .placeholder-text[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--violet-light, #818cf8);\n  transition: transform 0.2s;\n}\nbody.light-theme[_nghost-%COMP%]   .toggle-icon[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  color: #6366f1 !important;\n}\n.open[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.picker-dropdown-panel[_ngcontent-%COMP%] {\n  position: fixed !important;\n  z-index: 99999999 !important;\n  background: #111228;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  border-radius: 14px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 320px;\n  box-sizing: border-box;\n}\nbody.light-theme[_nghost-%COMP%]   .picker-dropdown-panel[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2) !important;\n}\n.picker-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\nbody.light-theme[_nghost-%COMP%]   .picker-search-box[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-search-box[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n.picker-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: var(--text, #ffffff);\n  font-size: 0.88rem;\n  font-family: inherit;\n}\nbody.light-theme[_nghost-%COMP%]   .picker-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\n.search-icon[_ngcontent-%COMP%], \n.clear-icon[_ngcontent-%COMP%] {\n  color: var(--text-2, #94a3b8);\n  font-size: 0.85rem;\n}\nbody.light-theme[_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%], \nbody.light-theme[_nghost-%COMP%]   .clear-icon[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .clear-icon[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.picker-options-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 6px 0;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 0.88rem;\n  color: var(--text, #e2e8f0);\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s;\n}\nbody.light-theme[_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n}\n.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light, #818cf8);\n}\nbody.light-theme[_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08) !important;\n  color: #4f46e5 !important;\n}\n.picker-options-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1);\n  color: #ffffff !important;\n  font-weight: 700;\n}\nbody.light-theme[_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-options-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n}\n.item-sublabel[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.no-results[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--text-2, #94a3b8);\n  font-style: italic;\n  font-size: 0.84rem;\n}\n.picker-footer-action[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.15);\n}\nbody.light-theme[_nghost-%COMP%]   .picker-footer-action[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .picker-footer-action[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-top-color: rgba(99, 102, 241, 0.12) !important;\n}\n.btn-inline-add[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px dashed rgba(99, 102, 241, 0.4);\n  border-radius: 10px;\n  color: var(--violet-light, #818cf8);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-inline-add[_ngcontent-%COMP%]:hover {\n  background: var(--violet, #6366f1);\n  color: #ffffff !important;\n  border-style: solid;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-inline-add[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-inline-add[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08) !important;\n  color: #4f46e5 !important;\n  border-color: rgba(99, 102, 241, 0.4) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-inline-add[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-inline-add[_ngcontent-%COMP%]:hover {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=prime-picker-select.component.css.map */"] });
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
      <div class="picker-trigger" (click)="toggleDropdown($event)">
        <span class="selected-label" *ngIf="selectedItem">{{ getItemLabel(selectedItem) }}</span>
        <span class="placeholder-text" *ngIf="!selectedItem">{{ placeholder }}</span>
        <i class="pi pi-chevron-down toggle-icon"></i>
      </div>

      <div class="picker-dropdown-panel" *ngIf="isOpen" [ngStyle]="panelStyle" (click)="$event.stopPropagation()">
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
            [class.active]="isItemSelected(item)"
            (click)="selectItem(item)"
          >
            <span>{{ getItemLabel(item) }}</span>
            <small *ngIf="getItemSubLabel(item)" class="item-sublabel">{{ getItemSubLabel(item) }}</small>
          </li>
          <li *ngIf="filteredItems().length === 0" class="no-results">
            {{ emptyMessage }}
          </li>
        </ul>

        <!-- Inline "+ Add New" Shortcut Button (Shown only when listener attached) -->
        <div class="picker-footer-action" *ngIf="addNew.observed">
          <button type="button" class="btn-inline-add" (click)="triggerAddNew($event)">
            <i class="pi pi-plus"></i> {{ addNewLabel }}
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;903ddb6111fb76d18254db6dbe76490beadadebaefed3ee0147fab791f1d410f;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/shared/prime-picker-select/prime-picker-select.component.ts */\n.prime-picker-wrapper {\n  position: relative;\n  width: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.picker-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.2));\n  border-radius: 12px;\n  color: var(--text, #ffffff);\n  font-size: 0.9rem;\n  cursor: pointer;\n  min-height: 44px;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n}\n.picker-trigger:hover {\n  border-color: var(--violet, #6366f1);\n  background: rgba(99, 102, 241, 0.08);\n}\n:host-context(body.light-theme) .picker-trigger {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .picker-trigger:hover {\n  border-color: #6366f1 !important;\n  background: rgba(99, 102, 241, 0.04) !important;\n}\n.placeholder-text {\n  color: var(--text-2, #94a3b8);\n}\n:host-context(body.light-theme) .placeholder-text {\n  color: #64748b !important;\n}\n.toggle-icon {\n  font-size: 0.8rem;\n  color: var(--violet-light, #818cf8);\n  transition: transform 0.2s;\n}\n:host-context(body.light-theme) .toggle-icon {\n  color: #6366f1 !important;\n}\n.open .toggle-icon {\n  transform: rotate(180deg);\n}\n.picker-dropdown-panel {\n  position: fixed !important;\n  z-index: 99999999 !important;\n  background: #111228;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  border-radius: 14px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 320px;\n  box-sizing: border-box;\n}\n:host-context(body.light-theme) .picker-dropdown-panel {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2) !important;\n}\n.picker-search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\n:host-context(body.light-theme) .picker-search-box {\n  background: #f8fafc !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n.picker-search-box input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: var(--text, #ffffff);\n  font-size: 0.88rem;\n  font-family: inherit;\n}\n:host-context(body.light-theme) .picker-search-box input {\n  color: #0f172a !important;\n}\n.search-icon,\n.clear-icon {\n  color: var(--text-2, #94a3b8);\n  font-size: 0.85rem;\n}\n:host-context(body.light-theme) .search-icon,\n:host-context(body.light-theme) .clear-icon {\n  color: #64748b !important;\n}\n.picker-options-list {\n  list-style: none;\n  margin: 0;\n  padding: 6px 0;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.picker-options-list li {\n  padding: 10px 16px;\n  font-size: 0.88rem;\n  color: var(--text, #e2e8f0);\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s;\n}\n:host-context(body.light-theme) .picker-options-list li {\n  color: #1e293b !important;\n}\n.picker-options-list li:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light, #818cf8);\n}\n:host-context(body.light-theme) .picker-options-list li:hover {\n  background: rgba(99, 102, 241, 0.08) !important;\n  color: #4f46e5 !important;\n}\n.picker-options-list li.active {\n  background: var(--violet, #6366f1);\n  color: #ffffff !important;\n  font-weight: 700;\n}\n:host-context(body.light-theme) .picker-options-list li.active {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n}\n.item-sublabel {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.no-results {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--text-2, #94a3b8);\n  font-style: italic;\n  font-size: 0.84rem;\n}\n.picker-footer-action {\n  padding: 8px 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(0, 0, 0, 0.15);\n}\n:host-context(body.light-theme) .picker-footer-action {\n  background: #f8fafc !important;\n  border-top-color: rgba(99, 102, 241, 0.12) !important;\n}\n.btn-inline-add {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px dashed rgba(99, 102, 241, 0.4);\n  border-radius: 10px;\n  color: var(--violet-light, #818cf8);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-inline-add:hover {\n  background: var(--violet, #6366f1);\n  color: #ffffff !important;\n  border-style: solid;\n}\n:host-context(body.light-theme) .btn-inline-add {\n  background: rgba(99, 102, 241, 0.08) !important;\n  color: #4f46e5 !important;\n  border-color: rgba(99, 102, 241, 0.4) !important;\n}\n:host-context(body.light-theme) .btn-inline-add:hover {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=prime-picker-select.component.css.map */\n"] }]
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
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }, {
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrimePickerSelectComponent, { className: "PrimePickerSelectComponent", filePath: "src/app/components/shared/prime-picker-select/prime-picker-select.component.ts", lineNumber: 254 });
})();

export {
  PrimePickerSelectComponent
};
//# sourceMappingURL=chunk-PFLXRYTA.js.map
