  import { months } from "@/helper/Util";

  export const lineChartData = {
    labels: months({ count: 12 }),
    datasets: [
      {
        label: "Total Population",
        data: [
          6511, 5900, 2342, 7897, 6754, 5456, 5342, 5353, 3453, 4567, 5667, 7756,
        ],
        fill: false,
        borderColor: "rgb(178,3,106)",
        backgroundColor: ["rgb(255,137,168)", "rgb(30,144,255)"],
        tension: 0.1,
      },
    ],
  };

  export const doughnutChartData1 = {
    labels: ["Loyal", "Casual"],
    datasets: [
      {
        label: "Transaction Dataset",
        data: [420, 900],
        backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)"],
        hoverOffset: 4,
      },
    ],
  };
  export const doughnutChartData2 = {
    labels: ["Chinese", "French", "German", "Spanish", "English"],
    datasets: [
      {
        label: "Transaction Dataset",
        data: [420, 429, 436, 438, 445],
        backgroundColor: [
          "rgb(178,3,106)",
          "rgb(255,137,168)",
          "rgb(30,144,255)",
          "rgb(165,7,42)",
          "rgb(255,69,0)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  export const doughnutChartData3 = {
    labels: ["11-20", "21-30", "31-40", "41-50", "Other"],
    datasets: [
      {
        label: "Transaction Dataset",
        data: [106, 332, 330, 360, 900],
        backgroundColor: [
          "rgb(255, 182, 193)",
          "rgb(255, 228, 225)",
          "rgb(218, 218, 223) ",
          "rgb(253, 245, 230) ",
          "rgb(165,7,42)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  export const doughnutChartData4 = {
    labels: ["New York", "California", "Texas", "Florida", "Alabama"],
    datasets: [
      {
        label: "Transaction Dataset",
        data: [414, 423, 455, 567, 302],
        backgroundColor: [
          "rgb(255, 255, 0) ",
          "rgb(255, 0, 0)",
          "rgb(0, 255, 0)",
          "rgb(0, 0, 255) ",
          "rgb(255, 127, 0)",
        ],
        hoverOffset: 4,
      },
    ],
  };
