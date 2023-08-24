export const Completeness = {
  labels: ["Complete", "Error"],
  datasets: [
    {
      label: "Completeness",
      data: [429, 91],
      backgroundColor: ["#4169E1", "rgb(128,128,128)"],
      hoverOffset: 4,
      dataPercentage: [(429 / (91 + 429)) * 100, (91 / (91 + 429)) * 100],
    },
  ],
};
export const Validity = {
  labels: ["Valid", "Invalid"],
  datasets: [
    {
      label: "Completeness",
      data: [492, 100],
      backgroundColor: ["#4169E1", "rgb(128,128,128)"],
      hoverOffset: 4,
      dataPercentage: [(429 / (91 + 429)) * 100, (91 / (91 + 429)) * 100],
    },
  ],
};
export const Accuracy = {
  labels: ["Accurate", "Inaccurate"],
  datasets: [
    {
      label: "Completeness",
      data: [350, 100],
      backgroundColor: ["#4169E1", "rgb(128,128,128)"],
      hoverOffset: 4,
      dataPercentage: [(429 / (91 + 429)) * 100, (91 / (91 + 429)) * 100],
    },
  ],
};
export const Consistency = {
  labels: ["Consistent", "Inconsistent"],
  datasets: [
    {
      label: "Completeness",
      data: [321, 120],
      backgroundColor: ["#4169E1", "rgb(128,128,128)"],
      hoverOffset: 4,
      dataPercentage: [(429 / (91 + 429)) * 100, (91 / (91 + 429)) * 100],
    },
  ],
};
