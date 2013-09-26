/**
 * @author 佐々木 友弘
 */
uiconfig = require('/uiconfig');
exports.EditPicturewindow = function(imagePath,selectNumber) {
	//デバック用のアラート
	//alert(selectNumber);
	
	//4コマの画面を保存する配列を初期
	var ArrayParameter = require("ArrayParameter");
	var mangaArray = ArrayParameter.return_array();
	var textArray = ArrayParameter.return_text_array();
	
	//ベースの画面を作成
	var base_window = Titanium.UI.createWindow({
		backgroundColor : '#31333f',
		exitOnClose : false,
		fullscreen : true,
		//navBarHidden : true,
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	/*
	 * ヘッダ作成
	 */
	var upperRibbon = Titanium.UI.createImageView({
			image:'/images/header/header_bg.png',
			width: Ti.UI.FILL,
			height: uiconfig.HEADER_RIBBON_HEIGHT,
			top: 0,
	});
	
	// 戻るボタン
	var back_button = Ti.UI.createButton({
		backgroundImage: '/images/header/back_btn_black.png',
		center:{x:width *0.1,y:upperRibbon.height *0.5},
		// width: uiconfig.OPTION_BUTTON_WIDTH,
		// height: uiconfig.OPTION_BUTTON_HEIGHT
		width: width *(100/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
	});
	
	// 完了ボタン
	var complete_button = Ti.UI.createButton({
		backgroundImage: '/images/header/complete_btn.png',
		center: {x:width *0.9, y:upperRibbon.height *0.5},
		// width: uiconfig.SEARCH_BUTTON_WIDTH,
		// height: uiconfig.SEARCH_BUTTON_HEIGHT
		width: width *(100/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
	});

	// 画像編集ラベル
	var titel_label = Ti.UI.createLabel({
		text: '画像編集',
		color: 'rgb(255,255,255)',
		font:{fontSize:20, fontWeight:'bold'},
		top: upperRibbon.height *0.25
	});
	
	base_window.add(upperRibbon);
	base_window.add(back_button);
	base_window.add(complete_button);
	base_window.add(titel_label);
	/*
	 * ヘッダ作成ここまで
	 */
	
	/*
	 * フッタ作成
	 */
	var underRibbon = Titanium.UI.createImageView({
		image: '/images/footer/footer_bg_edit.png',
		width:Titanium.UI.FILL,
		//height: 99,
		height: height *(99/uiconfig.ACTUAL_HEIGHT),
		bottom: 0
	});
	
	// 回転
	var roll_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/before_roll.png',
		bottom: 0,
		left: 0,
		width: width *(143/uiconfig.ACTUAL_WIDTH),
		height: height *(97/uiconfig.ACTUAL_HEIGHT),
	});
	
	// エフェクト
	var effect_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/before_effect.png',
		bottom: 0,
		left: width *0.2,
		width: width *(143/uiconfig.ACTUAL_WIDTH),
		height: height *(97/uiconfig.ACTUAL_HEIGHT),
	});
	
	// スタンプ
	var stamp_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/before_stamp.png',
		bottom: 0,
		left: width *0.4,
		width: width *(143/uiconfig.ACTUAL_WIDTH),
		height: height *(97/uiconfig.ACTUAL_HEIGHT),
	});
	
	// ブラシ
	var brush_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/before_brush.png',
		bottom: 0,
		left: width *0.6,
		width: width *(143/uiconfig.ACTUAL_WIDTH),
		height: height *(97/uiconfig.ACTUAL_HEIGHT),
	});
	
	// テキスト
	var text_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/before_text.png',
		bottom: 0,
		left: width *0.8,
		width: width *(143/uiconfig.ACTUAL_WIDTH),
		height: height *(97/uiconfig.ACTUAL_HEIGHT),
	});
	
	base_window.add(underRibbon);
	base_window.add(roll_button);
	base_window.add(effect_button);
	base_window.add(stamp_button);
	base_window.add(brush_button);
	base_window.add(text_button);
	/*
	 * フッタ作成ここまで
	 */
	
	// 画像のベースビュー
	var picture_window = Ti.UI.createView({
			width:700,
			height:350,
			top:uiconfig.HEADER_RIBBON_HEIGHT * 2,
			bottom: (uiconfig.HEADER_RIBBON_HEIGHT * 1.1 + 400/*this.height*/) *1.05,
			center:width/2,	
	});
	
	// 画像
	var editPicture = Ti.UI.createImageView({
			image:imagePath,
	});
	
	picture_window.add(editPicture);
	base_window.add(picture_window);

	// コメント、セリフ入力
	var comment_text = Ti.UI.createTextArea({
		color:'#336699',
		//center: {x:width * 0.40},
		//bottom: ((height * 99 / uiconfig.ACTUAL_HEIGHT) + 100) *1.1,
		bottom: underRibbon.height *2,
		width:width * 0.7,
		height:100,
		hintText:'コメントを追加できます',
		font:{fontSize:20, fontWeight:'bold'},
		navBarHidden:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	base_window.add(comment_text);

	//編集した画像のパスを選択したコマに入れる
	var editImagePath = imagePath;
	mangaArray[selectNumber] = imagePath;
	
	comment_text.addEventListener('change', function(e) {
		textArray[selectNumber] = comment_text.value;
	});
	
	//編集を完了して4コマ選択画面に移動
	complete_button.addEventListener("click",function(event){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();	
	});
	
	return base_window;
};

