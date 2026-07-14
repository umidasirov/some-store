import { Box, Button, Flex, Input, Text, Title } from '@mantine/core'

export function LastSectionOfHome() {
  return (
    <Flex p={50} bg={'brand.7'} style={{ borderRadius: '20px' }} gap={20}>
      <Flex direction={'column'} gap={20} w={'50%'}>
        <Title size="40px" w="500px" c={'brand.1'}>
          Enjoy every mile with adorable companionship.
        </Title>
        <Text c={'brand.2'} fs={'14px'}>
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat
        </Text>
        <Box pos={'relative'} w={'300px'} h={'90px'}>
          <Input
            placeholder="Enter your email"
            h={'50px'}
            size="lg"
            w={'100%'}
          />
          <Button
            pos={'absolute'}
            right={'3px'}
            top={'3px'}
            h={'44px'}
            bottom={'3px'}
            c={'brand.1'}
            bg={'brand.3'}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
