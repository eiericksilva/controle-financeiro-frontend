const Tag = ({ name }) => {
  return (
    <div className={`p-2 text-xs font-medium rounded-full shadow-md`}>
      {name}
    </div>
  );
};

export default Tag;
