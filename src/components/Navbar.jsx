import { Button, Center, Flex, Icon, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";

export const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Flex p={'10px'} minH={'70px'} bg={'#69C28E'} justifyContent={'center'} flexDirection={['column', 'row']} gap={['10px', '10px']}>
            <Flex alignItems="center">
                <Text color="#BA0DFB" fontSize="2xl" fontWeight="extrabold" mr={400} ml={-400}>
                    Sky Forge
                </Text>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    _focus={{ 'border': 'none' }}
                    placeholder="Enter a city"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#BA0DFB'}
                    _hover={{ 'bg': '5e82f4' }}
                >
                    Search
                </Button>
            </Flex>
            <Center px={'10px'}>
                <Button
                    bg={'#BA0DFB'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                >
                    My Location
                </Button>
            </Center>
        </Flex >
    );
};
