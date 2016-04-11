import {Component, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

@Component({
  selector: 'router-outlet',
  template : ''
})
export class LoginRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below denotes whether the route requires authentication to view
    this.publicRoutes = {
      'login': true
    };
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
      // todo: redirect to Login, may be there a better way?
      this.parentRouter.navigate(['Login']);      
    }
    else
        return super.activate(instruction);
  }
}
