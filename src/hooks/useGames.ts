import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface GameModel {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  parent_platforms: { platform: Platform }[];
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  };
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: GameModel[];
}

const useGames = () => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
