import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-JBOK22UG.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/projects/portfolio-projects.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/portfolio/projects", a0];
function PortfolioProjectsComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (cat_r2.name == null ? null : cat_r2.name.ar) || cat_r2.name_ar || cat_r2.name, " ");
  }
}
function PortfolioProjectsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function PortfolioProjectsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, PortfolioProjectsComponent_div_15_div_1_Template, 1, 0, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function PortfolioProjectsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No projects yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAddDrawer());
    });
    \u0275\u0275element(7, "i", 14);
    \u0275\u0275text(8, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 ");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioProjectsComponent_div_17_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getCategoryName(p_r6));
  }
}
function PortfolioProjectsComponent_div_17_div_1_i_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 89);
  }
}
function PortfolioProjectsComponent_div_17_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r6.client);
  }
}
function PortfolioProjectsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275element(2, "img", 73);
    \u0275\u0275elementStart(3, "div", 74)(4, "a", 75);
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 77);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_17_div_1_Template_button_click_6_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditDrawer(p_r6));
    });
    \u0275\u0275element(7, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 79);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_17_div_1_Template_button_click_8_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteProject(p_r6.id));
    });
    \u0275\u0275element(9, "i", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 81)(11, "div", 82);
    \u0275\u0275template(12, PortfolioProjectsComponent_div_17_div_1_span_12_Template, 2, 1, "span", 83)(13, PortfolioProjectsComponent_div_17_div_1_i_13_Template, 1, 0, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 85);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h4", 86);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PortfolioProjectsComponent_div_17_div_1_div_18_Template, 4, 1, "div", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r6.image || "assets/placeholder.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, p_r6.id));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.getCategoryName(p_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6.ViewInHome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getProjectTitle(p_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getProjectTitleEn(p_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6.client);
  }
}
function PortfolioProjectsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, PortfolioProjectsComponent_div_17_div_1_Template, 19, 9, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredProjects);
  }
}
function PortfolioProjectsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioProjectsComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    \u0275\u0275property("value", cat_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (cat_r8.name == null ? null : cat_r8.name.ar) || cat_r8.name_ar || cat_r8.name, " ");
  }
}
function PortfolioProjectsComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.projectImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function PortfolioProjectsComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "img", 96);
    \u0275\u0275elementStart(2, "button", 97);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_99_Template_button_click_2_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeGalleryItem(i_r12, true));
    });
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", url_r13, \u0275\u0275sanitizeUrl);
  }
}
function PortfolioProjectsComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "img", 96);
    \u0275\u0275elementStart(2, "button", 97);
    \u0275\u0275listener("click", function PortfolioProjectsComponent_div_100_Template_button_click_2_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeGalleryItem(i_r15, false));
    });
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prev_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", prev_r16, \u0275\u0275sanitizeUrl);
  }
}
var PortfolioProjectsComponent = class _PortfolioProjectsComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  fb = inject(FormBuilder);
  projects = [];
  categories = [];
  filteredProjects = [];
  searchQuery = "";
  selectedCategoryFilter = "";
  loading = false;
  showDrawer = false;
  isEditing = false;
  currentId = null;
  savingProject = false;
  projectForm;
  projectImageFile = null;
  projectImagePreview = null;
  galleryFiles = [];
  galleryPreviews = [];
  existingGallery = [];
  constructor() {
    this.projectForm = this.fb.group({
      title_ar: ["", Validators.required],
      title_en: ["", Validators.required],
      description_ar: [""],
      description_en: [""],
      category_id: ["", Validators.required],
      color: ["#6366f1"],
      emoji: [""],
      client: [""],
      timeline: [""],
      ViewInHome: [false],
      challenge_ar: [""],
      challenge_en: [""],
      solution_ar: [""],
      solution_en: [""],
      results_str: [""],
      deliverables_str: [""],
      tags_str: [""],
      testimonial_text: [""],
      testimonial_name: [""],
      testimonial_role: [""]
    });
  }
  ngOnInit() {
    this.loadCategories();
    this.loadProjects();
  }
  loadCategories() {
    this.apiService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data || res || [];
      },
      error: (err) => console.error("Error loading categories", err)
    });
  }
  loadProjects() {
    this.loading = true;
    this.apiService.getProjects().subscribe({
      next: (res) => {
        this.projects = res.data || res || [];
        this.filterProjects();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading projects", err);
        this.loading = false;
      }
    });
  }
  filterProjects() {
    this.filteredProjects = this.projects.filter((p) => {
      const titleSearch = this.getProjectTitle(p) + " " + this.getProjectTitleEn(p) + " " + this.getProjectDescription(p);
      const matchesSearch = this.searchQuery ? titleSearch.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesCategory = this.selectedCategoryFilter ? p.category_id == this.selectedCategoryFilter || p.category?.id == this.selectedCategoryFilter : true;
      return matchesSearch && matchesCategory;
    });
  }
  openAddDrawer() {
    this.isEditing = false;
    this.currentId = null;
    this.projectForm.reset({
      color: "#6366f1",
      ViewInHome: false
    });
    this.resetFiles();
    this.showDrawer = true;
  }
  openEditDrawer(p) {
    this.isEditing = true;
    this.currentId = p.id;
    this.resetFiles();
    let results_str = "";
    if (p.results && Array.isArray(p.results))
      results_str = p.results.join(", ");
    else if (typeof p.results === "string")
      results_str = p.results;
    else if (p.results) {
      try {
        results_str = JSON.parse(p.results).join(", ");
      } catch (e) {
      }
    }
    let deliverables_str = "";
    if (p.deliverables && Array.isArray(p.deliverables))
      deliverables_str = p.deliverables.join(", ");
    else if (typeof p.deliverables === "string")
      deliverables_str = p.deliverables;
    else if (p.deliverables) {
      try {
        deliverables_str = JSON.parse(p.deliverables).join(", ");
      } catch (e) {
      }
    }
    let tags_str = "";
    if (p.tags && Array.isArray(p.tags))
      tags_str = p.tags.join(", ");
    else if (typeof p.tags === "string")
      tags_str = p.tags;
    else if (p.tags) {
      try {
        tags_str = JSON.parse(p.tags).join(", ");
      } catch (e) {
      }
    }
    this.projectForm.patchValue({
      title_ar: p.title?.ar || p.title_ar || p.title || "",
      title_en: p.title?.en || p.title_en || "",
      description_ar: p.description?.ar || p.description_ar || p.description || "",
      description_en: p.description?.en || p.description_en || "",
      category_id: p.category_id || p.category?.id || "",
      color: p.color || "#6366f1",
      emoji: p.emoji || "",
      client: p.client || "",
      timeline: p.timeline || "",
      ViewInHome: !!p.ViewInHome,
      challenge_ar: p.challenge?.ar || p.challenge_ar || "",
      challenge_en: p.challenge?.en || p.challenge_en || "",
      solution_ar: p.solution?.ar || p.solution_ar || "",
      solution_en: p.solution?.en || p.solution_en || "",
      results_str,
      deliverables_str,
      tags_str,
      testimonial_text: p.testimonial?.text || p.testimonial_text || "",
      testimonial_name: p.testimonial?.name || p.testimonial_name || "",
      testimonial_role: p.testimonial?.role || p.testimonial_role || ""
    });
    if (p.image) {
      this.projectImagePreview = p.image;
    }
    this.existingGallery = [];
    if (p.gallery && Array.isArray(p.gallery)) {
      this.existingGallery = [...p.gallery];
    }
    this.showDrawer = true;
  }
  closeDrawer() {
    this.showDrawer = false;
    this.resetFiles();
  }
  resetFiles() {
    this.projectImageFile = null;
    this.projectImagePreview = null;
    this.galleryFiles = [];
    this.galleryPreviews = [];
    this.existingGallery = [];
  }
  onMainImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.projectImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.projectImagePreview = e.target.result;
      reader.readAsDataURL(file);
    }
  }
  onGalleryChange(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.galleryFiles.push(file);
        const reader = new FileReader();
        reader.onload = (e) => this.galleryPreviews.push(e.target.result);
        reader.readAsDataURL(file);
      }
    }
  }
  removeGalleryItem(index, isExisting = false) {
    if (isExisting) {
      this.existingGallery.splice(index, 1);
    } else {
      this.galleryFiles.splice(index, 1);
      this.galleryPreviews.splice(index, 1);
    }
  }
  saveProject() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    this.savingProject = true;
    const v = this.projectForm.value;
    const formData = new FormData();
    formData.append("title_ar", v.title_ar);
    formData.append("title_en", v.title_en);
    formData.append("description_ar", v.description_ar);
    formData.append("description_en", v.description_en);
    formData.append("category_id", v.category_id);
    formData.append("color", v.color);
    formData.append("emoji", v.emoji);
    formData.append("client", v.client);
    formData.append("timeline", v.timeline);
    formData.append("ViewInHome", v.ViewInHome ? "1" : "0");
    formData.append("challenge_ar", v.challenge_ar);
    formData.append("challenge_en", v.challenge_en);
    formData.append("solution_ar", v.solution_ar);
    formData.append("solution_en", v.solution_en);
    const results = v.results_str ? v.results_str.split(",").map((s) => s.trim()).filter((s) => s) : [];
    formData.append("results", JSON.stringify(results));
    const deliverables = v.deliverables_str ? v.deliverables_str.split(",").map((s) => s.trim()).filter((s) => s) : [];
    formData.append("deliverables", JSON.stringify(deliverables));
    const tags = v.tags_str ? v.tags_str.split(",").map((s) => s.trim()).filter((s) => s) : [];
    formData.append("tags", JSON.stringify(tags));
    formData.append("testimonial_text", v.testimonial_text);
    formData.append("testimonial_name", v.testimonial_name);
    formData.append("testimonial_role", v.testimonial_role);
    if (this.projectImageFile) {
      formData.append("main_image", this.projectImageFile);
    }
    if (this.galleryFiles.length > 0) {
      this.galleryFiles.forEach((file) => {
        formData.append("gallery[]", file);
      });
    }
    if (this.isEditing) {
      formData.append("existing_gallery", JSON.stringify(this.existingGallery));
    }
    if (this.isEditing && this.currentId) {
      this.apiService.updateProject(this.currentId, formData).subscribe({
        next: () => {
          this.savingProject = false;
          this.closeDrawer();
          this.loadProjects();
        },
        error: (err) => {
          console.error(err);
          this.savingProject = false;
        }
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.savingProject = false;
          this.closeDrawer();
          this.loadProjects();
        },
        error: (err) => {
          console.error(err);
          this.savingProject = false;
        }
      });
    }
  }
  deleteProject(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F \u0633\u064A\u062A\u0645 \u062D\u0630\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647.",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteProject(id).subscribe({
          next: () => this.loadProjects(),
          error: (err) => console.error(err)
        });
      }
    });
  }
  getProjectTitle(p) {
    return p.title?.ar || p.title_ar || p.title || "";
  }
  getProjectTitleEn(p) {
    return p.title?.en || p.title_en || "";
  }
  getProjectDescription(p) {
    return p.description?.ar || p.description_ar || p.description || "";
  }
  getCategoryName(p) {
    return p.category?.name_ar || p.category?.name?.ar || p.category?.name || "";
  }
  static \u0275fac = function PortfolioProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioProjectsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioProjectsComponent, selectors: [["app-portfolio-projects"]], decls: 154, vars: 17, consts: [["mainImageInput", ""], ["galleryInput", ""], [1, "projects-container"], [1, "top-bar"], [1, "search-wrap"], [1, "fa-solid", "fa-magnifying-glass", "search-icon"], ["type", "text", "placeholder", "\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639... / Search...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filters"], [1, "category-filter"], [1, "fa-solid", "fa-filter"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn-add", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "project-grid", 4, "ngIf"], ["class", "drawer-backdrop", 3, "click", 4, "ngIf"], [1, "side-drawer"], [1, "drawer-header"], [1, "btn-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "drawer-body"], [3, "ngSubmit", "formGroup"], [1, "form-group-section"], [1, "form-field"], ["type", "text", "formControlName", "title_ar", "required", ""], ["type", "text", "formControlName", "title_en", "required", ""], ["formControlName", "category_id", "required", ""], ["value", "", "disabled", ""], [1, "row"], [1, "form-field", "col"], ["type", "color", "formControlName", "color"], ["type", "text", "formControlName", "emoji"], ["type", "text", "formControlName", "client"], ["type", "text", "formControlName", "timeline"], [1, "form-field", "toggle-field"], ["type", "checkbox", "formControlName", "ViewInHome"], ["formControlName", "description_ar", "rows", "3"], ["formControlName", "description_en", "rows", "3"], [1, "image-drop-zone", 3, "click"], [1, "fa-solid", "fa-cloud-arrow-up"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "image-preview-wrapper", 4, "ngIf"], [1, "fa-solid", "fa-images"], ["type", "file", "accept", "image/*", "multiple", "", "hidden", "", 3, "change"], [1, "gallery-grid"], ["class", "gallery-item", 4, "ngFor", "ngForOf"], ["formControlName", "challenge_ar", "rows", "2"], ["formControlName", "challenge_en", "rows", "2"], ["formControlName", "solution_ar", "rows", "2"], ["formControlName", "solution_en", "rows", "2"], ["type", "text", "formControlName", "results_str"], ["type", "text", "formControlName", "deliverables_str"], ["type", "text", "formControlName", "tags_str"], ["type", "text", "formControlName", "testimonial_name"], ["type", "text", "formControlName", "testimonial_role"], ["formControlName", "testimonial_text", "rows", "3"], [1, "drawer-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "fa-solid", "fa-check"], [3, "value"], [1, "loading-state"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open", "empty-icon"], [1, "project-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], [1, "card-img-wrapper"], ["alt", "Project", 1, "card-img", 3, "src"], [1, "card-overlay"], ["title", "View", 1, "action-btn", 3, "routerLink"], [1, "fa-solid", "fa-eye"], ["title", "Edit", 1, "action-btn", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "Delete", 1, "action-btn", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "card-content"], [1, "card-header"], ["class", "category-badge", 4, "ngIf"], ["class", "fa-solid fa-star star-badge", "title", "\u0645\u0639\u0631\u0648\u0636 \u0641\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", 4, "ngIf"], [1, "title-ar"], [1, "title-en"], ["class", "client-info", 4, "ngIf"], [1, "category-badge"], ["title", "\u0645\u0639\u0631\u0648\u0636 \u0641\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", 1, "fa-solid", "fa-star", "star-badge"], [1, "client-info"], [1, "fa-solid", "fa-building"], [1, "drawer-backdrop", 3, "click"], [1, "image-preview-wrapper"], [1, "preview-img", 3, "src"], [1, "gallery-item"], ["alt", "gallery image", 3, "src"], ["type", "button", 1, "btn-remove", 3, "click"]], template: function PortfolioProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275element(3, "i", 5);
      \u0275\u0275elementStart(4, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterProjects());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 7)(6, "div", 8);
      \u0275\u0275element(7, "i", 9);
      \u0275\u0275elementStart(8, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioProjectsComponent_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedCategoryFilter, $event) || (ctx.selectedCategoryFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PortfolioProjectsComponent_Template_select_ngModelChange_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterProjects());
      });
      \u0275\u0275elementStart(9, "option", 11);
      \u0275\u0275text(10, "\u0643\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, PortfolioProjectsComponent_option_11_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 13);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddDrawer());
      });
      \u0275\u0275element(13, "i", 14);
      \u0275\u0275text(14, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, PortfolioProjectsComponent_div_15_Template, 2, 2, "div", 15)(16, PortfolioProjectsComponent_div_16_Template, 9, 0, "div", 16)(17, PortfolioProjectsComponent_div_17_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, PortfolioProjectsComponent_div_18_Template, 1, 0, "div", 18);
      \u0275\u0275elementStart(19, "div", 19)(20, "div", 20)(21, "h2");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 21);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275element(24, "i", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 23)(26, "form", 24);
      \u0275\u0275listener("ngSubmit", function PortfolioProjectsComponent_Template_form_ngSubmit_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveProject());
      });
      \u0275\u0275elementStart(27, "fieldset", 25)(28, "legend");
      \u0275\u0275text(29, "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 / Basic Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 26)(31, "label");
      \u0275\u0275text(32, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 26)(35, "label");
      \u0275\u0275text(36, "Title in English *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 26)(39, "label");
      \u0275\u0275text(40, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 29)(42, "option", 30);
      \u0275\u0275text(43, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, PortfolioProjectsComponent_option_44_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 31)(46, "div", 32)(47, "label");
      \u0275\u0275text(48, "\u0627\u0644\u0644\u0648\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 32)(51, "label");
      \u0275\u0275text(52, "\u0627\u0644\u0625\u064A\u0645\u0648\u062C\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 31)(55, "div", 32)(56, "label");
      \u0275\u0275text(57, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 32)(60, "label");
      \u0275\u0275text(61, "\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 37)(64, "label");
      \u0275\u0275element(65, "input", 38);
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "\u0639\u0631\u0636 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "fieldset", 25)(69, "legend");
      \u0275\u0275text(70, "\u0627\u0644\u0648\u0635\u0641 / Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 26)(72, "label");
      \u0275\u0275text(73, "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "textarea", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 26)(76, "label");
      \u0275\u0275text(77, "Description in English");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "fieldset", 25)(80, "legend");
      \u0275\u0275text(81, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 / Main Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 41);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_div_click_82_listener() {
        \u0275\u0275restoreView(_r1);
        const mainImageInput_r9 = \u0275\u0275reference(87);
        return \u0275\u0275resetView(mainImageInput_r9.click());
      });
      \u0275\u0275element(83, "i", 42);
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, "\u0627\u0646\u0642\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "input", 43, 0);
      \u0275\u0275listener("change", function PortfolioProjectsComponent_Template_input_change_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMainImageChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(88, PortfolioProjectsComponent_div_88_Template, 2, 1, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "fieldset", 25)(90, "legend");
      \u0275\u0275text(91, "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631 / Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 41);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_div_click_92_listener() {
        \u0275\u0275restoreView(_r1);
        const galleryInput_r10 = \u0275\u0275reference(97);
        return \u0275\u0275resetView(galleryInput_r10.click());
      });
      \u0275\u0275element(93, "i", 45);
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95, "\u0627\u0646\u0642\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0635\u0648\u0631 \u0625\u0636\u0627\u0641\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "input", 46, 1);
      \u0275\u0275listener("change", function PortfolioProjectsComponent_Template_input_change_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onGalleryChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 47);
      \u0275\u0275template(99, PortfolioProjectsComponent_div_99_Template, 4, 1, "div", 48)(100, PortfolioProjectsComponent_div_100_Template, 4, 1, "div", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "fieldset", 25)(102, "legend");
      \u0275\u0275text(103, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 / Project Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 26)(105, "label");
      \u0275\u0275text(106, "\u0627\u0644\u062A\u062D\u062F\u064A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "textarea", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 26)(109, "label");
      \u0275\u0275text(110, "The Challenge in English");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "textarea", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 26)(113, "label");
      \u0275\u0275text(114, "\u0627\u0644\u062D\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(115, "textarea", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 26)(117, "label");
      \u0275\u0275text(118, "The Solution in English");
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "textarea", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 26)(121, "label");
      \u0275\u0275text(122, "\u0627\u0644\u0646\u062A\u0627\u0626\u062C (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 26)(125, "label");
      \u0275\u0275text(126, "\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(127, "input", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 26)(129, "label");
      \u0275\u0275text(130, "\u0627\u0644\u0648\u0633\u0648\u0645 / Tags (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(131, "input", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "fieldset", 25)(133, "legend");
      \u0275\u0275text(134, "\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 / Client Testimonial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 26)(136, "label");
      \u0275\u0275text(137, "\u0627\u0644\u0627\u0633\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275element(138, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 26)(140, "label");
      \u0275\u0275text(141, "\u0627\u0644\u0645\u0646\u0635\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 26)(144, "label");
      \u0275\u0275text(145, "\u0627\u0644\u0646\u0635");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "textarea", 58);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 59)(148, "button", 60);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_button_click_148_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275element(149, "i", 22);
      \u0275\u0275text(150, " \u0625\u0644\u063A\u0627\u0621 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 61);
      \u0275\u0275listener("click", function PortfolioProjectsComponent_Template_button_click_151_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveProject());
      });
      \u0275\u0275element(152, "i", 62);
      \u0275\u0275text(153);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoryFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredProjects.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredProjects.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDrawer);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDrawer);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditing ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.projectForm);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(44);
      \u0275\u0275property("ngIf", ctx.projectImagePreview);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.existingGallery);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.galleryPreviews);
      \u0275\u0275advance(51);
      \u0275\u0275property("disabled", ctx.savingProject);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.savingProject ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.projects-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  direction: rtl;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n  max-width: 400px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-2);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 10px;\n  padding: 8px 36px 8px 12px;\n  outline: none;\n  transition: all var(--ease) 0.3s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.category-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.category-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n.category-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text);\n  outline: none;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: var(--violet);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 8px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: "Cairo", sans-serif;\n  font-weight: 600;\n  transition: opacity var(--ease) 0.3s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: var(--bg-card);\n  border-radius: 16px;\n  border: 1px dashed var(--border);\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--text-2);\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform var(--ease) 0.3s, box-shadow var(--ease) 0.3s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.card-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  aspect-ratio: 16/9;\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  transition: opacity var(--ease) 0.3s;\n}\n.project-card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background var(--ease) 0.3s;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.category-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--violet-light);\n  font-weight: 600;\n}\n.star-badge[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.title-ar[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text);\n  font-family: "Cairo", sans-serif;\n}\n.title-en[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.85rem;\n  color: var(--text-2);\n  font-weight: 400;\n  font-family: "Inter", sans-serif;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 280px;\n  background: var(--bg-card);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-card) 25%,\n      var(--border) 50%,\n      var(--bg-card) 75%);\n  background-size: 200% 100%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 499;\n  backdrop-filter: blur(4px);\n}\n.side-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 520px;\n  height: 100vh;\n  max-width: 100%;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  z-index: 500;\n  transform: translateX(100%);\n  transition: transform var(--ease) 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.side-drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-family: "Cairo", sans-serif;\n  color: var(--text);\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-2);\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: color var(--ease) 0.3s;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: var(--red);\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-family: "Cairo", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: var(--violet);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 8px 24px;\n  cursor: pointer;\n  font-family: "Cairo", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.form-group-section[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px dashed var(--border);\n  padding: 1.5rem 0 0 0;\n  margin: 0 0 1.5rem 0;\n}\n.form-group-section[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-2);\n  font-weight: 600;\n  padding: 0 10px;\n  margin-right: -10px;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text);\n  font-weight: 600;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=color]):not([type=checkbox]), \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  outline: none;\n  transition: all var(--ease) 0.3s;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toggle-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.image-drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border);\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--ease) 0.3s;\n  color: var(--text-2);\n}\n.image-drop-zone[_ngcontent-%COMP%]:hover {\n  border-color: var(--violet);\n  color: var(--violet);\n}\n.image-drop-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.image-preview-wrapper[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n}\n.preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.7rem;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: var(--red);\n}\n/*# sourceMappingURL=portfolio-projects.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-projects", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], template: `<div class="projects-container">
  
  <div class="top-bar">
    <div class="search-wrap">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" placeholder="\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639... / Search..." 
             [(ngModel)]="searchQuery" (ngModelChange)="filterProjects()" class="search-input">
    </div>

    <div class="filters">
      <div class="category-filter">
        <i class="fa-solid fa-filter"></i>
        <select [(ngModel)]="selectedCategoryFilter" (ngModelChange)="filterProjects()">
          <option value="">\u0643\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A</option>
          <option *ngFor="let cat of categories" [value]="cat.id">
            {{ cat.name?.ar || cat.name_ar || cat.name }}
          </option>
        </select>
      </div>
      
      <button class="btn-add" (click)="openAddDrawer()">
        <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639
      </button>
    </div>
  </div>

  <div class="loading-state" *ngIf="loading">
    <div class="skeleton-card" *ngFor="let i of [1,2,3]"></div>
  </div>

  <div class="empty-state" *ngIf="!loading && filteredProjects.length === 0">
    <i class="fa-regular fa-folder-open empty-icon"></i>
    <h3>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0639\u062F</h3>
    <p>No projects yet</p>
    <button class="btn-add" (click)="openAddDrawer()">
      <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639
    </button>
  </div>

  <div class="project-grid" *ngIf="!loading && filteredProjects.length > 0">
    <div class="project-card" *ngFor="let p of filteredProjects">
      
      <div class="card-img-wrapper">
        <img [src]="p.image || 'assets/placeholder.png'" alt="Project" class="card-img">
        <div class="card-overlay">
          <a [routerLink]="['/portfolio/projects', p.id]" class="action-btn" title="View"><i class="fa-solid fa-eye"></i></a>
          <button class="action-btn" title="Edit" (click)="openEditDrawer(p)"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="action-btn" title="Delete" (click)="deleteProject(p.id)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
      
      <div class="card-content">
        <div class="card-header">
          <span class="category-badge" *ngIf="getCategoryName(p)">{{ getCategoryName(p) }}</span>
          <i *ngIf="p.ViewInHome" class="fa-solid fa-star star-badge" title="\u0645\u0639\u0631\u0648\u0636 \u0641\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"></i>
        </div>
        
        <h3 class="title-ar">{{ getProjectTitle(p) }}</h3>
        <h4 class="title-en">{{ getProjectTitleEn(p) }}</h4>
        
        <div class="client-info" *ngIf="p.client">
          <i class="fa-solid fa-building"></i> <span>{{ p.client }}</span>
        </div>
      </div>
      
    </div>
  </div>
</div>

<!-- Drawer Backdrop -->
<div class="drawer-backdrop" *ngIf="showDrawer" (click)="closeDrawer()"></div>

<!-- Side Drawer -->
<div class="side-drawer" [class.open]="showDrawer">
  <div class="drawer-header">
    <h2>{{ isEditing ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639' : '\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639' }}</h2>
    <button class="btn-close" (click)="closeDrawer()"><i class="fa-solid fa-xmark"></i></button>
  </div>

  <div class="drawer-body">
    <form [formGroup]="projectForm" (ngSubmit)="saveProject()">
      
      <fieldset class="form-group-section">
        <legend>\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 / Basic Info</legend>
        
        <div class="form-field">
          <label>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <input type="text" formControlName="title_ar" required>
        </div>
        
        <div class="form-field">
          <label>Title in English *</label>
          <input type="text" formControlName="title_en" required>
        </div>
        
        <div class="form-field">
          <label>\u0627\u0644\u062A\u0635\u0646\u064A\u0641 *</label>
          <select formControlName="category_id" required>
            <option value="" disabled>\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641</option>
            <option *ngFor="let cat of categories" [value]="cat.id">
              {{ cat.name?.ar || cat.name_ar || cat.name }}
            </option>
          </select>
        </div>

        <div class="row">
          <div class="form-field col">
            <label>\u0627\u0644\u0644\u0648\u0646</label>
            <input type="color" formControlName="color">
          </div>
          <div class="form-field col">
            <label>\u0627\u0644\u0625\u064A\u0645\u0648\u062C\u064A</label>
            <input type="text" formControlName="emoji">
          </div>
        </div>

        <div class="row">
          <div class="form-field col">
            <label>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</label>
            <input type="text" formControlName="client">
          </div>
          <div class="form-field col">
            <label>\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629</label>
            <input type="text" formControlName="timeline">
          </div>
        </div>

        <div class="form-field toggle-field">
          <label>
            <input type="checkbox" formControlName="ViewInHome">
            <span>\u0639\u0631\u0636 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</span>
          </label>
        </div>
      </fieldset>

      <fieldset class="form-group-section">
        <legend>\u0627\u0644\u0648\u0635\u0641 / Description</legend>
        <div class="form-field">
          <label>\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629</label>
          <textarea formControlName="description_ar" rows="3"></textarea>
        </div>
        <div class="form-field">
          <label>Description in English</label>
          <textarea formControlName="description_en" rows="3"></textarea>
        </div>
      </fieldset>

      <fieldset class="form-group-section">
        <legend>\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 / Main Image</legend>
        <div class="image-drop-zone" (click)="mainImageInput.click()">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          <p>\u0627\u0646\u0642\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</p>
          <input type="file" #mainImageInput (change)="onMainImageChange($event)" accept="image/*" hidden>
        </div>
        <div class="image-preview-wrapper" *ngIf="projectImagePreview">
          <img [src]="projectImagePreview" class="preview-img">
        </div>
      </fieldset>

      <fieldset class="form-group-section">
        <legend>\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631 / Gallery</legend>
        <div class="image-drop-zone" (click)="galleryInput.click()">
          <i class="fa-solid fa-images"></i>
          <p>\u0627\u0646\u0642\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0635\u0648\u0631 \u0625\u0636\u0627\u0641\u064A\u0629</p>
          <input type="file" #galleryInput (change)="onGalleryChange($event)" accept="image/*" multiple hidden>
        </div>
        
        <div class="gallery-grid">
          <!-- Existing Images -->
          <div class="gallery-item" *ngFor="let url of existingGallery; let i = index">
            <img [src]="url" alt="gallery image">
            <button type="button" class="btn-remove" (click)="removeGalleryItem(i, true)">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <!-- New Images -->
          <div class="gallery-item" *ngFor="let prev of galleryPreviews; let i = index">
            <img [src]="prev" alt="gallery image">
            <button type="button" class="btn-remove" (click)="removeGalleryItem(i, false)">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset class="form-group-section">
        <legend>\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 / Project Details</legend>
        <div class="form-field">
          <label>\u0627\u0644\u062A\u062D\u062F\u064A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629</label>
          <textarea formControlName="challenge_ar" rows="2"></textarea>
        </div>
        <div class="form-field">
          <label>The Challenge in English</label>
          <textarea formControlName="challenge_en" rows="2"></textarea>
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u062D\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629</label>
          <textarea formControlName="solution_ar" rows="2"></textarea>
        </div>
        <div class="form-field">
          <label>The Solution in English</label>
          <textarea formControlName="solution_en" rows="2"></textarea>
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u0646\u062A\u0627\u0626\u062C (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)</label>
          <input type="text" formControlName="results_str">
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)</label>
          <input type="text" formControlName="deliverables_str">
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u0648\u0633\u0648\u0645 / Tags (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0627\u0635\u0644\u0629)</label>
          <input type="text" formControlName="tags_str">
        </div>
      </fieldset>

      <fieldset class="form-group-section">
        <legend>\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 / Client Testimonial</legend>
        <div class="form-field">
          <label>\u0627\u0644\u0627\u0633\u0645</label>
          <input type="text" formControlName="testimonial_name">
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u0645\u0646\u0635\u0628</label>
          <input type="text" formControlName="testimonial_role">
        </div>
        <div class="form-field">
          <label>\u0627\u0644\u0646\u0635</label>
          <textarea formControlName="testimonial_text" rows="3"></textarea>
        </div>
      </fieldset>

    </form>
  </div>

  <div class="drawer-footer">
    <button class="btn-cancel" (click)="closeDrawer()">
      <i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621
    </button>
    <button class="btn-save" (click)="saveProject()" [disabled]="savingProject">
      <i class="fa-solid fa-check"></i> 
      {{ savingProject ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638' }}
    </button>
  </div>
</div>
`, styles: ['/* src/app/components/portfolio/projects/portfolio-projects.component.css */\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  direction: rtl;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.search-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n  max-width: 400px;\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-2);\n}\n.search-input {\n  width: 100%;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 10px;\n  padding: 8px 36px 8px 12px;\n  outline: none;\n  transition: all var(--ease) 0.3s;\n}\n.search-input:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.filters {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.category-filter {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.category-filter i {\n  color: var(--text-2);\n}\n.category-filter select {\n  background: transparent;\n  border: none;\n  color: var(--text);\n  outline: none;\n}\n.btn-add {\n  background: var(--violet);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 8px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: "Cairo", sans-serif;\n  font-weight: 600;\n  transition: opacity var(--ease) 0.3s;\n}\n.btn-add:hover {\n  opacity: 0.9;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: var(--bg-card);\n  border-radius: 16px;\n  border: 1px dashed var(--border);\n  text-align: center;\n}\n.empty-icon {\n  font-size: 3rem;\n  color: var(--text-2);\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .project-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.project-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform var(--ease) 0.3s, box-shadow var(--ease) 0.3s;\n}\n.project-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.card-img-wrapper {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.card-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  aspect-ratio: 16/9;\n}\n.card-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  transition: opacity var(--ease) 0.3s;\n}\n.project-card:hover .card-overlay {\n  opacity: 1;\n}\n.action-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background var(--ease) 0.3s;\n  text-decoration: none;\n}\n.action-btn:hover {\n  background: var(--violet);\n}\n.card-content {\n  padding: 1.25rem;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.category-badge {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--violet-light);\n  font-weight: 600;\n}\n.star-badge {\n  color: var(--amber);\n}\n.title-ar {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text);\n  font-family: "Cairo", sans-serif;\n}\n.title-en {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.85rem;\n  color: var(--text-2);\n  font-weight: 400;\n  font-family: "Inter", sans-serif;\n}\n.client-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.loading-state {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.skeleton-card {\n  height: 280px;\n  background: var(--bg-card);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  animation: shimmer 1.5s infinite linear;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-card) 25%,\n      var(--border) 50%,\n      var(--bg-card) 75%);\n  background-size: 200% 100%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.drawer-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 499;\n  backdrop-filter: blur(4px);\n}\n.side-drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 520px;\n  height: 100vh;\n  max-width: 100%;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  z-index: 500;\n  transform: translateX(100%);\n  transition: transform var(--ease) 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.side-drawer.open {\n  transform: translateX(0);\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.drawer-header h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-family: "Cairo", sans-serif;\n  color: var(--text);\n}\n.btn-close {\n  background: none;\n  border: none;\n  color: var(--text-2);\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: color var(--ease) 0.3s;\n}\n.btn-close:hover {\n  color: var(--red);\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.drawer-footer {\n  padding: 1.25rem 1.5rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.btn-cancel {\n  background: transparent;\n  color: var(--text);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-family: "Cairo", sans-serif;\n}\n.btn-save {\n  background: var(--violet);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 8px 24px;\n  cursor: pointer;\n  font-family: "Cairo", sans-serif;\n}\n.btn-save:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.form-group-section {\n  border: none;\n  border-top: 1px dashed var(--border);\n  padding: 1.5rem 0 0 0;\n  margin: 0 0 1.5rem 0;\n}\n.form-group-section legend {\n  font-size: 0.95rem;\n  color: var(--text-2);\n  font-weight: 600;\n  padding: 0 10px;\n  margin-right: -10px;\n}\n.form-field {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-field label {\n  font-size: 0.85rem;\n  color: var(--text);\n  font-weight: 600;\n}\n.form-field input:not([type=color]):not([type=checkbox]),\n.form-field select,\n.form-field textarea {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  outline: none;\n  transition: all var(--ease) 0.3s;\n}\n.form-field input:focus,\n.form-field select:focus,\n.form-field textarea:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.row {\n  display: flex;\n  gap: 1rem;\n}\n.col {\n  flex: 1;\n}\n.toggle-field label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.image-drop-zone {\n  border: 2px dashed var(--border);\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--ease) 0.3s;\n  color: var(--text-2);\n}\n.image-drop-zone:hover {\n  border-color: var(--violet);\n  color: var(--violet);\n}\n.image-drop-zone i {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.image-preview-wrapper {\n  margin-top: 1rem;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n}\n.preview-img {\n  width: 100%;\n  display: block;\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.gallery-item {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.gallery-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.btn-remove {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.7rem;\n}\n.btn-remove:hover {\n  background: var(--red);\n}\n/*# sourceMappingURL=portfolio-projects.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioProjectsComponent, { className: "PortfolioProjectsComponent", filePath: "src/app/components/portfolio/projects/portfolio-projects.component.ts", lineNumber: 15 });
})();
export {
  PortfolioProjectsComponent
};
//# sourceMappingURL=chunk-HXK4AAWI.js.map
