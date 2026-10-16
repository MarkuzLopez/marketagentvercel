export async function fetchCompanyValues(empresa: string) {
  const response = await fetch(`https://api.twelvedata.com/time_series?apikey=${process.env.TWELVE_LABS_API_KEY}&symbol=${empresa}&interval=1min`);
  const data = await response.json();
  return data;
};

