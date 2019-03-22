import React from 'react';
import PropTypes from 'prop-types';

export interface BreadcrumItemProp {
    prefixCls?: string;
    separator?: React.ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}

export default class BreadcrumbItem extends React.Component<BreadcrumItemProp, any> {
    static _ANT_BREADCRUM_ITEM = true;

    static defaultProps = {
        separator: '/'
    };

    static propTypes = {
        prefixCls: PropTypes.string,
        href: PropTypes.string,
        sepatator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    };

    render () {
        let { separator, prefixCls, children, ...restProps } = this.props;
        let finalPrefixCls = prefixCls || 'ant' + '-breadcrumb';
        let link;
        if ('href' in this.props) {
            link = (
                <a className={finalPrefixCls + '-link'} {...restProps}>{children}</a>
            );
        } else {
            link = (
                <span className={finalPrefixCls + '-link'} {...restProps}>{children}</span>
            );
        }
        if (children) {
            return (
                <span>
                    {link}
                    <span className={`${finalPrefixCls}-sepatator`}>{separator}</span>
                </span>
            )
        }
        return null;
        
    }
}