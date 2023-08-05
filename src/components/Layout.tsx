import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import i18n from '../i18n';  

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [text, setText] = useState<string>('English');
  const changeLanguage = (lng: string) => {
    setText('English')
    if(lng == 'ar') setText('Arabic')
    i18n.changeLanguage(lng);
  };

  return <>
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Stack spacing={{ sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems={'center'} justifyContent="space-between">
            <img loading="lazy" width={180} style={{ padding: '15px 0', width: '180px' }} alt="company-logo" src="https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2021/05/15084eba-33e0-4a8a-b74c-8a158d12b6b2/original/y2ZqILiIdB5rmdH5XuG6ujLRHRJbweiyMbSrsYjN.png" />
            <Button color="inherit" onClick={() => changeLanguage(i18n.language == 'en' ?'ar': 'en')}>
              {text}   
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar >
    <main>{children}</main>
  </>;
};

export default Layout;
