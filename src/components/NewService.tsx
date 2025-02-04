import FlowingMenu from "./FlowingMenu";

const NewService = () => {
  const demoItems = [
    {
      link: "/services#development",
      text: "Web Development",
      image:
        "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?t=st=1738576784~exp=1738580384~hmac=16aef175f8bcae5b1577ee92a623914bec730d8b7e8ca48bd525359226dc0520&w=1380",
    },

    {
      link: "/services#networking",

      text: "Network Solutions",
      image:
        "https://img.freepik.com/free-vector/data-network-businessman_24908-57839.jpg?t=st=1738576338~exp=1738579938~hmac=1c8a93375547081a054cbdefa690ded1c186c9a3faedc58c6cee8c3860c14926&w=826",
    },

    {
      link: "/services#ArtificialIntelligence",

      text: "AI Integration",
      image:
        "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?t=st=1738576445~exp=1738580045~hmac=ce574a8c2eec822dfa9295f8badf7e954c7af16c24372583498fe2cb1cc01bcb&w=1380",
    },

    {
      link: "/services#CyberSecurity",

      text: "Cybersecurity",
      image:
        "https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg?t=st=1738577093~exp=1738580693~hmac=d5710c5c64f759c5d0b1a6d7aead44230eefe66f42b2cecab2f5fac38fbd4f15&w=1380",
    },
  ];

  return (
    <div>
      <h1 className="text-center sm:text-[5vh] sm:bg-gray-100 text-[4vh] py-4 font-mono underline hover:text-gray-800 transition-all duration-600 font-bold">
        Our Services
      </h1>
      <div
        className="bg-black mx-auto rounded-3xl"
        style={{ height: "600px", width: "95vw", position: "relative" }}
      >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default NewService;
