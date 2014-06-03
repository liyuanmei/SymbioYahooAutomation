package com.yahoo.mobile.client.android.ecstore.test.ShoppingCart;

import java.util.ArrayList;

import android.annotation.SuppressLint;
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.CheckedTextView;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.robotium.solo.WebElement;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.test.ValidationText;

@SuppressLint("NewApi")
@SuppressWarnings("rawtypes")
public class ShoppingCart extends ActivityInstrumentationTestCase2 {
	private static final String LAUNCHER_ACTIVITY_FULL_CLASSNAME = "com.yahoo.mobile.client.android.ecstore.ui.ECSplashActivity";
	private static Class launcherActivityClass;
	private Solo solo;
	static {

		try {
			launcherActivityClass = Class
					.forName(LAUNCHER_ACTIVITY_FULL_CLASSNAME);
		} catch (ClassNotFoundException e) {
			throw new RuntimeException(e);
		}

	}

	@SuppressWarnings("unchecked")
	public ShoppingCart() throws ClassNotFoundException {
		super(launcherActivityClass);
	}

	@Override
	protected void setUp() throws Exception {
		super.setUp();
		solo = new Solo(getInstrumentation(), getActivity());
		// Assert.testFirstLaunch(solo);

	}

	@Override
	public void tearDown() throws Exception {

		solo.finishOpenedActivities();
		super.tearDown();
	}

	// 1959911:Verify shopping cart & next buy
	public void testShoppingCartNextBuy() throws Exception {

		Account.JudgementAccountLogin(solo);
		Action.removeShoppingCart(solo);
		Action.enterToItemPage(solo);
		Action.addToShoppingCart(solo);
		solo.clickOnView(solo.getView("tab_image", 3));
		solo.clickOnView(solo.getView("ecshopping_cart_store_name", 0));
		solo.sleep(10000);
		Action.clickElementsInWebviewByText(solo, "goNextBuy updateItemClick");

		// Search "Confirm"button on alert window.
		Action.clickElementsInWebviewByText(solo, "confirm");
		solo.sleep(5000);
		// Tap "Next Buy" button on web view.
		Action.clickElementsInWebviewByText(solo, ValidationText.Next_buy);
		boolean expected = false;
		for (WebElement webs : solo.getCurrentWebElements()) {
			Log.i("number", webs.getClassName().toString());
			if (webs.getClassName().toString().equals("price")) {
				expected = true;
			}

		}
		assertTrue("NextBuy page display incorrect.", expected);
	}

}
