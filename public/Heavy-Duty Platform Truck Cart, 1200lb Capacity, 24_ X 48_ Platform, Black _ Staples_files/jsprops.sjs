<!--#config timefmt="%b %d, %Y %H:%M:%S" -->
var chat_switch = "OFF";
var chat_locale_switch = "ON";
var chat_open_time = "8:00";
var chat_closed_time = "20:00";
var chat_open_days = "23456";
		
function chatActive(dateStamp) {

	if ( dateStamp == null ){
  		dateStamp = new Date();
	}
	
	var pass = false;	
	var easternDate = new Date(dateStamp);
	
	//var offset = tempDate.getTimezoneOffset();	
	//var totalOffset = offset - 300;
	
	//var easternDate = new Date(tempDate.getTime() + (totalOffset * 60000));
	
	var day = easternDate.getDay();
	
	if (chat_switch.toUpperCase() === "ON" && chat_locale_switch.toUpperCase() === "ON") {
		
		if(day != 0 && day != 6){
			
			var time = easternDate.getHours();
			
			//Check if date is between 8 am to 8 pm
			if (time >= 8 && time < 20) {
			   pass = true;
			} 
		}
	}

	return pass;
}
	
	
	var propertyValues = new Object;
	propertyValues = ( {
	
	timeStamp: 1518770102198,

	scodeSwitch: 'OFF',
	mBoxSwitch: 'OFF',
	ux2HeaderEnabled: 'OFF',
	ux2TopHatEnabled: 'OFF',
	UX20_ATC_OVERLAY_SWITCH: 'ON',
	
	
	staplesDCCookieSwitch: 'ON',
	staplesDCCookieValidValueSet: 'NC1,NC2,NC3,NDM,NDM2,NDM3,BOU',
	staplesDCCookieValue: 'NC1',
	staplesDCCookieResetLifeInHours: '2',
	
	
	runaSwitch:	'OFF',
	DEF_LANG_ID: '-1',
	DEF_STORE_ID: '10001',
	defaultLocale: 'en_US',
	
	DEF_CATALOG_ID: '10051',
	DEF_CATALOG_IDENTIFIER: '2',
	
	CONTENT_PATH: '/sbd/content',
	HTML_PATH: '/sbd/html',
	ICON_PATH: '/sbd/img/ico/',
	COMMON_ICON_PATH: '/sbdpas/img/ico/',
	CSS_PATH: '/sbdpas/css/',
	JAVASCRIPT_PATH: '/sbdpas/js/',
	JAVASCRIPT_PATH_RELATIVE: '/sbdpas/js/',
	HELP_PATH: '/sbd/help',
	PDF_PATH: '/sbd/pdf',
	IMAGE_PATH: '/sbd/img/',
	PRODUCT_IMAGE_PATH: '/sbd/img/prod/',
	POST_DOMAIN: '/office/supplies/',
	BACKGROUND_IMAGE_PATH: '/sbd/img/bg/',
	COMMON_BACKGROUND_IMAGE_PATH: '/sbdpas/img/bg/',
	XSL_PATH: '/office/supplies/StaplesB2CPAS/cat/',
	FORESEE_PATH: '/sbdpas/js/foresee/',
	
	
        s7secure: 'https://www.staples-3p.com/s7',
        s7kiosksecure: 'https://www.staples-3p.com/s7',
        s7nonsecure: 'http://www.staples-3p.com/s7',
	
		
        s7path: '/is/image/Staples/{0}_sc7',
        s7noimagepath: '/is/image/Staples/{0}',
        s7reddotpath: '/is/image/Staples/reddot?{3}&$imgsrc={0}&$headline=SAVE&$symbol=%24&$dollars={1}&$cents={2}',

	cookiepage: '/sbd/sbd/content/help/cookieerror.html',
	redirectpage: '/sbd/sbd/cre/resources/browserupgrade/index.html',
	
	
	samuserInfo: 'Contact',
	
        loading: 'Loading...',

		
        logout: 'Sign Out',

		
		login: 'Sign In',		
        
		
		welcomedefaultloggedin: 'You are signed in.',
		
		
		welcomeuserloggedin: 'Hi, {0}',	
		
		
		welcomeMsgForGuestUser: 'WELCOME, PLEASE SIGN IN',		
		
		
		welcomeMsgForGuestUser:	'WELCOME, PLEASE SIGN IN',		
		
		
        closewindow: 'Close X',
	
	wait: 'Wait',
	moreAbout: 'More about',
	lessAbout: 'Less about',
	
    addtocart: 'Add to Cart',
	visitStaples: 'Visit Staples.com',
	learnMore: 'Learn More',
	
	
	
	Qty: 'Qty',
	AddToFav:'Add To Favorites',
	
	
	CartItem: 'item',
	CartItems: 'items',
	
	newCustomer: 'New Customer ?',
	startHere: 'Start Here.',

	
	cartOverLayFlag: 'ON',
	
		reviewsMasterSwitch: 'ON',	
		
		
		reviewsFeaturedItemsThreshold: '0',
	
		checkoutExclusionPages: 'yourorder,shippinginfo,paymentinfo,revieworder,orderconf,orderconfprnt,kioskexpresscheckout,kioskrevieworder,checkoutenteraddress,checkoutreviewandpay',
		
		
	isChatOpen: chatActive('<!--#echo var="DATE_LOCAL" -->'),
		masterChatSwitch: 'OFF',
		showChatOnSku: 'OFF',
		showChatOnHome: 'OFF',
		moxieProChatSwitch: 'OFF',
		powerFrontProChatSwitch: 'ON',	
		powerFrontChatURL: 'stp-tracker.inside-graph.com/gtm/IN-1000306/include.js',
		powerFrontGlobalChatSwitch: 'ON',			
		
	analyticsSwitch: 'ON',
	
	
	analyticsEnv: 'PROD',
	analyticsReportSuiteDev: 'staplescomdev',
	analyticsReportSuiteProd: 'staplescomprod',
	
    	
	socialLeaderBoardSwitch: 'ON',	
	socialLeaderBoardSecurePagesSwitch: 'OFF',
	      
		
	searchAutocomplete: 'ON',
	
		
	inkTonerAutocomplete: 'ON',

		
	flyoutAnalytics: 'Flyout:{0}:{1}:{2}',	

		
	samHeaderMakestartpageSwitch: 'ON',
	samHeaderShowuserdataSwitch: 'ON',

	
	ajaxLoggingSwitch: 'ON',
	
	ajaxPerformanceSwitch: 'OFF',
	
        ajaxTimeout: '10000',
    
        personalizationSwitch: 'ON',
    
	    atcMarvinSwitch: 'ON',

	
			
	
	 paginateAjaxErrorString: 'The last pagination operation failed.',
	filterAjaxErrorString: 'The last filter operation failed. ',  
	sortAjaxErrorString: 'The last sort operation failed.',
	
	
	compAjaxErrorString: 'The last operation failed.',
	
	badAuth: '***The authorization code passed is incorrect***',
	pilotOff: '***Pilot mode is off***',
	pilotMode: '***You are in pilot mode!!***',
	missingParms: '***One or more url parameters are missing***',
	ERR_REQUIRED: 'This is a required field. Please enter the information.',
	ERR_POBOX_MSG:'Staples cannot deliver to post office boxes. Please enter a street address.',
	ERR_FNAME_REQUIRED: 'Your first name is required.',
	ERR_LNAME_REQUIRED: 'Your last name is required.',
	ERR_PHONE_REQUIRED: 'Phone number is invalid',
	ERR_EMAIL_INVALID_FORMAT: 'Your email address must be entered in a valid format. Please check it and try again.',
	ERR_PHONE_TEN_DIGITS: 'Phone number should be 10 digits (xxx-xxx-xxxx), including an area code. Please check it and try again.',
	ERR_AREA_CODE_LIMIT: 'Please check it and try again.',
	ERR_REENTER_EMAIL_ADDRESS: 'Your email address do not match.',
	ERR_AREA_CODE: 'Please check it and try again.',
	POPUP_WARNING: 'Leaving this page will result in losing the data that you have edited.',
	ERR_ZIP_BETWEEN_FIVE_NINE_DIGITS: 'Please verify that you are entering a valid zip code',
	ERR_CC_CANNOT_BE_AUTHENTICATED: 'The credit card cannot be authenticated with the information provided.',
	ERR_CCIN_FOUR_DIGITS: 'It must be 4 digits. Please check it and try again.',
	ERR_CCIN_THREE_DIGITS: 'It must be 3 digits. Please check it and try again.',
	ERR_NOT_FUTURE_DATE: 'The expiration month and year must be set to the future',
	ERR_NOT_ALL_ZEROES: 'It cannot be all zeros. Please check it and try again.',
	ERR_PAY_NOTE_TOO_LONG: 'The note cannot be more than 32 characters in length',
	GENERIC_ERROR_HEADER: 'Sorry, but an error has been made.',
	GENERIC_ERROR_LINE_2: 'Please check the following field(s):',
	ERR_CC_NUM_INVAL_FOR_TYPE: 'Please verify the credit card information and try again.',
	POW_FAILURE: 'Error: unable to process your request at this time. Please try again later.',
	
	
	ERR_AFF_PASSWORDS_DONT_MATCH: 'Password and retyped password do not match',
	ERR_AT_LEAST_SIX_TWELVE_CHARS: 'Enter a valid password that meets the requirements.',
	ERR_IMA: 'Cannot apply Invoice My Account while other payments are chosen',
	ERR_IMA_CC: 'This order must be paid by credit card due to the extended delivery date of one of the items.',
	ERR_IMA_PNI_CC: 'Invoice my account is not available for print products. Please choose Credit Card or Visa Checkout to pay for this order. ',
	ERR_REWARDS_SYS_ERROR: 'We&#039;re sorry. We are unable to process your Rewards&amp;reg; request at this time. Please try again soon.',
	ERR_BILLING_FIRSTNAME_ERROR: 'Your first name is required.',
	ERR_AT_LEAST_ONE_ALPHA : 'Must contain at least 1 alpha character (a..z, A..Z).',
	ERR_BILLING_LASTNAME_ERROR: 'Your last name is required.',
    ERR_BILLING_ADDR_ONE_ERROR: 'Your address is required.',
 	ERR_BILLING_CITY_ERROR: 'Your city is required.',
 	ERR_BILLING_STATE_ERROR: 'Your State is required.',
	ERR_BILLING_ZIP_ERROR: 'Your zip code is required.',
	ERR_BILLING_PHONE_ERROR: 'Your phone number is required.',
	
	
	
	miniCompExpand: 'Expand to See More',
	
	
    Comparison:{
	alertcompareItem: 'Please select at least 2 items to compare',
	alertselectItemLimit: 'You may only select up to three items to compare',
	alertselectMoreItem: 'Please select one more item to compare',
	TryAgain: 'Try again',
	
	selected: 'You&#039;ve selected these items to compare'
	},

 	
    HomePage:{
	MakeHomePage: 'Make Home Page',
	Rewards: 'Rewards#'
	},
	
	
	
    AddToCart:{	
	Attention: 'Attention',
	PleaseWait: 'Please wait..',
	ViewCart: 'View Cart',
	ATCOverlay: 'ATC Overlay',
	
	Close: 'Close',
	ProductDetail: 'Product Detail',
	waitMessage:'Please wait while we add the items to your cart.',
	addToCartErrorMessage:'We are unable to process your request at this time.Please close this window and try again.',
	addToCartQuantityMessage:'Please add a quantity.',
	addToCartTimeOutMessage:'We may encounter an error while adding items to cart. Please view your cart for details.',
	itemAdded: 'item(s) successfully added.',
	continueShopping: 'Continue Shopping',
	favCheckout: 'Checkout '
	},

	
    Flyout:{
		
	flyoutCmsp: 'merchandising-_-Flyout {0}-_-{1}',
	flyoutAnalytics: 'Flyout:{0}:{1}:{2}',
	flyoutSetDefaultAnalytics:  'SaveAsDefault:{0}',
	flyoutSearchTextCartridge: 'Cartridge Number Search',
	flyoutSearchTextPrinter: 'Printer Model Number Search',
	flyoutSearchTextInkandToner: 'Ink &amp; Toner I&#039;ve Ordered Before',
	flyoutTimeoutOpenMS: '200',
	flyoutTimeoutCloseMS: '1000',		
	flyoutPreloadMaxIndex: '3',
	homePageFlyoutAjaxSwitch: 'OFF',
	nonHomePageFlyoutAjaxSwitch: 'ON'
	},
	 //Carousel Static Data
    Carousel:{
	
        previous: '&laquo; Previous',
        next: 'Next &raquo;',
        label_bmsm: 'Buy More Save More',

		
        carouselitemcounter: '{0}-{1} of {2} items',
        carouselitemtotal: '{0} of {0} items',

		
        expand: 'Expand to See All',
        collapse: 'Collapse'
 	},
	
    Personalization:{
	source: 'Personalization source:',
	noproducts: 'Personalization: no products on'
	 },
	
    Autocomplete:{
	selectSearch: 'Type to see suggested terms',
	keywordMatches: 'Keyword Matches',
		department: 'Department',
		shopByBrand: 'Shop by Brand',
	weeklyDeals: 'Weekly Deals',
		previouslyPurchasedItems: 'Past Purchases',
		brandDepartmentResultsSwitch:false,
		productResultsSwitch:true,
		maxProdLinks : '3',
		brandDepartmentURL: '/ws/tpahead-json',
		productURL: '/office/supplies/StaplesB2CPAS/cat/autocompletedata.jsp',
		endicaMinChars: 1,
		endicaMaxChars: 20
	  },
	
    SKU:{
	xslLoaderr: 'Stylesheet not loaded.Error in line',
	seeDetails: 'See Details'
 	},
	
    SearchPage:{
	convertListIteam: 'Update Results',
	toggleListItemmore: 'More',
	toggleListItemless: 'Less',
	requiredFieldError: 'Please enter values in both fields',
	validationError: 'The &#039;From&#039; value should be less than &#039;To&#039; value'
	 },
	ClassPage:{
	requiredFieldError: 'Please enter values in both fields',
	validationError: 'The &#039;From&#039; value should be less than &#039;To&#039; value'
	 },
	
    CheckoutreviewandpayPage:{
	giftscardsalreadyapplied: 'The maximum number of Staples Gift Cards has already been applied.',
	invalidgiftcardnumber: 'We&#39;re sorry, this is an invalid Gift Card Number, please try again.',
	invalidpin: 'We&#39;re sorry, this is an invalid PIN, please try again.',
	enterpin: 'Enter 4 digit pin.',
	giftcardapplied: '<p><strong>Gift card value applied.</strong></p><p>Amount due: $',
	easygiftcardapplied:'Remaining Balance: $',
	easygiftcardremoved:'<p></p> The Staples Gift Card has been removed.',
	easyrebatecardremovedmsg:'<p></p> The Staples Rebate Credit Card has been removed.',
	enteradditionalgiftcards: '.</p><p>Enter additional gift cards or select a credit card for remaining balance; if necessary</p>',
	submityourorder: '.</p><p>Please submit your order</p>',
	balance: 'Balance $',
	giftcardremoved: 'The Staples Gift Card has been removed.',
	clickapply: 'You must click &#39;Apply&#39; if you wish to use the gift card/rebate card entered for this order.',
	notastaplesgiftcard: 'We&#39;re sorry this is not a Staples Gift Card.',
	rebatecardsalreadyapplied: 'The maximum number of Staples Rebate Credit Cards has already been applied.',
	invalidrebatecardnumber: 'We&#39;re sorry, this is an invalid rebate card number, please try again.',
	invalidcid: 'We&#39;re sorry, this is an invalid CID, please try again',
	rebatecardexpirationmonth: 'The Staples Rebate Credit Card expiration date must be entered.',
	expirationmonth: 'We&#39;re sorry, the expiration month and year must be set to the future.',
	rebatecardapplied: '<p>Rebate card value applied. Amount due: $',
	enteradditionalrebatecards: '.</p> <p>Enter additional cards or select a credit card for remaining balance; if necessary</p>',
	rebatecardremoved: 'The Staples Rebate Credit Card has been removed.',
	notastaplesrebatecard: 'We&#39;re sorry this is not a Staples Rebate Card.',
	requiredfiledenterinfo: 'This is a required field. Please enter the information.',
	checkcardinfoandtryagain: 'Please verify the credit card information and try again.',
	cidmustbenumeric: 'The Prepaid Gift Card CID must be numeric.',
	numbermustbe4digit: '&lt;p&gt;Card ID Number must be 4 digits.&lt;/p&gt;&lt;p&gt;Please check it and try again.&lt;/p&gt;',
	idnumbermustbe3digit: 'Card ID Number must be 3 digits. Please check it and try again.',
	prepaidcardexpiration: 'The Prepaid Gift Card expiration date must be entered.',
	prapaidexpirationmonth: 'The expiration month and year must be set to the future',
	prepaidcardnotapplied: 'The Prepaid Gift Card has not been applied.',
	creditcardcidmustbenumeric: 'The Credit Card CID must be numeric.',
	selectedcreditcidnumeric: 'The selected Credit Card CID must be numeric.',
	invalidairmilenumber: 'An error has occurred: The collector number you entered is invalid.					',
	invalidEmailAddress: 'We&amp;#39;re sorry, this is an invalid email address. Please try again.',
	vmeSubmitErrorMessage: 'You are currently not logged into Visa Checkout. Please sign in to Visa Checkout to continue.'
	 },
	 
	 socialIcons:{
		masterSwitch: 'ON'
	 },	 
	 
	 deferredFinance:{
	 		deferredFinancingSwitch: 'ON',
	 		deferredFinancingBinRange: '79721,79722,79723,79724,79725,79726,79727,79728,79729,60355178,60355179',
	 		deferredFinancingOptions: '299,499,799'
	 },
	 
	 favoriteList:{
	 		removeItemMsg: 'Are you sure you want to remove this item?',
	 		removeItemBtn: 'Remove',
	 		cancelBtn: 'Cancel',
	 		addAllConfirmMsg: 'Item(s) will be added to the cart.',
	 		addAllConfirmBtn: 'Confirm'
	 }, 
	 
	 deleteList:{
	 		deleteListMsg: 'Are you sure you want to delete this list?',
	 		deleteListBtn: 'Delete',
	 		cancelBtn: 'Cancel'
	 }, 
	 easyCheckOutPage:{
	 	pageConstants:{
	 		ECPCSheaderEditText: 'Edit',
			ECPCScartItemText: 'item',
			ECPCScartItemsText: 'items',
			ECPCScartPickupText: 'Available in 1 hour!',
			ECPCScartQuantityText: 'Qty.',
			ECPCScartEcoFeeURL: '/sbd/content/help/environmental_fee_popup.html',
			ECPCScartEcoFeeText: '',
			ECPCScartTotalEcoText: '',
			ECPCScartSoftwareDownloadText: 'Software Downloads',
			ECPCScartDeliveryText: 'Available in',
			ECPCScartDeliveryTextForBOSKU: 'Order now for estimated arrival on',
			ECPCScartEddieshipdetailsText: 'Estimated to arrive no later than ',
			ECPCSpopupcloseText: 'Close',
			ECPCSpopCouponText: 'COUPONS',
			ECPCSpopRewardsText: 'REWARDS',
			ECPCSpopCouponAppliedText: 'Applied:',
			ECPCSpopCouponExpiredText: 'Expired',
			ECPCSpopAddEditCouponText: 'Add/Edit Coupons and Rewards ',
			ECPCSorderSubtotal1Text: 'Order Subtotal',
			ECPCSorderIncludeText: 'Including ',
			ECPCSorderCouponText: 'Coupons',
			ECPCSorderSubtotal2Text: 'Order Subtotal:',
			ECPCSorderShippingText: 'Shipping:',
			ECPCSorderHandlingText: 'Oversize Shipping Fees:',
			ECPCSorderRewardsText: 'Rewards:',
			ECPCSorderGSTHSTText: '',
			ECPCSorderPSTText: '',
			ECPCSorderPreTaxText: 'Pre-Tax Subtotal:',
			ECPCSorderTaxText: 'Estimated tax:',
			ECPCSorderGiftCardsText: 'Gift/Rebate card:',
			ECPCSorderTotalText: 'TOTAL:',
			ECPCSorderOfferMsg: 'Exclusive Offers have been applied where applicable.',
			ECPCSorderRebateMsg: 'Rebate details will be communicated in your order confirmation ',
			ECPCScartBusinessDayText: 'Business Day',
			ECPCScartBusinessDaysText: 'Business Days',
			ECPCSorderFreeText: 'Free',
			ECPCScartLoadingMsg: 'Loading your cart information',
			ECPCScartReloadBtnTxt: 'Click to Reload',
			ECPCScartajaxRqstErrMsg: 'Your cart information is currently not available.',
			ECPCScartPickupHeaderMsg: 'PICK UP',
			ECPCScartDeliveryHeaderMsg: 'DELIVERY',
			ECPCSTimeOutValue: '120000'
		}
	 },
	 autoRestockPage:{
	 		couponCodeText: 'Coupon Code:',
			couponsMoreInfoText: 'More info',
			couponsExpiryText: 'Expires',
			couponsAppliedText: 'Applied',
			rewardsText: 'Rewards',
			couponsNotAppliedText: 'Not qualified',
			couponsFieldErrText: 'Please enter a coupon code.',
			addeditCouponsText: 'Add/Edit Coupons',
			invalidcouponText: 'ERR_PROMOTION_CODE_INVALID',
			duplicateCouponText: 'You have already applied this Coupon. Please enter a different Coupon.',
			invalidCouponLengthText: 'Please double-check or reenter to make sure the 5 or 16 digit coupon code is typed correctly.',
			rewardsFieldErrText: 'Please enter a reward coupon code.',
			invalidRewardText: 'ERR_PROMOTION_CODE_INVALID',
			duplicateRewardText: 'You have already applied this Rewards Coupon. Please enter a different Rewards Coupon.',
			invalidRewardLengthText: 'Please double-check or reenter to make sure the 16 digit reward coupon code is typed correctly.'
	 },
	loginReminderTimeDifference: '',
	dailyDealDay: 'Day',
	dailyDealDays: 'Days',
	
	dailyDealLeftToBuy: 'left to buy',
	dailyDealTimeToLaunch: 'Starting in ',
	lightningGlobalOn: 'ON',
	lightningSectionOn: 'OFF',
	lightningTrainPCent: '40',
	
	 
	 seoControlLinks: 'OFF',
	 ERR_EASY_CC_CID_LENGTH_4: 'Card ID Number must be 4 digits.Please check it and try again.',
	 SET_YOUR_STORE: 'Set Your Store',
	 ERROR_VALID_ZIPCODE: 'Please enter a valid zipcode',
	 CHANGE_YOUR_STORE: 'Change Your Store',
	 CHANGE_SHIP_TO_STORE_LOCATION: 'Change ship to store location',
	 SHIP_TO_THIS_STORE: 'SHIP TO THIS STORE',
	 PICK_UP_AT_THIS_STORE: 'PICK UP AT THIS STORE',
	 CHANGE_PICK_UP_STORE: 'Change Pick Up Store Location',
	 storeOverlayLimit: '3',
	 storeOverlayPageLimit: '3',
	 bopisSwitchStatus:'ON',
	 storeFlyoutLimit: '3',
	 storeDistanceUnit: 'mi',
	 pickUpFirstNameError:'First Name*',
	 pickUpLastNameError:'Last Name*',
	 bopisShippingMessage:'Pick up in Store items ready in 1 hour.',
	 sleUrlBopis: 'api.staples.com/v1/storelocator/storesSearch.json?client_id=5HqW3l3dv9NEoEH7chtC6wdwSAsN4viE',
	 
	 javascriptEnabledForSEOControl: 'OFF',
	 trackOrderSwitch: 'ON',
	 pbOrderDetailsSwitch: 'ON',
	 ptdSecuredFlag: 'ON'
});
