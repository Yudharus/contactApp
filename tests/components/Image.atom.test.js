import React from 'react';
import { render } from '@testing-library/react-native';
import Image from '../../src/components/atoms/atoms/Image.atom';

describe('Image Component', () => {
    it('renders correctly with source', () => {
        const source = { uri: 'http://example.com/image.jpg' };
        const { getByTestId } = render(<Image source={source} />);
        const imageComponent = getByTestId('image-component');
        expect(imageComponent.props.source).toEqual(source);
    });
});
