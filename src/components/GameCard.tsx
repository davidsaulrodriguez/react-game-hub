import { GameModel } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"; // temporary import until we have a real model

interface Props {
  game: GameModel;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl" size="md">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
