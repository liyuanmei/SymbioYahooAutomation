package com.yahoo.mobile.client.android.ecstore.test;

import junit.framework.Assert;
import android.annotation.SuppressLint;
import android.util.Log;
import android.view.Display;
import android.view.View;

import com.robotium.solo.Solo;

public class TestHelper {

	@SuppressWarnings("deprecation")
	public static void swipeToLeft(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float xStart = width - 10;
		float xEnd = 10;
		solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
	}

	@SuppressWarnings("deprecation")
	public static void swipeToRight(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float xStart = 10;
		float xEnd = width - 10;
		solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
	}

	@SuppressWarnings("deprecation")
	public static void swipeDown(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float yStart = (height / 2) - (height / 4);
		float yEnd = (height / 2) + (height / 3);
		solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
	}
	
	@SuppressWarnings("deprecation")
	public static void swipeDownLowPixle(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float yStart = (height / 2)  ;
		Log.i("number", String.valueOf(yStart));
		float yEnd = (height )  ;
		Log.i("number", String.valueOf(yEnd));
		solo.drag(width / 2, width / 2, 470, 701, stepCount);
	}
 
	@SuppressWarnings("deprecation")
	public static void swipeUp(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float yStart = height - 200;
		float yEnd = 200;
		solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
	}

	@SuppressWarnings("deprecation")
	public static void swipeUp2(Solo solo, int stepCount) {
		Display display = solo.getCurrentActivity().getWindowManager()
				.getDefaultDisplay();
		int width = display.getWidth();
		int height = display.getHeight();
		float yStart = height - 200;
		float yEnd = height - 260;
		solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
		solo.sleep(1000);
	}

	/*
	 * Compare the location of two views.
	 * @ Parameters: 1. solo 2. view_id_1 3.
	 * view_id_2 4. KeyString. values: 1. up; 2.down; 3. left; 4. right
	 */
	@SuppressLint("NewApi")
	public static boolean positionCompare(Solo solo, String view_F,
			int view_F_id, String view_S, int View_S_id, int keyString) {

		View view1 = solo.getView(view_F, view_F_id);
		Log.i("number", "View1X:" + String.valueOf(view1.getX()));
		Log.i("number", "View1Y:" + String.valueOf(view1.getY()));
		View view2 = solo.getView(view_S, View_S_id);
		Log.i("number", "View2X:" + String.valueOf(view2.getX()));
		Log.i("number", "View2Y:" + String.valueOf(view2.getY()));
		if (keyString > 4 || keyString < 1) {
			Assert.assertTrue("Position parameter is error.", false);
		}
		switch (keyString) {
		case 1:
			return view1.getY() < view2.getY();
		case 2:
			return view1.getY() > view2.getY();
		case 3:
			return view1.getX() < view2.getX();
		case 4:
			return view1.getX() > view2.getX();
		default:
			return false;
		}

	}
}
