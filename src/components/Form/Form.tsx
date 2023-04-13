import './Form.scss'
import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { TYPES_CARE } from '../../utils/constants'
import { ICard } from '../../types/types';
import { Popup } from '../Popup/Popup';

interface FormProps {
  onClose: () => void;
  onSubmit: (card: ICard) => void;
  selectedCard?: ICard;
  isOpen: boolean;
  title: string;
  buttonText: string;
  formId: string;
}

export const Form: FC<FormProps> = ({ onClose, onSubmit, selectedCard, isOpen, title, buttonText, formId }) => {

  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

  const [showAll, setShowAll] = useState<boolean>(false);

  const [sizeType, setSizeType] = useState<string>("");

  const handleSizeTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSizeType(event.target.value);
  }

  const [selectedTypeCare, setSelectedTypeCare] = useState<number[]>(selectedCard?.typeCare || []);

  const handleSelectedTypeCare = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSelectedTypeCare((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((val) => val !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  }

  useEffect(() => {
    if (selectedCard) {
      setValues({
        ...values,
        title: selectedCard.title,
        subtitle: selectedCard.subtitle,
        img: selectedCard?.url,
        size: selectedCard?.size,
        barcode: selectedCard?.barcode,
        manufacturer: selectedCard?.manufacturer,
        brand: selectedCard?.brand,
        price: selectedCard?.price,
        description: selectedCard?.description,
      });
    }
  }, [selectedCard, setValues])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Number(new Date());

    onSubmit(
      {
        id: selectedCard?.id || id,
        title: values.title,
        subtitle: values.subtitle,
        url: values.img,
        size: values.size,
        barcode: values.barcode,
        manufacturer: values.manufacturer,
        brand: values.brand,
        price: values.price,
        description: values.description,
        sizeType: sizeType,
        typeCare: selectedTypeCare,
      }
    );
    setSelectedTypeCare([])
    resetForm()
    onClose()
  }

  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  useEffect(() => {
    console.log(isValid, selectedTypeCare.length)
    if (isValid && selectedTypeCare.length > 0) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isValid, selectedTypeCare])

  return (

    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >

      <form className={`admin-form admin-form__${formId}`} name={formId} id={formId} onSubmit={(e) => handleSubmit(e)}>
        <h2 className="admin-form__title">{title}</h2>

        <label className="admin-form__label">
          Название товара
          <input className="admin-form__input" type="text" name="title" id="title"
            placeholder="Camay" minLength={2} maxLength={30} required
            value={values.title || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="title-error">
            {errors.title || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Краткое описание товара
          <input className="admin-form__input" type="text" name="subtitle"
            id="sibtitle" placeholder="Мыло ароматное" minLength={2} maxLength={60} required
            value={values.subtitle || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="subtitle-error">
            {errors.subtitle || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Изображение товара
          <input className="admin-form__input" type="url" name="img"
            id="img" placeholder="url картинки" required value={values.img || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="img-error">
            {errors.img || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Тип размера
          <select className="admin-form__select" name="size-type" id="size-type" required onChange={handleSizeTypeChange} value={selectedCard?.sizeType}>
            <option value="weight" >Вес (г, кг)</option>
            <option value="volume">Объем (мл, л)</option>
          </select>
        </label>

        <label className="admin-form__label">
          Вес/объем товара
          <input className="admin-form__input" type="text" name="size"
            id="size" placeholder="450гр" minLength={2} maxLength={30}
            required value={values.size || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="size-error">
            {errors.size || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Штрихкод товара
          <input className="admin-form__input" type="text" name="barcode"
            id="barcode" placeholder="Число из 13 цифр" pattern="[0-9]{13}" maxLength={13}
            required value={values.barcode || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="barcode-error">
            {errors.barcode || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Производитель товара
          <input className="admin-form__input" type="text" name="manufacturer"
            id="manufacturer" placeholder="Uniliver" minLength={2} maxLength={30} required
            value={values.manufacturer || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="manufacturer-error">
            {errors.manufacturer || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Бренд товара
          <input className="admin-form__input" type="text" name="brand"
            id="brand" placeholder="Camay" minLength={2} maxLength={30} required
            value={values.brand || ""} onChange={(e) => handleChange(e)}></input>
          <span className="admin-form__input-error" id="brand-error">
            {errors.brand || ""}
          </span>
        </label>

        <label className="admin-form__label">
          Цена товара
          <input className="admin-form__input" type="text" name="price"
            id="price" placeholder="45.08" required value={values.price || ""}
            onChange={(e) => handleChange(e)} pattern="\d+(\.\d{2})?"></input>
          <span className="admin-form__input-error" id="price-error">
            {errors.price || ""}
          </span>
        </label>

        <div className="admin-form__checkbox-list">
          <p className="admin-form__checkbox-title">Тип ухода</p>
          <p className="admin-form__checkbox-text" onClick={() => setShowAll(!showAll)}>Выберите тип ухода из списка 
          <span className={`menu__arrow admin-form__button_arrow ${showAll && 'arrow-open'}`}></span></p>
          <div className={`admin-form__checkbox-container ${showAll ? 'open' : 'close'}`}>
            {TYPES_CARE.map((el, i) => <label key={i} className="admin-form__label-checkbox">
              <input className="admin-form__checkbox" type="checkbox"
                checked={selectedTypeCare.includes(i) ? true : false}
                value={i}
                onChange={(e) => { handleSelectedTypeCare(e) }}
              />
              {el}
            </label>)}
          </div>
          <p className={`admin-form__checkbox-info ${isValid && selectedTypeCare.length === 0 && 'admin-form__checkbox-invalid'}`}>Выберите тип ухода из списка</p>
        </div>

        <label className="admin-form__label">
          Описание товара
          <textarea className="admin-form__textarea" name="description" id="description"
            minLength={2} maxLength={1000} placeholder="Все, что вы хотели бы рассказать о своем товаре"
            required value={values.description || ""} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}></textarea>
          <span className="admin-form__input-error" id="description-error">
            {errors.description || ""}
          </span>
        </label>

        <button className={`admin-form__submit ${!isFormValid && "button__disabled"}`}
          disabled={isFormValid ? false : true}
          type="submit" aria-label={buttonText}>
          {buttonText}</button>
      </form>

    </Popup>
  )
}