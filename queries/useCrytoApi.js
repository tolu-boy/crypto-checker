import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCrytoApi = async (q) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${q}`
  );
  return data;
};

export default function useCrytoApi(value) {
  return useQuery(["cryptoApi", value], () => getCrytoApi(value));
}
