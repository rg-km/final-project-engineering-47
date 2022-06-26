import React from 'react';
import bgDark from '../../../Images/bgDark.png';
import Kip from '../../../Images/kip.svg';
import Aperti from '../../../Images/aperti.svg';
import Besu from '../../../Images/besu.svg';
import Lpdp from '../../../Images/lpdp.svg';
import Pertamina from '../../../Images/pertamina.svg';
import Tanato from '../../../Images/tanato.svg';

import { Box, Stack, SimpleGrid, Button, Text, Container, useColorModeValue, Image, Heading, } from '@chakra-ui/react';
const Beasiswa = () => {
    return (
        <Box
            bg={useColorModeValue('#01949A')}
            color={useColorModeValue('black')}

            backgroundSize="cover">
            <SimpleGrid columns={2} spacing={10}>
                <Box height='auto'>
                    <Container as={Stack} maxW={'6xl'} py={10} color="white">
                        <Text mb={10} ml='300px' mt={10} textAlign="left"  >
                            <Heading fontSize="24px">Apa Itu KIP Kuliah?</Heading>
                            <br />
                            <strong>KIP</strong> atau Kartu Indonesia Pintar adalah pengganti Beasiswa Bidikmisi yang  <br />
                            disediakan oleh pemerintah melalui Deriktorat Jendral Pendidikan Tinggi.<br />
                            <br></br>
                            Beasiswa ini diperuntukkan kepada calon mahasiswa yang tidak mampu  <br />
                            secara ekonomi tetapi memiliki potensi akademik yang sangat baik dan <br />
                            mendapat rekomendasi dari sekolah.<br /><br />
                            Beasiswa mencakup biaya kuliah, tunjangan buku, dan uang saku yang <br />
                            diberikan setiap semester. Mahasiswa D3 akan mendapatkan beasiswa <br />
                            selama 6 semester, sedangkan mahasiswa D4 dan S1 mendapatkan <br />
                            selama 8 semester.
                            <br>
                            </br>
                            <Button href='https://www.youtube.com/watch?v=uTh5SQRJjlI&ab_channel=MaxhillAntimage' mt='10px' colorScheme='red'>Kunjungi</Button>
                        </Text>
                    </Container>
                </Box>
                <Box height='auto'>
                    <Container as={Stack} maxW={'6xl'} py={16} color="white">
                        <Image width='500px' src={Kip}></Image>
                    </Container>
                </Box>
            </SimpleGrid>
            <Box
                bg={useColorModeValue('#01949A')}
                color={useColorModeValue('black')}

                backgroundSize="cover">

                <SimpleGrid columns={2} mt='-80px' spacing={10}>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={16} color="white">
                            <Image width='500px' src={Besu}></Image>
                        </Container>
                    </Box>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={10} color="white">
                            <Text mb={10} mr='250px' mt={10} textAlign="left"  >
                                <Heading fontSize="24px">Apa Itu Beasiswa Unggulan?</Heading>
                                <br />
                                <strong>Beasiswa LPDP</strong> adalah program beasiswa yang dibiayai oleh pemerintah <br />
                                indonesia melalui pemanfaatan Dana Pengembangan Pendidikan Nasional.<br />
                                (DPNN) dan dikelola oleh LPDP untuk pembiayaan studi.<br />
                                <br></br>
                                Beasiswsa kerja sama antara Kemenkeu dan Kemendikbud Ristek ini terbuka  <br />
                                bagi siswa yang akan melanjutkan jenjang S1, S2, hingga S3.
                                <br /><br />
                                Uang saku yang ditawarkan sekitar Rp 118-320 juta per tahun dan <br />
                                menanggung biaya pendidikan, asuransi, transportasi, tunjangan keluarga <br />
                                (untuk S3) dan lainnya.
                                <br>
                                </br>
                                <Button mt='10px' colorScheme='red'>Kunjungi</Button>
                            </Text>
                        </Container>
                    </Box>

                </SimpleGrid>
            </Box >
            <Box
                bg={useColorModeValue('#004369')}
                color={useColorModeValue('black')}

                backgroundSize="cover">
                <SimpleGrid columns={2} spacing={10}>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={10} color="white">
                            <Text mb={10} ml='300px' mt={10} textAlign="left"  >
                                <Heading fontSize="24px">Apa Itu KIP Kuliah?</Heading>
                                <br />
                                <strong>KIP</strong> atau Kartu Indonesia Pintar adalah pengganti Beasiswa Bidikmisi yang  <br />
                                disediakan oleh pemerintah melalui Deriktorat Jendral Pendidikan Tinggi.<br />
                                <br></br>
                                Beasiswa ini diperuntukkan kepada calon mahasiswa yang tidak mampu  <br />
                                secara ekonomi tetapi memiliki potensi akademik yang sangat baik dan <br />
                                mendapat rekomendasi dari sekolah.<br /><br />
                                Beasiswa mencakup biaya kuliah, tunjangan buku, dan uang saku yang <br />
                                diberikan setiap semester. Mahasiswa D3 akan mendapatkan beasiswa <br />
                                selama 6 semester, sedangkan mahasiswa D4 dan S1 mendapatkan <br />
                                selama 8 semester.
                                <br>
                                </br>
                                <Button mt='10px' colorScheme='red'>Kunjungi</Button>
                            </Text>
                        </Container>
                    </Box>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={16} color="white">
                            <Image width='500px' src={Lpdp}></Image>
                        </Container>
                    </Box>
                </SimpleGrid>
                <Box
                    bg={useColorModeValue('#004369')}
                    color={useColorModeValue('black')}

                    backgroundSize="cover">

                    <SimpleGrid columns={2} mt='-80px' spacing={10}>
                        <Box height='auto'>
                            <Container ml='auto' as={Stack} maxW={'6xl'} py={16} color="white">
                                <Image ml='300px' width='500px' src={Aperti}></Image>
                            </Container>
                        </Box>
                        <Box height='auto'>
                            <Container as={Stack} maxW={'6xl'} py={10} color="white">
                                <Text mb={10} mr='250px' mt={10} textAlign="left"  >
                                    <Heading fontSize="24px">Apa Itu KIP Kuliah?</Heading>
                                    <br />
                                    <strong>KIP</strong> atau Kartu Indonesia Pintar adalah pengganti Beasiswa Bidikmisi yang  <br />
                                    disediakan oleh pemerintah melalui Deriktorat Jendral Pendidikan Tinggi.<br />
                                    <br></br>
                                    Beasiswa ini diperuntukkan kepada calon mahasiswa yang tidak mampu  <br />
                                    secara ekonomi tetapi memiliki potensi akademik yang sangat baik dan <br />
                                    mendapat rekomendasi dari sekolah.<br /><br />
                                    Beasiswa mencakup biaya kuliah, tunjangan buku, dan uang saku yang <br />
                                    diberikan setiap semester. Mahasiswa D3 akan mendapatkan beasiswa <br />
                                    selama 6 semester, sedangkan mahasiswa D4 dan S1 mendapatkan <br />
                                    selama 8 semester.
                                    <br>
                                </br>
                                <Button mt='10px' colorScheme='red'>Kunjungi</Button>
                                </Text>
                            </Container>
                        </Box>

                    </SimpleGrid>
                </Box >

            </Box >
            <Box
                bg={useColorModeValue('#01949A')}
                color={useColorModeValue('black')}

                backgroundSize="cover">
                <SimpleGrid columns={2} spacing={10}>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={10} color="white">
                            <Text mb={10} ml='300px' mt={10} textAlign="left"  >
                                <Heading fontSize="24px">Apa Itu KIP Kuliah?</Heading>
                                <br />
                                <strong>KIP</strong> atau Kartu Indonesia Pintar adalah pengganti Beasiswa Bidikmisi yang  <br />
                                disediakan oleh pemerintah melalui Deriktorat Jendral Pendidikan Tinggi.<br />
                                <br></br>
                                Beasiswa ini diperuntukkan kepada calon mahasiswa yang tidak mampu  <br />
                                secara ekonomi tetapi memiliki potensi akademik yang sangat baik dan <br />
                                mendapat rekomendasi dari sekolah.<br /><br />
                                Beasiswa mencakup biaya kuliah, tunjangan buku, dan uang saku yang <br />
                                diberikan setiap semester. Mahasiswa D3 akan mendapatkan beasiswa <br />
                                selama 6 semester, sedangkan mahasiswa D4 dan S1 mendapatkan <br />
                                selama 8 semester.
                                <br>
                                </br>
                                <Button mt='10px' colorScheme='red'>Kunjungi</Button>
                            </Text>
                        </Container>
                    </Box>
                    <Box height='auto'>
                        <Container as={Stack} maxW={'6xl'} py={16} color="white">
                            <Image width='500px' src={Pertamina}></Image>
                        </Container>
                    </Box>
                </SimpleGrid>
                <Box
                    bg={useColorModeValue('#01949A')}
                    color={useColorModeValue('black')}

                    backgroundSize="cover">

                    <SimpleGrid columns={2} mt='-80px' spacing={10}>
                        <Box height='auto'>
                            <Container ml='auto' as={Stack} maxW={'6xl'} py={16} color="white">
                                <Image ml='300px' width='500px' src={Tanato}></Image>
                            </Container>
                        </Box>
                        <Box height='auto'>
                            <Container as={Stack} maxW={'6xl'} py={10} color="white">
                                <Text mb={10} mr='250px' mt={10} textAlign="left"  >
                                    <Heading fontSize="24px">Apa Itu KIP Kuliah?</Heading>
                                    <br />
                                    <strong>KIP</strong> atau Kartu Indonesia Pintar adalah pengganti Beasiswa Bidikmisi yang  <br />
                                    disediakan oleh pemerintah melalui Deriktorat Jendral Pendidikan Tinggi.<br />
                                    <br></br>
                                    Beasiswa ini diperuntukkan kepada calon mahasiswa yang tidak mampu  <br />
                                    secara ekonomi tetapi memiliki potensi akademik yang sangat baik dan <br />
                                    mendapat rekomendasi dari sekolah.<br /><br />
                                    Beasiswa mencakup biaya kuliah, tunjangan buku, dan uang saku yang <br />
                                    diberikan setiap semester. Mahasiswa D3 akan mendapatkan beasiswa <br />
                                    selama 6 semester, sedangkan mahasiswa D4 dan S1 mendapatkan <br />
                                    selama 8 semester.
                                    <br>
                                </br>
                                <Button mt='10px' colorScheme='red'>Kunjungi</Button>
                                </Text>
                            </Container>
                        </Box>

                    </SimpleGrid>
                </Box >

            </Box >
        </Box >

    );
}

export default Beasiswa;