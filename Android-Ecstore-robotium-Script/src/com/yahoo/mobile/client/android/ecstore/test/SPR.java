package com.yahoo.mobile.client.android.ecstore.test.SRP;

import java.util.ArrayList;

import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.GridView;
import android.widget.TextView;
import android.widget.ToggleButton;
import android.widget.RadioButton;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.test.ValidationText;

@SuppressWarnings({ "unchecked", "rawtypes" })
public class SRP extends ActivityInstrumentationTestCase2 {
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

	public SRP() throws ClassNotFoundException {
		super(launcherActivityClass);
	}

	@Override
	protected void setUp() throws Exception {
		super.setUp();
		solo = new Solo(getInstrumentation(), getActivity());

	}

	@Override
	public void tearDown() throws Exception {

		solo.finishOpenedActivities();
		super.tearDown();
	}

	// 1937914:back to category tab
	public void testBackToCategoryTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		Action.clickHomeButtonOnScreen(solo);

		solo.scrollToTop();
		Assert.CategoryListShow(solo);

	}

	// 1937918:check 'Tab' display.
	public void testTabDisplay() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		assertTrue(
				"Goods or stores is not display.",
				solo.searchText(ValidationText.Commodity)
						&& solo.searchText(ValidationText.Commodity));

	}

	// 1937919:Default to choose “商品” Tab.
	public void testDefaultTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		assertTrue("Goods tab is not selected.",
				Action.getIsViewShown(solo, "star_button"));

	}

	// 1937920:Navigate to store tab.
	public void testStoreTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// click on store tab
		Action.clickView(solo, "category_tab_primary_title", 1);

		assertTrue("Store tab is not selected.",
				Action.getIsViewShown(solo, "heart_button"));

	}
