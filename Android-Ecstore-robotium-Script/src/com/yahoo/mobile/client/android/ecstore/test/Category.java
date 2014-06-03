package com.yahoo.mobile.client.android.ecstore.test.Category;

 
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.ToggleButton;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.test.ValidationText;

@SuppressWarnings("rawtypes")
public class Category extends ActivityInstrumentationTestCase2 {
	private static final String LAUNCHER_ACTIVITY_FULL_CLASSNAME = "com.yahoo.mobile.client.android.ecstore.ui.ECSplashActivity";
	private static Class launcherActivityClass;
	private Solo solo;
	private boolean isNum;
	static {
		try {
			launcherActivityClass = Class
					.forName(LAUNCHER_ACTIVITY_FULL_CLASSNAME);
		} catch (ClassNotFoundException e) {
			throw new RuntimeException(e);
		}
	}

	@SuppressWarnings("unchecked")
	public Category() throws ClassNotFoundException {
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

	// Go to clothes page.
	public void enterClassification() throws Exception {

		solo.waitForActivity("ECSplashActivity", 3000);
		Action.clickText(solo, ValidationText.All_Categories);
		Action.clickText(solo, ValidationText.Apparel);

	}

	// 1938037:Check back function.
	public void testBackFunction() throws Exception {

		enterClassification();
		solo.clickOnView(solo.getView("up", 0));
		solo.sleep(3000);
		Assert.CategoryListShow(solo);

	}

	// 1938041:Check tab display.
	public void testTab() throws Exception {

		enterClassification();
		int size = ValidationText.store_title.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(ValidationText.store_title[i]);
			assertTrue(ValidationText.store_title[i] + " not found", textFound);
		}

	}

	// 1938036:Check header items.
	public void testHeader() throws Exception {

		enterClassification();
		Action.clickText(solo, ValidationText.Commodity);
		solo.sleep(3000);
		// Back button
		ImageView back = (ImageView) solo.getView("home");

		// Search button
		View search = solo.getView("menu_search");

		// Filter button
		View advance = solo.getView("menu_filter");

		boolean views = back.isShown() && search.isShown() && advance.isShown();
		assertTrue("views not found", views);

	}

