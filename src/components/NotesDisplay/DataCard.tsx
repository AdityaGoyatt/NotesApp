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
  Center,
} from "@chakra-ui/react";

interface Props {
  title: string;
  imageUrl: string;
  comments: string;
}
const DataCard = ({ title, imageUrl, comments }: Props) => {
  return (
    <Card minW="80vw" margin="10px">
      <CardBody>
        <Heading size="lg" m="20px">
          {title}
        </Heading>{" "}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            borderRadius="10px"
            boxSize="90%"
            src={imageUrl}
            alt={comments}
            objectFit="cover" // Maintain aspect ratio and cover the container
          />
        </div>
        <Stack mt="6" spacing="3">
          <Text>{comments}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DataCard;
