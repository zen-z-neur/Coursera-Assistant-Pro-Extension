// If this page is opened from the packaged extension or from GitHub Pages while
// the serverless API is hosted separately, set this to the API origin, for example:
window.CA_PAYMENT_API_BASE = 'https://courseraassistantpro.vercel.app';

// Public display prices. Keep these aligned with Dodo product pricing and Vercel env.
window.CA_PRICE_NPR = 1000;
window.CA_PRICE_USD = 6.99;
window.CA_DODO_PRICE_CURRENCY = 'USD';

// Dodo checkout can be switched from test to live without changing payment.html.
window.CA_DODO_MODE = 'live';
window.CA_DODO_TEST_CHECKOUT_URL = 'https://test.checkout.dodopayments.com/buy/pdt_0NjC7pBJWvvfro17zm915?quantity=1';
window.CA_DODO_LIVE_CHECKOUT_URL = 'https://checkout.dodopayments.com/buy/pdt_0NjMU5eXsceDAKphoeSrN?quantity=1';
window.CA_DODO_RETURN_URL = 'https://courseraassistantpro.vercel.app/payment-result.html?provider=dodo_live';
