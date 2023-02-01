import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import "./index.css";
import resources from './locales/index.js';
import App from './components/App';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import AuthorizationPage from './routes/AuthorizationPage';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });

    const router = createBrowserRouter([
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <AuthorizationPage />,
      },
    ]);
    

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </RouterProvider>
    </React.StrictMode>
  );
};

export default init;
