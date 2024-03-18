import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export const data = [
  {
    id: "france",
    color: "hsl(109, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 109,
      },
      {
        x: "helicopter",
        y: 133,
      },
      {
        x: "boat",
        y: 14,
      },
      {
        x: "train",
        y: 111,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 69,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 126,
      },
      {
        x: "bicycle",
        y: 118,
      },
      {
        x: "horse",
        y: 180,
      },
      {
        x: "skateboard",
        y: 143,
      },
      {
        x: "others",
        y: 47,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(249, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 125,
      },
      {
        x: "helicopter",
        y: 24,
      },
      {
        x: "boat",
        y: 129,
      },
      {
        x: "train",
        y: 231,
      },
      {
        x: "subway",
        y: 183,
      },
      {
        x: "bus",
        y: 253,
      },
      {
        x: "car",
        y: 192,
      },
      {
        x: "moto",
        y: 103,
      },
      {
        x: "bicycle",
        y: 134,
      },
      {
        x: "horse",
        y: 234,
      },
      {
        x: "skateboard",
        y: 56,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(279, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 45,
      },
      {
        x: "helicopter",
        y: 114,
      },
      {
        x: "boat",
        y: 18,
      },
      {
        x: "train",
        y: 57,
      },
      {
        x: "subway",
        y: 278,
      },
      {
        x: "bus",
        y: 54,
      },
      {
        x: "car",
        y: 138,
      },
      {
        x: "moto",
        y: 2,
      },
      {
        x: "bicycle",
        y: 176,
      },
      {
        x: "horse",
        y: 54,
      },
      {
        x: "skateboard",
        y: 144,
      },
      {
        x: "others",
        y: 256,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(146, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 224,
      },
      {
        x: "helicopter",
        y: 4,
      },
      {
        x: "boat",
        y: 173,
      },
      {
        x: "train",
        y: 77,
      },
      {
        x: "subway",
        y: 207,
      },
      {
        x: "bus",
        y: 292,
      },
      {
        x: "car",
        y: 293,
      },
      {
        x: "moto",
        y: 95,
      },
      {
        x: "bicycle",
        y: 42,
      },
      {
        x: "horse",
        y: 61,
      },
      {
        x: "skateboard",
        y: 159,
      },
      {
        x: "others",
        y: 177,
      },
    ],
  },
];

const Line = () => {
    const theme = useTheme()
  return (
    <Box sx={{height: "300px"  }}>
      <ResponsiveLine
        data={data}
        theme={{
        //   textColor: '#ff0000',
          fontSize: 11,
          axis: {
            // domain: {
            //   line: {
            //     stroke: '#ff0000',
            //     strokeWidth: 1,
            //   },
            // },
           
            ticks: {
             
              text: {
                fontSize: 14,
                fill: '#ffffffad',
              },
            },
          },
          grid: {
            line: {
              stroke: '#ff0000',
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        // enableGridX={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        curve="catmullRom"
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 40,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -45,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  );
};

export default Line;
