// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  import {Link} from "react-router-dom";
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
//   import img1 from "../imgs/img1.png";
//   import img2 from "../imgs/img2.png";
//   import img3 from "../imgs/img3.png";
  import Raghu from "../images/Raghu.jpg"
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: <Link to={"/allusers"}> Users</Link>,
    },
    {
      icon: UilPackage,
      heading: <Link to={"/allproducts"}> Products</Link>
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];

//updates
  export const UpdatesData = [
    {
      img: "https://avatars.githubusercontent.com/u/107460137?s=60&v=4",
      name: "Shivam",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: "https://avatars.githubusercontent.com/u/108000589?s=60&v=4",
      name: "Saikh",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: "https://avatars.githubusercontent.com/u/110044436?s=60&v=4",
      name: "Aakash",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];


  //cards
  export const cardsData = [
    {
      title: "Sales",
      color: {
        backGround: "#3e98c7",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "#3e98c7",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "#3e98c7",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  