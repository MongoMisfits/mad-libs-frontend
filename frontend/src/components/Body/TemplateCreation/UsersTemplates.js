import "./UsersTemplates.css";

const UsersTemplates = (props) => {
  const handleEdit = () => {
    console.log("Edit Clicked");
  };

  

  const templatesArr =
    props.templates &&
    props.templates.map((template) => {
      if (!template) {
        return <p>User's Templates</p>;
      } else {
        return (
          <ul>
            <li>
              <span>Title:</span> {template.title}
            </li>
            <li>
              <span>Blanks:</span> {template.blanks}
            </li>
            <li>
              <span>Value:</span> {template.value}
            </li>
            <button type="submit" onClick={handleEdit}>
              Edit
            </button>
            <button type="submit" onClick={props.handleDelete}>
              Delete
            </button>
          </ul>
        );
      }
    });

  return <div className="users-templates">{templatesArr}</div>;
};

export default UsersTemplates;
