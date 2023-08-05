// Función de validación para el nombre de usuario (email)
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
  
    if (!email) {
      return "El nombre de usuario (email) no puede estar vacío.";
    } else if (email.length > 35) {
      return "El nombre de usuario (email) no puede tener más de 35 caracteres.";
    } else if (!emailRegex.test(email)) {
      return "El nombre de usuario (email) no es un email válido.";
    }
  
    return ""; // Si no hay errores, devuelve una cadena vacía
  };
  
  // Función de validación para la contraseña
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{6,10}$/; // Expresión regular para validar contraseña
  
    if (!password) {
      return "La contraseña no puede estar vacía.";
    } else if (!passwordRegex.test(password)) {
      return "La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres.";
    }
  
    return ""; // Si no hay errores, devuelve una cadena vacía
  };
  
  // Exporta ambas funciones de validación para usarlas en otros archivos
  export { validateEmail, validatePassword };