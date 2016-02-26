///<reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

// angular
import {Component} from "angular2/core";

import {registerElement} from "nativescript-angular/element-registry";

const _reflect: any = Reflect;

export class DecoratorUtils {
  public static getConfig(config: any = {}, opts?: any) {
    
    // default directives
    let DIRECTIVES: any[] = [];
    
    // default pipes
    let PIPES: any[] = [];
    
    // custom decorator options
    if (opts) {
      if (opts.directives) {
        DIRECTIVES.push(...opts.directives); 
      }
      if (opts.pipes) {
        PIPES.push(...opts.pipes); 
      }  
    }
    
    config.directives = config.directives ? config.directives.concat(DIRECTIVES) : DIRECTIVES;
    config.pipes = config.pipes ? config.pipes.concat(PIPES) : PIPES;
    config.host = config.host || {};
    
    if (config.encapsulation) {
      config.encapsulation = config.encapsulation;
    }
    
    // custom {N} elements
    let registerElements: Array<any> = config.registerElements ? config.registerElements : [];
    
    registerElements.forEach(element => {
        // console.log("Add element: " + element.name);
      registerElement(element.name, element.resolver);
    });

    return config;
  }
  
  public static annotateComponent(cls, config: any = {}, opts?: any) {
    let annotations = _reflect.getMetadata("annotations", cls) || [];
    annotations.push(new Component(DecoratorUtils.getConfig(config, opts)));
    _reflect.defineMetadata("annotations", annotations, cls);
    return cls;
  }
}
