// @ts-nocheck
import { Stack } from "@mui/material";
import SquareShap from "./SquareShap";
import CircleShap from "./CircleShap";
import "./index2.css";
import SwiperCarousel from "./SwiperCarousel";
import TriangleShap from "./TriangleShap";
import RectangularShap from "./RectangularShap";

const AllComplaints = () => {


  // const callBackFn = (title) => console.log(`Clicked ${title}`);
  // const colors = [
  //   {id: 1, color: 'red'},
  //   {id: 2, color: 'green'},
  //   {id: 3, color: 'black'},
  //   {id: 4, color: 'blue'}
  // ]

  // fekrat al compozition
  const data = {
    square : {
      data: [
        { data: { id: 1, name: "kareem", email: "kareem@email.com", age: 30 } },
        { data: { id: 2, name: "amr", email: "amr@email.com", age: 31 } },
        { data: { id: 3, name: "wafaa", email: "wafaa@email.com", age: 32 } },
        { data: { id: 4, name: "safaa", email: "safaa@email.com", age: 33 } },
        { data: { id: 5, name: "Walaa", email: "walaa@email.com", age: 34 } },
        { data: { id: 6, name: "Ahmed", email: "ahmed@email.com", age: 35 } },
        { data: { id: 7, name: "Feras", email: "feras@email.com", age: 36 } },
      ],
      shap: SquareShap,
      slidesPerView: 3,
      navigation: true,
      enabled: true,
    },
    circle : {
      data: [
        { data: { id: 1, name: "kareem", email: "kareem@email.com", age: 30 } },
        { data: { id: 2, name: "amr", email: "amr@email.com", age: 31 } },
        { data: { id: 3, name: "wafaa", email: "wafaa@email.com", age: 32 } },
        { data: { id: 4, name: "safaa", email: "safaa@email.com", age: 33 } },
        { data: { id: 5, name: "Walaa", email: "walaa@email.com", age: 34 } },
        { data: { id: 6, name: "Ahmed", email: "ahmed@email.com", age: 35 } },
        { data: { id: 7, name: "Feras", email: "feras@email.com", age: 36 } },
      ],
      shap: CircleShap,
      slidesPerView: 3,
      navigation: false,
      enabled: true,
    },
    triangle : {
      data: [
        { data: { id: 1, name: "kareem", email: "kareem@email.com", age: 30 } },
        { data: { id: 2, name: "amr", email: "amr@email.com", age: 31 } },
        { data: { id: 3, name: "wafaa", email: "wafaa@email.com", age: 32 } },
        { data: { id: 4, name: "safaa", email: "safaa@email.com", age: 33 } },
        { data: { id: 5, name: "Walaa", email: "walaa@email.com", age: 34 } },
        { data: { id: 6, name: "Ahmed", email: "ahmed@email.com", age: 35 } },
        { data: { id: 7, name: "Feras", email: "feras@email.com", age: 36 } },
      ],
      shap: TriangleShap,
      slidesPerView: 3,
      navigation: false,
      enabled: false,
    },
    rectangular : {
      data: [
        { data: { id: 1, name: "kareem", email: "kareem@email.com", age: 30 } },
        { data: { id: 2, name: "amr", email: "amr@email.com", age: 31 } },
        { data: { id: 3, name: "wafaa", email: "wafaa@email.com", age: 32 } },
        { data: { id: 4, name: "safaa", email: "safaa@email.com", age: 33 } },
        { data: { id: 5, name: "Walaa", email: "walaa@email.com", age: 34 } },
        { data: { id: 6, name: "Ahmed", email: "ahmed@email.com", age: 35 } },
        { data: { id: 7, name: "Feras", email: "feras@email.com", age: 36 } },
      ],
      shap: RectangularShap,
      slidesPerView: 4,
      navigation: true,
      enabled: false,
    },
  };
  // const shapOne = data.filter(el => el.componentOne == ShapOne)
  // console.log(shapOne)
  // const child = data.map((el) => {
  //   let ComponentElement = el.componentName;
    // let ComponentElement2 = el.componentName2;
    // return <ComponentElement2 key={el.data.id}><ComponentElement item={el.data}/></ComponentElement2>;
  // });
  return (
    <Stack spacing={2}>
      {/* <SwiperCarousel
        items={userData}
        slidesPerView={3}
        navigation={true}
        enabled={true}
      >
        <SquareShap />
      </SwiperCarousel>
      <SwiperCarousel items={userData}>
        <CircleShap />
      </SwiperCarousel> */}

      <SwiperCarousel items={data.square} />
      <SwiperCarousel items={data.circle} />
      <SwiperCarousel items={data.rectangular} />
      <SwiperCarousel items={data.triangle} />
      

      {/* <SwiperCarousel items={data.circle} /> */}

      {/* <List items={userData}>
        <ShapOne />
      </List>

      <List items={userData}>
        <ShapTwo />
      </List> */}

      {/* {child} */}

      {/* <ListColors colors={colors}>
        <Square />
      </ListColors>
      <ListColors colors={colors}>
        <Triangle />
      </ListColors>
      <ListColors colors={colors}>
        <Circle />
      </ListColors>
      <Circle ss={{backgroundColor: 'red'}} />
      <Triangle ss={{borderColor: 'red'}} />
      <Square ss={{backgroundColor: 'red'}} /> */}
    </Stack>
  );
};

export default AllComplaints;
