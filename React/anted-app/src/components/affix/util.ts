import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Affix from './';

const TRIGGER_EVENTS = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load'
];

interface ObserverEntity {
    target: HTMLElement | Window;
    affixList: Affix[];
    eventHandler: { [eventName: string]: any };
}

let ObserverEntities: ObserverEntity[] = [];

export function addObserveTarget(target: HTMLElement | Window, affix: Affix): void {
    if (!target) return;
    let entity: ObserverEntity | undefined = ObserverEntities.find(item => item.target === target);
    if (entity) {
        entity.affixList.push(affix);
    } else {
        entity = {
            target,
            affixList: [affix],
            eventHandler: {}
        }
        ObserverEntities.push(entity);

        TRIGGER_EVENTS.forEach(event => {
            entity!.eventHandler[event] = addEventListener(target, event, (e: Event) => {
                entity!.affixList.forEach(affix => {
                    affix.updatePosition(e);
                });
            });
        });
    }
}

export function removeObserveTarget(affix: Affix): void {
    const observerEntity = ObserverEntities.find(oriObserverEntity => {
      const hasAffix = oriObserverEntity.affixList.some(item => item === affix);
      if (hasAffix) {
        oriObserverEntity.affixList = oriObserverEntity.affixList.filter(item => item !== affix);
      }
      return hasAffix;
    });
  
    if (observerEntity && observerEntity.affixList.length === 0) {
      ObserverEntities = ObserverEntities.filter(item => item !== observerEntity);
  
      // Remove listener
      TRIGGER_EVENTS.forEach(eventName => {
        const handler = observerEntity.eventHandler[eventName];
        if (handler && handler.remove) {
          handler.remove();
        }
      });
    }
  }

export function getTargetRect (target: HTMLElement | Window): ClientRect {
    return target === window ? ({ top: 0, bottom: window.innerHeight } as ClientRect ) : (target as HTMLElement).getBoundingClientRect();
}