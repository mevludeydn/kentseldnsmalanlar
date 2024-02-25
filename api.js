

const fetchKentselDonusumAlanlari = async () => {
    try {
      const response = await fetch('/kentselDonusumAlanlari.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      throw error;
    }
  };
  
  export default fetchKentselDonusumAlanlari;
  