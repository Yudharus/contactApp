import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Redux from '../../src/configs/redux/Redux,config';
import HomeScreens from '../../src/screens/Home.screens';

describe('Home Component', () => {
    it('renders correctly', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={Redux}>
                <HomeScreens navigation={{ push: jest.fn() }} />
            </Provider>
        );

        // Memeriksa apakah komponen dirender dengan benar
        expect(getByText('Contacts')).toBeTruthy();
        expect(getByTestId('add-button')).toBeTruthy();

        // Anda bisa menambahkan asserstions lebih lanjut jika diperlukan
    });

    // Tambahkan lebih banyak test cases sesuai kebutuhan
});
