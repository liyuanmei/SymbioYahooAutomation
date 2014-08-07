var Action = {};
var Assert = {};

//Action
#import "smoke/Action/FavoriteStores.js"
#import "smoke/Action/FavoriteItems.js"
#import "smoke/Action/Category.js"
#import "smoke/Action/Search.js"
#import "smoke/Action/Discovery.js"
#import "smoke/Action/MyAccount.js"
#import "smoke/Action/SideBar.js"
#import "smoke/Action/Welcome.js"
#import "smoke/Action/Shopping.js"
#import "smoke/Action/Checkout.js"
#import "smoke/Action/ItemPage.js"
#import "smoke/Action/ShoppingCartlist.js"
#import "smoke/Action/StoreListings.js"
#import "Function/Action/Category.js"
#import "Function/Action/Search.js"
#import "Function/Action/Welcome.js"
#import "Function/Action/SRP.js"
#import "Function/Action/ShoppingCart.js"
#import "Function/Action/RecentHistory.js"
#import "Function/Action/StorePage.js"
#import "Function/Action/MyAccount.js"
#import "Function/Action/ItemPage.js"
#import "Function/Action/Options.js"
#import "Function/Action/Functional.js"
#import "Function/Action/FavoriteStores.js"
#import "Function/Action/Checkout.js"
#import "Function/Action/Smoke.js"

//Assert
#import "smoke/Assert/FavoriteStores.js"
#import "smoke/Assert/FavoriteItems.js"
#import "smoke/Assert/Category.js"
#import "smoke/Assert/StorePage.js"
#import "smoke/Assert/Discovery.js"
#import "smoke/Assert/MyAccount.js"
#import "smoke/Assert/SideBar.js"
#import "smoke/Assert/TabBar.js"
#import "smoke/Assert/Welcome.js"
#import "smoke/Assert/Shopping.js"
#import "smoke/Assert/Checkout.js"
#import "smoke/Assert/ItemPage.js"
#import "smoke/Assert/ShoppingCartlist.js"
#import "smoke/Assert/StoreListings.js"
#import "smoke/Assert/Search.js"
#import "Function/Assert/Category.js"
#import "Function/Assert/Search.js"
#import "Function/Assert/Welcome.js"
#import "Function/Assert/SRP.js"
#import "Function/Assert/ShoppingCart.js"
#import "Function/Assert/RecentHistory.js"
#import "Function/Assert/MyAccount.js"
#import "Function/Assert/ItemPage.js"
#import "Function/Assert/Checkout.js"
#import "Function/Assert/Smoke.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var tabBar = app.tabBar();
var mainWindow = app.mainWindow();
var navBar = app.navigationBar();
var statusBar = app.statusBar();

var obj = {};
var sleep = 2;
var method = {};

var tabBarDiscoveryStream = tabBar.buttons()[0];
var tabBarFavoriteStores = tabBar.buttons()[1];
var tabBarCategoriesNavigation = tabBar.buttons()[2];
var tabBarShoppingCart = tabBar.buttons()[3];
var tabBarMyAccount = tabBar.buttons()[4];

obj.scrollDowns = function (total) {
    for (var j = 0; j < total; j++) {
        $.delay(5);
        app.mainWindow().collectionViews()[0].scrollDown();
    }
};

method.checkInstanceExists = function (instance) {
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(5);
    }

    var errorTimes = 0;
    if (instance.isVisible() == 1) {
        $.message(instance + " exists");
        return;
    }
    else{
        while (instance.isVisible() === 0 && errorTimes < 50) {
            errorTimes++;
            $.delay(1);
            $.message("instance not exist try: " + errorTimes + " times");
        }
    }
};

method.verifyTrue = function (expression, message, endCase) {
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(5);
    }

    if (!expression) {

        if (!message){

            var assertMessage = "Assertion failed";

            UIALogger.logError(assertMessage);
        }
        else {

            UIALogger.logError(message);
        }
    }

    if (endCase) {

        throw new AssertionException(message);
    }
};

