
const CheckoutResponse = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "linear-gradient(135deg, #e0f7fa, #f4f7fc)"
    }}>
      <div style={{
        background: "#ffffff",
        padding: "45px 60px",
        borderRadius: "16px",
        boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
        textAlign: "center",
        maxWidth: "420px",
        width: "90%",
        animation: "fadeIn 0.8s ease"
      }}>
        
        <div style={{
          width: "80px",
          height: "80px",
          margin: "0 auto 20px",
          background: "#4CAF50",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "pop 0.6s ease-out"
        }}>
          <span style={{
            color: "#fff",
            fontSize: "40px",
            fontWeight: "bold"
          }}>✓</span>
        </div>

        <h1 style={{
          color: "#2e7d32",
          fontSize: "28px",
          marginBottom: "10px",
          fontWeight: "700"
        }}>
          Order Confirmed!
        </h1>

        <p style={{
          fontSize: "17px",
          fontWeight: "500",
          color: "#555",
          marginBottom: "30px",
          lineHeight: "1.5"
        }}>
          Your order has been placed successfully.<br/>
          Enjoy shopping with us!
        </p>

        <a href="/" style={{
          display: "inline-block",
          backgroundColor: "#4CAF50",
          padding: "12px 28px",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "17px",
          fontWeight: "600",
          transition: "0.3s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "#43a047";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "#4CAF50";
          e.target.style.transform = "scale(1)";
        }}>
          Continue Shopping
        </a>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes pop {
            0% { transform: scale(0); }
            60% { transform: scale(1.15); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  )
}

export default CheckoutResponse;
