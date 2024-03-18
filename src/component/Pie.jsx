import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "php",
    label: "php",
    value: 286,
    color: "hsl(28, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 545,
    color: "hsl(69, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 587,
    color: "hsl(118, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 132,
    color: "hsl(51, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 200,
    color: "hsl(348, 70%, 50%)",
  },
];
const Pie = () => {
  return (
    <Box sx={{ height: "200px" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-17}
        innerRadius={0.75}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 73,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
    />
    </Box>
  );
};

export default Pie;
