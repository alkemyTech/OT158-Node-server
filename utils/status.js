const statusCodes = {
  OK: 200 /*
  La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP:
  */,
  Created: 201 /*
 La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.
  */,
  Accepted: 202 /*
  For Prefligh
  */,
  BadRequest: 400 /*
  Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
   */,
  Unauthorized: 401 /*
  Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
  */,
  PaymentRequired: 402 /*
  Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.
  */,
  Forbidden: 403 /*
  El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
  */,
  NotFound: 404 /*
  El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
  */,
  MethodNotAllowed: 405 /*
  El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.
  */,
  ISError: 500 /*
  Internal Server Error. El servidor ha encontrado una situación que no sabe cómo manejarla.
   */,
  NotImplemented: 501 /*
  El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD.
  */,
  BadGateway: 502 /*
  Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
  */
};
Object.freeze(statusCodes);
module.exports = statusCodes;
