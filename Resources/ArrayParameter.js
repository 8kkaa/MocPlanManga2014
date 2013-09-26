var array = new Array(4);

array[0] = '/images/createNewMangaWindow_Design/contribute_1.png';
array[1] = '/images/createNewMangaWindow_Design/contribute_2.png';
array[2] = '/images/createNewMangaWindow_Design/contribute_3.png';
array[3] = '/images/createNewMangaWindow_Design/contribute_4.png';

var text_array = new Array(4);
text_array[0] = 'セリフ or コメント';
text_array[1] = 'セリフ or コメント';
text_array[2] = 'セリフ or コメント';
text_array[3] = 'セリフ or コメント';

exports.return_array = function() {
	return array;
};

exports.return_text_array = function(){
	return text_array;
};