method.verifyEquals = function (expected, received, message) {
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(5);
    }

    var defMessage = "Expected <" + expected + "> but received <" + received + ">";

    method.verifyTrue(expected == received, message ? message + ": " + defMessage : defMessage);
};

obj.scrollDownsWhenSettlement = function (total) {
    for (var j = 0; j < total; j++) {
        $.delay(5);
        app.mainWindow().scrollViews()[0].scrollDown();
    }
};

//const
//welcome
const varTestlogPage = "登入";
const varTestlogPageWelcome = "歡迎";
const varTestlogPageIgnore = "略過，前往下一步";
const varTestlogPageUsing = "開始使用";
const varTestlogPagePersonalizedSettings = "建立個人化的購物體驗";

//tab
const varTestCategoryName = "全部分類";
const varTestDiscoveryStreamName = "最新動態";
const varTestFavoriteStoreName = "最愛商店";
const varTestShoppingCartName = "購物車";
const varTestMyAccountName = "我的帳戶";

//category tab.
const varTestApparel = "服飾";
const varTestApparelPicture = "UINavigationBarBackIndicatorDefault.png";
const varTestCategoryBeautyMakeupName = "美妝";
const varTestCategoryShoeAndBagName = "鞋包配飾";
const varTestCategoryMomName = "媽咪寶貝";
const varTestCategoryComputerName = "電腦/週邊";
const varTestCategoryHomeApplianceName = "家電/視聽";
const varTestCategoryCameraName = "相機/手機/玩具";
const varTestCategoryFoodName = "美食/纖體/保健";
const varTestCategoryMedicalName = "醫療/日用品/寵物";
const varTestCategoryHouseholdLifeName = "居家/寢具/傢俱";
const varTestCategoryActionName = "運動/戶外/票券";
const varTestCategoryBooksName = "圖書/文具/影音";

//ClassificationTab and CommodityTab
const varTestCategoryClassificationTab = "分類";
const varTestCategoryCommodityTab = "商品";
const varTestCategoryStoreTab = "商店";
const varTestCategoryOurShopCommodityTab = "本店商品";
const varTestCategoryOurShopClassificationTab = "本店分類";

//Category apparel item
const varTestCategoryItemName1 = "漢神百貨品牌服飾";
const varTestCategoryItemName2 = "漢神百貨內睡衣";
const varTestCategoryItemName3 ="流行女裝";
const varTestCategoryItemName4 = "中大尺碼女裝(M-7L)";
const varTestCategoryItemName5 = "女性內睡衣";
const varTestCategoryItemName6 = "品牌/潮流男裝";

//Category list.
const varTestCategoryBeautyMakeup = "美妝";
const varTestCategoryShoeAndBag = "鞋包配飾";
const varTestCategoryMom = "媽咪寶貝";
const varTestCategoryComputer = "電腦/週邊";
const varTestCategoryHomeAppliance = "家電/視聽";
const varTestCategoryCamera = "相機/ 手機/玩具";
const varTestCategoryFood = "美食/ 纖體/保健";
const varTestCategoryMedical = "醫療/ 日用品/寵物";
const varTestCategoryHouseholdLife = "居家/ 寢具/傢俱";
const varTestCategoryAction = "運動/ 戶外/票券";
const varTestCategoryBooks = "圖書/ 文具/影音";

//Category list on OS 6.1
const varTestCategoryCameraCompatible = "相機/\n手機/玩具";
const varTestCategoryFoodCompatible = "美食/\n纖體/保健";
const varTestCategoryMedicalCompatible = "醫療/\n日用品/寵物";
const varTestCategoryHouseholdLifeCompatible = "居家/\n寢具/傢俱";
const varTestCategoryActionCompatible = "運動/\n戶外/票券";
const varTestCategoryBooksCompatible = "圖書/\n文具/影音";

