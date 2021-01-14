(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\myshoppinglist\angular\src\main.ts */"zUnb");


/***/ }),

/***/ "0TkP":
/*!**************************************************!*\
  !*** ./src/app/about-app/about-app.component.ts ***!
  \**************************************************/
/*! exports provided: AboutAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppComponent", function() { return AboutAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



class AboutAppComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
AboutAppComponent.ɵfac = function AboutAppComponent_Factory(t) { return new (t || AboutAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AboutAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutAppComponent, selectors: [["app-about-app"]], decls: 35, vars: 0, consts: [[1, "vertikal-flex"], [1, "list-group"], [1, "list-group-item"], [1, "btn", "btn-danger", 3, "click"]], template: function AboutAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This is a dynamic single-page-application. A Web App which creates a shoppingList, in which u can add your preferred listname, itemname and its quantity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This app featues the CRUD operations (Create, Read, Update, Delete). The lists which you see on the table is from a database, created in MongoDB. The database is read in a scrollable mat table. The creation and the editing of a list are in dialogs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Use of Technologies and Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mongo DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutAppComponent_Template_button_click_33_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    -webkit-hyphens: auto;\r\n            hyphens: auto;\r\n    text-align: justify;\r\n}\r\n\r\n.vertikal-flex[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: justify;\r\n    justify-content: justify\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQWE7WUFBYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhYm91dC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaHlwaGVuczogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi52ZXJ0aWthbC1mbGV4IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGp1c3RpZnlcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-app',
                templateUrl: './about-app.component.html',
                styleUrls: ['./about-app.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 0, vars: 0, template: function RegisterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1gsi":
/*!****************************************************!*\
  !*** ./src/app/add-dialog/add-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class AddDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.shoppingList = [];
    }
    addList(form) {
        let newList = {
            listName: form.value.listName,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            listDate: form.value.listDate
        };
        this.dataService.addShoppingList(newList)
            .subscribe(() => {
            this.getLists();
        });
    }
    getLists() {
        this.dataService.getShoppingList()
            .subscribe(lists => {
            this.shoppingList = lists;
            console.log('data from dataservice: ' + this.shoppingList[0].itemName);
        });
    }
    ;
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
AddDialogComponent.ɵfac = function AddDialogComponent_Factory(t) { return new (t || AddDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AddDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddDialogComponent, selectors: [["app-add-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], decls: 22, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "contentBox"], ["for", "listname"], ["type", "text", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["for", "itemName"], ["matInput", "", "type", "text", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["for", "itemQuantity"], ["matInput", "", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "mat-dialog-close", "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AddDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ListName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.listName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ItemName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDialogComponent_Template_input_ngModelChange_11_listener($event) { return ctx.data.itemName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ItemQuantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDialogComponent_Template_input_ngModelChange_16_listener($event) { return ctx.data.itemQuantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_Template_button_click_18_listener() { return ctx.addList({ value: { listName: ctx.data.listName, itemName: ctx.data.itemName, itemQuantity: ctx.data.itemQuantity, listDate: ctx.data.listDate } }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_Template_button_click_20_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.listName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.itemQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-dialog',
                templateUrl: './add-dialog.component.html',
                styleUrls: ['./add-dialog.component.css'],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "2nF1":
/*!******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class EditDialogComponent {
    constructor(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.shoppingList = [];
    }
    getLists() {
        this.dataService.getShoppingList()
            .subscribe(lists => {
            this.shoppingList = lists;
            location.reload();
        });
    }
    ;
    editList(form) {
        let newList = {
            _id: form.value._id,
            listName: form.value.listName,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            listDate: form.value.listDate
        };
        this.dataService.updateShoppingList(newList)
            .subscribe(result => {
            console.log(newList);
            this.getLists();
        });
    }
    ;
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDialogComponent, selectors: [["app-edit-dialog"]], decls: 21, vars: 4, consts: [["for", ""], ["type", "text", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "mat-dialog-close", "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Items of List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ListName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.data.listName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ItemName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.data.itemName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ItemQuantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDialogComponent_Template_input_ngModelChange_15_listener($event) { return ctx.data.itemQuantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDialogComponent_Template_button_click_17_listener() { return ctx.editList({ value: { _id: ctx.data._id, listName: ctx.data.listName, itemName: ctx.data.itemName, itemQuantity: ctx.data.itemQuantity, listDate: ctx.data.listDate } }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDialogComponent_Template_button_click_19_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.listName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.itemQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-dialog',
                templateUrl: './edit-dialog.component.html',
                styleUrls: ['./edit-dialog.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "566j":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ContactService {
    constructor(http) {
        this.http = http;
        this.mailApi = 'https://mailthis.to/sidhankit@gmail.com';
    }
    PostMessage(input) {
        return this.http.post(this.mailApi, input, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((error) => {
            return error;
        }));
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6J53":
/*!**********************************************************!*\
  !*** ./src/app/shopping-item/shopping-item.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingItemComponent, UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingItemComponent", function() { return ShoppingItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return UserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-dialog/add-dialog.component */ "1gsi");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-dialog/edit-dialog.component */ "2nF1");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete-confirmation/delete-confirmation.component */ "qEGi");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "ANMO");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../about-me/about-me.component */ "NgH1");
