import { Button } from '@heroui/react';
import AppleIcon from '@/assets/svg/button/apple.svg';

export default () => {
  return (
    <div>
      <Button className="text-white w-xs rounded-md bg-gray-900 h-10" onPress={() => {}}>
        <img src={AppleIcon} className="h-10" />
      </Button>
    </div>
  );
};
