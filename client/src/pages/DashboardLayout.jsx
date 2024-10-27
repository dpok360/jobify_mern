import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, NavBar, SmallSidebar } from '../components';
import { DashboardProvider } from '../context/DashboardContext';
import { DarkThemeProvider } from '../context/DarkThemeContext';
import Loading from '../components/Loading';

function DashboardLayout() {
  const { user } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(isLoading);

  return (
    <DashboardProvider>
      <DarkThemeProvider>
        <Wrapper>
          <main className="dashboard ">
            <SmallSidebar />
            <BigSidebar />
            <div>
              <NavBar />
              <div className="dashboard-page ">
                {isLoading ? (
                  <Loading isLoading={isLoading} />
                ) : (
                  <Outlet context={{ user }} />
                )}
              </div>
            </div>
          </main>
        </Wrapper>
      </DarkThemeProvider>
    </DashboardProvider>
  );
}

export default DashboardLayout;
