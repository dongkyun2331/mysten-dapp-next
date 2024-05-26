import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const ConnectButton = dynamic(() => import("../components/ConnectButton"), {
  ssr: false,
});
const OwnedObjects = dynamic(
  () => import("../components/OwnedObjects").then((mod) => mod.OwnedObjects),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>Mysten Dapp</Heading>
        </Box>
        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container>
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 800 }}
        >
          <OwnedObjects />
        </Container>
      </Container>
    </>
  );
}
