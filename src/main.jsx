// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Search from './pages/user/Search.jsx';
import FreelanceRequest from './pages/user/FreelanceRequest.jsx';
import AllBlogs from './pages/blogs/AllBlogs.jsx';
import AddBlogs from './pages/blogs/AddBlogs.jsx';
import AddServices from './pages/blogsService/AddServices.jsx';
import AllServices from './pages/blogsService/AllServices.jsx';
import AllComplaints from './pages/support/AllComplaints.jsx';
import Profile from './pages/user/Profile.jsx';
import AllCategory from './pages/categories/AllCategory.jsx';
import AddCategories from './pages/categories/AddCategories.jsx';
import Reports from './pages/home/Reports.jsx';
import Appointments from './pages/home/Appointments.jsx';
import Schedule from './pages/home/Schedule.jsx';
import Financial from './pages/home/Financial.jsx';
import Overview from './pages/home/Overview.jsx';
import { AttachMoney, Grade, IntegrationInstructions, People, Person, Settings, SupervisedUserCircle, Update,} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import HomePage from './pages/HomePage.jsx';
import userImage from '../public/images/best-long-hairstyles-for-men.jpg';
import photo1 from'../public/images/main-photo1.png';
import photo2 from'../public/images/main-photo2.png';
import photo3 from'../public/images/main-photo3.png';
import photo4 from'../public/images/main-photo4.png';

const data = {
  linksItemWeb: [
    {
      icon: HomeIcon,
      panel: "panel1",
      linkTeam: [
        { text: "Overview", path: "/home/Overview" },
        { text: "Reports", path: "/home/Reports" },
        { text: "Appointments", path: "/home/Appointments" },
        { text: "Schedule", path: "/home/Schedule" },
        { text: "Financial", path: "/home/Financial" },
      ],
    },
    {
      text: "Features",
      icon: Grade,
      panel: "panel2",
      linkTeam: [
        { text: "Features 1", path: "/blogs/AllBlogs" },
        { text: "Features 2", path: "/blogs/AddBlogs" },
      ],
    },
    {
      text: "Users",
      icon: Person,
      panel: "panel3",
      linkTeam: [
        { text: "Users 1", path: "/blogsService/AllServices" },
        { text: "Users 2", path: "/blogsService/AddServices" },
      ],
    },
    {
      text: "Pricing",
      icon: AttachMoney,
      panel: "panel4",
      linkTeam: [
        { text: "Pricing 1", path: "/blogsService/AllServices" },
        { text: "Pricing 2", path: "/blogsService/AddServices" },
      ],
    },
    {
      text: "Integrations",
      icon: IntegrationInstructions,
      panel: "panel5",
      linkTeam: [{ text: "Integrations", path: "/support/AllComplaints" }],
    },
    
  ],
  linksItemAdmin: [
    {
      text: "Settings",
      icon: Settings,
      panel: "panel6",
      linkTeam: [
        { text: "Overview", path: "/home/Overview" },
        { text: "Reports", path: "/home/Reports" },
        { text: "Appointments", path: "/home/Appointments" },
        { text: "Schedule", path: "/home/Schedule" },
        { text: "Financial", path: "/home/Financial" },
      ],
    },
    {
      title: "John Carter",
      subTitle: "Doctor",
      icon: HomeIcon,
      panel: "panel7",
      soure: "/broken-image.jpg",
      linkTeam: [
        { text: "Overview", path: "/home/Overview" },
        { text: "Reports", path: "/home/Reports" },
        { text: "Appointments", path: "/home/Appointments" },
        { text: "Schedule", path: "/home/Schedule" },
        { text: "Financial", path: "/home/Financial" },
      ],
    },
  ],
  cardData: [
    {title: 'Total Patients', icon: People, num: 401, rate: 8.5 , bg: '#242d63', color: '#7a79f2'},
    {title: 'Total Stuff', icon: SupervisedUserCircle, num: 20, rate: -2.5, bg: '#18404b', color: '#0fa775'},
    {title: 'Appointments', icon: Update, num: 2040, rate: 8.5, bg: '#543b47', color: '#bc6f5a'},
  ],
  patientData: {
    optionName: 'Patient Data',
    options: [ "None", "Atria", "Callisto", "Dione", "Ganymede", "Hangouts Call"],
    rowData: [
      {name: "Jenny Wilson", date: 'Dec 18, 2024', symptoms: 'Geriatrician', status: 'Confirmed', src: photo1},
      {name: "Albert Flores", date: 'Dec 18, 2024', symptoms: 'Internist', status: 'Incoming', src: photo2},
      {name: "Floyd Miles", date: 'Dec 18, 2024', symptoms: 'Urogynecologist', status: 'Confirmed', src: photo3},
      {name: "Marvin McKinney", date: 'Dec 18, 2024', symptoms: 'Cardiologist', status: 'Cancelled', src: photo4},
    ]
  },
  userData: {
    userName: 'Dr. Dilip Anmangandla, MD',
    image: userImage,
    Achievements:  [
      {name: 'Appointment', value: 4250},
      {name: 'Total Patients', value: '32.1k'},
      {name: 'Rate', value: 4.8},
  ],
    optionName: 'Upcoming Appointment',
    options: ['Appointment', 'Total Patients', 'Rate']
  },
  pieChartData: [
    {
      id: "Excellent",
      label: "Excellent",
      value: 50,
      color: "#3371eb",
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
    
  ],
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App {...{data}} />}>
      <Route index element={<HomePage />} />
      <Route path='home/Overview' element={<Overview {...{data}} />} />
      <Route path='home/Reports' element={<Reports />} />
      <Route path='home/Appointments' element={<Appointments />} />
      <Route path='home/Schedule' element={<Schedule />} />
      <Route path='home/Financial' element={<Financial />} />
      <Route path='user/Profile' element={<Profile />} />
      <Route path='user/Search' element={<Search />} />
      <Route path='user/FreelanceRequest' element={<FreelanceRequest />} />
      <Route path='blogs/AllBlogs' element={<AllBlogs />} />
      <Route path='blogs/AddBlogs' element={<AddBlogs />} />
      <Route path='blogsService/AllServices' element={<AllServices />} />
      <Route path='blogsService/AddServices' element={<AddServices />} />
      <Route path='categories/AllCategory' element={<AllCategory />} />
      <Route path='categories/AddCategories' element={<AddCategories />} />
      <Route path='support/AllComplaints' element={<AllComplaints />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);