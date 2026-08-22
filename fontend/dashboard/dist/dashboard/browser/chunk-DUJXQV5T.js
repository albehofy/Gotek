import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/blogs/portfolio-blogs.component.ts
function PortfolioBlogsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioBlogsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0642\u0627\u0644\u0627\u062A \u0628\u0639\u062F");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioBlogsComponent_div_15_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 61);
  }
  if (rf & 2) {
    const blog_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", blog_r3.media_path, \u0275\u0275sanitizeUrl)("alt", blog_r3.img_alt || "Blog Image");
  }
}
function PortfolioBlogsComponent_div_15_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
  }
}
function PortfolioBlogsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275template(2, PortfolioBlogsComponent_div_15_div_1_img_2_Template, 1, 2, "img", 45)(3, PortfolioBlogsComponent_div_15_div_1_i_3_Template, 1, 0, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 47)(5, "h3", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51)(12, "div", 52);
    \u0275\u0275element(13, "i", 53);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 54);
    \u0275\u0275element(17, "i", 55);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 56)(21, "button", 57);
    \u0275\u0275listener("click", function PortfolioBlogsComponent_div_15_div_1_Template_button_click_21_listener() {
      const blog_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDrawer(blog_r3));
    });
    \u0275\u0275element(22, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 59);
    \u0275\u0275listener("click", function PortfolioBlogsComponent_div_15_div_1_Template_button_click_23_listener() {
      const blog_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteBlog(blog_r3));
    });
    \u0275\u0275element(24, "i", 60);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const blog_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", blog_r3.media_path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !blog_r3.media_path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getBlogTitle(blog_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getBlogTitleEn(blog_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getBlogDesc(blog_r3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(blog_r3.created_at));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r3.loves_count || 0);
  }
}
function PortfolioBlogsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, PortfolioBlogsComponent_div_15_div_1_Template, 25, 7, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredBlogs);
  }
}
function PortfolioBlogsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function PortfolioBlogsComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioBlogsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.previewImage, \u0275\u0275sanitizeUrl);
  }
}
var PortfolioBlogsComponent = class _PortfolioBlogsComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  blogs = [];
  filteredBlogs = [];
  isLoading = false;
  isDrawerOpen = false;
  isEditMode = false;
  editingId = null;
  searchQuery = "";
  selectedFile = null;
  previewImage = null;
  formData = {
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    img_alt: ""
  };
  ngOnInit() {
    this.loadBlogs();
  }
  loadBlogs() {
    this.isLoading = true;
    this.apiService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data || res || [];
        this.filteredBlogs = [...this.blogs];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  filterBlogs() {
    if (!this.searchQuery) {
      this.filteredBlogs = [...this.blogs];
    } else {
      const q = this.searchQuery.toLowerCase();
      this.filteredBlogs = this.blogs.filter((b) => this.getBlogTitle(b).toLowerCase().includes(q) || this.getBlogTitleEn(b).toLowerCase().includes(q));
    }
  }
  openDrawer(blog) {
    this.selectedFile = null;
    if (blog) {
      this.isEditMode = true;
      this.editingId = blog.id;
      this.formData = {
        title_ar: blog.title?.ar || blog.title_ar || "",
        title_en: blog.title?.en || blog.title_en || "",
        description_ar: blog.description?.ar || blog.description_ar || "",
        description_en: blog.description?.en || blog.description_en || "",
        img_alt: blog.img_alt || ""
      };
      this.previewImage = blog.media_path || null;
    } else {
      this.isEditMode = false;
      this.editingId = null;
      this.formData = {
        title_ar: "",
        title_en: "",
        description_ar: "",
        description_en: "",
        img_alt: ""
      };
      this.previewImage = null;
    }
    this.isDrawerOpen = true;
  }
  closeDrawer() {
    this.isDrawerOpen = false;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.previewImage = reader.result;
      reader.readAsDataURL(file);
    }
  }
  saveBlog() {
    const fd = new FormData();
    fd.append("title_ar", this.formData.title_ar);
    fd.append("title_en", this.formData.title_en);
    fd.append("description_ar", this.formData.description_ar);
    fd.append("description_en", this.formData.description_en);
    fd.append("img_alt", this.formData.img_alt);
    if (this.selectedFile) {
      fd.append("media", this.selectedFile);
    }
    if (this.isEditMode && this.editingId) {
      this.apiService.updateBlog(String(this.editingId), fd).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadBlogs();
        }
      });
    } else {
      this.apiService.addBlog(fd).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadBlogs();
        }
      });
    }
  }
  deleteBlog(blog) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644\u0629",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0645\u0642\u0627\u0644\u0629\u061F",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteBlog(String(blog.id)).subscribe(() => this.loadBlogs());
      }
    });
  }
  getBlogTitle(b) {
    return b.title?.ar || b.title_ar || "";
  }
  getBlogTitleEn(b) {
    return b.title?.en || b.title_en || "";
  }
  getBlogDesc(b) {
    return b.description?.ar || b.description_ar || "";
  }
  formatDate(d) {
    return d ? new Date(d).toLocaleDateString("en-US") : "";
  }
  static \u0275fac = function PortfolioBlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioBlogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioBlogsComponent, selectors: [["app-portfolio-blogs"]], decls: 62, vars: 15, consts: [["blogForm", "ngForm"], ["fileInput", ""], [1, "page-container"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-newspaper"], [1, "header-actions"], [1, "search-box"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "\u0628\u062D\u062B...", 3, "ngModelChange", "input", "ngModel"], [1, "btn", "btn-primary", "add-btn", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "blogs-list", 4, "ngIf"], ["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "drawer"], [1, "drawer-header"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-times"], [1, "drawer-body"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "title_ar", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "title_en", "required", "", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["name", "description_ar", "rows", "6", "required", "", 3, "ngModelChange", "ngModel"], ["name", "description_en", "rows", "6", "required", "", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "img_alt", 3, "ngModelChange", "ngModel"], [1, "form-group", "upload-zone"], [1, "upload-area", 3, "click"], [1, "fa-solid", "fa-cloud-arrow-up"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "image-preview", 4, "ngIf"], [1, "drawer-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fa-solid", "fa-check"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open"], [1, "blogs-list"], ["class", "blog-row", 4, "ngFor", "ngForOf"], [1, "blog-row"], [1, "blog-thumb"], [3, "src", "alt", 4, "ngIf"], ["class", "fa-solid fa-newspaper placeholder-icon", 4, "ngIf"], [1, "blog-content"], [1, "blog-title-ar"], [1, "blog-title-en"], [1, "blog-desc"], [1, "blog-meta"], [1, "meta-item"], [1, "fa-solid", "fa-calendar"], [1, "meta-item", "loves"], [1, "fa-solid", "fa-heart"], [1, "blog-actions"], [1, "btn-action", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn-action", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [3, "src", "alt"], [1, "fa-solid", "fa-newspaper", "placeholder-icon"], [1, "drawer-overlay", 3, "click"], [1, "image-preview"], ["alt", "Preview", 3, "src"]], template: function PortfolioBlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275element(3, "i", 5);
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0645\u062F\u0648\u0646\u0629 | Blog & Articles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementStart(9, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function PortfolioBlogsComponent_Template_input_input_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterBlogs());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 10);
      \u0275\u0275listener("click", function PortfolioBlogsComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openDrawer());
      });
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275text(12, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, PortfolioBlogsComponent_div_13_Template, 4, 0, "div", 12)(14, PortfolioBlogsComponent_div_14_Template, 4, 0, "div", 13)(15, PortfolioBlogsComponent_div_15_Template, 2, 1, "div", 14)(16, PortfolioBlogsComponent_div_16_Template, 1, 0, "div", 15);
      \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "h3");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 18);
      \u0275\u0275listener("click", function PortfolioBlogsComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275element(22, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 20)(24, "form", 21, 0);
      \u0275\u0275listener("ngSubmit", function PortfolioBlogsComponent_Template_form_ngSubmit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveBlog());
      });
      \u0275\u0275elementStart(26, "div", 22)(27, "label");
      \u0275\u0275text(28, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.title_ar, $event) || (ctx.formData.title_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 22)(31, "label");
      \u0275\u0275text(32, "Blog Title in English *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.title_en, $event) || (ctx.formData.title_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 22)(35, "label");
      \u0275\u0275text(36, "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "textarea", 25);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_textarea_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.description_ar, $event) || (ctx.formData.description_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 22)(39, "label");
      \u0275\u0275text(40, "Blog Content in English *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "textarea", 26);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_textarea_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.description_en, $event) || (ctx.formData.description_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 22)(43, "label");
      \u0275\u0275text(44, "Alt Text (\u0646\u0635 \u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioBlogsComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.img_alt, $event) || (ctx.formData.img_alt = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 28)(47, "label");
      \u0275\u0275text(48, "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 29);
      \u0275\u0275listener("click", function PortfolioBlogsComponent_Template_div_click_49_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r6 = \u0275\u0275reference(54);
        return \u0275\u0275resetView(fileInput_r6.click());
      });
      \u0275\u0275element(50, "i", 30);
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "\u0627\u0646\u0642\u0631 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "input", 31, 1);
      \u0275\u0275listener("change", function PortfolioBlogsComponent_Template_input_change_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, PortfolioBlogsComponent_div_55_Template, 2, 1, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 33)(57, "button", 34);
      \u0275\u0275listener("click", function PortfolioBlogsComponent_Template_button_click_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275text(58, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 35);
      \u0275\u0275listener("click", function PortfolioBlogsComponent_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveBlog());
      });
      \u0275\u0275element(60, "i", 36);
      \u0275\u0275text(61, " \u062D\u0641\u0638 ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const blogForm_r7 = \u0275\u0275reference(25);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBlogs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBlogs.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDrawerOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isDrawerOpen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629 \u062C\u062F\u064A\u062F\u0629");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title_en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description_en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.img_alt);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.previewImage);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !blogForm_r7.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-2, #6b7280);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 36px;\n  width: 250px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.blogs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.blog-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--bg-card, #ffffff);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding: 16px;\n  border-radius: 12px;\n  gap: 20px;\n  transition: background 0.2s;\n}\n.blog-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg, #f9fafb);\n}\n.blog-thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--bg-sidebar, #f3f4f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.blog-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--text-2, #6b7280);\n  opacity: 0.5;\n}\n.blog-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.blog-title-ar[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text, #1f2937);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-title-en[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: var(--text-2, #6b7280);\n  font-family: "Inter", sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 120px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--text-2, #6b7280);\n}\n.meta-item.loves[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--red, #ef4444);\n}\n.blog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: var(--bg-sidebar, #f3f4f6);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-2, #6b7280);\n  transition: all 0.2s;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: -560px;\n  width: 560px;\n  max-width: 100%;\n  background: var(--bg-card, #ffffff);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n}\n.drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border, #e5e7eb);\n}\n.drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: var(--text, #1f2937);\n  font-size: 0.9rem;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr][_ngcontent-%COMP%], \ntextarea[dir=ltr][_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border, #e5e7eb);\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  background: var(--bg, #f9fafb);\n  transition: all 0.2s;\n}\n.upload-area[_ngcontent-%COMP%]:hover {\n  border-color: var(--violet, #6366f1);\n  background: var(--violet-light, #e0e7ff);\n}\n.upload-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--violet, #6366f1);\n  margin-bottom: 12px;\n}\n.upload-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-2, #6b7280);\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 12px;\n  overflow: hidden;\n  max-width: 100%;\n  height: 200px;\n  border: 1px solid var(--border, #e5e7eb);\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=portfolio-blogs.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioBlogsComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-blogs", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-newspaper"></i>
      <h2>\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0645\u062F\u0648\u0646\u0629 | Blog & Articles</h2>
    </div>
    
    <div class="header-actions">
      <div class="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="\u0628\u062D\u062B..." [(ngModel)]="searchQuery" (input)="filterBlogs()">
      </div>
      <button class="btn btn-primary add-btn" (click)="openDrawer()">
        <i class="fa-solid fa-plus"></i>
        \u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629
      </button>
    </div>
  </div>

  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <div class="empty-state" *ngIf="!isLoading && filteredBlogs.length === 0">
    <i class="fa-regular fa-folder-open"></i>
    <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0642\u0627\u0644\u0627\u062A \u0628\u0639\u062F</p>
  </div>

  <div class="blogs-list" *ngIf="!isLoading && filteredBlogs.length > 0">
    <div class="blog-row" *ngFor="let blog of filteredBlogs">
      <div class="blog-thumb">
        <img *ngIf="blog.media_path" [src]="blog.media_path" [alt]="blog.img_alt || 'Blog Image'">
        <i *ngIf="!blog.media_path" class="fa-solid fa-newspaper placeholder-icon"></i>
      </div>
      
      <div class="blog-content">
        <h3 class="blog-title-ar">{{ getBlogTitle(blog) }}</h3>
        <h4 class="blog-title-en">{{ getBlogTitleEn(blog) }}</h4>
        <p class="blog-desc">{{ getBlogDesc(blog) }}</p>
      </div>

      <div class="blog-meta">
        <div class="meta-item">
          <i class="fa-solid fa-calendar"></i>
          <span>{{ formatDate(blog.created_at) }}</span>
        </div>
        <div class="meta-item loves">
          <i class="fa-solid fa-heart"></i>
          <span>{{ blog.loves_count || 0 }}</span>
        </div>
      </div>

      <div class="blog-actions">
        <button class="btn-action edit" (click)="openDrawer(blog)">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-action delete" (click)="deleteBlog(blog)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Drawer -->
  <div class="drawer-overlay" *ngIf="isDrawerOpen" (click)="closeDrawer()"></div>
  <div class="drawer" [class.open]="isDrawerOpen">
    <div class="drawer-header">
      <h3>{{ isEditMode ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629' : '\u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629 \u062C\u062F\u064A\u062F\u0629' }}</h3>
      <button class="close-btn" (click)="closeDrawer()">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
    
    <div class="drawer-body">
      <form (ngSubmit)="saveBlog()" #blogForm="ngForm">
        
        <div class="form-group">
          <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <input type="text" name="title_ar" [(ngModel)]="formData.title_ar" required>
        </div>

        <div class="form-group">
          <label>Blog Title in English *</label>
          <input type="text" name="title_en" [(ngModel)]="formData.title_en" required dir="ltr">
        </div>

        <div class="form-group">
          <label>\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <textarea name="description_ar" [(ngModel)]="formData.description_ar" rows="6" required></textarea>
        </div>

        <div class="form-group">
          <label>Blog Content in English *</label>
          <textarea name="description_en" [(ngModel)]="formData.description_en" rows="6" required dir="ltr"></textarea>
        </div>

        <div class="form-group">
          <label>Alt Text (\u0646\u0635 \u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629)</label>
          <input type="text" name="img_alt" [(ngModel)]="formData.img_alt">
        </div>

        <div class="form-group upload-zone">
          <label>\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629</label>
          <div class="upload-area" (click)="fileInput.click()">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <p>\u0627\u0646\u0642\u0631 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629</p>
            <input type="file" #fileInput (change)="onFileSelected($event)" accept="image/*" hidden>
          </div>
          <div class="image-preview" *ngIf="previewImage">
            <img [src]="previewImage" alt="Preview">
          </div>
        </div>

      </form>
    </div>

    <div class="drawer-footer">
      <button class="btn btn-secondary" (click)="closeDrawer()">\u0625\u0644\u063A\u0627\u0621</button>
      <button class="btn btn-primary" (click)="saveBlog()" [disabled]="!blogForm.valid">
        <i class="fa-solid fa-check"></i> \u062D\u0641\u0638
      </button>
    </div>
  </div>
</div>
`, styles: ['/* src/app/components/portfolio/blogs/portfolio-blogs.component.css */\n:host {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container {\n  padding: 24px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.header-actions {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.search-box {\n  position: relative;\n}\n.search-box i {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-2, #6b7280);\n}\n.search-box input {\n  padding-right: 36px;\n  width: 250px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary:hover {\n  opacity: 0.9;\n}\n.btn-secondary {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state i,\n.empty-state i {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.blogs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.blog-row {\n  display: flex;\n  align-items: center;\n  background: var(--bg-card, #ffffff);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding: 16px;\n  border-radius: 12px;\n  gap: 20px;\n  transition: background 0.2s;\n}\n.blog-row:hover {\n  background: var(--bg, #f9fafb);\n}\n.blog-thumb {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--bg-sidebar, #f3f4f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.blog-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.placeholder-icon {\n  font-size: 2rem;\n  color: var(--text-2, #6b7280);\n  opacity: 0.5;\n}\n.blog-content {\n  flex: 1;\n  min-width: 0;\n}\n.blog-title-ar {\n  margin: 0 0 4px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text, #1f2937);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-title-en {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: var(--text-2, #6b7280);\n  font-family: "Inter", sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-desc {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 120px;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--text-2, #6b7280);\n}\n.meta-item.loves i {\n  color: var(--red, #ef4444);\n}\n.blog-actions {\n  display: flex;\n  gap: 12px;\n}\n.btn-action {\n  background: var(--bg-sidebar, #f3f4f6);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-2, #6b7280);\n  transition: all 0.2s;\n}\n.btn-action.edit:hover {\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n}\n.btn-action.delete:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.drawer {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: -560px;\n  width: 560px;\n  max-width: 100%;\n  background: var(--bg-card, #ffffff);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n}\n.drawer.open {\n  right: 0;\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border, #e5e7eb);\n}\n.drawer-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.drawer-footer {\n  padding: 20px 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: var(--text, #1f2937);\n  font-size: 0.9rem;\n}\ninput,\ntextarea {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr],\ntextarea[dir=ltr] {\n  font-family: "Inter", sans-serif;\n}\n.upload-area {\n  border: 2px dashed var(--border, #e5e7eb);\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  background: var(--bg, #f9fafb);\n  transition: all 0.2s;\n}\n.upload-area:hover {\n  border-color: var(--violet, #6366f1);\n  background: var(--violet-light, #e0e7ff);\n}\n.upload-area i {\n  font-size: 2.5rem;\n  color: var(--violet, #6366f1);\n  margin-bottom: 12px;\n}\n.upload-area p {\n  margin: 0;\n  color: var(--text-2, #6b7280);\n}\n.image-preview {\n  margin-top: 16px;\n  border-radius: 12px;\n  overflow: hidden;\n  max-width: 100%;\n  height: 200px;\n  border: 1px solid var(--border, #e5e7eb);\n}\n.image-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=portfolio-blogs.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioBlogsComponent, { className: "PortfolioBlogsComponent", filePath: "src/app/components/portfolio/blogs/portfolio-blogs.component.ts", lineNumber: 14 });
})();
export {
  PortfolioBlogsComponent
};
//# sourceMappingURL=chunk-DUJXQV5T.js.map
