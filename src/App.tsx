/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {
  HomePage,
  ServicesPage,
  ProcessPage,
  LocationsPage,
  ContactPage,
  LocalSeoLandingPage,
} from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated Local SEO Landing Pages */}
          <Route
            path="/hotel-digital-marketing-nashik"
            element={<LocalSeoLandingPage citySlug="/hotel-digital-marketing-nashik" />}
          />
          <Route
            path="/hotel-digital-marketing-trimbakeshwar"
            element={
              <LocalSeoLandingPage citySlug="/hotel-digital-marketing-trimbakeshwar" />
            }
          />
          <Route
            path="/hotel-digital-marketing-ujjain"
            element={<LocalSeoLandingPage citySlug="/hotel-digital-marketing-ujjain" />}
          />
          <Route
            path="/hotel-digital-marketing-indore"
            element={<LocalSeoLandingPage citySlug="/hotel-digital-marketing-indore" />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
