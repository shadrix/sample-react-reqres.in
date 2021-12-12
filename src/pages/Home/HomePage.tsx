import { observer } from 'mobx-react'
import React, { Suspense } from 'react'
import { Container, Spinner, Tab, Tabs } from 'react-bootstrap'
import { useInjection } from '../../ioc/ioc.react'
import ownTypes from '../../ioc/ownTypes'
import HomePageStore, { TabsType } from '../../stores/HomePageStore'

const User = React.lazy(() => import('../../containers/User'))
const Users = React.lazy(() => import('../../containers/Users'))
const Login = React.lazy(() => import('../../containers/Login'))

const HomePage = observer(() => {
  const store = useInjection<HomePageStore>(ownTypes.homePageStore);
  
  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <Container className="pt-4 pb-4">
        <Tabs
          activeKey={store.currentTab}
          onSelect={(ev)=> {store.changeTab(ev)}}
          className="mb-3"
        >
          <Tab eventKey={TabsType[TabsType.User]} title="User">
            {store.currentTab === `${TabsType[TabsType.User]}` && <User />}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Users]} title="Users List">
            {store.currentTab === `${TabsType[TabsType.Users]}` && <Users />}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Login]} title="Login">
            {store.currentTab === `${TabsType[TabsType.Login]}` && <Login />}
          </Tab>
        </Tabs>
      </Container>
    </Suspense>
  )
});

export default HomePage;
