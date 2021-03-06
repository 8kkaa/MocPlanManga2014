/*
 * Confirmation window
 * Created by Kounakis Ioannis on 23/9/2013
 */

exports.createConfrimWindow = function() {
	var uiconfig = require('uiconfig');
	 	
	var baseWindow = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		orientationModes: [Titanium.UI.PORTRAIT]
	});

	/*
	 * Create the header and add the label only
	 */
	var commonParts = require('CreateCommonParts');
	
	var upperRibbon = commonParts.createUpperRibbon();
	baseWindow.add(upperRibbon);

	var titleLabel = commonParts.createTitleLabel();
	baseWindow.add(titleLabel);
	
	/*
	 * Create the footer and the associated buttons
	 */
	var underRibbon = commonParts.createUnderRibbon();
	baseWindow.add(underRibbon);
		
	var homeButton = commonParts.createHomeButton();
	baseWindow.add(homeButton);
	
	var listButton = commonParts.createListButton();
	baseWindow.add(listButton);	
	
	var peopleButton = commonParts.createPeopleButton();
	baseWindow.add(peopleButton);
	
	/*
	 * Create main view
	 */
	var ribbonsHeight = uiconfig.HEADER_RIBBON_HEIGHT;
	var mainView = Ti.UI.createView({
		backgroundColor: 'white',
		top: ribbonsHeight,
		bottom: ribbonsHeight
	});
	
	baseWindow.add(mainView);
	
	var mangaWebView = Ti.UI.createWebView({
		backgroundColor: 'blue',
		top: '5%',
		left: '5%',
		width: '90%',
		height: '45%'
	});
	
	mainView.add(mangaWebView);
	
	var originalTagLabel = 'Tags: ';
	var tagLabel = Ti.UI.createLabel({
		color: 'black',
		font: { fontSize: '14dp' },
		text: originalTagLabel,
		top: '55%',
		left: '5%',
		width: '90%'
	});
	
	mainView.add(tagLabel);
	
	var tagTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: 'Enter related tags',
		color: 'black',
		top: '60%',
		left: '5%',
		width: '65%',
		
	});
	
	mainView.add(tagTextField);
	
	var tagButton = Ti.UI.createButton({
		title: 'Add Tag',
		top: '60%',
		left: '70%',
		width: '25%'
	});
	
	tagButton.addEventListener('click', function() {
		var newTagString = tagTextField.getValue();
		var oldTagString = tagLabel.getText();
		var combinedTagString;
		
		if (newTagString.length > 0) {
			if (oldTagString.length > originalTagLabel.length) {
				combinedTagString = oldTagString + ', ' + newTagString;
				if (combinedTagString.length > 40) {
					alert('No more tags available');
					return;
				} else {
					tagLabel.setText(combinedTagString);
				}
			} else {
				combinedTagString = oldTagString + newTagString;
				if (combinedTagString.length > 40) {
					alert('Please enter a shorter tag');
					return;
				} else {
					tagLabel.setText(combinedTagString);
				}	
			}
		}
		
		tagTextField.setValue('');
	});
	
	mainView.add(tagButton);
	
	var facebookButton = Ti.UI.createButton({
		title: 'Facebook',
		top: '70%',
		left: '5%',
		width: '25%'
	});
	
	mainView.add(facebookButton);
	
	var twitterButton = Ti.UI.createButton({
		title: 'Twitter',
		top: '70%',
		left: '30%',
		width: '25%'
	});
	
	mainView.add(twitterButton);
	
	var pinterestButton = Ti.UI.createButton({
		title: 'Pinterest',
		top: '70%',
		left: '55%',
		width: '25%'
	});
	
	mainView.add(pinterestButton);
	
	var postButton = Ti.UI.createButton({
		title: 'Post',
		top: '70%',
		left: '80%',
		width: '15%'
	});
	
	mainView.add(postButton);
	
	return baseWindow;
};
