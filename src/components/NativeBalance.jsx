import { useMoralis, useNativeBalance } from "react-moralis";
import { useState } from "react";

function NativeBalance(props) {
  const toggleDisplayStyle = () => setIsUSDMode(!isUSDMode);
  const [isUSDMode, setIsUSDMode] = useState(true);
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={toggleDisplayStyle}
      title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
    >
      <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
        {balance.formatted}
      </div>
    </span>
  );
}

export default NativeBalance;
