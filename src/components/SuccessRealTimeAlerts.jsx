import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SuccessRealTimeAlerts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state || !location.state.success) {
      navigate('/real-time-alerts-form'); // Redirect to form if accessed manually
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Form submitted successfully!</h1>
    </div>
  );
};

export default SuccessRealTimeAlerts;
