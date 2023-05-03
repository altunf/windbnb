"use client";
import { useFilterContext } from "@/Context";
import MediaCard from "../card";

const CardList = () => {
  const { lastFilter }: any = useFilterContext();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.1%",
        }}
      >
        {lastFilter.map((stay: any, index: any) => (
          <div key={index}>
            <MediaCard stay={stay} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
