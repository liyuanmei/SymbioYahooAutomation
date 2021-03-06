/**
 * This is automated script about "CategoryPartOne".
 *
 * You can run these test cases either on the emulator or on device.
 * By Eclipse:
 * Right click the test project and select Run As --> Run As Android JUnit Test
 *
 * By Ant:
 * 1.Run "android update test-project -m [path to target application] -p
 * [path to the test folder]"  in command line.
 * 2."ant test"
 *
 * By using instrument command:
 * Run all test project:adb shell am instrument -w com.yahoo.mobile.client.
 * android.ecstore.test/android.test.InstrumentationTestRunner
 * Just run category:adb shell am instrument -e class com.yahoo.mobile.client.
 * android.ecstore.test.test1.CategoryPartOne.CategoryPartOne -w com.yahoo.mobile.client.android.
 * ecstore.test/android.test.InstrumentationTestRunner
 *
 * @author SYMBIO.
 * @version YAHOO APP:1.2.4
 */

package com.yahoo.mobile.client.android.ecstore.test.test1.CategoryPartOne;

import android.annotation.SuppressLint;
import android.app.Activity;
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

/**
 * @author Administrator
 * 
 */

@SuppressLint("NewApi")
public class CategoryPartOne extends ActivityInstrumentationTestCase2<Activity> {

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
	public CategoryPartOne() throws ClassNotFoundException {
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
	 * 1938037:Check back function.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testBackFunction() throws Exception {

		Action.enterCategoryClothesPage(solo);
		solo.clickOnView(solo.getView("home"));
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		Assert.categoryListShow(solo);

	}

	/**
	 * 1938041:Check tab display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testTab() throws Exception {

		Action.enterCategoryClothesPage(solo);
		int size = ValidationText.STORE_TITLE.length;

		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(ValidationText.STORE_TITLE[i]);
			assertTrue(ValidationText.STORE_TITLE[i] + " not found", textFound);
		}

	}

	/**
	 * 1938036:Check header item.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHeader() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

		// Get "back" button view.
		ImageView back = (ImageView) solo.getView("home");

		// Get "Apparel" text.
		TextView dressText = (TextView) solo.getView("action_bar_title", 0);
		boolean text = dressText.getText().toString().trim()
				.equals(ValidationText.APPAREL);

		// Get "Search" button view.
		View search = solo.getView("menu_search");

		// Get "Filter" button view.
		View advance = solo.getView("menu_filter");

		boolean views = back.isShown() && search.isShown() && advance.isShown();
		assertTrue("views not found", views && text);

	}

	/**
	 * 1938042:Check sort tab items all display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSortTab() throws Exception {

		Action.enterCategoryClothesPage(solo);
		int size = ValidationText.COSTUMELIST.length;

		for (int i = 0; i < size; i++) {
			boolean textFound = solo.searchText(ValidationText.COSTUMELIST[i]);
			assertTrue(ValidationText.COSTUMELIST[i] + " not found", textFound);
		}

	}

	/**
	 * 1938043:Check can return to item list.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testItemList() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		Action.clickText(solo, ValidationText.CATEGORIES);
		solo.goBack();
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Assert.categoryListShow(solo);

	}

	/**
	 * 1938052:Check "Search Clothing" text is show in search bar.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSearchbarDefault() throws Exception {

		Action.enterCategoryClothesPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		solo.clickOnView(solo.getView("menu_search"));
		
		assertTrue("Not find 'Search Clothing' in search bar.",
				solo.searchText(ValidationText.SEARCH_APPAREL, 1));

	}

	/**
	 * 1938053:Check can switch to sort tab.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSort() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.enterAdvancedPage(solo);
		int size = ValidationText.CATEGORYLIST_TAB1.length;

		for (int i = 0; i < size; i++) {
			boolean textFound = solo
					.searchText(ValidationText.CATEGORYLIST_TAB1[i]);
			assertTrue(ValidationText.CATEGORYLIST_TAB1[i] + " not found",
					textFound);
		}

	}

	/**
	 * 1938054:Check switch to filter sort tab.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testFilterSort() throws Exception {

		Action.enterCategoryClothesPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		Action.enterAdvancedPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("btn_filter"));

		int size = ValidationText.CATEGORYLIST_TAB2.length;
		for (int i = 0; i < size; i++) {
			boolean textFound = solo
					.searchText(ValidationText.CATEGORYLIST_TAB2[i]);
			assertTrue(ValidationText.CATEGORYLIST_TAB2[i] + " not found.",
					textFound);
		}

	}

	/**
	 * 1938060:Check the sort layout.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSortLayout() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.enterAdvancedPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("btn_filter"));

		// Get the current page elements.
		View scrollBar = solo.getView("seekbar", 0);
		View tableRowOne = solo.getView("tableRow1", 0);
		View tableRowTwo = solo.getView("tableRow2", 0);
		View tableRowThree = solo.getView("tableRow3", 0);

		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

		boolean views = scrollBar.isShown() && tableRowOne.isShown()
				&& tableRowTwo.isShown() && tableRowThree.isShown();
		assertTrue("Some views not found.", views);

	}

	/**
	 * 1938055: verify the order of sort items.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSortOptions() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.enterAdvancedPage(solo);

		// Get list view.
		ListView lv = (ListView) solo.getView("list_sort", 0);
		lv.getItemAtPosition(0);
		int listviewCount = lv.getCount();
		assertEquals("Not four items in list.", listviewCount,
				Action.VIEW_ID_FOUR);

		for (int i = 0; i < listviewCount; i++) {

			boolean sortList = lv.getItemAtPosition(0).equals(
					ValidationText.CATEGORYLIST_TAB1[0])
					&& lv.getItemAtPosition(1)
							.equals(ValidationText.CATEGORYLIST_TAB1[Action.VIEW_ID_ONE])
					&& lv.getItemAtPosition(2)
							.equals(ValidationText.CATEGORYLIST_TAB1[Action.VIEW_ID_TWO])
					&& lv.getItemAtPosition(Action.VIEW_ID_THREE)
							.equals(ValidationText.CATEGORYLIST_TAB1[Action.VIEW_ID_THREE]);

			assertTrue("Sort incorrect.", sortList);

		}

	}

	/**
	 * 1938063:Check the "OK" button to display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testComfirmButtonDisplay() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.enterAdvancedPage(solo);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.clickOnView(solo.getView("btn_filter"));
		Button lv = (Button) solo.getView("btn_ok");
		assertEquals("Not find 'OK' button.", ValidationText.OK, lv.getText()
				.toString());

	}

	/**
	 * 1938047:Check default items display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCheckTheDefaultItems() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		GridView lv = (GridView) solo.getView("gridview", 0);
		int defaultItems = lv.getCount();
		assertEquals("The default items incorrect.",
				Action.DEFAULT_LISTVIEW_COUNT, defaultItems);

	}

	/**
	 * 1938048:Check auto load more data.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAutoLoadMore() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		GridView lv = (GridView) solo.getView("gridview", 0);

		// Scroll the screen to load more data.
		for (int i = 0; i < Action.VIEW_ID_FIVE; i++) {
			TestHelper.swipeUp(solo, 1);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
		}

		boolean listviewCount2 = lv.getCount() > Action.DEFAULT_LISTVIEW_COUNT_PLUS;
		assertTrue("The default items incorrect.", listviewCount2);

	}

	/**
	 * 1938069:Check "Credit cards accepted" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCreditCardMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// solo.clickOnToggleButton("Can use credit card");
		ToggleButton tb = (ToggleButton) solo.getView("tb_cc");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Credit cards accepted'  button unselected.",
				tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Credit cards accepted'  button  selected.",
				tb.isChecked());

	}

	/**
	 * 1938072:Check "A/V" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHasVideoMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "hasVideo" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_hasvideo");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'A/V'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'A/V'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938075:Check "Zero Interest Rate" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testZeroInterestMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "0 Interest" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_cczeroint");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Zero Interest Rate'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Zero Interest Rate'  button  selected.", tb.isChecked());
	}

	/**
	 * 1938078:Check "Installments" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testInstallmentsMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "Installments" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_ccinstall");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Installments'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Installments'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938081:Check "Payments" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSupermarketPaymentMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "Payment" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_cvs_pay");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Payments'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Payments'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938084:Check "Pickup" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSupermarketPickupMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "Pickup" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_cvs_pick");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Pickup'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Pickup'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938087:Check "Has Stock" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHasStockMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);

		// Get "Has Stock" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_hasstock");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Has Stock'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Has Stock'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938090:Check "Has Image" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHasImageMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced page.
		Action.enterAdvancedSortPage(solo);

		// Get "HasImage" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_hasimage");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Has Image'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Has Image'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938093:Check "SuperiorStore" can changed to unselected.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testSuperiorStoreMode() throws Exception {

		Action.enterCategoryClothesPage(solo);

		// Go to advanced page.
		Action.enterAdvancedSortPage(solo);

		// Get "SuperiorStore" button.
		ToggleButton tb = (ToggleButton) solo.getView("tb_issuperior");

		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertTrue(" 'Superior Store'  button unselected.", tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		assertFalse("'Superior Store'  button  selected.", tb.isChecked());

	}

	/**
	 * 1938100:Check the commodity price display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCommodityPriceDisplay() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TextView price;

		try {
			price = (TextView) solo.getView("listitem_productlist_price", 0);
		} catch (AssertionError e) {
			Action.enterCategoryClothesPage(solo);
			Action.clickText(solo, ValidationText.COMMODITY);
			price = (TextView) solo.getView("listitem_productlist_price", 0);
		}

		String sr = price.getText().toString();

		// Judgment whether the price matches the format of '$xxx'.
		boolean isNums = sr.matches("[$][0-9]+");

		assertTrue(" Cannot find the commodity price or price "
				+ "format is incorrect! ", isNums);

	}

	/**
	 * 1938101:Check the Shops score display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testShopsScoreDisplay() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TextView price = null;

		try {
			price = (TextView) solo.getView(
					"listitem_productlist_store_rating", 0);
		} catch (AssertionError e) {
			Action.enterCategoryClothesPage(solo);
			Action.clickText(solo, ValidationText.COMMODITY);
			solo.sleep(ValidationText.WAIT_TIME_SHORT);
		}

		String sr = price.getText().toString();

		// Judgment whether the price matches the format of 'x.x'.
		boolean isNumz = sr.matches("^[0-9].[0-9]+$");

		assertTrue(
				" Cannot find the shops score or score format is incorrect! ",
				isNumz);

	}

	/**
	 * 1938102:Check the Star icon display.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testStarIconDisplay() throws Exception {

		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		View star = (View) solo.getView("star_button", 1);
		assertTrue(" Cannot find the star icon ", star.isShown());

	}

	/**
	 * 1938130:Check "All Categories" at the bottom of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAllClassificationExist() throws Exception {

		View classificationIcon = (View) solo.getView("tab_image", 2);

		TextView classificationText = (TextView) solo.getView("tab_text", 2);
		boolean text = classificationText.getText().toString()
				.equals(ValidationText.ALL_CATEGORIES);

		assertTrue("All classification does not exist.",
				classificationIcon.isShown() && text);

	}

	/**
	 * 1938131:Check all classification item page.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAllClassificationItemPage() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		Assert.categoryListShow(solo);

	}

	/**
	 * 1938133:Check the screen top text.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testClassificationTextOnTheTop() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		TextView classificationText = (TextView) solo
				.getView("action_bar_title");
		boolean text = classificationText.getText().toString().trim()
				.equals(ValidationText.ALL_CATEGORIES);

		assertTrue("All classification text does not exist.", text);

	}

	/**
	 * 1938141:Check latest update side bar.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testLatestUpdateSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView mostFavoriteText = (TextView) solo.getView("tab_text", 0);
		boolean text = mostFavoriteText.getText().toString()
				.equals(ValidationText.NEWS);

		View latestUpdateIcon = (View) solo.getView("tab_image", 0);

		assertTrue("Latest update sidebar does not exist.",
				latestUpdateIcon.isShown() && text);

	}

	/**
	 * 1938143:Check most favorite store side bar.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testMostFavoriteSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView mostFavoriteText = (TextView) solo.getView("tab_text", 1);
		boolean text = mostFavoriteText.getText().toString()
				.equals(ValidationText.FAVORITE_STORES);
		String texts = mostFavoriteText.getText().toString();
		Log.i("what", texts);
		View mostFavoriteIcon = (View) solo.getView("tab_image", 1);

		assertTrue("Most favorite sidebar does not exist.",
				mostFavoriteIcon.isShown() && text);

	}

	/**
	 * 1938145:Check shopping Cart side bar.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testShoppingCartSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView shoppingCart = (TextView) solo.getView("tab_text",
				Action.VIEW_ID_THREE);
		boolean text = shoppingCart.getText().toString()
				.equals(ValidationText.SHOPPING_CART);

		View shoppingCartIcon = (View) solo.getView("tab_image",
				Action.VIEW_ID_THREE);

		assertTrue("Shopping Cart sidebar does not exist.",
				shoppingCartIcon.isShown() && text);

	}

	/**
	 * 1938147:Check my account side bar.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testMyAccountSidebar() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));

		TextView myAccount = (TextView) solo.getView("tab_text",
				Action.VIEW_ID_FOUR);
		boolean text = myAccount.getText().toString().trim()
				.equals(ValidationText.MY_ACCOUNT);

		String temp = myAccount.getText().toString();
		Log.i("what", temp);

		View myAccountIcon = (View) solo.getView("tab_image",
				Action.VIEW_ID_FOUR);

		assertTrue("My account sidebar does not exist.",
				myAccountIcon.isShown() && text);

	}

	/**
	 * 1938149:Check 'Apparel' is displayed on the top of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testDressDisplayedOnTheScreen() throws Exception {

		Action.enterCategoryClothesPage(solo);
		TextView dressText = (TextView) solo.getView("action_bar_title", 0);
		
		boolean text = dressText.getText().toString().trim()
				.equals(ValidationText.APPAREL);
		Log.i("what", dressText.getText().toString());
		assertTrue("Dress text does not exist.", text);

	}

	/**
	 * 1938150:Check 'Beauty' is displayed on the top of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testMakeupDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.BEAUTY);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView makeupText = (TextView) solo.getView("action_bar_title", 0);
		boolean text = makeupText.getText().toString().trim()
				.equals(ValidationText.BEAUTY);
		assertTrue("Makeup text does not exist.", text);

	}

	/**
	 * 1938151:Check 'Shoes/Bags/Accessories' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testAccessoriesDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.SHOES_BAGS_ACCESSORIES);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView accessories = (TextView) solo.getView("action_bar_title", 0);
		
		boolean text = accessories.getText().toString().trim()
				.equals(ValidationText.SHOES_BAGS_ACCESSORIES);
		assertTrue("Accessories text does not exist.", text);

	}

	/**
	 * 1938152:Check 'Mummy/Baby' is displayed on the top of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testBabyDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.searchText(ValidationText.COMPUTERS_PERIPHERALS);
		solo.clickOnText(ValidationText.MUMMY_BABY);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView baby = (TextView) solo.getView("action_bar_title", 0);
		boolean text = baby.getText().toString().trim()
				.equals(ValidationText.MUMMY_BABY);

		assertTrue("Mom's Baby text does not exist.", text);

	}

	/**
	 * 1938153:Check 'Computers_Peripherals' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testComputerDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.COMPUTERS_PERIPHERALS);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView computer = (TextView) solo.getView("action_bar_title", 0);
		
		boolean text = computer.getText().toString().trim()
				.equals(ValidationText.COMPUTERS_PERIPHERALS);

		assertTrue("Computer text does not exist.", text);

	}

	/**
	 * 1938154:Check 'Homeappliances_AV' is displayed on the top of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHouseholdAppliancesDisplayedOnTheScreen()
			throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.HOMEAPPLIANCES_AV);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView householdAppliances = (TextView) solo.getView(
				"action_bar_title", 0);
		boolean text = householdAppliances.getText().toString().trim()
				.equals(ValidationText.HOMEAPPLIANCES_AV);

		Log.i("what", householdAppliances.getText().toString());

		assertTrue("Computer text does not exist.", text);

	}

	/**
	 * 1938155:Check 'Camera_Mobile_Toys' is displayed on the top of the screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testFasionDigitalDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.searchText(ValidationText.GOURMET_HEALTH_BEVERAGE);
		solo.clickOnText(ValidationText.CAMERA_MOBILE_TOYS);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		TextView digital = (TextView) solo.getView("action_bar_title", 0);
		boolean text = digital.getText().toString().trim()
				.equals(ValidationText.CAMERA_MOBILE_TOYS2);
		Log.i("what", digital.getText().toString());
		assertTrue("Fasion digital text does not exist.", text);

	}

	/**
	 * 1938156:Check 'GOURMET/Health/Beverage' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testFoodDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.GOURMET_HEALTH_BEVERAGE);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView food = (TextView) solo.getView("action_bar_title", 0);
		boolean text = food.getText().toString().trim()
				.equals(ValidationText.GOURMET_HEALTH_BEVERAGE2);
		Log.i("what", food.getText().toString().trim());
		assertTrue("Food text does not exist.", text);

	}

	/**
	 * 1938157:Check 'Medical/Commodity/Pet' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testCleanDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.MEDICAL_COMMODITY_PET);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView clean = (TextView) solo.getView("action_bar_title", 0);
		boolean text = clean.getText().toString().trim()
				.equals(ValidationText.MEDICAL_COMMODITY_PET2);

		assertTrue("Clean text does not exist.", text);

	}

	/**
	 * 1938158:Check 'Home/Bedding/Furniture' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testHomeDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.scrollToBottom();
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		solo.scrollToBottom();
		solo.searchText(ValidationText.HOME_BEDDING_FURNITURE);
		solo.clickOnText(ValidationText.HOME_BEDDING_FURNITURE);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);
		TextView home = (TextView) solo.getView("action_bar_title", 0);
		
		boolean text = home.getText().toString().trim()
				.equals(ValidationText.HOME_BEDDING_FURNITURE2);

		assertTrue("home text does not exist.", text);

	}

	/**
	 * 1938160:Check 'Books/STATIONERY/Video' is displayed on the top of the
	 * screen.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testBookDisplayedOnTheScreen() throws Exception {

		solo.clickOnView(solo.getView("tab_image", 2));
		solo.clickOnText(ValidationText.BOOKS_STATIONERY_VIDEO);
		solo.sleep(ValidationText.WAIT_TIME_MIDDLE);

		TextView book = (TextView) solo.getView("action_bar_title", 0);
		boolean text = book.getText().toString().trim()
				.equals(ValidationText.BOOKS_STATIONERY_VIDEO2);
		assertTrue("book text does not exist.", text);

	}

	/**
	 * 1938103:Check to click the start icon without login.
	 * 
	 * @throws Exception
	 *             if has error
	 */
	public final void testStarIconWithoutLogin() throws Exception {

		Account.judgementAccountWithoutLogin(solo);
		Action.enterCategoryClothesPage(solo);
		Action.clickText(solo, ValidationText.COMMODITY);
		solo.sleep(ValidationText.WAIT_TIME_SHORT);
		View star = (View) solo.getView("star_button", 0);
		solo.clickOnView(star);

		// Get toast text.
		TextView toastTextView = (TextView) solo.getView("message", 0);
		if (toastTextView != null) {
			String toastText = toastTextView.getText().toString();
			assertEquals(toastText, ValidationText.PLEASE_LOGIN_ACCOUNT);
		}

	}

}
