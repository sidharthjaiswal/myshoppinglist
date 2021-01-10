(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\myshoppinglist\angular\src\main.ts */"zUnb");


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function ShoppingItemComponent_mat_header_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ShoppingItemComponent_mat_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function ShoppingItemComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " List Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r11.listName, " ");
} }
function ShoppingItemComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r12.itemName, " ");
} }
function ShoppingItemComponent_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r13.itemQuantity, " ");
} }
function ShoppingItemComponent_mat_header_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_38_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openEditDialog(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_38_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openDeleteConfirmDialog(row_r14._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShoppingItemComponent {
    //constructor(private dataService: DataService) {}
    constructor(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
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
    searchList(search) {
        console.log(search);
        this.dataService.findShoppingList(search)
            .subscribe(lists => {
            this.shoppingList = lists;
            console.log('data from dataservice: ' + this.shoppingList[0].itemName);
        });
    }
    ;
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
    openContactDialog() {
        const dialogRef = this.dialog.open(_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], {
            height: '600px',
            width: '500px'
        });
    }
}
ShoppingItemComponent.ɵfac = function ShoppingItemComponent_Factory(t) { return new (t || ShoppingItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
ShoppingItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingItemComponent, selectors: [["app-shopping-item"]], viewQuery: function ShoppingItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { filterString: "filterString" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], decls: 45, vars: 3, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], [1, "container"], [1, "navbar-brand"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-info", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "masthead"], [1, "overlay"], [1, "row"], [1, "col-lg-8", "col-md-10", "mx-auto"], [1, "site-heading"], ["id", "table-wrapper"], ["id", "table-scroll", 1, "mat-elevation-z8"], [3, "dataSource"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "listName"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "itemQuantity"], ["matColumnDef", "actions"], [1, "copyright", "text-muted"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ShoppingItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_4_listener() { return ctx.openAddDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_Template_button_click_7_listener() { return ctx.openContactDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Shopping List created using MEAN Stack by Sidharth Jaiswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ShoppingItemComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ShoppingItemComponent_mat_row_26_Template, 1, 0, "mat-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ShoppingItemComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ShoppingItemComponent_mat_cell_29_Template, 2, 1, "mat-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ShoppingItemComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ShoppingItemComponent_mat_cell_32_Template, 2, 1, "mat-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ShoppingItemComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ShoppingItemComponent_mat_cell_35_Template, 2, 1, "mat-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ShoppingItemComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ShoppingItemComponent_mat_cell_38_Template, 7, 0, "mat-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copyright \u00A9 My ShoppingList 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["@import url('https://bootswatch.com/4/flatly/bootstrap.min.css');\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.list-group[_ngcontent-%COMP%]{\r\n    max-height: 300px;\r\n    margin-bottom: 10px;\r\n    overflow:scroll;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    width: 500px; margin: auto; \r\n    background-color: aqua;\r\n    float: left;\r\n}\r\n\r\n.addListclass[_ngcontent-%COMP%]{\r\n    float: left;\r\n    \r\n   \r\n}\r\n\r\n.showListclass[_ngcontent-%COMP%]{\r\n    float: right;\r\n   \r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border-color: black;\r\n    width:100%;\r\n    height: 25px;\r\n     }\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n         \r\n        padding: 10px;\r\n      }\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    overflow: scroll;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n   \r\n  }\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    width:4000px;\r\n    height:1000px;\r\n   \r\n    overflow: scroll;\r\n    padding: 1% 0 0 1%;\r\n}\r\n\r\n.table2[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    \r\n    background-color:\torangered;\r\n    width: 50%;\r\n    overflow: scroll;\r\n    overflow-y:scroll;\r\n    overflow-x:hidden;\r\n \r\n}\r\n\r\n.sub[_ngcontent-%COMP%] {\r\n    height:100px;\r\n    width:15%;\r\n    display:inline-block;\r\n    float: left;\r\n    \r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\n#table-wrapper[_ngcontent-%COMP%] {\r\n   position: auto;\r\n   display: flex;\r\n  }\r\n\r\n#table-scroll[_ngcontent-%COMP%] {\r\n    height:700px;\r\n    width: 100%;\r\n    overflow:auto;  \r\n    margin-top:20px;\r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width:100%\r\n  \r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    background:yellow;\r\n    color:black;\r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    position:absolute;   \r\n    top:-20px;\r\n    z-index:2;\r\n    height:20px;\r\n    width:35%;\r\n    border:1px solid red;\r\n  }\r\n\r\n.mat-header-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    position: sticky;\r\n    top: 0; \r\n  }\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #212529;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n  margin: 30px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #212529;\r\n  transition: all 0.2s;\r\n}\r\n\r\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\r\n  color: #0085A1;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #868e96;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  margin-top: 60px;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::selection {\r\n  color: #fff;\r\n  background: #0085A1;\r\n  text-shadow: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]::selection {\r\n  color: #fff;\r\n  background: transparent;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]::-moz-selection {\r\n  color: #fff;\r\n  background: transparent;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  border-bottom: 1px solid #e9ecef;\r\n  background-color: white;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #343a40;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  padding: 13px;\r\n  text-transform: uppercase;\r\n  color: #343a40;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  #mainNav[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid transparent;\r\n    background: transparent;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    color: #fff;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    color: #fff;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  #mainNav[_ngcontent-%COMP%] {\r\n    transition: background-color 0.2s;\r\n    \r\n    transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%] {\r\n    \r\n    position: fixed;\r\n    top: -67px;\r\n    transition: transform 0.2s;\r\n    border-bottom: 1px solid white;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: #0085A1;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    color: #0085A1;\r\n  }\r\n  #mainNav.is-visible[_ngcontent-%COMP%] {\r\n    \r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n  background: no-repeat center center;\r\n  background-color: #1f5296;\r\n  background-attachment: scroll;\r\n  position: relative;\r\n  background-size: cover;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 50%;\r\n  display: flex;\r\n  background-color: #212529;\r\n  opacity: 0.5;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n  padding: 200px 0 150px;\r\n  color: white;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n    padding: 200px 0;\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  margin-top: 0;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n  display: block;\r\n  margin: 10px 0 0;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  line-height: 1.1;\r\n  display: block;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin: 10px 0 30px;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n  }\r\n  header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #212529;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #0085A1;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-subtitle[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  margin: 0 0 10px;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  margin-top: 0;\r\n  color: #868e96;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #212529;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n  color: #0085A1;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-title[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  padding-bottom: 0.5em;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 0;\r\n  resize: none;\r\n  border: none;\r\n  border-radius: 0;\r\n  background: none;\r\n  box-shadow: none !important;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #868e96;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.85em;\r\n  line-height: 1.764705882em;\r\n  position: relative;\r\n  z-index: 0;\r\n  top: 2em;\r\n  display: block;\r\n  margin: 0;\r\n  transition: top 0.3s ease, opacity 0.3s ease;\r\n  opacity: 0;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  margin: 15px 0;\r\n}\r\n\r\n.floating-label-form-group-with-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.floating-label-form-group-with-focus[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #0085A1;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child   .floating-label-form-group[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  padding: 50px 0 65px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 800;\r\n  padding: 15px 25px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  border-radius: 0;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #0085A1;\r\n  border-color: #0085A1;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active {\r\n  color: #fff;\r\n  background-color: #00657b !important;\r\n  border-color: #00657b !important;\r\n}\r\n\r\n.btn-lg[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 25px 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7O0FBRWhFO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksWUFBWSxFQUFFLFlBQVk7SUFDMUIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7OztBQUdmOztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7S0FDWDs7QUFFQTs7UUFFRyxhQUFhO01BQ2Y7O0FBR047SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFRTtJQUNFLFlBQVk7O0VBRWQ7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTs7SUFFYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLFdBQVc7O0FBRWY7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsYUFBYTtFQUNkOztBQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFDQTtJQUNFOztFQUVGOztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixNQUFNO0VBQ1I7O0FBRUE7Ozs7RUFJQTs7QUFFRjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7Ozs7Ozs7RUFPRSx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQVFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBT0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNEVBQTRFO0lBQzVFLGVBQWU7SUFDZixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QiwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG9FQUFvRTtJQUNwRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7OztJQUdFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsNkNBQTZDO0FBQy9DOztBQUVBOztFQUVFLGNBQWM7RUFDZCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGNBQWM7RUFDZCxTQUFTO0VBQ1QsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2hvcHBpbmctaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9mbGF0bHkvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuXHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saXN0LWdyb3Vwe1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbmZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4OyBtYXJnaW46IGF1dG87IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWRkTGlzdGNsYXNze1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBcclxuICAgXHJcbn1cclxuLnNob3dMaXN0Y2xhc3N7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgIFxyXG59XHJcbmlucHV0IHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG50YWJsZXtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLm1haW4ge1xyXG4gICAgd2lkdGg6NDAwMHB4O1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxuICAgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMSUgMCAwIDElO1xyXG59XHJcblxyXG4udGFibGUye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6XHRvcmFuZ2VyZWQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiBcclxufVxyXG5cclxuLnN1YiB7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDoxNSU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5ib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jdGFibGUtd3JhcHBlciB7XHJcbiAgIHBvc2l0aW9uOiBhdXRvO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAjdGFibGUtc2Nyb2xsIHtcclxuICAgIGhlaWdodDo3MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6YXV0bzsgIFxyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIH1cclxuICAjdGFibGUtd3JhcHBlciB0YWJsZSB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgXHJcbiAgfVxyXG4gICN0YWJsZS13cmFwcGVyIHRhYmxlICoge1xyXG4gICAgYmFja2dyb3VuZDp5ZWxsb3c7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgI3RhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQgdGggLnRleHQge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7ICAgXHJcbiAgICB0b3A6LTIwcHg7XHJcbiAgICB6LWluZGV4OjI7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDsgXHJcbiAgfVxyXG5cclxuICAvKiFcclxuICogU3RhcnQgQm9vdHN0cmFwIC0gQ2xlYW4gQmxvZyB2NS4wLjEwIChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90aGVtZS9jbGVhbi1ibG9nKVxyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDIwIFN0YXJ0IEJvb3RzdHJhcFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1jbGVhbi1ibG9nL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxucCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuYTpmb2N1cywgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDA4NUExO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwODVBMTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW1nOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmltZzo6c2VsZWN0aW9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW1nOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNtYWluTmF2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIH1cclxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI21haW5OYXYge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAjbWFpbk5hdi5pcy1maXhlZCB7XHJcbiAgICAvKiB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biwgd2UgaGlkZSB0aGUgaGVhZGVyIHJpZ2h0IGFib3ZlIHRoZSB2aWV3cG9ydCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtNjdweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIH1cclxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gIH1cclxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kOmZvY3VzLCAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA4NUExO1xyXG4gIH1cclxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6Zm9jdXMsICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA4NUExO1xyXG4gIH1cclxuICAjbWFpbk5hdi5pcy12aXNpYmxlIHtcclxuICAgIC8qIGlmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24sIHdlIHNob3cgdGhlIGhlYWRlciAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY1Mjk2O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAyMDBweCAwIDE1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDIwMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgaDEsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgLnN1YmhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgaDEsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEsXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMzBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICB9XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IGEge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4ucG9zdC1wcmV2aWV3ID4gYTpmb2N1cywgLnBvc3QtcHJldmlldyA+IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwODVBMTtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC1zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSA+IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmZvY3VzLCAucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSA+IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjMDA4NUExO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgaW5wdXQsXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxuICBsaW5lLWhlaWdodDogMS43NjQ3MDU4ODJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgLmhlbHAtYmxvY2sge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLXZhbHVlIGxhYmVsIHtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1cyBsYWJlbCB7XHJcbiAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDUwcHggMCA2NXB4O1xyXG59XHJcblxyXG5mb290ZXIgLmxpc3QtaW5saW5lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NUExO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwODVBMTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1sZyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-item',
                templateUrl: './shopping-item.component.html',
                styleUrls: ['./shopping-item.component.css'],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { filterString: [{
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





class DataService {
    constructor(http) {
        this.http = http;
        this.ListArray = [];
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
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }]; }, null); })();


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



class AppComponent {
    constructor() {
        this.title = 'angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shopping-item");
    } }, directives: [_shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingItemComponent"]], styles: [".app-shopping-item[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaG9wcGluZy1pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
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
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
        ], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shopping_item_shopping_item_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingItemComponent"],
        _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddDialogComponent"],
        _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["EditDialogComponent"],
        _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["DeleteConfirmationComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__["ContactFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
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
                    _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
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




const routes = [];
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