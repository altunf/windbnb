"use client";
import { useFilterContext } from "@/Context";
import MediaCard from "../card";
import "./style.css";

const CardList = () => {
  const { lastFilter }: any = useFilterContext();

  return (
    <>
      <div className="card-list">
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
