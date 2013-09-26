/*
 * created by fvi@
 * 
 * created @ 201303010936
 * 
 * 
 * 
 * 
 */

exports.createCommonNavigationWindow = function() {
	var uiconfig = require('/uiconfig');
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : true,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
		win_touch_p:{x:0,y:0}
	});
	/*
	 * 今はサイズを固定しているが今後は端末の画面サイズに適応できるようにすること
	 * TODO
	 * 
	 * 
	 * 
	 */
	/* サブヘッダのユーザ画像 */
	var user_photo_web_view = Titanium.UI.createWebView({
		height:height *0.5,
		width:width *0.65,
		enableZoomControls:false,
		backgroundColor:'rgb(51,73,96)',
		touchEnabled:false,
		horizontalWrap:true,
		loading:true,
		showScrollbars:false,
		url:'/HTML/user_image/user_image.html',
		
		center:{x:width *0.35,y:height *0.27},
	});
	
	user_photo_web_view.addEventListener('click',function(event){
		alert('stub user_image_click');
	});
	
	base_window.add(user_photo_web_view);
	
	var option_username_label = Ti.UI.createLabel({
			text:'ユーザー名:test',
			width:width *0.5,
			height:height *0.2,
			center:{x:0.4*width,y:height *0.4},
			font : {
				fontSize : 28
			}
		});
		
	base_window.add(option_username_label);
	
	var option_tags = Array(uiconfig.COUNT_OPTION);

	/*
	 * for文の場合値のスコープが変になるので再帰で書いておきました
	 * サブヘッダのラベル作成
	 */
	

	function createOptionTags(cnt){
		if(cnt >= uiconfig.COUNT_OPTION)
			return;
		var tag = Ti.UI.createLabel({
			//text:'オプション'+cnt,
			width:width *0.5,
			height:uiconfig.OPT_VIEW_TAG_HEIGHT,
			center:{x:0.3*width,y:height *0.5 + cnt *uiconfig.OPT_VIEW_TAG_HEIGHT},
			font : {
				fontSize : uiconfig.OPT_VIEW_FONTSIZE
			}
		});
		/*
		tag.addEventListener('click',function(e){
			alert('pushed option'+cnt);
			Titanium.App.fireEvent('option'+cnt);
		
		});
		*/
		base_window.add(tag);
		option_tags[cnt] = tag;
		
		createOptionTags(cnt + 1);
		
		option_tags[0].setText("Likes");
		option_tags[1].setText("messages");
		option_tags[2].setText("Following");
		option_tags[3].setText("Follower");
		option_tags[4].setText("Config");
	}

	createOptionTags(0);

	/*
	 * サブヘッダからそれぞれの画面に遷移
	 */
		option_tags[0].addEventListener('click',function(e){


			require("/OptionWindows/LikesWindow").openLikesWindow(base_window).open();
		
		});

		option_tags[1].addEventListener('click',function(e){

			require("/OptionWindows/MessagesWindow").openMessagesWindow().open();
		
		});

		option_tags[2].addEventListener('click',function(e){

			require("/OptionWindows/FollowingWindow").openFollowingWindow().open();
		});

		option_tags[3].addEventListener('click',function(e){

			require("/OptionWindows/FollowerWindow").openFollowerWindow().open();
		});

		option_tags[4].addEventListener('click',function(e){

			require("/OptionWindows/ConfigWindow").openConfigWindow().open();

		});


	var base_view = Titanium.UI.createView({
		backgroundColor : 'rgb(255,235,205)',
		width:Ti.UI.FILL,
		height:Ti.UI.FILL,
		center:{x:width *0.5,y:height *0.5},
	});
	
	base_window.add(base_view);
	

	
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:2000,
		backgroundColor:'rgb(255,235,205)',
	});
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: false,
  		showHorizontalScrollIndicator: false,
  		bottom: uiconfig.COMMON_UNDER_BOTTON_HEIGHT, //フッタのボタンの大きさに合わせる
  		width: Ti.UI.FILL,
  		top:height *0.07,
	});
	
	scroll_view.add(main_scroll_base_view);
	base_view.add(scroll_view);
		
	
	var main_web_view = Titanium.UI.createWebView({
		height:2000,
		width:Ti.UI.FILL,
		enableZoomControls:true,
		backgroundColor:'rgb(255,235,205)',
		touchEnabled:true,
		horizontalWrap:true,
		loading:true,
		url:'/HTML/4cora_top.html',
		
		//top:height *0.15,
		top: 0
	});
	
	main_scroll_base_view.add(main_web_view);

/*
 * フッタの背景
 */
	var underRibbon = require('/CreateCommonParts').createUnderRibbon();
	base_view.add(underRibbon);

/*
 * ヘッダの背景
 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_view.add(upperRibbon);

/*
 * テーマボタン(今はテーマボタンじゃない)の背景
 */
	var theme_buttons_view = require('/CreateCommonParts').createThemeButtonsView();	
	base_view.add(theme_buttons_view);
	
	main_web_view.top = theme_buttons_view.height;

