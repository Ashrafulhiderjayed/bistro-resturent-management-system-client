import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-server-vert.vercel.app' // Replace with your API endpoint
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;