//AdvancedBar
const varTestAdvancedBar = "進階";
const varTestConfirmbuttonExistOnNavigationBarInAdvancedBar = "確定";

//Sorting
const varTestsSortingInAdvancedBar = "排序";
const varTestsRelevanceValueInSorting = "相關度";
const varTestsPopularityInSorting = "最高人氣";
const varTestsLatestItemsInSorting = "最新上架";
const varTestsPriceLowToHighInSorting = "價錢低到高";
const varTestsPriceHighToLowInSorting = "價錢高到低";

//Browse
const varTestsBrowseInAdvancedBar = "瀏覽模式";
const varTestsListInBrowse = "列表";
const varTestsLargePictureInBrowse = "大圖";
const varTestsSmallPictureInBrowse = "小圖";

//Screening
const varTestsChooseInAdvancedBar = "篩選"
const varTestsPriceNumber100000 = "100000+ 元";
const varTestsPriceNumber0 = "0 元";
const varTestscircleImage1 = "circle.png";
const varTestscircleImage2 = "circle.png";
const varTestsbarImage1 = "bar-blu.png";
const varTestsbarImage2 = "bar-grey.png";

//Screening-item
const varTestsItemInAdvancedBarChoose1 = "可刷卡";
const varTestsItemInAdvancedBarChoose2 = "0利率";
const varTestsItemInAdvancedBarChoose3 = "可分期";
const varTestsItemInAdvancedBarChoose4=  "超商付款";
const varTestsItemInAdvancedBarChoose5 = "超商取貨";
const varTestsItemInAdvancedBarChoose6 = "有現貨";
const varTestsItemInAdvancedBarChoose7 = "有影音";
const varTestsItemInAdvancedBarChoose8 = "有圖片";
const varTestsItemInAdvancedBarChoose9 = "優良商店";

//item page buttons
const varTestsBuyButtons = "立即購買";
const varTestsAddButtons = "加入購物車";
const varTestsSettings = "Settings";
const varTestsDetermine = "確定";
const varTestsKeyboardSearch = "Search";
const varTestsKeyboardDelete = "Delete";
const varTestsTheInvoicing = "我要結帳";
const varTestsGoToDiscoveryStreamName = "前往最新動態";
const varTestsShoppingCartDelete = "刪除";
const varTestsCleanButtons = "清除";
const varTestsActivityLink = "活動價";
const varTestsEmptyList = "Empty list";

//18check18BanScreen
const varTestBackButtonOn18Ban = "未滿18歲離開";
const varTestSubmitButtonOn18Ban = "已滿18歲進入";
const varTestStaticTextsOn18Ban = "18歲以上會員始可瀏覽及購買，若您未滿18歲請勿進入";

//search input character
const varTestsSearchBoxInputDataCoat = "上衣";
const varTestsSearchBoxInputDataIphone = "iphone"
const varTestsCheckTheKeyword1 = "hone";
const varTestsCheckTheKeyword2 = "你已收藏"
const varTestsSearchBoxInputDatah = "h";
const varTestsSearchBoxInputDatas ="s";
const varTestsSearchBoxInputDatahp = "hp";
const varTestsSearchBoxInputDataForCheckEveryDeleteData = "1234";
const varTestsSearchBoxInputDataEast = "東";
const varTestsSearchBoxInputDataTokyo = "東京";
const varTestsSearchBoxInputDataModelling = "造型";
const varTestsSearchBoxInputDataSpecialCharacters = "'";
const varTestsSearchBoxInputLongData1 = "yeruieujeueu";
const varTestsSearchBoxInputLongData2 = "jjhghkjhhhhhjjjjjjhg";
const varTestsSearchBoxInputLongData3 = "jjjjjjjjhg";
const varTestsSearchBoxInputLongData4 = "jjhg";
const varTestsSearchBoxInputLongData5 = "hkkkkkhjh";
const varTestsSearchBoxInputLongData6 = "jjjjjjh";
const varTestsSearchBoxInputDataKeyword = "keyword";
const varTestsSearchBoxInputDataChinese1 = "一一二";
const varTestsSearchBoxInputDataChinese2 = "一一一二";
const varTestsSearchBoxInputDataGift = "贈品";
const varTestsSearchBoxInputDataAssertGift = "贈";

