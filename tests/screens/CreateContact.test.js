import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateContact from '../../src/screens/CreateContact.screens';


jest.mock('../../src/libs/fetchings/Contacts', () => ({
    CreateNewContact: jest.fn(),
}));

describe('CreateContact', () => {
    test('should render CreateContact component', async () => {
        const { getByText, getByTestId } = render(<CreateContact />);

        // Use getByTestId to find the TextInput components by their testID
        const firstNameInput = getByTestId('first-name-input');
        const lastNameInput = getByTestId('last-name-input');
        const ageInput = getByTestId('age-input');
        const addButton = getByText('Tambah');

        // Assertions
        expect(firstNameInput).toBeDefined();
        expect(lastNameInput).toBeDefined();
        expect(ageInput).toBeDefined();
        expect(addButton).toBeDefined();
    });

    test('should create contact when "Tambah" button is pressed', async () => {
        const { getByText, getByTestId } = render(<CreateContact />);

        const firstNameInput = getByTestId('first-name-input');
        const lastNameInput = getByTestId('last-name-input');
        const ageInput = getByTestId('age-input');
        const addButton = getByText('Tambah');

        // Mock user input
        fireEvent.changeText(firstNameInput, 'John');
        fireEvent.changeText(lastNameInput, 'Doe');
        fireEvent.changeText(ageInput, '30');

        // Mock CreateNewContact function
        const CreateNewContact = require('../../src/libs/fetchings/Contacts').CreateNewContact;
        CreateNewContact.mockResolvedValueOnce({ status: 201 });

        // Trigger button press
        fireEvent.press(addButton);

        // Assertions
        expect(CreateNewContact).toHaveBeenCalledWith('John', 'Doe', 30);
    });

    test('should handle error when creating contact fails', async () => {
        const { getByText, getByTestId } = render(<CreateContact />);

        const firstNameInput = getByTestId('first-name-input');
        const lastNameInput = getByTestId('last-name-input');
        const ageInput = getByTestId('age-input');
        const addButton = getByText('Tambah');

        // Mock user input
        fireEvent.changeText(firstNameInput, 'John');
        fireEvent.changeText(lastNameInput, 'Doe');
        fireEvent.changeText(ageInput, '30');

        // Mock CreateNewContact function to throw an error
        const CreateNewContact = require('../../src/libs/fetchings/Contacts').CreateNewContact;
        CreateNewContact.mockRejectedValueOnce(new Error('Failed to create contact'));

        // Trigger button press
        fireEvent.press(addButton);

        // Assertions
        // You can assert if there's an error message displayed to the user
        // For example, getByText('Failed to create contact');
    });
});
