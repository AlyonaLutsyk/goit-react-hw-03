
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm ({ onSubmit }) {
  const initialValues = { name: '', number: '' };

const validationSchema = Yup.object({
    name: Yup.string()
    .min(3, "Minimum number of characters is 3")
    .max(50, "Maximum number of characters is 50")
    .required("This field is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 000-00-00")
    .required("This field is required"),
});

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name</label>
        <Field className={css.input} id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label className={css.label} htmlFor="number">Number</label>
        <Field className={css.input} id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
};


