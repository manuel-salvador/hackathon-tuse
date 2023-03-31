# NFTs de inversión compartida gobernada por una DAO

## La DAO

- El monto que se paga al mintear quede en un wallet controlada por una DAO
- La DAO decide en donde y como se stakea, lendea o lo que sea una parte del dinero, para que todos los holders se beneficien de la inversión compartida
- El DAO tiene que ejecutar llamadas a otros contratos, tanto para invertir como para retirar

## NFT

- A cada NFT se le puede agregar una inversión adicional, que lo hace valer más y suma al total de dinero manejado por el contrato en total.
- El holder del NFT puede redimir el valor que tenga bloqueado. Como si cada NFT fuera un certificado de haber invertido tanta $ en un pool de inversión gobernado entre todos
- El contrato recibe $ al mintear, y eso es lo que vale la inversión de cada NFT hasta que se le aumente lo que vale con otra función
- Se podría incluir el ERC de los royalties para generar más ingresos al owner, y cada NFT capaz se valorizaría más allá de su valor bloqueado, por el acceso a la DAO, el diseño del NFT, la comunidad que tengan, etc (humo de NFT)
- La imagen del NFT podría ser un cofre del tesoro que está lleno de cosas cuando el NFT está cargado, y vacío cuando fue vaciado. Podría tener un mínimo de Ether que deba estar invertido en él para mostrarse lleno, para disuadir a los scammers de vaciarlo y luego revenderlo con muy pocos fondos para que parezca lleno.

## Frontend

- Muestra cuanto vale en total lo invertido en cada NFT, así como el proporcional de cada farm y staking en que esté invertido el dinero del DAO, como el detalle de un ticket
- Botón para claimear lo invertido y otro para invertir más
