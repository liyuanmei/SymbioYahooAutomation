/*
 * This is automated script about "Checkout".
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
 * Run all test project:adb shell am instrument -w com.yahoo.mobile.client.
 * android.ecstore.test/android.test.InstrumentationTestRunner
 * Just run Checkout:adb shell am instrument -e class com.yahoo.mobile.
 * client.android.ecstore.test.test5.Checkout.Checkout -w com.yahoo.mobile.client.
 * android.ecstore.test/android.test.InstrumentationTestRunner
 *
 * @author SYMBIO.
 * @version YAHOO APP:1.2.4
 */

package com.yahoo.mobile.client.android.ecstore.test.test5.Checkout;

import junit.framework.AssertionFailedError;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;

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
public class Checkout extends ActivityInstrumentationTestCase2<Activity> {

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
	public Checkout() throws ClassNotFoundException {
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
	 * 1959918:Verify that user can change other delivery places.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testChangeOtherDeliveryPlaces() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_MIN_SHORT);
			TestHelper.swipeUp(solo, 1);
			Action.addToShoppingCart(solo);

			solo.clickOnView(solo.getView("tab_image", Action.VIEW_ID_THREE));
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);
			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			// Select "7-11"
			Action.clickElementsInWebviewByClassname(solo, "shippingList");
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);
			try{
				solo.clickOnText("7-11");
			} catch(AssertionFailedError e){
				Action.clickElementsInWebviewByClassname(solo, "shippingList");
				solo.sleep(ValidationText.WAIT_TIME_LONG);
				solo.clickOnText("7-11");
			}
			
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeUp(solo, 1);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TestHelper.swipeUp(solo, 2);

			// Click "Select other store" text to re_selection.
			try {
				Action.clickElementsInWebviewByText(solo,
						ValidationText.RESELECT_OTHER_STORE);
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			} catch (AssertionFailedError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				Action.clickElementsInWebviewByText(solo,
						ValidationText.RESELECT_OTHER_STORE);
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
			}
			View storePage;
			try {

				storePage = (View) solo.getView("webpage");
				assertTrue("Store page not show.", storePage.isShown());

			} catch (AssertionFailedError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
				storePage = (View) solo.getView("webpage");
				assertTrue("Store page not show.", storePage.isShown());
			}
		} else {
			
			Account.judgementAccountLogin(solo);
			Action.removeShoppingCart(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			Action.addToShoppingCart(solo);

			Action.select711AndCheckout(solo);		
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			TestHelper.swipeUp(solo, 2);

			// Click "Select other store" text to re_selection.
			try {
				Action.clickElementsInWebviewByText(solo,
						ValidationText.RESELECT_OTHER_STORE);
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			} catch (AssertionError e) {

				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.goBack();

				//Select 7-11 again if the checkout page not loaded.
				Action.select711AndCheckout(solo);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				TestHelper.swipeUp(solo, 2);
				
				Action.clickElementsInWebviewByText(solo,
						ValidationText.RESELECT_OTHER_STORE);
				 solo.sleep(ValidationText.WAIT_TIME_LONGEST);
			}
			View storePage;
			try {

				storePage = (View) solo.getView("webpage");
				assertTrue("Store page not show.", storePage.isShown());

			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_LONGEST);
				storePage = (View) solo.getView("webpage");
				assertTrue("Store page not show.", storePage.isShown());
			}
		}

	}

	/**
	 * 1959915:Verify check out component on step 3.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyCheckOutComponent() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {
			
			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			try {
				solo.clickOnText(ValidationText.BUY_NOW);
			} catch (AssertionFailedError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.BUY_NOW);
			}

			View buddle;
			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", 0);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				solo.searchText(ValidationText.OK);
				solo.clickOnButton(ValidationText.OK);
				solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
						ValidationText.WAIT_TIME_MIDDLE);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
				junit.framework.Assert.assertTrue("No items in shopping cart.",
						buddle.isShown());
			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			TestHelper.swipeUp(solo, 1);
			Log.i("number", "ME");
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.FAMILY_PICKUP);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			View webPage = (View) solo.getView("webpage");
			assertTrue("Cannot found family pick up.", webPage.isShown());
		} else {
			
			Account.judgementAccountLogin(solo);
			Action.enterToItemPage(solo);
			TestHelper.swipeUp(solo, 1);
			try {
				solo.clickOnText(ValidationText.BUY_NOW);
			} catch (AssertionError e) {
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				solo.clickOnText(ValidationText.BUY_NOW);
			}

			View buddle;
			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", 0);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				solo.searchText(ValidationText.OK);
				solo.clickOnButton(ValidationText.OK);
				solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
						ValidationText.WAIT_TIME_MIDDLE);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
				junit.framework.Assert.assertTrue("No items in shopping cart.",
						buddle.isShown());
			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			// solo.goBack();
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			// solo.goBack();
			TestHelper.swipeUp(solo, 2);
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			TestHelper.swipeUp(solo, 1);
			Log.i("number", "ME");
			solo.sleep(ValidationText.WAIT_TIME_LONGER);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.FAMILY_PICKUP);
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			View webPage = (View) solo.getView("webpage");
			assertTrue("Cannot found family pick up.", webPage.isShown());
		}

	}

	/**
	 * 1959916:Verify order inquiry details page can show normally.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testVerifyorderInquiryShowNormally() throws Exception {

		if (android.os.Build.VERSION.RELEASE.matches("4.0." + "[0-9]+")) {

			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.MIUSTAR);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickInList(1);
			solo.sleep(ValidationText.WAIT_TIME_ONESEC);
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnText(ValidationText.BUY_NOW);

			View buddle;
			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", 4);
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				solo.searchText(ValidationText.OK);
				solo.clickOnButton(ValidationText.OK);
				solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
						ValidationText.WAIT_TIME_MIDDLE);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				try{
					buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
					junit.framework.Assert.assertTrue("No items in shopping cart.",
							buddle.isShown());
				} catch(AssertionFailedError e){
					
					//Reselected the  property of product if its sold out.
					View radioButtons = (View) solo.getView(
							"product_item_spec_item_selections", 5);
					solo.clickOnView(radioButtons);
					solo.searchText(ValidationText.OK);
					solo.clickOnButton(ValidationText.OK);
					solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
							ValidationText.WAIT_TIME_MIDDLE);
					solo.sleep(ValidationText.WAIT_TIME_LONG);
					buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
					junit.framework.Assert.assertTrue("No items in shopping cart.",
							buddle.isShown());
				}
				
			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			// solo.goBack();
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			TestHelper.swipeUp(solo, 2);
		 
			TestHelper.swipeUp(solo, 1);
			Log.i("number", "ME");
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.FAMILY_PICKUP);
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			View webPage = (View) solo.getView("webpage");
			assertTrue("Cannot found family pick up.", webPage.isShown());

		} else {
			Account.judgementAccountLogin(solo);
			Action.clickSearchButtonOnScreen(solo);
			Action.searchAfterPutData(solo, 0, ValidationText.MIUSTAR);
			solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
			solo.clickInList(1);
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
			solo.clickOnText(ValidationText.BUY_NOW);

			View buddle;
			View radioButton = (View) solo.getView(
					"product_item_spec_item_selections", 4);
			 
			if (radioButton.isShown()) {

				solo.clickOnView(radioButton);
				solo.searchText(ValidationText.OK);
				solo.clickOnButton(ValidationText.OK);
				solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
						ValidationText.WAIT_TIME_MIDDLE);
				solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
				try{
					
				buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
				junit.framework.Assert.assertTrue("No items in shopping cart.",
						buddle.isShown());
				}catch(AssertionFailedError e){

				 //Reselected the  property of product if its sold out.
					View radioButtons = (View) solo.getView(
							"product_item_spec_item_selections", 5);
					solo.clickOnView(radioButtons);
					solo.searchText(ValidationText.OK);
					solo.clickOnButton(ValidationText.OK);
					solo.waitForText(ValidationText.ALREADY_ADD_SHOPPING_CART, 1,
							ValidationText.WAIT_TIME_MIDDLE);
					solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
					buddle = solo.getView("tab_badge", Action.VIEW_ID_THREE);
					junit.framework.Assert.assertTrue("No items in shopping cart.",
							buddle.isShown());
				}
			} else {
				junit.framework.Assert.assertTrue("Add failed.", true);
			}

			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			// solo.goBack();
			TestHelper.swipeUp(solo, 2);

			TestHelper.swipeUp(solo, 1);
			Log.i("number", "ME");
			solo.sleep(ValidationText.WAIT_TIME_LONG);
			Action.clickElementsInWebviewByText(solo,
					ValidationText.FAMILY_PICKUP);
			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			// Click check out button on web view.
			Action.clickElementsInWebviewByText(solo,
					ValidationText.WANT_CHECKOUT);

			solo.sleep(ValidationText.WAIT_TIME_LONGEST);

			View webPage = (View) solo.getView("webpage");
			assertTrue("Cannot found family pick up.", webPage.isShown());
		}
	}
}
