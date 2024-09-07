import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.css';
import { Button } from '../button/component';
import classNames from 'classnames';
import { useHookFormMask } from 'use-mask-input';
import { usePopup } from '@/contexts/popupContexts';
import SubmitStatus from '@/components/popup/submitStatus/component';
import Popup from '@/components/popup/component';

interface FormValues {
    email: string;
    phone: string;
    name: string;
    company: string;
    industry: string;
    message: string;
}

interface FormProps {
    onSuccess?: () => void;
}

const Form: React.FC<FormProps> = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const registerWithMask = useHookFormMask(register);
    const { showPopup } = usePopup();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                showPopup('Message sent successfully!');
                if (onSuccess) {
                    setTimeout(() => {
                        onSuccess();
                    }, 1000);
                }
            } else {
                showPopup('Failed to send message.');
            }

        } catch (error) {
            console.error('Error:', error);
            showPopup('An error occurred while sending the message.');
        }
    };

    return (
        <div>
            <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classNames(styles.inputWrapper, styles.emailIcon)}>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                        type="email"
                        id="email"
                        placeholder="e-mail"
                        className={styles.inputField}
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                </div>

                <div className={classNames(styles.inputWrapper, styles.phoneIcon)}>
                    <input
                        {...registerWithMask("phone", ['+99999999999'], {
                            validate: {
                                noMaskChars: (value) => {
                                    if (!value.trim()) {
                                        return true;
                                    }
                                    const cleanValue = value.replace(/[_\s+()-]/g, '');
                                    return cleanValue.length === 11 || 'Phone number must be exactly 11 digits long';
                                },
                            },
                        })}
                        type="tel"
                        placeholder="phone number"
                        className={classNames(styles.inputField, {
                            [styles.inputError]: errors.phone
                        })}
                    />

                    {errors.phone && (
                        <p className={styles.errorMessage}>{errors.phone.message}</p>
                    )}
                </div>

                <div className={classNames(styles.inputWrapper, styles.nameIcon)}>
                    <input
                        type="text"
                        id="name"
                        placeholder="your name"
                        {...register('name', { required: 'Name is required' })}
                        className={styles.inputField}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={classNames(styles.inputWrapper, styles.companyIcon)}>
                    <input
                        type="text"
                        id="company"
                        placeholder="company name"
                        {...register('company')}
                        className={styles.inputField}
                    />
                    {errors.company && <p className={styles.errorMessage}>{errors.company.message}</p>}
                </div>

                <div className={classNames(styles.inputWrapper, styles.industryIcon, styles.doubleCell)}>
                    <input
                        type="text"
                        id="industry"
                        placeholder="your industry"
                        {...register('industry')}
                        className={styles.inputField}
                    />
                    {errors.industry && <p className={styles.errorMessage}>{errors.industry.message}</p>}
                </div>

                <div className={classNames(styles.text_area_wrapper, styles.messageIcon, styles.doubleCell, styles.message)}>
                    <textarea
                        id="message"
                        placeholder="your request"
                        {...register('message', { required: 'Message is required' })}
                        className={classNames(styles.inputField, styles.text_area)}
                    />
                    {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
                </div>

                <Button
                    type="submit"
                    text="Contact Us"
                    className={styles.button}
                />
            </form>
        </div>
    );
};

export default Form;
