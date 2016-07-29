/*
 * create by jiangzhaojin on 2016/07/19
 *
 *一个滚动滑块的插件
 *
 */

var Scroll = {};

(function(win,doc,$){

   	function CusScrollBar(options) {

        // 初始化
   		this._init(options);

        // 在原型上添加方法
   	    $.extend(CusScrollBar.prototype, {

		_init: function (options) {
			var self = this;
			self.options = {
				scrollDir: "y",     // 滑动方向
				contSelector: "",   // 滑动内容区选择器
				barSelector: "",    // 滑动条选择器
				sliderSelector: "", // 滑动块选择器
				wheelStep: 15       // 滚动步幅
			};

			$.extend(true,self.options,options || {});
            if (self.options.contSelector == null || self.options.barSelector == null) { return -1;}
			// Dom选择函数
			self._initDomEvent();
			// 绑定滑块点击拖动事件
			self._initSliderDragEvent();
			// 绑定滚轮事件
			self._bandMouseWheel();
			// 监听内容滚动，同步滑块移动
			self._bandContScroll();
			return self;
		},
		/*
   	 * 初始化DOM引用
   	 * @method _initDomEvent
   	 * @return {CusScrollBar}
   	 */
      _initDomEvent : function(){
   		var opts = this.options;
   		// 滑动内容区对象，必须填
   		this.$cont = $(opts.contSelector);
   		// 滑动条滑块对象，必须填
   		this.$slider = $(opts.sliderSelector);
   		// 滑动条对象
   		this.$bar = opts.barSelector ? $(opts.barSelector) : this.$slider.parent();
   		this.$doc = $(doc);
   	},
		 /*
   	  * 初始化滑动块滑动功能
   	  * @return {[object]} [this]
   	  */
		_initSliderDragEvent: function(){
			    var self = this;
             var slider = self.$slider;
			    var cont = self.$cont;
   		 	 var doc = self.$doc,
   		 		  dragStartPagePosition,
   		 		  dragStartScrollPosition,
   		 		  dragContBarRate;
   		 		  
				function mousemoveHandler(e){
					if(dragStartPagePosition == null){
						return;
					}
					self.scrollContTo(dragStartScrollPosition + (e.pageY - dragStartPagePosition)*dragContBarRate);
				}
   		 	slider.on("mousedown", function (event){
   		 	   event.preventDefault();
				   dragStartPagePosition = event.pageY;
				   dragStartScrollPosition = cont[0].scrollTop;
				   dragContBarRate = self.getMaxScrollPosition()/self.getMaxSliderPosition();

   		 		doc.on("mousemove.scroll", function(event){
					event.preventDefault();
   		 			mousemoveHandler(event);
					})
   		 		.on("mouseup.scroll", function(event){
							event.preventDefault();
   		 				doc.off(".scroll");
   		       });
			    });
   		},

   		// 监听内容滚动事件，同步滑块位置
   		_bandContScroll : function() {
   			var self = this;
   			self.$cont.on("scroll", function(e) {
   				e.preventDefault();
   				self.$slider.css( 'top', self.getSliderPosition() + 'px');
   			});
   		},

   		// 绑定鼠标滚轮事件
   		_bandMouseWheel : function() {
   			var self = this;
   			self.$cont.on("mousewheel DOMMouseScroll", function(e) {
   				e.preventDefault();
   				var oEv = e.originalEvent;
   				var wheelRange = oEv.wheelDelta ? -oEv.wheelDelta/120 : (oEv.detail || 0)/3;
   				self.scrollContTo(self.$cont[0].scrollTop + wheelRange * self.options.wheelStep);
   			});
   			return self;
   		},

   		// 获取花块位置
   		getSliderPosition : function() {
   			var self = this;
   			return self.$cont[0].scrollTop/(self.getMaxScrollPosition()/self.getMaxSliderPosition());
   		},

		getMaxScrollPosition : function() {
			var self = this;
			return Math.max(self.$cont.height(),self.$cont[0].scrollHeight) - self.$cont.height();
		},

		getMaxSliderPosition : function() {
			var self = this;
			return self.$bar.height() - self.$slider.height();
		},

		scrollContTo : function(positionVal) {
			var self = this;
			self.$cont.scrollTop(positionVal);
		},

		scrollSliderTO : function(positionVal) {
			var self = this;
			if (positionVal < 0 || positionVal > 270) return;
			self.$slider[0].style.top = positionVal+'px';
		}

	});

	Scroll.CusScrollBar = CusScrollBar;

   })(window,document,jQuery);

   var scroll_1 = new Scroll.CusScrollBar({
   	contSelector   : ".scroll-cont",   // 滑动内容区选择器
   	barSelector    : ".scroll-bar",    // 滑动条选择器
   	sliderSelector : ".scroll-slider"  // 滑动快选择器
   });