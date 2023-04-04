import { ChangeEvent, useCallback, useState } from "react"

interface IInputEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface ITextareaEvent extends ChangeEvent<HTMLTextAreaElement> {
  target: HTMLTextAreaElement;
}

interface FormValues {
  title: string;
  subtitle: string;
  img: string;
  size: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  price: number;
  description: string;
}

interface FormErrors {
  title?: string;
  subtitle?: string;
  img?: string;
  size?: string;
  barcode?: number;
  manufacturer?: string;
  brand?: string;
  price?: number;
  description?: string;
}

export function useFormWithValidation() {
  const [values, setValues] = useState<FormValues>({ title: '', subtitle: '', img: '', size: '', barcode: 0, manufacturer: '', brand: '', price: 0, description: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);


  const handleChange = (e: IInputEvent | ITextareaEvent) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;

    setValues(prevState => ({ ...prevState, [name]: value }));

    setErrors(prevState => ({ ...prevState, [name]: input.validationMessage }));
    const form = input.closest("form");
    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      const innerResetForm = () => {
        setValues({ title: '', subtitle: '', img: '', size: '', barcode: 0, manufacturer: '', brand: '', price: 0, description: '' });
        setErrors(newErrors);
        setIsValid(newIsValid);
      };
      innerResetForm();
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm }
}