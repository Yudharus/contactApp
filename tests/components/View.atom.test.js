import React from 'react';
import { render } from '@testing-library/react-native';
import View from '../../src/components/atoms/atoms/View.atom';
import { Text } from 'react-native';

describe('View Component', () => {
    it('renders correctly with specified className', () => {
        const className = 'bg-blue-500';
        const { getByTestId } = render(
            <View className={className} testID="view-component">
                <Text>Test Content</Text>
            </View>
        );
        const viewComponent = getByTestId('view-component');
        expect(viewComponent.props.style).toEqual({ backgroundColor: '#3b82f6' }); // Change the expected style based on your Tailwind configuration
    });
});
