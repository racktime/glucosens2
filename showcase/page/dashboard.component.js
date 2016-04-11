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
var http_1 = require("angular2/http");
var portletAddDlg_1 = require("../pop/portletAddDlg");
var portletContainer_1 = require("../portlet/portletContainer");
var pubSub_1 = require("../portlet/pubSub");
var sample_1 = require("../sample/sample");
var jsonp_1 = require("../sample/jsonp");
var wikipediaService_1 = require("../sample/wikipediaService");
//import {PortletTest} from "./portlet/portletTest";
//import {PortletTest2} from "./portlet/portletTest2";
var DashBoardComponent = (function () {
    function DashBoardComponent() {
        //this.loader = loader;
    }
    DashBoardComponent.prototype.addEvent = function (p) {
        this.portletContainer.add(p);
    };
    __decorate([
        core_1.ViewChild('PortletAddDlg'), 
        __metadata('design:type', portletAddDlg_1.PortletAddDlg)
    ], DashBoardComponent.prototype, "PortletAddDlg", void 0);
    __decorate([
        core_1.ContentChild('portletContainer'), 
        __metadata('design:type', portletContainer_1.PortletContainer)
    ], DashBoardComponent.prototype, "portletContainer", void 0);
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'test',
            providers: [pubSub_1.PubSub, wikipediaService_1.WikipediaService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS],
            templateUrl: 'showcase/page/dashboard.html',
            directives: [portletContainer_1.PortletContainer, portletAddDlg_1.PortletAddDlg, sample_1.Sample, jsonp_1.Jsonp]
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map