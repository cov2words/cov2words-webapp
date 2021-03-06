var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RestService} from './rest/rest.service';

var Cov2WordsClientJSModule = /** @class */ (function () {
    /**
     * Contains functionality related to user session management.
     */
    function Cov2WordsClientJSModule() {
    }

    Cov2WordsClientJSModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule // Rest service
            ],
            declarations: [],
            providers: [
                RestService
            ],
            exports: []
        })
        /**
         * Contains functionality related to user session management.
         */
    ], Cov2WordsClientJSModule);
    return Cov2WordsClientJSModule;
}());
export {Cov2WordsClientJSModule};
