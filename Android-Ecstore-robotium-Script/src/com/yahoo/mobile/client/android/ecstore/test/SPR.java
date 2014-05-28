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
// 1937921:go back to goods tab.
	public void testBackToGoodsTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// click on store tab
		Action.clickView(solo, "category_tab_primary_title", 1);

		// click on store tab
		Action.clickView(solo, "category_tab_primary_title", 0);

		assertTrue("Store tab is not selected.",
				Action.getIsViewShown(solo, "star_button"));

	}

	// 1937924:check Goods result text
	public void testSearchGoodsResultText() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// get the text of search result
		String str = Action.getValuesInTextview(solo,
				"category_tab_secondary_title", 0).replace(
				ValidationText.Results_value, "");

		assertTrue("The search result number format is incorrect! ",
				str.matches("[0-9]+"));

	}

	// 1937925:check store result text
	public void testSearchStoreResultText() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// click on store tab
		Action.clickView(solo, "category_tab_primary_title", 1);

		// get the text of search result
		String str = Action.getValuesInTextview(solo,
				"category_tab_secondary_title", 1).replace(
				ValidationText.Results_value, "");
		assertTrue("The search result number format is incorrect! ",
				str.matches("[0-9]+"));

	}

	// 1937927:default show 20 items.
	public void testDefaultDisplay20Items() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		GridView gv = (GridView) solo.getView("gridview");

		// default count is 20
		assertEquals("Store tab is not selected:", gv.getCount(), 21);

	}

	// 1937928:Load more items.
	public void testLoadMoreItems() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// Action.closeSoftKeyBoard(solo);

		// swipe 4 times
		for (int k = 0; k < 4; k++) {
			TestHelper.swipeDown(solo, 1);
		}
		solo.sleep(3000);

		// get the numbers of grid view
		GridView gv = (GridView) solo.getView("gridview");
		int gv_count = gv.getCount();

		assertTrue("Store tab is not selected:", gv_count > 21);

	}

	// 1937931:check advanced page
	public void testCheckAdvancedPage() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Advanced screen
		Action.enterAdvancedPage(solo);

		Assert.navigateToAdvancedTab(solo);

	}

	// 1937932:Check if default to choose “sort” Tab
	public void testDefaultChooseSortTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);
		// navigate to Advanced screen
		Action.enterAdvancedPage(solo);

		TextView tv = (TextView) solo.getView("indicator_sort", 0);

		assertEquals("Sort tab is not the default option.", tv.getVisibility(),
				0);

	}

	// 1937933:Display sort tab
	public void testNavigateToSortTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Advanced screen
		Action.enterAdvancedPage(solo);

		// check if go to sort screen
		Assert.navigateToSortTab(solo);

	}

	// 1937934: display Filter tab
	public void testNavigateToFilterTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Filter screen
		Action.enterAdvancedSortPage(solo);

		// check if go to filter screen
		Assert.navigateToFilterTab(solo);

	}

	// 1937935: check sort tab items
	public void testCheckSortTabItems() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Advanced screen
		Action.enterAdvancedPage(solo);

		// check sort table items
		Assert.navigateToSortTab(solo);

		for (int i = 0; i < 3; i++) {
			// compare the position of two views
			boolean flag = TestHelper.positionCompare(solo, "text1", i,
					"text1", i + 1, 1);

			if (!flag) {
				assertTrue(
						"Store name is not on the right of store evaluation.",
						false);
			}
		}

	}

	// 1937940: check Layout
	public void testCheckLayoutOfFilterTab() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Filter screen
		Action.enterAdvancedSortPage(solo);

		// check if go to filter screen
		Assert.checkFilterLayout(solo);

	}

	// 1937944:check the function of “確定”button
	public void testCheckConfirmButtonFunction() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Filter screen
		Action.enterAdvancedSortPage(solo);

		// Action.closeSoftKeyBoard(solo);

		// Click on confirm button
		solo.clickOnView(solo.getView("btn_ok"));

		solo.sleep(3000);

		// get the number of gridview
		ArrayList<GridView> gv_list = solo.getCurrentViews(GridView.class);
		assertEquals("Go back to search result screen failed", gv_list.size(),
				1);

	}

	// 1937949:unselected “可刷卡”
	public void testUnselectedCanSwipeFunction() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Filter screen
		Action.enterAdvancedSortPage(solo);

		String view_id = "tb_cc";
		Action.clickView(solo, view_id);
		assertTrue("Can_Swipe button is not selected.",
				((ToggleButton) solo.getView(view_id)).isChecked());

		Action.clickView(solo, view_id);
		assertFalse("Can_Swipe button is selected.",
				((ToggleButton) solo.getView(view_id)).isChecked());
	}

	// 1937950: check HasVideo display
	public void testHasVideoDisplay() throws Exception {

		// navigate to category screen
		Action.navigateToCategoryScreen(solo);

		// click search button
		Action.clickSearchButtonOnScreen(solo);

		// input keyword and search
		Action.searchAfterPutData(solo, 0, ValidationText.Jacket);

		// navigate to Filter screen
		Action.enterAdvancedSortPage(solo);

		// Action.closeSoftKeyBoard(solo);

		String view_id = "tb_hasvideo";
		Action.clickView(solo, view_id);
		assertTrue("Has video button is not selected.",
				((ToggleButton) solo.getView(view_id)).isChecked());

	}
}
