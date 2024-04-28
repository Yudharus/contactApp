import { Image as ImageRn } from "react-native";
import Tailwind from "../../../libs/tailwind/Tailwind.lib";



const Image = ({ className, source, ...rest }) => {
  return <ImageRn testID="image-component" style={Tailwind`${className}`} source={source} {...rest} />;
};

export default Image