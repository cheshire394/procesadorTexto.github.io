# ✨🧙‍♀️ Carta Mágica - Tienda Harry Potter ✉️✨

🚀 **Proyecto destacado para el portfolio - Aplicación interactiva desarrollada con JavaScript y tecnologías web modernas.**

---

## 🧩 Descripción del proyecto

Esta aplicación ha sido diseñada para una **tienda especializada en productos de Harry Potter**, cuyo objetivo es mejorar la experiencia del cliente permitiendo que cada regalo incluya una **carta personalizada con temática mágica**.  
Al comprar un producto, el cliente puede escribir una carta encantadora con estilo Hogwarts y seleccionar su diseño favorito.

---

## ✍️ Funcionalidades principales

- 📝 **Redacción de cartas mágicas** con estilos personalizados (negrita, cursiva y subrayado).
- 🖼️ **Elección de fondo** entre diferentes diseños inspirados en el universo Harry Potter.
- 💾 **Guardado automático** de la carta en el navegador (localStorage) para continuar después.
- 📥 **Exportación a PDF** de la carta personalizada.
- 📄 **Exportación a formato TXT** para edición colaborativa en otros dispositivos.
- 🎶 **Estética inmersiva** con efectos visuales y sonido ambiental que transportan al mundo mágico.

---

## 🧠 Problemas encontrados y soluciones aplicadas

### ❌ Estilos no conservados al exportar a PDF

Inicialmente, la exportación del contenido a PDF **no conservaba ni el fondo ni el estilo del texto**.  
Después de investigar, se implementó una solución eficaz usando:

- 📸 `html2canvas` → Captura visual del contenido HTML.
- 🗎 `jsPDF` → Generación del documento PDF.

🔍 El problema **no era del código**, sino del entorno de ejecución (navegador local con rutas `file://`).  
➡️ **Solución:** usar servidores locales como **Live Server** o subir el proyecto a **GitHub Pages** para garantizar el correcto renderizado.

---

## 🏁 Objetivos alcanzados

- ✅ Generación de cartas con estilo mágico.
- ✅ Exportación PDF y TXT multiplataforma.
- ✅ Persistencia de datos en navegador.
- ✅ Personalización visual accesible y sencilla.
- ✅ Inmersión sensorial con mensajes mágicos, efectos y música temática.

---

## 💡 Valor añadido del proyecto

Este proyecto no solo resuelve una necesidad técnica, sino que ofrece una **experiencia emocional e inmersiva al cliente**, combinando habilidades de frontend, usabilidad y resolución de problemas reales.

---

## 🛠️ Tecnologías utilizadas

- HTML / CSS / JavaScript  
- jsPDF  
- html2canvas  
- localStorage  
- GitHub Pages

---

## 🧪 ¿Quieres verlo en acción?

👉 [🔗 Ver la aplicación en vivo en GitHub Pages](https://cheshire394.github.io/procesadorTexto.github.io/)  
👉 [📂 Ver el código fuente en GitHub](https://github.com/cheshire394/procesadorTexto.github.io)

---


> **✨ Aplicación desarrollada con magia y código: JavaScript 🟨 + Experiencia de Usuario = Resultado encantador ✨**

---

## 📌 Conclusión

Este proyecto es una muestra clara de **capacidad técnica, adaptabilidad ante problemas reales, y orientación al detalle**, con un enfoque totalmente centrado en el usuario.  


---


