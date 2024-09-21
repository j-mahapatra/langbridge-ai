import {
  Icon,
  IconMicrophone,
  IconMicrophoneOff,
  IconPlayerStopFilled,
  IconVolume,
  IconProps,
  IconFileUpload,
  IconCaretDownFilled,
  IconSquareRoundedCheck,
  IconCopy,
} from '@tabler/icons-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export const Icons: {
  [key: string]: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
} = {
  microphoneOn: IconMicrophone,
  microphoneOff: IconMicrophoneOff,
  stop: IconPlayerStopFilled,
  volume: IconVolume,
  upload: IconFileUpload,
  caretDown: IconCaretDownFilled,
  squareRoundedCheck: IconSquareRoundedCheck,
  copy: IconCopy,
};
