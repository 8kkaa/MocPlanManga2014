/*
 * ヘッダを作成するときに呼ぶ
 * 
 */
uiconfig = require('/uiconfig');
height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
exports.createUpperRibbon = function(){
	var upperRibbon = Titanium.UI.createImageView({
			image:uiconfig.COMMON_UP_BAR_IMAGE_PATH,
			width: Ti.UI.FILL,
			height: uiconfig.HEADER_RIBBON_HEIGHT,
			top: 0,
	});

	return upperRibbon;
};

exports.createTitleLabel = function(){

	var title_label = Ti.UI.createLabel({
		backgroundImage:'/images/header/logo(175,43).png',
		width: uiconfig.TITLE_WIDTH,
		height: uiconfig.TITLE_HEIGHT,
		center:{x:width *0.5,y:uiconfig.HEADER_RIBBON_HEIGHT*0.5}
	});

	return title_label;
};

exports.createThemeButtonsView = function(){

	var theme_buttons_view = Ti.UI.createView({
		backgroundImage: '/images/header_under/next_header_bg(720,87).png',
		width:Ti.UI.FILL,
		height: uiconfig.HEADER_UNDER_HEIGHT,
		//top: upperRibbon.height
		top: uiconfig.HEADER_RIBBON_HEIGHT
	});

	return theme_buttons_view;
};

/*
 * フッタ作成するときに呼ぶ
 */
exports.createUnderRibbon = function(){

	var underRibbon = Titanium.UI.createImageView({
		image: '/images/footer/footer_bg(720,99).png',
		width:Titanium.UI.FILL,
		//height: 99,
		height: height *(99/uiconfig.ACTUAL_HEIGHT),
		bottom: 0
	});
	return underRibbon;
};

exports.createHomeButton = function(){

	var home_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/footer_btn1(239,97).png',
		bottom: 0,
		left: 0,
		width: uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT
	});
	
	home_button.addEventListener("click",function(){
		require("/CommonNavigationWindow").createCommonNavigationWindow().open();
	});
	
	return home_button;
};

exports.createListButton = function(){

	var list_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/footer_btn2(239,97).png',
		bottom: 0,
		width: uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT
	});
	list_button.addEventListener("click",function(){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();
	});

	return list_button;
};

exports.createPeopleButton = function(){

	var people_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/footer_btn3(238,97).png',
		right: 0,
		bottom: 0,
		width:uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT
	});

	people_button.addEventListener("click",function(){
		require("/TemplateImageView").TemplateImageView().open();
	});


	return people_button;
};


