package com.yahoo.mobile.client.android.ecstore.test.FavoriteStore;

import android.annotation.SuppressLint;
import android.test.ActivityInstrumentationTestCase2;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.ValidationText;

@SuppressLint("NewApi")
@SuppressWarnings("rawtypes")
public class FavoriteStore extends ActivityInstrumentationTestCase2 {
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
	public FavoriteStore() throws ClassNotFoundException {
		super(launcherActivityClass);
	}

	@Override
	protected void setUp() throws Exception {

		solo = new Solo(getInstrumentation(), getActivity());
		Assert.testFirstLaunch(solo);
	}

	@Override
	public void tearDown() throws Exception {

		solo.finishOpenedActivities();
		super.tearDown();
	}

	// 1959886:Verify the page display when user is logged in and has no
	// favorite stores.
	public void testNoFavoriteStoreWhenLogin() throws Exception {

		Account.JudgementAccountLogin(solo);
		solo.clickOnView(solo.getView("tab_image", 4));
		solo.sleep(5000);
		try {
			solo.waitForView(solo.getView("profile_bt_favorite_count"));
		} catch (AssertionError e) {
			solo.goBack();
			solo.waitForView(solo.getView("profile_bt_favorite_count"));
		}
		TextView favoriteItemsRecheck = (TextView) solo
				.getView("profile_bt_favorite_count");

		if (!favoriteItemsRecheck.isShown()) {
			solo.clickOnView(solo.getView("tab_image", 1));
			solo.takeScreenshot("No_Favorite_Store", 100);
			solo.sleep(3000);
			TextView tv = (TextView) solo.getView("category_tab_primary_title",
					0);
			assertTrue("Favorite items not deleted.", tv.isShown());

		} else {

			int number = Integer.parseInt(favoriteItemsRecheck.getText()
					.toString());
			solo.clickOnView(solo.getView("profile_bt_favorite_text", 0));

			// remove all favorite item.
			for (int i = 0; i < number; i++) {
				Action.removeFavoriteItem(solo);
				assertTrue("Remove favorite item failed.", solo.waitForText(
						ValidationText.Has_removed_collection, 1, 3000));
			}

			assertTrue(
					"Favorite items not deleted.",
					solo.searchText(ValidationText.Not_Collection_Any_Commodity));
			solo.clickOnView(solo.getView("tab_image", 1));
			solo.takeScreenshot("No_Favorite_Store", 100);
			solo.sleep(3000);
			assertTrue(
					"Favorite items not deleted.",
					solo.searchText(ValidationText.Not_Collection_Any_Commodity));

		}
	}

}
