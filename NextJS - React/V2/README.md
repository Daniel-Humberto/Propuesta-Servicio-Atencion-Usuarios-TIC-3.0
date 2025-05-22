Contexto: {
Una empresa, cuenta con diversos departamentos, dispone del departamento de "agenda ambiental", responsable de gestionar instalaciones (auditorios, salones, computadoras, proyectores, etc.) y de ofrecer servicios como configuración DNS, desarrollo de páginas web, entre otros. Actualmente, la gestión de estos recursos se realiza de forma manual, lo que ocasiona problemas e inconsistencias. Con el objetivo de optimizar este proceso, se plantea el desarrollo de una aplicación web que permita automatizar la solicitud, seguimiento y cierre de los procesos y servicios.
}


Desarrolla una aplicacion Web echa en Next.js, React, ShadCN UI, Tailwind CSS.
La aplicación Web debe ser Responsive y siempre cubrir toda la pantalla del dispositivo independientemente de con que dispositivo se consulte (Laptop, PC, celular)
La aplicacion Web debe ser lo mas atractivo visualmente, con un estilo elegante, y minimalista con dark mode prestabecido.
La aplicacion Web es para los administradores y se compone de un dashboard pricipal, una pagina web para consultar los tickets acerca de solicitudes de servicios, una pagina web para consultar los chats entre los administradores y usuarios que solicitaron algun ticket, un Panel de Control de Inventarios, y por ultimo un Panel de calendario mensual, para visualizar aquellas fechas donde se ya se tiene agendado algun servicio.




Especificaciones de las interfaces graficas y las distintas paginas web:{


Interfaz Grafica - Sidebar Superior para indicar, la pestaña en la que se encuentra. En vez del uso de una barra de navegacion lateral, se plantea el uso de una barra de navegacion superior con el fin de facilitar el estilo Responsive, esta barra de navegacion superior puede estar compuesta por botones o pequeños logos (svg, etc).


Dashboard - Se debe de componer de Graficas, Estadisticas y  KPIs, acerca del rendimiento de los administradores que atiende las solicitud, y tendencias de las solicitudes.


Tickets - Se debe de componer de una tabla donde se menciona el ID del Ticket, El tipo de servicio que se esta solicitanto, el asuto, la fecha cuando se solicito el ticket, su estatus (Pendinte, En Proceso, Concluido, Cancelado) Seria util poder realiazr busquedas y poder filtrar los tickets en base a ciertos parametros.


ChatTicket - Chat entre administrador que atiende la solicitud y el usuario que solicitó el servicio. Se mustran los datos del usuario que solicito el servicio, y los detalles del ticket que solicito, tambien se muestra un par de botones para dar por concluido el ticket. Al igual que se muestra el estatus del ticket.


Panel de Control de Inventarios - Se podria componer de una tabla que mencione los detalles del inventario como ID, Descripcion, el tipo, su ubicacion, estatus, etc. Pero seria mucho mas util y valioso que el diseño sea el de un dashbord donde se mencione en la parte superior a travez de card el total de equipos, los equipos disponibles, equipos en uso, y aquellos que estan en reparacion. En la parte inferior se mustra una tabla con todos los detalles del inventario, o card con los detalles de cada uno de los equipos. Seria muy util poder filtar tanta la tabla como los cards en base a ciertos parametros.


Panel de calendario - Se compone de un calendario mensual donde se puede visualizar aquellas fechas donde se ya se tiene agendado algun servicio en cierto dia, hora y lugar. Se debe de poder cambiar la vizualización del calendario ya sea de manera anual, mensual, semanal, o diaria. Se debe de mostrar en una card lateral aquellos eventos agendados para el dia en que se consulte el calendario en caso que dicho dia haya algo agendado. Seria muy util tener otra card en la parte inferior donde se mencionen los Próximos eventos mas ceracanos.


}