import { Drawer, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarDate, BsDatabase } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

type Props = {};

const SideBarItems = () => {
  const ROUTES = [
    {
      name: "Dashboard",
      path: "/",
      icon: <AiOutlineHome size={20} />,
    },
    {
      name: "Members Records",
      path: "/members",
      icon: <BsDatabase size={20} />,
    },
    {
      name: "Events",
      path: "/events",
      icon: <BsCalendarDate size={20} />,
    },
  ];

  return (
    <>
      <div className="py-5 w-full">
        {/* LOGO */}
        <div className="flex items-center justify-between gap-2 px-5">
          <h2 className="text-base font-bold">Quality Manangement System</h2>
          <Image src="/vite.svg" alt="Logo" height={25} width={25} />
        </div>
        <ul className="flex flex-col gap-3 mt-5">
          {ROUTES.map((route) => (
            <div key={route.name}>
              <NavLink
                to={route.path}
                className={`px-5 h-20 text-2xl font-semibold cursor-pointer flex items-center hover:bg-gray-100 text-gray-700`}
              >
                <span className="mr-3">{route.icon}</span> {route.name}
              </NavLink>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

const Sidebar = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* MOBILE SIDEBAR SMALLER < 1024PX */}
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        className="flex lg:hidden w-80"
      >
        <SideBarItems />
      </Drawer>
      <div className="flex lg:hidden lg:w-80 mr-5 p-5">
        <Group position="center">
          <button onClick={open}>
            <GiHamburgerMenu size={30} />
          </button>
        </Group>
      </div>

      {/* DESKTOP SIDEBAR LARGER > 1024PX */}
      <div className="hidden lg:flex lg:w-80 bg-white h-screen shadow-sm mr-5">
        <SideBarItems />
      </div>
    </>
  );
};

export default Sidebar;
