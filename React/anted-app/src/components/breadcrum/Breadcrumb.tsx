import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';
import classNames from 'classnames';

interface Route {
    path: string;
    breadcrumbName: string;
}

export interface BreadcrumbProps {
    separator?: React.ReactNode;
    prefixCls?: string;
    routes?: Route[];
    params?: any;
    itemRender?: (
        route: Route,
        params: any,
        routes: Array<Route>,
        paths: Array<string>
    ) => React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

function getBreadcrumbName(route: Route, params: any) {
    if (!route.breadcrumbName) {
        return null;
    }
    const paramsKeys = Object.keys(params).join('|');
    const name = route.breadcrumbName.replace(
        new RegExp(`:(${paramsKeys})`), 
        (replacement, key) => params[key] || replacement
    );
    return name;
}

function defaultItemRender(route: Route, params: any, routes: Route[], path: string[]) {
    const isLastItem = routes.indexOf(route) === routes.length - 1;
    const name = getBreadcrumbName(route, params);
    return isLastItem ? <span>{name}</span> : <a href={`#/${path.join('/')}`}>{name}</a>
}

export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {
    static componentName = "面包屑";
    static Item: typeof BreadcrumbItem;

    static defaultProps = {
        separator: '/'
    };

    static propTypes = {
        prefixCls: PropTypes.string,
        separator: PropTypes.string,
        routes: PropTypes.array,
        itemRender: PropTypes.func,
        params: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string
    };

    render () {
        const {
            prefixCls,
            separator, 
            routes,
            params,
            style,
            className,
            children,
            itemRender = defaultItemRender
        } = this.props;
        let crumbs;
        let cls = prefixCls || 'ant' + 'breadcrumb';
        if (routes && routes.length) {
            let paths: string[] = [];
            crumbs = routes.map(route => {
                route.path = route.path || '';
                let path: string = route.path.replace(/^\//, '');
                Object.keys(params).forEach(key => {
                    path = path.replace(':' + key, params[key]);
                });
                if (path) {
                    paths.push(path);
                }
                return (
                    <BreadcrumbItem separator={separator}>
                        {itemRender(route, params, routes, paths)}                    
                    </BreadcrumbItem>
                )
            });
        } else if (children) {
            crumbs = React.Children.map(children, (element: any, index) => {
                if (!element) {
                    return element;
                }
                return cloneElement(element, {
                    separator,
                    key: index
                });
            });
        }
        return (
            <div className={classNames(cls, className)} style={style}>
                {crumbs}
            </div>
        )
    }
}