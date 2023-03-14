import { Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {};

const Sidebar = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* MOBILE SIDEBAR SMALLER < 1024PX */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        className="flex lg:hidden w-80"
      >
        {/* Drawer content */}
      </Drawer>
      <div className="flex lg:hidden lg:w-80 mr-5 p-5">
        <Group position="center">
          <button onClick={open}>Open drawer</button>
        </Group>
      </div>

      {/* DESKTOP SIDEBAR LARGER > 1024PX */}
      <div className="hidden lg:flex lg:w-80 bg-white h-screen shadow-sm mr-5">
        <div className="p-5">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
