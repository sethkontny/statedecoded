(function(b,f,i){if(!b.webshims){var k=navigator.browserLanguage||navigator.language||b("html").attr("lang")||"";b.webshims={addReady:function(a){b(function(){a(i,b([]))})},ready:function(a,b){b()},activeLang:function(){return k}}}var g=b.webshims,l={},j=!1,c,d,a=function(a){g.refreshCustomValidityRules(a.target)};g.customErrorMessages={};g.addCustomValidityRule=function(a,c,d){l[a]=c;g.customErrorMessages[a]||(g.customErrorMessages[a]=[],g.customErrorMessages[a][""]=d||a);b.isReady&&j&&b("input, select, textarea").each(function(){e(this)})};
g.refreshCustomValidityRules=function(a){if(a.form&&(d||b.prop(a,"willValidate"))){c=!0;var e=b.data(a,"customMismatchedRule"),f=b.prop(a,"validity")||{},h="";if(e||!f.customError){var i=b(a).val();b.each(l,function(c,d){h=d(a,i)||"";e=c;if(h)return"string"!=typeof h&&(h=b(a).data("errormessage")||a.getAttribute("x-moz-errormessage")||g.customErrorMessages[c][g.activeLang()]||g.customErrorMessages[c][""]),"object"==typeof h&&(h=h[c]||h.customError||h.defaultMessage),!1});h&&b.data(a,"customMismatchedRule",
e);b(a).setCustomValidity(h)}c=!1}};var e=g.refreshCustomValidityRules;g.ready("forms",function(){j=!0;var f=b.fn.setCustomValidity||function(a){return this.each(function(){this.setCustomValidity&&this.setCustomValidity(a)})};b.fn.setCustomValidity=function(a){c||this.data("customMismatchedRule","");return f.apply(this,arguments)};b(i).bind("change",a);g.addReady(function(a,c){d=!0;b("input, select, textarea",a).add(c.filter("input, select, textarea")).each(function(){e(this)});d=!1});b(i).bind("refreshCustomValidityRules",
a)})})(jQuery,window,document);
(function(b,f,i){f=b.webshims.addCustomValidityRule;f("partialPattern",function(c,d){if(d&&c.getAttribute("data-partial-pattern")){var a=b(c).data("partial-pattern");return!a?void 0:!RegExp("("+a+")","i").test(d)}},"This format is not allowed here.");f("tooShort",function(c,d){return!d||!c.getAttribute("data-minlength")?void 0:b(c).data("minlength")>d.length},"Entered value is too short.");var k={};f("group-required",function(c){var d=c.name;if(d&&"checkbox"===c.type&&b(c).hasClass("group-required")){var a=
b(c.form&&c.form[d]||i.getElementsByName(d)),c=a.filter(":checked");k[d]&&clearTimeout(k[d]);k[d]=setTimeout(function(){a.unbind("click.groupRequired").bind("click.groupRequired",function(){a.filter(".group-required").each(function(){b.webshims.refreshCustomValidityRules(this)})})},9);return!c[0]}},"Please check one of these checkboxes.");var g=/[^0-9-]+/;f("creditcard",function(c,d){if(d&&b(c).hasClass("creditcard-input")){if(!g.test(d))return!0;var a=0,e=0,f=!1,d=d.replace(/\D/g,"");for(n=d.length-
1;0<=n;n--){e=d.charAt(n);e=parseInt(e,10);if(f&&9<(e*=2))e-=9;a+=e;f=!f}return 0!==a%10}},"Please enter a valid credit card number");var l={prop:"value","from-prop":"value",toggle:!1},j=function(c){return b(c.form[c.name]).filter('[type="radio"]')};b.webshims.ready("form-core",function(){b.webshims.modules&&(j=b.webshims.modules["form-core"].getGroupElements||j)});f("dependent",function(c,d){if(c.getAttribute("data-dependent-validation")){var a=b(c).data("dependentValidation"),e;if(a){var f=function(){var d=
b.prop(a.masterElement,a["from-prop"]);e&&(d=-1!==b.inArray(d,e));a.toggle&&(d=!d);b.prop(c,a.prop,d)};if(!a._init||!a.masterElement){"string"==typeof a&&(a={from:a});a.masterElement=i.getElementById(a.from)||i.getElementsByName(a.from||[])[0];if(!a.masterElement||!a.masterElement.form)return;if(/radio|checkbox/i.test(a.masterElement.type)){if(a["from-prop"]||(a["from-prop"]="checked"),!a.prop&&"checked"==a["from-prop"])a.prop="disabled"}else a["from-prop"]||(a["from-prop"]="value");0===a["from-prop"].indexOf("value:")&&
(e=a["from-prop"].replace("value:","").split("||"),a["from-prop"]="value");a=b.data(c,"dependentValidation",b.extend({_init:!0},l,a));"value"!==a.prop||e?b("radio"===a.masterElement.type&&j(a.masterElement)||a.masterElement).bind("change",f):b(a.masterElement).bind("change",function(){b.webshims.refreshCustomValidityRules(c);b(c).is(".user-error, .user-success")&&b(c).trigger("refreshvalidityui")})}if("value"==a.prop&&!e)return b.prop(a.masterElement,"value")!=d;f();return""}}},"The value of this field does not repeat the value of the other field")})(jQuery,
window,document);