
import { useEffect, useState } from 'react';
interface Theme {
  name: 'dark' | 'light';
  // Agrega otras propiedades de estilo del tema si es necesario
}
export const useThemeSwitcher = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>({ name: 'dark' }); // Tema inicial

  useEffect(() => {
    // Verificar el tema almacenado en el almacenamiento local (si lo hay)
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme({ name: storedTheme as Theme['name'] });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.name === 'dark' ? 'light' : 'dark';
    setTheme({ name: newTheme });
    localStorage.setItem('theme', newTheme); // Almacenar el tema en el almacenamiento local
  };

  return [theme, toggleTheme];
};
