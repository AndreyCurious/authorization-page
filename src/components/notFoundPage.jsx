import React from 'react';
import routes from '../routes';

// здесь необходимо использовать <link> вместо <a>(чтобы страница не перезагружалась),
// но я не хотел нарушать правила, все таки <link> это компонент

const NotFoundPage = () => (
  <div className="con">
    <div className="notFoundPage">
      <img alt="Страница не найдена" className="" src="https://market.mosreg.ru/Content/Redesign/img/404.svg" width="750px" height="750px" />
      <h1 className="">
        Страница не найдена
      </h1>
      <p className="">
        <a href={routes.authentication()}>Перейти на страницу аутентификации</a>
      </p>
    </div>
  </div>
);

export default NotFoundPage;
