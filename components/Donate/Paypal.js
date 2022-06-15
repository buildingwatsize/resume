import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const sandboxAccount = "sb-oa4gd14609738@business.example.com"
const clientID = "Abtc97oFa3ZcMLX5iW3sBY8ZPuhQxHGZyJaxCSJLQiRbP2BGAVbKDkZzuqD-bvaf1SAstkUiq8HACv3u"
// const clientSecret = "EPrxBLqgZSZ_Wjnn8-mg9sQEcKYUIbAri-BU06wzamoMSf9rr7W8xi2-TaCCK3Pg_k55m9rfzJ24gIQb"

// TODO: Sandbox

const paypalInitialOptions = {
  "client-id": clientID,
  currency: "USD",
  components: "buttons",
  // intent: "capture",
}

const Paypal = () => {
  return (
    <PayPalScriptProvider options={paypalInitialOptions}>
      <PayPalButtons
        className="w-auto"
        style={{
          shape: "pill",
          layout: "vertical",
          label: "donate",
        }}
      />
    </PayPalScriptProvider>
  )
}

export default Paypal