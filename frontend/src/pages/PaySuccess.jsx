import { useLocation } from 'react-router-dom';

function PaySuccess() {
  const location = useLocation();
  console.log(location);

  return (
    <div>PaySuccess</div>
  )
}

export default PaySuccess;