/*
 * ヘッダの下のボタン（テーマボタンだったもの）の宣言とviewへの追加
 */
	
	var header_new_button = Ti.UI.createButton({
		backgroundImage: '/images/header_under/header_btn1(178,83).png',
		top: (uiconfig.HEADER_UNDER_HEIGHT - uiconfig.THEME_BUTTON_HEIGHT) *1.5,
		left: (width -uiconfig.THEME_BUTTON_WIDTH *4) *0.2,
		width: uiconfig.THEME_BUTTON_WIDTH,
		height:uiconfig.THEME_BUTTON_HEIGHT
	});
	
	theme_buttons_view.add(header_new_button);
	
	var header_popularity_button = Ti.UI.createButton({
		backgroundImage: '/images/header_under/header_btn2(178,83).png',
		top: (uiconfig.HEADER_UNDER_HEIGHT - uiconfig.THEME_BUTTON_HEIGHT) *1.5,
		left: uiconfig.THEME_BUTTON_WIDTH +(width -uiconfig.THEME_BUTTON_WIDTH *4) *0.4,
		width: uiconfig.THEME_BUTTON_WIDTH,
		height:uiconfig.THEME_BUTTON_HEIGHT
	});
	
	theme_buttons_view.add(header_popularity_button);
	
	var header_comment_button = Ti.UI.createButton({
		backgroundImage: '/images/header_under/header_btn3(178,83).png',
		top: (uiconfig.HEADER_UNDER_HEIGHT - uiconfig.THEME_BUTTON_HEIGHT) *1.5,
		right:uiconfig.THEME_BUTTON_WIDTH + (width -uiconfig.THEME_BUTTON_WIDTH *4) *0.4,
		width: uiconfig.THEME_BUTTON_WIDTH,
		height:uiconfig.THEME_BUTTON_HEIGHT

	});
	
	theme_buttons_view.add(header_comment_button);

	var header_template_button = Ti.UI.createButton({
		backgroundImage: '/images/header_under/header_btn4(179,83).png',
		top: (uiconfig.HEADER_UNDER_HEIGHT - uiconfig.THEME_BUTTON_HEIGHT) *1.5,
		right: (width -uiconfig.THEME_BUTTON_WIDTH *4) *0.2,
		width: uiconfig.THEME_BUTTON_WIDTH,
		height:uiconfig.THEME_BUTTON_HEIGHT
	});
	theme_buttons_view.add(header_template_button);
		
	base_window.upperRibbon = upperRibbon;
	base_window.underRibbon = underRibbon;
	
	function moveOptionView(move){
		if(move == 'open'){
			base_view.animate({center:{x:width *1.2,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_OPEN_DURING});
		}
		if(move == 'close'){
			base_view.animate({center:{x:width * 0.5,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_CLOSE_DURING});
		}
	}
	
	
	var option_button = Ti.UI.createButton({
		backgroundImage: '/images/header/menu_btn(50,42).png',
		center:{x:width *0.07,y:upperRibbon.height *0.5},
		width: uiconfig.OPTION_BUTTON_WIDTH,
		height: uiconfig.OPTION_BUTTON_HEIGHT
	});

	base_view.add(option_button);
	
	option_button.addEventListener('click',function(event){
		if(base_view.center.x == width *0.5){
			moveOptionView('open');
		}else{
			moveOptionView('close');
		}
	});
	
	var search_button = Ti.UI.createButton({
		backgroundImage: '/images/header/search_icon(62,62).png',
		center: {x:width *0.9, y:upperRibbon.height *0.5},
		width: uiconfig.SEARCH_BUTTON_WIDTH,
		height: uiconfig.SEARCH_BUTTON_HEIGHT
	});
	
	search_button.addEventListener('click',function(event){
		require('/SearchWin').openSearchWindow();
	});
	
	base_view.add(search_button);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_view.add(title_label);
	

	/*
	 * スワップのスタートポイントを記録し、話した時の差分からスワップ処理を行うか否かの判断を行う
	 * 
	 */
	base_view.addEventListener('touchstart',function(event){
		base_window.win_touch_p.x = event.x;
		base_window.win_touch_p.y = event.y;
		
	});
	
	base_view.addEventListener('touchend',function(event){
		/*
		 * 左右のスワップにおける差分から水平スワップを検出する
		 */
		if(event.x - base_window.win_touch_p.x > width *0.6){
			//moveOptionView('open');
			//option_view.center = {x:width *0.45,y:height *0.5};	
		}
		
		if(base_window.win_touch_p.x - event.x > width *0.6){
			
			moveOptionView('close');
			//option_view.center = {x:width * -0.5,y:height *0.5};
		}
		
		/*
		 * 上下のスワップにおける差分から鉛直スワップを検出する
		 */
		if(event.y- base_window.win_touch_p.y > height *0.3){
			
			//theme_buttons_view.animate({top:0.07*height,duration:200});
		}
		
		if(base_window.win_touch_p.y - event.y > height *0.3){
			
			//theme_buttons_view.animate({top:-0.3*height,duration:200});
		}


		base_window.win_touch_p = {x:0,y:0};
		
		
	});


	base_view.add(require('/CreateCommonParts').createHomeButton());

	base_view.add(require('/CreateCommonParts').createListButton());	
	
	base_view.add(require('/CreateCommonParts').createPeopleButton());	


	/* 
	 * ここからビューの中身を定義
	 */
	
	/*
	 * 画像ピッカーを表示するためのスニペット
	 * 
		var addImageButton= new require('/UsingMedia/imageFrame/MenuProjectFrame')();
		base_view.add(addImageButton);
	*/
	
	
	return base_window;
};
