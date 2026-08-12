import{K as q,Q as G}from"./chunk-QWD6GP4K.js";import{a as j,c as H,e as Q,f as B,h as C,r as W}from"./chunk-7HKKCHUE.js";import{$ as z,$b as D,Ca as k,Ha as E,Ia as $,Ja as V,Ka as F,L as P,La as m,Lb as S,M as I,N as M,S as O,Sa as c,Ua as x,Y as g,Ya as l,Z as f,Za as a,_a as v,ac as R,cb as _,db as p,ea as h,eb as s,hc as A,nb as u,ob as b,pb as w,rb as L,sb as T,tb as N,ub as y,xa as o}from"./chunk-W3T42JZD.js";function Z(e,t){if(e&1&&(l(0,"span",6),u(1),a()),e&2){let i=s();o(),b(i.getItemLabel(i.selectedItem))}}function ee(e,t){if(e&1&&(l(0,"span",7),u(1),a()),e&2){let i=s();o(),b(i.placeholder)}}function te(e,t){if(e&1){let i=_();l(0,"i",19),p("click",function(){g(i);let r=s(2);return f(r.searchQuery="")}),a()}}function ie(e,t){if(e&1&&(l(0,"small",22),u(1),a()),e&2){let i=s().$implicit,n=s(2);o(),b(n.getItemSubLabel(i))}}function ne(e,t){if(e&1){let i=_();l(0,"li",20),p("click",function(){let r=g(i).$implicit,d=s(2);return f(d.selectItem(r))}),l(1,"span"),u(2),a(),m(3,ie,2,1,"small",21),a()}if(e&2){let i=t.$implicit,n=s(2);x("active",n.value===n.getItemValue(i)),o(2),b(n.getItemLabel(i)),o(),c("ngIf",n.getItemSubLabel(i))}}function re(e,t){if(e&1&&(l(0,"li",23),u(1),a()),e&2){let i=s(2);o(),w(" ",i.emptyMessage," ")}}function oe(e,t){if(e&1){let i=_();l(0,"div",8)(1,"div",9),v(2,"i",10),l(3,"input",11),N("ngModelChange",function(r){g(i);let d=s();return T(d.searchQuery,r)||(d.searchQuery=r),f(r)}),p("click",function(r){return g(i),f(r.stopPropagation())}),a(),m(4,te,1,0,"i",12),a(),l(5,"ul",13),m(6,ne,4,4,"li",14)(7,re,2,1,"li",15),a(),l(8,"div",16)(9,"button",17),p("click",function(r){g(i);let d=s();return f(d.triggerAddNew(r))}),v(10,"i",18),u(11),a()()()}if(e&2){let i=s();o(3),L("ngModel",i.searchQuery),c("placeholder",i.searchPlaceholder),o(),c("ngIf",i.searchQuery),o(2),c("ngForOf",i.filteredItems()),o(),c("ngIf",i.filteredItems().length===0),o(4),w(" ",i.addNewLabel," ")}}var U=class e{items=[];optionLabel="name";optionValue="id";optionSubLabel="";placeholder="\u0627\u062E\u062A\u0631 \u0639\u0646\u0635\u0631 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629...";searchPlaceholder="\u0628\u062D\u062B...";addNewLabel="+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631 \u062C\u062F\u064A\u062F";emptyMessage="\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C";addNew=new h;onChange=new h;value=null;isOpen=!1;searchQuery="";onChangeFn=()=>{};onTouchedFn=()=>{};get selectedItem(){return this.items.find(t=>this.getItemValue(t)===this.value)}getItemLabel(t){return t?typeof t=="string"?t:t[this.optionLabel]||t.name_ar||t.name||"":""}getItemValue(t){return t?typeof t=="string"||typeof t=="number"?t:t[this.optionValue]!==void 0?t[this.optionValue]:t.id:null}getItemSubLabel(t){return!t||!this.optionSubLabel?"":t[this.optionSubLabel]||""}filteredItems(){if(!this.searchQuery.trim())return this.items;let t=this.searchQuery.toLowerCase();return this.items.filter(i=>{let n=this.getItemLabel(i).toLowerCase(),r=this.getItemSubLabel(i).toLowerCase();return n.includes(t)||r.includes(t)})}toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen&&this.onTouchedFn()}selectItem(t){this.value=this.getItemValue(t),this.onChangeFn(this.value),this.onChange.emit(this.value),this.isOpen=!1}triggerAddNew(t){t.stopPropagation(),this.isOpen=!1,this.addNew.emit()}writeValue(t){this.value=t}registerOnChange(t){this.onChangeFn=t}registerOnTouched(t){this.onTouchedFn=t}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=E({type:e,selectors:[["app-prime-picker-select"]],inputs:{items:"items",optionLabel:"optionLabel",optionValue:"optionValue",optionSubLabel:"optionSubLabel",placeholder:"placeholder",searchPlaceholder:"searchPlaceholder",addNewLabel:"addNewLabel",emptyMessage:"emptyMessage"},outputs:{addNew:"addNew",onChange:"onChange"},features:[y([{provide:j,useExisting:P(()=>e),multi:!0}])],decls:6,vars:5,consts:[[1,"prime-picker-wrapper"],[1,"picker-trigger",3,"click"],["class","selected-label",4,"ngIf"],["class","placeholder-text",4,"ngIf"],[1,"pi","pi-chevron-down","toggle-icon"],["class","picker-dropdown-panel",4,"ngIf"],[1,"selected-label"],[1,"placeholder-text"],[1,"picker-dropdown-panel"],[1,"picker-search-box"],[1,"pi","pi-search","search-icon"],["type","text",3,"ngModelChange","click","ngModel","placeholder"],["class","pi pi-times clear-icon",3,"click",4,"ngIf"],[1,"picker-options-list"],[3,"active","click",4,"ngFor","ngForOf"],["class","no-results",4,"ngIf"],[1,"picker-footer-action"],["type","button",1,"btn-inline-add",3,"click"],[1,"pi","pi-plus"],[1,"pi","pi-times","clear-icon",3,"click"],[3,"click"],["class","item-sublabel",4,"ngIf"],[1,"item-sublabel"],[1,"no-results"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),p("click",function(){return n.toggleDropdown()}),m(2,Z,2,1,"span",2)(3,ee,2,1,"span",3),v(4,"i",4),a(),m(5,oe,12,6,"div",5),a()),i&2&&(x("open",n.isOpen),o(2),c("ngIf",n.selectedItem),o(),c("ngIf",!n.selectedItem),o(2),c("ngIf",n.isOpen))},dependencies:[A,D,R,W,H,B,C],styles:[".prime-picker-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;-webkit-user-select:none;user-select:none}.picker-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:var(--surface-2, rgba(255,255,255,.06));border:1px solid var(--border-light, rgba(255,255,255,.12));border-radius:var(--radius-sm, 10px);color:var(--text-primary, #fff);font-size:.95rem;cursor:pointer;transition:all .25s ease}.picker-trigger[_ngcontent-%COMP%]:hover{border-color:var(--orange, #e8620a)}.placeholder-text[_ngcontent-%COMP%]{color:var(--text-muted, #71717a)}.picker-dropdown-panel[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:1050;background:#12121c;border:1px solid var(--border-light, rgba(255,255,255,.15));border-radius:12px;box-shadow:0 16px 36px #0009;overflow:hidden;display:flex;flex-direction:column;max-height:320px}.picker-search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.08);background:#0003}.picker-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;background:transparent;border:none;outline:none;color:#fff;font-size:.88rem}.picker-options-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:4px 0;overflow-y:auto;max-height:200px}.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 16px;font-size:.9rem;color:var(--text-secondary, #e4e4e7);cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background .2s}.picker-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#e8620a26;color:#fff}.picker-options-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:var(--orange, #e8620a);color:#fff;font-weight:700}.item-sublabel[_ngcontent-%COMP%]{font-size:.75rem;opacity:.7}.no-results[_ngcontent-%COMP%]{text-align:center;color:var(--text-muted, #71717a);font-style:italic}.picker-footer-action[_ngcontent-%COMP%]{padding:8px;border-top:1px solid rgba(255,255,255,.08);background:#00000040}.btn-inline-add[_ngcontent-%COMP%]{width:100%;padding:8px 12px;background:#e8620a26;border:1px dashed var(--orange, #e8620a);border-radius:8px;color:var(--orange-light, #ff7a1f);font-weight:600;font-size:.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s}.btn-inline-add[_ngcontent-%COMP%]:hover{background:var(--orange, #e8620a);color:#fff}"]})};var ae=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,le={root:({instance:e,props:t})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":t.autoResize,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":t.fluid}]},Y=(()=>{class e extends q{name="textarea";theme=ae;classes=le;static \u0275fac=(()=>{let i;return function(r){return(i||(i=z(e)))(r||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var ze=(()=>{class e extends G{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new h;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=O(Y);constructor(i,n){super(),this.ngModel=i,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)(k(C,8),k(Q,8))};static \u0275dir=V({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,r){n&1&&p("input",function(J){return r.onInput(J)}),n&2&&x("p-filled",r.filled)("p-textarea-resizable",r.autoResize)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-textarea-fluid",r.hasFluid)("p-textarea-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-textarea-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",S],variant:"variant",fluid:[2,"fluid","fluid",S],pSize:"pSize"},outputs:{onResize:"onResize"},features:[y([Y]),F]})}return e})(),Ee=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({})}return e})();export{U as a,ze as b,Ee as c};
