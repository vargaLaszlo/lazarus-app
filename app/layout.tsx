import React from 'react';
import StaticNavbar from '@/components/static-navbar/static-navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
 
export default function Document({children} : {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <StaticNavbar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}