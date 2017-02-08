package com.rncobravideo.splashs;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class SplashScreenModule extends ReactContextBaseJavaModule {

    public static final String REACT_CLASS = "SplashScreen";

    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void hide(){
        SplashScreen.hide(getCurrentActivity());
    }

}
