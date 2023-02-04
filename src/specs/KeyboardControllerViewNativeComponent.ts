import type { HostComponent } from 'react-native';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {
  DirectEventHandler,
  Float,
  Int32,
} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type KeyboardMoveEvent = Readonly<{
  height: Int32;
  progress: Float;
}>;

export interface NativeProps extends ViewProps {
  // props
  statusBarTranslucent?: boolean;
  navigationBarTranslucent?: boolean;
  // callbacks
  onKeyboardMove?: DirectEventHandler<KeyboardMoveEvent>;
  onKeyboardMoveStart?: DirectEventHandler<KeyboardMoveEvent>;
  onKeyboardMoveEnd?: DirectEventHandler<KeyboardMoveEvent>;
}

export default codegenNativeComponent<NativeProps>(
  'KeyboardControllerView'
) as HostComponent<NativeProps>;