/* harmony import */ var _search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-dialog/search-dialog.component */ "LlXo");
/* harmony import */ var _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../about-app/about-app.component */ "0TkP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function ShoppingItemComponent_mat_header_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ShoppingItemComponent_mat_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function ShoppingItemComponent_mat_header_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " List Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r11.listName, " ");
} }
function ShoppingItemComponent_mat_header_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r12.itemName, " ");
} }
function ShoppingItemComponent_mat_header_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r13.itemQuantity, " ");
} }
function ShoppingItemComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openEditDialog(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_39_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openDeleteConfirmDialog(row_r14._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShoppingItemComponent {
    //constructor(private dataService: DataService) {}
    constructor(dataService, dialog, router) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.filterString = "";
        this.shoppingList = [];
        this.searchValue = "";
        //DataSources
        this.dataSource = new UserDataSource(this.dataService);
        this.displayedColumns = ['listName', 'itemName', 'itemQuantity', 'actions'];
        this.resultCount = this.dataService.getProductCount();
    }
    //list functions
    getLists() {
        this.dataService.getShoppingList()
            .subscribe(lists => {
            this.shoppingList = lists;
            console.log('data from dataservice: ' + this.shoppingList[0].itemName);
        });
    }
    ;
    addList(form) {
        let newList = {
            listName: form.value.listName,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            listDate: form.value.listDate
        };
        this.dataService.addShoppingList(newList)
            .subscribe(() => {
            this.getLists();
        });
    }
    deleteList(id) {
        this.dataService.deleteShoppingList(id)
            .subscribe(data => {
            location.reload();
            console.log(data);
            if (data.n == 1) {
                for (var i = 0; i < this.shoppingList.length; i++) {
                    if (id == this.shoppingList[i]._id) {
                        this.shoppingList.splice(i, 1);
                    }
                }
            }
        });
    }
    editList(form) {
        let newList = {
            _id: this.selectedList._id,
            listName: form.value.listName,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            listDate: form.value.listDate
        };
        this.dataService.updateShoppingList(newList)
            .subscribe(result => {
            console.log('Orginal Item to be updated with old values: ' + result);
            this.getLists();
        });
        this.toggleForm = !this.toggleForm;
    }
    ;
    showEditForm(list) {
        this.selectedList = list;
        this.toggleForm = !this.toggleForm;
    }
    // items functions
    addItem(form) {
        let newItem = {
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
        };
        this.dataService.updateShoppingList(this.selectedList),
            this.selectedList.itemName.push(),
            this.selectedList.itemQuantity.push()
                .subscribe((item) => {
                this.getLists();
            });
    }
    //Dialogs 
    openAddDialog() {
        const dialogRef = this.dialog.open(_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"], {
            width: '500px',
            data: { listName: this.listName, itemName: this.itemName, itemQuantity: this.itemQuantity }
        });
        dialogRef.afterClosed().subscribe(result => {
            location.reload();
            console.log('The dialog was closed');
            console.log(result.listName);
        });
    }
    openEditDialog(form) {
        const dialogRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditDialogComponent"], {
            width: '500px',
            data: { _id: form._id, listName: form.listName, itemName: form.itemName, itemQuantity: form.itemQuantity }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(form._id);
            console.log(result.listName);
            this.getLists();
        });
    }
    openDeleteConfirmDialog(id) {
        const dialogRef = this.dialog.open(_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["DeleteConfirmationComponent"]);
        dialogRef.afterClosed().subscribe(confirmresult => {
            console.log(confirmresult);
            if (confirmresult) {
                console.log("Delete confirm is approved by user."); //if dialog result is yes, delete post  
                this.deleteList(id);
            }
            else { //if dialog result is no, DO NOT delete post  
                console.log("Delete confirm is cancelled by user.");
            }
        });
    }
    openSearchDialog() {
        const dialogRef = this.dialog.open(_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SearchDialogComponent"], {
            height: '600px',
            width: '500px',
        });
    }
    openContactDialog() {
        const dialogRef = this.dialog.open(_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], {
            height: '600px',
            width: '500px'
        });
    }
    openAboutMeDialog() {
        const dialogRef = this.dialog.open(_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], {
            height: '5000px',
            width: '4000px'
        });
    }
    openAboutAppDialog() {
        const dialogRef = this.dialog.open(_about_app_about_app_component__WEBPACK_IMPORTED_MODULE_11__["AboutAppComponent"], {
            height: '5000px',
            width: '4000px'
        });
    }
}
ShoppingItemComponent.ɵfac = function ShoppingItemComponent_Factory(t) { return new (t || ShoppingItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
ShoppingItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingItemComponent, selectors: [["app-shopping-item"]], viewQuery: function ShoppingItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { filterString: "filterString" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], decls: 40, vars: 3, consts: [[1, "bg", "bg-primary"], [1, "masthead"], [1, "overlay"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-10", "mx-auto", 2, "color", "white"], [2, "text-align", "center", "font-style", "italic"], [1, "col", "text-center"], ["type", "button", 1, "btn", "btn-success", "btn-xs", 3, "click"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["id", "table-wrapper"], ["id", "table-scroll", 1, "mat-elevation-z8"], [3, "dataSource"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "listName"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "itemQuantity"], ["matColumnDef", "actions"], [1, "btn", "btn-danger", 3, "click"]], template: function ShoppingItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A project created using MEAN Stack by Sidharth Jaiswal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_14_listener() { return ctx.openAddDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_16_listener() { return ctx.openContactDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_18_listener() { return ctx.openAboutMeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_20_listener() { return ctx.openAboutAppDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ShoppingItemComponent_mat_header_row_26_Template, 1, 0, "mat-header-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ShoppingItemComponent_mat_row_27_Template, 1, 0, "mat-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ShoppingItemComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ShoppingItemComponent_mat_cell_30_Template, 2, 1, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ShoppingItemComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ShoppingItemComponent_mat_cell_33_Template, 2, 1, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ShoppingItemComponent_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ShoppingItemComponent_mat_cell_36_Template, 2, 1, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ShoppingItemComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ShoppingItemComponent_mat_cell_39_Template, 7, 0, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: ["@import url('https://bootswatch.com/4/flatly/bootstrap.min.css');\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.list-group[_ngcontent-%COMP%] {\r\n    max-height: 300px;\r\n    margin-bottom: 10px;\r\n    overflow: scroll;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    margin: auto;\r\n    float: left;\r\n}\r\n.addListclass[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n.showListclass[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    border-color: black;\r\n    width: 100%;\r\n    height: 25px;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    overflow: scroll;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n.main[_ngcontent-%COMP%] {\r\n    width: 4000px;\r\n    height: 1000px;\r\n    overflow: scroll;\r\n    padding: 1% 0 0 1%;\r\n}\r\n.table2[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    background-color: orangered;\r\n    width: 50%;\r\n    overflow: scroll;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.sub[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 15%;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n#table-wrapper[_ngcontent-%COMP%] {\r\n    position: auto;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 50%;\r\n    background-color: white;\r\n}\r\n#table-scroll[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n    width: 100%;\r\n    overflow: auto;\r\n    margin-top: 20px;\r\n}\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 100%\r\n}\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    background: yellow;\r\n    color: black;\r\n}\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -20px;\r\n    z-index: 2;\r\n    height: 20px;\r\n    width: 35%;\r\n    border: 1px solid red;\r\n}\r\n.mat-header-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    line-height: 1.5;\r\n    margin: 30px 0;\r\n}\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n    transition: all 0.2s;\r\n}\r\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\r\n    color: #0085A1;\r\n}\r\nblockquote[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    color: #868e96;\r\n}\r\n.section-heading[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    margin-top: 60px;\r\n}\r\n.caption[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-style: italic;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 10px;\r\n    text-align: center;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n[_ngcontent-%COMP%]::selection {\r\n    color: #fff;\r\n    background: #0085A1;\r\n    text-shadow: none;\r\n}\r\nimg[_ngcontent-%COMP%]::selection {\r\n    color: #fff;\r\n    background: transparent;\r\n}\r\nimg[_ngcontent-%COMP%]::-moz-selection {\r\n    color: #fff;\r\n    background: transparent;\r\n}\r\n#mainNav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-bottom: 1px solid #e9ecef;\r\n    background-color: white;\r\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: #343a40;\r\n}\r\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-weight: 800;\r\n    padding: 13px;\r\n    text-transform: uppercase;\r\n    color: #343a40;\r\n}\r\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-weight: 800;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    #mainNav[_ngcontent-%COMP%] {\r\n        border-bottom: 1px solid transparent;\r\n        background: transparent;\r\n    }\r\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        color: #fff;\r\n    }\r\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n        color: rgba(255, 255, 255, 0.8);\r\n    }\r\n    #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        color: #fff;\r\n    }\r\n    #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n        color: rgba(255, 255, 255, 0.8);\r\n    }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    #mainNav[_ngcontent-%COMP%] {\r\n        transition: background-color 0.2s;\r\n        \r\n        transform: translate3d(0, 0, 0);\r\n        -webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\n    }\r\n    #mainNav.is-fixed[_ngcontent-%COMP%] {\r\n        \r\n        position: fixed;\r\n        top: -67px;\r\n        transition: transform 0.2s;\r\n        border-bottom: 1px solid white;\r\n        background-color: rgba(255, 255, 255, 0.9);\r\n    }\r\n    #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n        color: #212529;\r\n    }\r\n    #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n        color: #0085A1;\r\n    }\r\n    #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n        color: #212529;\r\n    }\r\n    #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n        color: #0085A1;\r\n    }\r\n    #mainNav.is-visible[_ngcontent-%COMP%] {\r\n        \r\n        transform: translate3d(0, 100%, 0);\r\n    }\r\n}\r\nheader.masthead[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    background: no-repeat center center;\r\n    background-color: #2C3E50;\r\n    background-attachment: scroll;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50%;\r\n    display: flex;\r\n    background-color: #212529;\r\n    opacity: 0.5;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n    padding: 200px 0 150px;\r\n    color: white;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n        padding: 200px 0;\r\n    }\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    margin-top: 0;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 1.1;\r\n    display: block;\r\n    margin: 10px 0 0;\r\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 80px;\r\n    }\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n    line-height: 1.1;\r\n    display: block;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    margin: 10px 0 30px;\r\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-style: italic;\r\n    font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 55px;\r\n    }\r\n    header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n}\r\n.post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: #0085A1;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .post-title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .post-subtitle[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    margin: 0 0 10px;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > .post-meta[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    margin-top: 0;\r\n    color: #868e96;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > .post-meta[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #212529;\r\n}\r\n.post-preview[_ngcontent-%COMP%] > .post-meta[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%] > .post-meta[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #0085A1;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    .post-preview[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .post-title[_ngcontent-%COMP%] {\r\n        font-size: 36px;\r\n    }\r\n}\r\n.floating-label-form-group[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    padding-bottom: 0.5em;\r\n    border-bottom: 1px solid #dee2e6;\r\n}\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    z-index: 1;\r\n    padding: 0;\r\n    resize: none;\r\n    border: none;\r\n    border-radius: 0;\r\n    background: none;\r\n    box-shadow: none !important;\r\n    font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #868e96;\r\n    font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n.floating-label-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 0.85em;\r\n    line-height: 1.764705882em;\r\n    position: relative;\r\n    z-index: 0;\r\n    top: 2em;\r\n    display: block;\r\n    margin: 0;\r\n    transition: top 0.3s ease, opacity 0.3s ease;\r\n    opacity: 0;\r\n}\r\n.floating-label-form-group[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n}\r\n.floating-label-form-group-with-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    opacity: 1;\r\n}\r\n.floating-label-form-group-with-focus[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: #0085A1;\r\n}\r\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child   .floating-label-form-group[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #dee2e6;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    padding: 50px 0 65px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 800;\r\n    padding: 15px 25px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #0085A1;\r\n    border-color: #0085A1;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active {\r\n    color: #fff;\r\n    background-color: #00657b !important;\r\n    border-color: #00657b !important;\r\n}\r\n.btn-lg[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 25px 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7QUFDaEU7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7OztJQUdJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsTUFBTTtBQUNWO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFHQTs7OztFQUlFO0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7Ozs7OztJQU1JLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUVBOztJQUVJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQztBQVFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFPQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSxvQ0FBb0M7UUFDcEMsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7O1FBRUksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7O1FBRUksK0JBQStCO0lBQ25DO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLDBDQUEwQztRQUMxQywrQkFBK0I7UUFDL0IsbUNBQW1DO1FBQ25DLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNEVBQTRFO1FBQzVFLGVBQWU7UUFDZixVQUFVO1FBQ1YsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QiwwQ0FBMEM7SUFDOUM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksb0VBQW9FO1FBQ3BFLGtDQUFrQztJQUN0QztBQUNKO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0k7OztRQUdJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDZDQUE2QztBQUNqRDtBQUVBOztJQUVJLGNBQWM7SUFDZCw2Q0FBNkM7QUFDakQ7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsY0FBYztJQUNkLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxNQUFNO0lBQ04sVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzaG9wcGluZy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2ZsYXRseS9ib290c3RyYXAubWluLmNzcycpO1xyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hZGRMaXN0Y2xhc3Mge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zaG93TGlzdGNsYXNzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG50YWJsZSxcclxudGgsXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRoLFxyXG50ZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiA0MDAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOiAxJSAwIDAgMSU7XHJcbn1cclxuXHJcbi50YWJsZTIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnN1YiB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3RhYmxlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdGFibGUtc2Nyb2xsIHtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI3RhYmxlLXdyYXBwZXIgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuI3RhYmxlLXdyYXBwZXIgdGFibGUgKiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiN0YWJsZS13cmFwcGVyIHRhYmxlIHRoZWFkIHRoIC50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuXHJcbi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBDbGVhbiBCbG9nIHY1LjAuMTAgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RoZW1lL2NsZWFuLWJsb2cpXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMjAgU3RhcnQgQm9vdHN0cmFwXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLWNsZWFuLWJsb2cvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG5wIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxucCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG5hOmZvY3VzLFxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA4NUExO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVBMTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QTE7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW1nOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWc6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWc6Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNtYWluTmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXY+bGkubmF2LWl0ZW0+YSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICNtYWluTmF2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmZvY3VzLFxyXG4gICAgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2PmxpLm5hdi1pdGVtPmEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2PmxpLm5hdi1pdGVtPmE6Zm9jdXMsXHJcbiAgICAjbWFpbk5hdiAubmF2YmFyLW5hdj5saS5uYXYtaXRlbT5hOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjbWFpbk5hdiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNtYWluTmF2LmlzLWZpeGVkIHtcclxuICAgICAgICAvKiB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biwgd2UgaGlkZSB0aGUgaGVhZGVyIHJpZ2h0IGFib3ZlIHRoZSB2aWV3cG9ydCAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IC02N3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIH1cclxuICAgICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItYnJhbmQ6Zm9jdXMsXHJcbiAgICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzAwODVBMTtcclxuICAgIH1cclxuICAgICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2PmxpLm5hdi1pdGVtPmEge1xyXG4gICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXY+bGkubmF2LWl0ZW0+YTpmb2N1cyxcclxuICAgICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2PmxpLm5hdi1pdGVtPmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA4NUExO1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYuaXMtdmlzaWJsZSB7XHJcbiAgICAgICAgLyogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2Nyb2xsaW5nIGRpcmVjdGlvbiwgd2Ugc2hvdyB0aGUgaGVhZGVyICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwIDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuICAgIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyAuc3ViaGVhZGluZyxcclxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSxcclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIH1cclxuICAgIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXc+YSB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldz5hOmZvY3VzLFxyXG4ucG9zdC1wcmV2aWV3PmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXc+YT4ucG9zdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldz5hPi5wb3N0LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ucG9zdC1wcmV2aWV3Pi5wb3N0LW1ldGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4ucG9zdC1wcmV2aWV3Pi5wb3N0LW1ldGE+YSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldz4ucG9zdC1tZXRhPmE6Zm9jdXMsXHJcbi5wb3N0LXByZXZpZXc+LnBvc3QtbWV0YT5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wb3N0LXByZXZpZXc+YT4ucG9zdC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODY4ZTk2O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc2NDcwNTg4MmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRvcDogMmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIC5oZWxwLWJsb2NrIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLXZhbHVlIGxhYmVsIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXMgbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcclxufVxyXG5cclxuZm9vdGVyIC5saXN0LWlubGluZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5mb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NUExO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4NUExO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNjU3YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-item',
                templateUrl: './shopping-item.component.html',
                styleUrls: ['./shopping-item.component.css'],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }]; }, { filterString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }] }); })();
class UserDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"] {
    constructor(dataService) {
        super();
        this.dataService = dataService;
    }
    connect() {
        console.log("Connection works");
        return this.dataService.getShoppingList();
    }
    disconnect() { }
}


/***/ }),

/***/ "ANMO":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "566j");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");







class ContactFormComponent {
    constructor(dialogRef, builder, contact) {
        this.dialogRef = dialogRef;
        this.builder = builder;
        this.contact = contact;
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.FormData = this.builder.group({
            Fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit(FormData) {
        console.log(FormData);
        this.contact.PostMessage(FormData)
            .subscribe(response => {
            location.href = 'https://mailthis.to/confirm';
            console.log(response);
        }, error => {
            console.warn(error.responseText);
            console.log({ error });
        });
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])], decls: 26, vars: 2, consts: [[1, "wrapper-box"], [1, "container"], [1, "text-center", "mb-5"], [1, "row"], [1, "col-md-6", "offset-md-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "Email"], ["type", "email", "name", "Email", "aria-describedby", "emailHelp", "placeholder", "Enter email", "formControlName", "Email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "fullname"], ["type", "text", "name", "Fullname", "placeholder", "Full Name", "formControlName", "Fullname", 1, "form-control"], ["for", "comment"], ["formControlName", "Comment", "name", "Comment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Me - if you have any questions or suggestion!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.FormData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFormComponent_Template_button_click_24_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.FormData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css'],
                providers: [_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LlXo":
/*!**********************************************************!*\
  !*** ./src/app/search-dialog/search-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchDialogComponent, UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogComponent", function() { return SearchDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return UserDataSource; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class SearchDialogComponent {
    constructor(dataService, dialogRef) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.shoppingList = [];
        this.dataSource = new UserDataSource(this.dataService);
        this.displayedColumns = ['listName', 'itemName', 'itemQuantity'];
    }
    closeDialog() {
        this.dialogRef.close();
    }
    searchList(search) {
        console.log(search);
        this.dataService.findShoppingList(search)
            .subscribe(lists => {
            this.shoppingList = lists;
            console.log('data from dataservice: ' + this.shoppingList[1].itemName);
        });
    }
    ;
    ngOnInit() { }
}
SearchDialogComponent.ɵfac = function SearchDialogComponent_Factory(t) { return new (t || SearchDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
SearchDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchDialogComponent, selectors: [["app-search-dialog"]], decls: 14, vars: 0, consts: [[1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search", "maxlength", "20", 2, "width", "auto"], ["listName", ""], ["mat-raised-button", "", "type", "button", "type", "submit", 1, "bg-secondary", 2, "color", "white", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SearchDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Search ShoppingList:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchDialogComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return ctx.searchList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchDialogComponent_Template_button_click_9_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search-dialog',
                templateUrl: './search-dialog.component.html',
                styleUrls: ['./search-dialog.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();
class UserDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor(dataService) {
        super();
        this.dataService = dataService;
    }
    connect() {
        console.log("Connection works");
        return this.dataService.getShoppingList();
    }
    disconnect() { }
}


/***/ }),

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class AboutMeComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 26, vars: 2, consts: [[1, "vertikal-flex"], ["target", "_blank", "href", "https://github.com/sidharthjaiswal"], [1, "fa-3x", 3, "icon"], ["target", "_blank", "href", "https://www.linkedin.com/in/sidharth-jaiswal-0354a2193/"], [1, "btn", "btn-danger", 3, "click"], ["src", "./profile.jpg", "alt", "CV photo", 2, "height", "auto", "width", "auto"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduction:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Name is Sidharth Jaiswal. I was born on the 22nd of November 2001 and I'm 19 years old. Since 2018, I am currently in training in the 3rd year as a computer scientist EFZ specializing in application development at the B\u00E9n\u00E9dict School Zurich. In order for me to successfully complete my training, this includes a 2-year internship (2020-2022). Therefore,I apply with great interest and pleasure to you for this internship.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "What I like to do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I enjoy working on the computer very much, because I am familiar with technology and programming. programming. Because of this, I can well imagine doing this as a profession. as a profession. In addition, I have experience with creating websites, as well as with Java, PHP, C++, CSS, JS, Angular and HTML. I am a reliable, independent and conscientious person. person. In addition, I am very sociable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My skills include my knowledge of math, front-end, business, English, and general education. My advantages are in TypeScript, Confluence, Jira, Git, React, Node.js, MongoDB, Heroku and in creating full-stack web projects. When it comes to projects, I can point to good stamina, as well as long memory and good concentration. I am good with people and invent problem solving strategies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeComponent_Template_button_click_23_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    -webkit-hyphens: auto;\r\n            hyphens: auto;\r\n    text-align: justify;\r\n}\r\n\r\n.vertikal-flex[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: justify;\r\n    justify-content: justify;\r\n}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYTtZQUFiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaHlwaGVuczogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi52ZXJ0aWthbC1mbGV4IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5mYS0zeCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class DataService {
    constructor(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.ListArray = [];
    }
    getData() {
        return this.httpClient.get('api/lists/');
    }
    // list Functions
    getShoppingList() {
        return this.http.get('api/lists/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    addShoppingList(newList) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/list/', newList, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    deleteShoppingList(id) {
        return this.http.delete('api/list/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    findShoppingList(Value) {
        return this.http.get('api/searchlist/' + Value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    updateShoppingList(newList) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/list/' + newList._id, newList, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    //items functions
    addShoppingItem(newItem) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/list/', newItem, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    searchShoppingList(listName) {
        return this.http.delete('api/list/' + listName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    //refresh table after adding new list
    fillTable(list) {
        this.ListArray.push(list);
        console.log("List added to table");
    }
    getProductCount() {
        return this.ListArray.length;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-item/shopping-item.component */ "6J53");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shopping-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-shopping-item[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaG9wcGluZy1pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-item/shopping-item.component */ "6J53");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-dialog/add-dialog.component */ "1gsi");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "2nF1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./delete-confirmation/delete-confirmation.component */ "qEGi");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "ANMO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search-dialog/search-dialog.component */ "LlXo");
/* harmony import */ var material_dynamic_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! material-dynamic-table */ "IkmS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./about-app/about-app.component */ "0TkP");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./register/register.component */ "1W4x");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            material_dynamic_table__WEBPACK_IMPORTED_MODULE_25__["DynamicTableModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FontAwesomeModule"],
        ], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingItemComponent"],
        _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddDialogComponent"],
        _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["EditDialogComponent"],
        _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["DeleteConfirmationComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__["ContactFormComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_23__["AboutMeComponent"],
        _search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_24__["SearchDialogComponent"],
        _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_27__["AboutAppComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
        material_dynamic_table__WEBPACK_IMPORTED_MODULE_25__["DynamicTableModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FontAwesomeModule"]], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingItemComponent"],
                    _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddDialogComponent"],
                    _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["EditDialogComponent"],
                    _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["DeleteConfirmationComponent"],
                    _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__["ContactFormComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_23__["AboutMeComponent"],
                    _search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_24__["SearchDialogComponent"],
                    _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_27__["AboutAppComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                    material_dynamic_table__WEBPACK_IMPORTED_MODULE_25__["DynamicTableModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FontAwesomeModule"],
                ],
                exports: [
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                ],
                entryComponents: [],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qEGi":
/*!**********************************************************************!*\
  !*** ./src/app/delete-confirmation/delete-confirmation.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class DeleteConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteConfirmationComponent.ɵfac = function DeleteConfirmationComponent_Factory(t) { return new (t || DeleteConfirmationComponent)(); };
DeleteConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConfirmationComponent, selectors: [["app-delete-confirmation"]], decls: 9, vars: 2, consts: [["mat-dialog-title", ""], ["mat-raised-button", "", 1, "btn", "btn-success", 3, "mat-dialog-close"], ["mat-raised-button", "", 1, "btn", "btn-danger", 3, "mat-dialog-close"]], template: function DeleteConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-confirmation',
                template: `
  <h1 mat-dialog-title>Are you sure you want to delete?</h1>    
  <mat-dialog-actions>  
      <button mat-raised-button class="btn btn-success" [mat-dialog-close]="true"><mat-icon>done</mat-icon></button>  
      <button mat-raised-button class="btn btn-danger" [mat-dialog-close]="false"><mat-icon>cancel</mat-icon></button>  
  </mat-dialog-actions>  
  `,
                styleUrls: ['./delete-confirmation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-app/about-app.component */ "0TkP");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-item/shopping-item.component */ "6J53");







const routes = [
    {
        path: 'about-me',
        component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]
    },
    {
        path: 'about-app',
        component: _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_2__["AboutAppComponent"]
    },
    { path: 'shopping-item', component: _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingItemComponent"] },
    { path: 'about-me', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map