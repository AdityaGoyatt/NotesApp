import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

interface Props {
  title: string;
  imageUrl: string;
  comments: string;
}
const DataCard = ({ title, imageUrl, comments }: Props) => {
  return (
    <Card maxW="100vw">
      <CardBody>
        <Heading size="md">{title}</Heading>
        <Image src={imageUrl} alt={comments} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text>{comments}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DataCard;
