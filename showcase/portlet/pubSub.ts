import {Injectable} from 'angular2/core';
import "rxjs/Rx";

declare let io:any;
let _url = 'http://localhost:3002/';

/// <reference path="browser/ambient/socket.io-client/index.d.ts" />
@Injectable()
export class PubSub {
    dataStore: any;
    socket: any;
    username: any = 'testUser';
    
    //complete:any;
    constructor() {        
    }

    setSocket(listener:any, scope:any) {
        window._listener = listener;
        this.socket = io(_url);
        this.socket.on('connect', function () {
            //this.socket.emit('add user', this.username);            
        });
        this.socket.on('new message', function (d) {
            window._listener.apply(scope, [d]);
        });
        this.socket.on('disconnect', function () {
        });
    }

}




