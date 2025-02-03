import FlowingMenu from "./FlowingMenu";

const NewService = () => {
  const demoItems = [
    {
      link: "/services",
      text: "Web Development",
      image: "https://picsum.photos/600/400?random=1",
    },

    {
      link: "/services",

      text: "Network Solutions",
      image: "https://picsum.photos/600/400?random=2",
    },

    {
      link: "/services",

      text: "AI Integration",
      image: "https://picsum.photos/600/400?random=3",
    },

    {
      link: "/services",

      text: "Cybersecurity",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div>
      NewService
      <div
        className="bg-black"
        style={{ height: "600px", position: "relative" }}
      >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default NewService;
