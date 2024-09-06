import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from './styles';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
	const navigate = useNavigate();

	const schema = yup
		.object({
			name: yup.string().required(),
			email: yup.string().email('Digite um e-mail válido!').required('O email é obrigatório!'),
			password: yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres!').required('Digite uma senha!'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
				.required('Confirme a senha!'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
				toast.success('Conta criada com sucesso!');
			} else if (status === 400) {
				toast.error('Email já cadastrado! Faça o login');
			} else {
				throw new Error();
			}

			console.log(status);
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error('Falha no Sistema! Tente novamente');
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburguer" />
			</LeftContainer>
			<RightContainer>
				<Title> Criar conta </Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label>Nome</label>
						<input type="text" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Confirmar Senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors?.confirmPassword?.message}</p>
					</InputContainer>
					<Button type="submit">Cadastrar</Button>
				</Form>
				<p>
					Já possui conta? <Link to="/login">Clique aqui.</Link>
				</p>
			</RightContainer>
		</Container>
	);
}
