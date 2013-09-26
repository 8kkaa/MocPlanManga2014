/**
 * @author 佐々木 友弘
 */

exports.CreateNewMangaWindow = function() {
	
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	//ベースの画面を作成
	var base_window = Titanium.UI.createWindow({
		backgroundColor : '#fff',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true,
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	//スクロール用の画面
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:uiconfig.ACTUAL_HEIGHT * 1.2,
		backgroundColor:'rgb(255,255,255)',
	});
	
	//スクロールする
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: false,
  		showHorizontalScrollIndicator: false,
  		width: Ti.UI.FILL,
  		//top:uiconfig.HEADER_RIBBON_HEIGHT,
  		//bottom:uiconfig.HEADER_RIBBON_HEIGHT,
	});
	
	//スクロール用の画面をベースの画面にadd、main_scroll_base_viewにはパーツをaddする
	scroll_view.add(main_scroll_base_view);
	base_window.add(scroll_view);
	
	/*
	 * ヘッダ作成
	 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_window.add(upperRibbon);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_window.add(title_label);

	// 戻るボタン
	var back_button = Ti.UI.createButton({
		backgroundImage: '/images/header/back_btn.png',
		center:{x:width *0.1,y:upperRibbon.height *0.5},
		// width: uiconfig.OPTION_BUTTON_WIDTH,
		// height: uiconfig.OPTION_BUTTON_HEIGHT
		width: width *(100/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
	});
	base_window.add(back_button);
	
	// 進むボタン
	var next_button = Ti.UI.createButton({
		backgroundImage: '/images/header/next_btn.png',
		center: {x:width *0.9, y:upperRibbon.height *0.5},
		// width: uiconfig.SEARCH_BUTTON_WIDTH,
		// height: uiconfig.SEARCH_BUTTON_HEIGHT
		width: width *(100/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
	});
	base_window.add(next_button);
	
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
	
	/*
	 * ここから下に中身の実装を行う
	 * 
	 */
	
	//4コマの画像のパスを格納する配列
	var ArrayParameter = require("ArrayParameter");
	var mangaArray = ArrayParameter.return_array();
	
	// -----<1コマ目>---------------------------------------------------
	// 1コマ目全体のビュー
	var first_view = Ti.UI.createView({
		//backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(340/uiconfig.ACTUAL_HEIGHT),
		top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		borderColor: 'rgb(0,0,0)',
		borderWidth: 3
	});
	// 1コマ目の写真ビュー
	var photo_view1 = Ti.UI.createView({
		backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(240/uiconfig.ACTUAL_HEIGHT),
		top: 0
		//top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		//borderColor: 'rgb(0,0,0)',
	});
	
	// 1コマ目のコメントビュー
	var comment_view1 = Ti.UI.createView({
		backgroundColor:'rgb(255,255,255)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(100/uiconfig.ACTUAL_HEIGHT),
		top: photo_view1.top + photo_view1.height
		//top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		//borderColor: 'rgb(0,0,0)',
	});
	
	//1コマ目の画像
	var selectphoto1 = Ti.UI.createImageView({
			image:mangaArray[0],
			top: 0
	});
	
	// 1コマ目のラベル
	var label1 = Ti.UI.createLabel({
			text: '1.「テスト1」',
	});
	// -----</1コマ目>---------------------------------------------------
	
	
	// -----<2コマ目>---------------------------------------------------
	// 2コマ目全体のビュー
	var second_view = Ti.UI.createView({
		//backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(340/uiconfig.ACTUAL_HEIGHT),
		top:first_view.top + first_view.height + 10,
		borderColor: 'rgb(0,0,0)',
		borderWidth: 3
	});
	// 2コマ目の写真ビュー
	var photo_view2 = Ti.UI.createView({
		backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(240/uiconfig.ACTUAL_HEIGHT),
		top: 0
	});
	
	// 2コマ目のコメントビュー
	var comment_view2 = Ti.UI.createView({
		backgroundColor:'rgb(255,255,255)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(100/uiconfig.ACTUAL_HEIGHT),
		top: photo_view2.top + photo_view2.height
		//top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		//borderColor: 'rgb(0,0,0)',
	});
	
	//2コマ目の画像
	var selectphoto2 = Ti.UI.createImageView({
			image:mangaArray[1],
			top: 0
	});
	
	// 2コマ目のラベル
	var label2 = Ti.UI.createLabel({
			text: '2.「テスト2」',
	});
	// -----</2コマ目> ---------------------------------------------------
	
	
	// -----<3コマ目>---------------------------------------------------
	// 3コマ目全体のビュー
	var third_view = Ti.UI.createView({
		//backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(340/uiconfig.ACTUAL_HEIGHT),
		top:second_view.top + second_view.height + 10,
		borderColor: 'rgb(0,0,0)',
		borderWidth: 3
	});
	// 3コマ目の写真ビュー
	var photo_view3 = Ti.UI.createView({
		backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(240/uiconfig.ACTUAL_HEIGHT),
		top: 0
	});
	
	// 3コマ目のコメントビュー
	var comment_view3 = Ti.UI.createView({
		backgroundColor:'rgb(255,255,255)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(100/uiconfig.ACTUAL_HEIGHT),
		top: photo_view3.top + photo_view3.height
		//top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		//borderColor: 'rgb(0,0,0)',
	});
	
	//3コマ目の画像
	var selectphoto3 = Ti.UI.createImageView({
			image:mangaArray[2],
			top: 0
	});
	
	// 3コマ目のラベル
	var label3 = Ti.UI.createLabel({
			text: '3.「テスト3」',
	});
	// -----</3コマ目> ---------------------------------------------------
	
	
	// -----<4コマ目>---------------------------------------------------
	// 4コマ目全体のビュー
	var fourth_view = Ti.UI.createView({
		//backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(340/uiconfig.ACTUAL_HEIGHT),
		top:third_view.top + third_view.height + 10,
		borderColor: 'rgb(0,0,0)',
		borderWidth: 3
	});
	// 4コマ目の写真ビュー
	var photo_view4 = Ti.UI.createView({
		backgroundColor:'rgb(0,0,0)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(240/uiconfig.ACTUAL_HEIGHT),
		top: 0
	});
	
	// 4コマ目のコメントビュー
	var comment_view4 = Ti.UI.createView({
		backgroundColor:'rgb(255,255,255)',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(100/uiconfig.ACTUAL_HEIGHT),
		top: photo_view4.top + photo_view4.height
		//top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
		//borderColor: 'rgb(0,0,0)',
	});
	
	//4コマ目の画像
	var selectphoto4 = Ti.UI.createImageView({
			image:mangaArray[3],
			top: 0
	});
	
	// 4コマ目のラベル
	var label4 = Ti.UI.createLabel({
			text: '4.「テスト4」',
	});
	// -----</4コマ目> ---------------------------------------------------
	
	
	//タイトルメッセージ
	var title_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/title.jpg',
		width: width *(260/uiconfig.ACTUAL_WIDTH),
		height: height *(50/uiconfig.ACTUAL_HEIGHT),
		// width: 260,
		// height: 50,
		left: (width - first_view.width) * 0.5,
		top: first_view.top - height *(50/uiconfig.ACTUAL_HEIGHT),
	});
	
	//4コマ入力を行ってもらうメッセージ
	var message_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/message.png',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
		// width: 480,
		// height: 65,
		//left: (width - selectphoto1.width) * 0.5,
		top: fourth_view.top + fourth_view.height + 10
	});
	
	//タイトル入力部分の外枠
	var outline_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/title_outline.png',
		width: width *(490/uiconfig.ACTUAL_WIDTH),
		height: height *(220/uiconfig.ACTUAL_HEIGHT),
		// width: 490,
		// height: 220,
		//left: (width - selectphoto1.width) * 0.5,
		top: message_view.top + message_view.height
	});
	
	// //タイトル入力アイコン
	// var input_view = Ti.UI.createImageView({
		// image:'/images/createNewMangaWindow_Design/input_title.png',
		// width: width *(400/uiconfig.ACTUAL_WIDTH),
		// height: height *(55/uiconfig.ACTUAL_HEIGHT),
		// // width: 400,
		// // height: 55,
		// left: (width - selectphoto1.width) * 0.5 + 10,
		// top: outline_view.top + 20
	// });
	
	//タイトルを作成するテキストボックス
	var input_title = Ti.UI.createTextField({
		backgroundColor:'rgb(255,255,255)',
		//focusable:false,
		color:'#336699',
		top: outline_view.top + 20,
		//left: 300,
		//top: 2000,
		//center:width/2,	
		//width:width * 4/5,
		width: width *(400/uiconfig.ACTUAL_WIDTH),
		height: 50,
		hintText:'タイトル',
		font:{fontSize:20, fontWeight:'bold'},
		/*navBarHidden:true,
		*/
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	//4コマを投稿するボタン	
	var send_button = Ti.UI.createButton({
		backgroundImage: '/images/createNewMangaWindow_Design/post_btn.png',
		width: width *(110/uiconfig.ACTUAL_WIDTH),
		height: height *(52/uiconfig.ACTUAL_HEIGHT),
		// width: 95,
		// height: 35,
		left: (width - input_title.width) *0.5,
		top: input_title.top + input_title.height + 10
	});

	// //4コマを投稿する画面	
	// var send_button = Ti.UI.createButton({
		// title: '投稿',
		// width:width *0.5,
		// height:100,
		// top:2000,
		// center:width/2,	
	// });
	
	//photo_view1.add(selectphoto1);
	//photo_view2.add(selectphoto2);
	// photo_view3.add(selectphoto3);
	// photo_view4.add(selectphoto4);
	
	//UI素材をスクロール画面にadd
	//main_scroll_base_view.add(photo_view1);
	//main_scroll_base_view.add(photo_view2);
	// main_scroll_base_view.add(photo_view3);
	// main_scroll_base_view.add(photo_view4);
	main_scroll_base_view.add(title_view);
	main_scroll_base_view.add(message_view);
	main_scroll_base_view.add(outline_view);
	//main_scroll_base_view.add(input_view);
	main_scroll_base_view.add(send_button);
	main_scroll_base_view.add(input_title);	
	
	first_view.add(photo_view1);
	first_view.add(comment_view1);
	photo_view1.add(selectphoto1);
	comment_view1.add(label1);
	main_scroll_base_view.add(first_view);
	
	second_view.add(photo_view2);
	second_view.add(comment_view2);
	photo_view2.add(selectphoto2);
	comment_view2.add(label2);
	main_scroll_base_view.add(second_view);

	third_view.add(photo_view3);
	third_view.add(comment_view3);
	photo_view3.add(selectphoto3);
	comment_view3.add(label3);
	main_scroll_base_view.add(third_view);
	
	fourth_view.add(photo_view4);
	fourth_view.add(comment_view4);
	photo_view4.add(selectphoto4);
	comment_view4.add(label4);
	main_scroll_base_view.add(fourth_view);
	

	

	/*
	 * Event listener to open confirmation window
	 */
	send_button.addEventListener('click', function() {
		require('confirmWindow').createConfrimWindow().open();
	});
	
	//選択画像をタップしたときの処理
	function selectPicture(selectNumber){
		
		var dialog = Titanium.UI.createOptionDialog({
			title : 'マッチする画像を選びましょう',
			options : ['撮影する', 'ギャラリーから選択する','素材を探す',L('cancel')],
			cancel : 3
		});
		
		dialog.show();
		
		dialog.addEventListener('click', function(dialog_button) {
			
			//カメラ撮影したときの写真を使用
			if(dialog_button.index == 0) {
				//カメラを起動させる
				Titanium.Media.showCamera({
					success : function(event) {
						//取得成功時　start
						//成功時,撮影されたデータが写真かどうかの判定
						if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//仮想のディレクトリを作成
							var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'data_images');
							
							if(! dir.exists()) {
								dir.createDirectory();
							}
							//仮想のディレクトリに何も入っていない画像を作成
							var imageFile = Ti.Filesystem.getFile(dir.resolve(), require('/util/random').getRandom(10)+ '.jpg');
							//写真データを書き込む
							if(imageFile.write(event.media)){
								var imagePath = imageFile.getNativePath();
							}
							
							require("/EditPictureWindow").EditPicturewindow(imagePath,selectNumber).open();
						}
						//取得成功時　end
					},
					
					saveToPhotoGallery : true,
					allowEditing : true,
					mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]

				});
			}
			
			//デバイスに入っている画像を使用
			if(dialog_button.index == 1) {
				
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//成功時
						if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//仮想のディレクトリを作成
							var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'data_images');
							
							if(! dir.exists()) {
								dir.createDirectory();
							}
							//仮想のディレクトリに何も入っていない画像を作成
							var imageFile = Ti.Filesystem.getFile(dir.resolve(), require('/util/random').getRandom(10)+ '.jpg');
							//写真データを書き込む
							if(imageFile.write(event.media)){
								var imagePath = imageFile.getNativePath();
							}
							
							require("/EditPictureWindow").EditPicturewindow(imagePath,selectNumber).open();
						}
					}
				});
					
			}
			
			//テンプレート素材を使用
			if(dialog_button.index == 2) {				
				require("/TemplateImageView").TemplateImageView(selectNumber).open();	 
			}
		});
		
	}
	
	selectphoto1.addEventListener("click",function(event){
		selectPicture(0);
	});
				
	selectphoto2.addEventListener("click",function(event){
		selectPicture(1);
	});
	
	selectphoto3.addEventListener("click",function(event){
		selectPicture(2);
	});
	
	selectphoto4.addEventListener("click",function(event){
		selectPicture(3);
	});
	
	base_window.addEventListener('touchstart',function(event){
		input_title.blur();
	});

	return base_window;
};

