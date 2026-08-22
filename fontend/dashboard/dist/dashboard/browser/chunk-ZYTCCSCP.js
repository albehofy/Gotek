import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/projects/portfolio-project-detail.component.ts
function PortfolioProjectDetailComponent_div_0_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.project.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.project.img_alt || ctx_r1.getTitle());
  }
}
function PortfolioProjectDetailComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCategoryName());
  }
}
function PortfolioProjectDetailComponent_div_0_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTitleEn());
  }
}
function PortfolioProjectDetailComponent_div_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.project.client, "");
  }
}
function PortfolioProjectDetailComponent_div_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.project.timeline, "");
  }
}
function PortfolioProjectDetailComponent_div_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " \u0645\u0645\u064A\u0632");
    \u0275\u0275elementEnd();
  }
}
function PortfolioProjectDetailComponent_div_0_section_25_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getDescriptionEn());
  }
}
function PortfolioProjectDetailComponent_div_0_section_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 32);
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275elementStart(3, "div")(4, "h2", 34);
    \u0275\u0275text(5, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, "Project Overview");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 36)(9, "p", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PortfolioProjectDetailComponent_div_0_section_25_p_11_Template, 2, 1, "p", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.getDescription());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDescriptionEn());
  }
}
function PortfolioProjectDetailComponent_div_0_div_26_section_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getChallengeEn());
  }
}
function PortfolioProjectDetailComponent_div_0_div_26_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43)(1, "div", 44);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\u0627\u0644\u062A\u062D\u062F\u064A ");
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6, "The Challenge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PortfolioProjectDetailComponent_div_0_div_26_section_1_p_9_Template, 2, 1, "p", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getChallenge());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getChallengeEn());
  }
}
function PortfolioProjectDetailComponent_div_0_div_26_section_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSolutionEn());
  }
}
function PortfolioProjectDetailComponent_div_0_div_26_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\u0627\u0644\u062D\u0644 ");
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6, "The Solution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PortfolioProjectDetailComponent_div_0_div_26_section_2_p_9_Template, 2, 1, "p", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getSolution());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSolutionEn());
  }
}
function PortfolioProjectDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, PortfolioProjectDetailComponent_div_0_div_26_section_1_Template, 10, 2, "section", 41)(2, PortfolioProjectDetailComponent_div_0_div_26_section_2_Template, 10, 2, "section", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getChallenge());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSolution());
  }
}
function PortfolioProjectDetailComponent_div_0_section_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3);
  }
}
function PortfolioProjectDetailComponent_div_0_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 32);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementStart(3, "div")(4, "h2", 34);
    \u0275\u0275text(5, "\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, "Results");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 51);
    \u0275\u0275template(9, PortfolioProjectDetailComponent_div_0_section_27_div_9_Template, 4, 1, "div", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getResults());
  }
}
function PortfolioProjectDetailComponent_div_0_section_28_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_0_section_28_div_9_Template_div_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openLightbox(i_r5));
    });
    \u0275\u0275element(1, "img", 59);
    \u0275\u0275elementStart(2, "div", 60);
    \u0275\u0275element(3, "i", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r6, \u0275\u0275sanitizeUrl)("alt", "\u0635\u0648\u0631\u0629 " + (i_r5 + 1));
  }
}
function PortfolioProjectDetailComponent_div_0_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 32);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementStart(3, "div")(4, "h2", 34);
    \u0275\u0275text(5, "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, "Gallery");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275template(9, PortfolioProjectDetailComponent_div_0_section_28_div_9_Template, 4, 2, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getGallery());
  }
}
function PortfolioProjectDetailComponent_div_0_section_29_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7);
  }
}
function PortfolioProjectDetailComponent_div_0_section_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 32);
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275elementStart(3, "div")(4, "h2", 34);
    \u0275\u0275text(5, "\u0627\u0644\u0648\u0633\u0648\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, "Tags");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275template(9, PortfolioProjectDetailComponent_div_0_section_29_span_9_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getTags());
  }
}
function PortfolioProjectDetailComponent_div_0_section_30_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTestimonialRole());
  }
}
function PortfolioProjectDetailComponent_div_0_section_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PortfolioProjectDetailComponent_div_0_section_30_div_5_div_6_Template, 2, 1, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTestimonialName().charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTestimonialName());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTestimonialRole());
  }
}
function PortfolioProjectDetailComponent_div_0_section_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 66)(1, "div", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275elementStart(3, "p", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PortfolioProjectDetailComponent_div_0_section_30_div_5_Template, 7, 3, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTestimonialText());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTestimonialName());
  }
}
function PortfolioProjectDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "button", 6);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "span");
    \u0275\u0275text(8, "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "i", 9);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275template(13, PortfolioProjectDetailComponent_div_0_img_13_Template, 1, 2, "img", 11);
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 13);
    \u0275\u0275template(16, PortfolioProjectDetailComponent_div_0_div_16_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(17, "h1", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PortfolioProjectDetailComponent_div_0_p_19_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275template(21, PortfolioProjectDetailComponent_div_0_span_21_Template, 3, 1, "span", 18)(22, PortfolioProjectDetailComponent_div_0_span_22_Template, 3, 1, "span", 18)(23, PortfolioProjectDetailComponent_div_0_span_23_Template, 3, 0, "span", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 20);
    \u0275\u0275template(25, PortfolioProjectDetailComponent_div_0_section_25_Template, 12, 2, "section", 21)(26, PortfolioProjectDetailComponent_div_0_div_26_Template, 3, 2, "div", 22)(27, PortfolioProjectDetailComponent_div_0_section_27_Template, 10, 1, "section", 21)(28, PortfolioProjectDetailComponent_div_0_section_28_Template, 10, 1, "section", 21)(29, PortfolioProjectDetailComponent_div_0_section_29_Template, 10, 1, "section", 21)(30, PortfolioProjectDetailComponent_div_0_section_30_Template, 6, 2, "section", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.getTitle());
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.project.color || "#1a1a2e");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.image);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getCategoryName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTitle());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTitleEn());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.project.client);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.timeline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.ViewInHome);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getDescription());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getChallenge() || ctx_r1.getSolution());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getResults().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getGallery().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTags().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTestimonialText());
  }
}
function PortfolioProjectDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioProjectDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Project not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, " \u0627\u0644\u0639\u0648\u062F\u0629 ");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioProjectDetailComponent_div_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_3_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.prevImage());
    });
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275elementEnd();
  }
}
function PortfolioProjectDetailComponent_div_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_3_button_5_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.nextImage());
    });
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementEnd();
  }
}
function PortfolioProjectDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275elementStart(1, "button", 81);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PortfolioProjectDetailComponent_div_3_button_3_Template, 2, 0, "button", 83);
    \u0275\u0275elementStart(4, "img", 84);
    \u0275\u0275listener("click", function PortfolioProjectDetailComponent_div_3_Template_img_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PortfolioProjectDetailComponent_div_3_button_5_Template, 2, 0, "button", 85);
    \u0275\u0275elementStart(6, "div", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getGallery().length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getGallery()[ctx_r1.lightboxIndex], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getGallery().length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.lightboxIndex + 1, " / ", ctx_r1.getGallery().length, "");
  }
}
var PortfolioProjectDetailComponent = class _PortfolioProjectDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  apiService = inject(ApiService);
  project = null;
  loading = true;
  lightboxOpen = false;
  lightboxIndex = 0;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.loadProject(params["id"]);
      }
    });
  }
  loadProject(id) {
    this.loading = true;
    this.apiService.getProjects().subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.project = arr.find((p) => String(p.id) === String(id)) || null;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getTitle() {
    if (!this.project)
      return "";
    return this.project.title?.ar || this.project.title_ar || (typeof this.project.title === "string" ? this.project.title : "") || "";
  }
  getTitleEn() {
    if (!this.project)
      return "";
    return this.project.title?.en || this.project.title_en || "";
  }
  getDescription() {
    if (!this.project)
      return "";
    return this.project.description?.ar || this.project.description_ar || (typeof this.project.description === "string" ? this.project.description : "") || "";
  }
  getDescriptionEn() {
    if (!this.project)
      return "";
    return this.project.description?.en || this.project.description_en || "";
  }
  getChallenge() {
    if (!this.project?.challenge)
      return "";
    return this.project.challenge?.ar || this.project.challenge_ar || (typeof this.project.challenge === "string" ? this.project.challenge : "") || "";
  }
  getChallengeEn() {
    if (!this.project?.challenge)
      return "";
    return this.project.challenge?.en || this.project.challenge_en || "";
  }
  getSolution() {
    if (!this.project?.solution)
      return "";
    return this.project.solution?.ar || this.project.solution_ar || (typeof this.project.solution === "string" ? this.project.solution : "") || "";
  }
  getSolutionEn() {
    if (!this.project?.solution)
      return "";
    return this.project.solution?.en || this.project.solution_en || "";
  }
  getCategoryName() {
    const cat = this.project?.category;
    if (!cat)
      return "";
    return cat.name?.ar || cat.name_ar || (typeof cat.name === "string" ? cat.name : "") || "";
  }
  getGallery() {
    return this.project?.gallery || [];
  }
  getResults() {
    const r = this.project?.results;
    if (Array.isArray(r))
      return r;
    if (typeof r === "string")
      return r.split(",").map((s) => s.trim()).filter(Boolean);
    return [];
  }
  getTags() {
    const t = this.project?.tags;
    if (Array.isArray(t))
      return t;
    if (typeof t === "string")
      return t.split(",").map((s) => s.trim()).filter(Boolean);
    return [];
  }
  getTestimonialText() {
    const t = this.project?.testimonial;
    if (!t)
      return "";
    return t.text || (typeof t === "string" ? t : "") || "";
  }
  getTestimonialName() {
    return this.project?.testimonial?.name || "";
  }
  getTestimonialRole() {
    return this.project?.testimonial?.role || "";
  }
  openLightbox(index) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = "";
  }
  prevImage() {
    const gallery = this.getGallery();
    this.lightboxIndex = (this.lightboxIndex - 1 + gallery.length) % gallery.length;
  }
  nextImage() {
    const gallery = this.getGallery();
    this.lightboxIndex = (this.lightboxIndex + 1) % gallery.length;
  }
  goBack() {
    this.router.navigate(["/portfolio/projects"]);
  }
  static \u0275fac = function PortfolioProjectDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioProjectDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioProjectDetailComponent, selectors: [["app-portfolio-project-detail"]], decls: 4, vars: 4, consts: [["class", "detail-page", 4, "ngIf"], ["class", "detail-loading", 4, "ngIf"], ["class", "detail-not-found", 4, "ngIf"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "detail-page"], [1, "detail-topbar"], [1, "back-btn", 3, "click"], [1, "fa-solid", "fa-arrow-right"], [1, "breadcrumb-trail"], [1, "fa-solid", "fa-chevron-left", "sep-icon"], [1, "detail-hero"], ["class", "hero-img", 3, "src", "alt", 4, "ngIf"], [1, "hero-overlay"], [1, "hero-content"], ["class", "category-badge-hero", 4, "ngIf"], [1, "hero-title-ar"], ["class", "hero-title-en", 4, "ngIf"], [1, "hero-meta"], [4, "ngIf"], ["class", "featured-badge", 4, "ngIf"], [1, "detail-body"], ["class", "detail-section", 4, "ngIf"], ["class", "challenge-solution-grid", 4, "ngIf"], ["class", "detail-section testimonial-section", 4, "ngIf"], [1, "hero-img", 3, "src", "alt"], [1, "category-badge-hero"], [1, "hero-title-en"], [1, "fa-solid", "fa-building"], [1, "fa-solid", "fa-calendar-days"], [1, "featured-badge"], [1, "fa-solid", "fa-star"], [1, "detail-section"], [1, "section-header"], [1, "fa-solid", "fa-align-right", "section-icon"], [1, "section-title"], [1, "section-subtitle"], [1, "section-body"], [1, "text-ar"], ["class", "text-en", 4, "ngIf"], [1, "text-en"], [1, "challenge-solution-grid"], ["class", "cs-card challenge-card", 4, "ngIf"], ["class", "cs-card solution-card", 4, "ngIf"], [1, "cs-card", "challenge-card"], [1, "cs-icon-wrap", "challenge-icon"], [1, "fa-solid", "fa-triangle-exclamation"], [1, "en-label"], [1, "cs-card", "solution-card"], [1, "cs-icon-wrap", "solution-icon"], [1, "fa-solid", "fa-lightbulb"], [1, "fa-solid", "fa-chart-line", "section-icon"], [1, "results-grid"], ["class", "result-chip", 4, "ngFor", "ngForOf"], [1, "result-chip"], [1, "fa-solid", "fa-check"], [1, "fa-solid", "fa-images", "section-icon"], [1, "gallery-grid"], ["class", "gallery-thumb", 3, "click", 4, "ngFor", "ngForOf"], [1, "gallery-thumb", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "gallery-thumb-overlay"], [1, "fa-solid", "fa-expand"], [1, "fa-solid", "fa-tags", "section-icon"], [1, "tags-row"], ["class", "tag-chip", 4, "ngFor", "ngForOf"], [1, "tag-chip"], [1, "detail-section", "testimonial-section"], [1, "testimonial-card"], [1, "fa-solid", "fa-quote-right", "quote-watermark"], [1, "testimonial-text"], ["class", "testimonial-author", 4, "ngIf"], [1, "testimonial-author"], [1, "author-avatar"], [1, "author-name"], ["class", "author-role", 4, "ngIf"], [1, "author-role"], [1, "detail-loading"], [1, "fa-solid", "fa-spinner", "fa-spin", "fa-2x"], [1, "detail-not-found"], [1, "fa-regular", "fa-folder-open", "fa-3x"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-close", 3, "click"], [1, "fa-solid", "fa-xmark"], ["class", "lightbox-nav prev", 3, "click", 4, "ngIf"], [1, "lightbox-img", 3, "click", "src"], ["class", "lightbox-nav next", 3, "click", 4, "ngIf"], [1, "lightbox-counter"], [1, "lightbox-nav", "prev", 3, "click"], [1, "fa-solid", "fa-chevron-right"], [1, "lightbox-nav", "next", 3, "click"], [1, "fa-solid", "fa-chevron-left"]], template: function PortfolioProjectDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PortfolioProjectDetailComponent_div_0_Template, 31, 16, "div", 0)(1, PortfolioProjectDetailComponent_div_1_Template, 4, 0, "div", 1)(2, PortfolioProjectDetailComponent_div_2_Template, 9, 0, "div", 2)(3, PortfolioProjectDetailComponent_div_3_Template, 8, 5, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.loading && ctx.project);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.project);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lightboxOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.detail-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg);\n  color: var(--text);\n}\n.detail-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-sidebar);\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Cairo", sans-serif;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.breadcrumb-trail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.sep-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  opacity: 0.5;\n}\n.detail-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 420px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a3e 0%,\n      #0f172a 100%);\n}\n@media (max-width: 768px) {\n  .detail-hero[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n}\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 36px 40px;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.category-badge-hero[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 14px;\n  background: rgba(99, 102, 241, 0.4);\n  border: 1px solid rgba(99, 102, 241, 0.6);\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  margin-bottom: 10px;\n  backdrop-filter: blur(8px);\n}\n.hero-title-ar[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #fff;\n  margin: 0 0 6px;\n  line-height: 1.3;\n}\n.hero-title-en[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0 0 14px;\n  font-family: "Inter", sans-serif;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.hero-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.hero-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--violet);\n}\n.featured-badge[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.2);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  border-radius: 20px;\n  padding: 2px 10px;\n  color: #fbbf24 !important;\n}\n.detail-body[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  background: var(--bg-card, rgba(255,255,255,0.03));\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n  background: rgba(99, 102, 241, 0.04);\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--violet);\n  width: 38px;\n  height: 38px;\n  background: rgba(99, 102, 241, 0.12);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 2px;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin: 0;\n  font-family: "Inter", sans-serif;\n}\n.section-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.text-ar[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.8;\n  color: var(--text);\n  margin: 0 0 12px;\n}\n.text-en[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.7;\n  color: var(--text-2);\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n.challenge-solution-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 700px) {\n  .challenge-solution-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cs-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, rgba(255,255,255,0.03));\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n}\n.cs-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.en-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n}\n.cs-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 14px;\n}\n.challenge-icon[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--red, #ef4444);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.solution-icon[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--green, #22c55e);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.results-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 20px 24px;\n}\n.result-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n  border-radius: 20px;\n  font-size: 0.83rem;\n  color: var(--green, #22c55e);\n  font-weight: 600;\n}\n.result-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n  padding: 20px 24px;\n}\n.gallery-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/10;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.gallery-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.gallery-thumb-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n  color: #fff;\n  font-size: 1.3rem;\n}\n.gallery-thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.gallery-thumb[_ngcontent-%COMP%]:hover   .gallery-thumb-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 20px 24px;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 20px;\n  font-size: 0.78rem;\n  color: var(--violet-light, #818cf8);\n  font-weight: 600;\n}\n.testimonial-section[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px;\n  overflow: hidden;\n}\n.quote-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 5rem;\n  color: var(--violet);\n  opacity: 0.06;\n  line-height: 1;\n}\n.testimonial-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.85;\n  color: var(--text);\n  font-style: italic;\n  margin: 0 0 20px;\n  position: relative;\n  z-index: 1;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--violet);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.author-role[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-2);\n}\n.detail-loading[_ngcontent-%COMP%], \n.detail-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 16px;\n  color: var(--text-2);\n  text-align: center;\n}\n.detail-not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0;\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(8px);\n}\n.lightbox-img[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  max-height: 85vh;\n  object-fit: contain;\n  border-radius: 8px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 1.2rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lightbox-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.lightbox-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 1.1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lightbox-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.lightbox-nav.prev[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.lightbox-nav.next[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.lightbox-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(0, 0, 0, 0.4);\n  padding: 4px 14px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=portfolio-project-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioProjectDetailComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-project-detail", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="detail-page" *ngIf="!loading && project">

  <!-- Back Button & Breadcrumb -->
  <div class="detail-topbar">
    <button class="back-btn" (click)="goBack()">
      <i class="fa-solid fa-arrow-right"></i>
      <span>\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639</span>
    </button>
    <div class="breadcrumb-trail">
      <span>\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
      <i class="fa-solid fa-chevron-left sep-icon"></i>
      <span>{{ getTitle() }}</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <div class="detail-hero" [style.background-color]="project.color || '#1a1a2e'">
    <img *ngIf="project.image" [src]="project.image" [alt]="project.img_alt || getTitle()" class="hero-img" />
    <div class="hero-overlay">
      <div class="hero-content">
        <div class="category-badge-hero" *ngIf="getCategoryName()">{{ getCategoryName() }}</div>
        <h1 class="hero-title-ar">{{ getTitle() }}</h1>
        <p class="hero-title-en" *ngIf="getTitleEn()">{{ getTitleEn() }}</p>
        <div class="hero-meta">
          <span *ngIf="project.client"><i class="fa-solid fa-building"></i> {{ project.client }}</span>
          <span *ngIf="project.timeline"><i class="fa-solid fa-calendar-days"></i> {{ project.timeline }}</span>
          <span *ngIf="project.ViewInHome" class="featured-badge"><i class="fa-solid fa-star"></i> \u0645\u0645\u064A\u0632</span>
        </div>
      </div>
    </div>
  </div>

  <div class="detail-body">

    <!-- Overview Description -->
    <section class="detail-section" *ngIf="getDescription()">
      <div class="section-header">
        <i class="fa-solid fa-align-right section-icon"></i>
        <div>
          <h2 class="section-title">\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</h2>
          <p class="section-subtitle">Project Overview</p>
        </div>
      </div>
      <div class="section-body">
        <p class="text-ar">{{ getDescription() }}</p>
        <p class="text-en" *ngIf="getDescriptionEn()">{{ getDescriptionEn() }}</p>
      </div>
    </section>

    <!-- Challenge & Solution (2-col layout) -->
    <div class="challenge-solution-grid" *ngIf="getChallenge() || getSolution()">
      <section class="cs-card challenge-card" *ngIf="getChallenge()">
        <div class="cs-icon-wrap challenge-icon">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h3>\u0627\u0644\u062A\u062D\u062F\u064A <span class="en-label">The Challenge</span></h3>
        <p class="text-ar">{{ getChallenge() }}</p>
        <p class="text-en" *ngIf="getChallengeEn()">{{ getChallengeEn() }}</p>
      </section>
      <section class="cs-card solution-card" *ngIf="getSolution()">
        <div class="cs-icon-wrap solution-icon">
          <i class="fa-solid fa-lightbulb"></i>
        </div>
        <h3>\u0627\u0644\u062D\u0644 <span class="en-label">The Solution</span></h3>
        <p class="text-ar">{{ getSolution() }}</p>
        <p class="text-en" *ngIf="getSolutionEn()">{{ getSolutionEn() }}</p>
      </section>
    </div>

    <!-- Results -->
    <section class="detail-section" *ngIf="getResults().length > 0">
      <div class="section-header">
        <i class="fa-solid fa-chart-line section-icon"></i>
        <div>
          <h2 class="section-title">\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A</h2>
          <p class="section-subtitle">Results</p>
        </div>
      </div>
      <div class="results-grid">
        <div class="result-chip" *ngFor="let r of getResults()">
          <i class="fa-solid fa-check"></i>
          <span>{{ r }}</span>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="detail-section" *ngIf="getGallery().length > 0">
      <div class="section-header">
        <i class="fa-solid fa-images section-icon"></i>
        <div>
          <h2 class="section-title">\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631</h2>
          <p class="section-subtitle">Gallery</p>
        </div>
      </div>
      <div class="gallery-grid">
        <div class="gallery-thumb" *ngFor="let img of getGallery(); let i = index" (click)="openLightbox(i)">
          <img [src]="img" [alt]="'\u0635\u0648\u0631\u0629 ' + (i+1)" loading="lazy" />
          <div class="gallery-thumb-overlay">
            <i class="fa-solid fa-expand"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Tags -->
    <section class="detail-section" *ngIf="getTags().length > 0">
      <div class="section-header">
        <i class="fa-solid fa-tags section-icon"></i>
        <div>
          <h2 class="section-title">\u0627\u0644\u0648\u0633\u0648\u0645</h2>
          <p class="section-subtitle">Tags</p>
        </div>
      </div>
      <div class="tags-row">
        <span class="tag-chip" *ngFor="let t of getTags()">{{ t }}</span>
      </div>
    </section>

    <!-- Client Testimonial -->
    <section class="detail-section testimonial-section" *ngIf="getTestimonialText()">
      <div class="testimonial-card">
        <i class="fa-solid fa-quote-right quote-watermark"></i>
        <p class="testimonial-text">{{ getTestimonialText() }}</p>
        <div class="testimonial-author" *ngIf="getTestimonialName()">
          <div class="author-avatar">{{ getTestimonialName().charAt(0) }}</div>
          <div>
            <div class="author-name">{{ getTestimonialName() }}</div>
            <div class="author-role" *ngIf="getTestimonialRole()">{{ getTestimonialRole() }}</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</div>

<!-- Loading State -->
<div class="detail-loading" *ngIf="loading">
  <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
  <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639...</p>
</div>

<!-- Not Found State -->
<div class="detail-not-found" *ngIf="!loading && !project">
  <i class="fa-regular fa-folder-open fa-3x"></i>
  <h3>\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F</h3>
  <p>Project not found</p>
  <button class="back-btn" (click)="goBack()">
    <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0639\u0648\u062F\u0629
  </button>
</div>

<!-- Lightbox -->
<div class="lightbox-overlay" *ngIf="lightboxOpen" (click)="closeLightbox()">
  <button class="lightbox-close" (click)="closeLightbox()">
    <i class="fa-solid fa-xmark"></i>
  </button>
  <button class="lightbox-nav prev" (click)="$event.stopPropagation(); prevImage()" *ngIf="getGallery().length > 1">
    <i class="fa-solid fa-chevron-right"></i>
  </button>
  <img [src]="getGallery()[lightboxIndex]" class="lightbox-img" (click)="$event.stopPropagation()" />
  <button class="lightbox-nav next" (click)="$event.stopPropagation(); nextImage()" *ngIf="getGallery().length > 1">
    <i class="fa-solid fa-chevron-left"></i>
  </button>
  <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ getGallery().length }}</div>
