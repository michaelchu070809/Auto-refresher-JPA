// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.type === "shownotification"){
      chrome.notifications.create('notify', request.opt, function(){})
  }
});