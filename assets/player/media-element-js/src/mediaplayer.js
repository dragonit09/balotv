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
	this.playSrc = '';
	this.callPlayer = function(playerId, playSrc, autoPlay, stretching, language){

        if(stretching !== null && stretching !== undefined)
        	this.stretching = stretching;
        else 
        	this.stretching = 'responsive';   

        
        if(language !== null && language !== undefined)
        	this.language = language;
        else 
        	this.language = 'en';

        
        if((playerId !== "" || 0 !== playerId.length) ){
        	this.playerId = playerId;
        	this.playSrc = playSrc;
        	if(autoPlay !== null && autoPlay !== undefined)
        		document.getElementById(this.playerId).setAttribute("autoplay", "true"); 
      		
        	this.loadPlayer();
        }

        
    };
    this.loadPlayer = function(){
    	mejs.i18n.language(this.language);
    	var player = new MediaElementPlayer(this.playerId, {
				pluginPath: "../build/",
				videoWidth: '100%',
  				videoHeight: '100%',
				success: function(media) {
					var renderer = document.getElementById(media.id + '-rendername');
					media.addEventListener('loadedmetadata', function () {
						
					});
					media.addEventListener('error', function (e) {
						
					});	
				}
			});
    	if( (this.playSrc !== "" || 0 !== this.playSrc.length)){
    		player.setSrc(this.playSrc);
			player.load();
    	}
    	
    }
}
