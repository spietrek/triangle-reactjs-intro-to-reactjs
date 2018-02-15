const formatDateTime = date => {
  const formatDate = date.toLocaleDateString();
  const formatTime = date.toLocaleTimeString();
  return `Date is ${formatDate} and Time is ${formatTime}.`;
};

export default formatDateTime;
