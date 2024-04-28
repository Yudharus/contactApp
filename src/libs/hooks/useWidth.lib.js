import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useWidth = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setWidth(Dimensions.get('window').width);
    });
  }, []);

  return [width, setWidth];
};

export default useWidth;
