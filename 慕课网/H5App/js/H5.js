/* 内容管理对象 */
var H5 =function ( ) {

    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+this.id+'">').hide();
    this.page = [];                // 记录当前页面
    $('body').append( this.el );

    /**
     * 新增一个页
     * @param {string} name 组建的名称，会加入到ClassName中
     * @param {string} text 页内的默认文本
     * @return {H5} H5对象，可以重复使用H5对象支持的方法
     */
    this.addPage = function( name , text ) {
        
        var page = $('<div class="h5_page section">');

        if( name !== undefined ){
            page.addClass('h5_page_'+name);
        }
        if( text !== undefined ){
            page.text(text);
        }
        this.el.append(page);
        this.page.push( page );
        if( typeof this.whenAddPage === 'function' ){
            this.whenAddPage();
        }
        return this;
    }

    /**
     * 新增一个组件
     * @param {string} name 组建的名称，会加入到ClassName中
     * @param {string} cfg 携带组件参数的对象
     * @return {H5} H5对象，可以重复使用H5对象支持的方法
     */
    this.addComponent = function( name, cfg ) {

        var cfg = cfg || {};
        cfg = $.extend({
             type : 'base'
         },cfg);

        var component;                        // 定义一个变量，存储组件元素
        var page = this.page.slice(-1)[0];    // 取下当前页

        switch( cfg.type ){
            case 'base' :
                component = new H5ComponentBase(name,cfg);
                break;

            case 'polyline' :
                component = new H5ComponentPolyline(name,cfg);
                break;

            case 'bar' :
                component = new H5ComponentBar(name,cfg);
                break;

            case 'radar' :
                component = new H5ComponentRadar(name,cfg);
                break;

           case 'point' :
                component = new H5ComponentPoint(name,cfg);
                break;
            default:
        }

        page.append(component);
        return this;
    }

    /**
     * 当所有的组件加载好之后一次性显现出来
     * @return {H5} H5对象，可以重复使用H5对象支持的方法
     */
    this.loader = function() {

        this.el.fullpage({
            onLeave: function( index, nextIndex, direction) {
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad: function( anchorLink, index ) {
                $(this).find('.h5_component').trigger('onLoad');
            }
        });

        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
    }

    // 如果定制了加载效果，则执行定制的加载函数
    this.loader = typeof H5_loading == 'function' ? H5_loading : this.loader;
    return this;
}