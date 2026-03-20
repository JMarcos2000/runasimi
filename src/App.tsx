import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { InicioPage } from './pages/InicioPage'
import { LessonPage } from './pages/LessonPage'
import { ExercisePage } from './pages/ExercisePage'
import { LessonResultPage } from './pages/LessonResultPage'
import { RepasoPage } from './pages/RepasoPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/inicio"
          element={
            <ProtectedRoute>
              <InicioPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesson/:id"
          element={
            <ProtectedRoute>
              <LessonPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesson/:id/ejercicios"
          element={
            <ProtectedRoute>
              <ExercisePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesson/:id/resultado"
          element={
            <ProtectedRoute>
              <LessonResultPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/repaso"
          element={
            <ProtectedRoute>
              <RepasoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