</div>
`, styles: ['/* src/app/components/portfolio/projects/portfolio-project-detail.component.css */\n:host {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.detail-page {\n  min-height: 100vh;\n  background: var(--bg);\n  color: var(--text);\n}\n.detail-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-sidebar);\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Cairo", sans-serif;\n}\n.back-btn:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.breadcrumb-trail {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.sep-icon {\n  font-size: 0.65rem;\n  opacity: 0.5;\n}\n.detail-hero {\n  position: relative;\n  height: 420px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a3e 0%,\n      #0f172a 100%);\n}\n@media (max-width: 768px) {\n  .detail-hero {\n    height: 260px;\n  }\n}\n.hero-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 36px 40px;\n}\n.hero-content {\n  max-width: 700px;\n}\n.category-badge-hero {\n  display: inline-block;\n  padding: 4px 14px;\n  background: rgba(99, 102, 241, 0.4);\n  border: 1px solid rgba(99, 102, 241, 0.6);\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  margin-bottom: 10px;\n  backdrop-filter: blur(8px);\n}\n.hero-title-ar {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #fff;\n  margin: 0 0 6px;\n  line-height: 1.3;\n}\n.hero-title-en {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0 0 14px;\n  font-family: "Inter", sans-serif;\n}\n.hero-meta {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.hero-meta span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.hero-meta i {\n  font-size: 0.75rem;\n  color: var(--violet);\n}\n.featured-badge {\n  background: rgba(251, 191, 36, 0.2);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  border-radius: 20px;\n  padding: 2px 10px;\n  color: #fbbf24 !important;\n}\n.detail-body {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.detail-section {\n  background: var(--bg-card, rgba(255,255,255,0.03));\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n  background: rgba(99, 102, 241, 0.04);\n}\n.section-icon {\n  font-size: 1.1rem;\n  color: var(--violet);\n  width: 38px;\n  height: 38px;\n  background: rgba(99, 102, 241, 0.12);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.section-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 2px;\n}\n.section-subtitle {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin: 0;\n  font-family: "Inter", sans-serif;\n}\n.section-body {\n  padding: 24px;\n}\n.text-ar {\n  font-size: 0.95rem;\n  line-height: 1.8;\n  color: var(--text);\n  margin: 0 0 12px;\n}\n.text-en {\n  font-size: 0.85rem;\n  line-height: 1.7;\n  color: var(--text-2);\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n.challenge-solution-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 700px) {\n  .challenge-solution-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cs-card {\n  background: var(--bg-card, rgba(255,255,255,0.03));\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n}\n.cs-card h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.en-label {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n}\n.cs-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 14px;\n}\n.challenge-icon {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--red, #ef4444);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.solution-icon {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--green, #22c55e);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.results-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 20px 24px;\n}\n.result-chip {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n  border-radius: 20px;\n  font-size: 0.83rem;\n  color: var(--green, #22c55e);\n  font-weight: 600;\n}\n.result-chip i {\n  font-size: 0.72rem;\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n  padding: 20px 24px;\n}\n.gallery-thumb {\n  position: relative;\n  aspect-ratio: 16/10;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.gallery-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.gallery-thumb-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n  color: #fff;\n  font-size: 1.3rem;\n}\n.gallery-thumb:hover img {\n  transform: scale(1.05);\n}\n.gallery-thumb:hover .gallery-thumb-overlay {\n  opacity: 1;\n}\n.tags-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 20px 24px;\n}\n.tag-chip {\n  padding: 5px 14px;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 20px;\n  font-size: 0.78rem;\n  color: var(--violet-light, #818cf8);\n  font-weight: 600;\n}\n.testimonial-section {\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.testimonial-card {\n  position: relative;\n  padding: 32px;\n  overflow: hidden;\n}\n.quote-watermark {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 5rem;\n  color: var(--violet);\n  opacity: 0.06;\n  line-height: 1;\n}\n.testimonial-text {\n  font-size: 1.05rem;\n  line-height: 1.85;\n  color: var(--text);\n  font-style: italic;\n  margin: 0 0 20px;\n  position: relative;\n  z-index: 1;\n}\n.testimonial-author {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.author-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--violet);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.author-name {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.author-role {\n  font-size: 0.78rem;\n  color: var(--text-2);\n}\n.detail-loading,\n.detail-not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 16px;\n  color: var(--text-2);\n  text-align: center;\n}\n.detail-not-found h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0;\n}\n.lightbox-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(8px);\n}\n.lightbox-img {\n  max-width: 90vw;\n  max-height: 85vh;\n  object-fit: contain;\n  border-radius: 8px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);\n}\n.lightbox-close {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 1.2rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lightbox-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.lightbox-nav {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 1.1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lightbox-nav:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.lightbox-nav.prev {\n  right: 20px;\n}\n.lightbox-nav.next {\n  left: 20px;\n}\n.lightbox-counter {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(0, 0, 0, 0.4);\n  padding: 4px 14px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=portfolio-project-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioProjectDetailComponent, { className: "PortfolioProjectDetailComponent", filePath: "src/app/components/portfolio/projects/portfolio-project-detail.component.ts", lineNumber: 13 });
})();
export {
  PortfolioProjectDetailComponent
};
//# sourceMappingURL=chunk-ZYTCCSCP.js.map
