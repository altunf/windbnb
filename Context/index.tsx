"use client";
import { stays } from "@/services";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext({});

export const FilterContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [lastFilter, setLastFilter] = useState(stays);
  const [selectedItem, setSelectedItem] = useState(null);

  const cityList = [
    { id: 0, label: "Helsinki" },
    { id: 1, label: "Turku" },
    { id: 2, label: "Oulu" },
    { id: 3, label: "Vaasa" },
  ];

  const findCity: any = cityList.find((item) => item.id == selectedItem);

  const total = adult + child;

  const search = () => {
    if (selectedLocation !== "" && total !== 0) {
      let fullFilter = stays.filter(
        (stay) => stay.city === selectedLocation && stay.maxGuests >= total
      );
      setLastFilter(fullFilter);
    } else if (selectedLocation !== "") {
      let filterLocation = stays.filter((stay) =>
        stay.city.includes(selectedLocation)
      );
      setLastFilter(filterLocation);
    } else if (total !== 0) {
      let filterGuest = stays.filter((stay) => stay.maxGuests >= total);
      setLastFilter(filterGuest);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        total,
        open,
        setOpen,
        selectedLocation,
        setSelectedLocation,
        adult,
        setAdult,
        child,
        setChild,
        lastFilter,
        search,
        selectedItem,
        setSelectedItem,
        findCity,
        cityList,
        setLastFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
