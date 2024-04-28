import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DetailContact from '../../src/screens/DetailContact.screens';


// Mocking the navigation prop
const mockNavigation = { replace: jest.fn() };

// Mocking the route param
const mockRoute = {
    params: {
        data: { id: 123 }, // Mock data id
    },
};

describe('DetailContact Component', () => {
    it('renders correctly', async () => {
        const { getByText, getByTestId } = render(
            <DetailContact navigation={mockNavigation} route={mockRoute} />
        );

        // Check if the component renders correctly
        expect(getByText('Detail Contact')).toBeTruthy();
        expect(getByTestId('first-name')).toBeTruthy();
        expect(getByTestId('last-name')).toBeTruthy();
        expect(getByTestId('age')).toBeTruthy();
        expect(getByTestId('edit-button')).toBeTruthy();
    });

    it('toggles edit mode when edit button is pressed', async () => {
        const { getByTestId } = render(
            <DetailContact navigation={mockNavigation} route={mockRoute} />
        );

        const editButton = getByTestId('edit-button');

        // Click edit button
        fireEvent.press(editButton);

        // Check if edit mode is toggled
        expect(getByTestId('first-name-input')).toBeTruthy();
        expect(getByTestId('last-name-input')).toBeTruthy();
        expect(getByTestId('age-input')).toBeTruthy();
        expect(getByTestId('cancel-button')).toBeTruthy();
        expect(getByTestId('save-button')).toBeTruthy();
    });

    // Add more test cases as needed
});
