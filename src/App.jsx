import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="pantalla-completa"
      initial={{ backgroundColor: '#000000' }}
      animate={{ backgroundColor: loading ? '#000000' : '#ffffff' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="loader-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: '#ffffff' }}
            >
              Bienvenido
            </motion.h1>

            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="contenido"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 style={{ color: '#000000' }}>Este es tu portafolio</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
