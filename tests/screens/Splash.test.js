import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import Redux from '../../src/configs/redux/Redux,config';

import SplashScreens from '../../src/screens/Splash.screens';

// Import Splash Screens
// Buat mock navigation
const navigationMock = {
    replace: jest.fn(),
};

test('Splash Screen', () => {
    const { getByText, getByTestId } = render(
        <Provider store={Redux}>
            <SplashScreens navigation={navigationMock} />
        </Provider>
    );

    // Check if the splash screen components are rendered
    expect(getByTestId('splash-screen')).toBeTruthy();
});
