/**
 *
 * 官网
 * zx 2014 02 21
 *
 */
(function ($) {
    var Index={
        /**
         * 初始化方法,用于功能函数的入口
         * @param {string}
         * @example
         **/
        init:function(){
            //事件绑定
            this.bindEvent();
        },
        /**
         * 事件绑定
         * @param {string}
         * @example
         **/
        bindEvent:function(){
            var _this=this;
            var time;
            $('.tab .tab_nav').live({
                'mouseenter':function(){
                    var tabitem = $(this) 
                    time = setTimeout(function(){
                        var i = tabitem.index()
                        tabitem.siblings('.tab_nav').removeClass('on').end().addClass('on')
                        tabitem.parent('.tab').next('.tabCon').children('.tab_con').hide().eq(i).fadeIn()
                    },500)
                },
                'mouseleave':function(){
                    clearTimeout(time)
                },
                'click':function(){
                    var tabitem = $(this) 
                    var i = tabitem.index()
                    tabitem.siblings('.tab_nav').removeClass('on').end().addClass('on')
                    tabitem.parent('.tab').next('.tabCon').children('.tab_con').hide().eq(i).fadeIn()
                    clearTimeout(time)
                }
            })
            $('.role_sex p').live('mouseenter',function(){
                    var i = $(this).index()
                    $(this).parent('.role_sex').next('.role_con').children('p').hide().eq(i).show()
                })
        }
    };
    Index.init();
})(jQuery);