var e=document.body;function t(e){var t=document.createElement("div");return t.setAttribute("data-qa","notification"),e&&(t.className=e),t}var n=t(),o=t("success"),r=t("success");function s(t){return new Promise(function(n){e.addEventListener(t,function(){n()})})}new Promise(function(t,n){var o=function(){clearTimeout(r),t()},r=setTimeout(function(){e.removeEventListener("click",o),n(Error())},3e3);e.addEventListener("click",o)}).then(function(){n.className="success",n.textContent="First promise was resolved",e.append(n)},function(){n.className="error",n.textContent="First promise was rejected",e.append(n)});var i=s("click"),c=s("contextmenu");Promise.any([i,c]).then(function(){o.textContent="Second promise was resolved",e.append(o)}),Promise.all([i,c]).then(function(){r.textContent="Third promise was resolved",e.append(r)});
//# sourceMappingURL=index.274bd4c5.js.map
