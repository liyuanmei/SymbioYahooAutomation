package com.yahoo.mobile.client.android.ecstore.test;

import android.annotation.SuppressLint;
import android.test.ActivityInstrumentationTestCase2;
import android.view.View;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.ToggleButton;
import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;

@SuppressLint("NewApi")
@SuppressWarnings("rawtypes")
public class Category extends ActivityInstrumentationTestCase2 {
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
	public Category() throws ClassNotFoundException {
		super(launcherActivityClass);
	}

	@Override
	protected void setUp() throws Exception {
		solo = new Solo(getInstrumentation(), getActivity());
		// Assert.FirstLaunch(solo);
	}

	@Override
	public void tearDown() throws Exception {

		solo.finishOpenedActivities();

	}

	// Go to clothes page.
	public void enterClassification() throws Exception {

		solo.waitForActivity("ECSplashActivity", 3000);
		solo.waitForText("全部分類", 1, 3000);
		solo.clickOnText("全部分類");
		solo.waitForText("服飾", 1, 3000);
		solo.clickOnText("服飾");

	}

	// 1938037:Check back function.
	public void testBackFunction() throws Exception {

		enterClassification();
		solo.clickOnView(solo.getView("up", 0));// Tap back key
		solo.sleep(3000);
		Assert.CategoryListShow(solo);

	}

	// 1938041:Check tab display.
	public void testTab() throws Exception {

		enterClassification();
		String[] CategoryList = { "分類", "商品" };
		int size = CategoryList.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(CategoryList[i]);
			assertTrue(CategoryList[i] + " not found", textFound);
		}

	}

	// 1938036:Check header items.
	public void testHeader() throws Exception {

		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);

		View search = solo.getView("menu_search");
		View advance = solo.getView("menu_filter");
		boolean views = search.isShown() && advance.isShown();
		assertTrue("views not found", views);

	}

	// 1938042:Check sort tab items all display.
	public void testSortTab() throws Exception {

		enterClassification();
		String[] CategoryList = { "漢神百貨品牌服飾", "漢神百貨內睡衣", "流行女裝", "中大尺碼女裝",
				"女性內睡衣", "品牌/潮流男裝" };
		int size = CategoryList.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(CategoryList[i]);
			assertTrue(CategoryList[i] + " not found", textFound);
		}

	}

	// 1938043:check return to item list.
	public void testItemList() throws Exception {

		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.waitForText("分類", 1, 3000);
		solo.clickOnText("分類");
		solo.goBack();
		Assert.CategoryListShow(solo);

	}

	// 1938052:check "搜寻服饰" show in search bar.
	public void testSearchbarDefault() throws Exception {

		enterClassification();
		solo.sleep(3000);
		solo.clickOnView(solo.getView("menu_search"));
		assertTrue("Cannot find '搜尋服飾'", solo.searchText("搜尋服飾", 1));

	}

	// 1938053:check switch to sort tab.
	public void testSort() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);
		String[] CategoryList = { "相關度", "最新上架", "價錢低到高", "價錢高到低" };
		int size = CategoryList.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(CategoryList[i]);
			assertTrue(CategoryList[i] + " not found", textFound);
		}

	}

	// 1938054:check switch to filter sort tab.
	public void testFilterSort() throws Exception {

		enterClassification();
		solo.sleep(2000);
		Action.enterAdvancedPage(solo);
		solo.sleep(3000);
		solo.clickOnView(solo.getView("btn_filter"));
		String[] CategoryList = { "可刷卡", "0利率", "可分期", "超商付款", "有現貨", "有影音",
				"有圖片", "優良商店" };
		int size = CategoryList.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(CategoryList[i]);
			assertTrue(CategoryList[i] + " not found", textFound);
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

	// 2014-04-18
	// 1938055: verify the order of 排序 items
	public void testSortOptions() throws Exception {

		enterClassification();
		Action.enterAdvancedPage(solo);

		ListView lv = (ListView) solo.getView("list_sort", 0);
		lv.getItemAtPosition(0);
		int listviewCount = lv.getCount();
		assertEquals("Not four items in list.", listviewCount, 4);
		for (int i = 0; i < listviewCount; i++) {

			boolean sortList = lv.getItemAtPosition(0).equals("相關度")
					&& lv.getItemAtPosition(1).equals("最新上架")
					&& lv.getItemAtPosition(2).equals("價錢低到高")
					&& lv.getItemAtPosition(3).equals("價錢高到低");

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
		assertEquals("Not find confirm button.", "確定", lv.getText().toString());

	}

	// 1938047:check default items display.
	public void testCheckTheDefaultItems() throws Exception {

		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		GridView lv = (GridView) solo.getView("gridview", 0);
		int defaultItems = lv.getCount();
		assertEquals("The default items incorrect.", 21, defaultItems);

	}

	// 1938048:check auto load more data.
	public void testAutoLoadMore() throws Exception {

		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
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

	// 2014-04-24
	// 1938102:Check the Star icon display
	public void testStarIconDisplay() throws Exception {

		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		View star = (View) solo.getView("star_button", 1);
		assertTrue(" Cannot find the star icon ", star.isShown());

	}

	// 2014-04-25
	// 1938130:Check "全部分類" at the bottom of the screen.
	public void testAllClassificationExist() throws Exception {

		View classificationIcon = (View) solo.getView("tab_image", 2);

		TextView classificationText = (TextView) solo.getView("tab_text", 2);
		boolean text = classificationText.getText().toString().equals("全部分類");

		assertTrue("All classification does not exist.",
				classificationIcon.isShown() && text);
	}

	// 1938131:Check all classification item page.
	public void testAllClassificationItemPage() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		Assert.CategoryListShow(solo);
	}

}