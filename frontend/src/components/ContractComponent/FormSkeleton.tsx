import { Formik, FormikConfig } from "formik";
import { StyledForm } from "./styles";
import { MySelect, MyTextInput } from "./InteractionElement";
import { FormField } from "../../types";

export const FormSkeleton = <T,>({
  formikConfig,
  fields,
  id,
}: {
  formikConfig: FormikConfig<T>;
  fields: Array<FormField>;
  id: string;
}) => {
  return (
    <Formik
      initialValues={formikConfig.initialValues}
      validationSchema={formikConfig.validationSchema}
      onSubmit={formikConfig.onSubmit}
    >
      <StyledForm id={id}>
        {fields.map((field, idx) => {
          if (field.__tag === "input") {
            return (
              <MyTextInput
                key={idx}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
              />
            );
          } else if (field.__tag === "select") {
            return (
              <MySelect label={field.label} name={field.name}>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </MySelect>
            );
          }
        })}
      </StyledForm>
    </Formik>
  );
};
