

function Payment(props) {

    function pay () {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const payload = {
            "account_name": "EUR3D1",
            "nonce": "1432" + new Date() + Math.random() * 999999, // turvaelement, takistamaks topeltpäringuid
            "timestamp": new Date(),
            "amount": props.sum,
            "order_reference": "abc" +Math.random() * 999999,
            "customer_url": "https://webshop-30b2a.web.app",
            "api_username": "e36eb40f5ec87fa2"
            };
        const payloadHeaders = {
            "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
            "Content-Type": "application/json"
        };

        fetch(url, {method: "POST", body: JSON.stringify(payload), headers: payloadHeaders})
            .then(res => res.json())
            .then(json => window.location.href = json.payment_link)

    }

  return (
    <div>
        <button onClick={pay}>Pay</button>
    </div>
  )
}

export default Payment