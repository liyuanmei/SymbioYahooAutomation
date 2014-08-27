/*
 * This is automated script about "ShoppingCart".
 *
 * You can run these test cases either on the emulator or on device.
 *
 * By Eclipse:
 * Right click the test project and select Run As --> Run As Android JUnit Test
 *
 * By Ant:
 * 1.Run "android update test-project -m [path to target application]
 *  -p [path to the test folder]"  in command line .
 * 2."ant test"
 *
 * By using instrument command:
 * Run all test project:adb shell am instrument -w com.yahoo.mobile.client.
 * android.ecstore.test/android.test.InstrumentationTestRunner
 * Just run ShoppingCart:adb shell am instrument -e class com.yahoo.mobile.
 * client.android.ecstore.test.test5.ShoppingCart.ShoppingCart -w com.yahoo.mobile.
 * client.android.ecstore.test/android.test.InstrumentationTestRunner
 *
 * @author SYMBIO.
 * @version YAHOO APP:1.2.4
 *
 */

package com.yahoo.mobile.client.android.ecstore.test.test5.ShoppingCart;

import junit.framework.AssertionFailedError;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.robotium.solo.WebElement;
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
public class ShoppingCart extends ActivityInstrumentationTestCase2<Activity> {

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
	public ShoppingCart() throws ClassNotFoundException {
		super((Class<Activity>) launcherActivityClass);
	}

	@Override
	protected final void setUp() throws Exception {
		super.setUp();
		solo = new Solo(getInstrumentation(), getActivity());
		Assert.testFirstLaunch(solo);

	}

	@Override
	public final void tearDown() throws Exception {

		solo.finishOpenedActivities();
		super.tearDown();
	}

