"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var dialog_1 = require("../../components/dialog/dialog");
var button_1 = require("../../components/button/button");
var datatable_1 = require('../../components/datatable/datatable');
var codehighlighter_1 = require('../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../components/tabview/tabview');
var tabpanel_1 = require('../../components/tabview/tabpanel');
var column_1 = require('../../components/column/column');
var header_1 = require('../../components/common/header');
var PortletAddDlg = (function () {
    function PortletAddDlg() {
        this.display = false;
        this.addEvent = new core_1.EventEmitter();
    }
    PortletAddDlg.prototype.ngOnInit = function () {
        this.cars = [{ "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212121", "name": "p01212121" },
            { "type": "p01212122", "name": "p01212122" }];
    };
    PortletAddDlg.prototype.add = function () {
        this.addEvent.emit('event');
    };
    PortletAddDlg.prototype.show = function () {
        console.log('pop1 show');
        this.display = true;
    };
    PortletAddDlg.prototype.hide = function () {
        this.display = false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PortletAddDlg.prototype, "addEvent", void 0);
    PortletAddDlg = __decorate([
        core_1.Component({
            selector: 'portlet_add_dlg',
            templateUrl: 'showcase/pop/PortletAddDlg.html',
            directives: [dialog_1.Dialog, button_1.Button, datatable_1.DataTable, column_1.Column, header_1.Header, tabpanel_1.TabPanel, tabview_1.TabView, codehighlighter_1.CodeHighlighter]
        }), 
        __metadata('design:paramtypes', [])
    ], PortletAddDlg);
    return PortletAddDlg;
}());
exports.PortletAddDlg = PortletAddDlg;
//# sourceMappingURL=PortletAddDlg.js.map