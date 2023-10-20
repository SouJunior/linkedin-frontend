import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { toast } from 'react-toastify';
import { EmailIcon } from '../../EmailIcon';
import { PasswordIcon } from '../../PasswordIcon';
import { PopUpRegisterSucess } from '../PopUpRegisterSuccess';
import { normalizeCnpjNumber } from '../../../Maks/mask';

import {
    schemaCompanyLoginForm,
    schemaCompanyRegisterForm,
} from '../../../validations/CompanyValidations/index';

import {
    MessageError,
    InputContainer,
    IconWrapper,
    Input,
    Label,
    TermsLink,
    MessageError2,
    LoginLink,
    CheckboxInput,
    CheckboxContainer,
    SecondDivider,
    ButtonContainer,
    LoginButton,
    RegisterButton,
    RegisterSubmitButton,
    Form,
    Title,
    Divider,
} from '../styles';

export const CompanyForms = (props: any): JSX.Element => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(false);
    const [otherErrors, setOtherErrors] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [popup, setPopup] = useState(false);

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);

    // Recebe o tipo de usuário
    const companyType = props.type;

    // Define qual formulário deverá ser validado
    const getFormValidation =
        isLogin === true ? schemaCompanyLoginForm : schemaCompanyRegisterForm;

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(getFormValidation),
    });

    //Controla a mensagem de erro ao digitar o nome da empresa
    const [nameValue, setNameValue] = useState('');
    const [nameError, setNameError] = useState('');

    //Aplica a máscara para o CPNJ
    const cnpjValue = watch('registerCnpj');

    useEffect(() => {
        setValue('registerCnpj', normalizeCnpjNumber(cnpjValue));
    }, [cnpjValue]);

    // Realiza loging e manipula os dados
    async function handleFormOnSubmit() {
        setIsFormSubmitted(true);

        // confere se existe usuário e se está logado
        try {
            // Vai receber os dados do contexto para verificação
            const data = await auth.login(email, password, companyType);

            toast.success(
                `Login efetuado com sucesso ${data.info.companyName}!`,
                {
                    position: 'top-right',
                    theme: 'colored',
                },
            );

            navigate('/company-portal');
        } catch (err: any) {
            if (err.response.status === 400) {
                setError(true);
            } else {
                setOtherErrors(true);
            }
            // TODO: Tratar os erros com as mensagens do backend
            //setHasError(data.message);
        }
    }

    const handleClearErrorMessage = () => {
        setError(false);
    };

    // =================================================
    // Validação e manipulação do formulário de cadastro
    // =================================================

    // Monitora os input enquanto preechidos

    const registerCheck: string[] = watch([
        'registerName',
        'registerEmail',
        'registerCnpj',
        'registerPassword',
        'passwordConfirm',
    ]);

    const handlePopUp = () => setPopup(!popup);

    const closePopup = () => {
        setPopup(false);
        navigate('/login');
    };

    // Manipula os dados e envia a requisição
    async function handleRegisterSubmit() {
        const cnpj: string = registerCheck[2].replace(/[^\d]+/g, '');

        const registerData = await auth.registerCompany(
            registerCheck[0],
            registerCheck[1],
            cnpj,
            registerCheck[3],
            registerCheck[4],
        );

        try {
            handlePopUp();
            if (registerData) {
                setIsLogin(true);
            }
        } catch (error: any) {
            setHasError(registerData.message);
        }
    }

    return (
        <>
            {isLogin ? (
                <Title>Empresa</Title>
            ) : (
                <Title>Cadastro de empresa</Title>
            )}

            <Divider style={{ marginBottom: isLogin ? '32px' : '20px' }} />
            {/* renderiza se existe(true) um formulário do tipo login */}
            {isLogin ? (
                <Form
                    id="login-form"
                    onSubmit={handleSubmit(handleFormOnSubmit)}
                >
                    <InputContainer>
                        <div>
                            <Input
                                type="text"
                                {...register('email', {
                                    onChange: (e) => setEmail(e.target.value),
                                })}
                                placeholder="E-mail"
                                aria-label="Email"
                                onClick={handleClearErrorMessage}
                            />
                            <IconWrapper>
                                <EmailIcon />
                            </IconWrapper>
                        </div>
                        <MessageError>
                            {errors.email && <>{errors.email.message}</>}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <div>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', {
                                    onChange: (e) =>
                                        setPassword(e.target.value),
                                })}
                                placeholder="Senha"
                                aria-label="Senha"
                                onClick={handleClearErrorMessage}
                            />
                            <IconWrapper
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: 'pointer' }}
                            >
                                <PasswordIcon />
                            </IconWrapper>
                        </div>
                        <MessageError>
                            {errors.password && <>{errors.password.message}</>}
                        </MessageError>
                        <MessageError>
                            {error && <>e-mail ou senha não conferem</>}
                        </MessageError>
                        <MessageError>
                            {otherErrors && (
                                <>desculpe, algo inesperado aconteceu</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <CheckboxContainer>
                            <Label>
                                {/* TODO: monitorar também o valor deste campo, pois será enviado à API */}
                                <CheckboxInput id="default-checkbox" value="" />
                                Me mantenha conectado
                            </Label>
                            <a href="confirm-email?type=company">
                                Esqueci minha senha
                            </a>
                        </CheckboxContainer>
                    </InputContainer>

                    <SecondDivider />

                    <ButtonContainer>
                        <LoginButton
                            type="submit"
                            id="submit-button"
                            disabled={false}
                        >
                            Entrar
                        </LoginButton>

                        <RegisterButton onClick={() => setIsLogin(false)}>
                            Criar conta
                        </RegisterButton>
                    </ButtonContainer>
                </Form>
            ) : (
                // renderiza se isLogin === false
                <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
                    <InputContainer>
                        <Input
                            type="text"
                            {...register('registerName')}
                            placeholder="Nome da empresa"
                            aria-label="Nome da empresa"
                            onChange={(e) => {
                                const { value } = e.target;
                                setNameValue(value);

                                schemaCompanyRegisterForm
                                    .validateAt('registerName', {
                                        registerName: value,
                                    })
                                    .then(() => {
                                        setNameError('');
                                    })
                                    .catch((err) => {
                                        setNameError(err.message);
                                        console.log(nameError);
                                    });
                            }}
                        ></Input>
                        <MessageError>
                            <MessageError>
                                {errors.registerName ? (
                                    <>{errors.registerName.message}</>
                                ) : (
                                    <>{nameError}</>
                                )}
                            </MessageError>

                            {/* {errors.registerName && (
                                <>{errors.registerName.message}</>
                            )}
                            {nameError && <>{nameError}</>} */}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <div>
                            <Input
                                type="text"
                                {...register('registerEmail')}
                                placeholder="E-mail"
                                aria-label="Email"
                            ></Input>
                            <IconWrapper>
                                <EmailIcon />
                            </IconWrapper>
                        </div>
                        <MessageError>
                            {errors.registerEmail && (
                                <>{errors.registerEmail.message}</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <Input
                            type="text"
                            {...register('registerCnpj')}
                            placeholder="CNPJ da empresa"
                            aria-label="CNPJ da empresa"
                        ></Input>
                        <MessageError>
                            {errors.registerCnpj && (
                                <>{errors.registerCnpj.message}</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <div>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                {...register('registerPassword')}
                                placeholder="Senha"
                                aria-label="Senha"
                            />
                            <IconWrapper
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: 'pointer' }}
                            >
                                <PasswordIcon />
                            </IconWrapper>
                        </div>
                        <MessageError>
                            {errors.registerPassword && (
                                <>{errors.registerPassword.message}</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <div>
                            <Input
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register('passwordConfirm')}
                                placeholder="Confirme sua senha"
                                aria-label="Senha"
                            />
                            <IconWrapper
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                <PasswordIcon />
                            </IconWrapper>
                        </div>
                        <MessageError>
                            {errors.confirmPassword && (
                                <>{errors.confirmPassword.message}</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            <CheckboxInput {...register('privacyTerms')} />
                            <TermsLink>
                                {/* TODO: Direcionar para as páginas correspondentes após criadas */}
                                Li e aceito os <a href="/">Termos de Uso</a> e{' '}
                                <a href="/">Política de Privacidade</a>
                            </TermsLink>
                        </Label>
                        <MessageError2>
                            {errors.privacyTerms && (
                                <>{errors.privacyTerms.message}</>
                            )}
                        </MessageError2>
                    </InputContainer>

                    <RegisterSubmitButton
                        type="submit"
                        id="register-submit-button"
                        disabled={false}
                    >
                        Criar conta
                    </RegisterSubmitButton>
                    <LoginLink>
                        Já tem conta? {/* redireciona se isLogin === true */}
                        <button onClick={() => setIsLogin(true)}>
                            Faça o Login
                        </button>
                    </LoginLink>
                </Form>
            )}
            {popup ? (
                <PopUpRegisterSucess
                    email={registerCheck[1]}
                    close={closePopup}
                />
            ) : null}
        </>
    );
};
