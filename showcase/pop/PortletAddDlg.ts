import {Component, Directive, Input, Output, EventEmitter, Host, forwardRef, Injectable, Inject} from 'angular2/core';
import {Dialog} from "../../components/dialog/dialog";
import {Button} from "../../components/button/button";
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';


@Component({
    selector : 'portlet_add_dlg',
    templateUrl: 'showcase/pop/PortletAddDlg.html',
    directives: [Dialog, Button, DataTable,Column,Header,TabPanel,TabView,CodeHighlighter]
})

//@Injectable
export class PortletAddDlg {
    display: boolean = false;
    cars: Array<any>;
    
    @Output()
    addEvent = new EventEmitter();

     
    constructor() {
    }
    
    ngOnInit() {
        this.cars =[{"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
        {"type":"p01212121", "name":"p01212121"},
                    {"type":"p01212122", "name":"p01212122"}];
    }

    add() {
        this.addEvent.emit('event');
    }

    show() {
        console.log('pop1 show');
        this.display = true;
    }

    hide() {
        this.display = false;
    }
}