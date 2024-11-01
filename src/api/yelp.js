import axios from 'axios';

const yelp = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1nwCyoSOrqwC-Viku2__H0gI-UNIQn5G4MOYz-7FJTy2ItH42_Bck3QNc_cqzGCMxsL3r5e1CMnL-TmpPgfFsUdPXxHpfcrejY9HL47fJsnlZG7f_DhK1njwv-kjZ3Yx',
    }
});

export default yelp;

yelp.get('/search');