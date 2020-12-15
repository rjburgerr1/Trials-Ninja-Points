const profileData = {
  tiles: {
    "tile-1": { id: "tile-1", content: "Take out the garbage" },
    "tile-2": { id: "tile-2", content: "Watch my favorite show" },
    "tile-3": { id: "tile-3", content: "Charge my phone" },
    "tile-4": { id: "tile-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tileIds: ["tile-1", "tile-2", "tile-3", "tile-4"],
    },
  },

  columnOrder: ["column-1"],
};

export default profileData;
