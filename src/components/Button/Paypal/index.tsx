import { Button } from '@heroui/react';

export default () => {
  return (
    <div>
      <Button className="text-white w-xs rounded-md bg-[#f0c556] h-10" onPress={() => {}}>
        <img src="https://oss.diandianpay.com/img/wallet/paypal_button.svg" className="w-14" />
      </Button>
    </div>
  );
};
