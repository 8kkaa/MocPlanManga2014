/**
 * @author 佐々木 友弘
 */

exports.EditPicturewindow = function(imagePath,selectNumber) {
	//デバック用のアラート
	alert(selectNumber);
	
	//4コマの画面を保存する配列を初期
	var ArrayParameter = require("ArrayParameter");
	var mangaArray = ArrayParameter.return_array();
	
	//ベースの画面を作成
	var base_window = Titanium.UI.createWindow({
		backgroundColor : '#fff',
		exitOnClose : false,
		fullscreen : true,
		//navBarHidden : true,
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	/*
	 * ヘッダ作成、今はロゴのみ
	 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_window.add(upperRibbon);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_window.add(title_label);

	/*
	 * ヘッダ作成ここまで
	 */
	
	/*
	 * フッタ作成、ホームボタン、作るボタン(list_button)、素材ボタン(people_button)
	 */
	var underRibbon = require('/CreateCommonParts').createUnderRibbon();
	base_window.add(underRibbon);
		
	var home_button = require('/CreateCommonParts').createHomeButton();
	base_window.add(home_button);
	
	var list_button = require('CreateCommonParts').createListButton();
	base_window.add(list_button);	
	
	var people_button = require('/CreateCommonParts').createPeopleButton();
	base_window.add(people_button);

	/*
	 * フッタ作成ここまで
	 */
	
	var editPicture = Ti.UI.createImageView({
			image:imagePath,
			width:400,
			height:400,
			top:uiconfig.HEADER_RIBBON_HEIGHT * 1.1,
			bottom: (uiconfig.HEADER_RIBBON_HEIGHT * 1.1 + 400/*this.height*/) *1.05,
			center:width/2,	
	});
	
	base_window.add(editPicture);
	
	var title_label = Ti.UI.createLabel({
		text:'たいとる',
		color: 'black',
		width:editPicture.width,
		height:120,
		top: editPicture.bottom + 10,
		textAlign:'center'
	});
	
	base_window.add(title_label);
	
	var comment_text = Ti.UI.createTextField({
		color:'#336699',
		center: {x:width * 0.40},
		bottom: ((height * 99 / uiconfig.ACTUAL_HEIGHT) + 100) *1.1,
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

	var send_button = Ti.UI.createButton({
		title: '完了',
		width:width *0.5,
		height:100,
		bottom:height * 99 / uiconfig.ACTUAL_HEIGHT,
		center:width/2,	
	});

	
	base_window.add(send_button);

	var ok_button = Ti.UI.createButton({
		title: 'OK',
		bottom: (send_button.bottom + send_button.height) *1.1,
		right: width * 0.05,
		width: 100,
		height: 120
	});
	
	base_window.add(ok_button);

	ok_button.addEventListener('click',function(){
		//alert('OK');
		var title_string = comment_text.value;
		title_label.text = title_string;
		comment_text.value = '';
	});
	
	//編集した画像のパスを選択したコマに入れる
	var editImagePath = imagePath;
	mangaArray[selectNumber] = imagePath;
	
	//編集を完了して4コマ選択画面に移動
	send_button.addEventListener("click",function(event){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();	
	});
	
	return base_window;
};

