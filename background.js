// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.type == "shownotification"){
      var full={type: request.opt.type,
                title: request.opt.title,
                message: request.opt.message,
                iconUrl: "icon.png"
      }
      var alarm=new Audio("test.mp3");
      alarm.play();
      chrome.notifications.create('notify'+request.opt.id, full, function(){
        var id = setInterval(function(){
          alarm.pause();
          clearInterval(id);
        },5000)
      })
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.type == "shownotification_start"){
    var full={type: request.opt.type,
      title: request.opt.title,
      message: request.opt.message,
      iconUrl: "icon.png"
}
      chrome.notifications.create('beginning'+request.opt.id, full, function(){
        var idd=setInterval(function(){
          chrome.notifications.clear('beginning'+request.opt.id)
          clearInterval(idd);
        }, 3000);
      })
  }
});
