# “Tuse”, NFTs de voto e inversión colectiva gobernada por una DAO:

El proyecto "Tuse" es un contrato inteligente que administra NFTs de voto e inversión colectiva gobernada por una DAO, y cuenta con cuatro contratos principales: Tuse, TuseNFT, TuseDAO y TuseVault.

El contrato Tuse es el coordinador de comunicación entre TuseDAO, TuseNFT y TuseVault. TuseNFT es el contrato que administra los NFTs y permite la inversión colectiva y la votación. TuseVault es el contrato que administra los fondos y los almacena para que sean gestionados por la DAO. TuseDAO es el contrato que toma decisiones sobre cómo se invierten los fondos administrados por TuseVault.

El frontend del proyecto permitiría a los usuarios votar sobre las decisiones tomadas por la DAO, crear NFTs, retirar los fondos y volver a invertir 0.01 ETH, y ver en qué lending/staking están actualmente invertidos los fondos del proyecto.

En resumen, es posible hacer un proyecto base que incluya los contratos Tuse, TuseNFT, TuseDAO y TuseVault, y un frontend que permita a los usuarios interactuar con el proyecto. Los elementos opcionales se pueden agregar más tarde si se desea.

# Contratos:

TuseNFT, TuseDAO, TuseVault

## TuseNFT

El contrato TuseNFT es un contrato de NFT (token no fungible) que permite a los usuarios mintear un token NFT único. El contrato también está conectado a otro contrato llamado TuseVault.

El contrato TuseNFT tiene las siguientes características:

- El constructor toma dos argumentos: baseURI y vault, donde baseURI es la URL base para obtener los URI de los tokens y vault es la dirección del contrato TuseVault.
- La función mint permite a los usuarios mintear un token NFT único.
- El contrato TuseNFT está limitado a un número máximo de tokens NFT que se pueden mintear.
- La función setBaseURI permite al propietario del contrato cambiar la URL base para obtener los URI de los tokens.
- La función tokenURI devuelve el URI del token en función de su tokenId.
- El contrato también tiene una función withdrawMintEarnings que permite al propietario del contrato retirar las ganancias acumuladas de las minteadas de tokens NFT.

En resumen, TuseNFT es un contrato NFT que permite a los usuarios mintear un token NFT único, y se conecta con el contrato TuseVault para depositar las ganancias obtenidas de las minteadas. Además, el propietario del contrato puede cambiar la URL base para obtener los URI de los tokens y retirar las ganancias acumuladas de las minteadas de tokens NFT.

## TuseVault

contrato que permite a los usuarios depositar y retirar fondos en relación a los NFT creados por el contrato TuseNFT.

El contrato TuseVault tiene una constante MIN_INVESTMENT que define el mínimo de ether que se debe depositar en un NFT para que se registre el balance en el contrato. También hay una dirección constante CARTESI_ADDRESS, que es la dirección del contrato de Cartesi que se utiliza para verificar que solo Cartesi pueda actualizar el balance.

Hay una función deposit() que permite a los usuarios depositar fondos en un NFT, y también hay una función withdraw() que permite a los usuarios retirar sus fondos de un NFT en particular. Ambas funciones necesitan el ID del token para funcionar.

El contrato también tiene una función updateBalance() que solo puede ser llamada por Cartesi, y que se utiliza para actualizar los balances de todos los NFT.

Finalmente, hay una función getEthInvested() que se utiliza en el contrato TuseNFT para obtener la cantidad de ether que se ha invertido en un NFT en particular.

- Importante: Para mantener actualizados los balances de los usuarios a medida que crecen es implementando una función que se llame periódicamente y actualice los balances. Esto se puede lograr a través de un cronjob, que ejecuta una función en intervalos regulares de tiempo. Esto podría hacerse utilizando Cartesi. \*1

- Opcional: El monto invertido en cada NFT es registrado en Cartesi para ahorrar gas y evitar un error OOG

## TuseDAO

La DAO decide cómo se generan rendimientos con el ETH de TuseVault, para que todos los holders se beneficien de la inversión compartida.

- Administra los fondos de TuseVault en base a lo votado por los holders de TuseNFT.
- Decide en qué staking/lending donde se invierte 50% del total de fondos. En caso de no haber suficientes fondos no invertidos, se retira la inversión más antigua y se colocan esos fondos en el nuevo staking/lending.
- Opcional: Utilizar Cartesi para automatizar el compounding cada determinado tiempo, y la ejecución de las acciones votadas.

contrato inteligente que implementa un modelo de gobernanza descentralizada para la comunidad de TuseNFT. Permite a los propietarios de TuseNFT votar en las propuestas y decisiones importantes que afectan a la comunidad.

El funcionamiento es el siguiente: los usuarios pueden crear propuestas, que pueden ser cualquier cosa desde cambios en las reglas de la comunidad hasta la asignación de fondos para financiar un nuevo proyecto. Luego, los usuarios que poseen TuseNFT pueden votar a favor o en contra de las propuestas utilizando sus tokens. Las votaciones se realizan durante un período determinado de tiempo y al final se determina si la propuesta ha sido aprobada o no según la mayoría de votos. Si la propuesta es aprobada, se ejecuta automáticamente.

TuseDAO permite una toma de decisiones descentralizada y transparente, en la que todos los usuarios de la comunidad tienen voz y voto en las decisiones importantes. Con este modelo de gobernanza, se busca fomentar una comunidad más comprometida y participativa en el desarrollo de TuseNFT.

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
