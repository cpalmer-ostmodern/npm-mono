import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NewsletterForm from './newsletter-form.component';

describe('NewsletterForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsletterForm />);
    expect(baseElement).toBeTruthy();
  });

  it('should display error message if submitted without any value', async () => {
    render(<NewsletterForm buttonText="إضافة" />);

    const errorMessageText = 'Email address is required';
    const errorMessageAlert = screen.getByTestId('email-error');
    const submitButton = screen.getByRole('button', { name: /إضافة/i });
    const user = userEvent.setup();

    await user.click(submitButton);
    await waitFor(() =>
      expect(errorMessageAlert.textContent).toContain(errorMessageText),
    );
  });

  it('should display alert user if invalid email is submitted', async () => {
    render(<NewsletterForm buttonText="إضافة" />);

    const errorMessageText = 'Invalid email address';
    const incompleteEmail = 'email@';
    const errorMessageAlert = screen.getByTestId('email-error');
    const submitButton = screen.getByRole('button', { name: /إضافة/i });
    const user = userEvent.setup();

    await user.type(
      screen.getByRole('textbox', { name: 'email' }),
      incompleteEmail,
    );
    await user.click(submitButton);

    await waitFor(() =>
      expect(errorMessageAlert.textContent).toContain(errorMessageText),
    );
  });
});
