import { Box, Flex, Title } from '@mantine/core'
const blogs = [
  {
    img: 'https://i.pinimg.com/736x/e3/0d/9f/e30d9f47b98aa002fa26631bbba7b4a6.jpg',
    title: 'Blog 1',
    date: '2023-06-01',
  },
  {
    img: 'https://i.pinimg.com/736x/e3/0d/9f/e30d9f47b98aa002fa26631bbba7b4a6.jpg',
    title: 'Blog 1',
    date: '2023-06-01',
  },
  {
    title: 'Blog 1',
    img: 'https://i.pinimg.com/736x/e3/0d/9f/e30d9f47b98aa002fa26631bbba7b4a6.jpg',
    date: '2023-06-01',
  },
]
export function BlogComponent() {
  return (
    <Box py={100} bg="brand.1" style={{ borderRadius: '30px' }}>
      <Title size={50} mb={30} ta={'center'}>
        Latest blog posts & news
      </Title>
      <Flex>
        {blogs.map((blog, index) => (
          <Box key={index} w={{ base: '100%', md: '33%' }} px={20}>
            <img
              style={{ borderRadius: '30px', width: '100%', height: 'auto' }}
              src={blog.img}
              alt=""
            />
            <Box mt={20}>
              <h3>{blog.title}</h3>
              <p>{blog.date}</p>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
