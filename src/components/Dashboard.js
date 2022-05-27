import React from "react";
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Circle,
} from "@chakra-ui/react";
import {
	FiMenu,
	FiBell,
	FiChevronDown,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import Content from './Content'
import Filter from './Filter'


export default function Dashboard({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4">
				{/* {children} */}
				<Content/>
			</Box>
		</Box>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h={["20",'6']} alignItems="right" mx="8" justifyContent="space-between">
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			<Filter/>
		</Box>
	);
};


const MobileNav = ({ onOpen, ...rest }) => {

	const navigate = useNavigate();
	const logOut = (e) => {
		//localStorage.removeItem("user");
		//setUser(null);
		navigate("/");
		window.location.reload();
	};

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
						>
							<HStack>
								<Circle
									size="2.5rem"
									bgColor="green"
									color="white"
									textTransform="uppercase"
								>
									{" "}
									{/* {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`} */}
								</Circle>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
                                    <Text fontSize="sm">Hi Femi,</Text>
									{/* <Text fontSize="sm">{`Hi ${user.firstName}`}</Text> */}
									{/* <Text fontSize="xs" color="gray.600">
										User
									</Text> */}
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
                                <Text fontSize="sm">Data Analyst</Text>
                                <Text fontSize="sm">Abijan</Text>
                                <Text fontSize="sm">Information Technology</Text>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}
						>
							<MenuDivider />
							<MenuItem onClick={(e) => logOut(e)}>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
