/*
 * This is automated script about "ItemPage".
 *
 * You can run these test cases either on the emulator or on device.
 *
 * By Eclipse:
 * Right click the test project and select Run As --> Run As Android JUnit Test
 *
 * By Ant:
 * 1.Run "android update test-project -m [path to target application] -p
 *  [path to the test folder]"  in command line .
 * 2."ant test"
 *
 * By using instrument command:
 * Run all test project:adb shell am instrument -w com.yahoo.mobile.client
 * .android.ecstore.test/android.test.InstrumentationTestRunner
 * Just run ItemPage:adb shell am instrument -e class com.yahoo.mobile.client
 * .android.ecstore.test.test4.ItemPage.ItemPage -w com.yahoo.mobile.client.android
 * .ecstore.test/android.test.InstrumentationTestRunner
 *
 * @author SYMBIO.
 * @version YAHOO APP:1.2.4
 *
 */

package com.yahoo.mobile.client.android.ecstore.test.test4.ItemPage;

import junit.framework.AssertionFailedError;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.RadioButton;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.test.ValidationText;

/**
 * @author Administrator
 * 
 */

@SuppressLint("NewApi")
public class ItemPage extends ActivityInstrumentationTestCase2<Activity> {

	/**
	 * Declare application main activity.
	 */
	private static final String LAUNCHER_ACTIVITY_FULL_CLASSNAME = "com.yahoo.mobile.client.android.ecstore.ui.ECSplashActivity";

	/**
	 * Declare a variable of type Class for start tested program.
	 */
	private static Class<?> launcherActivityClass;

	/**
	 * Declare a Solo object.
	 */
	private Solo solo;
	static {

		try {
			launcherActivityClass = Class
					.forName(LAUNCHER_ACTIVITY_FULL_CLASSNAME);
		} catch (ClassNotFoundException e) {
			throw new RuntimeException(e);
		}

	}

	/**
	 * @throws ClassNotFoundException
	 *             if has error
	 */
	@SuppressWarnings("unchecked")
	public ItemPage() throws ClassNotFoundException {
		super((Class<Activity>) launcherActivityClass);
	}

	@Override
	protected final void setUp() throws Exception {

		solo = new Solo(getInstrumentation(), getActivity());
		Assert.testFirstLaunch(solo);
	}

	@Override
	public final void tearDown() throws Exception {

		solo.finishOpenedActivities();
		super.tearDown();
	}

