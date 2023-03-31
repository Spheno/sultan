import './BreadCrumbs.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface BreadCrumbsProps {
  to: string;
  location: string;
  addres?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ addres, location, to }) => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className="bread-crumbs">
        <Link className="crumb" to='/'>Главная</Link>
        <span className="crumb__line"></span>
        <Link className="crumb" to={to}>{location}</Link>
        {addres ? <Link className="crumb" to='/catalog/product'><span className="crumb__line"></span>{addres}</Link> : ''}
      </div>

      <div className="bread-crumbs__mobile" onClick={goBack}>
        <button className="button-small bread-crumbs__mobile-button" type="button" aria-label="back"></button>
        <p className="bread-crumbs__mobile-text">назад</p>
      </div>
    </>
  )


}