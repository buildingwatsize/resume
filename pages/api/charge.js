import Omise from "omise";

const omise = Omise({
  secretKey: process.env.OMISE_SECRET,
  omiseVersion: process.env.OMISE_VERSION,
});

const handler = async (req, res) => {
  const serviceType = {
    service: "omise-charge",
  };
  try {
    const reqContent = {
      ...serviceType,
      handler: "request",
      url: req.url,
      body: req.body,
      method: req.method,
      ip: {
        xrip: req.headers["x-real-ip"],
        xff: req.headers["x-forwarded-for"],
        raddr: req.socket.remoteAddress,
      },
    };
    console.log(reqContent);

    const result = await omise.charges.create({
      amount: req.body.amount,
      currency: req.body.currency,
      capture: false,
      description: req.body.description,
      card: req.body.omiseToken,
      // metadata
      // zero_interest_installments
      // source
    });

    const resultContent = {
      id: result.id,
      amount: result.amount,
      net: result.net,
      fee: result.fee,
      feeVat: result.fee_vat,
      interest: result.interest,
      interestVat: result.interest_vat,
      transactionFees: result.transaction_fees,
      currency: result.currency,
      description: result.description,
      status: result.status,
    };
    const resContent = {
      ...serviceType,
      handler: "response",
      ...resultContent,
      // rawResult: result,
    };
    console.log(resContent);

    res
      .status(200)
      .json({ status: "success", message: "Success", data: resultContent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "fail", message: err.message });
  }
};

export default handler;
