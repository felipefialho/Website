/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe008;',
			'icon-home-2' : '&#xe000;',
			'icon-home-3' : '&#xe001;',
			'icon-office' : '&#xe002;',
			'icon-newspaper' : '&#xe003;',
			'icon-pencil' : '&#xe004;',
			'icon-pencil-2' : '&#xe005;',
			'icon-quill' : '&#xe006;',
			'icon-pen' : '&#xe007;',
			'icon-blog' : '&#xe009;',
			'icon-droplet' : '&#xe00a;',
			'icon-paint-format' : '&#xe00b;',
			'icon-image' : '&#xe00c;',
			'icon-image-2' : '&#xe00d;',
			'icon-images' : '&#xe00e;',
			'icon-camera' : '&#xe00f;',
			'icon-camera-2' : '&#xe010;',
			'icon-dice' : '&#xe011;',
			'icon-pacman' : '&#xe012;',
			'icon-spades' : '&#xe013;',
			'icon-clubs' : '&#xe014;',
			'icon-diamonds' : '&#xe015;',
			'icon-pawn' : '&#xe016;',
			'icon-bullhorn' : '&#xe017;',
			'icon-connection' : '&#xe018;',
			'icon-podcast' : '&#xe019;',
			'icon-feed' : '&#xe01a;',
			'icon-book' : '&#xe01b;',
			'icon-books' : '&#xe01c;',
			'icon-library' : '&#xe01d;',
			'icon-file' : '&#xe01e;',
			'icon-profile' : '&#xe01f;',
			'icon-copy' : '&#xe020;',
			'icon-copy-2' : '&#xe021;',
			'icon-paste' : '&#xe022;',
			'icon-paste-2' : '&#xe023;',
			'icon-paste-3' : '&#xe024;',
			'icon-stack' : '&#xe025;',
			'icon-folder' : '&#xe026;',
			'icon-folder-open' : '&#xe027;',
			'icon-tag' : '&#xe028;',
			'icon-tags' : '&#xe029;',
			'icon-barcode' : '&#xe02a;',
			'icon-qrcode' : '&#xe02b;',
			'icon-ticket' : '&#xe02c;',
			'icon-cart' : '&#xe02d;',
			'icon-cart-2' : '&#xe02e;',
			'icon-cart-3' : '&#xe02f;',
			'icon-phone' : '&#xe030;',
			'icon-phone-hang-up' : '&#xe031;',
			'icon-address-book' : '&#xe032;',
			'icon-notebook' : '&#xe033;',
			'icon-envelop' : '&#xe034;',
			'icon-pushpin' : '&#xe035;',
			'icon-location' : '&#xe036;',
			'icon-location-2' : '&#xe037;',
			'icon-compass' : '&#xe038;',
			'icon-map' : '&#xe039;',
			'icon-map-2' : '&#xe03a;',
			'icon-history' : '&#xe03b;',
			'icon-clock' : '&#xe03c;',
			'icon-clock-2' : '&#xe03d;',
			'icon-alarm' : '&#xe03e;',
			'icon-alarm-2' : '&#xe03f;',
			'icon-print' : '&#xe040;',
			'icon-keyboard' : '&#xe041;',
			'icon-screen' : '&#xe042;',
			'icon-laptop' : '&#xe043;',
			'icon-mobile' : '&#xe044;',
			'icon-mobile-2' : '&#xe045;',
			'icon-tablet' : '&#xe046;',
			'icon-tv' : '&#xe047;',
			'icon-cabinet' : '&#xe048;',
			'icon-drawer' : '&#xe049;',
			'icon-drawer-2' : '&#xe04a;',
			'icon-drawer-3' : '&#xe04b;',
			'icon-box-add' : '&#xe04c;',
			'icon-box-remove' : '&#xe04d;',
			'icon-download' : '&#xe04e;',
			'icon-upload' : '&#xe04f;',
			'icon-flip' : '&#xe050;',
			'icon-flip-2' : '&#xe051;',
			'icon-undo' : '&#xe052;',
			'icon-redo' : '&#xe053;',
			'icon-forward' : '&#xe054;',
			'icon-reply' : '&#xe055;',
			'icon-bubble' : '&#xe056;',
			'icon-bubbles' : '&#xe057;',
			'icon-bubbles-2' : '&#xe058;',
			'icon-bubble-2' : '&#xe059;',
			'icon-bubbles-3' : '&#xe05a;',
			'icon-bubbles-4' : '&#xe05b;',
			'icon-user' : '&#xe05c;',
			'icon-users' : '&#xe05d;',
			'icon-user-2' : '&#xe05e;',
			'icon-users-2' : '&#xe05f;',
			'icon-spinner' : '&#xe060;',
			'icon-spinner-2' : '&#xe061;',
			'icon-spinner-3' : '&#xe062;',
			'icon-spinner-4' : '&#xe063;',
			'icon-spinner-5' : '&#xe064;',
			'icon-spinner-6' : '&#xe065;',
			'icon-binoculars' : '&#xe066;',
			'icon-search' : '&#xe067;',
			'icon-zoom-in' : '&#xe068;',
			'icon-zoom-out' : '&#xe069;',
			'icon-expand' : '&#xe06a;',
			'icon-contract' : '&#xe06b;',
			'icon-expand-2' : '&#xe06c;',
			'icon-contract-2' : '&#xe06d;',
			'icon-key' : '&#xe06e;',
			'icon-key-2' : '&#xe06f;',
			'icon-settings' : '&#xe070;',
			'icon-equalizer' : '&#xe071;',
			'icon-cog' : '&#xe072;',
			'icon-cogs' : '&#xe073;',
			'icon-cog-2' : '&#xe074;',
			'icon-hammer' : '&#xe075;',
			'icon-wand' : '&#xe076;',
			'icon-aid' : '&#xe077;',
			'icon-bug' : '&#xe078;',
			'icon-pie' : '&#xe079;',
			'icon-stats' : '&#xe07a;',
			'icon-bars' : '&#xe07b;',
			'icon-bars-2' : '&#xe07c;',
			'icon-gift' : '&#xe07d;',
			'icon-trophy' : '&#xe07e;',
			'icon-glass' : '&#xe07f;',
			'icon-meter' : '&#xe080;',
			'icon-meter2' : '&#xe081;',
			'icon-dashboard' : '&#xe082;',
			'icon-hammer-2' : '&#xe083;',
			'icon-fire' : '&#xe084;',
			'icon-lab' : '&#xe085;',
			'icon-magnet' : '&#xe086;',
			'icon-remove' : '&#xe087;',
			'icon-remove-2' : '&#xe088;',
			'icon-briefcase' : '&#xe089;',
			'icon-airplane' : '&#xe08a;',
			'icon-truck' : '&#xe08b;',
			'icon-road' : '&#xe08c;',
			'icon-accessibility' : '&#xe08d;',
			'icon-target' : '&#xe08e;',
			'icon-shield' : '&#xe08f;',
			'icon-list' : '&#xe090;',
			'icon-list-2' : '&#xe091;',
			'icon-numbered-list' : '&#xe092;',
			'icon-menu' : '&#xe093;',
			'icon-menu-2' : '&#xe094;',
			'icon-tree' : '&#xe095;',
			'icon-cloud' : '&#xe096;',
			'icon-cloud-download' : '&#xe097;',
			'icon-cloud-upload' : '&#xe098;',
			'icon-download-2' : '&#xe099;',
			'icon-upload-2' : '&#xe09a;',
			'icon-download-3' : '&#xe09b;',
			'icon-upload-3' : '&#xe09c;',
			'icon-globe' : '&#xe09d;',
			'icon-earth' : '&#xe09e;',
			'icon-link' : '&#xe09f;',
			'icon-eye' : '&#xe0a0;',
			'icon-bookmark' : '&#xe0a1;',
			'icon-bookmarks' : '&#xe0a2;',
			'icon-brightness-medium' : '&#xe0a3;',
			'icon-brightness-contrast' : '&#xe0a4;',
			'icon-contrast' : '&#xe0a5;',
			'icon-star' : '&#xe0a6;',
			'icon-star-2' : '&#xe0a7;',
			'icon-star-3' : '&#xe0a8;',
			'icon-heart' : '&#xe0a9;',
			'icon-heart-2' : '&#xe0aa;',
			'icon-heart-broken' : '&#xe0ab;',
			'icon-thumbs-up' : '&#xe0ac;',
			'icon-thumbs-up-2' : '&#xe0ad;',
			'icon-happy' : '&#xe0ae;',
			'icon-happy-2' : '&#xe0af;',
			'icon-sad' : '&#xe0b0;',
			'icon-sad-2' : '&#xe0b1;',
			'icon-wink' : '&#xe0b2;',
			'icon-wink-2' : '&#xe0b3;',
			'icon-grin' : '&#xe0b4;',
			'icon-grin-2' : '&#xe0b5;',
			'icon-cool' : '&#xe0b6;',
			'icon-cool-2' : '&#xe0b7;',
			'icon-angry' : '&#xe0b8;',
			'icon-angry-2' : '&#xe0b9;',
			'icon-evil' : '&#xe0ba;',
			'icon-evil-2' : '&#xe0bb;',
			'icon-shocked' : '&#xe0bc;',
			'icon-shocked-2' : '&#xe0bd;',
			'icon-confused' : '&#xe0be;',
			'icon-confused-2' : '&#xe0bf;',
			'icon-point-up' : '&#xe0c0;',
			'icon-point-right' : '&#xe0c1;',
			'icon-point-down' : '&#xe0c2;',
			'icon-point-left' : '&#xe0c3;',
			'icon-warning' : '&#xe0c4;',
			'icon-notification' : '&#xe0c5;',
			'icon-question' : '&#xe0c6;',
			'icon-info' : '&#xe0c7;',
			'icon-info-2' : '&#xe0c8;',
			'icon-blocked' : '&#xe0c9;',
			'icon-cancel-circle' : '&#xe0ca;',
			'icon-checkmark-circle' : '&#xe0cb;',
			'icon-spam' : '&#xe0cc;',
			'icon-close' : '&#xe0cd;',
			'icon-checkmark' : '&#xe0ce;',
			'icon-checkmark-2' : '&#xe0cf;',
			'icon-exit' : '&#xe0d0;',
			'icon-play' : '&#xe0d1;',
			'icon-pause' : '&#xe0d2;',
			'icon-stop' : '&#xe0d3;',
			'icon-backward' : '&#xe0d4;',
			'icon-forward-2' : '&#xe0d5;',
			'icon-pause-2' : '&#xe0d7;',
			'icon-stop-2' : '&#xe0d8;',
			'icon-backward-2' : '&#xe0d9;',
			'icon-forward-3' : '&#xe0da;',
			'icon-first' : '&#xe0db;',
			'icon-last' : '&#xe0dc;',
			'icon-previous' : '&#xe0dd;',
			'icon-next' : '&#xe0de;',
			'icon-eject' : '&#xe0df;',
			'icon-volume-mute' : '&#xe0e0;',
			'icon-volume-increase' : '&#xe0e1;',
			'icon-volume-decrease' : '&#xe0e2;',
			'icon-loop' : '&#xe0e3;',
			'icon-loop-2' : '&#xe0e4;',
			'icon-loop-3' : '&#xe0e5;',
			'icon-shuffle' : '&#xe0e6;',
			'icon-arrow-up-left' : '&#xe0e7;',
			'icon-arrow-up' : '&#xe0e8;',
			'icon-arrow-up-right' : '&#xe0e9;',
			'icon-arrow-right' : '&#xe0ea;',
			'icon-arrow-down-right' : '&#xe0eb;',
			'icon-arrow-down' : '&#xe0ec;',
			'icon-arrow-down-left' : '&#xe0ed;',
			'icon-arrow-left' : '&#xe0ee;',
			'icon-arrow-up-left-2' : '&#xe0ef;',
			'icon-arrow-down-2' : '&#xe0f0;',
			'icon-arrow-down-left-2' : '&#xe0f1;',
			'icon-arrow-left-2' : '&#xe0f2;',
			'icon-arrow-up-left-3' : '&#xe0f3;',
			'icon-arrow-up-2' : '&#xe0f4;',
			'icon-arrow-up-right-2' : '&#xe0f5;',
			'icon-arrow-right-2' : '&#xe0f6;',
			'icon-arrow-down-right-2' : '&#xe0f7;',
			'icon-arrow-down-3' : '&#xe0f8;',
			'icon-arrow-down-left-3' : '&#xe0f9;',
			'icon-arrow-left-3' : '&#xe0fa;',
			'icon-tab' : '&#xe0fb;',
			'icon-checkbox-checked' : '&#xe0fc;',
			'icon-checkbox-unchecked' : '&#xe0fd;',
			'icon-checkbox-partial' : '&#xe0fe;',
			'icon-radio-checked' : '&#xe0ff;',
			'icon-filter' : '&#xe100;',
			'icon-font' : '&#xe101;',
			'icon-text-height' : '&#xe102;',
			'icon-text-width' : '&#xe103;',
			'icon-bold' : '&#xe104;',
			'icon-underline' : '&#xe105;',
			'icon-italic' : '&#xe106;',
			'icon-strikethrough' : '&#xe107;',
			'icon-omega' : '&#xe108;',
			'icon-sigma' : '&#xe109;',
			'icon-table' : '&#xe10a;',
			'icon-table-2' : '&#xe10b;',
			'icon-insert-template' : '&#xe10c;',
			'icon-pilcrow' : '&#xe10d;',
			'icon-left-to-right' : '&#xe10e;',
			'icon-right-to-left' : '&#xe10f;',
			'icon-paragraph-left' : '&#xe110;',
			'icon-paragraph-center' : '&#xe111;',
			'icon-paragraph-right' : '&#xe112;',
			'icon-paragraph-justify' : '&#xe113;',
			'icon-indent-increase' : '&#xe114;',
			'icon-indent-decrease' : '&#xe115;',
			'icon-new-tab' : '&#xe116;',
			'icon-embed' : '&#xe117;',
			'icon-code' : '&#xe118;',
			'icon-console' : '&#xe119;',
			'icon-share' : '&#xe11a;',
			'icon-mail' : '&#xe11b;',
			'icon-mail-2' : '&#xe11c;',
			'icon-mail-3' : '&#xe11d;',
			'icon-mail-4' : '&#xe11e;',
			'icon-google' : '&#xe11f;',
			'icon-google-drive' : '&#xe120;',
			'icon-facebook' : '&#xe121;',
			'icon-facebook-2' : '&#xe122;',
			'icon-facebook-3' : '&#xe123;',
			'icon-instagram' : '&#xe124;',
			'icon-twitter' : '&#xe125;',
			'icon-twitter-2' : '&#xe126;',
			'icon-twitter-3' : '&#xe127;',
			'icon-feed-2' : '&#xe128;',
			'icon-feed-3' : '&#xe129;',
			'icon-feed-4' : '&#xe12a;',
			'icon-youtube' : '&#xe12b;',
			'icon-youtube-2' : '&#xe12c;',
			'icon-vimeo' : '&#xe12d;',
			'icon-vimeo2' : '&#xe12e;',
			'icon-vimeo-2' : '&#xe12f;',
			'icon-flickr' : '&#xe130;',
			'icon-picassa' : '&#xe131;',
			'icon-picassa-2' : '&#xe132;',
			'icon-dribbble' : '&#xe133;',
			'icon-dribbble-2' : '&#xe134;',
			'icon-dribbble-3' : '&#xe135;',
			'icon-forrst' : '&#xe136;',
			'icon-forrst-2' : '&#xe137;',
			'icon-deviantart' : '&#xe138;',
			'icon-deviantart-2' : '&#xe139;',
			'icon-steam' : '&#xe13a;',
			'icon-steam-2' : '&#xe13b;',
			'icon-github' : '&#xe13c;',
			'icon-github-2' : '&#xe13d;',
			'icon-github-3' : '&#xe13e;',
			'icon-github-4' : '&#xe13f;',
			'icon-blogger' : '&#xe140;',
			'icon-blogger-2' : '&#xe141;',
			'icon-tumblr' : '&#xe142;',
			'icon-tumblr-2' : '&#xe143;',
			'icon-yahoo' : '&#xe144;',
			'icon-tux' : '&#xe145;',
			'icon-apple' : '&#xe146;',
			'icon-finder' : '&#xe147;',
			'icon-android' : '&#xe148;',
			'icon-windows' : '&#xe149;',
			'icon-windows8' : '&#xe14a;',
			'icon-soundcloud' : '&#xe14b;',
			'icon-soundcloud-2' : '&#xe14c;',
			'icon-skype' : '&#xe14d;',
			'icon-reddit' : '&#xe14e;',
			'icon-linkedin' : '&#xe14f;',
			'icon-stumbleupon' : '&#xe150;',
			'icon-stackoverflow' : '&#xe151;',
			'icon-pinterest' : '&#xe152;',
			'icon-pinterest-2' : '&#xe153;',
			'icon-xing' : '&#xe154;',
			'icon-xing-2' : '&#xe155;',
			'icon-flattr' : '&#xe156;',
			'icon-foursquare' : '&#xe157;',
			'icon-foursquare-2' : '&#xe158;',
			'icon-paypal' : '&#xe159;',
			'icon-paypal-2' : '&#xe15a;',
			'icon-paypal-3' : '&#xe15b;',
			'icon-yelp' : '&#xe15c;',
			'icon-libreoffice' : '&#xe15d;',
			'icon-file-pdf' : '&#xe15e;',
			'icon-file-openoffice' : '&#xe15f;',
			'icon-file-xml' : '&#xe160;',
			'icon-file-css' : '&#xe161;',
			'icon-html5' : '&#xe162;',
			'icon-html5-2' : '&#xe163;',
			'icon-css3' : '&#xe164;',
			'icon-chrome' : '&#xe165;',
			'icon-firefox' : '&#xe166;',
			'icon-IE' : '&#xe167;',
			'icon-opera' : '&#xe168;',
			'icon-safari' : '&#xe169;',
			'icon-IcoMoon' : '&#xe16a;',
			'icon-music' : '&#xe16b;',
			'icon-headphones' : '&#xe16c;',
			'icon-play-2' : '&#xe16d;',
			'icon-film' : '&#xe16e;',
			'icon-file-2' : '&#xe16f;',
			'icon-file-3' : '&#xe170;',
			'icon-file-4' : '&#xe171;',
			'icon-copy-3' : '&#xe172;',
			'icon-coin' : '&#xe173;',
			'icon-credit' : '&#xe174;',
			'icon-calculate' : '&#xe175;',
			'icon-support' : '&#xe176;',
			'icon-bell' : '&#xe177;',
			'icon-stopwatch' : '&#xe178;',
			'icon-calendar' : '&#xe179;',
			'icon-calendar-2' : '&#xe17a;',
			'icon-disk' : '&#xe17b;',
			'icon-storage' : '&#xe17c;',
			'icon-undo-2' : '&#xe17d;',
			'icon-redo-2' : '&#xe17e;',
			'icon-user-3' : '&#xe17f;',
			'icon-user-4' : '&#xe180;',
			'icon-quotes-left' : '&#xe181;',
			'icon-busy' : '&#xe182;',
			'icon-lock' : '&#xe183;',
			'icon-lock-2' : '&#xe184;',
			'icon-unlocked' : '&#xe185;',
			'icon-wrench' : '&#xe186;',
			'icon-mug' : '&#xe187;',
			'icon-food' : '&#xe188;',
			'icon-leaf' : '&#xe189;',
			'icon-rocket' : '&#xe18a;',
			'icon-lightning' : '&#xe18b;',
			'icon-switch' : '&#xe18c;',
			'icon-power-cord' : '&#xe18d;',
			'icon-signup' : '&#xe18e;',
			'icon-flag' : '&#xe18f;',
			'icon-attachment' : '&#xe190;',
			'icon-eye-2' : '&#xe191;',
			'icon-eye-blocked' : '&#xe192;',
			'icon-smiley' : '&#xe193;',
			'icon-smiley-2' : '&#xe194;',
			'icon-tongue' : '&#xe195;',
			'icon-tongue-2' : '&#xe196;',
			'icon-neutral' : '&#xe197;',
			'icon-neutral-2' : '&#xe198;',
			'icon-wondering' : '&#xe199;',
			'icon-wondering-2' : '&#xe19a;',
			'icon-spell-check' : '&#xe19b;',
			'icon-minus' : '&#xe19c;',
			'icon-plus' : '&#xe19d;',
			'icon-enter' : '&#xe19e;',
			'icon-volume-high' : '&#xe19f;',
			'icon-volume-medium' : '&#xe1a0;',
			'icon-volume-low' : '&#xe1a1;',
			'icon-volume-mute-2' : '&#xe1a2;',
			'icon-arrow-up-3' : '&#xe1a3;',
			'icon-arrow-up-right-3' : '&#xe1a4;',
			'icon-arrow-right-3' : '&#xe1a5;',
			'icon-arrow-down-right-3' : '&#xe1a6;',
			'icon-radio-unchecked' : '&#xe1a7;',
			'icon-crop' : '&#xe1a8;',
			'icon-scissors' : '&#xe1a9;',
			'icon-filter-2' : '&#xe1aa;',
			'icon-paragraph-left-2' : '&#xe1ab;',
			'icon-paragraph-center-2' : '&#xe1ac;',
			'icon-paragraph-right-2' : '&#xe1ad;',
			'icon-paragraph-justify-2' : '&#xe1ae;',
			'icon-google-plus' : '&#xe1af;',
			'icon-google-plus-2' : '&#xe1b0;',
			'icon-google-plus-3' : '&#xe1b1;',
			'icon-google-plus-4' : '&#xe1b2;',
			'icon-lanyrd' : '&#xe1b3;',
			'icon-flickr-2' : '&#xe1b4;',
			'icon-flickr-3' : '&#xe1b5;',
			'icon-flickr-4' : '&#xe1b6;',
			'icon-github-5' : '&#xe1b7;',
			'icon-wordpress' : '&#xe1b8;',
			'icon-wordpress-2' : '&#xe1b9;',
			'icon-joomla' : '&#xe1ba;',
			'icon-lastfm' : '&#xe1bb;',
			'icon-lastfm-2' : '&#xe1bc;',
			'icon-delicious' : '&#xe1bd;',
			'icon-stumbleupon-2' : '&#xe1be;',
			'icon-file-word' : '&#xe1bf;',
			'icon-file-excel' : '&#xe1c0;',
			'icon-file-zip' : '&#xe1c1;',
			'icon-file-powerpoint' : '&#xe1c2;',
			'icon-play-3' : '&#xe1c3;',
			'icon-play-4' : '&#xe0d6;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};