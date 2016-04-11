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
var http_1 = require('angular2/http');
var PortletService = (function () {
    function PortletService(jsonp) {
        this.jsonp = jsonp;
    }
    //포틀릿 정보 저장
    PortletService.prototype.save = function () {
    };
    //포틀릿 정보 삭제
    PortletService.prototype.delete = function () {
    };
    //포틀릿 추가.
    PortletService.prototype.add = function () {
    };
    //포틀릿 정보 조회
    PortletService.prototype.getInfo = function () {
    };
    //업데이트
    PortletService.prototype.setInfo = function () {
    };
    PortletService.prototype.result = function (request) {
        return ["asfd", "qwerqwer"];
    };
    PortletService.prototype.search = function () {
        var _this = this;
        var search = new http_1.URLSearchParams();
        //search.set('action', 'opensearch');
        //search.set('search', term);
        //search.set('format', 'json');
        //return this.jsonp.get('./showcase/portlet/data.json', { search}).map((request) => request.json()[1]);
        var url = './showcase/portlet/setting.json';
        return this.jsonp
            .get(url, {})
            .map(function (request) { return _this.result(request); });
    };
    PortletService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], PortletService);
    return PortletService;
}());
exports.PortletService = PortletService;
//# sourceMappingURL=portletService.js.map