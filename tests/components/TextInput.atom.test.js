import React from 'react';
import { render } from '@testing-library/react-native';
import TextInput from '../../src/components/atoms/atoms/TextInput.atom';

describe('TextInput Component', () => {
    it('renders correctly with specified className and value', () => {
        const className = 'bg-gray-200';
        const value = 'Test value';
        const { getByDisplayValue } = render(
            <TextInput className={className} value={value} />
        );
        const textInputComponent = getByDisplayValue(value);
        expect(textInputComponent.props.style).toEqual({ backgroundColor: '#e5e7eb' });
        expect(textInputComponent.props.value).toBe(value);
    });
});
