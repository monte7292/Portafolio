import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import Home from './pages/Inicio';
import Proyectos from './pages/proyects';
import Experiencia from './pages/experiencia';

interface PageAnimationProps {
  children: ReactNode;
}

const PageAnimation = ({ children }: PageAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
            <PageAnimation>
              <Home />
            </PageAnimation>
          } 
        />
        <Route path="/experiencia" element={
            <PageAnimation>
              <Experiencia />
            </PageAnimation>
          } 
        />
        <Route path="/proyectos" element={
            <PageAnimation>
              <Proyectos />
            </PageAnimation>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#282c34' // Color de fondo que coincida con tu diseño
      }}>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;