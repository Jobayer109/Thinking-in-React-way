const TagList = (tag) => {
  return (
    <li key={tag.id}>
      <small>{tag.icon}</small> - <p>{tag.text}</p>
    </li>
  );
};

export default TagList;