	/**
	 * 1953619:verify for the single commodity discount.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSingleCommodityDiscount() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);

			Action.enterToPromotion(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickInList(0);

			try {
				solo.sleep(ValidationText.WAIT_TIME_ONESEC);
				TestHelper.swipeUp(solo, 1);

				solo.clickOnText(ValidationText.SALES_PROMOTION);

			} catch (AssertionFailedError e) {

				TestHelper.swipeUp2(solo, 5);
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			}
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			solo.clickOnText(ValidationText.DISCOUNT);
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			View webpage;

			try {
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			} catch (AssertionFailedError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			}

		} else {
			Account.judgementAccountLogin(solo);
			Action.enterToPromotion(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickInList(0);

			try {
				solo.sleep(ValidationText.WAIT_TIME_ONESEC);
				TestHelper.swipeUp(solo, 1);

				solo.clickOnText(ValidationText.SALES_PROMOTION);

			} catch (AssertionError e) {

				TestHelper.swipeUp(solo, 1);
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			}
			solo.clickOnText(ValidationText.DISCOUNT);
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			View webpage;

			try {
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			}

		}

	}

	/**
	 * 1953617:verify for full discount.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testFullDiscount() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			Account.judgementAccountLogin(solo);

			Action.enterToPromotion(solo);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickInList(1);

			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			try {

				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			} catch (AssertionFailedError e) {

				TestHelper.swipeDownLowPixle(solo, 15);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			}
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			View webpage;
			try {
				solo.clickOnText(ValidationText.FULL);
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			} catch (AssertionFailedError e) {

				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			}
		} else {
			Account.judgementAccountLogin(solo);

			Action.enterToPromotion(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickInList(1);

			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			try {

				solo.sleep(ValidationText.WAIT_TIME_SHORT);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			} catch (AssertionFailedError e) {

				TestHelper.swipeDownLowPixle(solo, 1);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.SALES_PROMOTION);

			}
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			View webpage;
			try {
				solo.clickOnText(ValidationText.FULL);
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			} catch (AssertionError e) {

				solo.sleep(ValidationText.WAIT_TIME_LONGER);
				webpage = (View) solo.getView("webpage", 0);
				assertTrue("No promotion link displayed. ", webpage.isShown());
			}
		}

	}

	/**
	 * 1953614:verify for All customers the full discount.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAllCustomersDiscount() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			Account.judgementAccountLogin(solo);

			// Action.enterToItemPage(solo);
			Action.enterToPromotion(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			solo.clickInList(0);
			TestHelper.swipeUp(solo, 1);

			try {
				solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
				TestHelper.swipeUp(solo, 5);
				solo.searchText(ValidationText.PRODUCT_DETAIL);
				solo.clickOnText(ValidationText.SALES_PROMOTION);
			} catch (AssertionFailedError e) {
				TestHelper.swipeUp2(solo, 5);
				solo.searchText(ValidationText.PRODUCT_DETAIL);
				solo.clickOnText(ValidationText.SALES_PROMOTION);
			}

			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			assertTrue("No promotion link displayed. ",
					solo.searchText(ValidationText.FULL));
		} else {

			Account.judgementAccountLogin(solo);

			// Action.enterToItemPage(solo);
			Action.enterToPromotion(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			solo.clickInList(0);
			TestHelper.swipeUp(solo, 1);

			try {
				solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
				TestHelper.swipeUp(solo, 5);
				solo.searchText(ValidationText.PRODUCT_DETAIL);
				solo.clickOnText(ValidationText.SALES_PROMOTION);
			} catch (AssertionError e) {
				TestHelper.swipeUp2(solo, 5);
				solo.searchText(ValidationText.PRODUCT_DETAIL);
				solo.clickOnText(ValidationText.SALES_PROMOTION);
			}

			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			assertTrue("No promotion link displayed. ",
					solo.searchText(ValidationText.FULL));
		}
	}

	/**
	 * 1959927:Verify user can add an item to shopping cart.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAddItemToShoppingCart() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);

		} else {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			Action.addToShoppingCart(solo);
		}

	}

	/**
	 * 1953636:verify favorite items.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyFavoriteitems() throws Exception {

		Account.judgementAccountLogin(solo);

		// Remove favorite items from favorite list.
		Action.removeFavoriteItem(solo);

		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("tab_image", 2));
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.APPAREL);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_LONG);

		// Click the first link on list view.
		solo.clickInList(1);

		solo.goBack();
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		View star = (View) solo.getView("star_button", 0);
		solo.clickOnView(star);
		boolean alreadyAdd;

		// Get toast text.
		if (solo.waitForText(ValidationText.HAS_ADDED_COLLECTION)) {
			alreadyAdd = solo.waitForText(ValidationText.HAS_ADDED_COLLECTION);
			assertTrue("Add failed.", alreadyAdd);
		} else {
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(star);
			alreadyAdd = solo.waitForText(ValidationText.HAS_ADDED_COLLECTION);
			assertTrue("Add failed.", alreadyAdd);

		}
		solo.sleep(ValidationText.WAIT_TIME_SHORT);

		// Get store name.
		TextView storeName = (TextView) solo.getView(
				"listitem_productlist_store_name", 0);
		Log.i("number", "1" + storeName.getText().toString().trim());
		solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_FOUR));
		solo.clickOnText(ValidationText.PRODUCT_COLLECTION);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		TextView collectStoreName = (TextView) solo.getView(
				"listitem_productlist_store_name", 0);
		Log.i("number", "2" + collectStoreName.getText().toString().trim());

		assertTrue(
				"Product not added to favorite list. ",
				storeName.getText().toString().trim()
						.equals(collectStoreName.getText().toString().trim()));
	}

	/**
	 * 1953626:verify Payment.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyPayment() throws Exception {

		Action.enterToItemPage(solo);

		// Click the first link on list view.
		solo.clickInList(1);

		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("tab_image", 2));
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.APPAREL);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);

		// Click the first link on list view.
		solo.clickInList(1);
		solo.sleep(ValidationText.WAIT_TIME_LONG);

		TestHelper.swipeUp(solo, 1);
		try {
			Action.clickText(solo, ValidationText.PAYMENT);
		} catch (AssertionError e) {
			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.clickText(solo, ValidationText.PAYMENT);
		}
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TextView payInfoATM = (TextView) solo.getView("pay_info", 1);
		TextView payInfoVisa = (TextView) solo.getView("pay_info", 2);
		assertTrue(
				"Payment page not contain any item.",
				payInfoATM.isShown() && payInfoVisa.isShown()
						&& solo.searchText(ValidationText.POST));

	}

	/**
	 * 1953627:Verify Shopping methods.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyShoppingMethods() throws Exception {

		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("tab_image", 2));
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.APPAREL);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		solo.clickInList(1);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		TestHelper.swipeUp(solo, 1);

		try {
			Action.clickText(solo, ValidationText.SHOPPING_TIPS);
		} catch (AssertionError e) {
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.clickText(solo, ValidationText.SHOPPING_TIPS);
		}

		TextView shoppingTips;
		try {
			shoppingTips = (TextView) solo.getView("action_bar_title");
			assertTrue("Shopping tips not show.", shoppingTips.getText()
					.toString().trim().equals(ValidationText.SHOPPING_TIPS));

		} catch (AssertionError e) {
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			shoppingTips = (TextView) solo.getView("action_bar_title");
			assertTrue("Shopping tips not show.", shoppingTips.getText()
					.toString().trim().equals(ValidationText.SHOPPING_TIPS));
		}
	}

	/**
	 * 1953629:Verify the classification in current store page.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyCurrentStorePage() throws Exception {

		Action.enterToItemPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("tab_image", 2));
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.APPAREL);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		solo.clickInList(1);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TestHelper.swipeUp(solo, 1);
		Action.clickText(solo, ValidationText.SEE_ALL_STORE_PRODUCT);
		Action.clickText(solo, ValidationText.CATEGORIES);

		assertTrue(
				"Shopping tips not show.",
				solo.searchText(ValidationText.CATEGORIES)
						&& solo.searchText(ValidationText.COMMODITY));

	}

	/**
	 * 1953630:Verify the Commodity in current store page.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyCommodityPage() throws Exception {

		Account.judgementAccountLogin(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("tab_image", 2));
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.APPAREL);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		solo.clickInList(1);
		solo.sleep(ValidationText.WAIT_TIME_LONG);
		TestHelper.swipeUp(solo, 1);
		try {
			Action.clickText(solo, ValidationText.SEE_ALL_STORE_PRODUCT);
		} catch (AssertionFailedError e) {
			TestHelper.swipeUp(solo, 1);
			Action.clickText(solo, ValidationText.SEE_ALL_STORE_PRODUCT);

		}

		assertTrue(
				"Shopping tips not show.",
				solo.searchText(ValidationText.CATEGORIES)
						&& solo.searchText(ValidationText.COMMODITY));

	}

	/**
	 * 1959931:Verify repeat go to item page check the number of premiums.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCheckPremiunsAndPlusPurchase() throws Exception {

		Account.judgementAccountLogin(solo);
		Action.clickSearchButtonOnScreen(solo);
		Action.searchAfterPutData(solo, 0, ValidationText.GIFT);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView storeName = (TextView) solo.getView(
				"listitem_productlist_store_name", 0);

		solo.clickOnView(storeName);
		solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
		TestHelper.swipeUp(solo, 1);

		// Additional gift
		TextView bubbleOne = (TextView) solo.getView("listitem_bubble",
				Action.VIEW_ID_ZERO);
		// Plus purchase product
		TextView bubbleTwo = (TextView) solo.getView("listitem_bubble",
				Action.VIEW_ID_ONE);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

		solo.goBack();
		TextView storeNames = (TextView) solo.getView(
				"listitem_productlist_store_name", 0);
		solo.clickOnView(storeNames);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TestHelper.swipeUp(solo, 1);

		// Additional gift
		TextView bubbleOneSecond = (TextView) solo.getView("listitem_bubble",
				Action.VIEW_ID_ZERO);
		// Plus purchase product
		TextView bubbleTwoSecond = (TextView) solo.getView("listitem_bubble",
				Action.VIEW_ID_ONE);

		assertTrue(
				"Number inconsistency.",
				bubbleOne.getText().toString()
						.equals(bubbleOneSecond.getText().toString())
						&& bubbleTwo.getText().toString()
								.equals(bubbleTwoSecond.getText().toString()));
	}

	/**
	 * 1953620:verify gifts displayed in the shopping cart.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testGiftsDisplayedInTheShoppingcart() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.GIFT);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));

			solo.sleep(ValidationText.WAIT_TIME_LONG);

			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);

			for (int i = 0; i < 2; i++) {
				TestHelper.swipeUp(solo, 10);

			}
			try {
				Action.searchTextOnWebview(solo, ValidationText.GIFT);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				TestHelper.swipeUp(solo, 1);
				Action.searchTextOnWebview(solo, ValidationText.GIFT);
			}
		} else {
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.GIFT);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.clickOnView(storeName);

			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));

			solo.sleep(ValidationText.WAIT_TIME_LONG);

			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);

			for (int i = 0; i < 2; i++) {
				TestHelper.swipeUp(solo, 10);

			}
			try {
				Action.searchTextOnWebview(solo, ValidationText.GIFT);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				TestHelper.swipeUp(solo, 1);
				Action.searchTextOnWebview(solo, ValidationText.GIFT);
			}
		}
	}

	/**
	 * 1953623:Verify plus purchase product displayed in the shopping cart.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testPlusPurchaseProductDisplayedInTheShoppingcart()
			throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.PLUS_SHOP);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);

			try {
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
				solo.clickOnText(ValidationText.PLUS_PURCHASE);

			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				TestHelper.swipeUp2(solo, Action.VIEW_ID_FOUR);
				solo.clickOnText(ValidationText.PLUS_PURCHASE);
			}

			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TextView addon;
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			try {
				addon = (TextView) solo.getView("addon_title");
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				addon = (TextView) solo.getView("addon_title");
			}

			solo.clickOnView(addon);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.goBack();
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			TestHelper.swipeUp2(solo, 5);

			//try {
			Action.addToShoppingCartForSmallScreen(solo);
			/*} catch (AssertionFailedError e) {
				TestHelper.swipeUp2(solo, 5);
				Action.addToShoppingCartForSmallScreen(solo);
			}*/

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.searchTextOnWebview(solo, ValidationText.PLUS_PURCHASE);

		} else {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.PLUS_SHOP);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			try {
				// TestHelper.swipeUp2(solo, Action.VIEW_ID_TEN);
				TestHelper.swipeUp(solo, 1);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.PLUS_PURCHASE);
			} catch (AssertionError e) {
				TestHelper.swipeUp2(solo, Action.VIEW_ID_FOUR);
				solo.clickOnText(ValidationText.PLUS_PURCHASE);
			}

			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TextView addon;
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			try {
				addon = (TextView) solo.getView("addon_title");
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				addon = (TextView) solo.getView("addon_title");
			}

			solo.clickOnView(addon);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.goBack();

			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			TestHelper.swipeDown(solo, 50);

			Action.addToShoppingCartForSmallScreen(solo);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.searchTextOnWebview(solo, ValidationText.PLUS_PURCHASE);

		}

	}

	/**
	 * 1959917:Verify item link,promotion link,gift link work well.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testItemPromotionGiftlinkWorkWell() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.GIFT);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);

			// Click on store name
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);

			// Click on store name
			TextView storeNamee = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(storeNamee);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);

			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			try{
				solo.clickOnText(ValidationText.ADDITIONAL_GIFT);
			} catch(AssertionFailedError e){
				TestHelper.swipeDownLowPixle(solo, 10);
				solo.clickOnText(ValidationText.ADDITIONAL_GIFT);
			}
			
			assertTrue("Not enter gift page !",
					solo.searchText(ValidationText.GIFT));
		} else {
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			solo.goBack();
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_ZERO));
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.GIFT);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TextView storeName = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);
			TextView storeNamee = (TextView) solo.getView(
					"listitem_productlist_store_name", 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(storeNamee);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);

			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			try{
				solo.clickOnText(ValidationText.ADDITIONAL_GIFT);
			} catch(AssertionFailedError e){
				TestHelper.swipeDownLowPixle(solo, 10);
				solo.clickOnText(ValidationText.ADDITIONAL_GIFT);
			}
			assertTrue("Not enter gift page !",
					solo.searchText(ValidationText.GIFT));
		}

	}

	/**
	 * 1959897:Verify user can selecting item size and color from down to up.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testUserCanSelectingItemSizeAndColor() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.BIKINI);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			TextView storeName = (TextView) solo
					.getView("listitem_productlist_store_name");
			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			View shopCart;

			try {
				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			} catch (AssertionError e) {

				TestHelper.swipeUp2(solo, 2);

				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			}

			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_FOUR);

			RadioButton sizeButton = (RadioButton) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_EIGHT);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				assertFalse("Item is not dimmed.", sizeButton.isActivated());
				solo.searchText(ValidationText.CANCEL);
				solo.clickOnButton(ValidationText.CANCEL);

			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			solo.goBack();

		} else {
			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.BIKINI);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			TextView storeName = (TextView) solo
					.getView("listitem_productlist_store_name");
			solo.clickOnView(storeName);

			TestHelper.swipeUp(solo, 1);

			View shopCart;
			try {
				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			} catch (AssertionError e) {

				TestHelper.swipeUp2(solo, 2);

				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			}

			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_FOUR);

			RadioButton sizeButton = (RadioButton) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_EIGHT);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				assertFalse("Item is not dimmed.", sizeButton.isActivated());
				solo.searchText(ValidationText.CANCEL);
				solo.clickOnButton(ValidationText.CANCEL);

			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			solo.goBack();
		}

	}

	/**
	 * 1959926:Verify user can not select dimmed item specification.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testUserCanNOTSelectDimmedItem() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.BIKINI);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			TextView storeName = (TextView) solo
					.getView("listitem_productlist_store_name");
			solo.clickOnView(storeName);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);

			View shopCart;
			try {
				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			} catch (AssertionError e) {

				TestHelper.swipeUp2(solo, 2);

				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			}

			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_FOUR);

			RadioButton sizeButton = (RadioButton) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_EIGHT);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				assertFalse("Item is not dimmed.", sizeButton.isActivated());
				solo.clickOnView(sizeButton);
				assertFalse("Add failed.", sizeButton.isActivated());

			} else {
				assertTrue("Add failed.", false);
			}

			solo.goBack();
		} else {
			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.BIKINI);
			Assert.hideSoftKeyboard(solo);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			try {
				TextView storeName = (TextView) solo
						.getView("listitem_productlist_store_name");
				solo.clickOnView(storeName);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				TextView storeName = (TextView) solo
						.getView("listitem_productlist_store_name");
				solo.clickOnView(storeName);
			}

			TestHelper.swipeUp(solo, 1);

			View shopCart;
			try {
				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			} catch (AssertionError e) {

				TestHelper.swipeUp2(solo, 2);

				shopCart = solo.getView("productitem_btn_add_to_shopping_cart");
				solo.clickOnView(shopCart);

			}

			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_FOUR);

			RadioButton sizeButton = (RadioButton) solo.getView(
					"product_item_spec_item_selections", Action.VIEW_ID_EIGHT);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				assertFalse("Item is not dimmed.", sizeButton.isActivated());
				solo.clickOnView(sizeButton);
				assertFalse("Add failed.", sizeButton.isActivated());

			} else {
				assertTrue("Add failed.", false);
			}

			solo.goBack();
		}

	}

	/**
	 * 1953631:Verify share text and icon.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyShareTextAndIcon() throws Exception {

		Account.judgementAccountLogin(solo);
		Action.enterToItemPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TestHelper.swipeUp(solo, 1);

		// Share button.
		View shareIcon = (View) solo.getView("productitem_bt_share_product");
		assertTrue("Share icon not display.", shareIcon.isShown());
	}

	/**
	 * 1977508:Verify It cann't show collection info when user click 7﹣11 icon
	 * or Family icon in item page.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyClickShopIcon() throws Exception {

		Account.judgementAccountLogin(solo);
		Action.enterToItemPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

		// 7-11 shop icon.
		View sevenEleven = (View) solo.getView("productitem_seven_store");
		solo.clickOnView(sevenEleven);

		try {
			if (solo.waitForText(ValidationText.HAS_ADDED_COLLECTION)
					|| solo.waitForText(ValidationText.HAS_REMOVED_COLLECTION)) {
				assertTrue("Collection info pop up.", false);
			}
		} catch (AssertionError e) {
			assertTrue("Collection info pop up.", true);
		}

		// Family shop icon.
		View allFamily = (View) solo.getView("productitem_family_mart");
		solo.clickOnView(allFamily);
		try {
			if (solo.waitForText(ValidationText.HAS_ADDED_COLLECTION)
					|| solo.waitForText(ValidationText.HAS_REMOVED_COLLECTION)) {
				assertTrue("Collection info pop up.", false);
			}
		} catch (AssertionError e) {
			assertTrue("Collection info pop up.", true);
		}
	}
}
