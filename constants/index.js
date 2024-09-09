import { CiUser, CiHome, CiSearch } from "react-icons/ci";
import { BsActivity } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { CgCalendar } from "react-icons/cg";
import { FaNetworkWired, FaUsers } from "react-icons/fa";




export const sidebarLinks = [
    {
      imgURL: <CiHome />,
      route: "/",
      label: "Home",
    },
    {
      imgURL: <CiSearch />,
      route: "/search",
      label: "Search",
    },
    {
      imgURL: <BsActivity />,
      route: "/activity",
      label: "Actividad",
    },
    {
      imgURL: <AiOutlineProduct />,
      route: "/products",
      label: "Productos",
    },
    {
      imgURL: <CiUser/>,
      route: "/profile",
      label: "Perfil",
    },
    {
        imgURL: <CgCalendar />,
        route: "/presupuestos",
        label: "Presupuestos",
      },
      {
        imgURL: <FaNetworkWired />,
        route: "/trabajos",
        label: "Trabajos",
      },
      {
        imgURL: <FaUsers />,
        route: "/clientes",
        label: "Clientes",
      },
    ];
