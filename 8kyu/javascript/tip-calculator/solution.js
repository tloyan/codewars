function calculateTip(amount, rating) {
  const tips = { terrible: 0, poor: 0.05, good: 0.10, great: 0.15, excellent: 0.20 };
  if (typeof tips[rating.toLowerCase()] == 'undefined')
    return 'Rating not recognised';
  return Math.ceil(amount * tips[rating.toLowerCase()]);
  
}