//search input store name
const varTestsSearchBoxInputDataStore1 = "東京著衣";
const varTestsSearchBoxInputDataStore2 = "Messa 米莎";
const varTestsSearchBoxInputDataStore3 = "歐可茶葉";
const varTestsSearchBoxInputDataStore4 = "miu star";
const varTestsSearchBoxInputDataStore5 = "S.DIAMOND鑽石糖甜點";

//search input goods name
const varTestsSearchBoxInputGoodsName1 = "LULUS";
const varTestsSearchBoxInputGoodsName2 = "SunShine 防水鏤空果凍平底包鞋";
const varTestsSearchBoxInputGoodsName3 = "充氣娃娃";
const varTestsSearchBoxInputGoodsName4 = "《Fun sport》《拳擊專用》美式尼龍沙包袋";
const varTestsSearchBoxInputGoodsName5 = "◇方妮FaNi◇女人我最大【鯨魚胸貼隱形胸罩】金魚胸貼提胸貼可搭洋裝比基尼泳裝";
const varTestsSearchBoxInputGoodsName6 = "洞洞涼爽內衣*無鋼圈内衣*";
const varTestsSearchBoxInputGoodsName7 = "歐可茶葉 OK TEA真奶茶 紫薯纖奶茶";
const varTestsSearchBoxInputGoodsName8 = "LULUS";
const varTestsSearchBoxInputGoodsName9 = "精選短袖上衣MIUSTAR 居家舒適感軟棉圓領短袖素T(共18色) 預購";

//Sliding Prices Data
const varTestsSlidingPricesData1 = "1020 元";

//search box
//No input the search box
const varTestsNoInputTheSearchBoxgWhenGoApparelCategory = "搜尋服飾";
const varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen = "搜尋全部商品";
const varTestsNoInputTheSearchBoxgWhengoCategoryWhenStore = "搜尋全部商店";
const varTestsNoInputTheSearchBoxgWhengoCategoryWhenClass = "搜尋全部分類";
const varTestsNoInputTheSearchBoxgWhengoCategoryWhenHanShen = "搜尋漢神百貨品牌服飾";
const varTestsNoInputTheSearchBoxgWhenGoToSleevelessTShirt = "搜尋無袖T恤";
const varTestsNoInputTheSearchBoxgWhenGoToTShirt = "搜尋T恤";
const varTestsNoInputTheSearchBoxgWhenGoToFashionWomenClothing = "搜尋流行女裝";

//logIn Window Show Correct
//mobileappstore3
const varTestsSignInAccountMobileappstore3 = "mobileappstore3"
const varTestsSignInPasswordMobileappstore3 = "A1234qwer"

const varTestsSignInAccountMobilestoresymbio4 = "mobilestoresymbio4";
const varTestsSignInPasswordMobilestoresymbio4 = "Aa123456";

const varTestsSignInAccountMobilestoresymbio2 = "mobilestoresymbio2"; 
const varTestsSignInPasswordMobilestoresymbio2 = "Aa123456";

const varTestsSignInAccountMobileappstore1 ="mobileappstore1";
const varTestsSignInPasswordMobileappstore1 = "ecmobiletest";

const varTestsSignButtonsOnlogInWindow = "Sign In";
const varTestsTextOnlogInWindow = "Forgot password or ID?";
const varTestsCreateButtonsOnlogInWindow =  "Create Account";

//search module buttons
const varTestsBackButtonOnSearchBar = "icon back";
const varTestsIconPlusDisplay = "icon plus";
const varTestsDisplayAboutClean = "clean icon still present";
const varTestsCleanIconDisplay = "Clear text";

