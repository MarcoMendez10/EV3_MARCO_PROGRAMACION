# EV3_MARCO_PROGRAMACION
Descripción
Esta aplicación implementa funcionalidades avanzadas como generación de códigos QR y consumo de datos dinámicos desde un servicio, utilizando Angular como framework principal.

Requisitos Previos
Node.js: Asegúrate de tener instalada una versión compatible de Node.js (v16 o superior).
Angular CLI: Instala Angular CLI globalmente:
bash
Copiar código
npm install -g @angular/cli  

Ejecución
Inicia la aplicación en un entorno de desarrollo con el siguiente comando:

bash
Copiar código
ng serve  
Accede a la aplicación en tu navegador en http://localhost:4200.

Plan de Pruebas Unitarias
Este proyecto incluye pruebas unitarias para garantizar la funcionalidad de los componentes clave. Utilizamos Jasmine como framework de pruebas.

Instrucciones para ejecutar las pruebas
Ejecuta las pruebas unitarias con:
bash
Copiar código
ng test  
Verifica los resultados de las pruebas en la consola o en el reporte generado.

Casos de Prueba Cubiertos
Componente api-html
P5: Verificar la creación del componente.
P6: Validar que ngOnInit carga los datos correctamente, actualizando cantidad_personajes y personajes.
Componente genera-qr
P7: Verificar la creación exitosa del componente.
P8: Comprobar que el valor inicial de qrData es "Texto de base".
P9: Validar la asignación correcta de qrData a createdCode al generar el código QR.
P10: Confirmar que el código QR no se renderiza inicialmente en el DOM.
P11: Validar que generateQRCode() actualiza correctamente createdCode con nuevos datos.
