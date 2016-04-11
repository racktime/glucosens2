import {Component, Directive} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: '[menu]',     //context, [], div.ss 
    templateUrl: 'showcase/menu/menu.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Menu {    
    constructor() {
    }
    
    setData():void {
    }
}