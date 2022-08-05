import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import ReferButton from './custombutton/ReferButton';
import LoginButton from './custombutton/LoginButton';
import IconButton from './custombutton/IconButton';
import {useNavigate} from 'react-router-dom'

const Head = styled(AppBar)`
   background:#ffffff;
   height:60px;
   box-shadow: 0 0 8px #bdc3c7;
`;

const Image = styled('img')({
     marginLeft:110,
     width:180
});

const Container = styled(Box)`
   display:flex;
   margin-left:45%;
`;
  

function Header() {
    const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/home');
  }

    const logoUrl= 'data:image/png;base64,UklGRqoJAABXRUJQVlA4WAoAAAAQAAAABgEAMQAAQUxQSEoEAAABHIEAwf82DxExAWCfsCJbrQRdNIwDfGAIRbGADBzERlSw753cShX5jIgJgBXbVujmXAdIQAImrg8kIIE6QAQ+cBALSEDC/oBHkzYCImIC8KJ5zNqKBotY1P4Gic1i7I9GcbbHi7U38oy6Ak/WFdCsK/BkXQEZdQe87oCuSzDqDlhdgrwEVofIOceLmHP2b+e5Fg/vsDGG/ykbY7iEcQpgpacMjO9WFsce3wDkvwVkCesgzPBfYh/9j1WeZ/wWWidh/JcG829lYI3eF0x9Cz8L7Z+Mv2YvmFGSKvlrjMOQ/wd/LQBFb/83eZoVf+Wtj56jZF7rj2+h1OpbKLXW4A1Ytda0hdLHaPlgXmuWvI+er+I7gtfecrzw0qtfeGm9+k0srVf/RZ2GGe7i4DizVIC1FWBtFeiV5yxZ4zzz1oE82Ge8CMCMd2VxrKfS2Uc4xMFx+ikOjjN/rQ4wruLi2RUBkqQB4JIGkO/sxWV5eB4XNgB6uqg858Nz29LiOW9x8ly+VXwB1JsJvLI3YAUNoEiBvUpaQIx1AKvWmlQBRm0TID2sXieAP8k3mC0eEjA9hDynTsOjTyBINmGVGHzCipJNWDUGn0D6VnEC+FMGZpBUgawKdJkfhuTAkFSBKUlhAV1SXMA4zSiFBdQLlQPQTLIBM2oPpyZJDmQpAy6Z4oImZSBLUlwwvpV8W/FhAM3MLAFdDkypw4QVVIBy5wBJkiqwwmFIsgH0G8U+DwwpAE3PW94MKLIBL5kkG7BkHaZ2a7DCt1IBmOW0uO7SAoImZMDVgXhlP5skmQOkT0jyNgFcDvi7qmxB17EA0V7QD8pAekq+uUkdYJ64H1IDPAFhQNOCl+46MDcd/EOSKtA/Bvyc8mFdOOBPgy92hRfnIS2g18ckOdAKDBV4JaD9ov05WzD+QrubF/nO+XyX4roYQNP1gjEgKwEF8DsVgLDlLXzAHsaWgPyBCf1gP0CwF4xTAdKT8ek2+UUFVtgs2dZhAVFasGDqF2krkqwDL73NSguHCDTZgnGyd3RY4fCCl6zBCpsNmHrCosM+1aewgOkW8qRtmf0lqbH3i5U8ygYw3UIDyO/LMLOZxRcQZQ3IJrPS3iAHmsmsAFlyoJnMClBvki0YrD+ocJslhbU1yfzgB+c4g+Li8qW32WCfE6BJCgvo5WdAeYN1YNSfAUxJ1oBZfzoww42xGYPCfFC9GFGSxuaSwrZ0tHmgSmk+veL7FPt27NrT4jzTGxQ6jzNKkjUeZ9SFSHIFKBTng9I4jKxjAab2AfSTYt9GkhT73F5F+oDkfW0j6xz7tmrQO8zya5s16JzHtmrQDcS47L1PJo9Bn7bgKegxegr6g8lT0HVKUR8MnqKuQ0pRvxSRZAr0VcSYtDEABo+juckS6K4ujvm0B7oYpqLBuvZNRYs1d8WDLo89jkZbvBeKTotYvJMm6BVELP61hqHp6jF/WDlc0WVWUDggOgUAAPAeAJ0BKgcBMgA+kT6aSKWjoqEsUnwAsBIJQGSr/DP8QESYNvmn3KQ7g/wLf8Bu5Odf9Iu8peiB0q/+LyVDzD2VWoz8Rp6/GzvPbrbzF9UM/uHnlZxfx3+/+wJ/Kv7l1LPQP/UsE5p5qjbVNELRpqrUOeG0WgzRb8b4zP9XAphi7Ht7Zm2RFP85+6fApNeacV31Te1uwJd+hwA4thGmB3DzTRszuAFz0nPRnIROv8zNUB7UKuR0EbS046mA6xoT5eliFrCirhfU1NvKvbg1E7Hr928TGaWMLlp7QTgn4td6k9MNR6clVB3EqC6wDSbC6yB4nAjjeqf3vFoHUEL+KQAA/ulPvSLsNlpiyb5UPSBVal3tgq9fp2sltCrXWjihZv/uXshW+baFFIUTR9tvSZitCVCqwohaBt5d6zI53Hfxy+4bKjt6SXCHN9QJzsjD1jP5W3E7eDR2XC/OUKXZSsZwkX81NFWWDsq1L/gACu+0VRYJe/agHyfVEPn0xUOeya+3IUnzwoBEIFsA2E8Y+53Tq2YkMrU3gR4hLyPM0mpdoSuQlQr1XPCAvXoscYqIi7O2TnK6trw3I7fsk7rBYa3y3i7T0CQ+XkVpo+IXzUxQQ2HVRTw6+04cy5tKoOkPCDEl+8FTjTyoE5pKF7MYDxQMWBNfRYp7yTLF/Lv0vMLWi9Syd5JfUZXJt1cTNzNmYq9s7KsWYL23BlULap0bw65tAwAEiaQft6Y3ftApTdHpjmTr44ujyUqdyFF1iBPHvJQF9uUA9mqcko3l9qLhS/6G6e30N+Vj/eXgx+Tl0xyIF6edIj0sYGUpcSt/+1GUJcbocbV+5ZlIhogoJ/NaHHloFBH3yE37UC8LeyTSirVpREJ1jV700jgPcf+k8d7J1WnWkZNbuym3AOkzVRPpm4xEHDpEbVnC8ebkfmKzg8CCYZpxmu7PWnJBjcE7cYCtp7TetOXHIyIPJlH3ly87hoKp6VeHL1ZoIBwtu53s6XMMgLcAg3puLvRAC0GCv0tjFVXYqY+0SZpMxjGmXOidZNbN8MIiVBT/3cgNT5Q+U/7++pbdZR9x2oCDKvV8GVxrIv53JMjtrNOw5wiFT+cmAbXYBXSc+vc+k/mB6V96L5DTSRhiIP0XDEwTz7LrhMf9QaxL/J0JUB1iuSf1kPdi3vG0472SlVpiNPpP1AbAg8LEofq4JdMAbFnpz0/x0P4sWOtzhhbkpAPxo1WmCCmzyc9jxgjt5y+jRqTS3Fgnoz1YVAU24BrzE5tf2xPuwN6eYeWyFA8aH81DON2rJUnItLNHKhVkKQlxSqa5PIWdJ5f982DGfHue/jmfdFfcA2NNw5P3+wtf/E0//6Pl8E+UkstGorROLyrgSaq07U8LlFGWXL9xb6a5Hs7CWlUPX5n9kb4NHRFJzKhtnY+tbSVn0ycPg+2kB1dja5EpqSTaCj2x8/QCiwhXPLmbegt/CPN4Y70dHJ9H8GWO8MBkhBNI/xXYJhZXoZb6Hm7RV0Rbxgw/rhwfvmPHTpKLHQIv4ABn2zJ7Ay1Qi74oyhtsVS3cxvWhkd8h+zKl3DgZXHzqXHvF5EeHeN4xR3231h0JaKkeXdYxfVjiU6hMOZaKpxOTVcmDo+NHSel6F3J5O+kjS7h4rc1DRMmFEij5VCnssMF9oKReWic5Exyf3zNFyneVOqwd2c91MNfpx5toCF/HPR/yKKwymrLyffJqwF+ByHgwfqJN2oJ6v8kPdL4XWyBzQYlG/48eOcMRPTP9IpcExIT3AAAAAAAAAAAAAA==';
  return (
    
        <Head position="fixed">
            <Toolbar>
                <Box>
                    <Image src={logoUrl} alt="newton logo" onClick={handleClick} />
                </Box>
                <Container>
                    <ReferButton/>
                    <IconButton/>
                    <LoginButton/>
                </Container>

            </Toolbar>
        </Head>
    
  )
}

export default Header