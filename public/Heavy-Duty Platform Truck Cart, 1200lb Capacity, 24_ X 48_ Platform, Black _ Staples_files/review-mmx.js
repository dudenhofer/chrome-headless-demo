var reviewJs=function(){$(document).ready(function(){init()});function init(){var mmxEnable=true;try{pageName=pageName}catch(e){pageName="odinsku"}bindReviewEvents(mmxEnable,false);var turnToJwtToken=getParameterByName("turntoNotificationData");var turnToShowGuidelines=getParameterByName("turntoShowGuidelines");var unsubscribeMail=getParameterByName("turntoflow");if(turnToJwtToken){var jwtJson=parseJwt(turnToJwtToken);if(jwtJson&&jwtJson.alreadyReviewed)showAlreadySubmittedMsg(mmxEnable);else if(jwtJson&&
jwtJson.ugcId)showSuccessMsg(mmxEnable);else{$("#prwspinner").show();getWriteReviewForm(turnToJwtToken,mmxEnable).done(function(data){$("#prwspinner").hide();$(".writeReviewBlock").html(data);var $reviewBlock=$(".writeReviewBlock");var $form=$(".writeReviewBlock form");var starRating=$(".registeredRating",$reviewBlock).val();if(starRating)setRating($reviewBlock,starRating,true);if(window.Analytics&&window.Analytics.tracking&&window.Analytics.tracking.item){$("#product_img").attr("src",window.Analytics.tracking.item.imageUrl);
$(".product_name").html(unEntity(window.Analytics.tracking.item.name))}if(mmxEnable)$(".write_review_container_mmx").show();scrollToWriteReview($form);bindReviewEvents(mmxEnable,false);if(jwtJson.validationErrors)$(".writeReviewBlock form .review_submit").trigger("click")}).fail(function(){$("#prwspinner").hide();console.log("failed loading write review form")})}}if(turnToShowGuidelines==1)showReviewGuidelines(mmxEnable);if(unsubscribeMail&&unsubscribeMail=="optout")showUnsubscribeMsg();if(!isOrderDetailPage()){var sku=
window.Analytics&&window.Analytics.tracking&&window.Analytics.tracking.item?window.Analytics.tracking.item.sku:"";if(!sku)sku=$(".write-review-btn").attr("data-sku");var reviewScvalues=$("[scvalue\x3d'writeareview']");if(reviewScvalues)reviewScvalues.each(function(){if($(this).attr("scType"))$(this).removeAttr("scType");if($(this).attr("scvalue"))$(this).removeAttr("scvalue")});if(sku&&hasLocaStorage(sku))if(getCookie("SASESSION")&&getCookie("SASESSION")!="LOGGEDOFF")$(".write-review-btn").trigger("click");
else if(getCookie("SMSESSION")&&getCookie("SMSESSION")!="LOGGEDOFF")$(".write-review-btn").trigger("click");else clearLocalStorage(sku)}if(isOrderDetailPage())$(".write_review_link").each(function(){var sku=$(this).attr("data-sku");if(hasOrderPageSkuLocalStorage(sku))$(this).trigger("click")})}function bindReviewEvents(mmx,aleadyEventsBinded){if($("#prwspinner").length==0)$(".writeReviewBlock").append($("\x3cimg\x3e",{id:"prwspinner",style:"z-index:9999;position:absolute;top:40%;left:50%",src:"/prw/images/spinner.svg"}));
$(".rating-stars-wrapper .rating-star-icon").off("click.registerRating");$(".rating-stars-wrapper .rating-star-icon").on("click.registerRating",function(){clearWriteReviewValidationErrors($(this).closest("form"));changeRating($(this),true)});$(".review_title_input, .review_content").off("click");$(".review_title_input, .review_content").on("click",function(){clearWriteReviewValidationErrors($(this).closest("form"))});$(".rating-stars-wrapper .rating-star-icon").off("mouseenter.changeRating");$(".rating-stars-wrapper .rating-star-icon").on("mouseenter.changeRating",
function(){changeRating($(this),false)});$(".rating-stars-wrapper .rating-star-icon").off("mouseleave.changeRating");$(".rating-stars-wrapper .rating-star-icon").on("mouseleave.changeRating",function(){var $currentStarContainer=$(this).closest(".rating-stars-wrapper");var currentContainerRating=$(".registeredRating",$currentStarContainer).val();setRating($currentStarContainer,currentContainerRating,false)});$(".submit_container").off("click");$(".submit_container").on("click",function(){var $form=
$(this).closest("form");submitReview($form,mmx)});$(".write_review_container .write_review_close").off("click");$(".write_review_container .write_review_close").on("click",function(){if(isOrderDetailPage()){$(this).closest(".product_review_tr").slideUp(400);$(".write_review_container").hide()}else $(".write_review_container").hide();callAdapter("Overlay:Please review your purchase:Close")});$(".review_guide_link").off("click");$(".review_guide_link").on("click",function(){showReviewGuidelines();callAdapter("Overlay:Please review your purchase:Review Guidelines \x26 Terms of use");
return false});$(".writeReviewModal .write_review_modal_close").off("click");$(".writeReviewModal .write_review_modal_close").on("click",function(){$(".writeReviewModal").hide();return false});$(".write_review_container_mmx .review_value .review_title_input").off("focus");$(".write_review_container_mmx .review_value .review_title_input").on("focus",function(){$(".write_review_container_mmx .review_title_label").show();$(this).removeAttr("placeholder")});$(".write_review_container_mmx .review_value .review_content").off("focus");
$(".write_review_container_mmx .review_value .review_content").on("focus",function(){$(".write_review_container_mmx .review_description_label").removeClass("review_description_label").addClass("review_description_focussed")});$(".write_review_container_mmx .review_description_label").off("click");$(".write_review_container_mmx .review_description_label").on("click",function(){$(".write_review_container_mmx .review_description_label").removeClass("review_description_label").addClass("review_description_focussed");
return false});$(".write_review_container_mmx .review_value .review_displayName_input").off("focus");$(".write_review_container_mmx .review_value .review_displayName_input").on("focus",function(){$(".write_review_container_mmx .review_display_name_label").show();$(this).removeAttr("placeholder")});$(".write_review_container_mmx .write_review_close").off("click");$(".write_review_container_mmx .write_review_close").on("click",function(){$(".write_review_container_mmx").hide();callAdapter("Overlay:Please review your purchase:Close")});
if(mmx){$(".writeReviewModalMMX .write_review_modal_close").off("click");$(".writeReviewModalMMX .write_review_modal_close").on("click",function(){$(".writeReviewModalMMX").hide();return false});$(".writeReviewModalMMX .review-popup-mmx-dismiss").off("click");$(".writeReviewModalMMX .review-popup-mmx-dismiss").on("click",function(){$(".writeReviewModalMMX").hide();return false});$(".review_guide_link_mmx").off("click");$(".review_guide_link_mmx").on("click",function(){showReviewGuidelines(mmx,true);
callAdapter("Overlay:Please review your purchase:Review Guidelines \x26 Terms of use");return false});$(".review_guide_hide_link_mmx").off("click");$(".review_guide_hide_link_mmx").on("click",function(){$(".review_guide_hide_link_mmx").hide();$(".review_guidelines_mmx_data").hide();$(".review_guide_link_mmx").show();return false})}$(".write_review_link").off("click");$(".write_review_link").on("click",function(){var productItemRow=$(this).closest(".stp-orderdetails-itemtable").find(".product_review_tr");
var sku=$(this).attr("data-sku");var writeReviewForm=$(".write_review_container",productItemRow);callAdapter("Write a Review");if(writeReviewForm.length>0)if(mmx)$(".write_review_container_mmx").show();else productItemRow.slideDown(400);else{$("#prwspinner").show();getWriteReviewForm(null,mmx).done(function(data){$("#prwspinner").hide();productItemRow.find(".writeReviewBlock").html(data);if(mmx)$(".write_review_container_mmx").show();else productItemRow.slideDown(400);var $form=$("form",productItemRow);
$(".sku",$form).val(sku);populateOrderDetailsLocalStorage(sku,$form);bindReviewEvents(mmx,false)}).fail(function(){$("#prwspinner").hide();console.log("failed loading write review form")})}return false});if(!aleadyEventsBinded||window.location.hostname.indexOf("staples.com")>-1||(window.location.pathname.indexOf("ptd/orderdetails")>-1||window.location.pathname.indexOf("ptd/mmx/orderdetails")>-1)){$("#writeReviewButton, .writeReviewButton").off("click");$("#writeReviewButton, .writeReviewButton").on("click",
function(){var writeReviewForm=$(".write_review_container");var sku=window.Analytics&&window.Analytics.tracking&&window.Analytics.tracking.item?window.Analytics.tracking.item.sku:"";if(!sku)sku=$(this).attr("data-sku");var itemRowObj;if(mmx&&(window.location.pathname.indexOf("ptd/orderdetails")>-1||window.location.pathname.indexOf("ptd/mmx/orderdetails")>-1))itemRowObj=$(this).closest('div[class*\x3d"od_product_tile_item"]');var writeReviewButton=$(this)[0];if(writeReviewButton)if(mmx&&window.location.hostname.indexOf("staplesadvantage.com")>
-1&&window.location.pathname.indexOf("ptd/orderdetails")<0&&window.location.pathname.indexOf("ptd/mmx/orderdetails")<0)if(writeReviewButton.innerText&&writeReviewButton.innerText.indexOf("Be the first to write a review")>-1)callAdapter("Bottom:Be the first to write a review");else callAdapter("Bottom:Write a Review");else callAdapter(writeReviewButton.innerText);if(writeReviewForm.length>0)writeReviewForm.show();else{$("#prwspinner").show();getWriteReviewForm(null,mmx).done(function(data){$("#prwspinner").hide();
$(".writeReviewBlock").html(data);var $form=$(".writeReviewBlock form");$(".sku",$form).val(sku);scrollToWriteReview($form);populateSkuPageLocalStorage(sku);bindReviewEvents(mmx,true);if(window.Analytics&&window.Analytics.tracking&&window.Analytics.tracking.item){$("#product_img").attr("src",window.Analytics.tracking.item.imageUrl);$(".product_name").html(unEntity(window.Analytics.tracking.item.name))}if(mmx){if(itemRowObj&&(window.location.pathname.indexOf("ptd/orderdetails")>-1||window.location.pathname.indexOf("ptd/mmx/orderdetails")>
-1)){var imgSrc=itemRowObj.find('div[class*\x3d"product_tile_image_container"] a img').attr("src");var itemName=itemRowObj.find('a[class*\x3d"productLink"] span').html();$("#product_img").attr("src",imgSrc);$(".product_name").html(itemName)}$(".write_review_container_mmx").show()}else $(".write_review_container").show()}).fail(function(){$("#prwspinner").hide();console.log("failed loading write review form")})}})}}function setRating($currentStarContainer,rating,isRegisterRating){var $allStars=$(".rating-star-icon",
$currentStarContainer);var $selectedStars=$(".rating-star-icon:lt("+rating+")",$currentStarContainer);var $unSelectedStars=$(".rating-star-icon",$currentStarContainer).slice(rating);$unSelectedStars.removeClass("full-fill-star-icon").addClass("empty-star-icon");$selectedStars.removeClass("empty-star-icon").addClass("full-fill-star-icon");if(isRegisterRating)$(".registeredRating",$currentStarContainer).val(rating)}function changeRating($clickedObj,isRegisterRating){var $currentStarContainer=$clickedObj.closest(".rating-stars-wrapper");
var clickedIconPosition=$clickedObj.attr("data-score");setRating($currentStarContainer,clickedIconPosition,isRegisterRating)}function callAdapter(textValue){if(window.ae&&window.ae.adapter&&window.ae.adapter.linkTrack)window.ae.adapter.linkTrack({type:"GENERIC_LINK",payload:{linkTo:"/",text:textValue}})}function dismissHandler(){$(".writeReviewModalMMX").hide();return false}function validateWriteReviewForm($form,mmx){var isValid=true;$(".row",$form).removeClass("errorRow");var starRatingElement=$(".registeredRating",
$form);var reviewContentElement=$(".review_content",$form);var reviewTitleElement=$(".review_title_input",$form);var reviewDisplayNameElement=$(".review_displayName_input",$form);if(parseInt(starRatingElement.val())<=0){starRatingElement.closest(".row").addClass("errorRow");isValid=false}if(reviewContentElement.val().length<20){reviewContentElement.closest(".row").addClass("errorRow");isValid=false}if(reviewDisplayNameElement.length>0&&reviewDisplayNameElement.val().length<=0&&pageName!="Order Details"){reviewDisplayNameElement.closest(".row").addClass("errorRow");
isValid=false}return isValid}function clearWriteReviewValidationErrors($form){$(".row",$form).removeClass("errorRow")}function saveSkuPageReview($form,mmx){try{var writeReviewDetailsString=localStorage.getItem("writeReview");var writeReviewDetailsJSON;var sku=$(".sku").val();var reviewTitle=$(".review_title_input",$form).val();var reviewContent=$(".review_content",$form).val();var reviewName=$(".review_displayName_input",$form).val();var userEnteredReviews={rating:$(".registeredRating",$form).val(),
reviewTitle:reviewTitle,reviewContent:reviewContent,reviewName:reviewName};console.log(userEnteredReviews);if(writeReviewDetailsString)writeReviewDetailsJSON=JSON.parse(localStorage.getItem("writeReview"));else writeReviewDetailsJSON={};writeReviewDetailsJSON[sku]=userEnteredReviews;localStorage.setItem("writeReview",JSON.stringify(writeReviewDetailsJSON))}catch(e){console.log("Error in saving local storage")}buildLoginLink()}function saveOrderDetailsReview($form,mmx){try{var sku=$(".sku",$form).val();
var orderNumber=getOrderNumber();var writeReviewDetailsString=localStorage.getItem("writeReview");var writeReviewDetailsJSON;var reviewTitle=$(".review_title_input",$form).val();var reviewContent=$(".review_content",$form).val();var userEnteredReviews={rating:$(".registeredRating",$form).val(),reviewTitle:reviewTitle,reviewContent:reviewContent};if(writeReviewDetailsString)writeReviewDetailsJSON=JSON.parse(localStorage.getItem("writeReview"));else writeReviewDetailsJSON={};if(!writeReviewDetailsJSON[orderNumber])writeReviewDetailsJSON[orderNumber]=
{};writeReviewDetailsJSON[orderNumber][sku]=userEnteredReviews;localStorage.setItem("writeReview",JSON.stringify(writeReviewDetailsJSON))}catch(e){console.log("Error in saving local storage")}buildLoginLink()}function clearLocalStorage(sku){try{var writeReviewDetailsString=localStorage.getItem("writeReview");var writeReviewDetailsJSON;if(writeReviewDetailsString)writeReviewDetailsJSON=JSON.parse(localStorage.getItem("writeReview"));if(isOrderDetailPage()){var orderNumber=getOrderNumber();if(writeReviewDetailsJSON&&
writeReviewDetailsJSON[orderNumber]&&writeReviewDetailsJSON[orderNumber][sku]){delete writeReviewDetailsJSON[orderNumber][sku];if(Object.keys(writeReviewDetailsJSON[orderNumber]).length===0&&writeReviewDetailsJSON[orderNumber].constructor===Object)delete writeReviewDetailsJSON[orderNumber]}}else if(writeReviewDetailsJSON&&writeReviewDetailsJSON[sku])delete writeReviewDetailsJSON[sku];if(writeReviewDetailsJSON&&Object.keys(writeReviewDetailsJSON).length===0&&writeReviewDetailsJSON.constructor===Object)localStorage.clear("writeReview");
else if(writeReviewDetailsJSON)localStorage.setItem("writeReview",JSON.stringify(writeReviewDetailsJSON))}catch(e){console.log("Error in clearing local storage")}}function handleLocalStorageAndSubmit($form,mmx){if(getCookie("SASESSION")&&getCookie("SASESSION")!="LOGGEDOFF"||getCookie("SMSESSION")&&getCookie("SMSESSION")!="LOGGEDOFF"||$(".isFromTurntoRSE",$form).val()=="true"){var sku=$(".sku",$form).val();clearLocalStorage(sku);submitReviewAjaxCall($form,mmx)}else if(isOrderDetailPage())saveOrderDetailsReview($form,
mmx);else saveSkuPageReview($form)}function hasLocaStorage(sku){try{var writeReviewDetailsString=localStorage.getItem("writeReview");if(!writeReviewDetailsString)return false;var writeReviewDetailsJSON=JSON.parse(writeReviewDetailsString);if(!writeReviewDetailsJSON||!writeReviewDetailsJSON[sku])return false;else{var userReview=writeReviewDetailsJSON[sku];return userReview}}catch(e){console.log("error in getting local storage write Review for sku"+sku)}}function populateSkuPageLocalStorage(sku){try{var userReview=
hasLocaStorage(sku);if(userReview){var $form=$(".writeReviewBlock form");$(".registeredRating",$form).val(userReview["rating"]);var currentStarContainer=$(".rating-stars-wrapper",$form);setRating(currentStarContainer,userReview["rating"],false);$(".review_title_input",$form).val(userReview["reviewTitle"]);if(userReview["reviewContent"])if($(".write_review_container_mmx .review_description_label"))$(".write_review_container_mmx .review_description_label").removeClass("review_description_label").addClass("review_description_focussed");
$(".review_content",$form).val(userReview["reviewContent"]);if(userReview["reviewName"])$(".review_displayName_input",$form).val(userReview["reviewName"])}}catch(e){console.log("Error in populationg data from local storage")}}function populateOrderDetailsLocalStorage(sku,$form){try{var writeReviewDetailsString=localStorage.getItem("writeReview");var orderNumber=getOrderNumber();if(!writeReviewDetailsString)return true;var writeReviewDetailsJSON=JSON.parse(writeReviewDetailsString);if(!writeReviewDetailsJSON||
!writeReviewDetailsJSON[orderNumber]||!writeReviewDetailsJSON[orderNumber][sku])return true;else{userReview=writeReviewDetailsJSON[orderNumber][sku];$(".registeredRating",$form).val(userReview["rating"]);var currentStarContainer=$(".rating-stars-wrapper",$form);setRating(currentStarContainer,userReview["rating"],false);$(".review_title_input",$form).val(userReview["reviewTitle"]);if(userReview["reviewContent"])$(".review_content",$form).val(userReview["reviewContent"])}}catch(e){console.log("Error in populationg data from local storage")}}
function hasOrderPageSkuLocalStorage(sku){var writeReviewDetailsString=localStorage.getItem("writeReview");var orderNumber=getOrderNumber();if(!writeReviewDetailsString)return false;var writeReviewDetailsJSON=JSON.parse(writeReviewDetailsString);return writeReviewDetailsJSON&&writeReviewDetailsJSON[orderNumber]&&writeReviewDetailsJSON[orderNumber][sku]}function submitReview($form,mmx){if(validateWriteReviewForm($form,mmx))handleLocalStorageAndSubmit($form,mmx);return false}function buildLoginLink(){var hash=
window.location.hash;var currentUrl=window.location;try{window.location.href="https://"+document.domain+propertyValues.POST_DOMAIN+"login?langId\x3d"+propertyValues.DEF_LANG_ID+"\x26userRedirect\x3dtrue\x26storeId\x3d"+propertyValues.DEF_STORE_ID+"\x26catalogId\x3d"+propertyValues.DEF_CATALOG_ID+"\x26jumpUrl\x3d"+currentUrl+hash}catch(e){window.location.href="https://"+document.domain+"/office/supplies/login?langId\x3d"+getLangIdFromLocale()+"\x26userRedirect\x3dtrue\x26jumpUrl\x3d"+currentUrl}}function getCookie(cname){var name=
cname+"\x3d";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}function submitReviewAjaxCall($form,mmx){var starRatingElement=$(".registeredRating",$form).val();var reviewContentElement=$(".review_content",$form).val();var reviewTitleElement=$(".review_title_input",$form).val();var reviewDisplayNameElement=$(".review_displayName_input",
$form).val();var firstName=$(".firstName",$form).val();var lastName=$(".lastName",$form).val();var emailAddress=$(".email",$form).val();var nickName=$(".nickName",$form).val();var isOrderDetailsPage=isOrderDetailPage();var sku=$(".sku",$form).val();var tokenToReturn=$(".tokenToReturn",$form).val();var langId=getLocale();var reviewJson={rating:starRatingElement,text:reviewContentElement,title:reviewTitleElement,emailAddress:emailAddress?emailAddress:isOrderDetailsPage?$("#email").val():"",firstName:firstName?
firstName:isOrderDetailsPage?$("#firstName").val():"",lastName:lastName?lastName:isOrderDetailsPage?$("#lastName").val():"",nickName:reviewDisplayNameElement,jwtTokenForVerification:tokenToReturn};var url="/prw/writeReview/"+sku+"?langId\x3d"+langId;$("#prwspinner").show();$.ajax({type:"POST",contentType:"application/json",url:url,data:JSON.stringify(reviewJson),success:function(result,status,xhr){$("#prwspinner").hide();if(xhr.status=="200")showSuccessMsg(mmx);if(isOrderDetailsPage)$form.closest(".writeReviewBlock").html("").closest(".product_review_tr").slideUp(400);
else{window.location.hash="";$(".writeReviewBlock").html("")}if(mmx&&window.location.hostname.indexOf("staplesadvantage.com")>-1&&window.location.pathname.indexOf("ptd/orderdetails")<0&&window.location.pathname.indexOf("ptd/mmx/orderdetails")<0)callAdapter("Overlay:Product Detail:Write a review:Submit");else callAdapter("Overlay:Please review your purchase:Submit your Review")},error:function(xhr,status,data){$("#prwspinner").hide();if(xhr.status=="401")if(isOrderDetailPage())saveOrderDetailsReview($form);
else saveSkuPageReview($form);else if(xhr.status=="400")showBadRequestErrors(xhr,$form);else if(xhr.status=="429"){window.location.hash="";$(".writeReviewBlock").html("");showAlreadySubmittedMsg(true)}else showGenericErrorMsg()}})}function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,"\\$\x26");var regex=new RegExp("[?\x26]"+name+"(\x3d([^\x26#]*)|\x26|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return"";return decodeURIComponent(results[2].replace(/\+/g,
" "))}function parseJwt(token){var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");return JSON.parse(window.atob(base64))}function getWriteReviewForm(turntoNotificationData,mmx){var langId=getLocale();var writeReviewUrl;if(mmx)writeReviewUrl="/prw/"+langId+"/writeReview/true/mmx";else writeReviewUrl="/prw/"+langId+"/writeReview/false/mmx";if(turntoNotificationData)writeReviewUrl=writeReviewUrl+"?turntoNotificationData\x3d"+turntoNotificationData+"\x26langId\x3d"+
langId;return $.ajax({url:writeReviewUrl})}function getLocale(){var locale=getCookie("langPref");if(locale==null||locale==undefined||locale=="")locale="en_us";if($(".writeReviewBlock .locale")[0])locale=$(".writeReviewBlock .locale")[0].value;else if($("nav[data-locale]")[0])locale=$($("nav[data-locale]")[0]).attr("data-locale");return locale}function getLangIdFromLocale(locale){var langId;switch(getLocale()){case "en_US":langId=-1;break;case "en_CA":langId=1;break;case "fr_CA":langId=2;break;default:langId=
-1}return langId}function bindModalCloseEvent(){$(".writeReviewModal .write_review_modal_close").off("click");$(".writeReviewModal .write_review_modal_close").on("click",function(){$(".writeReviewModal").hide();return false});$(".writeReviewModalMMX .write_review_modal_close").off("click");$(".writeReviewModalMMX .write_review_modal_close").on("click",function(){$(".writeReviewModalMMX").hide();return false});$(".writeReviewModalMMX .review-popup-mmx-dismiss").off("click");$(".writeReviewModalMMX .review-popup-mmx-dismiss").on("click",
function(){$(".writeReviewModalMMX").hide();return false})}function getReviewStaticHtml(callbackFunc,mmx){if($("#staticContent").length>0){callbackFunc();return true}var reviewStaticHtmlUrl;if(mmx)reviewStaticHtmlUrl="/prw/html/reviewStaticMMX_"+getLocale().toLowerCase()+".html";else reviewStaticHtmlUrl="/prw/html/reviewStatic_"+getLocale().toLowerCase()+".html";if(!$("#staticHtml").length>0)$("body").append('\x3cdiv id\x3d"staticHtml"\x3e\x3c/div\x3e');$("#staticHtml").load(reviewStaticHtmlUrl,callbackFunc);
if(pageName&&pageName=="odinsku")$("#staticHtml").addClass("skuPage")}function setTermsOfUseUrl(){if(window.location.href.indexOf("staples.com")>-1)$(".terms_of_use_link").attr("href","https://www.staples.com/hc?id\x3df0410bcc-7637-4839-8739-779ce6036d16");else if(window.location.href.indexOf("staplesadvantage.com")>-1)$(".terms_of_use_link").attr("href","https://www.staplesadvantage.com/html/help/link/Terms_and_Conditions.htm?isEthicalSourcing\x3dfalse#review_terms_and_conditions")}function showReviewGuidelines(mmx,
writeReviewPage){if(mmx){getReviewStaticHtml(function(data){if(writeReviewPage){$(".review_guidelines_mmx_data").html($("#writeReviewGuide").html());$(".review_guidelines_mmx_data").show();$(".review_guide_link_mmx").hide();$(".review_guide_hide_link_mmx").show();$(".dismiss_button_div_mmx").hide()}else{bindModalCloseEvent();$(".writeReviewModalMMX .modal-content").html($("#writeReviewGuide").html());$(".writeReviewModalMMX").show();$(".dismiss_button_div_mmx").hide()}setTermsOfUseUrl()},true);return false}else{getReviewStaticHtml(function(data){bindModalCloseEvent();
$(".writeReviewModal .modal-content").html($("#writeReviewGuide").html());$(".writeReviewModal").show();setTermsOfUseUrl()});return false}}function showSuccessMsg(mmx){if(mmx)getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModalMMX .modal-content").html($("#writeReviewSuccess").html());$(".writeReviewModalMMX").show()},true);else getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModal .modal-content").html($("#writeReviewSuccess").html());$(".writeReviewModal").show()})}
function showUnsubscribeMsg(){getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModal .modal-content").html($("#unSubscribeSuccess").html());$(".writeReviewModal").show()})}function showAlreadySubmittedMsg(mmx){if(mmx)getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModalMMX .modal-content").html($("#writeReviewAlreadySubmitted").html());$(".writeReviewModalMMX").show()},true);else getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModal .modal-content").html($("#writeReviewAlreadySubmitted").html());
$(".writeReviewModal").show()})}function showGenericErrorMsg(){getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModal .modal-content").html($("#writeReviewGenericError").html());$(".writeReviewModal").show()})}function showModal(modalContent){getReviewStaticHtml(function(){bindModalCloseEvent();$(".writeReviewModal .modal-content").html(modalContent);$(".writeReviewModal").show()})}function showBadRequestErrors(xhr,$form){clearWriteReviewValidationErrors($form);if(xhr.responseJSON&&
xhr.responseJSON.responseCodes){var errorMsg="";$.each(xhr.responseJSON.responseCodes,function(index,value){var currentError=value;if(currentError["code"]=="PRW03")$(".registeredRating",$form).closest(".row").addClass("errorRow");else if(currentError["code"]=="PRW02")$(".review_content",$form).closest(".row").addClass("errorRow");else if(currentError["code"]=="PRW06")$(".review_displayName_input",$form).closest(".row").addClass("errorRow");else errorMsg=errorMsg+"\x3cp\x3e"+currentError["message"]+
"\x3c/p\x3e"});if(errorMsg)showModal(errorMsg)}}function getOrderNumber(){if(orderNumber==null)return $("#orderdetails_ordernumber").length>0?$("#orderdetails_ordernumber").val():$(".stp-orderdetails-ordernumberhead .stp-orderdetails-ordernumber:last").text();else return orderNumber}function scrollToWriteReview($form){location.hash="writeReviewButton";$(".review_guide_link",$form).focus()}function unEntity(str){if(str)return str.replace(/&amp;/g,"\x26");else return""}function isOrderDetailPage(){return window.location.pathname.indexOf("ptd/orderdetails")>
-1}var jsProps={"prodIconUrl":"","prodName":""};return{"jsProps":jsProps,"init":init}}();