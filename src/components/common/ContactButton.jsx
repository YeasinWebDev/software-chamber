import Arrow from "../../assets/icons/Arrow";

// #56585f]
const ContactButton = ({ onClick, text = "Contact Us", icon = <Arrow />, from = "#2b2d35",via="#56585f", to = "#686d72" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-full shadow-md transition`}
      style={{
        background: `linear-gradient(to top right, ${from}, ${via}, ${to})`,
      }}
    >
      <span className="text-[15px] md:text-[18px] font-medium font-outfit">{text}</span>
      <span className="bg-white rounded-full p-2">
        {icon}
      </span>
    </button>
  );
};

export default ContactButton;
