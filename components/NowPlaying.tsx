"use client";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
  songUrl: string;
  title: string;
  artist: string;
}

const NowPlaying = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      mutate("/api/spotify");
    }, 5000); // Refresh every 5 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SpotifyData>("/api/spotify", fetcher);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<{
    trackName: string;
    artistName: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    if (data) {
      setCurrentlyPlaying({
        trackName: data.title,
        artistName: data.artist,
        url: data.songUrl,
      });
    }
  }, [data]);

  return (
    <div className="w-full bg-slate-900 overflow-hidden z-50 flex fixed h-6 pb-1 justify-center items-center">
      <h4 className="text-white flex w-full text-xs space-x-1 text-center items-center marquee md:text-sm ">
        <SiSpotify size={12} color={"#26a551"} className="mr-1" />
        Currently Listening to:{" "}
        {currentlyPlaying?.trackName ? (
          <>
            <a
              className="hover:underline underline-offset-1 text-green-300"
              target="_blank"
              href={currentlyPlaying.url}
            >
              {currentlyPlaying.trackName}
            </a>
            <span className="">by {currentlyPlaying?.artistName} 🔥 </span>
          </>
        ) : (
          <span>nothing 😴</span>
        )}
      </h4>
    </div>
  );
};

export default NowPlaying;
