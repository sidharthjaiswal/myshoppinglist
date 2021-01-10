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














function ShoppingItemComponent_mat_header_row_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ShoppingItemComponent_mat_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function ShoppingItemComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " List Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r11.listName, " ");
} }
function ShoppingItemComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r12.itemName, " ");
} }
function ShoppingItemComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r13.itemQuantity, " ");
} }
function ShoppingItemComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingItemComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openEditDialog(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingItemComponent_mat_cell_37_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openDeleteConfirmDialog(row_r14._id); });
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
    } }, inputs: { filterString: "filterString" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], decls: 44, vars: 3, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], [1, "container"], [1, "navbar-brand"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-info", 3, "click"], [1, "masthead"], [1, "overlay"], [1, "row"], [1, "col-lg-8", "col-md-10", "mx-auto"], [1, "site-heading"], ["id", "table-wrapper"], ["id", "table-scroll", 1, "mat-elevation-z8"], [3, "dataSource"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "listName"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "itemQuantity"], ["matColumnDef", "actions"], [1, "copyright", "text-muted"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ShoppingItemComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shopping List created using MEAN Stack by Sidharth Jaiswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ShoppingItemComponent_mat_header_row_24_Template, 1, 0, "mat-header-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ShoppingItemComponent_mat_row_25_Template, 1, 0, "mat-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ShoppingItemComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ShoppingItemComponent_mat_cell_28_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ShoppingItemComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ShoppingItemComponent_mat_cell_31_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ShoppingItemComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ShoppingItemComponent_mat_cell_34_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ShoppingItemComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ShoppingItemComponent_mat_cell_37_Template, 7, 0, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Copyright \u00A9 My ShoppingList 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["@import url('https://bootswatch.com/4/flatly/bootstrap.min.css');\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.list-group[_ngcontent-%COMP%]{\r\n    max-height: 300px;\r\n    margin-bottom: 10px;\r\n    overflow:scroll;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    width: 500px; margin: auto; \r\n    background-color: aqua;\r\n    float: left;\r\n}\r\n\r\n.addListclass[_ngcontent-%COMP%]{\r\n    float: left;\r\n    \r\n   \r\n}\r\n\r\n.showListclass[_ngcontent-%COMP%]{\r\n    float: right;\r\n   \r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border-color: black;\r\n    width:100%;\r\n    height: 25px;\r\n     }\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n         \r\n        padding: 10px;\r\n      }\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    overflow: scroll;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n   \r\n  }\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    width:4000px;\r\n    height:1000px;\r\n   \r\n    overflow: scroll;\r\n    padding: 1% 0 0 1%;\r\n}\r\n\r\n.table2[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    \r\n    background-color:\torangered;\r\n    width: 50%;\r\n    overflow: scroll;\r\n    overflow-y:scroll;\r\n    overflow-x:hidden;\r\n \r\n}\r\n\r\n.sub[_ngcontent-%COMP%] {\r\n    height:100px;\r\n    width:15%;\r\n    display:inline-block;\r\n    float: left;\r\n    \r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#table-wrapper[_ngcontent-%COMP%] {\r\n   position: auto;\r\n   display: flex;\r\n  }\r\n\r\n#table-scroll[_ngcontent-%COMP%] {\r\n    height:700px;\r\n    width: 100%;\r\n    overflow:auto;  \r\n    margin-top:20px;\r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width:100%\r\n  \r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    background:yellow;\r\n    color:black;\r\n  }\r\n\r\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    position:absolute;   \r\n    top:-20px;\r\n    z-index:2;\r\n    height:20px;\r\n    width:35%;\r\n    border:1px solid red;\r\n  }\r\n\r\n.mat-header-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    position: sticky;\r\n    top: 0; \r\n  }\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #212529;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n  margin: 30px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  \r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #212529;\r\n  transition: all 0.2s;\r\n}\r\n\r\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\r\n  color: #0085A1;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #868e96;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  margin-top: 60px;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::selection {\r\n  color: #fff;\r\n  background: #0085A1;\r\n  text-shadow: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]::selection {\r\n  color: #fff;\r\n  background: transparent;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]::-moz-selection {\r\n  color: #fff;\r\n  background: transparent;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  border-bottom: 1px solid #e9ecef;\r\n  background-color: white;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #343a40;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  padding: 13px;\r\n  text-transform: uppercase;\r\n  color: #343a40;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  #mainNav[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid transparent;\r\n    background: transparent;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    color: #fff;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    color: #fff;\r\n  }\r\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  #mainNav[_ngcontent-%COMP%] {\r\n    transition: background-color 0.2s;\r\n    \r\n    transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%] {\r\n    \r\n    position: fixed;\r\n    top: -67px;\r\n    transition: transform 0.2s;\r\n    border-bottom: 1px solid white;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: #0085A1;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: #212529;\r\n  }\r\n  #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, #mainNav.is-fixed[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    color: #0085A1;\r\n  }\r\n  #mainNav.is-visible[_ngcontent-%COMP%] {\r\n    \r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n  background: no-repeat center center;\r\n  background-color: #1f5296;\r\n  background-attachment: scroll;\r\n  position: relative;\r\n  background-size: cover;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 50%;\r\n  display: flex;\r\n  background-color: #212529;\r\n  opacity: 0.5;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n  padding: 200px 0 150px;\r\n  color: white;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n    padding: 200px 0;\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  margin-top: 0;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n  display: block;\r\n  margin: 10px 0 0;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n  }\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%], header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  line-height: 1.1;\r\n  display: block;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin: 10px 0 30px;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n  }\r\n  header.masthead[_ngcontent-%COMP%]   .post-heading[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #212529;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #0085A1;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-subtitle[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  margin: 0 0 10px;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  margin-top: 0;\r\n  color: #868e96;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #212529;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .post-preview[_ngcontent-%COMP%]    > .post-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n  color: #0085A1;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .post-preview[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .post-title[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  padding-bottom: 0.5em;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 0;\r\n  resize: none;\r\n  border: none;\r\n  border-radius: 0;\r\n  background: none;\r\n  box-shadow: none !important;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #868e96;\r\n  font-family: 'Lora', 'Times New Roman', serif;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.85em;\r\n  line-height: 1.764705882em;\r\n  position: relative;\r\n  z-index: 0;\r\n  top: 2em;\r\n  display: block;\r\n  margin: 0;\r\n  transition: top 0.3s ease, opacity 0.3s ease;\r\n  opacity: 0;\r\n}\r\n\r\n.floating-label-form-group[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  margin: 15px 0;\r\n}\r\n\r\n.floating-label-form-group-with-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.floating-label-form-group-with-focus[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #0085A1;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child   .floating-label-form-group[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  padding: 50px 0 65px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 800;\r\n  padding: 15px 25px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  border-radius: 0;\r\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #0085A1;\r\n  border-color: #0085A1;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active {\r\n  color: #fff;\r\n  background-color: #00657b !important;\r\n  border-color: #00657b !important;\r\n}\r\n\r\n.btn-lg[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 25px 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7O0FBRWhFO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksWUFBWSxFQUFFLFlBQVk7SUFDMUIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7OztBQUdmOztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7S0FDWDs7QUFFQTs7UUFFRyxhQUFhO01BQ2Y7O0FBR047SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFRTtJQUNFLFlBQVk7O0VBRWQ7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTs7SUFFYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLFdBQVc7O0FBRWY7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0dBQ0csY0FBYztHQUNkLGFBQWE7RUFDZDs7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBQ0E7SUFDRTs7RUFFRjs7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsTUFBTTtFQUNSOztBQUVBOzs7O0VBSUE7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOzs7Ozs7O0VBT0Usd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQzs7QUFRQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQU9BO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2Qix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQywwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQywyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDRFQUE0RTtJQUM1RSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxvRUFBb0U7SUFDcEUsa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFOzs7SUFHRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDZDQUE2QztBQUMvQzs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUNULDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNob3BwaW5nLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZmxhdGx5L2Jvb3RzdHJhcC5taW4uY3NzJyk7XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGlzdC1ncm91cHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5mb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDsgbWFyZ2luOiBhdXRvOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmFkZExpc3RjbGFzc3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5zaG93TGlzdGNsYXNze1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxufVxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgICB9XHJcblxyXG4gICAgIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG5cclxudGFibGV7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgXHJcbiAgfVxyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOjQwMDBweDtcclxuICAgIGhlaWdodDoxMDAwcHg7XHJcbiAgIFxyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDElIDAgMCAxJTtcclxufVxyXG5cclxuLnRhYmxlMntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlx0b3JhbmdlcmVkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gXHJcbn1cclxuXHJcbi5zdWIge1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6MTUlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3RhYmxlLXdyYXBwZXIge1xyXG4gICBwb3NpdGlvbjogYXV0bztcclxuICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgI3RhYmxlLXNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6NzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OmF1dG87ICBcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICB9XHJcbiAgI3RhYmxlLXdyYXBwZXIgdGFibGUge1xyXG4gICAgd2lkdGg6MTAwJVxyXG4gIFxyXG4gIH1cclxuICAjdGFibGUtd3JhcHBlciB0YWJsZSAqIHtcclxuICAgIGJhY2tncm91bmQ6eWVsbG93O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gICN0YWJsZS13cmFwcGVyIHRhYmxlIHRoZWFkIHRoIC50ZXh0IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyAgIFxyXG4gICAgdG9wOi0yMHB4O1xyXG4gICAgei1pbmRleDoyO1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbiAgICB3aWR0aDozNSU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxuICB9XHJcblxyXG4gIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7IFxyXG4gIH1cclxuXHJcbiAgLyohXHJcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIENsZWFuIEJsb2cgdjUuMC4xMCAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGhlbWUvY2xlYW4tYmxvZylcclxuICogQ29weXJpZ2h0IDIwMTMtMjAyMCBTdGFydCBCb290c3RyYXBcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vU3RhcnRCb290c3RyYXAvc3RhcnRib290c3RyYXAtY2xlYW4tYmxvZy9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbn1cclxuXHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbnAgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIFxyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbmE6Zm9jdXMsIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA4NUExO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwODVBMTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMwMDg1QTE7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmltZzo6LW1vei1zZWxlY3Rpb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWc6OnNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmltZzo6LW1vei1zZWxlY3Rpb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jbWFpbk5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI21haW5OYXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICNtYWluTmF2IHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtZml4ZWQge1xyXG4gICAgLyogd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24sIHdlIGhpZGUgdGhlIGhlYWRlciByaWdodCBhYm92ZSB0aGUgdmlld3BvcnQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTY3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwODVBMTtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgfVxyXG4gICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwODVBMTtcclxuICB9XHJcbiAgI21haW5OYXYuaXMtdmlzaWJsZSB7XHJcbiAgICAvKiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLCB3ZSBzaG93IHRoZSBoZWFkZXIgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNTI5NjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMjAwcHggMCAxNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyxcclxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIC5zdWJoZWFkaW5nLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIGgxIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhLFxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXcgPiBhIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IGE6Zm9jdXMsIC5wb3N0LXByZXZpZXcgPiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3Qtc3VidGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5cclxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYTpmb2N1cywgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzAwODVBMTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG59XHJcblxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzY0NzA1ODgyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdG9wOiAyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIC5oZWxwLWJsb2NrIHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZSBsYWJlbCB7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXMgbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA4NUExO1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcclxufVxyXG5cclxuZm9vdGVyIC5saXN0LWlubGluZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmZvb3RlciAuY29weXJpZ2h0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVBMTtcclxuICBib3JkZXItY29sb3I6ICMwMDg1QTE7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbGcge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAyNXB4IDM1cHg7XHJcbn1cclxuIl19 */"] });
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