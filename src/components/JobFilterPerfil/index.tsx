import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Search from '../../assets/imgs/search.svg';
import Location from '../../assets/imgs/location.svg';
import * as S from './styles';
// import SwitchButton from '../SwitchButton'; 
// import { AuthContext } from '../../contexts/Auth/AuthContext'

const JobFilterPerfil = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '',);
    const [location, setLocation] = useState(searchParams.get('location') || '',);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    // const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    // const auth: any = useContext(AuthContext);
    // const userId = auth.user.id;
    
    // Esperando verificação do código
    
    // useEffect(() => {
    //     setIsSwitchChecked(false);
    // }, [searchTerm, location]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pathname !== '/job') {
            setSearchParams({});
        };

        navigate(`/candidate-portal/job?search=${searchTerm}&location=${location}`);
    };

    return (
        <S.Container onSubmit={handleSubmit}>
            <S.BoxInput>
                <S.Input
                    type="text"
                    placeholder="Cargo, empresa, palavra-chave"
                    maxLength={30}
                    value={searchTerm}
                    onChange={(event: any) => setSearchTerm(event.target.value)}
                />

                <S.BtnIcon name="search btn" onClick={handleSubmit}>
                    <img src={Search} alt="search btn" />
                </S.BtnIcon>
            </S.BoxInput>

            <S.BoxInput className="location">
                <S.Input
                    type="text"
                    placeholder="Local"
                    maxLength={30}
                    value={location}
                    onChange={(event: any) => setLocation(event.target.value)}
                    className="location"
                />

                <S.BtnIcon className="location" name="location btn">
                    <img src={Location} alt="location btn" />
                </S.BtnIcon>

            </S.BoxInput>
                
            {/* <SwitchButton
                checked={isSwitchChecked}
                onChange={(event: any) => setIsSwitchChecked(event.target.checked)}
                keyword={searchTerm}
                location={location}
                userId={userId}
            /> */}
        </S.Container>
    );
};

export default JobFilterPerfil;
