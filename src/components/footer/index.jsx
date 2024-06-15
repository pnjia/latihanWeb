const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-red-600 text-center">
      <h1 className="text-l text-white">Made with coffee &copy;{year}</h1>
    </div>
  );
};
export default Footer;
