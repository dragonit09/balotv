/*!
 * BaloTV Player
 * Using MediaElement.js
 *
 * Copyright 2019, Dragonit09 (https://www.facebook.com/pdnghia)
 * License: MIT
 *
 */
var BaloTV = new function(){
	this.stretching = '';
	this.playerId = '';
	this.language = '';
	this.callPlayer = function(playerId, stretching, language){

        this.stretching = stretching;
        this.playerId = playerId;
        this.language = language;
        this.loadPlayer();
    };
    this.loadPlayer = function(){
    	mejs.i18n.language(this.language);
    	var player = new MediaElementPlayer(this.playerId, {
				pluginPath: "../build/",
				success: function(media) {
					var renderer = document.getElementById(media.id + '-rendername');
					media.addEventListener('loadedmetadata', function () {
						var src = media.originalNode.getAttribute('src').replace('&amp;', '&');
						if (src !== null && src !== undefined) {
							renderer.querySelector('.src').innerHTML = '<a href="' + src + '" target="_blank">' + src + '</a>';
							renderer.querySelector('.renderer').innerHTML = media.rendererName;
							renderer.querySelector('.error').innerHTML = '';
						}
					});

					media.addEventListener('error', function (e) {
						renderer.querySelector('.error').innerHTML = '<strong>Error</strong>: ' + e.message;
					});	
				}
			});
    }
}
document.addEventListener('DOMContentLoaded', function () {
	BaloTV.callPlayer('player1', 'responsive', 'en');
});