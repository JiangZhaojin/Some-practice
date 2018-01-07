/**
 * 页面加载函数
 * @param {array} iamges 组建的名称，会加入到ClassName中
 * @param {string} cfg 携带组件参数的对象
 * @return {H5} H5对象，可以重复使用H5对象支持的方法
 */
var H5_loading = function( images, firstPage ){
        
        var id = this.id;
        var i = 0;                              // 计数

        if(this._images === undefined ) {       // 第一次进入

            this._images = ( images || [] ).length;
            this._loaded = 0 ;

            window[id] = this;                  // 把当前对象存储在全局对象 window 中，用来进行某个图片加载完成之后的回调

            for( i=0; i<this._images; i++ ) {
                var item = images[i];
                var img = new Image;
                img.onload = function(){
                    window[id].loader();
                }
                img.src = item;
            }

            $('#rate').text('0%');
            return this;
            
        }else{
            this._loaded ++ ; 
            $('#rate').text(  ( ( this._loaded / this._images * 100 ) >> 0 ) + '%' );
            if(this._loaded < this._images){
                return this;
            }
            
        }

        window[id] = null; 

        // 全部加载完成
        this.el.fullpage({
            onLeave: function( index, nextIndex, direction ) {
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad: function( anchorLink, index ) {
                $(this).find('.h5_component').trigger('onLoad');
            }
        });
        
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
}