//SRP module buttons
const varTestsHeartIconDisplay = "icon heart empty";
const varTestsStarIconDisplay = "icon star";

//about assert variable
const varTestsCheckEveryDeleteData = "123";
const varTestsSearchResultsPageDisplayedInList = "搜尋上衣";
const varTestsShoppingInformationPage = "購物須知";
const varTestsGoodsMaxPrice = "100000000";
const varTestsItemPageTextWhenProductsHaveBeenSoldOut = "尚未開賣";
const varTestsGoodsMinPrice = "1";
const varTestsSettleAccountsOnShopping = "購物車明細 (1)";
const varTestsConvenienceStorePayment = "全家繳費不取貨";
const varTestsConveniencePayment = "全家便利店";
const varTestsConveniencePaymentName = "全家";
const varTestsTheOrderPageElements1 = "本店購物車";
const varTestsTheOrderPageElements2 = "完成訂購";
const varTestsWheelsWhenCheckOut = "重選其它門市";
const varTestsElementsShouldContainTextStoreItem = "件商品"; 
const varTestsElementsShouldContainTextCollection = "人收藏";
const varTestsElementsShouldContainTextGoods = "樣商品";
const varTestsElementsShouldContainTextBuy = "人購買";
const varTestsElementsShouldContainTextOneGoods = "你已收藏 1 樣商品";
const varTestsCheckTextShowCorrectlyOnSalesPromotion = "活動辦法";
const varTestsSalesPromotionActivity = "滿";
const varTestsPaymentWays = "付款方式";
const varTestsDeliveryWays = "交貨方式";
const varTestsContent = "內容";
const varTestsMail = "郵件";
const varTestsFacebook = "Facebook";
const varTestsSearchRecordPageOnRecentHisory = "搜尋";
const varTestsNoData = "很抱歉，沒有符合的商品";
const varTestsToBeEffectiveOnElectronicCoupons = "待生效+已生效";
const varTestsCheckSuperGiftPoints = "超贈點 · 可用 0 、待發放 0";
const varTestsCollectionScreenCorrectAbleLike = "你可能會喜歡的商店"
const varTestsCollectionScreenCorrectLike = "你的最愛商店";
const varTestsLogInFirstOnFavoritePage = "請先登入";

//On shopping cart page
const varTestsElementsShouldContainTextOnShoppingCartPage1 = "規格:";
const varTestsElementsShouldContainTextOnShoppingCartPage2 = "數量:";
const varTestsElementsShouldContainTextOnShoppingCartPage3 = "沒有商品在下次購買清單中";
const varTestsElementsShouldContainTextOnShoppingCartPage4 = "小計:";
const varTestsFillTheInformationOnShoppingCartPage = "填寫資料";
const varTestsToCompLeteTheOrderOnShoppingCartPage = "完成訂購";

//Page name
const varTestsSearchPageWhenInputH = "\"h\""
const varTestsPageNameFashionWomenClothing = "流行女裝";
const varTestsPageNameTShirt = "T恤";
const varTestsPageNameSleevelessTShirt = "無袖T恤";
const varTestStorePageName1 = "Line-up線上衣飾";
const varTestsPageNameOnSalesPromotion = "促銷活動";
const varTestsPageNameNotice = "通知";
const varTestsPageNameQrcode = "請掃條碼/QR Code";

//ItemPage Links
const varTestsItemPageLinksLookGoods = "看本店家全部商品";
const varTestsItemPageLinksAttachedToTheGift = "附送贈品";
const varTestsItemPageLinksPurchaseOfGoods = "加購商品";

//My account page
const varTestsElectronicCouponsOnMyAccount = "電子折價券";
const varTestsOrderQueryOnMyAccount = "訂單查詢";
const varTestsStoreThePreferential = "實體商店優惠";