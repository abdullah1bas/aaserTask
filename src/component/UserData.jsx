/* eslint-disable react/prop-types */
import { Box, Button, Divider, FormControl, NativeSelect, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DataOptions from "./DataOptions";
// import Pie from "../pages/home/Pie";
const UserData = ({data}) => {
    console.log('UserData Page');
    // const theme = useTheme();
    return (
        <Stack
        sx={{
          width: `350px`,
          textAlign: 'center',
          ml: 2
        }}
      >
        {useMediaQuery("(min-width:1201px)") && (<Button>
          <img src={data.userData.image} style={{width: '100px', marginTop: 10}} />
        </Button>)}
        <Typography sx={{color: 'white' ,textAlign: 'center', mt: 3}}>{data.userData.userName}</Typography>
        <Stack direction={'row'} sx={{py:2, mt: 2, justifyContent: 'space-between', mr: 1}}>
          {data.userData.Achievements.map((el, index) => 
          <Stack direction={'row'} key={index} sx={{textAlign: 'center'}}>
            <Box sx={{mr: 2}}>
              <Typography variant="body1" sx={{color: '#ffffff6b', mb: 2}}>{el.name}</Typography>
              <Typography variant="body1" sx={{color: '#fff'}}>{el.value}</Typography>
            </Box>
            {index != 2 && <Divider orientation="vertical" variant="middle" sx={{backgroundColor: '#fff', mx: 'auto'}}/>}
          </Stack>
          )}
        </Stack>
        <Divider sx={{backgroundColor: '#fff', width: 'calc(100% - 20px)', my: 3}}  />
        <DataOptions  data={data.userData}/>
        <Stack direction={'row'} alignItems={'center'} color={'#234c9f'} my={1} >
          <Typography sx={{mr: 3}}>July 30, 2022</Typography>
          <Divider sx={{backgroundColor: '#234c9f', width: '60%'}} />
        </Stack>

        {[
          { visited: 'Nurse Visit 20', visitedName: 'Dr. Carol D. Pollack-rundle' }, 
          { visited: 'Annual Visit 15', visitedName: 'Dr.	Donald	F.	Watren' }, 
        ].map((el, index) => 
        <Stack key={index} direction={'column'} sx={{textAlign:'start', gap: 1, justifyContent: 'center'}}>
          <FormControl sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: '90%'}}>
            <Box sx={{width: '8px', height: '8px', backgroundColor: '#ffffff6b', borderRadius: '50%', mr: 1}}></Box>
              <NativeSelect
                sx={{
                  color: "#ffffff96 !important",
                  backgroundColor: 'inherit',
                  flex:1,
                  p: "3px 8px",
                  borderRadius: 2,
                  "& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon": {
                    color: "#ffffff96",
                  },
                  "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option":
                    {
                      backgroundColor: "white !important",
                      color: "black !important",
                    },
                }}
                defaultValue={"am"}
                inputProps={{
                  name: "am",
                  id: "uncontrolled-native",
                }}
              >
                <option value={'am'}>08:30 am - 10:30 am</option>
                <option value={'pm'}>06:30 am - 8:30 am</option>
              </NativeSelect>
            </FormControl>
            <Typography variant="body1" sx={{ml: 3, color: '#fff'}}>{el.visited}</Typography>
            <Typography variant="body1" sx={{ml: 3, color: '#ffffff6b'}}>{el.visitedName}</Typography>
            <Divider sx={{backgroundColor: '#ffffff6b', my: 3}} />
          </Stack>
        )}
        <Typography variant="h6" sx={{color: '#fff' , textAlign: 'start'}}>Patient Satisfaction</Typography>
        <Box sx={{height: '300px'}}>

        <Box height={"70px"} width={"87px"}>
            {/* <Pie /> */}
          {/* <ResponsivePie
            data={data1}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
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
            colors={{ scheme: 'nivo' }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          /> */}
        </Box>
        
        </Box>
      </Stack>
    );
}

export default UserData;
