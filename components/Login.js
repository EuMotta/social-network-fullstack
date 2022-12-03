import React from 'react'
import { Button, Box, Center, Stack } from '@chakra-ui/react'


function Login() {
    return (
        <div title='Login'>
            <Center h='100vh' w='100%' className='bg-red-200'>
                <Stack
                    align='center'
                    bgColor='green.600'
                    p={16}
                    rounded='3xl'
                    boxShadow='lg'
                    spacing={12}
                >
                    <Box
                        bgColor='red.500'
                        w='fit-content'
                        p={16}
                        rounded='3xl'
                        boxShadow='md'
                    >
                    </Box>
                    <Button
                        boxShadow='md'
                    >
                        Entrar com a conta Google
                    </Button>
                </Stack>
            </Center>
        </div>
    )
} export default Login