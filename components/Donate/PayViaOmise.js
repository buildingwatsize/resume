import IconPayViaOmise from "assets/img/opn-payments-icon.png";
import { MINIMUM_AMOUNT } from "utils/constants";

const PayViaOmise = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <img src={IconPayViaOmise.src} className="h-[50px]" alt="icon" />
      <div>
        <div className="text-white">Pay via Omise</div>
        <div className="text-xs font-normal text-white/70">
          Started from ฿{MINIMUM_AMOUNT}
        </div>
      </div>
    </div>
  );
};

export default PayViaOmise;
