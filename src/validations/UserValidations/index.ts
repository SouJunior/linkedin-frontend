import * as yup from 'yup';

export const schemaUserLoginForm = yup.object().shape({
    // valida email
    email: yup
        .string()
        .required('O campo Email é obrigatório')
        .email('Email precisa ser válido. Exemplo: email@gmail.com'),
    // Valida password
    password: yup
        .string()
        .required('O campo Senha é obrigatório')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .max(20, 'A senha precisa ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
            'A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc...',
        ),
});

export const schemaUserRegisterForm = yup.object().shape({
    // Valida nome
    registerName: yup.string().required('O campo de nome é obrigatório'),

    registerEmail: yup
        .string()
        .required('O campo Email é obrigatório')
        .email('Email precisa ser válido. Exemplo: email@gmail.com'),

    // valida password
    registerPassword: yup
        .string()
        .required('O campo Senha é obrigatório')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .max(20, 'A senha precisa ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
            'A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc...',
        ),

    // Confirma password
    confirmPassword: yup
        .string()
        .required('Confirme sua senha')
        .oneOf(
            [yup.ref('registerPassword'), null],
            'As senhas precisam ser iguais',
        ),

    // Valida o input type checkbox
    privacyTerms: yup
        .bool()
        .required('Você deve aceitar os termos de privacidade para continuar')
        .oneOf(
            [true],
            'Você deve aceitar os termos de privacidade para continuar',
        ),
});