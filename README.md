# “Tuse”, NFTs de voto e inversión colectiva gobernada por una DAO:

El proyecto "Tuse" es un contrato inteligente que administra NFTs de voto e inversión colectiva gobernada por una DAO, y cuenta con cuatro contratos principales: Tuse, TuseNFT, TuseDAO y TuseVault.

El contrato Tuse es el coordinador de comunicación entre TuseDAO, TuseNFT y TuseVault. TuseNFT es el contrato que administra los NFTs y permite la inversión colectiva y la votación. TuseVault es el contrato que administra los fondos y los almacena para que sean gestionados por la DAO. TuseDAO es el contrato que toma decisiones sobre cómo se invierten los fondos administrados por TuseVault.

El frontend del proyecto permitiría a los usuarios votar sobre las decisiones tomadas por la DAO, crear NFTs, retirar los fondos y volver a invertir 0.01 ETH, y ver en qué lending/staking están actualmente invertidos los fondos del proyecto.

En resumen, es posible hacer un proyecto base que incluya los contratos Tuse, TuseNFT, TuseDAO y TuseVault, y un frontend que permita a los usuarios interactuar con el proyecto. Los elementos opcionales se pueden agregar más tarde si se desea.

# Contratos:

TuseNFT, TuseDAO, TuseVault

## TuseNFT

- mapping(address ⇒ uint256) tokenCount: Almacena la cantidad de NFT de cada address, de donde se leerá luego cuantos votos tiene cada address en el DAO
- mint() El monto pagado al mintear es de 0.01 ETH, y ese monto es enviado a TuseVault, de donde luego será administrado ese monto por TuseDAO.
- withdrawFromNFT(): El monto pagado puede redimirse en caso de querer retirar el ETH bloqueado en el NFT si el NFT está “lleno”. .
- depositToNFT(): Se puede volver a invertir el monto de minteo en el NFT para participar nuevamente de la inversión compartida.
- tokenURI: La imagen del NFT podría ser un cofre del tesoro que está lleno de cosas cuando el NFT está cargado, y vacío cuando fue vaciado.
- Cada NFT equivale a un voto en TuseDAO.
- Sólo se pueden mintear 50, para evitar errores OOG y cuidar el consumo de gas.
- Opcional: A cada nft se le puede agregar una inversión adicional, que lo hace valer más y suma al total de dinero manejado por el contrato en total. Como si cada nft fuera un certificado de haber invertido tanta $ en un pool de inversión gobernado entre todos.
- Opcional: El contrato podría tener un mínimo de Ether que deba estar invertido en él para mostrarse lleno, para disuadir a los scammers de vaciarlo y luego revenderlo con muy pocos fondos para que parezca lleno.
- Opcional: El contrato de NFT incluye el ERC de los royalties para generar más ingresos al owner, y cada NFT capaz se valorizaría más allá de su valor bloqueado, por el acceso a la DAO, el diseño del NFT, la comunidad que tengan, etc (humo de NFT)

## TuseVault

- Almacena los fondos recaudados por el minteo de NFTs y por recarga
- Los fondos son administrados por el DAO en base a los votos realizados por los holders de uno o más NFTs
- mapping(uint256 ⇒ unit256) balances: Registra qué tokens están “llenos” y cuales no.
- Importante: Para mantener actualizados los balances de los usuarios a medida que crecen es implementando una función que se llame periódicamente y actualice los balances. Esto se puede lograr a través de un cronjob, que ejecuta una función en intervalos regulares de tiempo. Esto podría hacerse utilizando Cartesi. \*1
- Opcional: El monto invertido en cada NFT es registrado en Cartesi para ahorrar gas y evitar un error OOG

## TuseDAO

La DAO decide cómo se generan rendimientos con el ETH de TuseVault, para que todos los holders se beneficien de la inversión compartida.

- Administra los fondos de TuseVault en base a lo votado por los holders de TuseNFT.
- Decide en qué staking/lending donde se invierte 50% del total de fondos. En caso de no haber suficientes fondos no invertidos, se retira la inversión más antigua y se colocan esos fondos en el nuevo staking/lending.
- Tiene un tiempo de 48 horas para determinar el resultado de cada votación.
- Opcional: Utilizar Cartesi para automatizar el compounding cada determinado tiempo, y la ejecución de las acciones votadas.

## Frontend

- Votación: Permite proponer al DAO en qué lending/staking se invierte, y votar si se realiza o no.
- Minteo: Permite mintear NFTs
- Envía notificaciones al celular/escritorio cada vez que una votación comienza, y termina.
- Muestra cuales NFT tienen fondos invertidos, con un botón para retirar los fondos, y otro para volver a invertir 0.01 ETH.
- Muestra en qué lending/staking estan invertidos actualmente los fondos del proyecto.

\*1 Por ejemplo, se podría implementar una función que se llame "updateBalances" que se ejecute cada 24 horas y calcule los intereses generados por las inversiones realizadas en las distintas plataformas y actualice los balances de los usuarios en consecuencia.

Para hacer esto, sería necesario implementar una estructura de datos que almacene los detalles de las inversiones realizadas por cada usuario, incluyendo el monto invertido, el tipo de plataforma y la tasa de interés. Luego, la función "updateBalances" leería estos datos y actualizaría los balances de los usuarios en consecuencia.

Otra opción sería usar un oráculo que proporcione datos en tiempo real sobre las ganancias generadas por las inversiones en otras plataformas y actualizar los balances en consecuencia. Esto permitiría mantener los balances de los usuarios actualizados en tiempo real sin la necesidad de ejecutar una función periódica.

# Roadmap (cambios pendientes)

- La función withdraw retira el porcentaje de lso fondos totales invertidos de el/los vaults donde se encuentran invertidos, calculando el monto a enviar al dueño de el/los NFTs.
- Agregar un cálculo de ganancias similar al de staking que requiera solo actualizar una variable para actualizar el monto que corresponde a cada inversor, y que esto se refleje en el frontend.
- Hacer que el DAO pueda proponer y ejecutar en qué monedas, NFTs, pares de liquidez (LP) u otros instrumentos financieros DeFI se invierten. Podria hacer referencia a un array dinámico que incluya structs con la dirección del contrato donde se invertira y el signature de la función a llamar para invertir, y para retirar ganancias
- Agregar función que actualice periódicamente los balances de todos los address teniendo en cuenta los intereses generados por lending/staking. Está función puede ser llamada periódicamente por un script o idealmente por Cartesi. El frontend debería mostrar una cuenta regresiva para la próxima actualización.
- Agregar funcion compound() al contrato TuseVault para reinvertir las ganancias generadas, y así generar el efecto "bola de nieve" del interés compartido.
- Implementar Cartesi para automatizar el chequeo de los balances invertidos, actualizarlos en el contrato, ejecutar el compound periodicamente, y la ejecución de los proposals.
