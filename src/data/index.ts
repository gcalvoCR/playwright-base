export interface Regex {
  address: RegExp;
  phoneNumber: RegExp;
  phoneNumberWithText: RegExp;
}

export const regex: Regex = {
  address: /(\w|\s|,)+/g,
  phoneNumber: /(\d{3}-\d{3}-\d{4})/g, // 650-498-6000
  phoneNumberWithText: /^Tel: \(\d{3}\) \d{3}-\d{4}/g, // "Tel: (650) 498-6000"
};
