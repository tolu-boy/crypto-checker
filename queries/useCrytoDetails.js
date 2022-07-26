
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCrytoId = async (q) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${q}`
    );
  return data;
};

export default function useCrytoId(value) {
  return useQuery(["cryptoId", value], () => getCrytoId(value));
}
