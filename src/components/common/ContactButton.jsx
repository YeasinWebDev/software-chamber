import Arrow from "../../assets/icons/Arrow";

const ContactButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 bg-gradient-to-tr from-[#2b2d35] via-[#56585f] to-[#686d72] text-white px-2 py-1.5 md:px-3 md:py-2 rounded-full shadow-md transition border-[1px] border-gray-500"
    >
      <span className="text-[15px] md:text-[18px] font-medium font-outfit">Contact Us</span>
      <span className="bg-white rounded-full p-2">
        <Arrow />
      </span>
    </button>
  );
};

export default ContactButton;
