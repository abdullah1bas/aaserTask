import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Excellent",
    label: "Excellent",
    value: 50,
    color: "red",
  },
  {
    id: "Good",
    label: "Good",
    value: 20,
    color: "#ff8e26",
  },
  {
    id: "Poor",
    label: "Poor",
    value: 30,
    color: "#14cc26",
  },
  
];

// const data = [
//   {
//     id: "python",
//     label: "python",
//     value: 347,
//     color: "hsl(277, 70%, 50%)",
//   },
//   {
//     id: "php",
//     label: "php",
//     value: 406,
//     color: "hsl(159, 70%, 50%)",
//   },
//   {
//     id: "javascript",
//     label: "javascript",
//     value: 333,
//     color: "hsl(225, 70%, 50%)",
//   },
//   {
//     id: "erlang",
//     label: "erlang",
//     value: 452,
//     color: "hsl(322, 70%, 50%)",
//   },
//   {
//     id: "java",
//     label: "java",
//     value: 376,
//     color: "hsl(66, 70%, 50%)",
//   },
// ];

// eslint-disable-next-line react/prop-types
const Pie = ({isDashbord}) => {
  const theme = useTheme();
  return (
    // <Box sx={{height: isDashbord ? '200px' :'100%'}}>
    <Box sx={{height: isDashbord ? '150px' :'100%'}}>
      <ResponsivePie
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
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
        enableArcLabels={isDashbord ? false : true}
        enableArcLinkLabels={isDashbord ? false : true}
        // margin={isDashbord ? { top: 10, right: 0, bottom: 10, left: 0 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        margin={isDashbord ? { top: 10, right: 0, bottom: 10, left: -100 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: theme.palette.text.primary,
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: theme.palette.text.primary,
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        // legends={
        //   !isDashbord && [
        //   {
        //     anchor: "bottom",
        //     direction: "row",
        //     justify: false,
        //     translateX: 0,
        //     translateY: 56,
        //     itemsSpacing: 0,
        //     itemWidth: 100,
        //     itemHeight: 18,
        //     itemTextColor: theme.palette.text.primary,
        //     itemDirection: "left-to-right",
        //     itemOpacity: 1,
        //     symbolSize: 18,
        //     symbolShape: "circle",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemTextColor: theme.palette.text.primary,
        //         },
        //       },
        //     ],
        //   },
        // ]}
        legends={[
          {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: -10,
              translateY: 0,
              itemWidth: 90,
              itemHeight: 40,
              itemsSpacing: 10,
              symbolSize: 10,
              itemDirection: 'left-to-right'
          }
      ]}
      />
    </Box>
  );
}

export default Pie;
