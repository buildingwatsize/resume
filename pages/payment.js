import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Axios from "utils/axios.service";

import Button from "components/Button/Button";
import Row from "components/Flex/Row";
import MainLayout from "components/Layout/MainLayout";
import PageTitle from "components/Layout/PageTitle";
import {
  API_PATH,
  MINIMUM_AMOUNT,
  PAYMENT_METHOD_LABEL_LIST,
  PAYMENT_METHOD_LIST,
} from "utils/constants";

const minimumAmountDescription = `จำนวนรับชำระขั้นต่ำ: ${MINIMUM_AMOUNT} THB`;

const withOmise = (Component) => {
  return (props) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
      globalThis.OmiseCard.configure({
        publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC,
      });
      setReady(true);
    }, []);
    return (
      <Component
        loading={!ready}
        omise={ready ? globalThis.OmiseCard : null}
        {...props}
      />
    );
  };
};

const PaymentPage = ({ omise, loading }) => {
  const [processing, setProcessing] = useState(false);
  const [amount, setAmount] = useState(null);

  const handleClick = () => {
    if (!(amount >= MINIMUM_AMOUNT)) {
      alert(minimumAmountDescription);
      return;
    }

    setProcessing(true);
    const amt = `${amount}`.replace(".", "") * 1;
    const paymentInfo = {
      amount: amt,
      currency: "THB",
      locale: "th",
    };
    omise.open({
      ...paymentInfo,
      otherPaymentMethods: PAYMENT_METHOD_LIST,
      onCreateTokenSuccess: async (nonce) => {
        console.log(nonce);
        await onSuccess(nonce, paymentInfo);
        setProcessing(false);
      },
      onFormClosed: () => {
        setProcessing(false);
      },
    });
  };

  const onSuccess = async (nonce, paymentInfo) => {
    let payload = { description: "resume-payment-flow", ...paymentInfo };
    if (nonce.startsWith("tokn_")) {
      payload.omiseToken = nonce;
    } else {
      payload.omiseSource = nonce;
    }

    try {
      let response = await Axios.post(API_PATH.CHARGE, payload);
      console.log({ response });
      setAmount(null);
      alert("Success");
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <MainLayout bgMinimal>
      <PageTitle title={"Payment"} subtitle={"ชำระเงิน"} />
      <Row className={"mx-6 flex justify-center"}>
        <div className="flex flex-col w-[350px] bg-bold-blue/40 p-8 rounded-md">
          <div className="mb-6 bg-danger/70 text-center rounded-md">
            BETA TEST
          </div>
          <div className="mb-8">
            <div className="text-lg mb-2">ช่องทางชำระเงินที่รองรับ:</div>
            <div className="text-white/70">
              {PAYMENT_METHOD_LABEL_LIST.join(", ")}
            </div>
          </div>
          <div className="mb-8">
            <div className="text-lg">ยอดเงิน (THB)</div>
            <NumericFormat
              value={amount}
              onValueChange={({ value }) => {
                setAmount(value);
              }}
              thousandSeparator=","
              allowNegative={false}
              decimalScale={2}
              fixedDecimalScale={true}
              placeholder="Input a number"
              customInput={Input}
            />
            <div className="text-sm text-white/70 p-1">
              ({minimumAmountDescription})
            </div>
          </div>
          <div className="text-end">
            <Button
              onClick={handleClick}
              disabled={loading || processing}
              className="w-full"
            >
              สร้างรายการ
            </Button>
          </div>
        </div>
      </Row>
    </MainLayout>
  );
};

const Input = ({
  label = "",
  id = "",
  type = "text",
  onChange = (_e) => null,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-medium-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default withOmise(PaymentPage);
