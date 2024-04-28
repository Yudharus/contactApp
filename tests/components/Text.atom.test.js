import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../../src/components/atoms/atoms/Text.atom';
import { toHaveStyle } from '@testing-library/jest-native';

expect.extend({ toHaveStyle });

describe('Text Component', () => {
    it('renders correctly with specified className and fontFamily', () => {
        const className = 'text-xl';
        const fontFamily = 'roboto-bold';
        const textContent = 'Hello, World!';
        const { getByText } = render(
            <Text className={className} fontFamily={fontFamily}>{textContent}</Text>
        );
        const textComponent = getByText(textContent);
        expect(textComponent).toHaveStyle([
            { fontFamily: 'roboto-regular' },
            { fontFamily: fontFamily },
            { fontSize: 20 }
        ]);
        expect(textComponent.props.children).toBe(textContent);
    });
});
