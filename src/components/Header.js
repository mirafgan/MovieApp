import {Layout ,Menu } from "antd"
import styled from "styled-components";


function Header() {
    const navs = ['Nese', 'Salam', 'Sagol'].map((item) => ({  label: `nav ${item}` }))
    let {Header} = Layout;
    Header = styled.header`margin-bottom: 5rem;`
    return (
    <Header >
          <div className='logo' />
          <Menu items={navs} mode="horizontal" theme='dark' style={{padding: "0 104px"}} />
      </Header>
  )
}

export default Header