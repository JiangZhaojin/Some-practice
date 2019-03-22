import React from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';
import raf from 'raf';

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
    const cc = c - b;
        t /= d / 2;
    if (t < 1) {
        return (cc / 2) * t * t * t + b;
    } else {
        return (cc / 2) * ((t -= 2) * t * t + 2) + b;
    }
};
  
function noop() {}

function getDefaultTarget() {
    return window;
}


export interface BackTopProps {
    visibilityHeight?: number;
    target?: () => HTMLElement | Window;
    onClick?: React.MouseEventHandler<any>;
    visible?: boolean;
    className?: string;
    style?: React.CSSProperties;
    prefixCls?: string;
}


export default class BackToTop extends React.Component<BackTopProps, any> {
    static defaultProps = {
        visibilityHeight: 400
    };

    scrollEvent: any;

    constructor (props: BackTopProps) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount () {
        const target = (this.props.target || getDefaultTarget)();

        this.scrollEvent = (target as HTMLElement).addEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        let {visibilityHeight, target = getDefaultTarget} = this.props;
        let targetNode = target();
        let scrollTop = targetNode === window ? (targetNode as Window).pageYOffset : (targetNode as HTMLElement).scrollTop;
        this.setState({
            visible: (visibilityHeight as number) < scrollTop
        })
    }

    getCurrentScrollTop () {
        const getDefault = this.props.target || getDefaultTarget;
        const targetNode = getDefault();
        if (targetNode === window) {
            return window.pageYOffset || document.body.scrollTop || document.documentElement!.scrollTop;
        }
        return (targetNode as HTMLElement).scrollTop;
    }

    setScrollTop (value: number) {
        const getDefault = this.props.target || getDefaultTarget;
        const targetNode = getDefault();
        if (targetNode === window) {
            document.body.scrollTop = value;
            document.documentElement!.scrollTop = value;
        } else {
            (targetNode as HTMLElement).scrollTop = value;
        }
    }

    scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
        const scrollTop = this.getCurrentScrollTop();
        const startTime = Date.now();
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
            if (time < 450) {
                raf(frameFunc);
            } else {
                this.setScrollTop(0);
            }
        };
        raf(frameFunc);
        (this.props.onClick || noop)(e);
    };

    render () {
        const {prefixCls, className, style, children} = this.props;
        const customCls = (prefixCls || 'ant') + '-backtop';
        const defaultElement = (
            <div className={`${customCls}-content`}>
                <div className={`${customCls}-icon`}></div>
            </div>
        );

        const visible = 'visible' in this.props ? this.props.visible : this.state.visible;

        const BackTopBtn = visible ? (
            <div className={classNames(customCls, className)} style={style} onClick={this.scrollToTop}>
                {children || defaultElement}
            </div>
        ) : null;

        return (
            <Animate transitionName="fade">
                {BackTopBtn}
            </Animate>
        );
    }
}