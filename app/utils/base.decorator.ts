import {DecoratorUtils} from './decorator-util';

export function BaseComponent(config: any={}) {
  return function(cls) {
    return DecoratorUtils.annotateComponent(cls, config);
  };
}
