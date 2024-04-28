import React from 'react';
import { render } from '@testing-library/react-native';
import TopBar from '../../src/components/molecules/TopBar.molecules';

describe('TopBar Component', () => {
    it('renders correctly with provided text', () => {
        const text = 'Hello, World!';
        const { getByText } = render(<TopBar text={text} />);
        const topBarComponent = getByText(text);
        expect(topBarComponent).toBeTruthy();
    });
});
