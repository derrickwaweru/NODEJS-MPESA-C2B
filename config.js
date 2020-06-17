const server_baseurl = 'http://67.205.145.74:9000/';

let configs = {};

var test_configs = {
     "env": "dev",
     "port": 9000,
     "error_message": "Something went wrong while trying to process your request. Kindly contact the api developer",
     "mpesa_token_url": "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
     "consumer_key": "lAyzJ147CXoKoQRYMAOueEMbtAzUCetB",
     "consumer_secret": "nMf6fImloftzijvA",
     "shortcode": "174379",
     "mpesa_callback_url": `${server_baseurl}callback`,
     "mpesa_validation_url": `${server_baseurl}validate`,
     "mpesa_stkstatus_url": `${server_baseurl}stkstatus`,
     "mpesa_register_url": "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl",
     "mpesa_stkpush_url": "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
     "online_checkout_passkey": "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
};
var live_configs = {
     "env": "prod",
     "port": 9000,
     "error_message": "Something went wrong while trying to process your request. Kindly contact the api developer",
     "mpesa_token_url": "",
     "consumer_key": "",
     "consumer_secret": "",
     "shortcode": "",
     "mpesa_callback_url": `${server_baseurl}callback`,
     "mpesa_validation_url": `${server_baseurl}validate`,
     "mpesa_stkstatus_url": `${server_baseurl}stkstatus`,
     "mpesa_register_url": "",
     "mpesa_stkpush_url": "",
     "online_checkout_passkey": "",
}
const env = 'dev';
if (env === 'live') {
     configs = live_configs;
} else {
     configs = test_configs;
}

module.exports = configs