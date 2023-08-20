import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      borderRadius={4}
      fontSize="0.8em"
      paddingX={2}
      paddingY={1}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
