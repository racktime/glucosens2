import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';

@Injectable()
export class PortletService {
    constructor(private jsonp: Jsonp) {
  
    }
    
    //포틀릿 정보 저장
    save() {
        
    }
    //포틀릿 정보 삭제
    delete() {
        
    }
    //포틀릿 추가.
    add() {
        
    }
    
    //포틀릿 정보 조회
    getInfo() {
        
    }
    
    //업데이트
    setInfo() {
        
    }
    
    result(request): any {
        return ["asfd", "qwerqwer"];
    }

    search(): any {
        var search = new URLSearchParams();
        //search.set('action', 'opensearch');
        //search.set('search', term);
        //search.set('format', 'json');
        //return this.jsonp.get('./showcase/portlet/data.json', { search}).map((request) => request.json()[1]);
        let url = './showcase/portlet/setting.json';            
        return this.jsonp
            .get(url, {})
            .map(request => this.result(request));
    }
}




