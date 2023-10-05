export const API_PATH = {
  CHARGE: "/api/charge",
};

export const MINIMUM_AMOUNT = Number(20).toFixed(2);
export const PAYMENT_METHOD_AVAILABLE = [
  { key: "credit_card", label: "บัตรเครดิต" },
  { key: "installment", label: "ผ่อนชำระ" },
  { key: "internet_banking", label: "อินเตอร์เน็ตแบงค์กิ้ง" },
  { key: "mobile_banking", label: "โมบายแบงค์กิ้ง" },
  { key: "promptpay", label: "พร้อมเพย์" },
  { key: "rabbit_linepay", label: "แรบบิท ไลน์ เพย์" },
  { key: "shopeepay", label: "ช้อปปี้เพย์" },
  { key: "truemoney", label: "ทรูมันนี่" },
  { key: "alipay", label: "อาลีเพย์" },
  { key: "grabpay", label: "แกรบเพย์" },
  { key: "points_citi", label: "จ่ายด้วยพอยท์" },
];
export const PAYMENT_METHOD_LIST = PAYMENT_METHOD_AVAILABLE.map(
  (item) => item.key
);
export const PAYMENT_METHOD_LABEL_LIST = PAYMENT_METHOD_AVAILABLE.map(
  (item) => item.label
);
