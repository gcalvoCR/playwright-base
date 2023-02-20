import { Logo } from '../components';
import { LogoComponent } from '../components/logo.component';
import { Locator, URLPath } from '../types';

export interface HomePageLocators{
    URL: URLPath;
    logo: LogoComponent;
}

const HomePage: HomePageLocators = {
    URL: '/',
    logo: Logo
};

export default HomePage;
