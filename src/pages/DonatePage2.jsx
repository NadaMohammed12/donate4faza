import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import {useTranslation} from "react-i18next";




const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE);


// ✅ نموذج Stripe
function StripeForm({ amount, onDone }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const pay = async () => {
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8010/api/donations/stripe/intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "usd" }),
      });
      const data = await res.json();

      const { error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (error) {
        alert(error.message);
      } else {
        onDone();
      }
    } catch (err) {
      alert("فشل الدفع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <CardElement options={{ hidePostalCode: true }} />
      <button
        onClick={pay}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        {loading ? "Processing...." : "Pay Now "}
      </button>
    </div>
  );
}

// ✅ نموذج PayPal
function PayPalForm({ amount, onDone }) {
  
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", shape: "rect", color: "gold" }}
        createOrder={(data, actions) =>
          actions.order.create({
            purchase_units: [{ amount: { value: amount.toString() } }],
          })
        }
        onApprove={async (data, actions) => {
          await actions.order.capture();
          onDone();
        }}
        onError={(err) => {
          console.error("PayPal Error:", err);
          alert("فشل الدفع عبر PayPal");
        }}
      />
    </PayPalScriptProvider>
  );
}

export default function DonatePage() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("stripe");
  const [amount, setAmount] = useState(50);
  const [done, setDone] = useState(false);

  return (
    <div className="pt-34 max-w-lg mx-auto px-4">
        {/* رسالة النجاح */}
      {done && (
        <div className="mt-4 bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl text-green-600 mb-2">✔️</div>
          <div className="font-bold mb-1"> {t("thankyou")}
          </div>
          <button
            onClick={() => setDone(false)}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
          >
            Ok
          </button>
        </div>
      )}
      <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
      {t("donate")}
           </h1>

      {/* مبلغ التبرع */}
      <div className="bg-white p-4 rounded-xl shadow space-y-3 mb-4">
        <div className="grid grid-cols-4 gap-2">
          {[10, 20, 50, 100].map((v) => (
            <button
              key={v}
              onClick={() => setAmount(v)}
              className={`py-2 rounded border ${
                amount == v ? "bg-green-600 text-white" : "bg-white"
              }`}
            >
              ${v}
            </button>
          ))}
        </div>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={t("amount")}
        />
      </div>

      {/* التبويب */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab("stripe")}
            className={`px-3 py-2 rounded ${
              tab === "stripe" ? "bg-green-600 text-white" : "bg-gray-100"
            }`}
          >
            Card
          </button>
          <button
            onClick={() => setTab("paypal")}
            className={`px-3 py-2 rounded ${
              tab === "paypal" ? "bg-green-600 text-white" : "bg-gray-100"
            }`}
          >
            PayPal
          </button>
        </div>

        {tab === "stripe" ? (
          <Elements stripe={stripePromise}>
            <StripeForm amount={amount} onDone={() => setDone(true)} />
          </Elements>
        ) : (
          <PayPalForm amount={amount} onDone={() => setDone(true)} />
        )}
      </div>

    
    
    </div>
  );
}