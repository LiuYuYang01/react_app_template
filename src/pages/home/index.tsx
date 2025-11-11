import Paypal from '@/components/Button/Paypal';
import Google from '@/components/Button/Google';
import Apple from '@/components/Button/Apple';

export default () => {
  return (
    <>
      <div className="space-y-2 space-x-2">
        <Paypal />
        <Google />
        <Apple />
      </div>
    </>
  );
};
