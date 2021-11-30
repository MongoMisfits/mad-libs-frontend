import "./UsersTemplates.css";

const UsersTemplates = (props) => {

  const templatesArr =
    props.addTemplate &&
    props.addTemplate.map((template, index) => {
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
            <li>Index: {index}</li>
            <button type="submit" onClick={() => {
                props.handleEdit(template);
              }}>
              Edit
            </button>
            <button
              type="submit"
              onClick={() => {
                props.handleDelete(template);
              }}
            >
              Delete
            </button>
          </ul>
        );
      }
    });

  return <div className="users-templates">{templatesArr}</div>;
};

export default UsersTemplates;
