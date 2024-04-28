import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CardContacts from '../../src/components/molecules/CardContacts.molecules';

describe('CardContacts Component', () => {
    it('renders correctly with provided props', () => {
        const onPressMock = jest.fn();
        const onPressDeleteMock = jest.fn();
        const firstName = 'John';
        const lastName = 'Doe';
        const age = 30;
        const pic = 'https://example.com/profile.jpg';
        const { getByText, getByTestId } = render(
            <CardContacts
                firstName={firstName}
                lastName={lastName}
                age={age}
                pic={pic}
                onPress={onPressMock}
            />
        );

        // Assert that the card content is rendered correctly
        expect(getByText(`${firstName} ${lastName}`)).toBeTruthy();
        expect(getByText(`${age} Years Old`)).toBeTruthy();
        expect(getByTestId('contact-pic').props.source.uri).toBe(pic);

        // Simulate press on the card
        fireEvent.press(getByTestId('card-contact'));
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('renders correctly with delete button when isDelete prop is true', () => {
        const onPressMock = jest.fn();
        const onPressDeleteMock = jest.fn();
        const firstName = 'John';
        const lastName = 'Doe';
        const age = 30;
        const pic = 'https://example.com/profile.jpg';
        const { getByTestId, queryByTestId } = render(
            <CardContacts
                firstName={firstName}
                lastName={lastName}
                age={age}
                pic={pic}
                onPress={onPressMock}
                isDelete={true}
                onPressDelete={onPressDeleteMock}
            />
        );

        // Assert that the delete button is rendered
        expect(queryByTestId('delete-button')).toBeTruthy();

        // Simulate press on the delete button
        fireEvent.press(getByTestId('delete-button'));
        expect(onPressDeleteMock).toHaveBeenCalledTimes(1);
    });
});
