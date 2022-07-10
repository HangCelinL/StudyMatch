import React, { FC } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  IconButton,
  Icon,
} from 'native-base';
import { getAuth } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';

/* interface Card {
  name: string;
  description: string;
  id: string;
  courses: string[];
};

interface CardProps {
  items: Card[];
};

const CardOverview: React.FC<CardProps> = ({ items })
  => (
  <React.Fragment>
    {items.map((item: Card) => (
      <div key={item.id}>{item.id}</div>
    ))}
  </React.Fragment> */

/* const Card: FC<CardProps> = ({
  name,
  description,
  id,
  courses,
}) => {

  const [openLike, setOpenLike] = React.useState(false);
  const handleOpenLike = () => setOpenLike(true);
  const handleCloseLike = () => setOpenLike(false);
}; */

interface UserCardProps {
  name: string;
  description: string;
  id: string;
  courses: string[];
}

const UserCard: FC<UserCardProps> = ({
  name,
  description,
  id,
  courses

}) => {

  // const { user } = getAuth();
  return (
    <Box rounded="pill" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        roundedTop="pill"
        h={56}
        source={{
          uri: 'https://image.freepik.com/free-photo/clown-anemonefish-amphiprion-swimming-among-tentacles-its-anemone-home_211453-2.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={3}>
        <Heading color={useColorModeValue('blueGray.700', 'blueGray.100')}>
          Clownfish
        </Heading>
        <Text color={useColorModeValue('blueGray.500', 'blueGray.200')}>
          Bright orange with three distinctive white bars, clown anemonefish are
          among the most recognizable at all reef-dwellers.
        </Text>
        <HStack space={4}>
          <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
            Like
          </Button>
          <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
            View profile
          </Button>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="3700B3" />} />
        </HStack>
      </Stack>
    </Box>
  );
}

export default UserCard;



