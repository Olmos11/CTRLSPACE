const CACHE_NAMErequest'ctrlspace-v1';
const URL a caché = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.0/index.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Trabajador de servicio de instalación
auto.addEventListener('instalar', evento => {
  evento.esperaHasta(
    cachés.abierto(NOMBRE_CACHE)
      .entonces(cache => {
        consola.registro('Caché abierto');
        retorno cache.agregar todo(URL a caché);
      })
  );
});

// Trabajador de servicio Activar
auto.addEventListener('activar', evento => {
  evento.esperaHasta(
    cachés.llaves().entonces(nombres de caché => {
      retorno Promesa.todos(
        nombres de caché.mapa(nombre de caché => {
          si (nombre de ¡caché!== NOMBRE_CACHE) {
            retorno cachés.eliminatorio(nombre de caché);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
auto.addEventListener('autobús', evento => {
  evento.responderCon(
    cachés.partido(evento.solicititud)
      .entonces(respuesta => {
        si (respuesta) {
          retorno respuesta;
        }
        retorno fetch(evento.solicititud);
      }
    )
  );
});
