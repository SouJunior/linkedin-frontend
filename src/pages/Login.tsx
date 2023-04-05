import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import LoginCard from '../components/LoginCard';

import '../App.css';

const Login = () => {
    return (
        <main className="bg-hero-pattern bg-cover bg-no-repeat w-full h-screen md:w-full overflow-y-auto">
            <div className="container max-w-screen-xl m-auto h-screen">
                <section className="flex flex-col justify-between items-center h-screen lg:flex-row lg:mb-20">
                    <div className="titles flex flex-col items-center mb-0 mx-auto mt-10 lg:items-start lg:mt-0 lg:mb-36">
                        <img
                            className="max-w-md"
                            src={extendedLogoImg}
                            alt="Logo-sou-junior-square"
                        />
                        <div className="max-w-xl text-center lg:text-start">
                            <h1 className="text-white text-7xl font-canada leading-tight my-9">
                                O <b>Júnior</b> de hoje é o <b>Sênior</b> de
                                amanhã!
                            </h1>
                        </div>
                        <Button
                            background="outline"
                            border="white"
                            className="w-[283px] h-[67px] text-2xl"
                            onClick={() =>
                                window.open(
                                    'https://www.soujunior.tech',
                                    '_blank',
                                )
                            }
                        >
                            Saiba mais
                        </Button>
                    </div>
                    <div className="login-card flex mx-auto">
                        <LoginCard />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