	/**
	 * 1959883:Verify the number of bottom bubble displayed on shopping cart
	 * after deleted all products.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testNumberBubbleDisplayAfterDelete() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			TestHelper.swipeUp(solo, 1);
			try {
				Action.addToShoppingCart(solo);
			} catch (AssertionFailedError e) {
				TestHelper.swipeUp(solo, 5);
				Action.addToShoppingCart(solo);
			}

			Action.removeShoppingCart(solo);
		} else {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			Action.addToShoppingCart(solo);
			Action.removeShoppingCart(solo);
		}

	}

	/**
	 * 1959911:Verify shopping cart & next buy.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testShoppingCartNextBuy() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			
			// Click "Next buy" button on web view.
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			// Tap "Next Buy" button on web view.
			Action.clickElementsInWebviewByText(solo, ValidationText.NEXT_BUY);
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			boolean expected = false;
			for (WebElement webs : solo.getCurrentWebElements()) {
				Log.i("number", webs.getClassName().toString());
				if (webs.getClassName().toString().equals("price")) {
					expected = true;
				}

			}
			assertTrue("Next Buy page display incorrect.", expected);
		} else {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);
			Action.addToShoppingCart(solo);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			// Tap "Next Buy" button on web view.
			Action.clickElementsInWebviewByText(solo, ValidationText.NEXT_BUY);
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			boolean expected = false;
			for (WebElement webs : solo.getCurrentWebElements()) {
				Log.i("number", webs.getClassName().toString());
				if (webs.getClassName().toString().equals("price") || solo.searchText(ValidationText.NO_DATA_IN_SHOPPING_LIST)) {
					expected = true;
				}

			}
			assertTrue("Next Buy page display incorrect.", expected);
		}

	}

	/**
	 * 1959908:Verify numbers under shopping$next buy.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testShoppingCartAndNextBuyNumber() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			for (int i = 0; i < Action.VIEW_ID_THREE; i++) {
				
				solo.scrollToTop();
				Action.enterToItemPages(solo);
				TestHelper.swipeUp(solo, 1);
				Action.addToShoppingCart(solo);
				// TestHelper.swipeUp(solo, 1);
			}

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			assertTrue(
					"Total number displayed incorrect",solo.searchText(ValidationText.ONE_COMMODITY)
					&& solo.searchText(ValidationText.TWO_COMMODITY)||
					solo.searchText(ValidationText.THREE_COMMODITY)
							);
		} else {
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			for (int i = 0; i < Action.VIEW_ID_THREE; i++) {
				solo.scrollToTop();
				Action.enterToItemPages(solo);
				Action.addToShoppingCart(solo);
				// TestHelper.swipeUp(solo, 1);
			}

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			assertTrue(
					"Total number displayed incorrect",
					solo.searchText(ValidationText.ONE_COMMODITY)
							|| solo.searchText(ValidationText.TWO_COMMODITY));
		}

	}

	/**
	 * 1977500:Verify the page whether refresh OK.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testRefreshWhenBack() throws Exception {

		Account.judgementAccountLogin(solo);
		Action.enterToItemPage(solo);
		TestHelper.swipeUp(solo, 1);
		Action.addToShoppingCart(solo);

		solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
		solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
		solo.sleep(ValidationText.WAIT_TIME_LONGER);
		Action.clickElementsInWebviewByClassname(solo, "pimg");
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.goBack();
		solo.sleep(ValidationText.WAIT_TIME_LONGER);

		try {
			View webpage = (View) solo.getView("webpage", 0);
			assertTrue("This page incorrect.", webpage.isShown());
		} catch (AssertionError e) {
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			View webpage = (View) solo.getView("webpage", 0);
			assertTrue("This page incorrect.", webpage.isShown());
		}

	}

	/**
	 * 1977496:Verify check out.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCheckout() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeUp(solo, 1);
 
			// Click "check out" button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.searchTextOnWebview(solo, ValidationText.BUY_INFO);

		} else {

			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			Action.addToShoppingCart(solo);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeUp(solo, 2);

			// Click "check out" button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.searchTextOnWebview(solo, ValidationText.BUY_INFO);
		}

	}

	/**
	 * 1959885：Verify shopping cart details info.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testShoppingcartDetail() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			Action.enterToItemPage(solo);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.goBack();
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			Action.clickElementsInWebviewByClassname(solo, "pimg");
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			View star = (View) solo.getView("productitem_star_button", 0);
			assertTrue(" Cannot find the star icon ", star.isShown());
			solo.goBack();
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			try {
				Action.clickElementsInWebviewByClassname(solo,
						"updateItemChange");
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				Action.clickElementsInWebviewByClassname(solo,
						"updateItemChange");
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
			}

			boolean actual = solo.searchText("1");
			assertTrue("number is not displayed!", actual);
		} else {
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			Action.enterToItemPage(solo);

			Action.addToShoppingCart(solo);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.goBack();
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			Action.clickElementsInWebviewByClassname(solo, "pimg");
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			View star = (View) solo.getView("productitem_star_button", 0);
			assertTrue(" Cannot find the star icon ", star.isShown());
			solo.goBack();
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			try {
				Action.clickElementsInWebviewByClassname(solo,
						"updateItemChange");
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				Action.clickElementsInWebviewByClassname(solo,
						"updateItemChange");
				solo.sleep(ValidationText.WAIT_TIME_SHORT);
			}

			boolean actual = solo.searchText("1");
			assertTrue("number is not displayed!", actual);
		}

	}

	/**
	 * 1959903：Verify user can view next buy items and view shopping cart items.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testViewNextbuyAndShoppingCartItem() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			solo.scrollToTop();
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);

			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_LONG);
			
			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			assertTrue("No next buy item.",
					solo.searchText(ValidationText.NEXT_BUY));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			
			// Click "Next buy" button on web view.
			Action.searchTextOnWebview(solo, ValidationText.NEXT_BUY);
			solo.goBack();
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.searchTextOnWebview(solo, ValidationText.SUB_TOTAL);

		} else {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

			solo.scrollToTop();
			Action.enterToItemPage(solo);
			Action.addToShoppingCart(solo);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			
			// Click "Next buy" button on web view.
			Action.clickElementsInWebviewByClassname(solo,
					"goNextBuy updateItemClick");

			solo.sleep(ValidationText.WAIT_TIME_LONG);

			// Search "Confirm"button on alert window.
			Action.clickElementsInWebviewByText(solo, ValidationText.OK);
			
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			assertTrue("No next buy item.",
					solo.searchText(ValidationText.NEXT_BUY));
			
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.searchTextOnWebview(solo, ValidationText.NEXT_BUY);
			solo.goBack();
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.searchTextOnWebview(solo, ValidationText.SUB_TOTAL);
		}

	}

	/**
	 * 1977534:verify delete function.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyDeleteFunction() throws Exception {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);

	}

	/**
	 * 1959876:Verify the number of bottom bubble on shopping cart.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyButtomBubbleOnShoppingCart() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);

			// Swipe the screen to center
			TestHelper.swipeUp(solo, 1);

			// Click buy now button.
			Action.buyNow(solo);
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeDown(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));

			// Get the bubble text view.
			TextView number = (TextView) solo
					.getView("ecshopping_cart_header_count");
			int now = Integer.valueOf(number.getText().toString().trim()
					.substring(0, 1));

			View buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
			assertTrue("Number is not increasing. ",
					now >= 1 && buddle.isShown());

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_TWO));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			TestHelper.swipeUp(solo, 2);

			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Click "check out" button on current web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			TestHelper.swipeUp(solo, 2);

			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			View webPage = (View) solo.getView("webpage", 0);
			assertTrue("Current page is not check out page.", webPage.isShown());
		} else {

			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);

			//Click "Buy now" button on current page.
			Action.buyNow(solo);

			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeDown(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			TextView number = (TextView) solo
					.getView("ecshopping_cart_header_count");
			int now = Integer.valueOf(number.getText().toString().trim()
					.substring(0, 1));

			View buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
			assertTrue("Number is not increasing. ",
					now >= 1 && buddle.isShown());

			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_TWO));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			TestHelper.swipeUp(solo, 2);

			// TestHelper.swipeDown2(solo, 10);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONG);
			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);
			solo.sleep(ValidationText.WAIT_TIME_LONG);

			View webPage = (View) solo.getView("webpage", 0);
			assertTrue("Current page is not check out page.", webPage.isShown());
		}

	}
}