	// 1938042:Check sort tab items all display.
	public void testSortTab() throws Exception {

		enterClassification();
		int size = ValidationText.CostumeList.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(ValidationText.CostumeList[i]);
			assertTrue(ValidationText.CostumeList[i] + " not found", textFound);
		}

	}

	// 1938043:check return to item list.
	public void testItemList() throws Exception {

		enterClassification();
		Action.clickText(solo, ValidationText.Commodity);
		Action.clickText(solo, ValidationText.Categories);
		solo.goBack();
		solo.sleep(1000);
		Assert.CategoryListShow(solo);

	}

	// 1938052:check "搜寻服饰" show in search bar.
	public void testSearchbarDefault() throws Exception {

		enterClassification();
		solo.sleep(3000);
		solo.clickOnView(solo.getView("menu_search"));
		assertTrue("Cannot find text",
				solo.searchText(ValidationText.Search_Apparel, 1));

	}

	// 1938053:check switch to sort tab.
	public void testSort() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);
		int size = ValidationText.CategoryList_Tab1.length;

		for (int i = 0; i < size; i++) {
			boolean textFound = solo
					.searchText(ValidationText.CategoryList_Tab1[i]);
			assertTrue(ValidationText.CategoryList_Tab1[i] + " not found",
					textFound);
		}

	}

	// 1938054:check switch to filter sort tab.
	public void testFilterSort() throws Exception {

		enterClassification();
		solo.sleep(2000);
		Action.enterAdvancedPage(solo);
		solo.sleep(3000);
		solo.clickOnView(solo.getView("btn_filter"));

		int size = ValidationText.CategoryList_Tab2.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo
					.searchText(ValidationText.CategoryList_Tab2[i]);
			assertTrue(ValidationText.CategoryList_Tab2[i] + " not found",
					textFound);
		}

	}

	// 1938060:check the sort layout
	public void testSortLayout() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);
		solo.sleep(3000);
		solo.clickOnView(solo.getView("btn_filter"));
		View ScrollBar = solo.getView("seekbar", 0);
		View TableRowOne = solo.getView("tableRow1", 0);
		View TableRowTwo = solo.getView("tableRow2", 0);
		View TableRowThree = solo.getView("tableRow3", 0);
		solo.sleep(3000);
		boolean views = ScrollBar.isShown() && TableRowOne.isShown()
				&& TableRowTwo.isShown() && TableRowThree.isShown();
		assertTrue("views not found.", views);

	}

	// 1938055: verify the order of 排序 items
	public void testSortOptions() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);

		ListView lv = (ListView) solo.getView("list_sort", 0);
		lv.getItemAtPosition(0);
		int listviewCount = lv.getCount();
		assertEquals("Not four items in list.", listviewCount, 4);
		for (int i = 0; i < listviewCount; i++) {

			boolean sortList = lv.getItemAtPosition(0).equals(
					ValidationText.CategoryList_Tab1[0])
					&& lv.getItemAtPosition(1).equals(
							ValidationText.CategoryList_Tab1[1])
					&& lv.getItemAtPosition(2).equals(
							ValidationText.CategoryList_Tab1[2])
					&& lv.getItemAtPosition(3).equals(
							ValidationText.CategoryList_Tab1[3]);

			assertTrue("Sort incorrect.", sortList);

		}

	}

	// 1938063:Check the "确定" button to display
	public void testComfirmButtonDisplay() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);
		solo.sleep(3000);
		solo.clickOnView(solo.getView("btn_filter"));
		Button lv = (Button) solo.getView("btn_ok");
		assertEquals("Not find confirm button.", ValidationText.OK, lv
				.getText().toString());

	}

	// 1938047:check default items display.
	public void testCheckTheDefaultItems() throws Exception {

		enterClassification();
		Action.clickText(solo, ValidationText.Commodity);
		solo.sleep(3000);
		GridView lv = (GridView) solo.getView("gridview", 0);
		int defaultItems = lv.getCount();
		assertEquals("The default items incorrect.", 21, defaultItems);

	}

	// 1938048:check auto load more data.
	public void testAutoLoadMore() throws Exception {

		enterClassification();
		Action.clickText(solo, ValidationText.Commodity);
		solo.sleep(3000);
		GridView lv = (GridView) solo.getView("gridview", 0);

		// Scroll the screen to load more data.
		for (int i = 0; i < 8; i++) {
			TestHelper.swipeUp(solo, 1);
		}

		boolean listviewCount2 = lv.getCount() > 22;
		assertTrue("The default items incorrect.", listviewCount2);

	}

	// 1938069:check “可刷卡” can changed to unselected.
	public void testCreditCardMode() throws Exception {

		enterClassification();

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// solo.clickOnToggleButton("可刷卡");
		ToggleButton tb = (ToggleButton) solo.getView("tb_cc");

		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '可刷卡'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'可刷卡'  button  selected.", tb.isChecked());

	}

	// 1938102:Check the Star icon display
	public void testStarIconDisplay() throws Exception {

		enterClassification();
		Action.clickText(solo, ValidationText.Commodity);
		solo.sleep(3000);
		View star = (View) solo.getView("star_button", 1);
		assertTrue(" Cannot find the star icon ", star.isShown());

	}

	// 1938130:Check "全部分類" at the bottom of the screen.
	public void testAllClassificationExist() throws Exception {

		View classificationIcon = (View) solo.getView("tab_image", 2);

		TextView classificationText = (TextView) solo.getView("tab_text", 2);
		boolean text = classificationText.getText().toString()
				.equals(ValidationText.All_Categories);

		assertTrue("All classification does not exist.",
				classificationIcon.isShown() && text);

	}

	// 1938131:Check all classification item page.
	public void testAllClassificationItemPage() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		Assert.CategoryListShow(solo);

	}

	// 1938133:Check the screen top text.
	public void testClassificationTextOnTheTop() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		TextView classificationText = (TextView) solo
				.getView("action_bar_title");
		boolean text = classificationText.getText().toString().trim()
				.equals(ValidationText.All_Categories);

		assertTrue("All classification text does not exist.", text);

	}

	// 1938135:Check the search icon on the screen top.
	public void testSearchIconOnTheTop() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		View searchIcon = (View) solo.getView("menu_search", 0);

		assertTrue("Search icon does not exist.", searchIcon.isShown());

	}

	// 1938141:Check latest update side bar.
	public void testLatestUpdateSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView mostFavoriteText = (TextView) solo.getView("tab_text", 0);
		boolean text = mostFavoriteText.getText().toString()
				.equals(ValidationText.News);

		View latestUpdateIcon = (View) solo.getView("tab_image", 0);

		assertTrue("Latest update sidebar does not exist.",
				latestUpdateIcon.isShown() && text);
	}

	// 1938143:Check most favorite store side bar.
	public void testMostFavoriteSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView mostFavoriteText = (TextView) solo.getView("tab_text", 1);
		boolean text = mostFavoriteText.getText().toString()
				.equals(ValidationText.Favorite_Stores);
		String texts = mostFavoriteText.getText().toString();
		Log.i("what", texts);
		View mostFavoriteIcon = (View) solo.getView("tab_image", 1);

		assertTrue("Most favorite sidebar does not exist.",
				mostFavoriteIcon.isShown() && text);
	}

	// 1938145:Check shopping Cart side bar
	public void testShoppingCartSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView shoppingCart = (TextView) solo.getView("tab_text", 3);
		boolean text = shoppingCart.getText().toString()
				.equals(ValidationText.Shopping_Cart);

		View shoppingCartIcon = (View) solo.getView("tab_image", 3);

		assertTrue("Shopping Cart sidebar does not exist.",
				shoppingCartIcon.isShown() && text);
	}

	// 1938147:Check my account side bar.
	public void testMyAccountSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView myAccount = (TextView) solo.getView("tab_text", 4);
		boolean text = myAccount.getText().toString().trim()
				.equals(ValidationText.My_Account);

		String temp = myAccount.getText().toString();
		Log.i("what", temp);

		View myAccountIcon = (View) solo.getView("tab_image", 4);

		assertTrue("My account sidebar does not exist.",
				myAccountIcon.isShown() && text);
	}

	// 1938149:Check '服飾' is displayed on the top of the screen.
	public void testDressDisplayedOnTheScreen() throws Exception {

		enterClassification();
		TextView dressText = (TextView) solo.getView("action_bar_title", 0);
		boolean text = dressText.getText().toString().trim()
				.equals(ValidationText.Apparel);
		Log.i("what", dressText.getText().toString());
		assertTrue("dress does not exist.", text);

	}

		

}
