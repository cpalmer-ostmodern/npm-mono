import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TopicButton } from '../../../atoms/button';
import * as Yup from 'yup';

/* eslint-disable-next-line */
export interface NewsletterFormProps {
  buttonText?: string;
  twFormInput?: string;
  twFormButton?: string;
  twFormCheckbox?: string;
  twFormCheckboxWrapper?: string;
  twFormErrorMessage?: string;
}

export function NewsletterForm({
  buttonText,
  twFormInput,
  twFormButton,
  twFormCheckbox,
  twFormCheckboxWrapper,
  twFormErrorMessage,
}: NewsletterFormProps) {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email address is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert('Form submitted successfully');
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div
          role="group"
          aria-labelledby="checkbox-group"
          className={twFormCheckboxWrapper}
        >
          <label>
            <span>موضة</span>
            <Field
              className={twFormCheckbox}
              type="checkbox"
              name="checked"
              value="موضة"
            />
          </label>
          <label>
            <span>منوعات</span>
            <Field
              className={twFormCheckbox}
              type="checkbox"
              name="checked"
              value="منوعات"
            />
          </label>
          <label>
            <span>جمال</span>
            <Field
              className={twFormCheckbox}
              type="checkbox"
              name="checked"
              value="جمال"
            />
          </label>
        </div>

        <label htmlFor="email" className="hidden">
          Email Address
        </label>
        <Field
          className={twFormInput}
          name="email"
          aria-label="email"
          placeholder="إضافة"
          type="email"
        />
        <div className={twFormErrorMessage} data-testid="email-error">
          <ErrorMessage name="email" />
        </div>

        <div className="mt-4">
          <TopicButton
            topicName={buttonText}
            icon="icon icon-arrow-left"
            tw={twFormButton}
            size="28px"
          />
        </div>
      </Form>
    </Formik>
  );
}

export default NewsletterForm;
