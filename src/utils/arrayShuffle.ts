export const arrayShuffle = (
  array: {
    element: number | JSX.Element;
  }[]
) => {
  let arr = [...array, ...array];

  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};

export const setArray = (
  theme: string,
  grid: string,
  arrNumbers: { number: number }[],
  arrIcons: { icon: JSX.Element }[]
) => {
  if (theme === "Numbers") {
    if (grid === "4x4") {
      return arrNumbers.slice(0, 8).map((e) => {
        return { element: e.number };
      });
    }
    return arrNumbers.map((e) => {
      return { element: e.number };
    });
  } else {
    if (grid === "4x4") {
      return arrIcons.slice(0, 8).map((e) => {
        return { element: e.icon };
      });
    }
    return arrIcons.map((e) => {
      return { element: e.icon };
    });
  }
};
