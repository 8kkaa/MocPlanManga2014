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
	
	/*
	 * ここから下に中身の実装を行う
	 * 
	 */
	
	//4コマの画像のパスを格納する配列
	var ArrayParameter = require("ArrayParameter");
	var mangaArray = ArrayParameter.return_array();
	
	// //4コマ入力を行ってもらうメッセージ
	// var message_label = Ti.UI.createLabel({
		// text:'４コマを選択して下さい',
		// height:40,
		// center:width/2,
		// top:uiconfig.HEADER_RIBBON_HEIGHT,
		// font : {
			// fontSize : 28
		// }
	// });
					
	//1コマ目の画像
	var selectphoto1 = Ti.UI.createImageView({
			image:mangaArray[0],
			width: width *(480/uiconfig.ACTUAL_WIDTH),
			height: height *(200/uiconfig.ACTUAL_HEIGHT),
			top:uiconfig.HEADER_RIBBON_HEIGHT + 60,

	});
	
	//2コマ目の画像
	var selectphoto2 = Ti.UI.createImageView({
			image:mangaArray[1],
			width: width *(480/uiconfig.ACTUAL_WIDTH),
			height: height *(200/uiconfig.ACTUAL_HEIGHT),
			top: selectphoto1.top + selectphoto1.height

	});
	
	//3コマ目の画像
	var selectphoto3 = Ti.UI.createImageView({
			image:mangaArray[2],
			width: width *(480/uiconfig.ACTUAL_WIDTH),
			height: height *(200/uiconfig.ACTUAL_HEIGHT),
			//top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height*2 + 60,
			top: selectphoto2.top + selectphoto2.height
	});
	
	//4コマ目の画像
	var selectphoto4 = Ti.UI.createImageView({
			image:mangaArray[3],
			width: width *(480/uiconfig.ACTUAL_WIDTH),
			height: height *(200/uiconfig.ACTUAL_HEIGHT),
			top: selectphoto3.top + selectphoto3.height
	});
	
	//タイトルメッセージ
	var title_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/title.jpg',
		width: width *(260/uiconfig.ACTUAL_WIDTH),
		height: height *(50/uiconfig.ACTUAL_HEIGHT),
		left: (width - selectphoto1.width) * 0.5,
		top: selectphoto1.top - height *(50/uiconfig.ACTUAL_HEIGHT),
	});
	
	//4コマ入力を行ってもらうメッセージ
	var message_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/message.png',
		width: width *(480/uiconfig.ACTUAL_WIDTH),
		height: height *(65/uiconfig.ACTUAL_HEIGHT),
		//left: (width - selectphoto1.width) * 0.5,
		top: selectphoto4.top + selectphoto4.height + 10
	});
	
	//4コマ入力部分の外枠
	var outline_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/title_outline.png',
		width: width *(490/uiconfig.ACTUAL_WIDTH),
		height: height *(220/uiconfig.ACTUAL_HEIGHT),
		//left: (width - selectphoto1.width) * 0.5,
		top: message_view.top + message_view.height
	});
	
	//4コマ入力部分の外枠
	var input_view = Ti.UI.createImageView({
		image:'/images/createNewMangaWindow_Design/input_title.png',
		width: width *(400/uiconfig.ACTUAL_WIDTH),
		height: height *(55/uiconfig.ACTUAL_HEIGHT),
		top: outline_view.top + 10
	});
	
	//4コマを投稿するボタン	
	var send_button = Ti.UI.createButton({
		backgroundImage: '/images/createNewMangaWindow_Design/post_btn.png',
		width: width *(95/uiconfig.ACTUAL_WIDTH),
		height: height *(35/uiconfig.ACTUAL_HEIGHT),
		left: (width - input_view.width) *0.5,
		top: input_view.top + input_view.height + 10
	});
	
	//タイトルを作成するテキストボックス
	var input_title = Ti.UI.createTextField({
		backgroundColor:'rgb(255,235,150)',
		//focusable:false,
		color:'#336699',
		//top: input_view.top + input_view.height,
		top: 2000,
		center:width/2,	
		width:width * 4/5,
		height:100,
		hintText:'4コマのタイトルを入力してください',
		font:{fontSize:20, fontWeight:'bold'},
		/*navBarHidden:true,
		*/
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// //4コマを投稿する画面	
	// var send_button = Ti.UI.createButton({
		// title: '投稿',
		// width:width *0.5,
		// height:100,
		// top:2000,
		// center:width/2,	
	// });
	
	//UI素材をスクロール画面にadd
	main_scroll_base_view.add(selectphoto1);
	main_scroll_base_view.add(selectphoto2);
	main_scroll_base_view.add(selectphoto3);
	main_scroll_base_view.add(selectphoto4);
	main_scroll_base_view.add(title_view);
	main_scroll_base_view.add(message_view);
	main_scroll_base_view.add(outline_view);
	main_scroll_base_view.add(input_view);
	main_scroll_base_view.add(send_button);
	main_scroll_base_view.add(input_title);	


	

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

