import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getNftApi = async (q) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${q}`
  );
  return data;
};

export default function useNftApi(value) {
  return useQuery(["NftApi", value], () => getNftApi(value));
}
