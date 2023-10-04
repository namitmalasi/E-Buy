import "./LinkWithIcon.css";

const LinkWithIcon = ({ link, title }) => {
  return (
    <a href={link} className="align_center">
      {title}
    </a>
  );
};

export default LinkWithIcon;
