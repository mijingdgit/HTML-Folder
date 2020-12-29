window.onload = function() {
	var map = new AMap.Map('container', {
		resizeEnable: true,
		center:[104.07, 30.67],
		zoom:11
	});
	AMap.plugin('AMap.ToolBar',function(){
		var toolbar = new AMap.ToolBar();
		map.addControl(toolbar)
	})
}