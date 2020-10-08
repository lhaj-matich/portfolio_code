import React from "react";

const FormFields = ({ formData, change }) => {
  const renderFieldsTemp = () => {
    const formArray = [];
    for (let element in formData) {
      formArray.push({
        id: element,
        settings: formData[element],
      });
    }

    return formArray.map((item, i) => {
      return <div key={i}>{renderTemplate(item)}</div>;
    });
  };

  const showLabel = (label, text) => {
    return label ? <label className="label">{text}</label> : null;
  };

  const changeHandler = (id, data) => {
    let newState = formData[id];
    newState.value = data.target.value;
    change(newState);
  };

  const renderTemplate = (data) => {
    const values = data.settings;
    let Template = null;

    switch (values.element) {
      case "input":
        Template = (
          <div className="inputElement">
            {showLabel(values.label, values.labelText)}
            <input
              {...values.config}
              value={values.value}
              onChange={(event) => {
                changeHandler(data.id, event);
              }}
            />
          </div>
        );
        break;
      case "textarea":
        Template = (
          <div className="inputElement">
            {showLabel(values.label, values.labelText)}
            <textarea
              {...values.config}
              value={values.value}
              onChange={(event) => {
                changeHandler(data.id, event);
              }}
            ></textarea>
          </div>
        );
        break;
      default:
        Template = null;
    }

    return Template;
  };

  return <div className="formElements">{renderFieldsTemp()}</div>;
};

export default FormFields;
