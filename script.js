(function(){
    var script = {
 "definitions": [{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 158.72,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.55,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_4.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.47
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_2CB17716_3CFC_11A6_41CA_251BE8282445",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": -39.95,
 "hfov": 4.21,
 "pitch": -6.78,
 "video": {
  "mp4Url": "media/video_328B2890_3CDC_10BA_41B6_C4CE634F3721.mp4",
  "width": 1920,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_camera"
  },
  {
   "media": "this.panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_camera"
  },
  {
   "media": "this.video_328B2890_3CDC_10BA_41B6_C4CE634F3721",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_33C969A8_3CDC_10EA_41A5_71726A610BD5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_33977712_3CC4_31BE_41BF_81F05F6E829C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "JnB Karaoke & Resto - Weleri",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_328B2890_3CDC_10BA_41B6_C4CE634F3721_t.jpg",
 "width": 1920,
 "loop": false,
 "class": "Video",
 "id": "video_328B2890_3CDC_10BA_41B6_C4CE634F3721",
 "height": 1080,
 "video": {
  "mp4Url": "media/video_328B2890_3CDC_10BA_41B6_C4CE634F3721.mp4",
  "width": 1920,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_6615FA8E_6C71_001B_41B6_502DEFC52A55",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window342"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "items": [
  {
   "media": "this.video_33977712_3CC4_31BE_41BF_81F05F6E829C",
   "start": "this.viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8AA94E_6C73_001B_41B1_BDCD76EDFF49, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8AA94E_6C73_001B_41B1_BDCD76EDFF49, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273VideoPlayer)",
   "player": "this.viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273VideoPlayer"
  }
 ],
 "id": "PlayList_7D8AA94E_6C73_001B_41B1_BDCD76EDFF49",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.12,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.77
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_29ECAFB1_3CCC_10FA_41C5_54F28FFF40ED",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 13.73,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.11
},
{
 "items": [
  {
   "media": "this.video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB",
   "start": "this.viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8B294E_6C73_001B_41C8_4559D06E2876, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8B294E_6C73_001B_41C8_4559D06E2876, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97VideoPlayer)",
   "player": "this.viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97VideoPlayer"
  }
 ],
 "id": "PlayList_7D8B294E_6C73_001B_41C8_4559D06E2876",
 "class": "PlayList"
},
{
 "label": "STUPA 6 - Gerha Kala",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_33977712_3CC4_31BE_41BF_81F05F6E829C_t.jpg",
 "width": 1080,
 "loop": false,
 "class": "Video",
 "id": "video_33977712_3CC4_31BE_41BF_81F05F6E829C",
 "height": 1080,
 "video": {
  "mp4Url": "media/video_33977712_3CC4_31BE_41BF_81F05F6E829C.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_328B2890_3CDC_10BA_41B6_C4CE634F3721",
   "start": "this.viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8D894D_6C73_0019_41D6_AF64102AAA49, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8D894D_6C73_0019_41D6_AF64102AAA49, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89VideoPlayer)",
   "player": "this.viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89VideoPlayer"
  }
 ],
 "id": "PlayList_7D8D894D_6C73_0019_41D6_AF64102AAA49",
 "class": "PlayList"
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66136A88_6C71_0007_41D6_1176E048DB29",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBA"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window339"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_2C05CEB4_3CC4_10FA_4171_596E8BC4CB8A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 158.27,
 "hfov": 3.68,
 "pitch": -7.4,
 "video": {
  "mp4Url": "media/video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66179A8E_6C71_001B_41D8_AF0E9FBDB61B",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window344"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "items": [
  {
   "media": "this.video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A",
   "start": "this.viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8A494D_6C73_0019_41D9_B58AA34C7C28, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8A494D_6C73_0019_41D9_B58AA34C7C28, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5CVideoPlayer)",
   "player": "this.viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5CVideoPlayer"
  }
 ],
 "id": "PlayList_7D8A494D_6C73_0019_41D9_B58AA34C7C28",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_3358A5FD_3CDD_F06A_4191_59156B7A69BC",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 63.77,
 "hfov": 2.18,
 "pitch": -3.98,
 "video": {
  "mp4Url": "media/video_33C969A8_3CDC_10EA_41A5_71726A610BD5.mp4",
  "width": 640,
  "class": "VideoResource",
  "height": 480
 }
},
{
 "items": [
  {
   "media": "this.video_33C969A8_3CDC_10EA_41A5_71726A610BD5",
   "start": "this.viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D88C94E_6C73_001B_41C1_22B18EE5BA62, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D88C94E_6C73_001B_41C1_22B18EE5BA62, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9VideoPlayer)",
   "player": "this.viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9VideoPlayer"
  }
 ],
 "id": "PlayList_7D88C94E_6C73_001B_41C1_22B18EE5BA62",
 "class": "PlayList"
},
{
 "id": "ImageResource_29EDFFB1_3CCC_10FA_41B3_F1FCD5312F1D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2C366B07_3CC4_71A6_41C3_E089BB578D39_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_2C366B07_3CC4_71A6_41C3_E089BB578D39_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2C366B07_3CC4_71A6_41C3_E089BB578D39_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2C366B07_3CC4_71A6_41C3_E089BB578D39_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_6612DA8D_6C71_0019_41C2_54CB94413F23",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window341"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_33E43228_3CC4_33EA_41C9_8D4C73C8DF9D",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 116,
 "hfov": 1.52,
 "pitch": -3.76,
 "video": {
  "mp4Url": "media/video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_33C969A8_3CDC_10EA_41A5_71726A610BD5",
   "start": "this.viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8DD94D_6C73_0019_41D1_61CF445BB2D5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8DD94D_6C73_0019_41D1_61CF445BB2D5, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBAVideoPlayer)",
   "player": "this.viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBAVideoPlayer"
  }
 ],
 "id": "PlayList_7D8DD94D_6C73_0019_41D1_61CF445BB2D5",
 "class": "PlayList"
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_6618AA8F_6C71_0019_41BC_882F9FCE4006",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window347"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "label": "Animasi Malam",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_33C969A8_3CDC_10EA_41A5_71726A610BD5_t.jpg",
 "width": 640,
 "loop": false,
 "class": "Video",
 "id": "video_33C969A8_3CDC_10EA_41A5_71726A610BD5",
 "height": 480,
 "video": {
  "mp4Url": "media/video_33C969A8_3CDC_10EA_41A5_71726A610BD5.mp4",
  "width": 640,
  "class": "VideoResource",
  "height": 480
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 44.25,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 2.48,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.07
},
{
 "id": "ImageResource_7E7E1953_6C73_0009_4188_3F9DC33F504E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_29E00FB7_3CCC_10E6_41CA_8AE0AA0D16D7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_0.jpg",
   "width": 7017,
   "class": "ImageResourceLevel",
   "height": 9935
  },
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_1.jpg",
   "width": 5785,
   "class": "ImageResourceLevel",
   "height": 8192
  },
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_2.jpg",
   "width": 2892,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_3.jpg",
   "width": 1446,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_4.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_5.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.03,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.89
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_29E35FB1_3CCC_10FA_41CD_E828CB1E5041",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66194A8F_6C71_0019_41DB_056CE09BD360",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window346"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 55.53,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_6284B743_6C71_0009_41AF_9F75BCE764C1",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 1.75,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6284B743_6C71_0009_41AF_9F75BCE764C1_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.38
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 129.83,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_62CA435C_6C77_003F_41D8_115363196014",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 2.31,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_4.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.86
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_6614FA8E_6C71_001B_41D0_FE2CF27AAFC7",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32D"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window343"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_33D71365_3CDC_119A_41B4_E5C91CEA386F",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 21.65,
 "hfov": 3.67,
 "pitch": -7.97,
 "video": {
  "mp4Url": "media/video_328B2890_3CDC_10BA_41B6_C4CE634F3721.mp4",
  "width": 1920,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_328B2890_3CDC_10BA_41B6_C4CE634F3721",
   "start": "this.viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D8B794E_6C73_001B_41D0_13E1AFCA13E1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D8B794E_6C73_001B_41D0_13E1AFCA13E1, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32DVideoPlayer)",
   "player": "this.viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32DVideoPlayer"
  }
 ],
 "id": "PlayList_7D8B794E_6C73_001B_41D0_13E1AFCA13E1",
 "class": "PlayList"
},
{
 "id": "ImageResource_29E11FB8_3CCC_10EA_41C1_0BF409B1B696",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_0.jpg",
   "width": 7016,
   "class": "ImageResourceLevel",
   "height": 9933
  },
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_1.jpg",
   "width": 5786,
   "class": "ImageResourceLevel",
   "height": 8192
  },
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_2.jpg",
   "width": 2893,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_3.jpg",
   "width": 1446,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_4.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_5.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "items": [
  {
   "media": "this.video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A",
   "start": "this.viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D89194E_6C73_001B_41A1_4FA6C91185AC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D89194E_6C73_001B_41A1_4FA6C91185AC, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2VideoPlayer)",
   "player": "this.viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2VideoPlayer"
  }
 ],
 "id": "PlayList_7D89194E_6C73_001B_41A1_4FA6C91185AC",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.91,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7E48396A_6C73_001B_41BB_4BF8409969DC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 90.09,
   "backwardYaw": -88.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315",
   "distance": 1
  }
 ],
 "vfov": 180,
 "label": "Panorama_Gallery Titis Anggono_2023-02-11-02-06-45",
 "id": "panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D",
 "thumbnailUrl": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_310A9638_3CC4_13EA_41C2_2BBF11080AD0",
  "this.overlay_32457B77_3CCC_1066_41C8_DA0B64E81614",
  "this.overlay_32335DAA_3CCD_F0EE_41B5_0AB1C22F5E86",
  "this.overlay_33D854AA_3CCC_10EF_41CD_17C6D9DFB2FB",
  "this.overlay_313E3FA9_3CCC_10EA_4191_FEF9BE6C0CDE",
  "this.overlay_32626E13_3CCC_13BE_41BB_122AB2CD3427",
  "this.overlay_3135B1A9_3CCC_30EA_41B2_35EB44361688",
  "this.overlay_328A544F_3CCC_17A6_4168_F96B833AA58C",
  "this.popup_313E73BC_3CCC_10EA_41B3_7B278849EB73",
  "this.overlay_2C804AEA_3CC4_F06E_41CA_1379644423E0",
  "this.popup_33D71365_3CDC_119A_41B4_E5C91CEA386F",
  "this.overlay_2DEF1F18_3CDC_71AA_41CE_6135C0F62F43",
  "this.popup_3358A5FD_3CDD_F06A_4191_59156B7A69BC",
  "this.overlay_324ED71C_3CDC_11AB_418D_2861E802E861",
  "this.overlay_2DF43D66_3CDC_3066_41C4_9706B4615D0F",
  "this.overlay_2CB8E598_3CC4_10AA_41B4_9FD2C0759F66",
  "this.popup_33E43228_3CC4_33EA_41C9_8D4C73C8DF9D",
  "this.popup_334BCB8E_3CC4_30A6_41C5_B7BB1FDF9E31",
  "this.popup_2C05CEB4_3CC4_10FA_4171_596E8BC4CB8A",
  "this.popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F",
  "this.popup_6284B743_6C71_0009_41AF_9F75BCE764C1",
  "this.popup_62BAE73B_6C71_0079_41C1_6D6E29739203",
  "this.popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625",
  "this.popup_62CA435C_6C77_003F_41D8_115363196014",
  "this.popup_6366BC52_6C77_000B_41D4_34E25B251F7B"
 ],
 "hfovMax": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 141.05,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.81
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.01,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7E3A3971_6C73_0009_41D5_22DD40B3F936",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_7E7F2953_6C73_0009_41D1_95863BC517AB",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6284B743_6C71_0009_41AF_9F75BCE764C1_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_6284B743_6C71_0009_41AF_9F75BCE764C1_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6284B743_6C71_0009_41AF_9F75BCE764C1_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6284B743_6C71_0009_41AF_9F75BCE764C1_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_7E7DA954_6C73_000F_41C7_3570DD757226",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_0.jpg",
   "width": 7017,
   "class": "ImageResourceLevel",
   "height": 9935
  },
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_1.jpg",
   "width": 5785,
   "class": "ImageResourceLevel",
   "height": 8192
  },
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_2.jpg",
   "width": 2892,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_3.jpg",
   "width": 1446,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_4.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625_0_5.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_7E7C6954_6C73_000F_41A1_1697DE0CAB66",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_62BAE73B_6C71_0079_41C1_6D6E29739203_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_62BAE73B_6C71_0079_41C1_6D6E29739203_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_62BAE73B_6C71_0079_41C1_6D6E29739203_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_62BAE73B_6C71_0079_41C1_6D6E29739203_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -179.9,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.55,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7_0_4.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.03
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 116.43,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_6366BC52_6C77_000B_41D4_34E25B251F7B",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 2.12,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6366BC52_6C77_000B_41D4_34E25B251F7B_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 2.73
},
{
 "adjacentPanoramas": [
  {
   "yaw": -88.99,
   "backwardYaw": 90.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "label": "Panorama_Gallery Titis Anggono_2023-02-11-02-08-40",
 "id": "panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315",
 "thumbnailUrl": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_3351A9BE_3CCC_10E6_41B7_1123CDA7F9D5",
  "this.overlay_2DDE2E04_3CC4_739A_41C8_D04F64E11174",
  "this.overlay_2D6B6A9E_3CC4_30A7_41C4_11679BF60ED1",
  "this.overlay_33961391_3CC3_F0BA_41CC_00A786F19FAC",
  "this.overlay_331D87BF_3CFC_10E6_41C4_C4B436CDA5B8",
  "this.overlay_2CF56699_3CFC_10AA_4192_05E10B536925",
  "this.overlay_2C78A58A_3CFC_F0AE_41AE_E3BB8915F97C",
  "this.overlay_3378ACCF_3CFC_30A6_41B5_E64B47487D11",
  "this.overlay_2C8204CE_3CFC_70A7_41C6_96CE5E1F28B5",
  "this.overlay_2D72EE8C_3CFC_10AA_41C2_C870CB1817BC",
  "this.overlay_2EAFCC9B_3CFC_F0AE_41C9_93E572E7E1CE",
  "this.overlay_331F4038_3CFC_0FEB_4193_8396913DED28",
  "this.overlay_2DCC9691_3CFC_30BA_41B3_15AB999B285C",
  "this.popup_3369EEEC_3CFC_306A_41AD_432AD99E4AEC",
  "this.popup_335FF9D3_3CFD_F0BE_41C3_55904CB63E8A",
  "this.popup_2CB17716_3CFC_11A6_41CA_251BE8282445",
  "this.popup_2DAD7B74_3CFC_307A_41A0_3963C32430A6",
  "this.popup_2CF65989_3CFC_10AA_4178_B4C8BA77B2EB",
  "this.popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E",
  "this.popup_2C366B07_3CC4_71A6_41C3_E089BB578D39",
  "this.popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0",
  "this.popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948",
  "this.popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4",
  "this.popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7",
  "this.popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988"
 ],
 "hfovMax": 100
},
{
 "items": [
  {
   "media": "this.video_33977712_3CC4_31BE_41BF_81F05F6E829C",
   "start": "this.viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D88094E_6C73_001B_41D5_4807C61D1FC3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D88094E_6C73_001B_41D5_4807C61D1FC3, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29VideoPlayer)",
   "player": "this.viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29VideoPlayer"
  }
 ],
 "id": "PlayList_7D88094E_6C73_001B_41D5_4807C61D1FC3",
 "class": "PlayList"
},
{
 "label": "Animasi - Pusat Kebudayaan Dieng",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A_t.jpg",
 "width": 1280,
 "loop": false,
 "class": "Video",
 "id": "video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A",
 "height": 720,
 "video": {
  "mp4Url": "media/video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "id": "ImageResource_7E7AC954_6C73_000F_41C4_7884F19FDCF2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_0.jpg",
   "width": 7016,
   "class": "ImageResourceLevel",
   "height": 9933
  },
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_1.jpg",
   "width": 5786,
   "class": "ImageResourceLevel",
   "height": 8192
  },
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_2.jpg",
   "width": 2893,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_3.jpg",
   "width": 1446,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_4.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_62CA435C_6C77_003F_41D8_115363196014_0_5.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -13.13,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2C366B07_3CC4_71A6_41C3_E089BB578D39",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2C366B07_3CC4_71A6_41C3_E089BB578D39_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.89
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -39.23,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.89
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "id": "ImageResource_7E7BF955_6C73_0009_41D5_B1AB0746B312",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6366BC52_6C77_000B_41D4_34E25B251F7B_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_6366BC52_6C77_000B_41D4_34E25B251F7B_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6366BC52_6C77_000B_41D4_34E25B251F7B_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6366BC52_6C77_000B_41D4_34E25B251F7B_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66967A86_6C71_000B_41DA_5F5332DDCD48",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window338"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "label": "Bale Jagong - Titis Anggono",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB_t.jpg",
 "width": 1080,
 "loop": false,
 "class": "Video",
 "id": "video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB",
 "height": 1080,
 "video": {
  "mp4Url": "media/video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_2DAD7B74_3CFC_307A_41A0_3963C32430A6",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": -140.66,
 "hfov": 4.21,
 "pitch": -6.48,
 "video": {
  "mp4Url": "media/video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "id": "ImageResource_29E2DFB7_3CCC_10E6_41B5_0FCAFCBB9E65",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_29E65FB8_3CCC_10EA_41C3_9A63FED95937",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_28181FA3_3CCC_109E_41A5_D7FC126EC619",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_313E73BC_3CCC_10EA_41B3_7B278849EB73_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_313E73BC_3CCC_10EA_41B3_7B278849EB73_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_313E73BC_3CCC_10EA_41B3_7B278849EB73_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_313E73BC_3CCC_10EA_41B3_7B278849EB73_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -140.85,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988_0_4.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.33
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_334BCB8E_3CC4_30A6_41C5_B7BB1FDF9E31",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 129.54,
 "hfov": 2.56,
 "pitch": -5.02,
 "video": {
  "mp4Url": "media/video_33977712_3CC4_31BE_41BF_81F05F6E829C.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 39.3,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.11
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66164A8F_6C71_0019_41BE_65D5CC75713B",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window345"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "items": [
  {
   "media": "this.video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB",
   "start": "this.viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7D88594E_6C73_001B_41B1_CF7E84DA8D73, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7D88594E_6C73_001B_41B1_CF7E84DA8D73, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54VideoPlayer)",
   "player": "this.viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54VideoPlayer"
  }
 ],
 "id": "PlayList_7D88594E_6C73_001B_41B1_CF7E84DA8D73",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_3369EEEC_3CFC_306A_41AD_432AD99E4AEC",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 141.18,
 "hfov": 4.2,
 "pitch": -7.03,
 "video": {
  "mp4Url": "media/video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_335FF9D3_3CFD_F0BE_41C3_55904CB63E8A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": 39.53,
 "hfov": 4.21,
 "pitch": -6.77,
 "video": {
  "mp4Url": "media/video_33C969A8_3CDC_10EA_41A5_71726A610BD5.mp4",
  "width": 640,
  "class": "VideoResource",
  "height": 480
 }
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "autoplay": true,
 "id": "popup_2CF65989_3CFC_10AA_4178_B4C8BA77B2EB",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "yaw": -179.98,
 "hfov": 4.2,
 "pitch": -7.95,
 "video": {
  "mp4Url": "media/video_33977712_3CC4_31BE_41BF_81F05F6E829C.mp4",
  "width": 1080,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 21.21,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_313E73BC_3CCC_10EA_41B3_7B278849EB73",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 3.56,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_313E73BC_3CCC_10EA_41B3_7B278849EB73_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.69
},
{
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_66125A89_6C71_0019_41BF_019B502A9E6F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "class": "Window",
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "headerBackgroundOpacity": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "paddingBottom": 0,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderSize": 0,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5C"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonIconLineWidth": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "borderRadius": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#000000",
 "headerPaddingLeft": 10,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPaddingBottom": 5,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "data": {
  "name": "Window340"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 63.73,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_62BAE73B_6C71_0079_41C1_6D6E29739203",
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "hfov": 1.06,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62BAE73B_6C71_0079_41C1_6D6E29739203_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.13
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "UIComponent",
 "right": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "borderSize": 0,
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent5128"
 },
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "propagateClick": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "ZoomImage",
 "right": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "ZoomImage5129"
 },
 "visible": false,
 "backgroundColorRatios": [],
 "scaleMode": "custom",
 "paddingTop": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingTop": 5,
 "rollOverIconColor": "#666666",
 "id": "closeButtonPopupPanorama",
 "backgroundColorDirection": "vertical",
 "paddingRight": 5,
 "fontFamily": "Arial",
 "class": "CloseButton",
 "right": 10,
 "paddingLeft": 5,
 "fontColor": "#FFFFFF",
 "iconWidth": 20,
 "horizontalAlign": "center",
 "minHeight": 0,
 "iconHeight": 20,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconBeforeLabel": true,
 "mode": "push",
 "iconColor": "#000000",
 "paddingBottom": 5,
 "iconLineWidth": 5,
 "backgroundOpacity": 0.3,
 "fontSize": "1.29vmin",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "label": "",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "verticalAlign": "middle",
 "gap": 5,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "CloseButton5130"
 },
 "fontWeight": "normal",
 "fontStyle": "normal",
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5122"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273",
 "id": "viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273VideoPlayer",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97",
 "id": "viewer_uid7D9A6946_6C73_000B_41D5_0F0DA55B7A97VideoPlayer",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89",
 "id": "viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89VideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBA",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5119"
 }
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5124"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5C",
 "id": "viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5CVideoPlayer",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9",
 "id": "viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9VideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D9DE946_6C73_000B_41BE_FFA3D1A32273",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5121"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBA",
 "id": "viewer_uid7D9C9946_6C73_000B_41D8_267C22B4EDBAVideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5127"
 }
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D874948_6C73_0007_41D1_8CCF934097D9",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5126"
 }
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32D",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5123"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32D",
 "id": "viewer_uid7D997947_6C73_0009_41B3_858D3D4CE32DVideoPlayer",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2",
 "id": "viewer_uid7D87C948_6C73_0007_41CC_5190FA3222E2VideoPlayer",
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315, this.camera_7E3A3971_6C73_0009_41D5_22DD40B3F936); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.29,
   "hfov": 23.83,
   "yaw": 90.09,
   "image": "this.AnimatedImageResource_2823CF83_3CCC_109E_41BD_0ED1881EF0C6",
   "distance": 100
  }
 ],
 "id": "overlay_310A9638_3CC4_13EA_41C2_2BBF11080AD0",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.09,
   "hfov": 23.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_313E73BC_3CCC_10EA_41B3_7B278849EB73, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_28181FA3_3CCC_109E_41A5_D7FC126EC619, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.69,
   "hfov": 5.03,
   "yaw": 21.21,
   "image": "this.AnimatedImageResource_2820DF84_3CCC_109A_41AA_6445AB5471B5",
   "distance": 100
  }
 ],
 "id": "overlay_32457B77_3CCC_1066_41C8_DA0B64E81614",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 21.21,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_61CAE6D5_6C71_0009_41D9_D3A35F311C8F, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7E1953_6C73_0009_4188_3F9DC33F504E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.07,
   "hfov": 4.27,
   "yaw": 44.25,
   "image": "this.AnimatedImageResource_28212F85_3CCC_109A_41A4_9BBAF0BB3427",
   "distance": 100
  }
 ],
 "id": "overlay_32335DAA_3CCD_F0EE_41B5_0AB1C22F5E86",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 44.25,
   "hfov": 4.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6284B743_6C71_0009_41AF_9F75BCE764C1, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7F2953_6C73_0009_41D1_95863BC517AB, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.38,
   "hfov": 2.71,
   "yaw": 55.53,
   "image": "this.AnimatedImageResource_28215F85_3CCC_109A_41B6_59EE9D981ECB",
   "distance": 100
  }
 ],
 "id": "overlay_33D854AA_3CCC_10EF_41CD_17C6D9DFB2FB",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 55.53,
   "hfov": 2.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_62BAE73B_6C71_0079_41C1_6D6E29739203, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7C6954_6C73_000F_41A1_1697DE0CAB66, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.13,
   "hfov": 1.97,
   "yaw": 63.73,
   "image": "this.AnimatedImageResource_28219F85_3CCC_109A_41CC_776C1074DDDC",
   "distance": 100
  }
 ],
 "id": "overlay_313E3FA9_3CCC_10EA_4191_FEF9BE6C0CDE",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.73,
   "hfov": 1.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_631D6FD2_6C77_000B_41D4_F5F1A4A90625, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7DA954_6C73_000F_41C7_3570DD757226, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.47,
   "hfov": 5.03,
   "yaw": 158.72,
   "image": "this.AnimatedImageResource_2821FF85_3CCC_109A_41C5_B2B50833AEB3",
   "distance": 100
  }
 ],
 "id": "overlay_32626E13_3CCC_13BE_41BB_122AB2CD3427",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 158.72,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_62CA435C_6C77_003F_41D8_115363196014, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7AC954_6C73_000F_41C4_7884F19FDCF2, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.86,
   "hfov": 3,
   "yaw": 129.83,
   "image": "this.AnimatedImageResource_28261F85_3CCC_109A_41B0_3A3B28FBE52F",
   "distance": 100
  }
 ],
 "id": "overlay_3135B1A9_3CCC_30EA_41B2_35EB44361688",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 129.83,
   "hfov": 3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6366BC52_6C77_000B_41D4_34E25B251F7B, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7E7BF955_6C73_0009_41D5_B1AB0746B312, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.73,
   "hfov": 2.03,
   "yaw": 116.43,
   "image": "this.AnimatedImageResource_28267F85_3CCC_109A_41C1_CFB611AF6B94",
   "distance": 100
  }
 ],
 "id": "overlay_328A544F_3CCC_17A6_4168_F96B833AA58C",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 116.43,
   "hfov": 2.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_33D71365_3CDC_119A_41B4_E5C91CEA386F, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66967A86_6C71_000B_41DA_5F5332DDCD48, this.video_328B2890_3CDC_10BA_41B6_C4CE634F3721, this.PlayList_7D8D894D_6C73_0019_41D6_AF64102AAA49, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_8_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -7.97,
   "yaw": 21.65,
   "hfov": 3.67
  }
 ],
 "id": "overlay_2C804AEA_3CC4_F06E_41CA_1379644423E0",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 21.65,
   "hfov": 3.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3358A5FD_3CDD_F06A_4191_59156B7A69BC, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66136A88_6C71_0007_41D6_1176E048DB29, this.video_33C969A8_3CDC_10EA_41A5_71726A610BD5, this.PlayList_7D8DD94D_6C73_0019_41D1_61CF445BB2D5, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_9_0.png",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 42
     }
    ]
   },
   "pitch": -3.98,
   "yaw": 63.77,
   "hfov": 2.18
  }
 ],
 "id": "overlay_2DEF1F18_3CDC_71AA_41CE_6135C0F62F43",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_9_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.77,
   "hfov": 2.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2C05CEB4_3CC4_10FA_4171_596E8BC4CB8A, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66125A89_6C71_0019_41BF_019B502A9E6F, this.video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A, this.PlayList_7D8A494D_6C73_0019_41D9_B58AA34C7C28, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_10_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -7.4,
   "yaw": 158.27,
   "hfov": 3.68
  }
 ],
 "id": "overlay_324ED71C_3CDC_11AB_418D_2861E802E861",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_10_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 158.27,
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_334BCB8E_3CC4_30A6_41C5_B7BB1FDF9E31, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_6612DA8D_6C71_0019_41C2_54CB94413F23, this.video_33977712_3CC4_31BE_41BF_81F05F6E829C, this.PlayList_7D8AA94E_6C73_001B_41B1_BDCD76EDFF49, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_11_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": -5.02,
   "yaw": 129.54,
   "hfov": 2.56
  }
 ],
 "id": "overlay_2DF43D66_3CDC_3066_41C4_9706B4615D0F",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_11_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 129.54,
   "hfov": 2.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_33E43228_3CC4_33EA_41C9_8D4C73C8DF9D, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_6615FA8E_6C71_001B_41B6_502DEFC52A55, this.video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB, this.PlayList_7D8B294E_6C73_001B_41C8_4559D06E2876, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_12_0.png",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 49
     }
    ]
   },
   "pitch": -3.76,
   "yaw": 116,
   "hfov": 1.52
  }
 ],
 "id": "overlay_2CB8E598_3CC4_10AA_41B4_9FD2C0759F66",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "yaw": 116,
   "hfov": 1.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D, this.camera_7E48396A_6C73_001B_41BB_4BF8409969DC); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.42,
   "hfov": 23.58,
   "yaw": -88.99,
   "image": "this.AnimatedImageResource_28331F8E_3CCC_10A6_41CA_6260D672C9BC",
   "distance": 100
  }
 ],
 "id": "overlay_3351A9BE_3CCC_10E6_41B7_1123CDA7F9D5",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.99,
   "hfov": 23.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2CC3CFEB_3CFC_306E_41BB_990CB404289E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29ECAFB1_3CCC_10FA_41C5_54F28FFF40ED, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.89,
   "hfov": 5.04,
   "yaw": -39.23,
   "image": "this.AnimatedImageResource_28334F8F_3CCC_10A6_41C5_B267685503B7",
   "distance": 100
  }
 ],
 "id": "overlay_2DDE2E04_3CC4_739A_41C8_D04F64E11174",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -39.23,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2C366B07_3CC4_71A6_41C3_E089BB578D39, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29EDFFB1_3CCC_10FA_41B3_F1FCD5312F1D, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.89,
   "hfov": 5.04,
   "yaw": -13.13,
   "image": "this.AnimatedImageResource_28338F8F_3CCC_10A6_41BF_F861B3F7EB4A",
   "distance": 100
  }
 ],
 "id": "overlay_2D6B6A9E_3CC4_30A7_41C4_11679BF60ED1",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -13.13,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2C3BC1E4_3CC4_109A_41B8_A60AFEF2BBB0, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29E35FB1_3CCC_10FA_41CD_E828CB1E5041, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.11,
   "hfov": 5.03,
   "yaw": 13.73,
   "image": "this.AnimatedImageResource_2833CF8F_3CCC_10A6_418B_E30378324A06",
   "distance": 100
  }
 ],
 "id": "overlay_33961391_3CC3_F0BA_41CC_00A786F19FAC",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 13.73,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2ECD30DB_3CC4_10AE_41CA_C5258FF36948, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29E2DFB7_3CCC_10E6_41B5_0FCAFCBB9E65, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.11,
   "hfov": 5.03,
   "yaw": 39.3,
   "image": "this.AnimatedImageResource_28301F8F_3CCC_10A6_41C7_0D0119304929",
   "distance": 100
  }
 ],
 "id": "overlay_331D87BF_3CFC_10E6_41C4_C4B436CDA5B8",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.3,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2DEFDC65_3CC4_F79A_41CD_49F863F91988, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29E00FB7_3CCC_10E6_41CA_8AE0AA0D16D7, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.33,
   "hfov": 5.04,
   "yaw": -140.85,
   "image": "this.AnimatedImageResource_28306F8F_3CCC_10A6_41A5_F7E26A681FD7",
   "distance": 100
  }
 ],
 "id": "overlay_2CF56699_3CFC_10AA_4192_05E10B536925",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -140.85,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2D4C54BD_3CC4_10EA_41AE_5107443ABCD7, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29E11FB8_3CCC_10EA_41C1_0BF409B1B696, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 6.03,
   "hfov": 5.03,
   "yaw": -179.9,
   "image": "this.AnimatedImageResource_28309F8F_3CCC_10A6_41BC_3AEDB10DCB23",
   "distance": 100
  }
 ],
 "id": "overlay_2C78A58A_3CFC_F0AE_41AE_E3BB8915F97C",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -179.9,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2D5D004B_3CC4_0FAD_41BA_8D732EBC44B4, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_29E65FB8_3CCC_10EA_41C3_9A63FED95937, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.81,
   "hfov": 5.04,
   "yaw": 141.05,
   "image": "this.AnimatedImageResource_2830FF8F_3CCC_10A6_41C5_B5BA50F63C09",
   "distance": 100
  }
 ],
 "id": "overlay_3378ACCF_3CFC_30A6_41B5_E64B47487D11",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 141.05,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2CB17716_3CFC_11A6_41CA_251BE8282445, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_6614FA8E_6C71_001B_41D0_FE2CF27AAFC7, this.video_328B2890_3CDC_10BA_41B6_C4CE634F3721, this.PlayList_7D8B794E_6C73_001B_41D0_13E1AFCA13E1, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_8_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.78,
   "yaw": -39.95,
   "hfov": 4.21
  }
 ],
 "id": "overlay_2C8204CE_3CFC_70A7_41C6_96CE5E1F28B5",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_8_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -39.95,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2CF65989_3CFC_10AA_4178_B4C8BA77B2EB, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66179A8E_6C71_001B_41D8_AF0E9FBDB61B, this.video_33977712_3CC4_31BE_41BF_81F05F6E829C, this.PlayList_7D88094E_6C73_001B_41D5_4807C61D1FC3, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_9_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.95,
   "yaw": -179.98,
   "hfov": 4.2
  }
 ],
 "id": "overlay_2D72EE8C_3CFC_10AA_41C2_C870CB1817BC",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_9_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -179.98,
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3369EEEC_3CFC_306A_41AD_432AD99E4AEC, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66164A8F_6C71_0019_41BE_65D5CC75713B, this.video_323DEAEA_3CC4_106E_41CC_D1F8471A57AB, this.PlayList_7D88594E_6C73_001B_41B1_CF7E84DA8D73, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_10_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.03,
   "yaw": 141.18,
   "hfov": 4.2
  }
 ],
 "id": "overlay_2EAFCC9B_3CFC_F0AE_41C9_93E572E7E1CE",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_10_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 141.18,
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_335FF9D3_3CFD_F0BE_41C3_55904CB63E8A, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_66194A8F_6C71_0019_41DB_056CE09BD360, this.video_33C969A8_3CDC_10EA_41A5_71726A610BD5, this.PlayList_7D88C94E_6C73_001B_41C1_22B18EE5BA62, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_11_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.77,
   "yaw": 39.53,
   "hfov": 4.21
  }
 ],
 "id": "overlay_331F4038_3CFC_0FEB_4193_8396913DED28",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_11_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.53,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2DAD7B74_3CFC_307A_41A0_3963C32430A6, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_6618AA8F_6C71_0019_41BC_882F9FCE4006, this.video_2CC420D5_3CC4_30A5_41C2_DA266C2DB28A, this.PlayList_7D89194E_6C73_001B_41A1_4FA6C91185AC, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_12_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.48,
   "yaw": -140.66,
   "hfov": 4.21
  }
 ],
 "id": "overlay_2DCC9691_3CFC_30BA_41B3_15AB999B285C",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_12_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -140.66,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.48
  }
 ]
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29",
 "id": "viewer_uid7D861947_6C73_0009_41DA_DBB4B3272F29VideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D935944_6C73_000F_41C5_CB7B9CC7FB89",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5118"
 }
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5125"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54",
 "id": "viewer_uid7D86A948_6C73_0007_41A9_0E7FCCBFFA54VideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid7D9D4946_6C73_000B_41CE_A42BDF38AF5C",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "ViewerArea5120"
 }
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2823CF83_3CCC_109E_41BD_0ED1881EF0C6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2820DF84_3CCC_109A_41AA_6445AB5471B5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28212F85_3CCC_109A_41A4_9BBAF0BB3427",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28215F85_3CCC_109A_41B6_59EE9D981ECB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28219F85_3CCC_109A_41CC_776C1074DDDC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2821FF85_3CCC_109A_41C5_B2B50833AEB3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28261F85_3CCC_109A_41B0_3A3B28FBE52F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28267F85_3CCC_109A_41C1_CFB611AF6B94",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37B701A8_3CC4_10EA_41CD_E724D08CA75D_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28331F8E_3CCC_10A6_41CA_6260D672C9BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28334F8F_3CCC_10A6_41C5_B267685503B7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28338F8F_3CCC_10A6_41BF_F861B3F7EB4A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2833CF8F_3CCC_10A6_418B_E30378324A06",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28301F8F_3CCC_10A6_41C7_0D0119304929",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28306F8F_3CCC_10A6_41A5_F7E26A681FD7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_28309F8F_3CCC_10A6_41BC_3AEDB10DCB23",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2830FF8F_3CCC_10A6_41C5_B5BA50F63C09",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37E6B566_3CC4_3067_41C4_FE9C238D1315_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "paddingBottom": 0,
 "width": "100%",
 "start": "this.init()",
 "borderRadius": 0,
 "layout": "absolute",
 "contentOpaque": false,
 "shadow": false,
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "gap": 10,
 "height": "100%",
 "data": {
  "name": "Player7063"
 },
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
