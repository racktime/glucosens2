import {Component, Pipe, forwardRef, Injector, DynamicComponentLoader, Inject, Injectable} from "angular2/core";
import {Http} from "angular2/http";

import {PortletTest} from "./portletTest";
import {PortletTest2} from "./portletTest2";
import {PubSub} from "./pubSub";

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

//binding tag ?
declare let System:any;
declare let fetch: any;

@Component({
    selector: "p-container",
    //host: {
    //'style': 'display: table; height: 100%',
    //'class': 'ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable'
    //},
    templateUrl: "./showcase/portlet/portletContainer.html",
    //template: `<div id='p_container' class="ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable" style="height: 600px;"></div>`
    directives: [PortletTest, PortletTest2]
})


/// <reference path="browser/ambient/jquery/index.d.ts" />
export class PortletContainer {
    //? 동기화 처리 관건
    pList: Observable<string[]>;       
    _observer : any;  
    _pList : any;
  
    //@ViewChild('myname') input;????
    constructor(public pubSub: PubSub) {
        //초기화 2번 호출 되는 이유는 무엇인가?
       this.pList = Observable.create((o) => {this._observer = o});
       this._pList = [];
    }
    
    ngOnInit() {
        //포틀릿 정보 셋팅.
        
        //pub/sub설정.
       this.pubSub.setSocket(this.setData, this);
    }
        
    setData(data) {
        console.log(data);        
        this._pList.push(data.message);
        this._observer.next(this._pList);
            //this._observer.complete();
        setTimeout(()=>{           
            this.shapeshift();
        }, 100);      
    }

    //화면 활성화 후.
    ngAfterViewInit() {
        this.shapeshift();
        /*
            this.loadComponentConfig("./showcase/portlet/data.json")
                .then(components => Promise.all(components.map(p => this.loader.loadAsRoot(p, '#p_container', this.injector)))).then(() => this.shapeshift());
                */
        //this.elementRef.nativeElement.appendChild(p1);
        //elem.querySelector('div').appendChild(h3);
        //this.loader.loadAsRoot(PortletTest, '#p_main', null);
    }

    //ngAfterViewChecked() 
    createAll() {
        console.log("Got response from API", this.pList);
        //this.shapeshift();
    }

    //추가 버튼 후 추가.
    add(p: any) {
        console.log(p);
    }

    shapeshift() {
        $(document).ready(function () { /* code here */
            $(".ep-main").shapeshift({
                //align : 'left',
                animateOnInit: true,
                gutterX: 5,
                gutterY: 5
            }).off("ss-drop-complete").on("ss-drop-complete", function() {
                //끝난 후 업데이트.
            });
        });
    }


    loadComponentConfig(url) {
        return fetch(url).then(res => res.json()).then(componentList =>
            Promise.all(componentList.map(config => this.loadComponent(config)))
        );
    }

    loadComponent(configObject) {
        return System.import(configObject.path).then(componentModule => componentModule[configObject.component]);
    }

    //개인정보 호출.
    service() {
        this.http.get("./showcase/portlet/data.json")
            // Call map on the response observable to get the parsed object
            .map(
                res => res.json()
            )
            // Subscribe to the observable to get the parsed object and attach it to the
            .subscribe(
                data => this.pList = data,
                err => console.log("ERROR!!!"),
                () => {
                    this.createAll();
                }
            );

    }
}