import { Button } from '@heroui/react';
import GoogleIcon from '@/assets/svg/button/google.svg';

export default () => {
  return (
    <div>
      <Button className="overflow-hidden text-white w-xs rounded-md bg-stone-800 h-10" onPress={() => {}}>
        <img src={GoogleIcon} className="h-12" />
      </Button>
    </div>
  );
};
